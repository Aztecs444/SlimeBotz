module.exports = async (sock, m, q, prefix, command, setReply, setQuoted) => {
try{
let server = q.split("|")[0]
let frontaddr = q.split("|")[1]
let session = q.split("|")[2]
let signature = q.split("|")[3]
let step1 = q.split("|")[4]
await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolhumankey}&server=${server}&session=${session}&signature=${signature}&step=${step1}`).then(res => {
let step2 = res.result.step
let question = res.result.question
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
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
})
} catch (err) {
console.log(err)
setReply(mess.error.apikey)
}
}










