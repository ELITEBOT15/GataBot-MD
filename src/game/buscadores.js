//import { googleIt } from '@bochilteam/scraper'
import translate from '@vitalets/google-translate-api'
import googleIt from 'google-it'
import fetch from 'node-fetch'
import axios from 'axios'
import yts from 'yt-search'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
import gtts from 'node-gtts'
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path'
import fs from 'fs' 
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const idioma = 'es'

let handler = async (m, { conn, command, usedPrefix, args, text }) => {
const isCommand1 = /^(googlef?)$/i.test(command)
const isCommand3 = /^(bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle)$/i.test(command)
const isCommand5 = /^(yt(s|search))$/i.test(command)
const isCommand6 = /^(translate|traducir|trad)$/i.test(command)

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
//const fetch = (await import('node-fetch')).default
let img = 'https://wpbr.mx/blog/wp-content/uploads/2015/09/Nuevo-logo-de-google.jpg' || gataMenu.getRandom()
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, lenguajeGB.smsMalused3() + `\n*${usedPrefix + command} Qué es Matemáticas?*`, m)
try {
let search = await googleIt({ query: text })
let msg = search.map(({ title, link, snippet}) => {
return `*• ${title}*\n_${snippet}_\n_${link}_`
}).join`\n\n`
await conn.sendFile(m.chat, img, '', url + '\n\n' + msg, m) 
} catch { 
try {
let apiUrl = `https://api.lolhuman.xyz/api/gsearch?apikey=${lolkeysapi}&query=` + encodeURIComponent(text)
let response = await fetch(apiUrl)
let data = await response.json() 
let translatedResults = await Promise.all(data.result.map(async ({ title, link, desc }) => {
let translatedTitle = await translate(title, { to: lenguajeGB.lenguaje() || 'en', autoCorrect: true })
let translatedDesc = await translate(desc, { to: lenguajeGB.lenguaje() || 'en', autoCorrect: true })
return `*• ${translatedTitle.text}*\n_${translatedDesc.text}_\n_${link}_`
}))
let msg = translatedResults.join('\n\n')
await conn.sendFile(m.chat, img, '', url + '\n\n' + msg, m)
} catch (e) {
reportError(e)
}}
break
    
case isCommand3:
if (!text) return conn.reply(m.chat, lenguajeGB.smsMalused2() + `\n*${usedPrefix + command} ${lenguajeGB.smsCreA()}*` , m) 
try{
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=${lenguajeGB.lenguaje()}`)  
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
} catch (e) {
reportError(e)
}     
break
        
        
case isCommand5:
if (!text) return m.reply(lenguajeGB.smsMalused2() + `*${usedPrefix + command}* GataBot`)
try{
await conn.reply(m.chat, global.wait, m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
⁖❤️꙰༻ *${lenguajeGB.smsytserh1()}*
» ${v.title || lenguajeGB.smsGit14()}

⁖🩵꙰༻ *${lenguajeGB.smsytserh2()}*
» ${v.url || lenguajeGB.smsGit14()}

⁖💜꙰༻ *${lenguajeGB.smsytserh3()}*
» ${v.timestamp || lenguajeGB.smsGit14()}

⁖💚꙰༻ *${lenguajeGB.smsytserh4()}*
» ${v.ago || lenguajeGB.smsGit14()}

⁖🧡꙰༻ *${lenguajeGB.smsytserh5()}*
» ${v.views || lenguajeGB.smsGit14()}`.trim()
}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
await conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
} catch (e) {
reportError(e)
}          
break
case isCommand6:
if (!text) throw `${lenguajeGB.smsMalused2()}\n*${usedPrefix + command}* es Hello`
try {
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'es';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ');
}
//if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
const result = await translate(`${text}`, {to: lang, autoCorrect: true});
await m.reply(result.text);
} catch {
try {
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply(result2);
} catch (e) {
reportError(e)
}}
break 

}}
handler.command = /^(googlef?|bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle|(yt(s|search)|(translate|traducir|trad)))$/i
handler.register = true
export default handler 

async function githubstalk(user) {
return new Promise((resolve, reject) => {
axios.get('https://api.github.com/users/'+user)
.then(({ data }) => {
let hasil = {
 username: data.login,
 nickname: data.name,
 bio: data.bio,
 id: data.id,
 nodeId: data.node_id,
 profile_pic: data.avatar_url,
 url: data.html_url,
 type: data.type,
 admin: data.site_admin,
 company: data.company,
 blog: data.blog,
 location: data.location,
 email: data.email,
 public_repo: data.public_repos,
 public_gists: data.public_gists,
 followers: data.followers,
 following: data.following,
 ceated_at: data.created_at,
 updated_at: data.updated_at
}
resolve(hasil)})})  
}

async function tts(text = 'error', lang = 'es') {
  return new Promise((resolve, reject) => {
    try {
      const tts = gtts(lang);
      const filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav');
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath));
        unlinkSync(filePath);
      });
    } catch (e) {
      reject(e);
    }
  });
}