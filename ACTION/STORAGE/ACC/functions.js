const checkWAVersion = async () => {
const { data } = await axios.get('https://web.whatsapp.com/check-update?version=1&platform=web')
return data.currentVersion.split('.').map(x => parseInt(x))
}

const fetchJson = (url, options) => new Promise(async(resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})


const fetchText = (url, options) => new Promise(async(resolve, reject) => {
fetch(url, options)
.then(response => response.text())
.then(text => {
resolve(text)
})
.catch((err) => {
reject(err)
})
})


const removeEmojis = (string) => {
var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
return string.replace(regex, '');
}

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

const getCase = (cases) => {
let data = fs.readFileSync("./ACTION/STORAGE/AGG/core.js")
try{
return "case "+`"${cases}"`+data.toString().split("case \""+cases+"\"")[1].split("break")[0]+"break"
} catch {
return "case "+`"${cases}"`+data.toString().split("case  \""+cases+"\"")[1].split("break")[0]+"break"
}
}

const formatp = sizeFormatter({
std: 'JEDEC', 
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})

const kyun = (seconds) =>{
function pad(s) {
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60 * 60));
var minutes = Math.floor(seconds % (60 * 60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}


const h2k = (number) => {
var SI_POSTFIXES = ["", " Ribu", " Juta", " Miliar", " Triliun", " P", " E"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if (tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if (tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

const getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch {
//console.log(e)
}
}

const randomBytes = (length) => {
return crypto.randomBytes(length)
}

const generateMessageID = () => {
return randomBytes(4).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
i.isAdmin ? admins.push(i.jid) : ''
}
return admins
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
"interval": 500,
"frames": [
"🅘",
"🅡",
"🅕",
"🅐",
"🅝",
"🅑", 
"🅐", 
"🅢",
"🅔"
]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
if (!globalSpinner) globalSpinner = new spinnies({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
spins.add(id, {text: text})
}

const info = (id, text) => {
spins.update(id, {text: text})
}

const success = (id, text) => {
spins.succeed(id, {text: text})
}

const close = (id, text) => {
spins.fail(id, {text: text})
}
 
const banner = cfonts.render((`Bot Whatsapp`), {
font: 'simple',
color: 'candy',
align: 'center',
gradient: ["red","magenta"],
lineHeight: 3
});
  
const generateProfilePicture = async (buffer) => {
try{
const jimp = await Jimp.read(buffer)
const min = jimp.getWidth()
const max = jimp.getHeight()
const cropped = jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
}
} catch {}
}

const jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

function delay(ms) {
return new Promise((resolve, reject) => setTimeout(resolve, ms))
}



const unixTimestampSeconds = (date = new Date()) => {
Math.floor(date.getTime() / 1000)
}

const unixTimeSecond = unixTimestampSeconds

const generateMessageTag = (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString();
if (epoch)
tag += '.--' + epoch; // attach epoch if provided
return tag;
}

function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}

const randomNomor = (angka) => {
return Math.floor(Math.random() * angka) + 1
}

const runtime = (seconds) => {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? ` ${mess.time.days}, ` : ` ${toFirstCase(mess.time.days)}, `) : "";
var hDisplay = h > 0 ? h + (h == 1 ? ` ${mess.time.hours}, ` : ` ${toFirstCase(mess.time.hours)}, `) : "";
var mDisplay = m > 0 ? m + (m == 1 ? ` ${mess.time.minutes}, ` : ` ${toFirstCase(mess.time.minutes)}, `) : "";
var sDisplay = s > 0 ? s + (s == 1 ? ` ${mess.time.seconds}` : ` ${toFirstCase(mess.time.seconds)}`) : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

const removebg = async (buffer) => {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
url: "https://api.remove.bg/v1.0/removebg",
method: "POST",
data: form,
responseType: "arraybuffer",
headers: {
"X-Api-Key": removebgkey,
...form.getHeaders()
}
})
return res.data
}



const makeid = (length) => {
let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() *
charactersLength));
}
return result;
}


const calculate_age = (dob) => { // new Date("month/date/year")
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms);
return Math.abs(age_dt.getUTCFullYear() - 1970);
}


const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})


let dot = new Date(new Date + 3600000)
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(dot)

const reSize = (buffer, ukur1, ukur2) => {
try{
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
} catch {}
}

function cerpen (category) {
return new Promise(async (resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
let $$ = cheerio.load(res.data)
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
}
resolve(hasil)
})
})
})
}






global.getBuffer = getBuffer
global.h2k = h2k
global.generateMessageID = generateMessageID
global.getGroupAdmins = getGroupAdmins
global.getRandom = getRandom
global.start = start
global.info = info
global.success = success
global.banner = banner
global.close = close
global.randomNomor = randomNomor
global.jsonformat = jsonformat
global.generateProfilePicture = generateProfilePicture
global.runtime = runtime
global.removebg = removebg
global.generateMessageTag = generateMessageTag
global.makeid = makeid
global.calculate_age = calculate_age
global.isUrl = isUrl
global.formatDate = formatDate
global.weton = weton
global.week = week
global.calender = calender
global.dateIslamic = dateIslamic
global.FileSize = FileSize
global.parseMention = parseMention
global.reSize = reSize
global.checkWAVersion = checkWAVersion
global.fetchJson = fetchJson
global.fetchText = fetchText
global.removeEmojis = removeEmojis
global.sleep = sleep
global.getCase = getCase
global.kyun = kyun
global.formatp = formatp
global.cerpen = cerpen


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})