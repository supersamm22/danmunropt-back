const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: "gmail",
    //secure: process.env.EMAIL_SMTP_SECURE, // lack of ssl commented this. You can uncomment it.
    auth: {
        user: "casseglass2021",
        pass: "Pearlis1"
    }
});

exports.send = function (from, to, subject, html) {
    return transporter.sendMail({
        from: from, // sender address e.g. no-reply@xyz.com or "Fred Foo 👻" <foo@example.com>
        to: to, // list of receivers e.g. bar@example.com, baz@example.com
        subject: subject, // Subject line e.g. 'Hello ✔'
        html: html // html body e.g. '<b>Hello world?</b>'
    });
};
