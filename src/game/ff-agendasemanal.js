let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://pbs.twimg.com/media/F-6dmJHWMAADED6?format=jpg&name=small' 
let texto = `» 📕 ¡𝙇𝘼 #𝘼𝙂𝙀𝙉𝘿𝘼𝙎𝙀𝙈𝘼𝙉𝘼𝙇 𝙀𝙎𝙏𝘼 𝘼𝙌𝙐𝙄! 📕

💪 FORTALECE tu arsenal con el poder de la MP5 Divinidad Platino, 👊 PELEA mano a mano con el Puño Mágico y 😈 EMBISTE al enemigo con la BESTIAL colección que aterriza el próximo lunes.

🔥 ¡¿Sobrevivirás al #AtaqueMonstruoso de esta semana?!

`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['agendasemanal'] 
handler.register = true
export default handler



