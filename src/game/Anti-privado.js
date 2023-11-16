export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
    if (m.isBaileys && m.fromMe) return !0;
    if (m.isGroup) return !1;
    if (!m.message) return !0;
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    if (bot.antiPrivate && !isOwner && !isROwner) {
      await m.reply(`[❗] 𝘏𝘰𝘭𝘢 @${m.sender.split`@`[0]}\n𝘦𝘴𝘵𝘢 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 𝘩𝘢𝘣𝘭𝘢𝘳 𝘢𝘭 𝘱𝘳𝘪𝘷 𝘥𝘦𝘭 𝘣𝘰𝘵, 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘵𝘦 𝘤𝘰𝘯 𝘮𝘪 𝘰𝘸𝘯𝘦𝘳 𝘺 𝘦𝘯 𝘣𝘳𝘦𝘷𝘦𝘴 𝘳𝘦𝘤𝘪𝘣𝘪𝘳𝘢𝘴 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰𝘯. \n𝘊𝘰𝘱𝘪𝘢 𝘦𝘭 𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 ✨\n⬇️ 𝘦𝘯𝘤𝘶𝘦𝘯𝘵𝘳𝘢𝘮𝘦 𝘤𝘰𝘮𝘰 ⬇️`, false, {mentions: [m.sender]});
      await m.reply(`polvora6969`)
      await this.updateBlockStatus(m.chat, 'block');
    }
    return !1;
  }
  