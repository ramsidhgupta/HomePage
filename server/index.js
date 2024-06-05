const express = require("express");
const multer = require("multer");
const cors = require('cors');
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
require('dotenv').config();

const buildPath = path.join(__dirname, 'build')


app.use(cors());
app.use(express.json()); 
app.use(express.static(buildPath))
app.use(express.urlencoded({ extended: true })); 


const portserver = process.env.PORT || 3001
const mailG = process.env.EMAIL_USER
const passG =  process.env.EMAIL_PASS



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./Public/images");
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });


const validateFormData = (req, res, next) => {
    const { name, email, message, qualification, experience, role } = req.body;
    console.log("Form data received: In ValidFormData");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Qualification:", qualification);
    console.log("Experience:", experience);
    console.log("Role:", role);

  
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  
  next();
};


const validateFormDateEnq = (req, res, next) => {
  const { firstname, lastname, email, location, message } = req.body;
  console.log("Form data received: In ValidFormData");
  console.log("First Name:", firstname);
  console.log("Last Name:", lastname);
  console.log("Email:", email);
  console.log("Location:", location);
  console.log("Message:", message);

if (!firstname || !lastname || !email || !message || !location) {
  return res
    .status(400)
    .json({ error: "First Name, Last Name,  email, Location, and message are required" });
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ error: "Invalid email address" });
}
next();
};





app.post(
  '/api/submitForm',
  upload.single("file"),
  validateFormData,
  (req, res) => {
    const { name, email, message, qualification, experience, role } = req.body;
    const file = req.file; 
  
    

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: mailG,
        pass: passG,
      },
    });

    const mailOptions = {
      from: {email},
      to: "hr@techsocind.com",
      subject: "New Candidate Form Submission for Job Position",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Qualification:${qualification}
      Experience:${experience}
      role:${role}
    `,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email from server" });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully from server" });
      }
    });
  }
);




app.post(
  '/api/submitFormEnq',
   validateFormDateEnq,
  (req, res) => {
    const { firstname, lastname, email, location, message } = req.body;
    
  
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: mailG,
        pass: passG,
      },
    });

    const mailOptions = {
      from: {email},
      to: "hr@techsocind.com",
      subject: "New Contact Form Submission",
      text: `
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Message: ${message}
      Location: ${location}
    `,
      
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email from server" });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully from server" });
      }
    });
  }
);


app.post(
  '/api/submitFormEmbedded',
  
  (req, res) => {
    const { name, email, message, JobTitle, CompanyName, PhoneNo, Date, country, selectedServices } = req.body;
    console.log("Form data received: In ValidFormData");
    console.log("First Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Country:", country);
    console.log("Phone No:", PhoneNo);

    console.log("Company Name:", CompanyName);
    console.log("Job Title:", JobTitle);
    console.log("Services Selected:", selectedServices);


    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: mailG,
        pass: passG,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "hr@Techsocind.com",
      subject: "New Embedded Services Enquiry Form Submission",
      html: `
    <html>
    <head>
      <style>
        body {
          
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          border: 3px solid #ccc;
          border-radius: 10px;
          background-color: #f9f9f9;
        }
        .heading {
          text-align: center;
          color: #333;
        }
        .details {
          margin-top: 20px;
        }
        .details p {
          margin: 5px 0;
        }
        .services {
          margin-top: 20px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #1268b3;
          color:#fff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="heading">New Embedded Services Enquiry Form Submission</h1>
        <div class="details">
          <p><strong>My Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country Origin:</strong> ${country}</p>
          <p><strong>My Phone No:</strong> ${PhoneNo}</p>
          <p><strong>My Company Name:</strong> ${CompanyName}</p>
          <p><strong>My Role:</strong> ${JobTitle}</p>
          <p><strong>Scheduled Call Date:</strong> ${Date}</p>
        </div>
        <div class="services">
          <h2>Services Chosen</h2>
          <pre>${JSON.stringify(selectedServices, null, 2)}</pre>
        </div>
        <div class="services">
          <h2>My message</h2>
          <pre>${message}</pre>
        </div>
      </div>
    </body>
    </html>
  `,
};
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email from server" });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully from server" });
      }
    });
  
  
        
   }
);





app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})


app.listen(portserver, () => {
  console.log(`Server is running on port ${portserver}`);
});
