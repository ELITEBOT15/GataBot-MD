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

╭────𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊𝙎────✧
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 𝘢𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘭𝘰𝘨𝘰𝘴,
│ 𝘤𝘰𝘯𝘴𝘪𝘨𝘶𝘦 𝘺 𝘦𝘯𝘤𝘶𝘦𝘯𝘵𝘳𝘢 𝘭𝘢
│ 𝘧𝘢𝘤𝘪𝘭𝘪𝘥𝘢𝘥 𝘥𝘦 𝘤𝘳𝘦𝘢𝘳 𝘦𝘥𝘪𝘤𝘪𝘰𝘯𝘦𝘴
│ 𝘰 𝘴𝘦𝘳 𝘤𝘳𝘦𝘢𝘵𝘪𝘷𝘰𝘴 𝘱𝘰𝘳 𝘵𝘪.
╰─────────────────✧

▸▸ 𝘾𝙍𝙀𝘼𝙍 𝙇𝙊𝙂𝙊𝙎 ◂◂
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘢𝘳𝘦𝘫𝘢
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘭𝘪𝘵𝘤𝘩
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘴𝘢𝘥
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘴𝘰𝘭𝘪𝘵𝘢𝘳𝘪𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘢𝘭𝘭
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘢𝘵𝘪𝘵𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘩𝘪𝘤𝘢𝘨𝘢𝘮𝘦𝘳
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘢𝘳𝘮𝘺
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘯𝘢𝘳𝘶𝘵𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘢
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘯𝘶𝘣𝘦
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘢𝘯𝘨𝘦𝘭
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘮𝘶𝘳𝘤𝘪𝘦𝘭𝘢𝘨𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘤𝘪𝘦𝘭𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪3𝘥
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘮𝘢𝘵𝘳𝘪𝘹
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘩𝘰𝘳𝘳𝘰𝘳
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘢𝘭𝘢𝘴
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘨𝘶𝘦𝘳𝘳𝘦𝘳𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨𝘧𝘦𝘮
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘭𝘰𝘭
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘢𝘮𝘰𝘯𝘨𝘶𝘴
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘱𝘭𝘢𝘺𝘦𝘳
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘧𝘧
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘱𝘶𝘣𝘨
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘤𝘰𝘶𝘯𝘵𝘦𝘳
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘱𝘶𝘣𝘨
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘵𝘪𝘨𝘦𝘳
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘪𝘯𝘵𝘳𝘰
│ ┊➺ 🔰 .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘨𝘢𝘮𝘪𝘯𝘨
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const vi = ['https://telegra.ph/file/7d29f5d8954d62ff993e8.mp4',
'https://telegra.ph/file/7d29f5d8954d62ff993e8.mp4',
'https://telegra.ph/file/7d29f5d8954d62ff993e8.mp4']

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

handler.command = /^(menulogo|menulogos|menu3)$/i
handler.register = true
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}



