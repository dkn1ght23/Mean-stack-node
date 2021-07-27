const nodemailer = require('nodemailer');
const config = require('./config');

class MailSender {

    //transfering mail's info into gmail
    getTransporter(){
        //console.log(config.SENDER_MAIL);
        return nodemailer.createTransport( {
            service: 'gmail',
            auth: {
                user: config.SENDER_MAIL,
                pass: config.PASSWORD
            }
        })
    }


    getMailOptions(subject, body, to){
        //console.log(to);
        return{
            from: config.SENDER_MAIL,
            to: to,
            subject: subject,
            text: body
        };
    }

    send(mailDetails){

        let trensporter = this.getTransporter();
        let mailOptions = this.getMailOptions(mailDetails.subjet, mailDetails.body, mailDetails.to);

        trensporter.sendMail(mailOptions, (error, info) => {

            if(error){
                console.log(info);
                console.log('mail sending failed');
            }
            else{
                console.log('mail sending sucess');
                console.log(info);
            }
        })

    }



}

module.exports = MailSender;