import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/creador.mp3'
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤* 
*Wa.me/967730348571 (no bot)*
*Wa.me/967771160204 (bot)*
*Wa.me/967771160204 (bot²)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑻𝒉𝒆انوس-𝑴𝑫',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/967730348571`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/LO17u6F9Fw4LE9izmmyOGz', 'grupos', null, null, [
['🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣', '.infobot'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.donar'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
