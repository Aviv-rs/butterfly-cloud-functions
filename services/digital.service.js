const { transporter } = require('./email.service')

module.exports = {
  sendEmail,
}

async function sendEmail(email) {
  await transporter.sendMail({
    from: 'Butterfly <butterfly.test@outlook.com>', // sender address
    to: email, // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello World', // plain text body
    html: '<b>Hello World</b>', // html body
  })

}
