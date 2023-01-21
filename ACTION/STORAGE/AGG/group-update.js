module.exports = async(sock, anu) => {
try {
const from = anu.id
const botNumber = sock.decodeJid(sock.user.id)
const groupMet = await sock.groupMetadata(from)
const groupName = groupMet.subject  
try{
var welcome = db.data.chats[from].welcome
} catch {
var welcome = false
}

if (welcome) {
if (anu[0].announce == true) {
let teks = `\`\`\`「  Group Settings Change  」\`\`\`\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`
sock.sendMessage(from, { text: teks }) 
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group telah ditutup oleh admin`,`green`))
} else if(anu[0].announce == false) {
let teks = `\`\`\`「  Group Settings Change  」\`\`\`\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`
sock.sendMessage(from, { text: teks }) 
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group telah dibuka oleh admin`,`green`))
} else if (anu[0].restrict == true) {
let teks = `\`\`\`「  Group Settings Change  」\`\`\`\n\nInfo group telah ditutup, Sekarang peserta tidak dapat mengedit info group !`
sock.sendMessage(from, { text: teks }) 
console.log(color("[GRUP UPDATE]", "magenta"), color(`Info group telah ditutup`,`green`))
} else if (anu[0].restrict == false) {
let teks = `\`\`\`「  Group Settings Change  」\`\`\`\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`
sock.sendMessage(from, { text: teks }) 
console.log(color("[GRUP UPDATE]", "magenta"), color(`Info group telah dibuka`,`green`))
} else {
let teks = `\`\`\`「  Group Settings Change  」\`\`\`\n\nGroup Subject telah diganti menjadi *${groupName}* !`
sock.sendMessage(from, { text: teks }) 
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group Subject telah diganti`,`green`))
}
}

} catch (err) {
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})