//let { MessageType } = (await import('@adiwajshing/baileys')).default 
let MessageType = (await import(global.baileys)).default
import { promises } from 'fs'
import { join } from 'path'
import fs from 'fs'
import os, { cpus as _cpus, totalmem, freemem } from 'os'; 
import util from 'util'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { sizeFormatter } from 'human-readable'
import ws from 'ws';

let handler = async (m, { conn, command, usedPrefix, args, text, __dirname, isOwner, isRowner, DevMode }) => {
let name, _uptime, _muptime, uptime, totalreg, fkontak, rtotalreg, frep, _package, taguser, groups
const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4] 
frep = { contextInfo: { externalAdReply: {title: wm, body: lenguajeGB.smsCreApoyo(), sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const isCommand1 = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i.test(command)  
const isCommand2 = /^(cuenta(s)?oficiales?|polvoraredes|(cuentas|account)s?g?b|(ig)?polvora|(cuentaspolvora))$/i.test(command)  
const isCommand3 = /^(polvora(bot)?groups?|grupos(ofc|depolvorabot|gb)|grupopb|groupspb|polvoragroups?|grupos|group(ofc|sofc))$/i.test(command) 
const isCommand6 = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i.test(command) 
const isCommand7 = /^(group(s|list|o(lista)?)|list(a)?(de)?grupo(s)?|grupolista)$/i.test(command) 
const isCommand10 = /^(ping|speed|velocidad|rapidez|velocity)$/i.test(command) 
const isCommand12 = /^(report|request|reporte|bugs|bug|reportowner|reportes|reportar)$/i.test(command) 

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
  
switch (true) {     
case isCommand1:
name = await conn.getName(m.sender)
_uptime = process.uptime() * 1000
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
uptime = clockString(_uptime)
totalreg = Object.keys(global.db.data.users).length
rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
try{
let estado = `*╭𝄗𝄗✦ --${lenguajeGB.smsEstado1()}-- ✦𝄗𝄗⬣*
 ⎸ *⍟ ${lenguajeGB.smsEstado2()}* : ${vs} 🤖
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈
 ⎸ 🚀 *${lenguajeGB.smsEstado3()}* : *_${Object.keys(global.db.data.users).length}_*
 ⎸ 🚀 *${lenguajeGB.smsEstado4()}* : *_${rtotalreg}/${totalreg}_*
 ⎸ 🚀 *${lenguajeGB.smsEstado5()}* : *_${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_* 
 ⎸ 🚀 *${lenguajeGB.smsEstado6()}* : *_${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_* 
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ⏱ *${lenguajeGB.smsEstado7()}* : *_${uptime}_*
*╰𝄗𝄗𝄗𝄗𝄗⬣*`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', estado, fkontak)
} catch (e) {
reportError(e)
}   
break
    
case isCommand2:
try{
let media = './media/menus/Menu2.jpg'
let str = `
📌 *FACEBOOK*
*${md}*\n
📌 *INSTAGRAM*
*${ig}*\n
📌 *YOUTUBE*
*${yt}*\n
📌 *DISCORD*
*${fb}*\n
📌 *TIKTOK*
*https://www.tiktok.com/@polvora6969*\n
${lenguajeGB.smsOfc2()}`.trim() 
await conn.sendFile(m.chat, media, 'gata.jpg', lenguajeGB.smsOfc1() + '\n\n' + str, fkontak)  
} catch (e) {
reportError(e)
}    
break
    
  case isCommand3:
try{
let str = `
${lenguajeGB.smsGrupoOfc1()}
_★ ${grupo[9]}_`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', str, fkontak)   
} catch (e) {
reportError(e)
}    
break 
    
case isCommand6:
try{   
taguser = conn.getName(m.sender)
_package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let pp = await conn.sendFile(`${global.conn.user.jid.split`@`[0]}` + '@s.whatsapp.net', 'image').catch(_ => photoimg.getRandom())
let aa = `*🤖 ${lenguajeGB.smsCreA()} ${taguser}, ${lenguajeGB.smsCreB()} ${_package.name} ${lenguajeGB.smsCreC()}*\n\n` 
let bb = `${packname}\n*Contactame aqui*\n`
await conn.sendFile(m.chat, pp, 'gata.jpg', aa + bb + ig, fkontak) 
} catch (e) {
reportError(e)
}    
break
    
case isCommand7:
try{
let txt
groups = Object.values(await conn.groupFetchAllParticipating())
txt = `${packname} ${lenguajeGB.smsLisA()}
${lenguajeGB.smsLisB()} ${groups.length}\n`

for (let i = 0; i < groups.length; i++) {
txt += ` 
${lenguajeGB.smsLisC()} ${groups[i].subject}
${lenguajeGB.smsLisD()} ${groups[i].id}
${isOwner ? `${lenguajeGB.smsLisE()} ${groups[i].participants.length}` : ''}\n`
}
m.reply(txt.trim())
} catch (e) {
reportError(e)
}     
break
    
case isCommand10:
try {
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let caption = `${htki} *${lenguajeGB.smsVl1()}* ${htka}
🚀 *${Math.round(neww - old)}* ms
🚀 *${speed}* ms
*${htjava} ${lenguajeGB.smsVl2()}
*🟢 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
${lenguajeGB.smsVl3()} ${format(freemem())}
${lenguajeGB.smsVl4()} \`\`\`${os.platform()}\`\`\`
${lenguajeGB.smsVl5()} _${os.hostname()}_
${readMore}
${lenguajeGB.smsVl6()}
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', caption.trim(), fkontak) 
} catch (e) {
reportError(e)
}   
break
  
case isCommand12:
if (!text) return m.reply(lenguajeGB.smsReportGB1(usedPrefix, command))
if (text.length < 8) return m.reply(lenguajeGB.smsReportGB2())
if (text.length > 1000) return m.reply(lenguajeGB.smsReportGB3())

let urs = m.sender.split('@')[0]
for (let i = 0; i < global.owner.length; i++) {
let ownerNumber = global.owner[i][0]
if (global.owner[i][2] === true) {
let aa = ownerNumber + '@s.whatsapp.net'
let teks = lenguajeGB.smsReportGB4(urs, text)
setTimeout(async function() {
await conn.reply(aa, m.quoted ? teks + m.quoted.text : teks, null, { mentions: [m.sender] }, { quoted: fkontak })
}, 3000 * i)
}}
await m.reply(lenguajeGB.smsReportGB5())
break
}}

handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?|cuenta(s)?oficiales?|polvoraredes|(cuentas|account)s?g?b|(ig)?gata|(cuentasgata))|gata(bot)?groups?|grupos|groupsgb|grupos(ofc|degatabot|gb)|grupogb|gatagroups?|group(ofc|sofc)|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador|group(s|list|o(lista)?)|list(a)?(de)?grupo(s)?|grupolista|ping|speed|velocidad|rapidez|velocity|report|request|reporte|bugs|bug|reportowner|reportes|reportar$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
