require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

const app = express();
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Gmail User:', gmailUser);
console.log('Gmail App Password:', gmailAppPassword);

// NodeMailer 설정
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});


// 이메일 전송 엔드포인트
app.post('/send-email', (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: 'your-gmail-account@gmail.com',
      to: gmailUser,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully.');
      }
    });
  } catch (error) {
    console.error('Caught an exception:', error);
    res.status(500).send('Internal Server Error.');
  }
});

app.get('/send-email', (req, res) => {
  res.send('This is the send-email route.');
});
