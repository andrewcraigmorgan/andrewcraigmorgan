import { Resend } from "resend";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig();

    try {
        const resend = new Resend(config.resendApiKey);

        const { data, error } = await resend.emails.send({
            from: `${config.public.resendSenderEmail}`,
            to: [`${config.public.resendRecipientEmail}`],
            subject: `New Message from ${body.name}`,
            html: `
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Message:</strong> ${body.message}</p>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: error.message };
        }

        return { data };
    } catch (err) {
        console.error("Server Error:", err);
        return { error: err.message };
    }
});
