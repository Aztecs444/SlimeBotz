module.exports = async (sock, m, q, prefix, command, setReply, setQuoted) => {
try{
let server = q.split("|")[0]
let frontaddr = q.split("|")[1]
let session = q.split("|")[2]
let signature = q.split("|")[3]
let step1 = q.split("|")[4]
let teks = q.split("|")[5]
let data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolhumankey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step1}&answer=${teks}`)
let question = data.result.question
let step2 = data.result.step
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "YA", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|0`, description: "YA BENAR"},
{title: "TIDAK", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|1`, description: "TIDAK BENAR"},
{title: "TIDAK TAU", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|2`, description: "KURANG TAU"},
{title: "MUNGKIN", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|3`, description: "SEPERTINYA IY"},
{title: "MUNGKIN TIDAK", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|4`, description: "SEPERTINYA TIDAK"},
{title: "KEMBALI", rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|5`, description: "KEMBALI KE PERTANYAAN SEBELUMNYA"},
]}]
const listMessage = { text: `${question}`, buttonText: "Click Here", sections }
if (data.result.question) {
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else {
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: "Main Lagi" }, type: 1 }]
let name = data.result.name
let description = data.result.description
let image = data.result.image
sock.sendMessage(m.chat, { image: { url: image }, caption: `Saya tebak pasti itu ${name}`, footer: copyrightnya, buttons })
}
} catch (err) {
console.log(err)
setReply(mess.error.apikey)
}
}