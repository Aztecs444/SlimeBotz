

global.sewabot = (pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa botz

*Sewa Group*
*Harga*
- 1 hari : Rp. 1.000
- 1 minggu : Rp. 5.000
- 1 bulan : Rp. 10.000

*User Premium*
*Harga*
- 1 hari : Rp. 2.000
- 1 minggu : Rp. 10.000
- 1 bulan : Rp. 15.000

*User Owner*
*Harga*
- 1 hari : Rp. 5.000
- 1 minggu : Rp. 15.000
- 1 bulan : Rp. 30.000

*Fitur Sewa*
• Dapat akses di group
• Bisa request fitur ke devoloper

*Fitur Premium*
• Dapat akses semua fitur premium
• Bisa request fitur ke devoloper
• Dapat akses di group
• Limit tanpa batas
• Dan masih banyak lagi

*Fitur Owner*
• Dapat semua akses fitur owner
• Bisa request fitur ke devoloper
• Dapat semua akses fitur premium
• Limit tanpa batas
• Masa panjang permanen


Bot on 24 jam tapi kadang 
juga mati klo lgi ada error 
atau lgi perbaikan bug.
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})




















