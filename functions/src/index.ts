import * as nodemailer from "nodemailer"
import * as functions from "firebase-functions";

var transporter = nodemailer.createTransport({
  service: 'hotmail', // outlook's service
  port: 587,
  auth: {
    // TODO: put in env variables
    user: 'butterfly.test@outlook.com', // mail to send from (gmail does not work!)
    pass: 'Butterfly123', // mail password
  },
})


async function sendEmail(email: string) {
  await transporter.sendMail({
    from: 'Butterfly <butterfly.test@outlook.com>', // sender address
    to: email, // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello World', // plain text body
    html: '<b>Hello World</b>', // html body
  })

}
exports.newApiKey = functions.firestore
  .document("API_KEYS/{apiKey}")
  .onCreate((snap, context) => {
    // functions.logger.log('Uppercasing', snap);
    sendEmail("judgefudge315@gmail.com");
  });
