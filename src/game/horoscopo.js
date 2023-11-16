import {Maker} from 'imagemaker.js';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  const response = args.join(' ').split('|');
  if (!args[0]) throw '*[❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊*';
  if (command == 'horoscopo gemenis') {
    try {
      await conn.reply(m.chat, '*[❗] 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙉𝘿𝙊 𝙏𝙐 𝙃𝙊𝙍𝙊𝙎𝘾𝙊𝙋𝙊 𝘿𝙀 𝙃𝙊𝙔...*', m);
      const res = await new Maker().Ephoto360('https://www.lecturas.com/horoscopo/geminis', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙍. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊*', m);
    }
  }
}
handler.command = /^horoscopo gemenis/i;
export default handler;
