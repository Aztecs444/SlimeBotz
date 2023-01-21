module.exports = async(sock, m, prefix, command, setQuoted) => {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("1hours")}`, description: `${command.toUpperCase()} 1 ${mess.time.hours.toUpperCase()}`},
{title: `2 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("2hours")}`, description: `${command.toUpperCase()} 2 ${mess.time.hours.toUpperCase()}`},
{title: `3 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("3hours")}`, description: `${command.toUpperCase()} 3 ${mess.time.hours.toUpperCase()}`},
{title: `4 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("4hours")}`, description: `${command.toUpperCase()} 4 ${mess.time.hours.toUpperCase()}`},
{title: `5 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("5hours")}`, description: `${command.toUpperCase()} 5 ${mess.time.hours.toUpperCase()}`},
{title: `6 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("6hours")}`, description: `${command.toUpperCase()} 6 ${mess.time.hours.toUpperCase()}`},
{title: `7 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("7hours")}`, description: `${command.toUpperCase()} 7 ${mess.time.hours.toUpperCase()}`},
{title: `8 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("8hours")}`, description: `${command.toUpperCase()} 8 ${mess.time.hours.toUpperCase()}`},
{title: `9 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("9hours")}`, description: `${command.toUpperCase()} 9 ${mess.time.hours.toUpperCase()}`},
{title: `10 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("10hours")}`, description: `${command.toUpperCase()} 10 ${mess.time.hours.toUpperCase()}`},
{title: `11 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("11hours")}`, description: `${command.toUpperCase()} 11 ${mess.time.hours.toUpperCase()}`},
{title: `12 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("12hours")}`, description: `${command.toUpperCase()} 12 ${mess.time.hours.toUpperCase()}`},
{title: `13 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("13hours")}`, description: `${command.toUpperCase()} 13 ${mess.time.hours.toUpperCase()}`},
{title: `14 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("14hours")}`, description: `${command.toUpperCase()} 14 ${mess.time.hours.toUpperCase()}`},
{title: `15 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("15hours")}`, description: `${command.toUpperCase()} 15 ${mess.time.hours.toUpperCase()}`},
{title: `16 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("16hours")}`, description: `${command.toUpperCase()} 16 ${mess.time.hours.toUpperCase()}`},
{title: `17 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("17hours")}`, description: `${command.toUpperCase()} 17 ${mess.time.hours.toUpperCase()}`},
{title: `18 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("18hours")}`, description: `${command.toUpperCase()} 18 ${mess.time.hours.toUpperCase()}`},
{title: `19 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("19hours")}`, description: `${command.toUpperCase()} 19 ${mess.time.hours.toUpperCase()}`},
{title: `20 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("20hours")}`, description: `${command.toUpperCase()} 20 ${mess.time.hours.toUpperCase()}`},
{title: `21 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("21hours")}`, description: `${command.toUpperCase()} 21 ${mess.time.hours.toUpperCase()}`},
{title: `22 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("22hours")}`, description: `${command.toUpperCase()} 22 ${mess.time.hours.toUpperCase()}`},
{title: `23 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("23hours")}`, description: `${command.toUpperCase()} 23 ${mess.time.hours.toUpperCase()}`},
{title: `24 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} hours ${toMs("24hours")}`, description: `${command.toUpperCase()} 24 ${mess.time.hours.toUpperCase()}`},
]}]
const listMessage = { text: `${command.toUpperCase()} ${mess.time.hours.toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}