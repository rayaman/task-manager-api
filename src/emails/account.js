const sgMail = require("@sendgrid/mail")

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "task-app@pcrebels.com",
        subject: "Welcome",
        text: `Welocome to the app, ${name}. Let me know if you have any questions.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "task-app@pcrebels.com",
        subject: "Farewell and thanks for all the fish",
        text: `It's sad to see you go, ${name}. Please let us know how we could improve our service.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}