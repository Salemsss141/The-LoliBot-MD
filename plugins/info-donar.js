let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let str = `
💖 مرحبًا!! أنا أقدر إذا كنت تدعمني بالتبرع. 🎁 أحب العمل الذي حققته وأشاركه معك. شكرًا لك!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
يوتيوب - 
*https://youtube.com/@ABDALLAH_MOHAMED*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()
  
conn.sendHydrated(m.chat, str, `ELGAZAR BOT\n${asistencia}\n\n` + wm, media, 'https://youtube.com/@ABDALLAH_MOHAMED', '🎁  | تبرّع', null, null, [
[' | المجموعات 🔰', '.grupos'],
[' | المالك 💗', '#owner'],
[' | الأوامر ☘️', '/menu']
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|التبرع|donating$/i
handler.exp = 80
export default handler
