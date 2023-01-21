const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const totalFitur = () =>{
var mytext = fs.readFileSync("./ACTION/STORAGE/AGG/core.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}

let yes = "「 _ERROR_ 」 ❌"
let no = ""

global.menunya = (sock, m, thePrefix, listblock, isDevoloper, isOwner, isPremium) => {
const botNumber = sock.decodeJid(sock.user.id)
const botName = db.data.settings[botNumber].namabot
const pushName = m.pushName
const senderNumber = m.sender.split('@')[0]
return `▬▭▬▭▬▭「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏Z 」▭▬▭▬▭▬
*Nama Bot* : ${botName}
*Mode* : ${toFirstCase(db.data.settings[botNumber].mode)}
*Prefix* : ${thePrefix}
*Total Block* : ${listblock.length}
*Total User* : ${Object.keys(db.data.users).length}
*Total Feature* : ${totalFitur()}
*Runtime* : ${runtime(process.uptime())}
▬▭▬▭▬▭「 𝙄𝙉𝙁𝙊 USERS 」▭▬▭▬▭▬
*Nama* : ${pushName}
*Number* : ${senderNumber}
*Status* : ${isDevoloper? "Devoloper" : isOwner? "Owner" : isPremium? "Premium" : "User"}
*Limit* : ${isPremium? "Tak terbatas" : db.data.users[m.sender].limit}
*Balance* : Rp ${db.data.users[m.sender].balance}
▬▭▬▭▬▭「 𝙄NFO TIMES 」▭▬▭▬▭▬
*Date* : ${week}, ${calender}
*Wib* : ${timeWib} WIB
*Wita* : ${timeWita} WITA
*Wit* : ${timeWit} WIT
`}


global.ownerMenu = (prefix) => {
return `
╭──❒ *Owner Menu*
│
│🏴‍☠️ ${prefix}join ${feat("join")? yes : no }
│🏴‍☠️ ${prefix}leave ${feat("leave")? yes : no }
│🏴‍☠️ ${prefix}creategc ${feat("creategc")? yes : no }
│🏴‍☠️ ${prefix}bc ${feat("bc")? yes : no }
│🏴‍☠️ ${prefix}bcgc ${feat("bcgc")? yes : no }
│🏴‍☠️ ${prefix}bcpc ${feat("bcpc")? yes : no }
│🏴‍☠️ ${prefix}getcase ${feat("getcase")? yes : no }
│🏴‍☠️ ${prefix}culik ${feat("culik")? yes : no }
│🏴‍☠️ ${prefix}kudeta ${feat("kudeta")? yes : no }
│🏴‍☠️ ${prefix}ban ${feat("ban")? yes : no }
│🏴‍☠️ ${prefix}unban ${feat("unban")? yes : no }
│🏴‍☠️ ${prefix}block ${feat("block")? yes : no }
│🏴‍☠️ ${prefix}unblock ${feat("unblock")? yes : no }
│🏴‍☠️ ${prefix}blockcmd ${feat("blockcmd")? yes : no }
│🏴‍☠️ ${prefix}unblockcmd ${feat("unblockcmd")? yes : no }
│🏴‍☠️ ${prefix}setbio ${feat("setbio")? yes : no }
│🏴‍☠️ ${prefix}setppbot ${feat("setppbot")? yes : no }
│🏴‍☠️ ${prefix}setnomerowner ${feat("setnomerowner")? yes : no }
│🏴‍☠️ ${prefix}setnamaowner ${feat("setnamaowner")? yes : no }
│🏴‍☠️ ${prefix}setnamabot ${feat("setnamabot")? yes : no }
│🏴‍☠️ ${prefix}setmenu ${feat("setmenu")? yes : no }
│🏴‍☠️ ${prefix}setdocument ${feat("setdocument")? yes : no }
│🏴‍☠️ ${prefix}setquoted ${feat("setquoted")? yes : no }
│🏴‍☠️ ${prefix}setcopyright ${feat("setcopyright")? yes : no }
│🏴‍☠️ ${prefix}settextreply ${feat("settextreply")? yes : no }
│🏴‍☠️ ${prefix}setreply ${feat("setreply")? yes : no }
│🏴‍☠️ ${prefix}setwelcome ${feat("setwelcome")? yes : no }
│🏴‍☠️ ${prefix}setprefix ${feat("setprefix")? yes : no }
│🏴‍☠️ ${prefix}setbahasa ${feat("setbahasa")? yes : no }
│🏴‍☠️ ${prefix}auto ${feat("auto")? yes : no }
│🏴‍☠️ ${prefix}autoblockcmd ${feat("autoblockcmd")? yes : no }
│🏴‍☠️ ${prefix}autoreport ${feat("autoreport")? yes : no }
│🏴‍☠️ ${prefix}autobio ${feat("autobio")? yes : no }
│🏴‍☠️ ${prefix}autosticker ${feat("autosticker")? yes : no }
│🏴‍☠️ ${prefix}autorespon ${feat("autorespon")? yes : no }
│🏴‍☠️ ${prefix}autoread ${feat("autoread")? yes : no }
│🏴‍☠️ ${prefix}autovn ${feat("autovn")? yes : no }
│🏴‍☠️ ${prefix}autoquoted ${feat("autoquoted")? yes : no }
│🏴‍☠️ ${prefix}autobutton ${feat("autobutton")? yes : no }
│🏴‍☠️ ${prefix}autojoin ${feat("autojoin")? yes : no }
│🏴‍☠️ ${prefix}autolevel ${feat("autolevel")? yes : no }
│🏴‍☠️ ${prefix}autodelsampah ${feat("autodelsampah")? yes : no }
│🏴‍☠️ ${prefix}antispam ${feat("antispam")? yes : no }
│🏴‍☠️ ${prefix}anticall ${feat("anticall")? yes : no }
│🏴‍☠️ ${prefix}mode ${feat("mode")? yes : no }
│🏴‍☠️ ${prefix}getfile ${feat("getfile")? yes : no }
│🏴‍☠️ ${prefix}getfolder ${feat("getfolder")? yes : no }
│🏴‍☠️ ${prefix}getsesi ${feat("getsesi")? yes : no }
│🏴‍☠️ ${prefix}chat ${feat("chat")? yes : no }
│🏴‍☠️ ${prefix}updatefile ${feat("updatefile")? yes : no }
│🏴‍☠️ ${prefix}restart ${feat("restart")? yes : no }
│
╰────────────❒`}

global.groupMenu = (prefix) => {
return `
╭──❒ *Group Menu*
│
│🏴‍☠️ ${prefix}antilink ${feat("antilink")? yes : no }
│🏴‍☠️ ${prefix}antilinkgc ${feat("antilinkgc")? yes : no }
│🏴‍☠️ ${prefix}antilinkyt ${feat("antilinkyt")? yes : no }
│🏴‍☠️ ${prefix}antilinkfb ${feat("antilinkfb")? yes : no }
│🏴‍☠️ ${prefix}antilinkig ${feat("antilinkig")? yes : no }
│🏴‍☠️ ${prefix}antilinktele ${feat("antilinktele")? yes : no }
│🏴‍☠️ ${prefix}antilinkwa ${feat("antilinkwa")? yes : no }
│🏴‍☠️ ${prefix}antilinktiktok ${feat("antilinktiktok")? yes : no }
│🏴‍☠️ ${prefix}antilinktwitter ${feat("antilinktwitter")? yes : no }
│🏴‍☠️ ${prefix}antivirtex ${feat("antivirtex")? yes : no }
│🏴‍☠️ ${prefix}antiasing ${feat("antiasing")? yes : no }
│🏴‍☠️ ${prefix}antitag ${feat("antihidetag")? yes : no }
│🏴‍☠️ ${prefix}antidelete ${feat("antidelete")? yes : no }
│🏴‍☠️ ${prefix}antiviewonce ${feat("antiviewonce")? yes : no }
│🏴‍☠️ ${prefix}antitoxic ${feat("antitoxic")? yes : no }
│🏴‍☠️ ${prefix}antisange ${feat("antisange")? yes : no }
│🏴‍☠️ ${prefix}antinsfw ${feat("antinsfw")? yes : no }
│🏴‍☠️ ${prefix}autorespongc ${feat("autorespongc")? yes : no }
│🏴‍☠️ ${prefix}autoreact ${feat("autoreact")? yes : no }
│🏴‍☠️ ${prefix}banchat ${feat("banchat")? yes : no }
│🏴‍☠️ ${prefix}welcome ${feat("welcome")? yes : no }
│🏴‍☠️ ${prefix}infogc ${feat("infogc")? yes : no }
│🏴‍☠️ ${prefix}linkgc ${feat("linkgc")? yes : no }
│🏴‍☠️ ${prefix}setppgc ${feat("setppgc")? yes : no }
│🏴‍☠️ ${prefix}setnamagc ${feat("setnamagc")? yes : no }
│🏴‍☠️ ${prefix}setdesc ${feat("setdesc")? yes : no }
│🏴‍☠️ ${prefix}gc ${feat("gc")? yes : no }
│🏴‍☠️ ${prefix}revoke ${feat("revoke")? yes : no }
│🏴‍☠️ ${prefix}hidetag ${feat("hidetag")? yes : no }
│🏴‍☠️ ${prefix}tagall ${feat("tagall")? yes : no }
│🏴‍☠️ ${prefix}add ${feat("add")? yes : no }
│🏴‍☠️ ${prefix}kick ${feat("kick")? yes : no }
│🏴‍☠️ ${prefix}promote ${feat("promote")? yes : no }
│🏴‍☠️ ${prefix}demote ${feat("demote")? yes : no }
│🏴‍☠️ ${prefix}opentime ${feat("opentime")? yes : no }
│🏴‍☠️ ${prefix}closetime ${feat("closetime")? yes : no }
│🏴‍☠️ ${prefix}disappearing ${feat("disappearing")? yes : no }
│🏴‍☠️ ${prefix}kickme ${feat("kickme")? yes : no }
│🏴‍☠️ ${prefix}getppgc ${feat("getppgc")? yes : no }
│🏴‍☠️ ${prefix}ceksewa ${feat("ceksewa")? yes : no }
│🏴‍☠️ ${prefix}afk ${feat("afk")? yes : no }
│
╰────────────❒`}

global.mainMenu = (prefix) => {
return `
╭──❒ *Main Menu*
│
│🏴‍☠️ ${prefix}menu ${feat("menu")? yes : no }
│🏴‍☠️ ${prefix}owner ${feat("owner")? yes : no }
│🏴‍☠️ ${prefix}devoloper ${feat("devoloper")? yes : no }
│🏴‍☠️ ${prefix}dashboard ${feat("dashboard")? yes : no }
│🏴‍☠️ ${prefix}resport ${feat("resport")? yes : no }
│🏴‍☠️ ${prefix}kalkulator ${feat("kalkulator")? yes : no }
│🏴‍☠️ ${prefix}getid ${feat("getid")? yes : no }
│🏴‍☠️ ${prefix}getpp ${feat("getpp")? yes : no }
│🏴‍☠️ ${prefix}getname ${feat("getname")? yes : no }
│🏴‍☠️ ${prefix}getnumber ${feat("getnumber")? yes : no }
│🏴‍☠️ ${prefix}wame ${feat("wame")? yes : no }
│🏴‍☠️ ${prefix}readviewonce ${feat("readviewonce")? yes : no }
│🏴‍☠️ ${prefix}delsampah ${feat("delsampah")? yes : no }
│🏴‍☠️ ${prefix}del ${feat("del")? yes : no }
│🏴‍☠️ ${prefix}react ${feat("react")? yes : no }
│🏴‍☠️ ${prefix}sewa ${feat("sewa")? yes : no }
│🏴‍☠️ ${prefix}readmore ${feat("readmore")? yes : no }
│🏴‍☠️ ${prefix}infobotz ${feat("infobotz")? yes : no }
│🏴‍☠️ ${prefix}runtime ${feat("runtime")? yes : no }
│🏴‍☠️ ${prefix}speed ${feat("speed")? yes : no }
│🏴‍☠️ ${prefix}ping ${feat("ping")? yes : no }
│🏴‍☠️ ${prefix}listpc ${feat("listpc")? yes : no }
│🏴‍☠️ ${prefix}listgc ${feat("listgc")? yes : no }
│🏴‍☠️ ${prefix}cariteman ${feat("cariteman")? yes : no }
│🏴‍☠️ ${prefix}kontak ${feat("kontak")? yes : no }
│🏴‍☠️ ${prefix}getallstick ${feat("getallstick")? yes : no }
│🏴‍☠️ ${prefix}menfes ${feat("menfes")? yes : no }
│🏴‍☠️ ${prefix}profile ${feat("profile")? yes : no }
│🏴‍☠️ ${prefix}listonline ${feat("listonline")? yes : no }
│🏴‍☠️ ${prefix}script ${feat("sc")? yes : feat("script")? yes : feat("sourcecode")? yes : no}
│🏴‍☠️ ${prefix}ceklimit ${feat("ceklimit")? yes : no }
│
╰────────────❒`}

global.jadibotMenu = (prefix) => {
return `
╭──❒ *Jadi Bot Menu*
│
│🏴‍☠️ ${prefix}jadibot ${feat("jadibot")? yes : no }
│🏴‍☠️ ${prefix}stopjadibot ${feat("stopjadibot")? yes : no }
│🏴‍☠️ ${prefix}deljadibot ${feat("deljadibot")? yes : no }
│🏴‍☠️ ${prefix}clearalljadibot ${feat("clearalljadibot")? yes : no }
│🏴‍☠️ ${prefix}listjadibot ${feat("listjadibot")? yes : no }
│
╰────────────❒`}

global.tagMenu = (prefix) => {
return `
╭──❒ *Tag Menu*
│
│🏴‍☠️ ${prefix}memek ${feat("memek")? yes : no }
│🏴‍☠️ ${prefix}bego ${feat("bego")? yes : no }
│🏴‍☠️ ${prefix}goblok ${feat("goblok")? yes : no }
│🏴‍☠️ ${prefix}perawan ${feat("perawan")? yes : no }
│🏴‍☠️ ${prefix}babi ${feat("babi")? yes : no }
│🏴‍☠️ ${prefix}tolol ${feat("tolol")? yes : no }
│🏴‍☠️ ${prefix}pintar ${feat("pintar")? yes : no }
│🏴‍☠️ ${prefix}asu ${feat("asu")? yes : no }
│🏴‍☠️ ${prefix}gay ${feat("gay")? yes : no }
│🏴‍☠️ ${prefix}lesby ${feat("lesby")? yes : no }
│🏴‍☠️ ${prefix}bajingan ${feat("bajingan")? yes : no }
│🏴‍☠️ ${prefix}jancok ${feat("jancok")? yes : no }
│🏴‍☠️ ${prefix}anjing ${feat("anjing")? yes : no }
│🏴‍☠️ ${prefix}ngentot ${feat("ngentot")? yes : no }
│🏴‍☠️ ${prefix}monyet ${feat("monyet")? yes : no }
│🏴‍☠️ ${prefix}mastah ${feat("mastah")? yes : no }
│🏴‍☠️ ${prefix}newbie ${feat("newbie")? yes : no }
│🏴‍☠️ ${prefix}bangsat ${feat("bangsat")? yes : no }
│🏴‍☠️ ${prefix}bangke ${feat("bangke")? yes : no }
│🏴‍☠️ ${prefix}sange ${feat("sange")? yes : no }
│🏴‍☠️ ${prefix}dakjal ${feat("dakjal")? yes : no }
│🏴‍☠️ ${prefix}wibu ${feat("wibu")? yes : no }
│🏴‍☠️ ${prefix}puki ${feat("puki")? yes : no }
│🏴‍☠️ ${prefix}pantek ${feat("pantek")? yes : no }
│🏴‍☠️ ${prefix}jadian ${feat("jadian")? yes : no }
│🏴‍☠️ ${prefix}jodohku ${feat("jodohku")? yes : no }
│🏴‍☠️ ${prefix}tagme ${feat("tagme")? yes : no }
│🏴‍☠️ ${prefix}totag ${feat("totag")? yes : no }
│🏴‍☠️ ${prefix}reqtag ${feat("reqtag")? yes : no }
│
╰────────────❒`}

global.funMenu = (prefix) => {
return `
╭──❒ *Fun Menu*
│
│🏴‍☠️ ${prefix}katailham ${feat("katailham")? yes : no }
│🏴‍☠️ ${prefix}truth ${feat("truth")? yes : no }
│🏴‍☠️ ${prefix}dare ${feat("dare")? yes : no }
│🏴‍☠️ ${prefix}bisakah ${feat("bisakah")? yes : no }
│🏴‍☠️ ${prefix}kapankah ${feat("kapankah")? yes : no }
│🏴‍☠️ ${prefix}apakah ${feat("apakah")? yes : no }
│🏴‍☠️ ${prefix}bagaimanakah ${feat("bagaimanakah")? yes : no }
│🏴‍☠️ ${prefix}rate ${feat("rate")? yes : no }
│🏴‍☠️ ${prefix}cekgoblok ${feat("cekgoblok")? yes : no }
│🏴‍☠️ ${prefix}cekjelek ${feat("cekjelek")? yes : no }
│🏴‍☠️ ${prefix}cekgay ${feat("cekgay")? yes : no }
│🏴‍☠️ ${prefix}ceklesbi ${feat("ceklesbi")? yes : no }
│🏴‍☠️ ${prefix}cekganteng ${feat("cekganteng")? yes : no }
│🏴‍☠️ ${prefix}cekcantik ${feat("cekcantik")? yes : no }
│🏴‍☠️ ${prefix}cekbego ${feat("cekbego")? yes : no }
│🏴‍☠️ ${prefix}ceksuhu ${feat("ceksuhu")? yes : no }
│🏴‍☠️ ${prefix}cekpinter ${feat("cekpinter")? yes : no }
│🏴‍☠️ ${prefix}cekjago ${feat("cekjago")? yes : no }
│🏴‍☠️ ${prefix}ceknolep ${feat("ceknolep")? yes : no }
│🏴‍☠️ ${prefix}cekbabi ${feat("cekbabi")? yes : no }
│🏴‍☠️ ${prefix}cekbeban ${feat("cekbeban")? yes : no }
│🏴‍☠️ ${prefix}cekbaik ${feat("cekbaik")? yes : no }
│🏴‍☠️ ${prefix}cekjahat ${feat("cekjahat")? yes : no }
│🏴‍☠️ ${prefix}cekanjing ${feat("cekanjing")? yes : no }
│🏴‍☠️ ${prefix}cekharam ${feat("cekharam")? yes : no }
│🏴‍☠️ ${prefix}cekpakboy ${feat("cekpakboy")? yes : no }
│🏴‍☠️ ${prefix}cekpakgirl ${feat("cekpakgirl")? yes : no }
│🏴‍☠️ ${prefix}ceksange ${feat("ceksange")? yes : no }
│🏴‍☠️ ${prefix}cekbaper ${feat("cekbaper")? yes : no }
│🏴‍☠️ ${prefix}cekfakboy ${feat("cekfakboy")? yes : no }
│🏴‍☠️ ${prefix}cekalim ${feat("cekalim")? yes : no }
│🏴‍☠️ ${prefix}ceksuhu ${feat("ceksuhu")? yes : no }
│🏴‍☠️ ${prefix}cekfakgirl ${feat("cekfakgirl")? yes : no }
│🏴‍☠️ ${prefix}cekkeren ${feat("cekkeren")? yes : no }
│🏴‍☠️ ${prefix}cekwibu ${feat("cekwibu")? yes : no }
│🏴‍☠️ ${prefix}cekpasarkas ${feat("cekpasarkas")? yes : no }
│🏴‍☠️ ${prefix}cekkul ${feat("cekkul")? yes : no }
│🏴‍☠️ ${prefix}cekwatak ${feat("cekwatak")? yes : no }
│🏴‍☠️ ${prefix}cekhobby ${feat("cekhobby")? yes : no }
│🏴‍☠️ ${prefix}halah ${feat("halah")? yes : no }
│🏴‍☠️ ${prefix}hilih ${feat("hilih")? yes : no }
│🏴‍☠️ ${prefix}huluh ${feat("huluh")? yes : no }
│🏴‍☠️ ${prefix}heleh ${feat("heleh")? yes : no }
│🏴‍☠️ ${prefix}holoh ${feat("holoh")? yes : no }
│🏴‍☠️ ${prefix}faktaunik ${feat("holoh")? yes : no }
│🏴‍☠️ ${prefix}katabijak ${feat("holoh")? yes : no }
│🏴‍☠️ ${prefix}bucin ${feat("bucin")? yes : no }
│🏴‍☠️ ${prefix}katabucin ${feat("katabucin")? yes : no }
│🏴‍☠️ ${prefix}pantun ${feat("pantun")? yes : no }
│🏴‍☠️ ${prefix}puisi ${feat("puisi")? yes : no }
│🏴‍☠️ ${prefix}quotes ${feat("quotes")? yes : no }
│🏴‍☠️ ${prefix}quotesnime ${feat("quotesnime")? yes : no }
│🏴‍☠️ ${prefix}quotesimage ${feat("quotesimage")? yes : no }
│🏴‍☠️ ${prefix}bahasapurba ${feat("bahasapurba")? yes : no }
│🏴‍☠️ ${prefix}nulis ${feat("nulis")? yes : no }
│
╰────────────❒`}

global.movieStoryMenu = (prefix) => {
return `
╭──❒ *Movie Story*
│
│🏴‍☠️ ${prefix}cerpen ${feat("cerpen")? yes : no }
│🏴‍☠️ ${prefix}ceritahoror ${feat("ceritahoror")? yes : no }
│🏴‍☠️ ${prefix}lk21 ${feat("lk21")? yes : no }
│🏴‍☠️ ${prefix}drakorongoing ${feat("drakorongoing")? yes : no }
│🏴‍☠️ ${prefix}wattpad ${feat("wattpad")? yes : no }
│🏴‍☠️ ${prefix}wattpadsearch ${feat("wattpadsearch")? yes : no }
│🏴‍☠️ ${prefix}filmapik ${feat("filmapik")? yes : no }
│
╰────────────❒`}

global.randomMenu = (prefix) => {
return `
╭──❒ *Random Menu*
│
│🏴‍☠️ ${prefix}couple ${feat("couple")? yes : no }
│🏴‍☠️ ${prefix}bts ${feat("bts")? yes : no }
│🏴‍☠️ ${prefix}exo ${feat("exo")? yes : no }
│🏴‍☠️ ${prefix}cecan ${feat("cecan")? yes : no }
│🏴‍☠️ ${prefix}cogan ${feat("cogan")? yes : no }
│🏴‍☠️ ${prefix}estetic ${feat("estetic")? yes : no }
│🏴‍☠️ ${prefix}blackpink ${feat("blackpink")? yes : no }
│🏴‍☠️ ${prefix}asupan ${feat("asupan")? yes : no }
│
╰────────────❒`}

global.wibuMenu = (prefix) => {
return `
╭──❒ *Wibu Menu*
│
│🏴‍☠️ ${prefix}elf ${feat("elf")? yes : no }
│🏴‍☠️ ${prefix}loli ${feat("loli")? yes : no }
│🏴‍☠️ ${prefix}neko ${feat("neko")? yes : no }
│🏴‍☠️ ${prefix}waifu ${feat("waifu")? yes : no }
│🏴‍☠️ ${prefix}shota ${feat("shota")? yes : no }
│🏴‍☠️ ${prefix}husbu ${feat("husbu")? yes : no }
│🏴‍☠️ ${prefix}elaina ${feat("elaina")? yes : no }
│🏴‍☠️ ${prefix}shinobu ${feat("shinobu")? yes : no }
│🏴‍☠️ ${prefix}kanna ${feat("kanna")? yes : no }
│🏴‍☠️ ${prefix}megumin ${feat("megumin")? yes : no }
│🏴‍☠️ ${prefix}art ${feat("art")? yes : no }
│🏴‍☠️ ${prefix}wallnime ${feat("wallnime")? yes : no }
│🏴‍☠️ ${prefix}bully ${feat("bully")? yes : no }
│🏴‍☠️ ${prefix}cuddle ${feat("cuddle")? yes : no }
│🏴‍☠️ ${prefix}cry ${feat("cry")? yes : no }
│🏴‍☠️ ${prefix}hug ${feat("hug")? yes : no }
│🏴‍☠️ ${prefix}awoo ${feat("awoo")? yes : no }
│🏴‍☠️ ${prefix}kiss ${feat("kiss")? yes : no }
│🏴‍☠️ ${prefix}lick ${feat("lick")? yes : no }
│🏴‍☠️ ${prefix}pat ${feat("pat")? yes : no }
│🏴‍☠️ ${prefix}smug ${feat("smug")? yes : no }
│🏴‍☠️ ${prefix}bonk ${feat("bonk")? yes : no }
│🏴‍☠️ ${prefix}yeet ${feat("yeet")? yes : no }
│🏴‍☠️ ${prefix}blush ${feat("blush")? yes : no }
│🏴‍☠️ ${prefix}smile ${feat("smile")? yes : no }
│🏴‍☠️ ${prefix}wave ${feat("wave")? yes : no }
│🏴‍☠️ ${prefix}highfive ${feat("highfive")? yes : no }
│🏴‍☠️ ${prefix}handhold ${feat("handhold")? yes : no }
│🏴‍☠️ ${prefix}bite ${feat("bite")? yes : no }
│🏴‍☠️ ${prefix}glomp ${feat("glomp")? yes : no }
│🏴‍☠️ ${prefix}slap ${feat("slap")? yes : no }
│🏴‍☠️ ${prefix}kill ${feat("kill")? yes : no }
│🏴‍☠️ ${prefix}happy ${feat("happy")? yes : no }
│🏴‍☠️ ${prefix}wink ${feat("wink")? yes : no }
│🏴‍☠️ ${prefix}poke ${feat("poke")? yes : no }
│🏴‍☠️ ${prefix}dance ${feat("dance")? yes : no }
│🏴‍☠️ ${prefix}cringe ${feat("cringe")? yes : no }
│🏴‍☠️ ${prefix}feed ${feat("feed")? yes : no }
│🏴‍☠️ ${prefix}kuni ${feat("kuni")? yes : no }
│🏴‍☠️ ${prefix}tickle ${feat("tickle")? yes : no }
│🏴‍☠️ ${prefix}fox_girl ${feat("fox_girl")? yes : no }
│🏴‍☠️ ${prefix}wallpaper ${feat("wallpaper")? yes : no }
│🏴‍☠️ ${prefix}neko2 ${feat("neko2")? yes : no }
│🏴‍☠️ ${prefix}kiss2 ${feat("kiss2")? yes : no }
│🏴‍☠️ ${prefix}smug2 ${feat("smug2")? yes : no }
│🏴‍☠️ ${prefix}waifu2 ${feat("waifu2")? yes : no }
│🏴‍☠️ ${prefix}cuddle2 ${feat("cuddle2")? yes : no }
│
╰────────────❒`}

global.haramMenu = (prefix) => {
return `
╭──❒ *Haram Menu*
│
│🏴‍☠️ ${prefix}sagiri ${feat("sagiri")? yes : no }
│🏴‍☠️ ${prefix}cum ${feat("cum")? yes : no }
│🏴‍☠️ ${prefix}feet ${feat("feet")? yes : no }
│🏴‍☠️ ${prefix}yuri ${feat("yuri")? yes : no }
│🏴‍☠️ ${prefix}trap ${feat("trap")? yes : no }
│🏴‍☠️ ${prefix}ngif ${feat("ngif")? yes : no }
│🏴‍☠️ ${prefix}lewd ${feat("lewd")? yes : no }
│🏴‍☠️ ${prefix}gasm ${feat("gasm")? yes : no }
│🏴‍☠️ ${prefix}anal ${feat("anal")? yes : no }
│🏴‍☠️ ${prefix}holo ${feat("holo")? yes : no }
│🏴‍☠️ ${prefix}tits ${feat("tits")? yes : no }
│🏴‍☠️ ${prefix}erok ${feat("erok")? yes : no }
│🏴‍☠️ ${prefix}solog ${feat("solog")? yes : no }
│🏴‍☠️ ${prefix}feetg ${feat("feetg")? yes : no }
│🏴‍☠️ ${prefix}lewdk ${feat("lewdk")? yes : no }
│🏴‍☠️ ${prefix}pussy ${feat("pussy")? yes : no }
│🏴‍☠️ ${prefix}femdom ${feat("femdom")? yes : no }
│🏴‍☠️ ${prefix}hentai ${feat("hentai")? yes : no }
│🏴‍☠️ ${prefix}eroyuri ${feat("eroyuri")? yes : no }
│🏴‍☠️ ${prefix}cum_jpg ${feat("cum_jpg")? yes : no }
│🏴‍☠️ ${prefix}blowjob ${feat("blowjob")? yes : no }
│🏴‍☠️ ${prefix}futanari ${feat("futanari")? yes : no }
│🏴‍☠️ ${prefix}holoero ${feat("holoero")? yes : no }
│🏴‍☠️ ${prefix}erokemo ${feat("erokemo")? yes : no }
│🏴‍☠️ ${prefix}chiisaihentai ${feat("chiisaihentai")? yes : no }
│🏴‍☠️ ${prefix}yaoi ${feat("yaoi")? yes : no }
│🏴‍☠️ ${prefix}milf ${feat("milf")? yes : no }
│🏴‍☠️ ${prefix}ecchi ${feat("ecchi")? yes : no }
│🏴‍☠️ ${prefix}ahegao ${feat("ahegao")? yes : no }
│🏴‍☠️ ${prefix}hololewd ${feat("hololewd")? yes : no }
│🏴‍☠️ ${prefix}sideoppai ${feat("sideoppai")? yes : no }
│🏴‍☠️ ${prefix}animefeets ${feat("animefeets")? yes : no }
│🏴‍☠️ ${prefix}animebooty ${feat("animebooty")? yes : no }
│🏴‍☠️ ${prefix}animearmpits ${feat("animearmpits")? yes : no }
│🏴‍☠️ ${prefix}hentaifemdom ${feat("hentaifemdom")? yes : no }
│🏴‍☠️ ${prefix}lewdanimegirls ${feat("lewdanimegirls")? yes : no }
│🏴‍☠️ ${prefix}biganimetiddies ${feat("biganimetiddies")? yes : no }
│🏴‍☠️ ${prefix}neko3 ${feat("neko3")? yes : no }
│🏴‍☠️ ${prefix}waifu3 ${feat("waifu3")? yes : no }
│🏴‍☠️ ${prefix}loli2 ${feat("loli2")? yes : no }
│🏴‍☠️ ${prefix}trap2 ${feat("trap2")? yes : no }
│🏴‍☠️ ${prefix}blowjob2 ${feat("blowjob2")? yes : no }
│🏴‍☠️ ${prefix}hentai2 ${feat("hentai2")? yes : no }
│
╰────────────❒`}

global.textproMenu = (prefix) => {
return `
╭──❒ *TextPro Menu*
│
│🏴‍☠️ ${prefix}neon ${feat("neon")? yes : no }
│🏴‍☠️ ${prefix}greenneon ${feat("greenneon")? yes : no }
│🏴‍☠️ ${prefix}futureneon ${feat("futureneon")? yes : no }
│🏴‍☠️ ${prefix}sandwriting ${feat("sandwriting")? yes : no }
│🏴‍☠️ ${prefix}sandsummer ${feat("sandsummer")? yes : no }
│🏴‍☠️ ${prefix}sandengraved ${feat("sandengraved")? yes : no }
│🏴‍☠️ ${prefix}metaldark ${feat("metaldark")? yes : no }
│🏴‍☠️ ${prefix}neonlight ${feat("neonlight")? yes : no }
│🏴‍☠️ ${prefix}holograph ${feat("holograph")? yes : no }
│🏴‍☠️ ${prefix}text1917 ${feat("text1917")? yes : no }
│🏴‍☠️ ${prefix}minion ${feat("minion")? yes : no }
│🏴‍☠️ ${prefix}deluxesilver ${feat("deluxesilver")? yes : no }
│🏴‍☠️ ${prefix}newyearcard ${feat("newyearcard")? yes : no }
│🏴‍☠️ ${prefix}bloodfrosted ${feat("bloodfrosted")? yes : no }
│🏴‍☠️ ${prefix}halloween ${feat("halloween")? yes : no }
│🏴‍☠️ ${prefix}jokerlogo ${feat("jokerlogo")? yes : no }
│🏴‍☠️ ${prefix}fireworksparkle ${feat("fireworksparkle")? yes : no }
│🏴‍☠️ ${prefix}bokeh ${feat("bokeh")? yes : no }
│🏴‍☠️ ${prefix}toxic ${feat("toxic")? yes : no }
│🏴‍☠️ ${prefix}strawberry ${feat("strawberry")? yes : no }
│🏴‍☠️ ${prefix}box3d ${feat("box3d")? yes : no }
│🏴‍☠️ ${prefix}roadwarning ${feat("roadwarning")? yes : no }
│🏴‍☠️ ${prefix}breakwall ${feat("breakwall")? yes : no }
│🏴‍☠️ ${prefix}icecold ${feat("icecold")? yes : no }
│🏴‍☠️ ${prefix}luxury ${feat("luxury")? yes : no }
│🏴‍☠️ ${prefix}cloud ${feat("cloud")? yes : no }
│🏴‍☠️ ${prefix}summersand ${feat("summersand")? yes : no }
│🏴‍☠️ ${prefix}horrorblood ${feat("horrorblood")? yes : no }
│🏴‍☠️ ${prefix}thunder ${feat("thunder")? yes : no }
│🏴‍☠️ ${prefix}magma ${feat("magma")? yes : no }
│🏴‍☠️ ${prefix}impressiveglitch ${feat("impressiveglitch")? yes : no }
│🏴‍☠️ ${prefix}watercolor ${feat("watercolor")? yes : no }
│🏴‍☠️ ${prefix}wonderfulgraffiti ${feat("wonderfulgraffiti")? yes : no }
│🏴‍☠️ ${prefix}blackping ${feat("blackping")? yes : no }
│
╰────────────❒`}

global.ephoto360Menu = (prefix) => {
return `
╭──❒ *Ephoto360 Menu*
│
│🏴‍☠️ ${prefix}shadow ${feat("shadow")? yes : no }
│🏴‍☠️ ${prefix}cup ${feat("cup")? yes : no }
│🏴‍☠️ ${prefix}cup1 ${feat("cup1")? yes : no }
│🏴‍☠️ ${prefix}romance ${feat("romance")? yes : no }
│🏴‍☠️ ${prefix}smoke ${feat("smoke")? yes : no }
│🏴‍☠️ ${prefix}burnpaper ${feat("burnpaper")? yes : no }
│🏴‍☠️ ${prefix}lovemessage ${feat("lovemessage")? yes : no }
│🏴‍☠️ ${prefix}undergrass ${feat("undergrass")? yes : no }
│🏴‍☠️ ${prefix}love ${feat("love")? yes : no }
│🏴‍☠️ ${prefix}coffe ${feat("coffe")? yes : no }
│🏴‍☠️ ${prefix}woodheart ${feat("woodheart")? yes : no }
│🏴‍☠️ ${prefix}summer3d ${feat("summer3d")? yes : no }
│🏴‍☠️ ${prefix}wolfmetal ${feat("wolfmetal")? yes : no }
│🏴‍☠️ ${prefix}nature3d ${feat("nature3d")? yes : no }
│🏴‍☠️ ${prefix}underwater ${feat("underwater")? yes : no }
│🏴‍☠️ ${prefix}golderrose ${feat("golderrose")? yes : no }
│🏴‍☠️ ${prefix}summernature ${feat("summernature")? yes : no }
│🏴‍☠️ ${prefix}fallleaves ${feat("fallleaves")? yes : no }
│🏴‍☠️ ${prefix}flamming ${feat("flamming")? yes : no }
│🏴‍☠️ ${prefix}harrypotter ${feat("harrypotter")? yes : no }
│🏴‍☠️ ${prefix}tiktokmaker ${feat("tiktokmaker")? yes : no }
│🏴‍☠️ ${prefix}wetglass ${feat("wetglass")? yes : no }
│🏴‍☠️ ${prefix}multicolor3d ${feat("multicolor3d")? yes : no }
│🏴‍☠️ ${prefix}luxurygold ${feat("luxurygold")? yes : no }
│🏴‍☠️ ${prefix}galaxywallpaper ${feat("galaxywallpaper")? yes : no }
│🏴‍☠️ ${prefix}lighttext ${feat("lighttext")? yes : no }
│🏴‍☠️ ${prefix}beautifulflower ${feat("beautifulflower")? yes : no }
│🏴‍☠️ ${prefix}puppycute ${feat("puppycute")? yes : no }
│🏴‍☠️ ${prefix}royaltext ${feat("royaltext")? yes : no }
│🏴‍☠️ ${prefix}heartshaped ${feat("heartshaped")? yes : no }
│🏴‍☠️ ${prefix}birthdaycake ${feat("birthdaycake")? yes : no }
│🏴‍☠️ ${prefix}galaxystyle ${feat("galaxystyle")? yes : no }
│🏴‍☠️ ${prefix}hologram3d ${feat("hologram3d")? yes : no }
│🏴‍☠️ ${prefix}glossychrome ${feat("glossychrome")? yes : no }
│🏴‍☠️ ${prefix}greenbush ${feat("greenbush")? yes : no }
│🏴‍☠️ ${prefix}metallogo ${feat("metallogo")? yes : no }
│🏴‍☠️ ${prefix}noeltext ${feat("noeltext")? yes : no }
│🏴‍☠️ ${prefix}glittergold ${feat("glittergold")? yes : no }
│🏴‍☠️ ${prefix}textcake ${feat("textcake")? yes : no }
│🏴‍☠️ ${prefix}starsnight ${feat("starsnight")? yes : no }
│🏴‍☠️ ${prefix}wooden3d ${feat("wooden3d")? yes : no }
│🏴‍☠️ ${prefix}textbyname ${feat("textbyname")? yes : no }
│🏴‍☠️ ${prefix}writegalacy ${feat("writegalacy")? yes : no }
│🏴‍☠️ ${prefix}galaxybat ${feat("galaxybat")? yes : no }
│🏴‍☠️ ${prefix}snow3d ${feat("snow3d")? yes : no }
│🏴‍☠️ ${prefix}birthdayday ${feat("birthdayday")? yes : no }
│🏴‍☠️ ${prefix}goldplaybutton ${feat("goldplaybutton")? yes : no }
│🏴‍☠️ ${prefix}silverplaybutton ${feat("silverplaybutton")? yes : no }
│🏴‍☠️ ${prefix}freefire ${feat("freefire")? yes : no }
│🏴‍☠️ ${prefix}cartoongravity ${feat("cartoongravity")? yes : no }
│🏴‍☠️ ${prefix}anonymhacker ${feat("anonymhacker")? yes : no }
│🏴‍☠️ ${prefix}mlwall ${feat("mlwall")? yes : no }
│🏴‍☠️ ${prefix}pubgmaskot ${feat("pubgmaskot")? yes : no }
│🏴‍☠️ ${prefix}aovwall ${feat("aovwall")? yes : no }
│🏴‍☠️ ${prefix}fpslogo ${feat("fpslogo")? yes : no }
│🏴‍☠️ ${prefix}avatarlolnew ${feat("avatarlolnew")? yes : no }
│🏴‍☠️ ${prefix}lolbanner ${feat("lolbanner")? yes : no }
│🏴‍☠️ ${prefix}avatardota ${feat("avatardota")? yes : no }
│🏴‍☠️ ${prefix}greenneon2 ${feat("greenneon2")? yes : no }
│🏴‍☠️ ${prefix}watercolor2 ${feat("watercolor2")? yes : no }
│
╰────────────❒`}

global.gameMenu = (prefix) => {
return `
╭──❒ *Game Menu*
│
│🏴‍☠️ ${prefix}akinator ${feat("akinator")? yes : no }
│🏴‍☠️ ${prefix}caklontong ${feat("caklontong")? yes : no }
│🏴‍☠️ ${prefix}family100 ${feat("family100")? yes : no }
│🏴‍☠️ ${prefix}siapaaku ${feat("siapaaku")? yes : no }
│🏴‍☠️ ${prefix}susunkata ${feat("susunkata")? yes : no }
│🏴‍☠️ ${prefix}tebakbendera ${feat("tebakbendera")? yes : no }
│🏴‍☠️ ${prefix}tebakgambar ${feat("tebakgambar")? yes : no }
│🏴‍☠️ ${prefix}tebakkata ${feat("tebakkata")? yes : no }
│🏴‍☠️ ${prefix}tebaklirik ${feat("tebaklirik")? yes : no }
│🏴‍☠️ ${prefix}tebakjenaka ${feat("tebakjenaka")? yes : no }
│
╰────────────❒`}

global.convertedMenu = (prefix) => {
return `
╭──❒ *Converted Menu*
│
│🏴‍☠️ ${prefix}tts ${feat("tts")? yes : no }
│🏴‍☠️ ${prefix}ttp ${feat("ttp")? yes : no }
│🏴‍☠️ ${prefix}ttp2 ${feat("ttp2")? yes : no }
│🏴‍☠️ ${prefix}ttp3 ${feat("ttp3")? yes : no }
│🏴‍☠️ ${prefix}ttp4 ${feat("ttp4")? yes : no }
│🏴‍☠️ ${prefix}ttp5 ${feat("ttp5")? yes : no }
│🏴‍☠️ ${prefix}ttp6 ${feat("ttp6")? yes : no }
│🏴‍☠️ ${prefix}attp ${feat("attp")? yes : no }
│🏴‍☠️ ${prefix}attp2 ${feat("attp2")? yes : no }
│🏴‍☠️ ${prefix}sticker ${feat("sticker")? yes : feat("stiker")? yes : feat("s")? yes : no }
│🏴‍☠️ ${prefix}take ${feat("take")? yes : feat("swm")? yes : feat("wm")? yes : no }
│🏴‍☠️ ${prefix}removebg ${feat("removebg")? yes : no }
│🏴‍☠️ ${prefix}emojimix ${feat("emojimix")? yes : no }
│🏴‍☠️ ${prefix}duration ${feat("duration")? yes : no }
│🏴‍☠️ ${prefix}toimg ${feat("toimg")? yes : no }
│🏴‍☠️ ${prefix}tovn ${feat("tovn")? yes : no }
│🏴‍☠️ ${prefix}tomp4 ${feat("tomp4")? yes : no }
│🏴‍☠️ ${prefix}tomp3 ${feat("tomp3")? yes : no }
│🏴‍☠️ ${prefix}togif ${feat("togif")? yes : no }
│🏴‍☠️ ${prefix}tourl ${feat("tourl")? yes : no }
│🏴‍☠️ ${prefix}tohd ${feat("tohd")? yes : no }
│🏴‍☠️ ${prefix}to2d ${feat("to2d")? yes : no }
│
╰────────────❒`}

global.anonymousMenu = (prefix) => {
return `
╭──❒ *Anonymous Menu*
│
│🏴‍☠️ ${prefix}anonymous ${feat("anonymous")? yes : no }
│🏴‍☠️ ${prefix}start ${feat("start")? yes : no }
│🏴‍☠️ ${prefix}startchat ${feat("startchat")? yes : no }
│🏴‍☠️ ${prefix}keluar ${feat("keluar")? yes : no }
│🏴‍☠️ ${prefix}next ${feat("next")? yes : no }
│🏴‍☠️ ${prefix}sendkontak ${feat("sendkontak")? yes : no }
│🏴‍☠️ ${prefix}invite ${feat("invite")? yes : no }
│🏴‍☠️ ${prefix}joinchat ${feat("joinchat")? yes : no }
│
╰────────────❒`}

global.downloadMenu = (prefix) => {
return `
╭──❒ *Download Menu*
│
│🏴‍☠️ ${prefix}play ${feat("play")? yes : no }
│🏴‍☠️ ${prefix}ytmp3 ${feat("ytmp3")? yes : no }
│🏴‍☠️ ${prefix}ytmp4 ${feat("ytmp4")? yes : no }
│🏴‍☠️ ${prefix}cocofun ${feat("cocofun")? yes : no }
│🏴‍☠️ ${prefix}fbdl ${feat("fbdl")? yes : no }
│🏴‍☠️ ${prefix}tiktok ${feat("tiktok")? yes : no }
│🏴‍☠️ ${prefix}tiktokmp3 ${feat("tiktokmp3")? yes : no }
│🏴‍☠️ ${prefix}igdl ${feat("igdl")? yes : no }
│🏴‍☠️ ${prefix}spotify ${feat("spotify")? yes : no }
│🏴‍☠️ ${prefix}jooxplay ${feat("jooxplay")? yes : no }
│🏴‍☠️ ${prefix}twtdl ${feat("twtdl")? yes : no }
│🏴‍☠️ ${prefix}zippyshare ${feat("zippyshare")? yes : no }
│🏴‍☠️ ${prefix}pinterestdl ${feat("pinterestdl")? yes : no }
│🏴‍☠️ ${prefix}pixivdl ${feat("pixivdl")? yes : no }
│🏴‍☠️ ${prefix}mediafire ${feat("mediafire")? yes : no }
│🏴‍☠️ ${prefix}genshin ${feat("genshin")? yes : no }
│🏴‍☠️ ${prefix}telesticker ${feat("telesticker")? yes : no }
│🏴‍☠️ ${prefix}kusonime ${feat("kusonime")? yes : no }
│🏴‍☠️ ${prefix}otakudesu ${feat("otakudesu")? yes : no }
│
╰────────────❒`}

global.searchMenu = (prefix) => {
return `
╭──❒ *Search Menu*
│
│🏴‍☠️ ${prefix}yts ${feat("yts")? yes : no}
│🏴‍☠️ ${prefix}spotifysearch ${feat("spotifysearch")? yes : no }
│🏴‍☠️ ${prefix}pinterest ${feat("pinterest")? yes : no }
│🏴‍☠️ ${prefix}pixiv ${feat("pixiv")? yes : no }
│🏴‍☠️ ${prefix}stickerwa ${feat("stickerwa")? yes : no }
│🏴‍☠️ ${prefix}gimage ${feat("gimage")? yes : no }
│🏴‍☠️ ${prefix}konachan ${feat("konachan")? yes : no }
│🏴‍☠️ ${prefix}wallpeper ${feat("wallpeper")? yes : no }
│🏴‍☠️ ${prefix}playstore ${feat("playstore")? yes : no }
│🏴‍☠️ ${prefix}shopee ${feat("shopee")? yes : no }
│🏴‍☠️ ${prefix}google ${feat("google")? yes : no }
│🏴‍☠️ ${prefix}moddroid ${feat("moddroid")? yes : no }
│🏴‍☠️ ${prefix}groupwa ${feat("groupwa")? yes : no }
│🏴‍☠️ ${prefix}character ${feat("character")? yes : no }
│🏴‍☠️ ${prefix}manga ${feat("manga")? yes : no }
│🏴‍☠️ ${prefix}anime ${feat("anime")? yes : no }
│🏴‍☠️ ${prefix}kusonimesearch ${feat("kusonimesearch")? yes : no }
│🏴‍☠️ ${prefix}otakudesusearch ${feat("otakudesusearch")? yes : no }
│
╰────────────❒`}

global.islamiMenu = (prefix) => {
return `
╭──❒ *Islami Menu*
│
│🏴‍☠️ ${prefix}surah ${feat("surah")? yes : no }
│🏴‍☠️ ${prefix}asmaulhusna ${feat("asmaulhusna")? yes : no }
│🏴‍☠️ ${prefix}jadwalsholat ${feat("jadwalsholat")? yes : no }
│🏴‍☠️ ${prefix}niatsholat ${feat("niatsholat")? yes : no }
│🏴‍☠️ ${prefix}kisahnabi ${feat("kisahnabi")? yes : no }
│
╰────────────❒`}

global.informationMenu = (prefix) => {
return `
╭──❒ *Information Menu*
│
│🏴‍☠️ ${prefix}cekumur ${feat("cekumur")? yes : no }
│🏴‍☠️ ${prefix}cuaca ${feat("cuaca")? yes : no }
│🏴‍☠️ ${prefix}infogempa ${feat("infogempa")? yes : no }
│🏴‍☠️ ${prefix}jadwalbola ${feat("jadwalbola")? yes : no }
│🏴‍☠️ ${prefix}jadwaltv ${feat("jadwaltv")? yes : no }
│🏴‍☠️ ${prefix}kodepos ${feat("kodepos")? yes : no }
│🏴‍☠️ ${prefix}translate ${feat("translate")? yes : no }
│🏴‍☠️ ${prefix}brainly ${feat("brainly")? yes : no }
│🏴‍☠️ ${prefix}kbbi ${feat("kbbi")? yes : no }
│🏴‍☠️ ${prefix}chord ${feat("chord")? yes : no }
│🏴‍☠️ ${prefix}heroml ${feat("heroml")? yes : no }
│🏴‍☠️ ${prefix}mlstalk ${feat("mlstalk")? yes : no }
│🏴‍☠️ ${prefix}wikipedia ${feat("wikipedia")? yes : no }
│🏴‍☠️ ${prefix}newsinfo ${feat("newsinfo")? yes : no }
│🏴‍☠️ ${prefix}cnnindonesia ${feat("cnnindonesia")? yes : no }
│🏴‍☠️ ${prefix}cnnnasional ${feat("cnnnasional")? yes : no }
│🏴‍☠️ ${prefix}cnninternasional ${feat("cnninternasional")? yes : no }
│🏴‍☠️ ${prefix}lirik ${feat("lirik")? yes : no }
│🏴‍☠️ ${prefix}covidindo ${feat("covidindo")? yes : no }
│🏴‍☠️ ${prefix}covidglobal ${feat("covidglobal")? yes : no }
│🏴‍☠️ ${prefix}indbeasiswa ${feat("indbeasiswa")? yes : no }
│
╰────────────❒`}

global.storageMenu = (prefix) => {
return `
╭──❒ *Storage Menu*
│
│🏴‍☠️ ${prefix}adderror ${feat("adderror")? yes : no }
│🏴‍☠️ ${prefix}addstick ${feat("addstick")? yes : no }
│🏴‍☠️ ${prefix}addvn ${feat("addvn")? yes : no }
│🏴‍☠️ ${prefix}addlimit ${feat("addlimit")? yes : no }
│🏴‍☠️ ${prefix}addowner ${feat("addowner")? yes : no }
│🏴‍☠️ ${prefix}addpremium ${feat("addpremium")? yes : no }
│🏴‍☠️ ${prefix}addsewa ${feat("addsewa")? yes : no }
│🏴‍☠️ ${prefix}addcmdowner ${feat("addcmdowner")? yes : no }
│🏴‍☠️ ${prefix}addcmdpremium ${feat("addcmdpremium")? yes : no }
│🏴‍☠️ ${prefix}addcmdlimit ${feat("addcmdlimit")? yes : no }
│🏴‍☠️ ${prefix}delerror ${feat("delerror")? yes : no }
│🏴‍☠️ ${prefix}delstick ${feat("delstick")? yes : no }
│🏴‍☠️ ${prefix}delvn ${feat("delvn")? yes : no }
│🏴‍☠️ ${prefix}delowner ${feat("delowner")? yes : no }
│🏴‍☠️ ${prefix}delpremium ${feat("delpremium")? yes : no }
│🏴‍☠️ ${prefix}delsewa ${feat("delsewa")? yes : no }
│🏴‍☠️ ${prefix}delcmdowner ${feat("delcmdowner")? yes : no }
│🏴‍☠️ ${prefix}delcmdpremium ${feat("delcmdpremium")? yes : no }
│🏴‍☠️ ${prefix}delcmdlimit ${feat("delcmdlimit")? yes : no }
│🏴‍☠️ ${prefix}listerror ${feat("listerror")? yes : no }
│🏴‍☠️ ${prefix}liststick ${feat("liststick")? yes : no }
│🏴‍☠️ ${prefix}listvn ${feat("listvn")? yes : no }
│🏴‍☠️ ${prefix}listowner ${feat("listowner")? yes : no }
│🏴‍☠️ ${prefix}listpremium ${feat("listpremium")? yes : no }
│🏴‍☠️ ${prefix}listsewa ${feat("listsewa")? yes : no }
│🏴‍☠️ ${prefix}listcmdowner ${feat("listcmdowner")? yes : no }
│🏴‍☠️ ${prefix}listcmdpremium ${feat("listcmdpremium")? yes : no }
│🏴‍☠️ ${prefix}listcmdlimit ${feat("listcmdlimit")? yes : no }
│🏴‍☠️ ${prefix}listuser ${feat("listuser")? yes : no }
│🏴‍☠️ ${prefix}listban ${feat("listban")? yes : no }
│🏴‍☠️ ${prefix}listblockcmd ${feat("listblockcmd")? yes : no }
│🏴‍☠️ ${prefix}clearallerror ${feat("clearallerror")? yes : no }
│🏴‍☠️ ${prefix}clearallstick ${feat("clearallstick")? yes : no }
│🏴‍☠️ ${prefix}clearallvn ${feat("clearallvn")? yes : no }
│🏴‍☠️ ${prefix}clearallowner ${feat("clearallowner")? yes : no }
│🏴‍☠️ ${prefix}clearallpremium ${feat("clearallpremium")? yes : no }
│🏴‍☠️ ${prefix}clearallsewa ${feat("clearallsewa")? yes : no }
│🏴‍☠️ ${prefix}clearallcmdowner ${feat("clearallcmdowner")? yes : no }
│🏴‍☠️ ${prefix}clearallcmdpremium ${feat("clearallcmdpremium")? yes : no }
│🏴‍☠️ ${prefix}clearallcmdlimit ${feat("clearallcmdlimit")? yes : no }
│🏴‍☠️ ${prefix}clearalluser ${feat("clearalluser")? yes : no }
│🏴‍☠️ ${prefix}clearallban ${feat("clearallban")? yes : no }
│🏴‍☠️ ${prefix}clearallblockcmd ${feat("clearallblockcmd")? yes : no }
│
╰────────────❒`}



global.allMenu = (prefix) => { 
return `${ownerMenu(prefix)}
${groupMenu(prefix)}
${mainMenu(prefix)}
${jadibotMenu(prefix)}
${tagMenu(prefix)}
${funMenu(prefix)}
${movieStoryMenu(prefix)}
${randomMenu(prefix)}
${wibuMenu(prefix)}
${haramMenu(prefix)}
${textproMenu(prefix)}
${ephoto360Menu(prefix)}
${gameMenu(prefix)}
${convertedMenu(prefix)}
${anonymousMenu(prefix)}
${downloadMenu(prefix)}
${searchMenu(prefix)}
${islamiMenu(prefix)}
${informationMenu(prefix)}
${storageMenu(prefix)}`
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})