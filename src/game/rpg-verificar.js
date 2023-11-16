import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
if (user.registered === true) return m.reply(lenguajeGB.smsVerify0(usedPrefix) + '*')
if (!Reg.test(text)) return m.reply(lenguajeGB.smsVerify1(usedPrefix, command))
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply(lenguajeGB.smsVerify2())
if (!age) return m.reply(lenguajeGB.smsVerify3())
age = parseInt(age)
if (age > 50) return m.reply(lenguajeGB.smsVerify4())
if (age < 10) return m.reply(lenguajeGB.smsVerify5())
if (name.length >= 30) return m.reply(lenguajeGB.smsVerify6())
user.name = name + 'ㅤ🆅'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => gataMenu.getRandom())
let caption = `${lenguajeGB.smsVerify7()}

*${lenguajeGB.smsPerfil1()}* @${tag}
𝚃𝙴 𝙰𝙲𝙰𝙱𝙰𝚂 𝙳𝙴 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾

*» ${lenguajeGB.smsPerfil2()}* : ${name}
*» ${lenguajeGB.smsPerfil3()}* : ${age} Años
*» ${lenguajeGB.smsVerify9()}* : 🆅
*» ${lenguajeGB.smsPerfil5()}* : \`\`\`${sn}\`\`\`
\n${lenguajeGB.smsVerify8(usedPrefix)} *𝙾 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁𝙻𝙾 .idregistro*`.trim()
await conn.sendFile(m.chat, gataMenu2.getRandom(), 'gata.jpg', caption, m, false, { mentions: [aa] }) 

}
handler.command = /^(verify|verificar)$/i
export default handler