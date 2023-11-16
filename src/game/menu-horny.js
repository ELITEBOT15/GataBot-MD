import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '⚠ 𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊, 𝙎𝙄 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙔 𝘿𝙀𝙎𝙀𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍𝙇𝙊𝙎, 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 .𝘰𝘯 𝘮𝘰𝘥𝘰𝘩𝘰𝘵 \n𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 .𝘰𝘧𝘧 𝘮𝘰𝘥𝘰𝘩𝘰𝘵'; 

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

╭──𝙈𝙀𝙉𝙐 𝙃𝙊𝙍𝙉𝙔───✧
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 𝘢𝘭 𝘔𝘦𝘯𝘶𝘏𝘰𝘳𝘯𝘺.
│ 𝘚𝘰𝘭𝘰 𝘮𝘢𝘯𝘵𝘦𝘯 𝘱𝘳𝘦𝘤𝘢𝘶𝘤𝘪𝘰𝘯.
│ 🔥🥵🍆😈🍑
╰────────────────✧

▸▸ 𝙋𝙊𝙍𝙉𝙊 𝙍𝘼𝙉𝘿𝙊𝙈 ◂◂
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘭𝘰𝘭𝘪
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘰𝘰𝘵
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘢𝘴𝘴
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘣𝘥𝘴𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘤𝘶𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘦𝘳𝘰
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘦𝘮𝘥𝘰𝘮
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘧𝘰𝘰𝘵
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘨𝘭𝘢𝘴𝘴
│ ┊➺ 🔞 .𝘯𝘴𝘧𝘸𝘰𝘳𝘨𝘺
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪2
│ ┊➺ 🔞 .𝘺𝘶𝘳𝘪2
│ ┊➺ 🔞 .𝘺𝘢𝘰𝘪
│ ┊➺ 🔞 .𝘺𝘢𝘰𝘪2
│ ┊➺ 🔞 .𝘱𝘢𝘯𝘵𝘪𝘦𝘴
│ ┊➺ 🔞 .𝘵𝘦𝘵𝘢𝘴
│ ┊➺ 🔞 .𝘣𝘰𝘰𝘵𝘺
│ ┊➺ 🔞 .𝘦𝘤𝘤𝘩𝘪
│ ┊➺ 🔞 .𝘧𝘶𝘳𝘳𝘰
│ ┊➺ 🔞 .𝘩𝘦𝘯𝘵𝘢𝘪
│ ┊➺ 🔞 .𝘵𝘳𝘢𝘱𝘪𝘵𝘰
│ ┊➺ 🔞 .𝘪𝘮𝘢𝘨𝘦𝘯𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘴
│ ┊➺ 🔞 .𝘱𝘦𝘯𝘦
│ ┊➺ 🔞 .𝘱𝘰𝘳𝘯𝘰
│ ┊➺ 🔞 .𝘳𝘢𝘯𝘥𝘰𝘮𝘹𝘹𝘹
│ ┊➺ 🔞 .𝘱𝘦𝘤𝘩𝘰𝘴

▸▸ 𝘽𝙐𝙎𝘾𝘼𝙍 - 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ◂◂
│ ┊➺ 🔥 .𝘩𝘦𝘯𝘵𝘢𝘪𝘴𝘦𝘢𝘳𝘤𝘩
│ ┊➺ 🔥 .𝘱𝘢𝘤𝘬
│ ┊➺ 🔥 .𝘱𝘢𝘤𝘬2
│ ┊➺ 🔥 .𝘱𝘢𝘤𝘬3
│ ┊➺ 🔥 .𝘷𝘪𝘥𝘦𝘰𝘹𝘹𝘹
│ ┊➺ 🔥 .𝘷í𝘥𝘦𝘰𝘹𝘹𝘹
│ ┊➺ 🔥 .𝘷𝘪𝘥𝘦𝘰𝘹𝘹𝘹𝘭𝘦𝘴𝘣𝘪
│ ┊➺ 🔥 .𝘷𝘪𝘥𝘦𝘰𝘭𝘦𝘴𝘣𝘪𝘹𝘹𝘹
│ ┊➺ 🔥 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘷𝘪𝘥
│ ┊➺ 🔥 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢𝘷𝘪𝘥
│ ┊➺ 🔥 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘷
│ ┊➺ 🔥 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢𝘷
│ ┊➺ 🔥 .𝘱𝘰𝘳𝘯𝘰𝘭𝘦𝘴𝘷
│ ┊➺ 😈 .𝘹𝘯𝘹𝘹𝘴𝘦𝘢𝘳𝘤𝘩 𝘵𝘦𝘹𝘵𝘰
│ ┊➺ 😈 .𝘹𝘯𝘹𝘹𝘥𝘭 𝘭𝘪𝘯𝘬
│ ┊➺ 😈 .𝘹𝘷𝘪𝘥𝘦𝘰𝘴𝘥𝘭 𝘭𝘪𝘯𝘬
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const gatahot = ['https://telegra.ph/file/73ad6572953c98e3771be.jpg',
'https://telegra.ph/file/25d4c7570c7ae25f1d3c3.jpg',
'https://telegra.ph/file/6fdd637df978637116c6d.jpg']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gatahot.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
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

handler.command = /^(menu5|menuhorny|menuhot)$/i
handler.register = true
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}



