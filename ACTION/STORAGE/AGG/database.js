module.exports = async (sock, m) => {
try{
const botNumber = sock.decodeJid(sock.user.id)
const isNumber = x => typeof x === "number" && !isNaN(x)
const settings = global.db.data.settings[botNumber]
const chats = global.db.data.chats[m.chat]
const users = global.db.data.users[m.sender]
const database = global.db.data.database
const expired = global.db.data.expired[botNumber]
if (expired) {
if (!("owner" in expired)) expired.owner = {}
if (!("premium" in expired)) expired.premium = {}
if (!("sewa" in expired)) expired.sewa = {}
if (!("vip" in expired)) expired.vip = {}
} else global.db.data.expired[botNumber] = {
owner: {}, 
premium: {}, 
sewa: {}, 
vip: {}, 
}
if (database) {
if (!("addlimit" in database)) database.addlimit = {
status: false, 
number: ""
}
} else global.db.data.database = {
addlimit: {
status: false, 
number: ""
}
}
if (settings) {
if (!("nomerowner" in settings)) settings.nomerowner = nomerOwner
if (!("devoloper" in settings)) settings.devoloper = "573009110019"
if (!("namaowner" in settings)) settings.namaowner = namaOwner
if (!("namabot" in settings)) settings.namabot = namaBot
if (!("setmenu" in settings)) settings.setmenu = "image"
if (!("doctype" in settings)) settings.doctype = "docx"
if (!("quoted" in settings)) settings.quoted = "m"
if (!("copyright" in settings)) settings.copyright = copyright
if (!("textreply" in settings)) settings.textreply = "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚"
if (!("replytype" in settings)) settings.replytype = "web1"
if (!("setwelcome" in settings)) settings.setwelcome = "image"
if (!("auto" in settings)) settings.auto = "recording"
if (!("multi" in settings)) settings.multi = "prefix"
if (!("bahasa" in settings)) settings.bahasa = "english"
if (!("mode" in settings)) settings.mode = "public"
if (!("antispam" in settings)) settings.antispam = false
if (!("autoblockcmd" in settings)) settings.autoblockcmd = false
if (!("autoreport" in settings)) settings.autoreport = true
if (!("autobio" in settings)) settings.autobio = false
if (!("autosticker" in settings)) settings.autosticker = false
if (!("autorespon" in settings)) settings.autorespon = false
if (!("autoread" in settings)) settings.autoread = false
if (!("autovn" in settings)) settings.autovn = false
if (!("autoquoted" in settings)) settings.autoquoted = true
if (!("autobutton" in settings)) settings.autobutton = false
if (!("autojoin" in settings)) settings.autobutton = true
if (!("autodelsampah" in settings)) settings.autodelsampah = false
if (!("anticall" in settings)) settings.anticall = false
} else global.db.data.settings[botNumber] = {
nomerowner: nomerOwner,
devoloper: "628979185922", 
namaowner: namaOwner,
namabot: namaBot, 
setmenu: "image", 
doctype: "docx", 
quoted: "m",         
copyright: copyright, 
textreply: "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚", 
replytype: "web1", 
setwelcome: "image", 
auto: "recording", 
multi: "prefix",
bahasa: "english",
mode: "public", 
antispam: false,         
autoblockcmd: false, 
autoreport: true, 
autobio: false, 
autosticker: false, 
autorespon: false, 
autoread: false, 
autovn: false, 
autoquoted: true, 
autobutton: true,
autolevel: false,
autojoin: true,
autodelsampah: false, 
anticall: false, 
}
if (m.isGroup && chats) {
if (!("antilink" in chats)) chats.antilink = false
if (!("antilinkgc" in chats)) chats.antilinkgc = false
if (!("antilinkytchannel" in chats)) chats.antilinkytchannel = false
if (!("antilinkytvideo" in chats)) chats.antilinkytvideo = false
if (!("antilinkfb" in chats)) chats.antilinkfb = false
if (!("antilinkig" in chats)) chats.antilinkig = false
if (!("antilinktele" in chats)) chats.antilinktele = false
if (!("antilinkwa" in chats)) chats.antilinkwa = false
if (!("antilinktiktok" in chats)) chats.antilinktiktok = false
if (!("antilinktwitter" in chats)) chats.antilinktwitter = false
if (!("antivirtex" in chats)) chats.antivirtex = false
if (!("antiasing" in chats)) chats.antiasing = false
if (!("antitag" in chats)) chats.antitag = false
if (!("antidelete" in chats)) chats.antidelete = false
if (!("antiviewonce" in chats)) chats.antiviewonce = false
if (!("antitoxic" in chats)) chats.antitoxic = false
if (!("antisange" in chats)) chats.antisange = false
if (!("antinsfw" in chats)) chats.antinsfw = false
if (!("autorespongc" in chats)) chats.autorespongc = false
if (!("autoreact" in chats)) chats.autoreact = false
if (!("banchat" in chats)) chats.banchat = false
if (!("welcome" in chats)) chats.welcome = false
if (!("sewa" in chats)) chats.sewa = {
status: true,
date: calender, 
expired: Date.now() + toMs("1days")
}
} else if (m.isGroup) global.db.data.chats[m.chat] = {
antilink: false,
antilinkgc: false,
antilinkytchannel: false,
antilinkytvideo: false,
antilinkfb: false,
antilinkig: false,
antilinktele: false,
antilinkwa: false,
antilinktiktok: false,
antilinktwitter: false,
antivirtex: false,
antiasing: false,
antitag: false,
antidelete: false,
antiviewonce: false,
antitoxic: false,
antisange: false,
antinsfw: false,
autorespongc: false,
autoreact: false,
banchat: false,
welcome: false,
sewa: {
status: true,
date: calender, 
expired: Date.now() + toMs("1days")
}
}
if (users) {
if (!("name" in users)) users.name = m.pushName
if (!("date" in users)) users.date = calender
if (!("date" in users)) users.date = calender
if (!("pemburu" in users)) users.pemburu = false
if (!("petani" in users)) users.petani = false
if (!("nelayan" in users)) users.nelayan = false
if (!("pencuri" in users)) users.pencuri = false
if (!isNumber(users.levelPemburu)) users.levelPemburu = 0
if (!isNumber(users.levelPetani)) users.levelPetani = 0
if (!isNumber(users.levelNelayan)) users.levelNelayan = 0
if (!isNumber(users.levelPencuri)) users.levelPencuri = 0
if (!isNumber(users.xp)) users.xp = 1
if (!isNumber(users.level)) users.level = 1
if (!isNumber(users.balance)) users.balance = 0
if (!isNumber(users.limit)) users.limit = limitAwal
if (!isNumber(users.darah)) users.darah = 100
if (!isNumber(users.potion)) users.potion = 0
if (!isNumber(users.money)) users.money = 0
if (!isNumber(users.diamond)) users.diamond = 0
if (!isNumber(users.emas)) users.emas = 0
if (!isNumber(users.iron)) users.iron = 0
if (!isNumber(users.batu)) users.batu = 0
if (!isNumber(users.kayu)) users.kayu = 0
if (!isNumber(users.madu)) users.madu = 0
//Berburu
if (!isNumber(users.gajah)) users.gajah = 0
if (!isNumber(users.rusa)) users.rusa = 0
if (!isNumber(users.badak)) users.badak = 0
if (!isNumber(users.rubah)) users.rubah = 0
if (!isNumber(users.buaya)) users.buaya = 0
if (!isNumber(users.babi)) users.babi = 0
if (!isNumber(users.beruang)) users.beruang = 0
if (!isNumber(users.singa)) users.singa = 0
if (!isNumber(users.panda)) users.panda = 0
if (!isNumber(users.gorila)) users.gorila = 0
if (!isNumber(users.jerapa)) users.jerapa = 0
if (!isNumber(users.zebra)) users.zebra = 0
if (!isNumber(users.landak)) users.landak = 0
if (!isNumber(users.kangguru)) users.kangguru = 0
if (!isNumber(users.ular)) users.ular = 0
if (!isNumber(users.koala)) users.koala = 0
if (!isNumber(users.tupai)) users.tupai = 0
if (!isNumber(users.musang)) users.musang = 0
if (!isNumber(users.harimau)) users.harimau = 0
if (!isNumber(users.merpati)) users.merpati = 0
if (!isNumber(users.merak)) users.merak = 0
if (!isNumber(users.elang)) users.elang = 0
if (!isNumber(users.angsa)) users.angsa = 0
if (!isNumber(users.kakaktua)) users.kakaktua = 0
//Serangga
if (!isNumber(users.ulat)) users.ulat = 0
if (!isNumber(users.kumbang)) users.kumbang = 0
if (!isNumber(users.semut)) users.semut = 0
if (!isNumber(users.jangkrik)) users.jangkrik = 0
if (!isNumber(users.nyamuk)) users.nyamuk = 0
if (!isNumber(users.labalaba)) users.labalaba = 0
//Mancing
if (!isNumber(users.hiu)) users.hiu = 0
if (!isNumber(users.buntal)) users.buntal = 0
if (!isNumber(users.udang)) users.udang = 0
if (!isNumber(users.gurita)) users.gurita = 0
if (!isNumber(users.lumbalumba)) users.lumbalumba = 0
if (!isNumber(users.paus)) users.paus = 0
if (!isNumber(users.kepiting)) users.kepiting = 0
if (!isNumber(users.cumi)) users.cumi = 0
if (!isNumber(users.lobster)) users.lobster = 0
//Mulung
if (!isNumber(users.kardus)) users.kardus = 0
if (!isNumber(users.aqua)) users.aqua = 0
if (!isNumber(users.spirit)) users.spirit = 0
if (!isNumber(users.fanta)) users.fanta = 0
if (!isNumber(users.kokakola)) users.kokakola = 0
if (!isNumber(users.tembaga)) users.tembaga = 0
if (!isNumber(users.kawat)) users.kawat = 0
if (!isNumber(users.paku)) users.paku = 0
if (!isNumber(users.kaleng)) users.kaleng = 0
//Hasil Ternak
if (!isNumber(users.anakGajah)) users.anakGajah = 0
if (!isNumber(users.anakRusa)) users.anakRusa = 0
if (!isNumber(users.anakBadak)) users.anakBadak = 0
if (!isNumber(users.anakRubah)) users.anakRubah = 0
if (!isNumber(users.anakBuaya)) users.anakBuaya = 0
if (!isNumber(users.anakBabi)) users.anakBabi = 0
if (!isNumber(users.anakBeruang)) users.anakBeruang = 0
if (!isNumber(users.anakSinga)) users.anakSinga = 0
if (!isNumber(users.anakPanda)) users.anakPanda = 0
if (!isNumber(users.anakGorila)) users.anakGorila = 0
if (!isNumber(users.anakJerapa)) users.anakJerapa = 0
if (!isNumber(users.anakZebra)) users.anakZebra = 0
if (!isNumber(users.anakLandak)) users.anakLandak = 0
if (!isNumber(users.anakKangguru)) users.anakKangguru = 0
if (!isNumber(users.anakUlar)) users.anakUlar = 0
if (!isNumber(users.anakKoala)) users.anakKoala = 0
if (!isNumber(users.anakTupai)) users.anakTupai = 0
if (!isNumber(users.anakMusang)) users.anakMusang = 0
if (!isNumber(users.anakHarimau)) users.anakHarimau = 0
if (!isNumber(users.anakMerpati)) users.anakMerpati = 0
if (!isNumber(users.anakMerak)) users.anakMerak = 0
if (!isNumber(users.anakElang)) users.anakElang = 0
if (!isNumber(users.anakAngsa)) users.anakAngsa = 0
if (!isNumber(users.anakKakaktua)) users.anakKakaktua = 0
//Makanan ternak/Buah
if (!isNumber(users.daging)) users.daging = 0
if (!isNumber(users.apel)) users.apel = 0
if (!isNumber(users.semangka)) users.semangka = 0
if (!isNumber(users.melon)) users.melon = 0
if (!isNumber(users.jeruk)) users.jeruk = 0
if (!isNumber(users.jambu)) users.jambu = 0
if (!isNumber(users.nanas)) users.nanas = 0
if (!isNumber(users.pisang)) users.pisang = 0
if (!isNumber(users.lemon)) users.lemon = 0
//Hasil pertanian
if (!isNumber(users.wortel)) users.wortel = 0
if (!isNumber(users.timun)) users.timun = 0
if (!isNumber(users.jagung)) users.jagung = 0
if (!isNumber(users.terong)) users.terong = 0
if (!isNumber(users.bawangMerah)) users.bawangMerah = 0
if (!isNumber(users.bawangPutih)) users.bawangPutih = 0
if (!isNumber(users.cabai)) users.cabai = 0
if (!isNumber(users.kacang)) users.kacang = 0
if (!isNumber(users.koll)) users.koll = 0
//Ternak
if (!("ternak" in users)) users.ternak = {
gajah: 0,
rusa: 0,
badak: 0,
rubah: 0,
buaya: 0,
babi: 0,
beruang: 0,
singa: 0,
panda: 0,
gorila: 0,
jerapa: 0,
zebra: 0,
landak: 0,
kangguru: 0,
ular: 0,
koala: 0,
tupai: 0,
musang: 0,
harimau: 0,
merpati: 0,
merak: 0,
elang: 0,
angsa: 0,
kakaktua: 0,
}
if (!("delete" in users)) users.delete = {
type: "", 
text: "",
url: "", 
}
if (!("game" in users)) users.game = {
caklontong: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}, 
family100: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}, 
siapaaku: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
susunkata: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}, 
tebakbendera: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebakgambar: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebakkata: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebaklirik: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebakjenaka: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}
} else global.db.data.users[m.sender] = {
name: m.pushName,
date: calender,
pemburu: false,
petani: false,
nelayan: false,
pencuri: false,
levelPemburu: 0,
levelPetani: 0,
levelNelayan: 0,
levelPencuri: 0,
xp: 1,
level: 1,
balance: 0,
limit: limitAwal,
darah: 100,
potion: 0,
money: 0,
diamond: 0,
emas: 0,
iron: 0,
batu: 0,
kayu: 0,
madu: 0,
//Berburu
gajah: 0,
rusa: 0,
badak: 0,
rubah: 0,
buaya: 0,
babi: 0,
beruang: 0,
singa: 0,
panda: 0,
gorila: 0,
jerapa: 0,
zebra: 0,
landak: 0,
kangguru: 0,
ular: 0,
koala: 0,
tupai: 0,
musang: 0,
harimau: 0,
merpati: 0,
merak: 0,
elang: 0,
angsa: 0,
kakaktua: 0,
//Serangga
ulat: 0,
kumbang: 0,
semut: 0,
jangkrik: 0,
nyamuk: 0,
labalaba: 0,
//Mancing
hiu: 0,
buntal: 0,
udang: 0,
gurita: 0,
lumbalumba: 0,
paus: 0,
kepiting: 0,
cumi: 0,
lobster: 0,
//Mulung
kardus: 0,
aqua: 0,
spirit: 0,
fanta: 0,
kokakola: 0,
tembaga: 0,
kawat: 0,
paku: 0,
kaleng: 0,
//Hasil Ternak
anakGajah: 0,
anakRusa: 0,
anakBadak: 0,
anakRubah: 0,
anakBuaya: 0,
anakBabi: 0,
anakBeruang: 0,
anakSinga: 0,
anakPanda: 0,
anakGorila: 0,
anakJerapa: 0,
anakZebra: 0,
anakLandak: 0,
anakKangguru: 0,
anakUlar: 0,
anakKoala: 0,
anakTupai: 0,
anakMusang: 0,
anakHarimau: 0,
anakMerpati: 0,
anakMerak: 0,
anakElang: 0,
anakAngsa: 0,
anakKakaktua: 0,
//Makanan ternak/Buah
daging: 0,
apel: 0,
semangka: 0,
melon: 0,
jeruk: 0,
jambu: 0,
nanas: 0,
pisang: 0,
lemon: 0,
//Hasil pertanian
wortel: 0,
timun: 0,
jagung: 0,
terong: 0,
bawangMerah: 0,
bawangPutih: 0,
cabai: 0,
kacang: 0,
koll: 0,
//Ternak
ternak: {
gajah: 0,
rusa: 0,
badak: 0,
rubah: 0,
buaya: 0,
babi: 0,
beruang: 0,
singa: 0,
panda: 0,
gorila: 0,
jerapa: 0,
zebra: 0,
landak: 0,
kangguru: 0,
ular: 0,
koala: 0,
tupai: 0,
musang: 0,
harimau: 0,
merpati: 0,
merak: 0,
elang: 0,
angsa: 0,
kakaktua: 0,
},
delete: {
type: "", 
text: "",
url: "", 
}, 
game: {
caklontong: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}, 
family100: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}, 
siapaaku: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
susunkata: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}, 
tebakbendera: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebakgambar: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebakkata: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebaklirik: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
},
tebakjenaka: {
status: false,
expired: 0,
pertanyaan: "", 
jawaban: ""
}
}

}






} catch (e) {
console.log(e)
}
}