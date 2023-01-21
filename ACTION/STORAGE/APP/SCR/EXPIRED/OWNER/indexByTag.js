module.exports = async(sock, m, prefix, command, mentionByTag, setQuoted) => {
const Nomernya = mentionByTag[0]
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|seconds`, description: `ADD OWNER ${mess.time.seconds.toUpperCase()}`},
{title: `${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|minutes`, description: `ADD OWNER ${mess.time.minutes.toUpperCase()}`},
{title: `${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|hours`, description: `ADD OWNER ${mess.time.hours.toUpperCase()}`},
{title: `${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|days`, description: `ADD OWNER ${mess.time.days.toUpperCase()}`},
{title: `${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|weeks`, description: `ADD OWNER ${mess.time.weeks.toUpperCase()}`},
{title: `${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${Nomernya}|months`, description: `ADD OWNER ${mess.time.months.toUpperCase()}`},
{title: `PERMANENT`, rowId: `${prefix + command} ${Nomernya}|permanent`, description: `ADD OWNER PERMANENT`},
]}]
const listMessage = { text: `ADD OWNER`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}