const { sendMailWithAttatchment } = require('../helpers/sendMail');
const path = require('path');

const sendMail = async(req,res) => {
    try {
        
        var email = req.body.email;
        var filename = req.file.filename;
        var mailSubject = 'Test Subject';
        var content = '<p>Hii this is my attatchment mail</p>';
        var filePath = path.join(__dirname,'../public/documents/'+filename);
        console.log(filePath);
        sendMailWithAttatchment(email, mailSubject, content, filename,filePath);
        res.status(200).send({ status:true, msg: 'Message Sent Successfully!' });

    } catch (error) {
        res.status(400).send({ status:false, msg: error.message });
    }
}

module.exports = {
    sendMail
}

