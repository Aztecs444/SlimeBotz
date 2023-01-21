module.exports = async(sock, m, prefix, command, setQuoted) => {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("1days")}`, description: `${command.toUpperCase()} 1 ${mess.time.days.toUpperCase()}`},
{title: `2 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("2days")}`, description: `${command.toUpperCase()} 2 ${mess.time.days.toUpperCase()}`},
{title: `3 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("3days")}`, description: `${command.toUpperCase()} 3 ${mess.time.days.toUpperCase()}`},
{title: `4 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("4days")}`, description: `${command.toUpperCase()} 4 ${mess.time.days.toUpperCase()}`},
{title: `5 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("5days")}`, description: `${command.toUpperCase()} 5 ${mess.time.days.toUpperCase()}`},
{title: `6 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("6days")}`, description: `${command.toUpperCase()} 6 ${mess.time.days.toUpperCase()}`},
{title: `7 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} days ${toMs("7days")}`, description: `${command.toUpperCase()} 7 ${mess.time.days.toUpperCase()}`},
]}]
const listMessage = { text: `${command.toUpperCase()} ${mess.time.days.toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}