const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abidi.mohamed@gmail.com",
    pass: "jfd4d87zs8",
  },
});

const mailOptions = {
  from: "abidi.mohamed@gmail.com",
  to: "myfriend@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
