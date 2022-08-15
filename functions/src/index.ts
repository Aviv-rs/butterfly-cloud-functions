import * as functions from 'firebase-functions'
import { sendEmail } from './services/digital.service'

exports.newApiKey = functions.firestore
  .document('API_KEYS/{apiKey}')
  .onCreate(async (snap, context) => {
    try {
      await sendEmail('judgefudge315@gmail.com')
    } catch (err) {
      console.log(err)
    }
  })
