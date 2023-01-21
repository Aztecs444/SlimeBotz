module.exports = async(sock, json) => {
const botNumber = sock.decodeJid(sock.user.id)
const callerId = json.content[0].attrs['call-creator']
try{
var ownerNumber = db.data.settings[botNumber].nomerowner
} catch {
var ownerNumber = nomerOwner
}
try{
var anticall = db.data.settings[botNumber].anticall
} catch {
var anticall = false
}
if (anticall && json.content[0].tag == 'offer') {
if (callerId.split("@")[0] == ownerNumber) return
console.log(chalk.bgGreen(color("[ CALLING ]", "black")),chalk.white(`Call from ${callerId.split("@")[0]}`) )
setTimeout(() => {
sock.sendMessage(`${ownerNumber}@s.whatsapp.net`, { text: mess.security.anticall.text2(callerId), mentions: [callerId] })
}, 5000)
setTimeout(() => {
sock.updateBlockStatus(callerId, "block")
}, 2000)
setTimeout(() => {
sock.sendMessage(callerId, { text: mess.security.anticall.text1})
}, 1000)
}
}