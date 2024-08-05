//base by david cyril
//re-upload? recode? copy code? give credit ya
//YouTube: @Davidcyriltech
//Instagram: 
//Telegram: 
//GitHub: @Dctech
//WhatsApp: +2349017232557
//want more free bot scripts? subscribe to my youtube channel:

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmne
global.ytname = "YT: davidcyriltech" //ur yt chanel name
global.socialm = "GitHub: Dctech" //ur github or insta name
global.location = "Abuja, Nigeria " //ur location

//new
global.botname = 'QUEEN ANITA V3' //ur bot name
global.ownernumber = '2349017232557' //ur owner number
global.ownername = 'DAVID CYRIL' //ur owner name
global.websitex = ""
global.wagc = "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L"
global.themeemoji = '👸'
global.wm = "davidcyril."
global.botscript = '' //script link
global.packname = "Sticker By"
global.author = "davidcyrik\n\n+2349017232557"
global.creator = "I2349017232557@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349017232557"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
