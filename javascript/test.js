class Mailbox {
  constructor() {
    this.mail = [];
  }

  sendMail(callback) {
    if (!this.mail.every((item) => item(callback))) return;
    this.mail.forEach((item) => item(text));
  }

  beforeSend(callback) {
    this.mail.push(callback);
  }

  afterSend(callback) {
    this.mail.push(callback);
  }
}

const mailbox = new Mailbox();

mailbox.beforeSend(function (mail, send = null) {
  return mail !== "spam";
});

mailbox.afterSend(function (mail) {
  console.log(`Сообщение ${mail} успешно добавлено!`);
  console.log(`Новое сообщение ${mail}`);
});

mailbox.sendMail("asdf");
mailbox.sendMail("spam");
