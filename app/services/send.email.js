"use strict";
const nodemailer = require("nodemailer");


async function send(email) {
    console.log (email);
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
        user: testAccount.user, 
        pass: testAccount.pass, 
        },
    });
    let info = await transporter.sendMail({
        from: '"Booking Tester" <bookingtester@company.com>', 
        to: email,
        subject: "Registration Successful ✔", 
        text: "You have successfully registered", 
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

exports.sendEmail = (email) => {
    send(email).catch(console.error);
}

