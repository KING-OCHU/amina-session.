const fs = require('fs-extra')
if (fs.existsSync('env.example')) require('dotenv').config({ path: __dirname+'/env.example' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 8000
global.email = 'samochuu@gmail.com'
global.github = 'https://github.com/SAM-OCHU/Amina-Ai'
global.location = 'Tanga'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '255699722149'
global.devs = '255699722149'
global.website = 'https://github.com/SAM-OCHU/Amina-Ai' //wa.me/+2550000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://github.com/SAM-OCHU/Amina-Ai/blob/main/lib/assets/SGN_12_17_2022_1671264530426_1.png'
module.exports = {
  botname: process.env.BOT_NAME || 'Amina Smart Ai.',
  ownername:process.env.OWNER_NAME || 'SAM-OCHU',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'On',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || [''],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'KIBALANGA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})