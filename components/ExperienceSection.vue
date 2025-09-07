<template>
    <section class="experience" id="experience" aria-labelledby="experience-title">
        <div class="experience__header">
            <h2 class="experience__title" id="experience-title">Experience</h2>
            <a
                v-if="cvUrl"
                class="experience__cv-link"
                :href="cvUrl"
                target="_blank"
                rel="noopener"
            >
                Download CV (PDF)
            </a>
        </div>

        <ul class="experience__list" role="list">
            <li class="experience__item">
                <div class="experience__item-head">
                    <h3 class="experience__role">Lead Developer — Mtc Media</h3>
                    <span class="experience__dates">October 2011 – Present</span>
                </div>
                <ul class="experience__bullets" role="list">
                    <li>Developed solutions across multiple platforms, including bespoke builds and large-scale WordPress/Laravel systems</li>
                    <li>Scoped and quoted projects for a range of client budgets and requirements</li>
                    <li>Key client point of contact across diverse sectors</li>
                    <li>Championed internal development practices and tooling</li>
                    <li>Recruited, mentored, and trained developers</li>
                    <li>Led redevelopment of the company website</li>
                </ul>
            </li>

            <li class="experience__item">
                <div class="experience__item-head">
                    <h3 class="experience__role">Freelance Developer — I Design Websites</h3>
                    <span class="experience__dates">January 2004 – October 2011</span>
                </div>
                <ul class="experience__bullets" role="list">
                    <li>Built custom WordPress sites for local businesses</li>
                    <li>Maintained client relationships later merged into mtc upon joining</li>
                </ul>
            </li>

            <li class="experience__item">
                <div class="experience__item-head">
                    <h3 class="experience__role">Store Manager — Paradise Computers</h3>
                    <span class="experience__dates">August 2007 – September 2008</span>
                </div>
                <ul class="experience__bullets" role="list">
                    <li>Managed two repair stores in Arbroath and Montrose</li>
                    <li>Diagnosed and resolved software/hardware issues</li>
                    <li>Oversaw stock control, cash flow, and operations</li>
                    <li>Introduced a computerised management system</li>
                </ul>
            </li>

            <li class="experience__item">
                <div class="experience__item-head">
                    <h3 class="experience__role">Technical Support — The Computer People</h3>
                    <span class="experience__dates">January 2004 – August 2007</span>
                </div>
                <ul class="experience__bullets" role="list">
                    <li>Provided on-site support, diagnosing and resolving hardware and software issues</li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script setup>
const props = defineProps({
    cvUrl: {
        type: String,
        required: false,
        default: ''
    }
})
</script>

<style lang="less" scoped>
.experience {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
    color: var(--lightTextColour);

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }

    &__title {
        font-size: 28px;
        margin: 0;
        letter-spacing: 0.3px;
    }

    &__cv-link {
        display: inline-block;
        font-size: 14px;
        text-decoration: none;
        padding: 8px 12px;
        border: 1px solid rgba(255,255,255,0.25);
        border-radius: 8px;
        transition: background 0.2s ease, border-color 0.2s ease;
        color: inherit;

        &:hover {
            background: rgba(255,255,255,0.06);
            border-color: rgba(255,255,255,0.45);
        }
    }

    &__list {
        list-style: none;
        margin: 0 0 24px;
        padding: 0;
    }

    &__item {
        border-top: 1px solid rgba(255,255,255,0.12);
        padding: 18px 0;

        &:last-child {
            border-bottom: 1px solid rgba(255,255,255,0.12);
        }
    }

    &__item-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 8px;
    }

    &__role {
        font-size: 18px;
        margin: 0;
    }

    &__dates {
        font-size: 14px;
        opacity: 0.8;
        white-space: nowrap;
    }

    &__bullets {
        margin: 8px 0 0;
        padding-left: 18px;

        li {
            margin: 6px 0;
            line-height: 1.5;
        }
    }

    &__split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        margin-top: 28px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    &__subtitle {
        font-size: 18px;
        margin: 0 0 8px;
    }

    &__edu,
    &__refs {
        margin: 0;
        padding-left: 18px;

        li {
            margin: 8px 0;
            line-height: 1.5;
        }

        a {
            color: inherit;
            text-decoration: underline;
            text-underline-offset: 3px;

            &:hover {
                opacity: 0.85;
            }
        }
    }
}
</style>
