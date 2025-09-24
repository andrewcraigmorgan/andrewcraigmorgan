<template>
    <div class="contactFormWrapper">
        <form @submit.prevent="handleFormSubmission">
            <div>
                <label for="name">Name</label>
                <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    :class="{ invalid: $v.name.$error }"
                />
                <span v-if="$v.name.$error" class="error">Name is required.</span>
            </div>

            <div>
                <label for="email">Email</label>
                <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    :class="{ invalid: $v.email.$error }"
                />
                <span v-if="$v.email.$error" class="error">Invalid email address.</span>
            </div>

            <div>
                <label for="message">Message</label>
                <textarea
                    v-model="form.message"
                    id="message"
                    placeholder="Your Message"
                    :class="{ invalid: $v.message.$error }"
                ></textarea>
                <span v-if="$v.message.$error" class="error">Message is required.</span>
            </div>

            <button type="submit" :disabled="$v.$invalid">Send Message</button>

            <p v-if="successMessage" class="success">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useVuelidate } from '@vuelidate/core'
import { required, email } from "@vuelidate/validators"

// Form state
const form = ref({
    name: "",
    email: "",
    message: "",
})

// User feedback
const successMessage = ref("")
const errorMessage = ref("")

// Vuelidate rules
const rules = {
    name: { required },
    email: { required, email },
    message: { required },
}

const $v = useVuelidate(rules, form)

// Submission handler
const handleFormSubmission = async () => {
    $v.value.$touch()
    if ($v.value.$invalid) {
        return
    }

    try {
        const { error } = await useFetch("/api/send-email", {
            method: "POST",
            body: form.value,
        })

        if (error.value) {
            throw new Error(error.value.data?.message || "Failed to send message.")
        }

        successMessage.value = "Your message has been sent."
        errorMessage.value = ""
        form.value = { name: "", email: "", message: "" }
        $v.value.$reset()
    } catch (error) {
        console.error("Form submission error:", error)
        successMessage.value = ""
        errorMessage.value = "Failed to send your message. Please try again later."
    }
}
</script>

<style lang="less" scoped>
.contactFormWrapper {
    padding: 40px 0;

    form {
        max-width: 600px;
        margin: auto;

        div {
            margin-bottom: 1rem;

            label {
                display: block;
                margin-bottom: 0.5rem;
            }

            input,
            textarea,
            button {
                width: 100%;
                padding: 0.5rem;
                margin-top: 0.5rem;
            }

            :deep(.invalid) {
                border-color: red;
            }

            .error {
                color: red;
                font-size: 0.9rem;
            }

            .success {
                color: green;
                font-size: 0.9rem;
            }
        }
    }
}
</style>
