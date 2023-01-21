module.exports = async(sock, m, prefix, command, mentionByReply, setQuoted) => {
const Nomernya = mentionByReply
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|seconds`, description: `ADD PREMIUM ${mess.time.seconds.toUpperCase()}`},
{title: `${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|minutes`, description: `ADD PREMIUM ${mess.time.minutes.toUpperCase()}`},
{title: `${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|hours`, description: `ADD PREMIUM ${mess.time.hours.toUpperCase()}`},
{title: `${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|days`, description: `ADD PREMIUM ${mess.time.days.toUpperCase()}`},
{title: `${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|weeks`, description: `ADD PREMIUM ${mess.time.weeks.toUpperCase()}`},
{title: `${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|months`, description: `ADD PREMIUM ${mess.time.months.toUpperCase()}`},
{title: `PERMANENT`, rowId: `${prefix + command} ${Nomernya}|permanent`, description: `ADD PREMIUM PERMANENT`},
]}]
const listMessage = { text: `ADD PREMIUM`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}