const nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
  service: 'hotmail', // outlook's service
  port: 587,
  auth: {
    // TODO: put in env variables
    user: 'butterfly.test@outlook.com', // mail to send from (gmail does not work!)
    pass: 'Butterfly123', // mail password
  },
})

