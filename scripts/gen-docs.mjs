#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import OpenAI from 'openai'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
if (!process.env.OPENAI_API_KEY) {
    console.error('Missing OPENAI_API_KEY')
    process.exit(1)
}

// 1) get the changed files compared to HEAD (staged for commit or latest commit)
const against = process.argv.includes('--cached') ? '--cached' : 'HEAD'
const changed = execSync(`git diff --name-only ${against}`, { encoding: 'utf8' })
    .split('\n')
    .filter(f =>
        f &&
        !f.startsWith('content/docs/') &&
        (/\.(vue|ts|js|md|json|yaml|yml)$/.test(f))
    )

if (changed.length === 0) {
    console.log('No relevant changes detected')
    process.exit(0)
}

// 2) read file contents and build a compact context
const files = changed.map(p => {
    const body = readFileSync(p, 'utf8')
    // keep files under 25k chars to control cost; truncate with context note
    const max = 25000
    const truncated = body.length > max
        ? body.slice(0, max) + '\n\n/* truncated for length */'
        : body
    return { path: p, body: truncated }
})

function mdPathForSource(p) {
    // map source paths to docs paths
    if (p.startsWith('components/')) {
        const name = p.split('/').pop().replace(/\.vue$/, '')
        return `content/docs/components/${name}.md`
    }
    if (p.startsWith('composables/')) {
        const name = p.split('/').pop().replace(/\.(ts|js)$/, '')
        return `content/docs/composables/${name}.md`
    }
    if (p.startsWith('pages/')) {
        return `content/docs/pages.md`
    }
    return `content/docs/architecture.md`
}

function promptFor(file) {
    const isVue = file.path.endsWith('.vue')
    const isComposable = /composables\/.+\.(ts|js)$/.test(file.path)
    const isPages = file.path.startsWith('pages/')

    if (isVue) {
        return `You are a senior Nuxt 3 technical writer.
Generate or update Markdown docs for the Vue SFC below.
Sections: Description, Props table (name, type, required, default), Emits, Slots, Example usage, Accessibility notes, Gotchas.
Output pure Markdown only.
File: ${file.path}

\`\`\`vue
${file.body}
\`\`\``
    }

    if (isComposable) {
        return `You are a senior Nuxt 3 technical writer.
Document the composable below.
Sections: Summary, Signature, Params, Returns, Example, Edge cases, Related.
Output pure Markdown only.
File: ${file.path}

\`\`\`ts
${file.body}
\`\`\``
    }

    if (isPages) {
        return `Create or update a "Pages & Routes" catalogue from this repo snippet.
Summarize each route (path, purpose, key components, data sources, SEO/meta).
Keep each route <= 2 short paragraphs.
Output pure Markdown for content/docs/pages.md.

Changed pages:
${files.filter(f => f.path.startsWith('pages/')).map(f => f.path).join('\n')}`
    }

    return `Update the Architecture Overview to reflect changes in this file.
Focus on routing, rendering mode, data flow, runtime config, and content pipeline.
Output pure Markdown for content/docs/architecture.md.

File: ${file.path}

\`\`\`
${file.body}
\`\`\``
}

async function generate(markdownPrompt) {
    // Using the OpenAI Responses API via the official SDK
    const res = await client.responses.create({
        model: 'gpt-5-mini',
        input: markdownPrompt
    })
    // text output helper
    const text = res.output_text ?? res.content?.map(c => c.text ?? '').join('') ?? ''
    return text.trim()
}

const outputsByTarget = new Map()

for (const f of files) {
    const target = mdPathForSource(f.path)
    const prompt = promptFor(f)
    const md = await generate(prompt)

    const prev = outputsByTarget.get(target) || ''
    outputsByTarget.set(target, prev + (prev ? '\n\n---\n\n' : '') + md)
}

// 3) write files to content/docs/*
for (const [target, md] of outputsByTarget.entries()) {
    const dir = dirname(target)
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
    writeFileSync(target, md, 'utf8')
    console.log('Updated', target)
}

// 4) optionally stage the docs so they’re included in the same commit
try {
    execSync('git add content/docs', { stdio: 'inherit' })
} catch {}
