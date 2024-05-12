const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com', // replace with your Gmail username
        pass: 'your_password' // replace with your Gmail password
    }
});

// Email options
let mailOptions = {
    from: 'paramasivan654@gmail.com', // sender address
    to: 'livewireform@gmail.com', // list of receivers
    subject: 'Test Email', // Subject line
    text: 'Hello, this is a test email!', // plain text body
    html: '<b>Hello, this is a test email! using NodeJS</b>' // html body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
