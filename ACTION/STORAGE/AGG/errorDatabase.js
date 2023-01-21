module.exports = async(sock) => {
const botNumber = sock.decodeJid(sock.user.id)
try{
global.ownerNumber = db.data.settings[botNumber].nomerowner
} catch {
global.ownerNumber = nomerOwner
}
try{
global.devoloperNumber = db.data.settings[botNumber].devoloper
} catch {
global.devoloperNumber = "628979185922"
}
try{
global.ownerName = db.data.settings[botNumber].namaowner
} catch {
global.ownerName = namaOwner
}
try{
global.copyrightnya = db.data.settings[botNumber].copyright
} catch {
global.copyrightnya = copyright
}
try{
global.setPrefix = db.data.settings[botNumber].multi
} catch {
global.setPrefix = "prefix"
}
try{
global.mode = db.data.settings[botNumber].mode
} catch {
global.mode = "public"
}
try{
global.autobio = db.data.settings[botNumber].autobio
} catch {
global.autobio = false
}
try{
global.autoread = db.data.settings[botNumber].autoread
} catch {
global.autoread = false
}
try{
global.auto = db.data.settings[botNumber].auto
} catch {
global.auto = "recording"
}
try{
global.autoQuoted = db.data.settings[botNumber].autoquoted
} catch {
global.autoQuoted = true
}
try{ 
global.Quoted = db.data.settings[botNumber].quoted
} catch {
global.Quoted = "m"
}
try{
global.autodelsampah = db.data.settings[botNumber].autodelsampah
} catch {
global.autodelsampah = false
}
try{
global.replyType = db.data.settings[botNumber].replytype
} catch {
global.replyType = "web1"
}
}