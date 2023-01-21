/*
Thanks To
Pembuat Base ( Irfan )

Jangan Hapus Thanks To Di Atas
*/
const mongoDB = require('./mongoDB')
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./ACTION/STORAGE/ADD/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false

global.db.data = {
allcommand: [],
anonymous: [],
antispam: [],
audio: {},
banned: [],
chats: {},
dashboard: [],
data: [],
database: {},
expired: {},
listerror: [],
menfes: [],
settings: {},
spammer: [],
sticker: {},
users: {},
...(global.db.data || {})
}

global.db.chain = lodash.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)




let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})