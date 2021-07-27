const MailSender = require('./../mailsender');

let MailEvenetHandler = (eventEmitter) => {
    eventEmitter.on('sendmail', (mailDetails) => {
        let sender = new MailSender();
        sender.send(mailDetails);
        console.log(mailDetails);
    });
}

module.exports = MailEvenetHandler;
