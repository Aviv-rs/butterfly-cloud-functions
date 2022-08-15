const { transporter } = require('./email.service')

export async function sendEmail(to: string) {
  try {
    await transporter.sendMail({
      from: 'Butterfly <butterfly.test@outlook.com>', // sender address
      to, // list of receivers
      subject: 'Hello', // Subject line
      text: 'Hello World', // plain text body
      html: '<b>Hello World</b>', // html body
    })
  } catch (err: any) {
    throw new Error(err)
  }
}
