module.exports = async(sock, m, prefix, command, text, setQuoted) => {
let ano = text.split("https://chat.whatsapp.com/")[1]
let nana = await sock.groupAcceptInvite(ano)
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${nana}|seconds`, description: `ADD SEWA ${mess.time.seconds.toUpperCase()}`},
{title: `${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${nana}|minutes`, description: `ADD SEWA ${mess.time.minutes.toUpperCase()}`},
{title: `${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${nana}|hours`, description: `ADD SEWA ${mess.time.hours.toUpperCase()}`},
{title: `${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${nana}|days`, description: `ADD SEWA ${mess.time.days.toUpperCase()}`},
{title: `${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${nana}|weeks`, description: `ADD SEWA ${mess.time.weeks.toUpperCase()}`},
{title: `${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${nana}|months`, description: `ADD SEWA ${mess.time.months.toUpperCase()}`},
{title: `PERMANENT`, rowId: `${prefix + command} ${nana}|permanent`, description: `ADD SEWA PERMANENT`},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}