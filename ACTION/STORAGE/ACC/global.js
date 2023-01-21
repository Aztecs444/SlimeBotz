require("./module")
require("../../../ACTION/OPTIONS/options")
require("../../../ACTION/STORAGE/ACC/database")
require("../../../ACTION/STORAGE/ACC/functions")
require("../../../ACTION/STORAGE/ACC/uploader")
require("../../../ACTION/STORAGE/ACC/color")
require("../../../ACTION/STORAGE/ACC/jadibot")
require("../../../ACTION/STORAGE/AGG/menu")
require("../../../ACTION/STORAGE/AGG/sewabot")
require('../../../ACTION/STORAGE/AGG/message')







let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})