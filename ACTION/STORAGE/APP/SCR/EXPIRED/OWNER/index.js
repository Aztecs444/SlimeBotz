module.exports = async(sock, m, prefix, command, text, setQuoted) => {
if (text.split('|')[0] && text.split('|')[1] == `seconds`) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|1`, description: `ADD OWNER 1 ${mess.time.seconds.toUpperCase()}`},
{title: `2 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|2`, description: `ADD OWNER 2 ${mess.time.seconds.toUpperCase()}`},
{title: `3 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|3`, description: `ADD OWNER 3 ${mess.time.seconds.toUpperCase()}`},
{title: `4 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|4`, description: `ADD OWNER 4 ${mess.time.seconds.toUpperCase()}`},
{title: `5 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|5`, description: `ADD OWNER 5 ${mess.time.seconds.toUpperCase()}`},
{title: `6 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|6`, description: `ADD OWNER 6 ${mess.time.seconds.toUpperCase()}`},
{title: `7 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|7`, description: `ADD OWNER 7 ${mess.time.seconds.toUpperCase()}`},
{title: `8 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|8`, description: `ADD OWNER 8 ${mess.time.seconds.toUpperCase()}`},
{title: `9 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|9`, description: `ADD OWNER 9 ${mess.time.seconds.toUpperCase()}`},
{title: `10 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|10`, description: `ADD OWNER 10 ${mess.time.seconds.toUpperCase()}`},
{title: `11 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|11`, description: `ADD OWNER 11 ${mess.time.seconds.toUpperCase()}`},
{title: `12 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|12`, description: `ADD OWNER 12 ${mess.time.seconds.toUpperCase()}`},
{title: `13 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|13`, description: `ADD OWNER 13 ${mess.time.seconds.toUpperCase()}`},
{title: `14 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|14`, description: `ADD OWNER 14 ${mess.time.seconds.toUpperCase()}`},
{title: `15 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|15`, description: `ADD OWNER 15 ${mess.time.seconds.toUpperCase()}`},
{title: `16 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|16`, description: `ADD OWNER 16 ${mess.time.seconds.toUpperCase()}`},
{title: `17 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|17`, description: `ADD OWNER 17 ${mess.time.seconds.toUpperCase()}`},
{title: `18 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|18`, description: `ADD OWNER 18 ${mess.time.seconds.toUpperCase()}`},
{title: `19 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|19`, description: `ADD OWNER 19 ${mess.time.seconds.toUpperCase()}`},
{title: `20 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|20`, description: `ADD OWNER 20 ${mess.time.seconds.toUpperCase()}`},
{title: `21 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|21`, description: `ADD OWNER 21 ${mess.time.seconds.toUpperCase()}`},
{title: `22 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|22`, description: `ADD OWNER 22 ${mess.time.seconds.toUpperCase()}`},
{title: `23 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|23`, description: `ADD OWNER 23 ${mess.time.seconds.toUpperCase()}`},
{title: `24 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|24`, description: `ADD OWNER 24 ${mess.time.seconds.toUpperCase()}`},
{title: `25 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|25`, description: `ADD OWNER 25 ${mess.time.seconds.toUpperCase()}`},
{title: `26 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|26`, description: `ADD OWNER 26 ${mess.time.seconds.toUpperCase()}`},
{title: `27 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|27`, description: `ADD OWNER 27 ${mess.time.seconds.toUpperCase()}`},
{title: `28 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|28`, description: `ADD OWNER 28 ${mess.time.seconds.toUpperCase()}`},
{title: `29 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|29`, description: `ADD OWNER 29 ${mess.time.seconds.toUpperCase()}`},
{title: `30 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|30`, description: `ADD OWNER 30 ${mess.time.seconds.toUpperCase()}`},
{title: `31 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|31`, description: `ADD OWNER 31 ${mess.time.seconds.toUpperCase()}`},
{title: `32 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|32`, description: `ADD OWNER 32 ${mess.time.seconds.toUpperCase()}`},
{title: `33 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|33`, description: `ADD OWNER 33 ${mess.time.seconds.toUpperCase()}`},
{title: `34 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|34`, description: `ADD OWNER 34 ${mess.time.seconds.toUpperCase()}`},
{title: `35 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|35`, description: `ADD OWNER 35 ${mess.time.seconds.toUpperCase()}`},
{title: `36 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|36`, description: `ADD OWNER 36 ${mess.time.seconds.toUpperCase()}`},
{title: `37 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|37`, description: `ADD OWNER 37 ${mess.time.seconds.toUpperCase()}`},
{title: `38 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|38`, description: `ADD OWNER 38 ${mess.time.seconds.toUpperCase()}`},
{title: `39 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|39`, description: `ADD OWNER 39 ${mess.time.seconds.toUpperCase()}`},
{title: `40 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|40`, description: `ADD OWNER 40 ${mess.time.seconds.toUpperCase()}`},
{title: `41 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|41`, description: `ADD OWNER 41 ${mess.time.seconds.toUpperCase()}`},
{title: `42 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|42`, description: `ADD OWNER 42 ${mess.time.seconds.toUpperCase()}`},
{title: `43 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|43`, description: `ADD OWNER 43 ${mess.time.seconds.toUpperCase()}`},
{title: `44 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|44`, description: `ADD OWNER 44 ${mess.time.seconds.toUpperCase()}`},
{title: `45 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|45`, description: `ADD OWNER 45 ${mess.time.seconds.toUpperCase()}`},
{title: `46 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|46`, description: `ADD OWNER 46 ${mess.time.seconds.toUpperCase()}`},
{title: `47 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|47`, description: `ADD OWNER 47 ${mess.time.seconds.toUpperCase()}`},
{title: `48 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|48`, description: `ADD OWNER 48 ${mess.time.seconds.toUpperCase()}`},
{title: `49 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|49`, description: `ADD OWNER 49 ${mess.time.seconds.toUpperCase()}`},
{title: `50 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|50`, description: `ADD OWNER 50 ${mess.time.seconds.toUpperCase()}`},
{title: `51 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|51`, description: `ADD OWNER 51 ${mess.time.seconds.toUpperCase()}`},
{title: `52 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|52`, description: `ADD OWNER 52 ${mess.time.seconds.toUpperCase()}`},
{title: `53 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|53`, description: `ADD OWNER 53 ${mess.time.seconds.toUpperCase()}`},
{title: `54 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|54`, description: `ADD OWNER 54 ${mess.time.seconds.toUpperCase()}`},
{title: `55 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|55`, description: `ADD OWNER 55 ${mess.time.seconds.toUpperCase()}`},
{title: `56 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|56`, description: `ADD OWNER 56 ${mess.time.seconds.toUpperCase()}`},
{title: `57 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|57`, description: `ADD OWNER 57 ${mess.time.seconds.toUpperCase()}`},
{title: `58 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|58`, description: `ADD OWNER 58 ${mess.time.seconds.toUpperCase()}`},
{title: `59 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|59`, description: `ADD OWNER 59 ${mess.time.seconds.toUpperCase()}`},
{title: `60 ${mess.time.seconds.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|seconds|60`, description: `ADD OWNER 60 ${mess.time.seconds.toUpperCase()}`},
]}]
const listMessage = { text: `ADD OWNER ${text.split('|')[1].toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split('|')[0] && text.split('|')[1] == `minutes`) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|1`, description: `ADD OWNER 1 ${mess.time.minutes.toUpperCase()}`},
{title: `2 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|2`, description: `ADD OWNER 2 ${mess.time.minutes.toUpperCase()}`},
{title: `3 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|3`, description: `ADD OWNER 3 ${mess.time.minutes.toUpperCase()}`},
{title: `4 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|4`, description: `ADD OWNER 4 ${mess.time.minutes.toUpperCase()}`},
{title: `5 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|5`, description: `ADD OWNER 5 ${mess.time.minutes.toUpperCase()}`},
{title: `6 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|6`, description: `ADD OWNER 6 ${mess.time.minutes.toUpperCase()}`},
{title: `7 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|7`, description: `ADD OWNER 7 ${mess.time.minutes.toUpperCase()}`},
{title: `8 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|8`, description: `ADD OWNER 8 ${mess.time.minutes.toUpperCase()}`},
{title: `9 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|9`, description: `ADD OWNER 9 ${mess.time.minutes.toUpperCase()}`},
{title: `10 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|10`, description: `ADD OWNER 10 ${mess.time.minutes.toUpperCase()}`},
{title: `11 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|11`, description: `ADD OWNER 11 ${mess.time.minutes.toUpperCase()}`},
{title: `12 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|12`, description: `ADD OWNER 12 ${mess.time.minutes.toUpperCase()}`},
{title: `13 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|13`, description: `ADD OWNER 13 ${mess.time.minutes.toUpperCase()}`},
{title: `14 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|14`, description: `ADD OWNER 14 ${mess.time.minutes.toUpperCase()}`},
{title: `15 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|15`, description: `ADD OWNER 15 ${mess.time.minutes.toUpperCase()}`},
{title: `16 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|16`, description: `ADD OWNER 16 ${mess.time.minutes.toUpperCase()}`},
{title: `17 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|17`, description: `ADD OWNER 17 ${mess.time.minutes.toUpperCase()}`},
{title: `18 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|18`, description: `ADD OWNER 18 ${mess.time.minutes.toUpperCase()}`},
{title: `19 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|19`, description: `ADD OWNER 19 ${mess.time.minutes.toUpperCase()}`},
{title: `20 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|20`, description: `ADD OWNER 20 ${mess.time.minutes.toUpperCase()}`},
{title: `21 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|21`, description: `ADD OWNER 21 ${mess.time.minutes.toUpperCase()}`},
{title: `22 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|22`, description: `ADD OWNER 22 ${mess.time.minutes.toUpperCase()}`},
{title: `23 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|23`, description: `ADD OWNER 23 ${mess.time.minutes.toUpperCase()}`},
{title: `24 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|24`, description: `ADD OWNER 24 ${mess.time.minutes.toUpperCase()}`},
{title: `25 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|25`, description: `ADD OWNER 25 ${mess.time.minutes.toUpperCase()}`},
{title: `26 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|26`, description: `ADD OWNER 26 ${mess.time.minutes.toUpperCase()}`},
{title: `27 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|27`, description: `ADD OWNER 27 ${mess.time.minutes.toUpperCase()}`},
{title: `28 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|28`, description: `ADD OWNER 28 ${mess.time.minutes.toUpperCase()}`},
{title: `29 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|29`, description: `ADD OWNER 29 ${mess.time.minutes.toUpperCase()}`},
{title: `30 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|30`, description: `ADD OWNER 30 ${mess.time.minutes.toUpperCase()}`},
{title: `31 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|31`, description: `ADD OWNER 31 ${mess.time.minutes.toUpperCase()}`},
{title: `32 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|32`, description: `ADD OWNER 32 ${mess.time.minutes.toUpperCase()}`},
{title: `33 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|33`, description: `ADD OWNER 33 ${mess.time.minutes.toUpperCase()}`},
{title: `34 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|34`, description: `ADD OWNER 34 ${mess.time.minutes.toUpperCase()}`},
{title: `35 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|35`, description: `ADD OWNER 35 ${mess.time.minutes.toUpperCase()}`},
{title: `36 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|36`, description: `ADD OWNER 36 ${mess.time.minutes.toUpperCase()}`},
{title: `37 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|37`, description: `ADD OWNER 37 ${mess.time.minutes.toUpperCase()}`},
{title: `38 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|38`, description: `ADD OWNER 38 ${mess.time.minutes.toUpperCase()}`},
{title: `39 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|39`, description: `ADD OWNER 39 ${mess.time.minutes.toUpperCase()}`},
{title: `40 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|40`, description: `ADD OWNER 40 ${mess.time.minutes.toUpperCase()}`},
{title: `41 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|41`, description: `ADD OWNER 41 ${mess.time.minutes.toUpperCase()}`},
{title: `42 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|42`, description: `ADD OWNER 42 ${mess.time.minutes.toUpperCase()}`},
{title: `43 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|43`, description: `ADD OWNER 43 ${mess.time.minutes.toUpperCase()}`},
{title: `44 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|44`, description: `ADD OWNER 44 ${mess.time.minutes.toUpperCase()}`},
{title: `45 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|45`, description: `ADD OWNER 45 ${mess.time.minutes.toUpperCase()}`},
{title: `46 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|46`, description: `ADD OWNER 46 ${mess.time.minutes.toUpperCase()}`},
{title: `47 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|47`, description: `ADD OWNER 47 ${mess.time.minutes.toUpperCase()}`},
{title: `48 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|48`, description: `ADD OWNER 48 ${mess.time.minutes.toUpperCase()}`},
{title: `49 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|49`, description: `ADD OWNER 49 ${mess.time.minutes.toUpperCase()}`},
{title: `50 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|50`, description: `ADD OWNER 50 ${mess.time.minutes.toUpperCase()}`},
{title: `51 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|51`, description: `ADD OWNER 51 ${mess.time.minutes.toUpperCase()}`},
{title: `52 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|52`, description: `ADD OWNER 52 ${mess.time.minutes.toUpperCase()}`},
{title: `53 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|53`, description: `ADD OWNER 53 ${mess.time.minutes.toUpperCase()}`},
{title: `54 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|54`, description: `ADD OWNER 54 ${mess.time.minutes.toUpperCase()}`},
{title: `55 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|55`, description: `ADD OWNER 55 ${mess.time.minutes.toUpperCase()}`},
{title: `56 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|56`, description: `ADD OWNER 56 ${mess.time.minutes.toUpperCase()}`},
{title: `57 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|57`, description: `ADD OWNER 57 ${mess.time.minutes.toUpperCase()}`},
{title: `58 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|58`, description: `ADD OWNER 58 ${mess.time.minutes.toUpperCase()}`},
{title: `59 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|59`, description: `ADD OWNER 59 ${mess.time.minutes.toUpperCase()}`},
{title: `60 ${mess.time.minutes.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|minutes|60`, description: `ADD OWNER 60 ${mess.time.minutes.toUpperCase()}`},
]}]
const listMessage = { text: `ADD OWNER ${text.split('|')[1].toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split('|')[0] && text.split('|')[1] == `hours`) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|1`, description: `ADD OWNER 1 ${mess.time.hours.toUpperCase()}`},
{title: `2 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|2`, description: `ADD OWNER 2 ${mess.time.hours.toUpperCase()}`},
{title: `3 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|3`, description: `ADD OWNER 3 ${mess.time.hours.toUpperCase()}`},
{title: `4 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|4`, description: `ADD OWNER 4 ${mess.time.hours.toUpperCase()}`},
{title: `5 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|5`, description: `ADD OWNER 5 ${mess.time.hours.toUpperCase()}`},
{title: `6 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|6`, description: `ADD OWNER 6 ${mess.time.hours.toUpperCase()}`},
{title: `7 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|7`, description: `ADD OWNER 7 ${mess.time.hours.toUpperCase()}`},
{title: `8 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|8`, description: `ADD OWNER 8 ${mess.time.hours.toUpperCase()}`},
{title: `9 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|9`, description: `ADD OWNER 9 ${mess.time.hours.toUpperCase()}`},
{title: `10 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|10`, description: `ADD OWNER 10 ${mess.time.hours.toUpperCase()}`},
{title: `11 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|11`, description: `ADD OWNER 11 ${mess.time.hours.toUpperCase()}`},
{title: `12 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|12`, description: `ADD OWNER 12 ${mess.time.hours.toUpperCase()}`},
{title: `13 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|13`, description: `ADD OWNER 13 ${mess.time.hours.toUpperCase()}`},
{title: `14 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|14`, description: `ADD OWNER 14 ${mess.time.hours.toUpperCase()}`},
{title: `15 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|15`, description: `ADD OWNER 15 ${mess.time.hours.toUpperCase()}`},
{title: `16 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|16`, description: `ADD OWNER 16 ${mess.time.hours.toUpperCase()}`},
{title: `17 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|17`, description: `ADD OWNER 17 ${mess.time.hours.toUpperCase()}`},
{title: `18 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|18`, description: `ADD OWNER 18 ${mess.time.hours.toUpperCase()}`},
{title: `19 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|19`, description: `ADD OWNER 19 ${mess.time.hours.toUpperCase()}`},
{title: `20 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|20`, description: `ADD OWNER 20 ${mess.time.hours.toUpperCase()}`},
{title: `21 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|21`, description: `ADD OWNER 21 ${mess.time.hours.toUpperCase()}`},
{title: `22 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|22`, description: `ADD OWNER 22 ${mess.time.hours.toUpperCase()}`},
{title: `23 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|23`, description: `ADD OWNER 23 ${mess.time.hours.toUpperCase()}`},
{title: `24 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|hours|24`, description: `ADD OWNER 24 ${mess.time.hours.toUpperCase()}`},
]}]
const listMessage = { text: `ADD OWNER ${text.split('|')[1].toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split('|')[0] && text.split('|')[1] == `days`) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|1`, description: `ADD OWNER 1 ${mess.time.days.toUpperCase()}`},
{title: `2 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|2`, description: `ADD OWNER 2 ${mess.time.days.toUpperCase()}`},
{title: `3 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|3`, description: `ADD OWNER 3 ${mess.time.days.toUpperCase()}`},
{title: `4 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|4`, description: `ADD OWNER 4 ${mess.time.days.toUpperCase()}`},
{title: `5 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|5`, description: `ADD OWNER 5 ${mess.time.days.toUpperCase()}`},
{title: `6 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|6`, description: `ADD OWNER 6 ${mess.time.days.toUpperCase()}`},
{title: `7 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|days|7`, description: `ADD OWNER 7 ${mess.time.days.toUpperCase()}`},
]}]
const listMessage = { text: `ADD OWNER ${text.split('|')[1].toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split('|')[0] && text.split('|')[1] == `weeks`) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|weeks|1`, description: `ADD OWNER 1 ${mess.time.weeks.toUpperCase()}`},
{title: `2 ${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|weeks|2`, description: `ADD OWNER 2 ${mess.time.weeks.toUpperCase()}`},
{title: `3 ${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|weeks|3`, description: `ADD OWNER 3 ${mess.time.weeks.toUpperCase()}`},
{title: `4 ${mess.time.weeks.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|weeks|4`, description: `ADD OWNER 4 ${mess.time.weeks.toUpperCase()}`},
]}]
const listMessage = { text: `ADD OWNER ${text.split('|')[1].toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split('|')[0] && text.split('|')[1] == `months`) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|1`, description: `ADD OWNER 1 ${mess.time.months.toUpperCase()}`},
{title: `2 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|2`, description: `ADD OWNER 2 ${mess.time.months.toUpperCase()}`},
{title: `3 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|3`, description: `ADD OWNER 3 ${mess.time.months.toUpperCase()}`},
{title: `4 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|4`, description: `ADD OWNER 4 ${mess.time.months.toUpperCase()}`},
{title: `5 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|5`, description: `ADD OWNER 5 ${mess.time.months.toUpperCase()}`},
{title: `6 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|6`, description: `ADD OWNER 6 ${mess.time.months.toUpperCase()}`},
{title: `7 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|7`, description: `ADD OWNER 7 ${mess.time.months.toUpperCase()}`},
{title: `8 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|8`, description: `ADD OWNER 8 ${mess.time.months.toUpperCase()}`},
{title: `9 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|9`, description: `ADD OWNER 9 ${mess.time.months.toUpperCase()}`},
{title: `10 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|10`, description: `ADD OWNER 10 ${mess.time.months.toUpperCase()}`},
{title: `11 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|11`, description: `ADD OWNER 11 ${mess.time.months.toUpperCase()}`},
{title: `12 ${mess.time.months.toUpperCase()}`, rowId: `${prefix + command} ${text.split('|')[0]}|months|12`, description: `ADD OWNER 12 ${mess.time.months.toUpperCase()}`},
]}]
const listMessage = { text: `ADD OWNER ${text.split('|')[1].toUpperCase()}`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
}