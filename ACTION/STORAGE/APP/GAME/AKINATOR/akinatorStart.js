module.exports = async (sock, m, prefix, command, setReply, setQuoted) => {
try{
await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolhumankey}`).then(res => {
let server = res.result.server
let frontaddr = res.result.frontaddr
let session = res.result.session
let signature = res.result.signature
let step = res.result.step
let question = res.result.question
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "YA", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|0`, description: "YA BENAR"},
{title: "TIDAK", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|1`, description: "TIDAK BENAR"},
{title: "TIDAK TAU", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|2`, description: "KURANG TAU"},
{title: "MUNGKIN", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|3`, description: "SEPERTINYA IY"},
{title: "MUNGKIN TIDAK", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|4`, description: "SEPERTINYA TIDAK"},
]}]
const listMessage = { text: `${question}`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
})
} catch (err) {
console.log(err)
setReply(mess.error.apikey)
}
}