module.exports = async(sock, m, prefix, command, setQuoted) => {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${m.chat}|seconds`, description: `ADD SEWA ${mess.time.seconds.toUpperCase()}`},
{title: `${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${m.chat}|minutes`, description: `ADD SEWA ${mess.time.minutes.toUpperCase()}`},
{title: `${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${m.chat}|hours`, description: `ADD SEWA ${mess.time.hours.toUpperCase()}`},
{title: `${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${m.chat}|days`, description: `ADD SEWA ${mess.time.days.toUpperCase()}`},
{title: `${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${m.chat}|weeks`, description: `ADD SEWA ${mess.time.weeks.toUpperCase()}`},
{title: `${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${m.chat}|months`, description: `ADD SEWA ${mess.time.months.toUpperCase()}`},
{title: `PERMANENT`, rowId: `${prefix + command} ${m.chat}|permanent`, description: `ADD SEWA PERMANENT`},
]}]
const listMessage = { text: `ADD SEWA`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}