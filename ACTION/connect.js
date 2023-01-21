"use strict"
require("../ACTION/STORAGE/ACC/global")
const base = require("../ACTION/STORAGE/ACC/base") 
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss")			
const wita = moment.tz("Asia/Makassar").format("HH:mm:ss")			
const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss")	




var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}

switch(bulan1) { 
case 0: bulan1 = "Fanuari"; break;
case 1: bulan1 = "Februari"; break; 
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break; 
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break; 
}

switch(jams){
case 0: jams = "Malem"; break;
case 1: jams = "Malem"; break;
case 2: jams = "Malem"; break;
case 3: jams = "Pagi"; break;
case 4: jams = "Pagi"; break;
case 5: jams = "Pagi"; break;
case 6: jams = "Pagi"; break;
case 7: jams = "Pagi"; break;
case 8: jams = "Pagi"; break;
case 9: jams = "Pagi"; break;
case 10: jams = "Pagi"; break;
case 11: jams = "Siang"; break;
case 12: jams = "Siang"; break;
case 13: jams = "Siang"; break;
case 14: jams = "Siang"; break;
case 15: jams = "Sore"; break;
case 16: jams = "Sore"; break;
case 17: jams = "Sore"; break;
case 18: jams = "Malem"; break;
case 19: jams = "Malem"; break;
case 20: jams = "Malem"; break;
case 21: jams = "Malem"; break;
case 22: jams = "Malem"; break;
case 23: jams = "Malem"; break;
}

var tampilHari = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun; 
var tampilJam = "" + "Jams : " + jams + ":" + menit + ":" + detik + " Wib";
var tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
var tampilWaktu = jams + ":" + menit + ":" + detik;

var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 1: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 2: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 3: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 4: waktoonyabro = "Selamat Pagi Owner..✨"; break; 
case 5: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 6: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 7: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 8: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 9: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 10: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 11: waktoonyabro = "Selamat Siang Owner..🔥"; break; 
case 12: waktoonyabro = "Selamat Siang Owner..🔥"; break;
case 13: waktoonyabro = "Selamat Siang Owner..🔥"; break;
case 14: waktoonyabro = "Selamat Siang Owner..🔥"; break;
case 15: waktoonyabro = "Selamat Sore Owner..🌇"; break;
case 16: waktoonyabro = "Selamat Sore Owner..🌇"; break;
case 17: waktoonyabro = "Selamat Sore Owner..🌇"; break;
case 18: waktoonyabro = "Selamat Malam Owner..🌃"; break; 
case 19: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 20: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 21: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 22: waktoonyabro = "Selamat Malam Owner..🌃"; break; 
case 23: waktoonyabro = "Selamat Malam Owner..🌃"; break;
}

var tampilUcapan = "" + waktoonyabro;

if (time == "00:00:00") {
db.data.dashboard = []
}


const connectToWhatsApp = async() => {

const { state, saveCreds } = await useMultiFileAuthState("./ACTION/CONNECTION/SESSION")
const store = makeInMemoryStore({ logger: pino().child({ level: "fatal", stream: "store" }) })
const { version, isLatest } = await fetchLatestBaileysVersion()

console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,"cyan"))
console.log(color(figlet.textSync(namaBot, {
font: "Standard",
horizontalLayout: "default",
vertivalLayout: "default",
width: 80,
whitespaceBreak: false
}), "cyan"))
console.log(color("\n> WIBb ","silver"), color(`${time}`,"mediumseagreen"))
console.log(color("> WITA ","silver"), color(`${wita}`,"mediumseagreen"))
console.log(color("> WIT ","silver"), color(`${wit}`,"mediumseagreen"))
console.log(color("> HARI ","silver"), color(`${tampilHari}\n`,"mediumseagreen"))

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: true,
logger: pino({ level: "fatal" }),
auth: state,
browser: [namaBot, "IOS", "4.1.0"],
}

const sock = base.makeWASocket(connectionOptions)

const listJadibot = fs.readdirSync("./ACTION/CONNECTION/JADIBOT-SESSION")
const sessionJadiBot = listJadibot.splice("@adiwajshing", listJadibot.length - 1).map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
if (sessionJadiBot.length > 0) {
for (let path of sessionJadiBot) {
jadibot(sock, path)
}
}

store.bind(sock.ev)
sock.waVersion = version


sock.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (connection === "close") {
console.log(color(lastDisconnect.error, "deeppink"))
if (lastDisconnect.error == "Error: Stream Errored (unknown)") {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"))
sock.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
sock.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color("Restart Required, Restarting..."))
await connectToWhatsApp()
} else if (reason === DisconnectReason.timedOut) {
console.log(color("Connection TimedOut, Reconnecting..."))
connectToWhatsApp()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
try{ 
var autoJoin = db.data.settings[sock.decodeJid(sock.user.id)].autojoin
} catch {
var autoJoin = true
}
if (autoJoin) {
let codeInvite = linkGroup.split("https://chat.whatsapp.com/")[1]
try{
sock.groupAcceptInvite(codeInvite)
} catch {}
}
}
})


sock.ev.on("messages.upsert", async (chatUpdate) => {
try {
if (!chatUpdate.messages) return
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
try{
var onlyRead = db.data.settings[sock.decodeJid(sock.user.id)].autoread
} catch {
var onlyRead = false
}
if (onlyRead && m.key && m.key.remoteJid === "status@broadcast") {
sock.readMessages([m.key])
}
if (m.key && m.key.remoteJid === "status@broadcast") return
if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) return
m = base.smsg(sock, m, store)
require("../ACTION/STORAGE/AGG/core")(sock, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

sock.ws.on("CB:call", async (json) => {
require("../ACTION/STORAGE/AGG/anticall")(sock, json)
})

sock.ev.on("groups.update", async (anu) => {
require("../ACTION/STORAGE/AGG/group-update.js")(sock, anu)
}) 

sock.ev.on("group-participants.update", async (anu) => {
require("../ACTION/STORAGE/AGG/group.js")(sock, anu)
})

sock.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = sock.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})


const toFirstCase = (str) => {
let first = str.split(" ").map((nama) => nama.charAt(0).toUpperCase() + nama.slice(1)).join(" ")
return first
}

const removeObject = function (arr, attr, value) {
var i = arr.length
while (i--) {
if (arr[i] && arr[i].hasOwnProperty(attr) && arguments.length > 2 && arr[i][attr] === value) {
arr.splice(i, 1)
}
}
return arr
}

global.removeObject = removeObject
global.toFirstCase = toFirstCase

sock.ev.on("creds.update", saveCreds)
return sock
}

connectToWhatsApp()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on("uncaughtException", function (err) {
    console.log("Caught exception: ", err)
})