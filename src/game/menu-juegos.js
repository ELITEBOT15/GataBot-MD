import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
𝘏𝘰𝘭𝘢 @${m.sender.split("@")[0]}
𝘧𝘦𝘤𝘩𝘢 : ${week}, ${date} 

╭──𝙈𝙀𝙉𝙐 𝙅𝙐𝙀𝙂𝙊𝙎───✧
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 𝘢𝘭 𝘮𝘦𝘯𝘶 𝘱𝘢𝘳𝘢
│ 𝘨𝘢𝘯𝘢𝘳 𝘦𝘹𝘱,𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴,𝘤𝘰𝘪𝘯𝘴
│ 𝘺 𝘤𝘰𝘮𝘱𝘦𝘵𝘪𝘳 𝘤𝘰𝘯 𝘭𝘰𝘴 𝘥𝘦𝘮𝘢𝘴.
│ 💎 💸 💰 ⛏ 🪙
╰────────────────✧

▸▸ 𝙀𝙓𝙋 𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂
│ ┊➺ ⛏ .𝘯𝘪𝘷𝘦𝘭
│ ┊➺ ⛏ .𝘣𝘢𝘭𝘢𝘯𝘤𝘦
│ ┊➺ ⛏ .𝘣𝘢𝘭𝘢𝘯𝘤𝘦2
│ ┊➺ ⛏ .𝘮𝘪𝘯𝘢𝘳
│ ┊➺ ⛏ .𝘮𝘪𝘯𝘢𝘳2
│ ┊➺ ⛏ .𝘮𝘪𝘯𝘢𝘳3
│ ┊➺ ⛏ .𝘤𝘭𝘢𝘪𝘮
│ ┊➺ ⛏ .𝘳𝘰𝘣𝘢𝘳 @𝘵𝘢𝘨
│ ┊➺ ⛏ .𝘤𝘰𝘧𝘳𝘦
│ ┊➺ ⛏ .𝘣𝘶𝘺 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥
│ ┊➺ ⛏ .𝘵𝘳𝘢𝘯𝘴𝘧𝘦𝘳
│ ┊➺ ⛏ .𝘢𝘱𝘰𝘴𝘵𝘢𝘳
│ ┊➺ ⛏ .𝘤𝘩𝘢𝘮𝘣𝘦𝘢𝘳 𝘰 .𝘸𝘰𝘳𝘬
│ ┊➺ ⛏ .𝘥𝘢𝘳𝘥𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴
│ ┊➺ ⛏ .𝘥𝘢𝘳𝘹𝘱
│ ┊➺ ⛏ .𝘥𝘢𝘳𝘤𝘰𝘪𝘯𝘴
│ ┊➺ ⛏ .𝘥𝘢𝘳𝘥𝘰𝘭𝘢𝘳𝘦𝘴

▸▸ 𝙈𝙄𝙉𝙄𝙅𝙐𝙀𝙂𝙊𝙎 ◂◂
│ ┊➺ 🎲 .𝘬𝘪𝘴𝘴 @𝘵𝘢𝘨
│ ┊➺ 🎲 .𝘮𝘪𝘮𝘰𝘴 @𝘵𝘢𝘨
│ ┊➺ 🎲 .𝘣𝘰𝘧𝘦𝘵𝘢𝘥𝘢 @𝘵𝘢𝘨
│ ┊➺ 🎲 .𝘱𝘪𝘳𝘰𝘱𝘰 @𝘵𝘢𝘨
│ ┊➺ 🎲 .𝘢𝘮𝘰𝘳 @𝘵𝘢𝘨 𝘰 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 🎲 .𝘱𝘰𝘳𝘤𝘦𝘯𝘵𝘢𝘫𝘦𝘢𝘮𝘰𝘳 @𝘵𝘢𝘨
│ ┊➺ 🎲 .𝘧𝘰𝘭𝘭𝘢𝘳 @𝘵𝘢𝘨
│ ┊➺ 🎲 .𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
│ ┊➺ 🎲 .𝘷𝘦𝘳𝘥𝘢𝘥
│ ┊➺ 🎲 .𝘳𝘦𝘵𝘰
│ ┊➺ 🎲 .𝘴𝘰𝘱𝘢
│ ┊➺ 🎲 .𝘴𝘶𝘦𝘳𝘵𝘦 𝘤𝘢𝘳𝘢|𝘤𝘳𝘶𝘻
│ ┊➺ 🎲 .𝘨𝘢𝘺 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘨𝘢𝘺𝟤 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘪𝘯𝘴𝘢𝘯𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘴𝘢𝘪𝘤𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘮𝘢𝘯𝘤𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘮𝘢𝘯𝘤𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘱𝘢𝘫𝘦𝘳𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘱𝘢𝘫𝘦𝘳𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘱𝘶𝘵𝘰 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘱𝘶𝘵𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘳𝘢𝘵𝘢 @𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘵𝘰𝘱 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘨𝘢𝘺𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘰𝘵𝘢𝘬𝘶𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘱𝘢𝘫𝘦𝘳@𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘱𝘶𝘵@𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘯𝘵𝘦𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘭𝘢𝘨𝘳𝘢𝘴𝘢
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘱𝘢𝘯𝘢𝘧𝘳𝘦𝘴𝘤𝘰𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘴𝘩𝘪𝘱𝘰𝘴𝘵𝘦𝘳𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘧𝘢𝘮𝘰𝘴𝘰𝘴
│ ┊➺ 🎲 .𝘵𝘰𝘱𝘱𝘢𝘳𝘦𝘫𝘢𝘴
│ ┊➺ 🎲 .𝘥𝘰𝘹𝘦𝘢𝘳 𝘵𝘢𝘨 𝘰 𝘯𝘰𝘮𝘣𝘳𝘦
│ ┊➺ 🎲 .𝘥𝘰𝘹𝘹𝘦𝘢𝘮𝘦
│ ┊➺ 🎲 .𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢
│ ┊➺ 🎲 .𝘢𝘧𝘬 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 🎲 .𝘤𝘢𝘯𝘤𝘪𝘰𝘯
│ ┊➺ 🎲 .𝘱𝘱𝘵
│ ┊➺ 🎲 .𝘵𝘵𝘵 𝘺 𝘯𝘰𝘮𝘣𝘳𝘦 𝘴𝘢𝘭𝘢
│ ┊➺ 🎲 .𝘥𝘦𝘭𝘵𝘵𝘵 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘴𝘢𝘭𝘢
│ ┊➺ 🎲 .𝘮𝘦𝘮𝘦
│ ┊➺ 🎲 .𝘤𝘩𝘪𝘴𝘵𝘦
│ ┊➺ 🎲 .𝘧𝘳𝘢𝘴𝘦𝘴
│ ┊➺ 🎲 .𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥
│ ┊➺ 🎲 .𝘮𝘢𝘵𝘩
│ ┊➺ 🎲 .𝘤𝘢𝘳𝘵𝘰𝘰𝘯 𝘪𝘮𝘢𝘨𝘦
│ ┊➺ 🎲 .𝘤𝘢𝘤𝘩𝘰𝘯𝘥𝘢𝘭𝘪𝘤𝘦𝘯𝘤𝘪𝘢
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const vi = ['https://telegra.ph/file/6b3486d6cbbfe9d9c7970.mp4',
'https://telegra.ph/file/6b3486d6cbbfe9d9c7970.mp4',
'https://telegra.ph/file/6b3486d6cbbfe9d9c7970.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menujuego|menujuegos|menu4)$/i
handler.register = true
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}




