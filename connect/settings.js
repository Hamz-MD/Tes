process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.owner = ['6281233649676','6285842647866','6285895086040']
global.tesel = ['6281111111111']
global.ownerName = 'this.ilham_'
global.namaBot =  'Rusdi 𝐁𝐨𝐭'
global.packname = 'Rusdi 𝐁𝐨𝐭' 
global.author = 'Whatsapp'
global.prefa = ['','!','.','#','!']
global.lannn = 'https://api.lannn.me'
global.lannkey = 'Kuontolll'
global.sessionName = 'session'
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.doc7 = 'image/jpeg'
global.doc8 = 'audio/mpeg'
global.doc9 = 'video/mp4'
global.mylogo = ["https://telegra.ph/file/75a3b01da9934ead5890e.jpg","https://telegra.ph/file/38e0c6fcaa71551ed6407.jpg","https://telegra.ph/file/551ccaa299c0b37e80b59.jpg","https://telegra.ph/file/4feacc10e29b71072bc91.jpg","https://telegra.ph/file/05e2ab0424961897838e0.jpg","https://telegra.ph/file/8d25c175697d2dc40107a.jpg","https://telegra.ph/file/a0eab20252073b35a332f.jpg"]
global.aikey = [
    "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",
    "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",
    "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",
    "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",
    "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"
]
//Message Nya Ubah Disini
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
link: '[❗] Link yang anda kirim tidak valid!', 
link1: 'Link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
regis: 'Silakan Daftar terlebih dahulu dengan ketik #verifikasi nama.umur\nContoh : #verifikasi Night.19',
done: 'Done!',
}


//Sesuaikan
global.thumb = { url : 'https://telegra.ph/file/de6d085e41436bf460be3.jpg'}
global.thumb1 = 'https://telegra.ph/file/b86bec7b5889031848108.jpg'
global.thumb2 = { url: 'https://telegra.ph/file/cfa44511b60419ea31cb0.jpg'}
global.thumb3 = { url: 'https://telegra.ph/file/1bf2ddb39df8796edbb79.jpg'}
global.erorurl =  'https://telegra.ph/file/df5397e6ed9ebcd05c0cb.jpg'

    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
