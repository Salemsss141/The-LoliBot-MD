let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` ايش بدك `, `مش فاضي لك`, `_خلصني قول وش بدك_`, `_ها حياتي_`, '  انوس دائما في خدمتك😄'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /انوس وينك|انوس|اين انوس/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
