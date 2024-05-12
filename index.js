var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'paramasivan645@gmail.com',
    pass: 'yduw kyct fexo rzlc'
  }
});

var mailOptions = {
  from: 'paramasivan645@gmail.com',
  to: 'livewireform@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});