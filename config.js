const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "+23274448130"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '+23274448130' 
global.devs = '+23274448130';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"IEzgjKeYnf6nSN6qIDQ83ZCzR6QyeRVnll+TVioKi04="},"public":{"type":"Buffer","data":"5frmvO93MohSSr43HKhUnDIVg8L3e0g9Vflj/MRULms="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"oPjkSAkk9fnucY6pIw4ZUyB6VpdNL1gimdgRBY/4akE="},"public":{"type":"Buffer","data":"gYeZKbg2NYWIxqK7DHzgCk7oPat0NG+9+XxSV7SH3HA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WACBdP3HmxVbDswetqS3etf5i/Ex89QQavv/fz7K7UI="},"public":{"type":"Buffer","data":"0QXRfc23c854xVC3pxkqQnFczXaQzpmVFUoSGWfChCk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wHz3q2crFcNwk2ecLy/Tx/sDsk85ws1YLjfXxCbQ3mA="},"public":{"type":"Buffer","data":"jeEAQtETKrtkcyfl62H+RT1X1L+OUL2jl0iEION4y1k="}},"signature":{"type":"Buffer","data":"ZL5KovYzZzJEJtwgeulUtjtgUQQlHiljNEj4rsGViP41m7j6z/hyzM17aQY076DkNFj4usbwwhxQhasPWd5fAA=="},"keyId":1},"registrationId":89,"advSecretKey":"CmpblMB3hBDSWNEyhWh4PRUdKJVtPK4cUgoUUCuqtYM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"OlDGK-5iS-y9UZDUK0FL1g","phoneId":"3e1196b0-8b2a-4076-b0e9-a4ad04dadafa","identityId":{"type":"Buffer","data":"0s33Pi/IZK+GWHaSgBTaoFM9Oig="},"registered":true,"backupToken":{"type":"Buffer","data":"SfPN6EUX7VaYIlS2k4mUt117pmE="},"registration":{},"pairingCode":"TS39QQP1","me":{"id":"23274448130:27@s.whatsapp.net","name":"Mr Take Tee"},"account":{"details":"CKyitvgEEMKB+LcGGAQgACgA","accountSignatureKey":"kiJE437/bw/gM2Qo0KANmDNH+AJK2VILRnLpzzvjBjw=","accountSignature":"cDDSnr9MV0y8Wv1sKQ18RhwFxPhkB3zJ/lTPbCkXUfKbNMvYlwzexoSwyGs+lstEkaRTaZkI3jqQ9AGupVrgDA==","deviceSignature":"EGAwMt0zyqPxg3/3AQWzujDxoLBhLyK2T6oWWiuuUe8lpDK0waPj3pk7ekxqTMhtzYwEAkA0uiZgHJAnppAcAg=="},"signalIdentities":[{"identifier":{"name":"23274448130:27@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZIiRON+/28P4DNkKNCgDZgzR/gCStlSC0Zy6c874wY8"}}],"platform":"smba","lastAccountSyncTimestamp":1727922374,"myAppStateKeyId":"AAAAAH4G"}",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Dr Take Tee',
  packname:  process.env.PACK_NAME || 'Tee bot',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Dr Take Tee' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
