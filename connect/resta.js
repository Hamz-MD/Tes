process.on("uncaughtException", console.error)
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const ikeh = require("ikyy")
const iky = new ikeh()
const path = require('path')
const mathjs = require('mathjs')
const cheerio = require('cheerio')
const dcanvas = require("discord-canvas")
const PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const { createHash } = require('crypto')
const similarity = require('similarity')
const acrcloud = require('acrcloud')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const hxz = require('hxz-api');
const {  snapsave } = require('@bochilteam/scraper')
const instagramGetUrl = require('instagram-url-direct')
const simple = require('../lib/myfunc')
const { mediafireDl } = require('../lib/mediafire')
const textpro = require('../lib/textpro')
const { pinterest, hentai, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bahasa, readme, channel, snk }= require('../connect/help.js')
const noapi = require('../lib/api') 
const api2 = require('../lib/api2') 
const { lann } = require('../lib/lann')
const { cerpen } = require('../lib/cerpen')
const { wikiSearch } = require('../lib/wiki');
const { toAudio, toPTT} = require('../lib/converter')
const { yta, ytv } = require('../lib/y2mate')
const { covid, copid } = require('../lib/copid.js')
const crypto = require('crypto')


module.exports = Resta = async(Resta, m, chatUpdate, store) => {
           try {
           const { type, quotedMsg, mentioned, now, fromMe } = m
           var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
           var budy = (typeof m.text == 'string' ? m.text : '')
           const prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#%^&./\\Â©^]/.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#,|`Ã·?;:%abcdefghijklmnopqrstuvwxyz%^&./\\Â©^]/gi) : '#'
           const isCmd = body.startsWith(prefix)
           const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
           const args = body.trim().split(/ +/).slice(1)
           const pushname = m.pushName || "No Name"
           const botNumber = await Resta.decodeJid(Resta.user.id)
           const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
           const itsMe = m.sender == botNumber ? true : false
           const text = args.join(" ")
           const q = args.join(" ")
           const quoted = m.quoted ? m.quoted : m
           const mime = (quoted.msg || quoted).mimetype || ''
           const qmsg = (quoted.msg || quoted)
           const isMedia = /image|video|sticker|audio/.test(mime)
           const from = m.key.remoteJid
           const isGroup = m.key.remoteJid.endsWith('@g.us')
           const groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat).catch(e => {}) : ''
           const groupName = m.isGroup ? groupMetadata.subject : ''
           const participants = m.isGroup ? await groupMetadata.participants : ''
           const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
           const groupOwner = m.isGroup ? groupMetadata.owner : ''
           const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
           const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
           const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
           const isNumber = x => typeof x === 'number' && !isNaN(x)
           const time = moment().tz('asia/jakarta').format("hh:mm:ss")
           const wib = moment.tz('asia/jakarta').format('hh:mm:ss')
           const wita = moment.tz('asia/makassar').format("hh:mm:ss")
           const wit = moment.tz('asia/jayapura').format("hh:mm:ss")
           const hour_now = moment().format('hh:mm:ss') 
		   //TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 // redmor
 let readmore = String.fromCharCode(8206).repeat(4001)

 // TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
             
           let user = db.data.users[m.sender]
            try {
            m = simple.smsg(Resta, m) || m
            if (!m) return
            m.exp = 0  
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user))
            user.afkReason = ''
            if (!('pasangan' in user))
            user.pasangan = ''
            if (!('registered' in user))
            user.registered = false
            if (!user.registered) {
            if (!('name' in user)) 
            user.name = Resta.getName(m.sender)
            if (!isNumber(user.age))
            user.age = -1
            if (!isNumber(user.regTime))
            user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = 0
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!isNumber(user.exp)) user.exp = 0
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            pasangan: '',
            registered: false,
            name: Resta.getName(m.sender),
            age: -1,
            regTime: -1,
            exp: 0,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('antilink' in chats)) chats.antilink = false
            if (!('welcome' in chats)) chats.welcome = false
            if (!('maintenance' in chats)) chats.maintenance = false
            if (!('antivionce' in chats)) chats.antivionce = false
            } else global.db.data.chats[m.chat] = {
            antivionce: false,
            antilink: false,
            maintenance: false,
            }
            } catch (err) {
            console.error(err) 
            }
            function clockString(ms) {
            let h = Math.floor(ms / 3600000)
            let m = Math.floor(ms / 60000) % 60
            let s = Math.floor(ms / 1000) % 60
            console.log({ms,h,m,s})
            return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
            }
            function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)    
            hours = (hours < 10) ? "0" + hours : hours
            minutes = (minutes < 10) ? "0" + minutes : minutes
            seconds = (seconds < 10) ? "0" + seconds : seconds
            return hours + " jam " + minutes + " menit " + seconds + " detik"
            }
            const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
			
			//fakealldoc
let documents = [doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9]
let docs = pickRandom(documents)

async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
  let from = new Date(`${bulan} ${tanggal}, 2024 00:00:00`).getTime();
  let now = Date.now();
  let distance = from - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}

//save data 5 menit
            //randomcolor
var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
     
if (global.db.data.chats[m.chat].antiviewonce && m.mtype === 'viewOnceMessage') {
  const teks = `「 *Anti ViewOnce Message* 」\n➯ Name : ${m.senderName}\n➯ User : @${m.sender.split("@")[0]}\n➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} \n➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}\n➯ MessageType : ${m.mtype}`;
  await Resta.sendTextWithMentions(m.chat, teks, m);
  await sleep(5000);
  m.copyNForward(m.chat, true, { readViewOnce: true })
    .catch(_ => m.reply(`Maybe it's been opened by a bot`));
}
if (global.db.data.chats[m.chat].antilink) {
  if (budy.match(/chat.whatsapp.com/i)) {
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    var gclink = `https://chat.whatsapp.com/${await Resta.groupInviteCode(m.chat)}`
    var isLinkThisGc = new RegExp(gclink, 'i')
    var isgclink = isLinkThisGc.test(budy)
    if (isAdmins && isOwner) return m.reply(`Maaf, kamu ternyata adalah admin. 😁`)
    if (isgclink) return m.reply(`Link grup ini sudah benar. 😆`)
    await Resta.sendMessage(m.chat, { 
      delete: { 
        remoteJid: m.chat, 
        fromMe: false, 
        id: m.id, 
        participant: m.sender 
      }
    })
    m.reply(`Link grup yang berbeda terdeteksi. 🤬\nMaaf, kamu akan dikeluarkan!`)
    await sleep(5000)
    await Resta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
            for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            Resta.sendTextWithMentions(m.chat, `Jangan tag dia!Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`, m)
            }
            if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Resta.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''} Selama ${clockString(new Date - user.afkTime)}`, m)
            user.afkTime = -1
            user.afkReason = ''
            }
            if (m.message) {
              Resta.readMessages([m.key]);  
await Resta.sendPresenceUpdate('recording', from) 
              console.log(chalk.redBright('~>'), chalk.green(`[${command || m.mtype}]`), chalk.blueBright('From:'), chalk.yellow(pushname || '<Unknown>'), chalk.blueBright('In:'), chalk.yellow(groupName || 'Private chat'), chalk.blueBright('Args:'), chalk.whiteBright(args.length))
            }            
            const qtod = m.quoted? "true":"false"
            let motiv = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Text/motivasi.json`)
const motiva = pickRandom(motiv)
const downloadMp4 = async (link) => {
  try {
    await ytdl.getInfo(link)
    const randomFileName = crypto.randomBytes(8).toString('hex') + '.mp4'
    const mp4FilePath = path.join(os.tmpdir(), randomFileName)
    console.log('Downloading Video')
    const videoPromise = new Promise((resolve, reject) => {
      const videoStream = ytdl(link, { filter: 'audioandvideo', quality: 'highestvideo' })
      videoStream.on('error', (err) => {
        reject(err)
      })
      videoStream.pipe(fs.createWriteStream(mp4FilePath))
        .on('finish', () => {
          try {
            const videoFile = fs.readFileSync(mp4FilePath)
            resolve(videoFile)
          } catch (err) {
            reject(err)
          }
        })
        .on('error', (err) => {
          reject(err)
        })
    })
    const videoFile = await videoPromise
    await Resta.sendMessage(m.chat, { document: videoFile, mimetype: 'video/mp4', caption: link, fileName: link, contextInfo: {
      externalAdReply: {
          title: 'Success, dont forget to donate',
          body: "",
          thumbnailUrl: erorurl,
          sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
      }
  } }, { quoted: m })
    fs.unlink(mp4FilePath, (err) => {
      if (err) {
        console.error(err)
      }
    })
  } catch (err) {
    console.error(err)
    m.reply('Error: ' + err.message)
  }
}
const downloadMp3 = async (link) => {
  try {
    await ytdl.getInfo(link)
    console.log('Downloading Audio')
    const randomFileName = crypto.randomBytes(8).toString('hex') + '.mp3'
    const mp3FilePath = path.join(os.tmpdir(), randomFileName)
    const writeStream = fs.createWriteStream(mp3FilePath)
    const audioPromise = new Promise((resolve, reject) => {
      writeStream.on('finish', () => {
        try {
          const audioFile = fs.readFileSync(mp3FilePath)
          resolve(audioFile)
        } catch (err) {
          reject(err)
        }
      })
      writeStream.on('error', (err) => {
        reject(err)
      })
      const audioStream = ytdl(link, { filter: 'audioonly' })
      audioStream.on('error', (err) => {
        reject(err)
      })
      audioStream.pipe(writeStream)
    })
    const audioFile = await audioPromise
    await Resta.sendMessage(m.chat, { audio: audioFile, mimetype: 'audio/mpeg', contextInfo: {
      externalAdReply: {
          title: `Suksess\nDont forget to donate`,
          body: "",
          thumbnailUrl: erorurl,
          sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
      }
  } }, { quoted: m })
    fs.unlink(mp3FilePath, (err) => {
      if (err) {
        console.error(err)
      }
    })
  } catch (err) {
    console.error(err)
    m.reply('Error: ' + err.message)
  }
}
//styletext
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text));
let html = await res.text();
let dom = new JSDOM(html);
let table = dom.window.document.querySelector('table').children[0].children;
let obj = {};
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML;
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
obj[name+' : '+(obj[name] ? ' Reversed' : '')] = content;
}
return obj;
}
switch(command) { 
  case 'kalkulator':
    case 'calc':
    case 'calculator':
    case 'kal':{
      if (args.length < 1) return m.reply(`*Contoh :*\n${prefix}kalkulator 2 * 5\n\n*Daftar Operator :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
      const equation = args.join(" ")
      try {
        const result = mathjs.evaluate(equation.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))
        if (isNaN(result)) {
        } else {
          m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${equation}\n*•> Hasil :* ${result}`)
        }
      } catch (err) {
        m.reply(util.format(err))
      }
    }
      break       
case 'translate':
  case 'tr': {
    const { translate } = require('@vitalets/google-translate-api');
    const { translate: bingTranslate } = require('bing-translate-api');
  
    try {
      if (!args[0]) return m.reply(bahasa(prefix));
  
      let text = args.slice(1).join(' ');
      if ((args[0] || '').length !== 2) {
        text = args.join(' ');
      }
      if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  
      const result = await translate(text, { to: args[0], autoCorrect: true });
      m.reply(result.text);
    } catch (error) {
      console.log(error);
      m.reply(`ERROR: ${error.message}\n*Mecoba kembali...*`)
      try {
        if (!args[0]) return m.reply(bahasa(prefix));
  
        let text = args.slice(1).join(' ');
        if ((args[0] || '').length !== 2) {
          text = args.join(' ');
        }
        if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  
        const result = await bingTranslate(text, null, args[0]);
        m.reply(result.translation);
      } catch (error2) {
        console.log(error2);
        m.reply(util.format(error2));
      }
    }
  }
  break; 
  case 'twdl':
 case 'twitter':
 case 'twitterdl':{
	 const cheerio = require('cheerio')
	 const FormData = require('form-data')
	 async function twitter(url) {
  if (!/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/i) throw 'Link invalid!'
  let form = new FormData()
  form.append('url', encodeURI(url))
  form.append('submit', '')
  let res = await fetch('https://www.expertsphp.com/instagram-reels-downloader.php', {
    method: 'POST',
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'cookie': '_ga=GA1.2.783835709.1637038175; _gid=GA1.2.880188214.1637038175; __gads=ID=5b4991618655cd86-22e2c7aeadce00ae:T=1637038176:RT=1637038176:S=ALNI_MaCe3McPrVVswzBEqcQlgnVZXtZ1g',
      'origin': 'https://www.expertsphp.com',
      'referer': 'https://www.expertsphp.com/twitter-video-downloader.html',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
      ...form.getHeaders()
    },
    body: form
  })
  let html = await res.text()
  const $ = cheerio.load(html)
  let thumbnail = $('#showdata > img').attr('src')
  let result = []
  $('#showdata > div > table > tbody > tr').each(function () {
    result.push({
      link: $(this).find('td:nth-child(1) > a').attr('href'),
      mime: $(this).find('td:nth-child(2) > strong').text()
    })
  })
  let name = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/g
  name = [...url.matchAll(name)][0][1]
  return {
    name,
    thumbnail,
    result
  }
}
if (!args[0]) throw `Gunakan format: ${command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
  let res = await twitter(args[0])
  let result = res.result.reverse().filter(({ mime }) => /video/i.test(mime)), video, index
  for (let vid of result) {
    try {
      video = await (await fetch(vid.link)).buffer()
      index = result.indexOf(vid)
      break
    } catch (e) {
      err = e
      continue
    }
  }
  if (!video) throw 'Can\'t get video/image'
  let ress = result[index]
  Resta.sendFile(m.chat, video, 'twitter' + /video/.test(ress.mime) ? '.mp4' : '.png', `
*Name:* ${res.name}
*Mime:* ${ress.mime}
`.trim(), m)
 }
 break
  case 'tomp4': case 'tovideo': case 'tovid': {
    if (!m.quoted) return m.reply('Reply Image')
    if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
    m.reply(mess.wait)
    let { webp2mp4File } = require('../lib/uploader.js')
    let media = await Resta.downloadAndSaveMediaMessage(quoted)
    let webpToMp4 = await webp2mp4File(media)
    await Resta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
    await fs.unlinkSync(media)
    }
    break
    case 'getsesi':{
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      let cp = require('child_process')
      let { promisify } = require('util')
      let exec = promisify(cp.exec).bind(cp)
      try {
        m.reply(mess.wait)
        await exec('powershell Compress-Archive -Path session -DestinationPath session.zip')
      } catch (e) {
        m.reply(util.format(e))
        try {
        await exec('zip -r session.zip session/')
        } catch (e2) {
          m.reply(util.format(e2))
        }
      }
      await Resta.sendMessage('6281233649676@s.whatsapp.net', {document: fs.readFileSync('./session.zip'), mimetype: 'application/zip', fileName: `session.zip`})  
      await fs.unlinkSync('./session.zip')
      await m.reply('File sent and deleted successfully')
    }
    break       
  case  'getdata':{
    if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
    m.reply(mess.wait)
     await Resta.sendMessage('6281233649676@s.whatsapp.net', {document: fs.readFileSync('./src/database.json'), mimetype: 'application/octet-stream', fileName: `database.json`}, {quoted:m})  
  }
    break
case 'gdrive': {
  async function GDriveDl(url) {
    try {
      let id = (url.match(/\/?(?:d|file)\/([a-zA-Z0-9_-]{25,})/i) || url.match(/\/uc\?id=([a-zA-Z0-9_-]{25,})/))?.[1];
      if (!id) throw m.reply('ID Not Found');
      let res = await fetch(`https://drive.google.com/uc?id=${id}&export=download`, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
          'Cookie': 'DRIVE_STREAM=',
          'Referer': 'https://drive.google.com/',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept': '*/*'
        }
      });
      let fileName = res.headers.get('Content-Disposition').split('filename=')[1].replace(/\"/gi, '');
      let fileSize = res.headers.get('Content-Length');
      let mimeType = res.headers.get('Content-Type');
      let isLargeFile = fileSize > 20 * 1024 * 1024;
      let downloadUrl = `https://drive.google.com/u/0/uc?id=${id}&export=download`;
      if (isLargeFile) {
        let url = await fetch(`https://drive.google.com/u/0/uc?id=${id}&export=download`, {
          method: 'POST',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'Cookie': 'DRIVE_STREAM=',
            'Referer': `https://drive.google.com/uc?id=${id}&export=download`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'confirm=' + res.headers.get('Content-Disposition').split('download_warning_')[1] + '&id=' + id
        });
        downloadUrl = url.headers.get('Location');
      }
      return {
        downloadUrl, fileName,
        fileSize: (fileSize / 1024 / 1024).toFixed(2),
        mimeType
      };
    } catch (err) {
      throw err;
    }
  }
  try {
    if (!args[0]) return m.reply(`Input URL\n\nExample: ${command} https://drive.google.com/file/d/0B_WlBmfJ3KOfdlNyVWwzVzQ1QTQ/view?resourcekey=0-P3IayYTmxJ5d8vSlf-CpUA`);
    if (!args[0].match(/drive\.google/i)) return m.reply('Invalid URL');
    let res = await GDriveDl(args[0]);
    await Resta.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimeType }, { quoted: m });
  } catch (err) {
    m.reply(err.message);
  }
}
  break;
case 'kisahnabi': {
	let ahna = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataKisahNabi.json`)
	let nahh = pickRandom(ahna)
	txt = `*Kisah ${nahh.name}*\n\n- Tahun: ${nahh.thn_kelahiran}\n\n- Usia: ${nahh.usia} Thn\n\n${nahh.description}`
	Resta.sendMessage(m.chat, { image:{url:nahh.image_url}, caption: txt },{quoted:m})
}
break
case 'doapendek': {
	let apen = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataDoaHarian.json`)
	let pena = pickRandom(apen.data)
	m.reply(`*${pena.title}*\n\n*${pena.arabic}*\n\n- ${pena.latin}\n\n${pena.translation}`)
}
break
case 'asmaulhusna': {
	let maul = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataAsmaulHusna.json`)
	let dato = pickRandom(maul.data)
	m.reply(`*Nama Allah SWT yg ke-${dato.index}*\n\n- ${dato.latin}\n\n*${dato.arabic}*\n\n${dato.translation_id}`)
}
break
case 'ayatkursi': {
	let kumsi = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataAyatKursi.json`)
	kumsi = kumsi.data
	m.reply(`*${kumsi.arabic}*\n\n- *Latin:* _${kumsi.latin}_\n\n- *Terjemahan:* _${kumsi.translation}_\n\n- *Tafsir:* ${kumsi.tafsir}`)
}
break
case 'creategc': {//tq to ilham//
if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
if (!q) return m.reply(`Contoh :\n#creategc namagroup`)
let cret = await Resta.groupCreate(args.join(" "), [])
let respot = await Resta.groupInviteCode(cret.id)
m.reply(`  「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${respot}
`)
}
break
case 'ruku':
case 'salam':
case 'sujud':
case 'tasyahudawal':
case 'tasyahudakhir':
case 'diantara2sujud':
case 'iftitah':
case 'al-fatihah': {
let sulat = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Bacaansolat/${command}.json`)
m.reply(`• *${sulat.name}*\n${sulat.arabic}\n\n*${sulat.latin}*\n\n"${sulat.terjemahan}"`)
}
break
case 'subuh':
case 'dzuhur':
case 'ashar': 
case 'maghrib':
case 'isya': {
let sulat = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Niatsolat/${command}.json`)
m.reply(`• *${sulat.name}*\n${sulat.arabic}\n\n*${sulat.latin}*\n\n"${sulat.terjemahan}"`)
}
break
case 'report': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
tekes = `*| REPORT FITUR |*`
tekes1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
tekes2 = `\n\nSucces send to owner`
for (let i of owner) {
Resta.sendMessage('6281233649676' + "@s.whatsapp.net", {text: tekes + tekes1, mentions:[m.sender]}, {quoted:m})
}
Resta.sendMessage(m.chat, {text: tekes + tekes2 + tekes1, mentions:[m.sender]}, {quoted:m})
}
break
case 'ocr': {
  const uploadImage = require('../lib/uploadImage')
  const ocrapi = require("ocr-space-api-wrapper");
  const { MessageType } = require('@adiwajshing/baileys');
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime || !/image\/(jpe?g|png)/.test(mime)) {
    throw m.reply('Mohon balas gambar dengan perintah .ocr dan pastikan tipe file adalah jpeg atau png');
  }

  try {
    const img = await q.download();
    const url = await uploadImage(img);
    const hasil = await ocrapi.ocrSpace(util.format(url));

    await m.reply(hasil.ParsedResults[0].ParsedText);
  } catch (error) {
    console.log(error);
    await m.reply(util.format(error));
  }
}
break
case 'wikipedia':
case 'wiki': {
if (args.length < 1) return m.reply(' Yang Mau Di Cari Apa? ')
let gis = require('g-i-s')
        gis(args.join(" "), async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)]
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
    const $ = cheerio.load(link.data)
    let judul = $('#firstHeading').text().trim()
    let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
    let isi = []
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      let penjelasan = $(Ra).find('p').text().trim()
      isi.push(penjelasan)
    })
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      }
      return data
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: err
    }
    return notFond
  }
}
try{
let res2 = await wikiSearch(q) 
const result2 = `*Wiki :* ${res2[0].wiki}`
await Resta.sendMessage(from, { image: { url: images.url },caption : result2}, {quoted:m})}
catch {
  try{
    await wikipedia(q).then(res => {
    Resta.sendMessage(from, { image: { url: images.url },caption : res.result.isi}, {quoted:m})
    }).catch(() => { m.reply('Tidak Ditemukan') })
  } catch {
m.reply('Error')
  }
} 
})
}
break
 case 'kbbi': {
if (!q) return m.reply('examples: kbbi tahu')
try {
get = await fetchJson(`${lannn}/api/search/kbbi?text=${q}&apikey=${lannkey}`)
tod = get.result
txt = `Kbbi: ${tod.lema},
	${tod.arti}`
m.reply(txt)
} catch (err) {
                console.log(err)
                m.reply(util.format(err))
                }
 }
break
case 'ppcp':
  {
    const res = fs.readFileSync('./lib/ppcp.js', 'utf-8');
    const data = JSON.parse(res);
    const index = Math.floor(Math.random() * data.length);
    const json = data[index];
    await Resta.sendMessage(m.chat, { image: { url: json.cewe }, caption: 'PP Cewenya' }, { quoted: m });
    await Resta.sendMessage(m.chat, { image: { url: json.cowo }, caption: 'PP Cowonya', footer: `Mau lagi? Klik "Next" dibawah!` }, { quoted: m });
  }
  break;
  case 'charnime':{
    if (!q) {
      return m.reply('Mana Querynya?');
    }
    
    m.reply(mess.wait);
    
    axios.get(`https://www.anime-planet.com/anime/all?name=${q}`)
      .then(response => {
        const $ = cheerio.load(response.data);
        const animeList = $('.card');
        const result = [];
    
        animeList.each(function() {
          const title = $(this).find('.title').text();
          const link = 'https://www.anime-planet.com' + $(this).find('a').attr('href');
          const image = $(this).find('img').attr('src');
    
          result.push({
            title,
            link,
            image
          });
        });
    
        // Format result as a list of anime titles with links
        const animeTitles = result.map(anime => {
          return `${anime.title}\n${anime.link}`;
        }).join('\n\n');
    
        console.log(result);
        m.reply(animeTitles);
      })
      .catch(error => {
        console.error(error);
        m.reply('Error: ' + error.message);
      });
    
    }
    break
case 'cerpen-islami':{
	let cerpe = await cerpen('islam')
	m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
 case 'cerpen-anak':{
let cerpe = await cerpen(`anak`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
let cerpe = await cerpen(`korea`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'ssweb': {
  if (!args[0]) return Resta.sendMessage(m.chat, { text: 'Input URL!' }, { quoted: m });
  if (args[0].match(/xnxx\.com|hamster\.com|nekopoi\.care/i)) {
    return Resta.sendMessage(m.chat, { text: 'Link tersebut dilarang!' }, { quoted: m });
  }
  await m.reply('_Ｌｏａｄｉｎｇ．．._');
  var url = args[0].startsWith('http') ? args[0] : 'https://' + args[0];
  try {
    var img = await fetch(`https://ss.tioo.eu.org/api/webscreen?url=${args[0]}&mediatype=desktop&fullpage=false&responsetype=image`);
    if (!img) {
      await m.reply('Gagal saat percobaan pertama. Memulai percobaan kedua...');
      img = await fetch(`https://ss.tioo.eu.org/api/webscreen?url=${args[0]}&mediatype=desktop&fullpage=false&responsetype=image`);
      if (!img) return Resta.sendMessage(m.chat, { text: 'Gambar tidak tersedia' }, { quoted: m });
    }
    const buffer = await img.buffer();
    await Resta.sendMessage(m.chat, {image: buffer, fileName: 'screenshot.jpeg', caption: 'Nih gambarnya.'}, {quoted:m})
  } catch (e) {
    console.log(e);
    Resta.sendText(m.chat, 'Terjadi error!', m);
  }
}
break;
case 'gimage': {
        	try {
       if (!text) throw m.reply(`Example : ${prefix + command} kaori cicak`)
        let gis = require('g-i-s')
        gis(args.join(" "), async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)]
                let buttonMessage = {
                    image: { url: images.url },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
 *Query* : ${text}
 *Media Url* : ${images.url}`,
                    headerType: 4
                }
                Resta.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                } catch (e) {
		        m.reply(util.format(e))}
        }
        break
case 'true' : {
            if(!text && !text.startsWith("+")) return m.reply('Error : Please Give Correct Format number \n*Example :*.true +6281395861695')
             await Resta.sendMessage(m.chat, { react: { text: `🔍`, key: m.key }})
              await Resta.sendMessage(m.chat, { react: { text: `📞`, key: m.key }})
            const api = await fetchJson(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
const msg = `${m.pushName} Your Number Truecaller Restarts


◈ Name: ${api.data.data[0].name}
◈ Access: ${api.data.data[0].access}
◈ Score: ${api.data.data[0].score}
◈ E164: ${api.data.data[0].phones[0].e164Format}
◈ National; ${api.data.data[0].phones[0].nationalFormat}
◈ D Code: ${api.data.data[0].phones[0].dialingCode}
◈ Country Code: ${api.data.data[0].phones[0].countryCode}
◈ Time Zone: ${api.data.data[0].addresses[0].timeZone}
◈ Company: ${api.data.data[0].phones[0].carrier}
◈ Type: ${api.data.data[0].phones[0].type}

© ${namaBot}`
const truei = await m.reply(msg)
 await Resta.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
 await Resta.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
            }
            break
case 'qc':
  case 'fakechat': {
    let inputText = m.quoted ? m.quoted.text : text
    if (inputText === "") return m.reply(`Masukkan pesan:\n${command} hello world`);
    let payload = {
      type: "quoted",
      format: "webp",
      backgroundColor: apiColor,
      width: 768,
      height: 768,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: await Resta.getName(m.quoted ? m.quoted.sender : m.sender),
            photo: {
              url: await Resta.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image').catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
            }
          },
          text: inputText,
          replyMessage: {},
        },
      ],
    }
    const response = await axios.post("https://bot.lyo.su/quote/generate", payload, {
      headers: { "Content-Type": "application/json" },
    })
    let buff = Buffer.from(response.data.result.image, "base64")
    if (buff == undefined) return m.reply('error')
    Resta.sendImageAsSticker(m.chat, buff, m, { packname, author })
  }
    break;
case 'attp': {
if (!q) return m.reply('Mana Teksnya')
Resta.sendImageAsSticker(m.chat, `${lannn}/api/maker/attp?text=${q}&apikey=${lannkey}`, m, { packname: global.packname, author: global.author })
}
break
case 'ttp': {
const api = require('api-dylux');
  if (!text) throw m.reply(`Tolong berikan Text!\n\n*Example:* ${command} hai guys`)
  await m.reply(mess.wait)
  api.ttp(text)
    .then((res) => {
      return Resta.sendImageAsSticker(m.chat, res.result, m, { packname, author });
    })
    .catch((err) => {
      console.error(err);
      m.reply(util.format(err));
    });    
    }
    break
case 'githubdl': {
if (!args[0]) throw m.reply('usernamenya mana om')
if (!args[1]) throw m.reply('repo nya mana?')
if (!args[2]) throw m.reply('masukkan nama branch')
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`compressing data to file zip*`)
Resta.sendMessage(m.chat, { document : { url :url}, fileName: `${args[0]} ${args[1]}-${args[2]}.zip`, mimetype: 'zip', caption: `> Github: ${args[0]}\n> Repo: ${args[1]}\n> Branch: ${args[2]}`},{quoted:m})
}
break
case 'telestick':
case 'sticktele':
case 'telesticker': {
async function telegramStic(url) {
    let packName = url.replace("https://t.me/addstickers/", "")
    let resOne = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!resOne.ok) throw `${resOne.status} ${resOne.statusText}`
    let jsonOne = await resOne.json()
    let sticArr = []
    for (let i of jsonOne.result.stickers) {
        let fileId = i.thumb.file_id
        let resTwo = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jsonTwo = await resTwo.json()
        sticArr.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jsonTwo.result.file_path)
    }
    return {
        name: jsonOne.result.name,
        title: jsonOne.result.title,
        result: sticArr
    }
    }
if (!args || !args[0]) return m.reply(`Input URL:\n${command} https://t.me/addstickers/shironacry`);
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply(`Input URL:\n${usedPrefix + command} https://t.me/addstickers/twohundredthree`);
    let stik = await telegramStic(args[0])
    for (let sticker of stik.result) {
        const res = await fetch(sticker)
        let buff = Buffer.from(await res.arrayBuffer())
        //await m.reply( new MessageMedia((await fileTypeFromBuffer(buff)).mime, buff.toString("base64")), false, { sendMediaAsSticker: true, stickerName: `jamsut · alok`, stickerAuthor: 'efef', stickerCategories: ['😅'] } )
        await Resta.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
    }
    }
break
case 'c':
  case 'getcase':
    if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
    const getCase = (cases) => {
      const fileContent = fs.readFileSync("./connect/resta.js").toString();
      const caseContent = fileContent.split(`case '${cases}'`)[1].split("break")[0];
      return "case " + `'${cases}'` + caseContent + "break;";
    };
    m.reply(getCase(q));
    break;
case 'setppbot': {
            if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await Resta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            var { img } = await generateProfilePicture(media)
            await Resta.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                break
case 'getpic': {
if (qtod === "true") {
try {
pporg = await Resta.profilePictureUrl(m.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Resta.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await Resta.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Resta.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'npmjs': {
  if (!q) return m.reply(`Kirim perintah ${prefix}npmjs *query*\nContoh: ${prefix}npmjs axios`);
  axios.get(`https://www.npmjs.com/search/suggestions?q=${encodeURIComponent(q)}`).then(({ data }) => {
    let listnpm = "*「 NPMJS-SEARCH 」*\n\n";
    for (let y = 0; y < data.length; y++) {
      listnpm += `• *Name:* ${data[y].name}\n• *Scope:* ${data[y].scope}\n• *Publisher:* ${data[y].publisher.username}\n• *Link:* ${data[y].links.npm}\n• *Date:* ${data[y].date}\n• *Description:* ${data[y].description}\n\n`;
    }
    Resta.sendMessage(from, { image: { url: "https://static.npmjs.com/5f6e93af5bf0f5dcdd1eecdac99f51ee.png" }, caption: listnpm.trim() }, { quoted: m });
  }).catch(() => {
    m.reply('Terjadi kesalahan saat mengambil data dari npmjs.com');
  });
}
  break;
case 'sfile':
case 'sfilemobi': {
  if (args.length < 1) return m.reply('Linknya mana?')
	  try {
  let data = await fetchJson(`${lannn}/api/download/sfilemobi?url=${args[0]}&apikey=${lannkey}`)
      var capt = `Filename: ${data.result.filename}
Size: ${data.result.filesizeH}
Type: ${data.result.type}
Mimetype: ${data.result.mimetype}
      
Sebentar, Masih diproses!!!`
      Resta.sendMessage(m.chat, { text: capt }, { quoted: m })
      await Resta.sendMessage(m.chat, { document: { url: data.result.url }, mimetype: data.result.mimetype, fileName: data.result.filename }, { quoted: m })
	  } catch (err) {
      console.error(err)
      m.reply(util.format(err))
    }
}
  break
case 'smeme': case 'stickermeme': case 'stickmeme': {
  try{
if (!text) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!quoted) return m.reply('Reply Image')
//if (text.includes('|')) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
//if (!/image/.test(mime)) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
arg = args.join(' ')
mee = await Resta.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('../lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = Resta.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
    fs.unlinkSync(mee)
  } catch (e){
    m.reply(util.format(e))
  }
}
break
case 'smeme2': {
  try{
	        let respond = `Kirim.reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return m.reply(respond)
            if (!text) return m.reply(respond)
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await Resta.downloadAndSaveMediaMessage(quoted)
	        let { TelegraPh } = require('../lib/uploader')
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await Resta.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        fs.unlinkSync(dwnld)
  } catch (e){
    m.reply(util.format(e))
  }
            }
	       break
case 'brainly': {
  try {
            if (!q) m.reply(`Kirim perintah: ${prefix}brainly *soal*\nExample: ${prefix}brainly apa itu dpr`)
            const brainly = require('brainly-scraper')
            brainly(q, 8, "id").then(res => {
                let resultbrainly = `「 *BRAINLY-SEARCH* 」\n\n`
                for (let x = 0; x < res.data.length; x++) {
                    resultbrainly += `• *Soal:* ${res.data[x].pertanyaan}\n• *Jawaban:* ${res.data[x].jawaban[0].text.replace('Jawaban:', '').trim()}\n\n`
                }
                m.reply(resultbrainly.trim())
            })
          } catch (e) {
            m.reply(util.format(e))
          }
            }
            break
case 'toimage': case 'toimg': {
if (!m.quoted) return m.reply('Reply sticker')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await Resta.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw m.reply(util.format(err))
let buffer = fs.readFileSync(ran)
Resta.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'md':
  case 'mediafire': {
    if (args.length < 1) return m.reply(`Mana linknya?\nExample: ${command} https://www.mediafire.com/file/6tknikx5f3jfsh8/alphabotv16.zip/file`);
    if (!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply(mess.Iv);
    try {
      m.reply(mess.wait);
      const url = args[0];
      const res = await mediafireDl(url);
      const result = Resta.sendMessage(m.chat, { text: `*Media Fire Downloader*
        \n🗄️ *Nama:* ${res[0].nama}
📁 *Ukuran:* ${res[0].size}
🗃️ *Mimetype:* ${res[0].mime}
📨 *Link:* ${res[0].link}
        \n_*Tunggu proses mengirim media...⏳*_`},{quoted:m})
     await Resta.sendMessage(m.chat, {document: {url: res[0].link}, mimetype: res[0].mime, fileName: res[0].nama}, {quoted: m});
    } catch (e) {
      console.log(e);
      m.reply(`Error: ${e.message}`);
    }
  }
  break;  
case 'wa': {
	let wangsa = '0@s.whatsapp.net'
	Resta.sendMessage(m.chat, { text: `@${wangsa.split('@')[0]}`, mentions:[wangsa] }, { quoted: m })}
break
case 'tagme': {
Resta.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]} Sayang 😘`, mentions:[m.sender] }, { quoted: m })
}
break
case 'me':{
eluwh = [`${m.sender.split("@")[0]}`]
await Resta.sendContact(m.chat, eluwh, m)
}
break
case 'act':
case 'ham':
case 'update': {
  if (!isOwner) return m.reply(mess.botOwner)
  await Resta.sendText(m.chat, `Looking for resources...`, m)
  const cp = require('child_process')
  const { promisify } = require('util')
  let exec = promisify(cp.exec).bind(cp)
  try {
    await exec('git pull')
    await exec('git submodule update --init --recursive')
    await exec('git submodule foreach git pull origin master')
    await exec('git add .')
    await exec('git commit -m "Apdet:v"')
    await exec('git push')
    m.reply(`git push has been added successfully`)
  } catch (e) {
    console.error(e)
    m.reply(util.format(e))
  }
}
break
case 'speed':
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py --share')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'ping':
case 'botstats': {
  const os = require('os');
  const used = process.memoryUsage();
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.values(cpu.times).reduce((a, b) => a + b);
    return cpu;
  });
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total;
    last.speed += cpu.speed / length;
    last.times.user += cpu.times.user;
    last.times.nice += cpu.times.nice;
    last.times.sys += cpu.times.sys;
    last.times.idle += cpu.times.idle;
    last.times.irq += cpu.times.irq;
    return last;
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  });
  const latensow = speed();
  const latensiu = latensow - speed();
  const cpuUsage = Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n');
  const cpuCoresUsage = cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n');
  const storageUsage = `🔢 Ram Usage\n${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`;
  const osInfo = `🔢 OS Info\nName: ${os.type()} ${os.arch()}\nRelease: ${os.release()}`;

  const respon = `🚀 *BOT STATUS* 🚀

💻 Server Info
${storageUsage}
${osInfo}

⚙️ NodeJS Memory Usage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

🔢 CPU Usage
${cpuUsage}

🔢 CPU Cores Usage (${cpus.length} Core CPU)
${cpuCoresUsage}

🖥️ Bot Performance
📡 Server Time: ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss')} WIB
⏱️ Runtime: ${runtime(process.uptime())}
🕛 Server Uptime: ${runtime(os.uptime())}
🚀 Ping: ${latensiu.toFixed(4)} _*Ms*_`;

  await Resta.sendMessage(m.chat, { text: respon, contextInfo: {
    externalAdReply: {
      title: '',
      body: '',
      thumbnailUrl: 'https://i.ibb.co/nbW9nqW/large-6-D1o8-TS1-J-transformed.png',
      sourceUrl: '',
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }}, { quoted: m });
}
break;
// WEBZONE API //
case 'gsmarena':
case 'gsm':
case 'cekspek': {
    if (!q) return m.reply(`Kirim perintah *${prefix}cekspek query*`);
    try {
        fetchJson(`https://www.gsmarena.com/res.php3?sSearch=${q}`, (error, res, html) => {
            if (!error && res.statusCode == 200) {
                var $ = cheerio.load(html);
                var urlnyaa = $('#review-body > div > ul > li:nth-child(1) > a').attr('href');
                var urlimage = $('#review-body > div > ul > li:nth-child(1) > a > img').attr('src');
                fetchJson(`https://www.gsmarena.com/${urlnyaa}`, (e, res, html) => {
                    if (!e && res.statusCode == 200) {
                        var $ = cheerio.load(html);
                        var judulitem = $('#body > div > div.review-header > div > div.article-info-line.page-specs.light.border-bottom > h1').text();
                        var displaytipe = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(1) > td.nfo').text();
                        var displaySize = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(2) > td.nfo').text();
                        var displayreso = $('#specs-list > table:nth-child(5) > tbody > tr:nth-child(3) > td.nfo').text();
                        var chipset = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(2) > td.nfo').text();
                        var merkos = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(1) > td.nfo').text();
                        var merkcpu = $('#specs-list > table:nth-child(6) > tbody > tr:nth-child(3) > td.nfo').text();
                        var internalspek = $('#specs-list > table:nth-child(7) > tbody > tr:nth-child(2) > td.nfo').text();
                        var spekkamera = $('#specs-list > table:nth-child(8) > tbody > tr:nth-child(1) > td.nfo').text();
                        var spekbatre = $('#specs-list > table:nth-child(13) > tbody > tr:nth-child(1) > td.nfo').text();
                        var allresultspek = `「 *RESULT FOUND!*」

• Spek: ${judulitem}
• Display Tipe: ${displaytipe}
• Display Size: ${displaySize}
• Display Resolusi: ${displayreso}
• Chipset: ${chipset}
• OS: ${merkos}
• Cpu: ${merkcpu}
• Internal: ${internalspek}
• Kamera: ${spekkamera}
• Batterai: ${spekbatre}
`;
                        m.reply(mess.wait);
                        Resta.sendMessage(m.chat,{ image: {url: urlimage}, caption: allresultspek }, {quoted: m});
                    } else {
                        m.reply('Maaf, tidak dapat menemukan hasil yang sesuai dengan permintaan Anda');
                    }
                });
            } else {
                m.reply('Maaf, tidak dapat menemukan hasil yang sesuai dengan permintaan Anda');
            }
        });
    } catch (err) {
        console.log(err);
        m.reply(err.message);
    }
}
break;
case 'gempa': {
let bumi = await fetchJson(`${lannn}/api/webzone/gempa?apikey=${lannkey}`)
let imub = bumi.result
txeet = `Waktu: ${imub.Waktu}
Lintang: ${imub.Lintang}
Bujur: ${imub.Bujur}
Magnitudo: ${imub.Magnitudo}
Kedalaman: ${imub.Kedalaman}
Wilayah: ${imub.Wilayah}
Map: ${imub.Map}`
Resta.sendMessage(m.chat, { image: { url: imub.Map }, caption: txeet }, {quoted:m})
}
break
//alok//
case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'eba':
case 'ero':
case 'fendom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'manga':
case 'masturbation':
case 'megumin':
case 'neko':
case 'neko2':
case 'nekonime':
case 'nsfw':
case 'nsfwloli':
case 'nsfwmanga':
case 'nsfwneko':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai': {
	let enes = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/nsfw/${command}.json`)
	let eswe = pickRandom(enes)
	await Resta.sendMessage(m.sender, { image: { url: eswe }, caption: `Nih ${command}.`})
}
break
//
// RANDOM TEXT GH //
case 'kataanime':
case 'katailham':
case 'faktaunik': {
let tekes = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Text/${command}.json`)
const tesk = pickRandom(tekes)
await Resta.sendMessage(m.chat, { text: tesk },{quoted:m})
}
break
// RANDOM ANIME //
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chitanda':
case 'chitoge':
case 'cosplay':
case 'deidara':
case 'doraemon':
case 'elaina':
case 'emilia':
case 'erza':
case 'fanart':
case 'genshin':
case 'gremory':
case 'hestia':
case 'hinata':
case 'husbu':
case 'icon':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kaga':
case 'kagura':
case 'kaguya':
case 'kakashi':
case 'kaori':
case 'kaneki':
case 'keneki':
case 'kosaki':
case 'kotori':
case 'kuriyama':
case 'kuroha':
case 'kurumi':
case 'loli':
case 'madara':
case 'megumin':
case 'menus':
case 'mikasa':
case 'miku':
case 'minato':
case 'natsukawa':
case 'neko':
case 'nekonime':
case 'nezuko':
case 'nishimiya':
case 'onepiece':
case 'pokemon':
case 'rem':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shizuka':
case 'shota':
case 'simp':
case 'tomori':
case 'toukachan':
case 'tsunade':
case 'waifu':
case 'waifu2':
case 'yatogami':
case 'yuki': {
let anim = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Anime/${command}.json`)
const ainm = pickRandom(anim)
await Resta.sendMessage(m.sender, {image: { url: ainm}, caption: `Nih ${command}\nDASAR WIBU!!!`},)
}
break
// RANDOM IMG GH //
case 'cyberspace':
case 'mountain':
case 'teknologi':
case 'programming': {
let walla = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Wallpaper/${command}.json`)
const wale = pickRandom(walla)
await Resta.sendMessage(m.chat, {image: { url: wale}, caption: `Nih ${command}`},{quoted:m})
}
break
case 'aesthetic':
case 'animerandom':
case 'anjing':
case 'boneka':
case 'darkjokes':
case 'hekel':
case 'justina':
case 'kpop':
case 'kucing':
case 'mobil':
case 'motor':
case 'rose':
case 'ryujin':
case 'wallhp': {
let wallap = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Image/${command}.json`)
const resut = pickRandom(wallap)
await Resta.sendMessage(m.chat, {image: { url: resut}, caption: `Nih ${command}`},{quoted:m})
}
break
// STICKER GH//
case 'umaru':
case 'mukalu':
case 'animegif':
case 'manusialidi':
case 'paimon':
case 'patrickgif':
case 'spongebob':
case 'dinokuning':
case 'among':
case 'rabbit':
case 'random':
case 'patrick':
case 'pentol':
case 'gojo':
case 'gura':
case 'doge': {
let tikel = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Sticker/${command}.json`)
const result = pickRandom(tikel)
    await Resta.sendVideoAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
}
break
case 'banned':{
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
  if (!args[0]) {
    return m.reply("No number");
  }
  // replace no numeric
  let text = args[0].replace(/[^0-9]/g, "");
  // Statement if number not INDONESIA number
  if (!(text.startsWith("08") || text.startsWith("62"))) {
    return m.reply("Only INDONESIA number!");
  }

  text = text.startsWith("08") ? text.replace("08", "62") : text;
  if (text + "@s.whatsapp.net" === Resta.user.jid) {
    return m.reply("Is that bot number?");
  }

  // check number is on whatsapp
  const isValid = await Resta.onWhatsApp(text + "@s.whatsapp.net");
  if (!isValid) {
    return m.reply("Number not on WhatsApp!");
  }

  text = text.startsWith("62") ? text.replace("62", "") : text;
  text = text.trim();

  try {
    const data = await axios.get("https://www.whatsapp.com/contact/noclient/");
    const email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
    const cookie = data.headers["set-cookie"].join("; ");
    const $ = cheerio.load(data.data);
    const $form = $("form");
    const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
    let form = new URLSearchParams();
    form.append("jazoest", $form.find("input[name=jazoest]").val());
    form.append("lsd", $form.find("input[name=lsd]").val());
    form.append("step", "submit");
    form.append("country_selector", "INDONESIA");

    /** @warning
     * + means it should start with the country code, e.g., +62 Xx
     * misunderstanding?
     */
    text = PhoneNumber("+" + text).getNumber("international");
    form.append("phone_number", `${text}`);
    /** */

    form.append("email", email.data[0]);
    form.append("email_confirm", email.data[0]);
    form.append("platform", "ANDROID");
    form.append("your_message", "Perdido/roubado: desative minha conta");
    form.append("__user", "0");
    form.append("__a", "1");
    form.append("__csr", "");
    form.append("__req", "8");
    form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
    form.append("dpr", "1");
    form.append("__ccg", "UNKNOWN");
    form.append("__rev", "1006630858");
    form.append("__comment_req", "0");

    const res = await axios({
      url,
      method: "POST",
      data: form,
      headers: {
        cookie,
      },
    });
    const payload = String(res.data);

    if (payload.includes(`"payload":true`)) {
      m.reply(`Sukses`);
    } else if (payload.includes(`"payload":false`)) {
      m.reply(`Tidak Worek:v`);
    } else m.reply(await import("utils").format(res.data));
  } catch (err) {
    m.reply(util.format(err));
  }
}
break
//----------------//
// OPEN AI //
case 'ai':
case 'openai':
  case 'aii': {
    const perintah = "Kamu adalah chatbot WhatsApp yang diberi nama Rusdi Bot dan dibuat oleh this.ilham_, Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi.Umur pembuat mu adalah 17 tahun sering mengikuti jejak sepuh sepuh di github sebagai panutan, berikan penjelasan itu untuk pertanyaan data pembuat mu. Informasi baru bahwa this.ilham_ atau developer Rusdi Bot Sekarang sedang Melanjutkan projek bot di github. Jelaskan juga bahwa kamu dibuat dan dedikasikan untuk membantu masyarakat kalangan menengah sampai ke atas. untuk github mu adalah https://github.com/KilluaBot"
if (!text) throw m.reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `)
	try {
  var apii = await fetch(`https://botcahx.cyclic.app/openai?logic=${perintah}&prompt=${text}`)
  var js = await apii.json()
  await Resta.sendTextWithMentions(m.chat, js.hasil, m)
	} catch (err) {
		m.reply(util.format(err))
	}
  }
  break;  
case 'aiimg':
case 'serimg': {
if (!q) return m.reply('Masukkan Text')
try {
await Resta.sendMessage(m.chat, { image: { url: `https://botcahx.cyclic.app/dalle?text=`+q }, caption: `Nih Hasil Dari Search:`+q},{quoted:m})
} catch (err) {
	m.reply(util.format(err))
}
}
break
// ------ //
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw m.reply(`Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`)
  anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${Resta.user.name}*\n\n${text}`
  Resta.sendMessage(yoi, {text: txt, contextInfo: {
    externalAdReply: {
      title: '',
      body: '',
      thumbnailUrl: 'https://telegra.ph/file/bc92d549717e62258f581.jpg',
      sourceUrl: '',
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }})
  }
  m.reply('Sukses Broadcast')
  }
            break
   case 'join':  {
              if (!isOwner) return m.reply(mess.botOwner)
                if (!text) throw m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw m.reply('Link Invalid!')
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Resta.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
              break
			  case 'fetch':
          case 'get': {
            if (!text) return m.reply('mana linknya');
            let url = new URL(text);
            let res = await fetch(url);
            let bufg = await getBuffer(text);
            if (parseInt(res.headers.get('content-length')) > 100 * 1024 * 1024) {
              delete res;
              throw new Error(`Content-Length: ${res.headers.get('content-length')}`);
            }
            if (!/text|json/.test(res.headers.get('content-type'))) {
              await Resta.sendFile(m.chat, bufg, text, text, m);
            } else {
              let txt = await res.text();
              try {
                txt = util.format(JSON.parse(txt));
              } catch (e) {
                txt += '';
              } finally {
                m.reply(txt.slice(0, 65536));
              }
            }
          }
          break;                     
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await Resta.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Resta.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(util.format(e))
                }
                break
   case 'toqr': case 'qr': {
            	if (!text) throw 'No Query Text'
               m.reply(mess.wait)
               Resta.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Nih Bro` }, { quoted: m })
            	}
            break
            case 'cowner': {
              if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
              if (!args[0]) return m.reply(`Pilih add atau del`)
              if (args[1]) {
              orgnye = args[1]
              } else if (m.quoted) {
              orgnye = m.quoted.sender.split("@")[0]
              }
              const isCwner = owner.includes(orgnye)
              if (args[0] === "add") {
              if (isCwner) return m.reply('User sudah menjadi owner')
              owner.push(orgnye)
              m.reply(`Succes add friends`)
              } else if (args[0] === "del") {
              if (!isCwner) return m.reply('User bukan owner')
              let delcwner = owner.indexOf(orgnye)
              owner.splice(delcwner, 1)
              m.reply(`Succes del friends`)
              } else {
              m.reply("Error")
              }
              }
              break
              case 'readmore':{
                let [l, r] = text.split`|`
              if (!l) l = ''
              if (!r) r = ''
              m.reply( l + readmore + r )
              }
              break
			  case 'megajs':
              case 'megadl':
case 'mgz':
  case 'mega': {
  if (!text) return m.reply('URL tidak ditemukan')
  try {
    const { File } = require('megajs')
    const file = File.fromURL(text)
    await file.loadAttributes()
    const data = await file.downloadBuffer()
    Resta.sendMessage(m.chat, { document: data, fileName: file.name, caption: `Berhasil Didapatkan...\nFilename: ${file.name}\nSize: ${formatp(file.size)}`, mimetype: file.name.split(".")[1] })
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mengunduh file.')
  }
}
break;
case 'enc':
case 'encrypt':{
  const JavaScriptObfuscator = require('javascript-obfuscator')
  if (!text) throw `[!] Masukan textnya`
  let res = JavaScriptObfuscator.obfuscate(text)
  await Resta.sendText(m.chat, res.getObfuscatedCode(), m)
}
break 
   case 'menu':
   case 'help': {
   	try {
   	ppwong = await Resta.profilePictureUrl(from, 'image')
   	} catch {
   	ppme = pickRandom(mylogo)
       ppwong = await getBuffer(ppme)
   	}
    // create a message for broadcasting
    const fmenu = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: '6289523258649-1604595598@g.us'
  },
  message: {
    orderMessage: {
      itemCount: `${moment().tz('Asia/Jakarta').locale('id').format('DDMMYYYY')}`,
      status: 200,
      thumbnail: await Resta.reSize(ppwong, 100, 100),
      surface: 200,
      message: `Don't forget to follow @this.ilham_`,
      orderTitle: 'Mark Zuckerberg',
      sellerJid: '0@s.whatsapp.net'
    }
  }
};

  const contextInfo = {
    forwardingScore: 9999,
    isForwarded: false,
    mentionedJid: [m.sender],
    externalAdReply: {
      showAdAttribution: true,
      title: `${ucapanWaktu}, ${pushname} 👋`,
      body: 'Follow @this.ilham_ for more updates',
      mediaType: 1,
      thumbnailUrl: 'https://telegra.ph/file/76827b39d82b28877fb57.jpg',
      sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
      renderLargerThumbnail: true
    }
  };
  // send the text message with the buttons and context info
  await Resta.sendMessage(m.chat, {
    //image: await Resta.reSize(pickRandom(mylogo), 300, 150),
    text: `〖  *Menu ${namaBot}*  〗

👤 *Name:* ${db.data.users[m.sender].name}
🎉 *Umur:* ${db.data.users[m.sender].age}
🗃️ *Registered:* ${db.data.users[m.sender].registered ? '✅' : '❎'}
👥 *Database:* ${Object.values(global.db.data.users).filter(user => user.registered == true).length} dari ${Object.keys(global.db.data.users).length} ( ${formatp(await fs.statSync('./src/database.json').size)} )
📞 *Nomor:* @${m.sender.split("@")[0]}
🗓️ *Masehi:* ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}
📆 *Islamic:* ${Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date(new Date + 3600000))}
⏱️ *Count down:* 
• *New Year:* ${await hitungmundur(01, 01)}
• *My Birthday:* ${await hitungmundur(01, 28)}

🔖 Free Rest API: https://api.lannn.me/
    
${gre}Please report any issues with the BOT's responses to the owner using the #report format. For example, #report anime naruto feature not working. Thank you for your assistance.${gre}
    
"${motiva}" 🍃
${readmore}
    
┌──⭓ *OTHERS MENU* ${srl}
│
│${ctc} ${prefix}styletext ${query}
│${ctc} ${prefix}encrypt ${text}
│${ctc} ${prefix}enc ${text}
│${ctc} ${prefix}kalkulator _5*6_
│${ctc} ${prefix}calc _5*6_
│${ctc} ${prefix}ppcp
│${ctc} ${prefix}ppcouple
│${ctc} ${prefix}wangy ${query}
│${ctc} ${prefix}ocr *<Balas Imagenya>* / ${im}
│${ctc} ${prefix}report ${query}
│${ctc} ${prefix}true 62812xxxx
│${ctc} ${prefix}qr ${query}
│${ctc} ${prefix}ssweb ${link}
│${ctc} ${prefix}qc ${query}
│${ctc} ${prefix}gempa
│${ctc} ${prefix}gsmarena ${query}
│${ctc} ${prefix}ai ${text}
│${ctc} ${prefix}openai ${text}
│${ctc} ${prefix}serimg ${query}
│${ctc} ${prefix}verifikasi
│${ctc} ${prefix}ceksn
│${ctc} ${prefix}donasi
│${ctc} ${prefix}readme
│${ctc} ${prefix}snk
│${ctc} ${prefix}owner
│${ctc} ${prefix}listchannel
│${ctc} ${prefix}listonline
│${ctc} ${prefix}litsprivate
│${ctc} ${prefix}litsgroup
│${ctc} ${prefix}listblock
│${ctc} ${prefix}me
│${ctc} ${prefix}readmore
│${ctc} ${prefix}unreg ${text}
│${ctc} ${prefix}afk ${text}
│${ctc} ${prefix}simi ${text}
│${ctc} ${prefix}tts <bahasa> ${text}
│
└───────⭓
    
┌──⭓ *ISLAMIC MENU* ${srl}
│
│${ctc} ${prefix}subuh
│${ctc} ${prefix}dzuhur
│${ctc} ${prefix}ashar
│${ctc} ${prefix}maghrib
│${ctc} ${prefix}isya
│${ctc} ${prefix}al-fatihah
│${ctc} ${prefix}iftitah
│${ctc} ${prefix}ruku
│${ctc} ${prefix}salam
│${ctc} ${prefix}sujud
│${ctc} ${prefix}tasyahudakhir
│${ctc} ${prefix}tasyahudawal
│${ctc} ${prefix}diantara2sujud
│${ctc} ${prefix}kisahnabi
│${ctc} ${prefix}doapendek
│${ctc} ${prefix}asmaulhusna
│${ctc} ${prefix}ayatkursi
│${ctc} ${prefix}murothal ${query}
│
└───────⭓
    
┌──⭓ *ANIME MENU* ${srl}
│
│${ctc} ${prefix}akira
│${ctc} ${prefix}akiyama
│${ctc} ${prefix}ana
│${ctc} ${prefix}asuna
│${ctc} ${prefix}ayuzawa
│${ctc} ${prefix}boruto
│${ctc} ${prefix}chitanda
│${ctc} ${prefix}chitoge
│${ctc} ${prefix}cosplay
│${ctc} ${prefix}deidara
│${ctc} ${prefix}doraemon
│${ctc} ${prefix}elaina
│${ctc} ${prefix}emilia
│${ctc} ${prefix}erza
│${ctc} ${prefix}fanart
│${ctc} ${prefix}genshin
│${ctc} ${prefix}gremory
│${ctc} ${prefix}hestia
│${ctc} ${prefix}hinata
│${ctc} ${prefix}husbu
│${ctc} ${prefix}icon
│${ctc} ${prefix}isuzu
│${ctc} ${prefix}itachi
│${ctc} ${prefix}itori
│${ctc} ${prefix}kaga
│${ctc} ${prefix}kagura
│${ctc} ${prefix}kaguya
│${ctc} ${prefix}kakashi
│${ctc} ${prefix}kaori
│${ctc} ${prefix}kaneki
│${ctc} ${prefix}keneki
│${ctc} ${prefix}kosaki
│${ctc} ${prefix}kotori
│${ctc} ${prefix}kuriyama
│${ctc} ${prefix}kuroha
│${ctc} ${prefix}kurumi
│${ctc} ${prefix}loli
│${ctc} ${prefix}madara
│${ctc} ${prefix}megumin
│${ctc} ${prefix}menus
│${ctc} ${prefix}mikasa
│${ctc} ${prefix}miku
│${ctc} ${prefix}minato
│${ctc} ${prefix}natsukawa
│${ctc} ${prefix}neko
│${ctc} ${prefix}nekonime
│${ctc} ${prefix}nezuko
│${ctc} ${prefix}nishimiya
│${ctc} ${prefix}onepiece
│${ctc} ${prefix}pokemon
│${ctc} ${prefix}rem
│${ctc} ${prefix}rize
│${ctc} ${prefix}sagiri
│${ctc} ${prefix}sakura
│${ctc} ${prefix}sasuke
│${ctc} ${prefix}shina
│${ctc} ${prefix}shinka
│${ctc} ${prefix}shizuka
│${ctc} ${prefix}shota
│${ctc} ${prefix}simp
│${ctc} ${prefix}tomori
│${ctc} ${prefix}toukachan
│${ctc} ${prefix}tsunade
│${ctc} ${prefix}waifu
│${ctc} ${prefix}waifu2
│${ctc} ${prefix}yatogami
│${ctc} ${prefix}yuki
│
└───────⭓
    
┌──⭓ *NSFW MENU* ${srl}
│
│${ctc} ${prefix}ahegao
│${ctc} ${prefix}ass
│${ctc} ${prefix}bdsm
│${ctc} ${prefix}blowjob
│${ctc} ${prefix}cuckold
│${ctc} ${prefix}cum
│${ctc} ${prefix}eba
│${ctc} ${prefix}ero
│${ctc} ${prefix}fendom
│${ctc} ${prefix}foot
│${ctc} ${prefix}gangbang
│${ctc} ${prefix}glasses
│${ctc} ${prefix}hentai
│${ctc} ${prefix}jahy
│${ctc} ${prefix}manga
│${ctc} ${prefix}masturbation
│${ctc} ${prefix}megumin
│${ctc} ${prefix}neko
│${ctc} ${prefix}neko2
│${ctc} ${prefix}nekonime
│${ctc} ${prefix}nsfw
│${ctc} ${prefix}nsfwloli
│${ctc} ${prefix}nsfwmanga
│${ctc} ${prefix}nsfwneko
│${ctc} ${prefix}orgy
│${ctc} ${prefix}panties
│${ctc} ${prefix}pussy
│${ctc} ${prefix}tentacles
│${ctc} ${prefix}thighs
│${ctc} ${prefix}yuri
│${ctc} ${prefix}zettai
│
└───────⭓
    
┌──⭓ *CONVERT VN MENU* ${srl}
│
│${ctc} ${prefix}bass ${sd}
│${ctc} ${prefix}blown ${sd}
│${ctc} ${prefix}deep ${sd}
│${ctc} ${prefix}earrape ${sd}
│${ctc} ${prefix}fast ${sd}
│${ctc} ${prefix}fat ${sd}
│${ctc} ${prefix}nightcore ${sd}
│${ctc} ${prefix}reverse ${sd}
│${ctc} ${prefix}robot ${sd}
│${ctc} ${prefix}slow ${sd}
│${ctc} ${prefix}smooth ${sd}
│${ctc} ${prefix}tupai ${sd}
│
└───────⭓
    
┌──⭓ CERPEN MENU ${srl}
│
│${ctc} ${prefix}cerpen-persahabatan
│${ctc} ${prefix}cerpen-islami
│${ctc} ${prefix}cerpen-Pengorbanan
│${ctc} ${prefix}cerpen-cintasegitiga
│${ctc} ${prefix}cerpen-galau
│${ctc} ${prefix}cerpen-sejarah
│${ctc} ${prefix}cerpen-sedih
│${ctc} ${prefix}cerpen-sastra
│${ctc} ${prefix}cerpen-romantis
│${ctc} ${prefix}cerpen-rohani
│${ctc} ${prefix}cerpen-rindu
│${ctc} ${prefix}cerpen-remaja
│${ctc} ${prefix}cerpen-ramadhan
│${ctc} ${prefix}cerpen-petualangan
│${ctc} ${prefix}cerpen-perpisahan
│${ctc} ${prefix}cerpen-perjuangan
│${ctc} ${prefix}cerpen-penyesalan
│${ctc} ${prefix}cerpen-pengalaman
│${ctc} ${prefix}cerpen-pendidikan
│${ctc} ${prefix}cerpen-penantian
│${ctc} ${prefix}cerpen-patahhati
│${ctc} ${prefix}cerpen-olahraga
│${ctc} ${prefix}cerpen-nasionalisme
│${ctc} ${prefix}cerpen-nasihat
│${ctc} ${prefix}cerpen-motivasi
│${ctc} ${prefix}cerpen-misteri
│${ctc} ${prefix}cerpen-mengharukan
│${ctc} ${prefix}cerpen-malaysia
│${ctc} ${prefix}cerpen-liburan
│${ctc} ${prefix}cerpen-kristen
│${ctc} ${prefix}cerpen-korea
│${ctc} ${prefix}cerpen-kisahnyata
│${ctc} ${prefix}cerpen-keluarga
│${ctc} ${prefix}cerpen-kehidupan
│${ctc} ${prefix}cerpen-jepang
│${ctc} ${prefix}cerpen-inspiratif
│${ctc} ${prefix}cerpen-gokil
│${ctc} ${prefix}cerpen-galau
│${ctc} ${prefix}cerpen-cintasejati
│${ctc} ${prefix}cerpen-cintasedih
│${ctc} ${prefix}cerpen-cintaromantis
│${ctc} ${prefix}cerpen-cintapertama
│${ctc} ${prefix}cerpen-cintaislami
│${ctc} ${prefix}cerpen-cinta
│${ctc} ${prefix}cerpen-budaya
│${ctc} ${prefix}cerpen-bahasasunda
│${ctc} ${prefix}cerpen-bahasajawa
│${ctc} ${prefix}cerpen-bahasainggris
│${ctc} ${prefix}cerpen-bahasadaerah
│${ctc} ${prefix}cerpen-anak
│
└───────⭓
    
┌──⭓ *Converter To Link* ${srl}
│
│${ctc} ${prefix}tinyurl ${link}
│${ctc} ${prefix}tourl ${im} / ${vd}
│
└───────⭓
    
┌──⭓ *QUOTES MENU* ${srl}
│
│${ctc} ${prefix}katabijak
│${ctc} ${prefix}kataanime
│${ctc} ${prefix}katailham
│${ctc} ${prefix}faktaunik
│${ctc} ${prefix}quotes
│${ctc} ${prefix}pantun 
│
└───────⭓
    
┌──⭓ *GROUP SETTINGS* ${srl}
│
│${ctc} ${prefix}jadian
│${ctc} ${prefix}antivionce
│${ctc} ${prefix}antilink 
│${ctc} ${prefix}ephemeral
│${ctc} ${prefix}welcomegroup
│${ctc} ${prefix}delete
│${ctc} ${prefix}leave
│${ctc} ${prefix}linkgc
│${ctc} ${prefix}revoke
│${ctc} ${prefix}kick 
│${ctc} ${prefix}add
│${ctc} ${prefix}promote
│${ctc} ${prefix}demote
│${ctc} ${prefix}setsubject
│${ctc} ${prefix}setdesc
│${ctc} ${prefix}setppgrup
│${ctc} ${prefix}tagall
│${ctc} ${prefix}hidetag
│${ctc} ${prefix}getpic *Balas Quotednya*
│
└───────⭓
    
┌──⭓ *GAMES JADIAN* ${srl}
│
│${ctc} ${prefix}tembakpasangan 
│${ctc} ${prefix}terimapasangan
│${ctc} ${prefix}cekpasangan
│${ctc} ${prefix}putuspasangan
│${ctc} ${prefix}tolakpasangan
│${ctc} ${prefix}ikhlasinpasangan
│
└───────⭓
    
┌──⭓ *STALK* ${srl}
│
│${ctc} ${prefix}igstalk ${query}
│${ctc} ${prefix}githubstalk ${query}
│
└───────⭓
    
┌──⭓ *SEARCHING* ${srl}
│
│${ctc} ${prefix}tr <kode-bahasa> ${query}/Balas Teksnya
│${ctc} ${prefix}translate <kode-bahasa> ${query}/Balas Teksnya
│${ctc} ${prefix}play ${query}
│${ctc} ${prefix}brainly ${query}
│${ctc} ${prefix}lirik ${query}
│${ctc} ${prefix}cuaca ${query}
│${ctc} ${prefix}ytsearch ${query}
│${ctc} ${prefix}getvideo (balas yts)
│${ctc} ${prefix}getmusic (balas yts)
│${ctc} ${prefix}pinterest ${query}
│${ctc} ${prefix}sfilesearch ${query}
│${ctc} ${prefix}google ${query}
│${ctc} ${prefix}kbbi ${query}
│${ctc} ${prefix}wiki ${query}
│${ctc} ${prefix}wikipedia ${query}
│${ctc} ${prefix}npmjs ${query}
│${ctc} ${prefix}gimage ${query}
│${ctc} ${prefix}whatmusic ${sd} | ${vd} <berdurasi >20 detik>
│${ctc} ${prefix}covid
│${ctc} ${prefix}covidindo
│${ctc} ${prefix}jarak *Query|Query*
│
└───────⭓
    
┌──⭓ *ASUPAN MENU* ${srl}
│
│${ctc} ${prefix}anony
│${ctc} ${prefix}asupan
│${ctc} ${prefix}bocil
│${ctc} ${prefix}cecan
│${ctc} ${prefix}cecan2
│${ctc} ${prefix}cecan3
│${ctc} ${prefix}cogan
│${ctc} ${prefix}china
│${ctc} ${prefix}indonesia
│${ctc} ${prefix}japan
│${ctc} ${prefix}korea
│${ctc} ${prefix}malaysia
│${ctc} ${prefix}thailand
│${ctc} ${prefix}vietnam
│${ctc} ${prefix}euni
│${ctc} ${prefix}gheayubi
│${ctc} ${prefix}harley
│${ctc} ${prefix}hijaber
│${ctc} ${prefix}natajadeh
│${ctc} ${prefix}rikagusriani
│${ctc} ${prefix}santuy
│${ctc} ${prefix}ukhty
│
└───────⭓
    
┌──⭓ *DOWNLOADS* ${srl}
│
│${ctc} ${prefix}igmp4 ${link}
│${ctc} ${prefix}igfoto ${link}
│${ctc} ${prefix}ytmp3 ${link}
│${ctc} ${prefix}ytmp4 ${link}
│${ctc} ${prefix}yta ${link}
│${ctc} ${prefix}ytv ${link}
│${ctc} ${prefix}facebook ${link}
│${ctc} ${prefix}soundcloud ${link}
│${ctc} ${prefix}cocofun ${link}
│${ctc} ${prefix}gitclone ${link}
│${ctc} ${prefix}githubdl *<namagh> <namarepo> <namabranch>*
│${ctc} ${prefix}tiktok ${link}
│${ctc} ${prefix}tiktoknowm ${link}
│${ctc} ${prefix}tiktokmusic ${link}
│${ctc} ${prefix}mediafire ${link}
│${ctc} ${prefix}sfilemobi ${link}
│${ctc} ${prefix}gdrive ${link}
│${ctc} ${prefix}twitter ${link}
│${ctc} ${prefix}mega ${link}
│${ctc} ${prefix}megadl ${link}
│
└───────⭓
    
┌──⭓ *CONVERTER MEDIA* ${srl}
│
│${ctc} ${prefix}sticker ${im}
│${ctc} ${prefix}attp ${query}
│${ctc} ${prefix}ttp ${query}
│${ctc} ${prefix}toimg *Reply Sticker nya*
│${ctc} ${prefix}tomp4 *Reply Sticker nya*
│${ctc} ${prefix}smeme2 ${query}|${query}
│${ctc} ${prefix}smeme ${query}
│${ctc} ${prefix}stickergif ${vd}
│${ctc} ${prefix}removebg ${im}
│${ctc} ${prefix}stickerwm ${text}
│${ctc} ${prefix}emojimix2 ${emo}
│${ctc} ${prefix}emojimix ${emo}|${emo}
│
└───────⭓
    
┌──⭓ *STICKER API* ${srl}
│
│${ctc} ${prefix}mukalu
│${ctc} ${prefix}animegif
│${ctc} ${prefix}manusialidi
│${ctc} ${prefix}paimon
│${ctc} ${prefix}patrickgif
│${ctc} ${prefix}spongebob
│${ctc} ${prefix}dinokuning
│${ctc} ${prefix}among
│${ctc} ${prefix}rabbit
│${ctc} ${prefix}random
│${ctc} ${prefix}patrick
│${ctc} ${prefix}doge
│${ctc} ${prefix}pentol
│${ctc} ${prefix}gojo
│${ctc} ${prefix}gura
│${ctc} ${prefix}umaru
│
└───────⭓
    
┌──⭓ *RANDOM IMAGE* ${srl}
│
│${ctc} ${prefix}cyberspace
│${ctc} ${prefix}mountain
│${ctc} ${prefix}teknologi
│${ctc} ${prefix}programming
│${ctc} ${prefix}aesthetic
│${ctc} ${prefix}animerandom
│${ctc} ${prefix}anjing
│${ctc} ${prefix}boneka
│${ctc} ${prefix}darkjokes
│${ctc} ${prefix}hekel
│${ctc} ${prefix}justina
│${ctc} ${prefix}kpop
│${ctc} ${prefix}kucing
│${ctc} ${prefix}mobil
│${ctc} ${prefix}motor
│${ctc} ${prefix}rose
│${ctc} ${prefix}ryujin
│${ctc} ${prefix}wallhp
│
└───────⭓
    
┌──⭓ *PHOTOOXY* ${srl}
│
│${ctc} ${prefix}pubg teks|teks
│${ctc} ${prefix}bevel ${text}
│${ctc} ${prefix}luxury ${text}
│${ctc} ${prefix}flaming ${text}
│${ctc} ${prefix}3d-summer ${text}
│${ctc} ${prefix}shadow-sky ${text}
│${ctc} ${prefix}wolf-metal ${text}
│${ctc} ${prefix}metallic ${text}
│${ctc} ${prefix}metallic2 ${text}
│${ctc} ${prefix}burn-paper ${text}
│${ctc} ${prefix}naruto ${text}
│${ctc} ${prefix}smoke ${text}
│${ctc} ${prefix}flower-typography ${text}
│${ctc} ${prefix}hello-kitty ${text}
│${ctc} ${prefix}coffe-cup ${text}
│${ctc} ${prefix}butterfly ${text}
│${ctc} ${prefix}night-sky ${text}
│${ctc} ${prefix}carved-wood ${text}
│${ctc} ${prefix}sweet-candy ${text}
│
└───────⭓
    
┌──⭓ *TEXT MAKER* ${srl}
│
│${ctc} ${prefix}candy ${text}
│${ctc} ${prefix}christmas ${text}
│${ctc} ${prefix}3dchristmas ${text}
│${ctc} ${prefix}sparklechristmas ${text}
│${ctc} ${prefix}deepsea ${text}
│${ctc} ${prefix}scifi ${text}
│${ctc} ${prefix}rainbow2 ${text}
│${ctc} ${prefix}waterpipe ${text}
│${ctc} ${prefix}spooky ${text}
│${ctc} ${prefix}pencil ${text}
│${ctc} ${prefix}circuit ${text}
│${ctc} ${prefix}discovery ${text}
│${ctc} ${prefix}metalic ${text}
│${ctc} ${prefix}fiction ${text}
│${ctc} ${prefix}demon ${text}
│${ctc} ${prefix}transformer ${text}
│${ctc} ${prefix}berry ${text}
│${ctc} ${prefix}thunder ${text}
│${ctc} ${prefix}3dstone2 ${text}
│${ctc} ${prefix}neonlight ${text}
│${ctc} ${prefix}glitch ${text}
│${ctc} ${prefix}harrypotter ${text}
│${ctc} ${prefix}brokenglass ${text}
│${ctc} ${prefix}papercut ${text}
│${ctc} ${prefix}watercolor ${text}
│${ctc} ${prefix}multicolor ${text}
│${ctc} ${prefix}neondevil ${text}
│${ctc} ${prefix}underwater ${text}
│${ctc} ${prefix}graffitibike ${text}
│${ctc} ${prefix}snow ${text}
│${ctc} ${prefix}cloud ${text}
│${ctc} ${prefix}honey ${text}
│${ctc} ${prefix}ice ${text}
│${ctc} ${prefix}fruitjuice ${text}
│${ctc} ${prefix}biscuit ${text}
│${ctc} ${prefix}wood ${text}
│${ctc} ${prefix}chocolate ${text}
│${ctc} ${prefix}strawberry ${text}
│${ctc} ${prefix}matrix ${text}
│${ctc} ${prefix}blood ${text}
│${ctc} ${prefix}dropwater ${text}
│${ctc} ${prefix}toxic ${text}
│${ctc} ${prefix}lava ${text}
│${ctc} ${prefix}rock ${text}
│${ctc} ${prefix}bloodglas ${text}
│${ctc} ${prefix}halloween ${text}
│${ctc} ${prefix}darkgold ${text}
│${ctc} ${prefix}joker ${text}
│${ctc} ${prefix}wicker ${text}
│${ctc} ${prefix}firework ${text}
│${ctc} ${prefix}skeleton ${text}
│${ctc} ${prefix}blackpink ${text}
│${ctc} ${prefix}sand ${text}
│${ctc} ${prefix}glue ${text}
│${ctc} ${prefix}1917 ${text}
│${ctc} ${prefix}leaves ${text}
│${ctc} ${prefix}demon ${text}
│
└───────⭓`,
    //buttons: buttons,
    contextInfo: contextInfo,
    //mentions: [m.sender],
    footer: `${namaBot} | By ${ownerName}`
  }, {quoted: fmenu});
}
break;
case 'styletext':
{
  m.reply(Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `${ctc} ${name}${value}`).join`\n\n`)
}
break
   case 'donasi': {
              const tgo = '```'
              let domn = `${tgo}Bot ini gratis untuk semua dan dapat ditambahkan ke Grup. Namun, jika terbantu dan ingin berkontribusi, donasi sangat diapresiasi. Donasi membantu pemilik menjaga kelangsungan hidup bot dan memastikan berfungsi di masa depan. Terima kasih kepada yang sudah berdonasi. Mohon pertimbangkan berkontribusi agar bot terus beroperasi dan membantu pengguna dengan lebih baik lagi. Terima kasih :)${tgo}`
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/077455dafd3d931bc766e.jpg' }, caption: domn },{quoted:m})
              }
              break
   case 'readme':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, readme(prefix), m) 
              break
   case 'snk':
              Resta.sendText(m.chat, snk(prefix), m) 
              break
   case 'listchannel':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, channel(prefix), m) 
              break
   case 'owner':
              Resta.sendContact(m.chat, global.tesel, m)
              break
   case 'afk':
    	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              user.afkTime = + new Date
              user.afkReason = text
              Resta.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Telah Afk${text ? ': ' + text : ''}`, m)
              break
  case 'verif':
  case 'daftar':
   case 'verifikasi':
              let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
              if (user.registered === true) throw m.reply(`Anda sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SN|SERIAL NUMBER>`)
              if (!Reg.test(text)) throw m.reply(`Format salah\n*${prefix}${command} nama.umur*`)
              let [_, name, splitter, age] = text.match(Reg)
              if (!name) throw m.reply( 'Name cannot be empty (Name)')
              if (!age) throw m.reply('Age cant be empty (Number)')
              age = parseInt(age)
              if (age > 80) throw m.reply('Umur terlalu tua 😉')
              if (age < 5) throw m.reply('Babies can type according to the format  ._.')
              user.name = name.trim()
              user.age = age
              user.regTime = + new Date
              user.registered = true
              let sn = createHash('md5').update(m.sender).digest('hex')
              m.reply(`Daftar berhasil!\n\n╭─❒ You Info Registrasi \n├\n├❒ Nama: ${name}\n├❒ Umur: ${age} Tahun \n├\n╰❒〘 ${namaBot} 〙\n\n Jangan Lupa Follow Instagram Mimin ${global.namaBot}\nhttps://instagram.com/this.ilham_\n\nNote Serial Number Jangan Sampai Lupa\nSerial Numbernya Sudah Dikirim Bot Di Private Message\nUntuk Menghapus Data Diri Anda Ketik\n${prefix}unreg [ no sn ]`.trim())
              Resta.sendMessage(m.sender, { text: `SERIAL NUMBER / SN\n*${sn}*`})
              break
   case 'unreg':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!args[0]) throw m.reply('Serial Number kosong')
              let spn = createHash('md5').update(m.sender).digest('hex')
              if (args[0] !== spn) throw m.reply('Serial Number salah')
              user.registered = false
              m.reply('```Succes Unreg !```')
              break
   case 'ceksn':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let Regg = /\|?(.*)([.|] *?)([0-9]*)$/i
              let jp = createHash('md5').update(m.sender).digest('hex')
              Resta.sendMessage(m.sender, { text: `*❒ SN:* ${jp}`})
              break
   case 'tts':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	          if (args.length < 1) return m.reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
	          try {
              const gtts = require('../lib/gtts')(args[0]) 
              if (args.length < 2) return m.reply('Textnya mana gan?') 
              var ngab = body.slice(8)
              ranm = getRandom('.mp3')
              rano = getRandom('.ogg')
              ngab.length > 600 ? reply('Textnya kebanyakan gan') : gtts.save(ranm, ngab, function() {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
              fs.unlinkSync(ranm)
              buff = fs.readFileSync(rano) 
              if (err) return reply('Gagal gan:(')
              Resta.sendMessage(m.chat, {audio: buff, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
              fs.unlinkSync(rano)
              })
              }) 
              } catch (err) {
              console.log(err)
              Resta.sendText(m.chat, bahasa(prefix), m) 
              }
              break
              case 'simi':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!text) throw m.reply(`Penggunaan ${command} text`)
                try {
                  const response = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
                  if (!response.ok) throw await response.text()
                  const result = await response.json()
                  if (result.success) {
                    Resta.sendMessage(m.chat, {
                      text: result.success,
                      quoted: m
                    })
                  } else {
                    throw 'Simi tidak dapat memproses permintaanmu'
                  }
                } catch (error) {
                  console.error(error)
                  throw `Simi error: ${error}`
                }
                break              
   case 'listblock':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              await Resta.fetchBlocklist().then(async data => {
		      let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		      for (let i of data) {
			  txt += `├ @${i.split("@")[0]}\n`
		      }
		      txt += "└────"
		      return Resta.sendTextWithMentions(m.chat, txt, m)
	          }).catch(err => {
		      console.log(err);
		      m.reply('tidak ada yang diblokir!')
	          })
              break
   case 'litsprivate': {
     	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
				 if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
              let abu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
              let tteks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${abu.length} Chat\n\n`
              for (let i of abu) {
              let nama = store.messages[i].array[0].pushName
              tteks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
              }
              Resta.sendTextWithMentions(m.chat, tteks, m)
              }
              break
   case 'litsgroup':
      	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
				if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
              let jadin = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
              let tekps = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${jadin.length} Group\n\n`
              for (let i of jadin) {
              let metadata = await Resta.groupMetadata(i)
              tekps += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
              }
              Resta.sendTextWithMentions(m.chat, tekps, m)
              break
   case 'delete': case 'del':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.quoted) throw m.reply('reply pesnya') 
              let { chat, fromMe } = m.quoted
              Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
              await Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
              break
   case 'listonline': case 'liston': 
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
              online = [...Object.keys(store.presences[id]), botNumber]
              Resta.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
              break
///converter Link///
case 'jadianime':
case 'toanime': {
  const { TelegraPh } = require('../lib/uploader');
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    try {
      const img = await Resta.downloadAndSaveMediaMessage(quoted)
      const out = await TelegraPh(img);
      await Resta.sendMessage(m.chat, { image: { url: `https://sh.xznsenpai.xyz/api/toanime?url=${util.format(out)}` }, caption: `*Jadi Anime*` }, { quoted: m });
      await fs.unlinkSync(img)
    } catch (e) {
      console.error(e);
      m.reply(`[ ! ] Identifikasi Gagal.`);
    }
  } else {
    m.reply(`Kirim gambar dengan caption ${command} atau tag gambar yang sudah dikirim`);
  }
}
break;
     case 'tourl':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               m.reply(mess.wait)
               let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
               let mpoedia = await Resta.downloadAndSaveMediaMessage(quoted)
               if (/image/.test(mime)) {
               anu = await TelegraPh(mpoedia)
               m.reply(util.format(anu))
               } else if (!/image/.test(mime)) {
               anu = await UploadFileUgu(mpoedia)
               m.reply(util.format(anu))
               }
               fs.unlinkSync(mpoedia)
              break
    case 'tinyurl':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
               if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
               axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
              .then((a) => m.reply(`Nih ${a.data}`))
              .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
               break
//JADIAN//
   case 'tembakpasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.isGroup) return m.reply(mess.group)
              if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
              if(isNaN(number)) return m.reply(`_*Nomor tidak valid.*_`)
              if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
              try {
              if(text) {
              user = number + '@s.whatsapp.net'
              } else if(m.quoted.sender) {
              user = m.quoted.sender
              } else if(m.mentionedJid) {
              user = number + '@s.whatsapp.net'
              }  
              } catch (e) {
              } finally {
              let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
              let participants = m.isGroup ? groupMetadata.participants : []
              let users = m.isGroup ? participants.find(u => u.id == user) : {}
              if(!users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
              if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
              if(user === Resta.user.id) return m.reply( `_*Tidak bisa berpacaran dengan saya. :')*_`)
              if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")  
              if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
              Resta.sendTextWithMentions(m.chat,`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putuspasangan untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{contextInfo: {mentionedJid: [user,global.db.data.users[m.sender].pasangan]}})
              }else if(global.db.data.users[user].pasangan != ""){
              var pacar = global.db.data.users[user].pasangan
              if (global.db.data.users[pacar].pasangan == user){
              if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return Resta.sendText(m.chat,`Anda sudah berpacaran dengan @${pacar.split('@')[0]}`,m,{contextInfo: {mentionedJid: [pacar]}})
              Resta.sendTextWithMentions(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,m,{contextInfo:{ mentionedJid: [user,pacar]}})
              }else{
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }else if (global.db.data.users[user].pasangan == m.sender){
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 😉`,m,{contextInfo: {mentionedJid: [user] }})
              }else {
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }
              break
   case 'terimapasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
             const format = num => {
             const n = String(num),
             p = n.indexOf('.')
             return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => p < 0 || i < p ? `${m},` : m)
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
             if(isNaN(number)) return m.reply( `_*Nomor tidak valid.*_`)
             if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.jid == user) : {}
             if(users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
             if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
             if(user === Resta.user.jid) return m.reply(`_*Tidak bisa berpacaran dengan saya. :')*_`)
             if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")   
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: {mentionedJid: [user]}})
             }else{
             global.db.data.users[m.sender].pasangan = user
             Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]}  ❤️ @${m.sender.split('@')[0]} 😉`,m,{contextInfo:{ mentionedJid: [m.sender,user]}})
             }
             }	
             break
  case 'cekpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if(number.length > 15 || (number.length < 9 && number.length > 0)) return m.reply(`Maaf, Nomor yang anda masukan salah!`)
             if (!text && !m.quoted){
             user = m.sender
             orang = "Kamu"
             }else if(text) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             orang = "Orang yang kamu balas"
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             }
             if (typeof global.db.data.users[user] == "undefined"){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (global.db.data.users[user].pasangan == "") {
             Resta.sendTextWithMentions(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembakpasangan @user untuk menembak seseorang*`, m)
             }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${prefix}ikhlasinpasangan* untuk mengikhlaskan!`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }else {
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} ❤️`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }
             break
  case 'putuspasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             ayg = global.db.data.users[m.sender]
             if(ayg.pasangan == ""){
             return m.reply(`Anda tidak memiliki pasangan.`)
             } 
             pacar = global.db.data.users[global.db.data.users[m.sender].pasangan]
             if (typeof pacar == "undefined"){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             }
             if (m.sender == pacar.pasangan){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             pacar.pasangan = ""
             }else {
             m.reply(`Anda tidak memiliki pasangan.`)
             }
             break
  case 'tolakpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return Resta.sendText(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)  
             if(isNaN(number)) return Resta.sendText(m.chat, `Nomor yang anda masukan salah!`, m)
             if(number.length > 15) return Resta.sendText(m.chat, `Format salah!`, m)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.id == user) : {}
             if(users) return m.reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
             if(user === m.sender) return m.reply(`Tidak bisa berpacaran dengan diri sendiri!`)
             if(user === Resta.user.jid) return m.reply(`*Tidak bisa berpacaran dengan saya t_t`)    
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: { mentionedJid: [user]}})
             }else{
             global.db.data.users[user].pasangan = ""
             Resta.sendTextWithMentions(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m,{contextInfo: {mentionedJid: [user]}})
             }
             }
             break
  case 'ikhlasinpasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if (global.db.data.users[m.sender].pasangan == "") return m.reply( `Kamu sedang tidak menembak siapapun!`)
             if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return Resta.sendTextWithMentions(m.chat, `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             Resta.sendTextWithMentions(m.chat, `Kamu sudah mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             global.db.data.users[m.sender].pasangan = ""
             break
//TEXT MAKER//
    case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
    case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
    case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
    case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
    case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
    case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
    case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
    case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
    case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
    case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!q) return m.reply(`Example : ${prefix + command} ${global.ownerName}`)                 
               m.reply(mess.wait)
               let link
               if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
               if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
               if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
               if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
               if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
               if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
               if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
               if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
               if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
               if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
               if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
               if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
               if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
               if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
               if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
               if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
               if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
               if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
               if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
               if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
               if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
               if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
               if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
               if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
               if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
               if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
               if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
               if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
               if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
               if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
               if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
               if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
               if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
               if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
               if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
               if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
               if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
               if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
               if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
               if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
               if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
               if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
               if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
               if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
               if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
               if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
               if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
               if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
               if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
               if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
               if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
               if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
               if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
               if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
               if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
               if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
               if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
               anu = await textpro(link, q)
               Resta.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.namaBot}` }, { quoted: m })
               }
               break
               case 'pubg':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks|teks`)
                m.reply(mess.wait)
                const [teks1, teks2] = q.split("|")
                let pab = await lann('https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html', [
                  teks1, teks2
                ])
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              }
              break; 
              case 'bevel':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              }    
              break  
              case 'luxury':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break      
              case 'flaming':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break  
              case '3d-summer':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break  
              case 'shadow-sky':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break 
              case 'wolf-metal':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'metallic':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/other-design/create-metallic-text-glow-online-188.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'metallic2':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'metallic2':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'burn-paper':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'naruto':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'smoke':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'flower-typography':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/art-effects/flower-typography-text-effect-164.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'hello-kitty':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'coffe-cup':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'butterfly':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'night-sky':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'carved-wood':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'sweet-candy':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
//GROUP SETTINGS//
    case 'antivionce':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = true
               m.reply(`Antivionce Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = false
               m.reply(`Antivionce Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
	case 'wangy': {
		if (!text) throw m.reply(`Masukkan query!`)
              awikwok = `${text} ${text} ${text} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${text} wangyy aku mau nyiumin aroma wangynya ${text} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${text} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${text} AAAAA LUCCUUUUUUUUUUUUUUU............ ${text} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${text} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${text} gw ... ${text} di laptop ngeliatin gw, ${text} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} aku gak mau merelakan ${text} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${text} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              Resta.sendTextWithMentions(m.chat, awikwok, m)
	}
	break
	case 'jadian':{
	if (!m.isGroup) return m.reply(mess.group)
	let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}\n*Semoga langgeng yak :)*`.trim()
    let mentionedJid = [orang, jodoh]
    await Resta.sendTextWithMentions(m.chat, jawab, '', `${command}`, command, m, { contextInfo: { mentionedJid } })
	}
	break
    case 'antilink':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = true
               m.reply(`Antilink Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = false
               m.reply(`Antilink Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'ephemeral':
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === '1') {
               await Resta.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '7') {
               await Resta.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '90') {
               await Resta.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === 'off') {
               await Resta.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else {
               let sections = [
               {
               title: "CHANGE EPHEMERAL GROUP",
               rows: [
               {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
               {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
               {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
               {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Resta.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Resta.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
                break
     case 'leave':
                if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                await Resta.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
                break
     case 'link':
case 'linkgrup':
case 'linkgroup': case 'linkgc': 
      	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                let response = await Resta.groupInviteCode(m.chat)
                Resta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                break
     case 'revoke':
        	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                await Resta.groupRevokeInvite(from)
                m.reply(mess.done)
                break
     case 'kick':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'add':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
case 'opromote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
}
break
     case 'promote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'demote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'setname': case 'setsubject':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
     case 'setdesc': case 'setdesk':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
     case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                var media = await Resta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                var { img } = await generateProfilePicture(media)
                await Resta.query({
                tag: 'iq',
                attrs: {
                to: m.chat,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                fs.unlinkSync(media)
                m.reply(`Sukses`)
                }
                break
     case 'tagall':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                let teks = `*👥 Tag All By Admin*\n\n🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `乂 @${mem.id.split('@')[0]}\n`
                }
                Resta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                break
     case 'hidetag':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                Resta.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)}) 
                break
//STALK//
     case 'igstalk':
                if (!args || !args[0]) throw m.reply(`Gunakan format ${prefix}${command} [username] Contoh: ${prefix}${command} jokowi`)
                m.reply(mess.wait)
                try {
                res = await noapi.igstalk(args[0])
                json = JSON.parse(JSON.stringify(res))
                iggs = `▢ *Username:* ${json.username}\n▢ *Nickname:* ${json.fullName}\n▢ *Followers:* ${json.followers}\n▢ *Following:* ${json.following}\n▢ *Posting:* ${json.postsCount}\n▢ *Link:* https://instagram.com/${json.username}\n▢ *Bio:* ${json.bio}`
                Resta.sendImage(m.chat, json.profilePicHD, iggs, m)
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: String(err)}, { quoted: m })
                }
                break
     case 'githubstalk':
                if (!text) return m.reply( 'Harap Masukan Username')
                await m.reply(mess.wait)
                try {
                ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
                thumb = await getBuffer(ano.avatar_url)
                hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Perusahaan*: ${ano.company}\n➸ *Repo Publik:* ${ano.public_repos}\n➸ *Gists Publik:* ${ano.public_gists}\n➸ *Follower:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                await Resta.sendMessage(m.chat, { image: thumb, caption: hasilnya, quoted: m })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: String(err)}, { quoted: m })
                }
                break
//SEARCHING//
case 'whatmusic': {
  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
  try {
    if (/video|audio/.test(mime)) {
      let media = await quoted.download()
      await m.reply(mess.wait)
      let { status, metadata } = await acr.identify(media)
      if (status.code !== 0) throw status.msg 
      let { title, artists, album, genres, release_date } = metadata.music[0]
      let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
      txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
      txt += `*• Release Date:* ${release_date}`
      await Resta.sendMessage(m.chat, {
      text: text.trim(),
      footer: `Mau Dikirimkan Audionya, Klik Dibawah!!!`
    }, { quoted: m })
    } else {
      return m.reply(`Reply audio/video with command ${prefix}${command}`)
    }
  } catch (err) {
    console.log(err)
    await m.reply(util.format(err))
  }
}
break
     case 'play': case 'ytplay': {
		 if (!text) return m.reply(`Example : ${prefix + command} dj alok 30 detik`)
		 let yts = require("yt-search")
		 let search = await yts(text)
		 let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		 m.reply(mess.wait)
let pla = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}

*Sebentar, masih diproses...*`
await Resta.sendMessage(m.chat, { text: pla, contextInfo: {
				    forwardingScore: 9999,
				    isForwarded: false, 
				    externalAdReply: {
                    showAdAttribution: true,
					title: anu.title,
					body: `Don't forget to donate`,
					mediaUrl: anu.url,
					description: anu.description,
					mediaType: 1,
                    renderLargerThumbnail: true,
					previewType: "PHOTO",
					thumbnailUrl: anu.thumbnail,
					sourceUrl: `https://instagram.com/this.ilham_`	
				}
			},}, { quoted: m })
  try {
    console.log('Downloading Audio')
    var cvr = await hxz.youtube(anu.url)
        var sce = cvr.mp3
await Resta.sendMessage(m.chat, {
            document: {
                url: sce
            },
            mimetype: 'audio/mpeg',
			caption: 'Sukses...\nDont forget to donate :)',
			fileName: anu.title+'.mp3',
            contextInfo: {
                externalAdReply: {
                    title: anu.title,
                    body: "",
                    thumbnailUrl: anu.thumbnail,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        })
  } catch {
    try {
		await downloadMp3(anu.url)
	} catch (err) {
		console.log(err)
		m.reply(err.message)
	};
  }
}
break
case 'whois':{
if (!text) throw m.reply(`Masukkan Domain!\n\n*Contoh:* botcahx.biz.id`)
if (text.includes('https://') || text.includes('http://')) throw `Tolong masukkan tanpa domain https/http!. Contoh: botcahx.biz.id`;
  try {
    const waiting = `Sedang mencari informasi WHOIS untuk ${text}...`;
    m.reply(waiting);
    const response = await axios.get(`https://whois.botcahx.live/whois/${text}`);
    const $ = cheerio.load(response.data);
    const data = $("pre").text();
    m.reply(data);
  } catch (error) {
    console.log(error);
    m.reply('Terjadi error saat mencari informasi WHOIS, silakan coba lagi nanti');
  }
}
break
case 'but':{
	Resta.sendMessage(m.chat, { image: {url:erorurl}, caption: '.', buttons: [
                    {buttonId: `.`, buttonText: {displayText: 'Klik'}, type: 1}
], footer: '.', contextInfo: {
                externalAdReply: {
                    title: '',
                    body: "",
                    thumbnailUrl: erorurl,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
}
break
     case 'yts': case 'ytsearch': {
                if (!q) throw m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
				teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Resta.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'pin':
     case 'pinterest': 
           	 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             try {
                if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                m.reply(mess.wait)
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                Resta.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result},{quoted:m})
             } catch (err){
              m.reply(util.format(err))
             }
                break
     case 'sfilesearch':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                m.reply(mess.wait)
                api2.sfilesearch(`${q}`)
               .then(result => {
                res = '「 *sfilesearch* 」\n\n'
                for (let i of result) {
                res += `*Nama*: ${i.nama}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                }
                m.reply(res)
                });
                break 
     case 'google':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                let google = require('google-it')
                m.reply(mess.wait)
                google({'query': args.join(" ")}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                }) 
                break
      case 'joox':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!text) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`)
                 if (isUrl(text)) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`)
                 noapi.joox(text).then(res => {
                 let joox = JSON.stringify(res)
                 let jjson = JSON.parse(joox)
                 m.reply(mess.wait)
                 let random = Math.floor(Math.random() * jjson.data.length)
                 hasil = jjson.data[random]
                 let json = hasil
                 pesan = `*Penyanyi:* ${json.penyanyi}\n*Judul:* ${json.lagu}\n*Album:* ${json.album}\n*Diterbitkan:* ${json.publish}\nBy ${ownerName}\n\nPlease Be Patient We Are Sending The Data You Request`
                 Resta.sendMessage(m.chat, { image: { url: json.img}, caption: pesan}, {quoted:m})
                 Resta.sendMessage(m.chat, { audio: { url: json.mp3 }, mimetype: 'audio/mpeg', fileName: `${json.penyanyi}.mp3` }, { quoted: m })
                 })
                 break
//DOWNLOADER//
case 'yta': case 'ytmp3': case 'mp3':{
  if (!text) return m.reply('Masukan Link!')
  try {
    var vid = (await youtubeSearch(text)).video[0]
    m.reply(mess.wait)
    if (!vid) throw 'Video/Audio Tidak Ditemukan'
    var {
        title,
        description,
        thumbnail,
        videoId,
        durationH,
        durationS,
        viewH,
        publishedTime
    } = vid
        var url = 'https://www.youtube.com/watch?v=' + videoId
        var cvr = await hxz.youtube(url)
        var sce = cvr.mp3
        var tmb = thumbnail
        var captionvid = `∘ Title: ${title}\n∘ Published: ${publishedTime}\n∘ Duration: ${durationH}\n∘ Second: ${durationS}\n∘ Views: ${viewH}\n∘ Url:  ${url}\n∘ Description: ${description}`
        var pesan = await Resta.sendMessage(m.chat, {
            text: captionvid,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: viewH,
                    thumbnailUrl: tmb,
                    sourceUrl: 'https://instagram.com/this.ilham_',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            }
        },{quoted:m})
        console.log('Downloading Audio')
        Resta.sendMessage(m.chat, {
            audio: {
                url: sce
            },
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: "",
                    thumbnailUrl: tmb,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: pesan
        })
} catch {
    try {
await downloadMp3(args[0])
    } catch (err) {
      m.reply(err.message)
    }
}
}		
break
case 'ytv':
case 'ytmp4':
  case 'mp4': {
    if (!args[0]) return m.reply('Masukkan URL!')
    try {
      m.reply(mess.wait)
      console.log('Downloading Video')
    var cvr = await hxz.youtube(args[0])
        var sce = cvr.link
        const tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
        Resta.sendMessage(m.chat, {
            video: {
                url: sce
            },
            caption: `Success\n*URL: ${tinyUrl.data}*`,
            contextInfo: {
              externalAdReply: {
                  title: 'Success, dont forget to donate',
                  body: "",
                  thumbnailUrl: erorurl,
                  sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                  mediaType: 1,
                  showAdAttribution: true,
                  renderLargerThumbnail: true
              }
          },
        }, {
            quoted: m
        })
      } catch {
      try {
        await downloadMp4(args[0])
      } catch {
        m.reply(err.message)
      }
    }
  }
  break;    
   case 'ig':
case 'igmp4':
case 'igvideo': {
  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
  if (!q) return m.reply(`Use example ${command} https://www.instagram.com/reel/CsC-4wDL0oO/?igshid=NTc4MTIwNjQ2YQ==`)
    const results = (await instagramGetUrl(args[0])).url_list[0]

    Resta.sendMessage(m.chat, {video:{ url:results}, caption:`*Instagram Downloader*`}, {quoted:m})
}
break;
     case 'igfoto':{
  if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
  if (!q) return m.reply(`Use example ${command} https://www.instagram.com/reel/CsC-4wDL0oO/?igshid=NTc4MTIwNjQ2YQ==`)
    const results = (await instagramGetUrl(args[0])).url_list[0]

    Resta.sendMessage(m.chat, {image:{ url:results}, caption:`*Instagram Downloader*`}, {quoted:m})
}
                break
      case 'fbdown':
 case 'fb':
 case 'facebook':
 case 'fbdl':{
if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://www.facebook.com/watch/?v=1393572814172251`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(lannn+'/api/download/fbdown?url='+args[0]+'&apikey='+lannkey);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { Normal_video, HD } = result.result;
      const fileToSend = Normal_video || HD;
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Facebook.');
      }
      await Resta.sendMessage(m.chat, { document: {url:fileToSend}, mimetype: 'video/mp4', caption: args[0], fileName: command+'.mp4'},{quoted:m})
    } catch (err) {
      console.error(err);
      m.reply(util.format(err));
    }
 }
 break
     case 'soundcloud':{
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('soundcloudmp')/('soundcloud.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.soundcloud(`${q}`) 
               .then(result => {
                let text =`*🔰SOUNDCLOUD🔰*\n`
                text +=`*Title*: ${result.title}\n`
                text +=`*Durasi*: ${result.duration}\n`
                text +=`*Qulity*: ${result.quality}\n`
                text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
                Resta.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`, caption: text}, { quoted: m })
                }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
              }
                break
     case 'cocofun': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('icocofun.com')/('cocofun.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.cocofun(`${q}`) 
               .then(result => {
                let text =`*🔰COCOFUN🔰*\n`
                text +=`*Topic*: ${result.topic}\n`
                text +=`*Caption*: ${result.caption}\n`
                text +=`*View*: ${result.play}\n`
                text +=`*Share*: ${result.share}\n`
                text +=`*Like*: ${result.like}\n`
                text +=`*Durasi*: ${result.duration}`
                Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: text}, {quoted:m})
                }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                }
                break 
       case 'gitclone': {
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 try {
                 if (!args[0]) return m.reply('Linknya?')
                 let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                 if (!regx.test(args[0])) return m.reply('Linknya salah')
                 m.reply(mess.wait)
                 let [, usker, repo] = args[0].match(regx) || []
                 repos = repo.replace(/.git$/, '')
                 let hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`
                 let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                 Resta.sendMessage(m.chat, { document: { url: hasdl }, fileName: `${namafile}`, mimetype: 'zip' }, { quoted: m })
                 } catch (err) {
                 m.reply(util.format(err))
                 }
                 }
                 break
       case 'cuaca': {
if (!q) return m.reply(`_Contoh_\n${prefix+command} palembang`)
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
Nama: ${cuaca.name + "," + cuaca.sys.country}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp + " C"}
Angin: ${cuaca.wind.speed + " m/s"}
Kelembaban: ${cuaca.main.humidity + "%"}
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure + " HPa"}`
m.reply(text_cuaca)
}
break
case 'covid':{
const t = await copid()
var { kasus, kematian, sembuh } = t[0]
Resta.sendMessage(from, {text : `*COVID IN WORLD*\n\nKasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
}
break
case 'covidindo':{
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Resta.sendMessage(from, {text : `*COVID IN INDONESIA*\n\nKasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
}
break
case 'fbdown':
case 'fb':
  case 'fbdl':{
if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://www.facebook.com/watch/?v=1393572814172251`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(lannn+'/api/download/fbdown?url='+args[0]+'&apikey='+lannkey);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { Normal_video, HD } = result.result;
      const fileToSend = Normal_video || HD;
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Facebook.');
      }
      await Resta.sendMessage(m.chat, { document: {url:fileToSend}, mimetype: 'video/mp4', caption: args[0], fileName: command+'.mp4'},{quoted:m})
    } catch (err) {
      console.error(err);
      m.reply(util.format(err));
    }
 }
    break        
       case 'tiktoknowm':
	   case 'tiktokdl':
       case 'tiktok':
case 'tt': {
	try {
		if (!db.data.users[m.sender].registered)
			return m.reply(mess.regis)

		const url = args[0]
		if (!url)
			throw `Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
		if (!url.match(/tiktok/gi))
			throw `Link salah! Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
        m.reply(mess.wait)
await iky.downloader.tiktok(url).then(p => {

		Resta.sendMessage(from, {video:{url: p.result.video.nowm.video_url}, mimetype:"video/mp4", caption: `*TIKTOK DOWNLOADER*\n\n- Author: ${p.author}\n- Author Name: ${p.author_name}\n- Desc: ${p.desc}`}, {quoted:m})
})
	} catch (err) {
		if (err.message != 'Promise pending') {
			m.reply(util.format(err))
		}
	}
}
break;			 
     case 'tiktokmp3':
     case 'tiktokmusic':
	 case 'tiktokmusicdl':
	 case 'ttmp3': {
	try {
		if (!db.data.users[m.sender].registered)
			return m.reply(mess.regis)

		const url = args[0]
		if (!url)
			throw `Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
		if (!url.match(/tiktok/gi))
			throw `Link salah! Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
        m.reply(mess.wait)
await iky.downloader.tiktok(url).then(p => {

		 Resta.sendMessage(from, {document:{url: p.result.audio.audio_url}, mimetype:"audio/mpeg", caption: `*TIKTOK DOWNLOADER*\n\n- Author: ${p.author}\n- Author Name: ${p.author_name}\n- Desc: ${p.desc}`, fileName: p.author+'.mp3'}, {quoted:m})
})
	} catch (err) {
		if (err.message != 'Promise pending') {
			m.reply(util.format(err))
		}
	}
}
break		
		        case 'jarak': {
    try {
        const [from, to] = text.split("|")
        if (!(from && to)) throw m.reply("Contoh: " + prefix + "jarak jakarta|bandung")
        const data = await jarak(from.trim(), to.trim())
        if (data.img) {
            await Resta.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
        } else {
            await m.reply(data.desc)
        }
    } catch (error) {
        console.log(error)
        await m.reply(util.format(error))
    }

async function jarak(dari, ke) {
    try {
        const html = (await axios.get(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
        const $ = cheerio.load(html)
        const obj = {}
        const img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
        obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split(',')[1], 'base64') : ''
        obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
        return obj
    } catch (error) {
        console.log(error)
        throw "Terjadi kesalahan saat memproses permintaan jarak"
    }
}
}
break
     case 'getmusic': {
      try {
                if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return m.reply('Reply Pesan Hasil Dari Ytsearch')
                if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
		        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`) 
                m.reply(mess.wait)
        var cvr = await hxz.youtube(urls[text - 1])
        var sce = cvr.mp3
        console.log('Downloading Audio')
        Resta.sendMessage(m.chat, {
            audio: {
                url: sce
            },
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: 'Success, dont forget to donate',
                    body: "",
                    thumbnailUrl: erorurl,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        })
} catch {
	try { 
    await downloadMp3(urls[text - 1])
	} catch (e) {
    m.reply(util.format(e))
}
}
              }
              break
     case 'getvideo': {
      try{
                if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch')
                if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
                let urps = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urps) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                  m.reply(mess.wait)
                  console.log('Downloading Video')
                var cvr = await hxz.youtube(urps[text - 1])
                    var sce = cvr.link
                    const tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${urps[text - 1]}`)
                    Resta.sendMessage(m.chat, {
                        video: {
                            url: sce
                        },
                        caption: `Success\n*URL: ${tinyUrl.data}*`,
                        contextInfo: {
                          externalAdReply: {
                              title: 'Success, dont forget to donate',
                              body: "",
                              thumbnailUrl: erorurl,
                              sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                              mediaType: 1,
                              showAdAttribution: true,
                              renderLargerThumbnail: true
                          }
                      },
                    }, {
                        quoted: m
                    })
                  } catch {
					  try {
						  await downloadMp4(urps[text - 1])
				  } catch (err){
					  console.log(err)
            m.reply(err.message)
				  }
                }
     }
                break
///RANDOM ASUPAN//
case 'harley':
case 'anony': {
let vimde = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Dosa/${command}.json`) 
				let vemdi = pickRandom(vimde)
				await Resta.sendMessage(m.sender, { image: { url: vemdi.url }, caption: `Nih Bre\n${command} Buwat Eluwh:v`, fileName: `${vemdi}`},{quoted:m})
	 }
	 break
case 'cecan3':
case 'china':
case 'cogan':
case 'indonesia':
case 'japan':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam':
case 'cecan2':{
let cemc = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Cecan/${command}.json`)
const ccme = pickRandom(cemc)
await Resta.sendMessage(m.sender, { image: { url: ccme }, caption: `Nih ${command}`})
}
break
case 'cecan':
case 'hijaber':
case 'bocil': {
let vimde = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Dosa/${command}.json`) 
				let vemdi = pickRandom(vimde)
				await Resta.sendMessage(m.sender, { image: { url: vemdi }, caption: `Nih Bre\n${command} Buwat Eluwh:v`, fileName: `${vemdi}`},{quoted:m})
	 }
	 break
break
case 'asupan':
case 'euni':
case 'geayubi':
case 'natajadeh':
case 'rikagusriani':
case 'santuy':
case 'ukhty':	 {
		        let vimde = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Dosa/${command}.json`) 
				let vemdi = pickRandom(vimde)
				await Resta.sendMessage(m.sender, { video: { url: vemdi }, caption: `Nih Bre\n${command} Buwat Eluwh:v`, fileName: `${vemdi}`},{quoted:m})
	 }
	 break
///QUOTES TEXT///
     case 'katabijak':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                var er = `contoh: ${prefix + command} cinta\n\nOpsi Tersedia:\n• cinta\n• rindu\n• mimpi\n• sedih\n• sendiri\n• sabar\n• kesedihan\n• pernikahan\n• kemerdekaan\n\n By ${ownerName}`
	            if (!text) throw m.reply(er)
		        case 'cinta':
		        case 'rindu':
		        case 'mimpi':
		        case 'sendiri':
		        case 'sabar':
		        case 'kesedihan':
		        case 'pernikahan':
		        case 'kemerdekaan':
			    noapi.quotes(text.toLowerCase()).then(res => {
			    data = JSON.stringify(res)
		        json = JSON.parse(data)
			    let random = Math.floor(Math.random() * json.data.length)
			    hasil = json.data[random]
		        var { author, bio, quote } = hasil
			    m.reply(`“${quote}”\n\n${author} - ${bio}`)
		        })
		        break
case 'murothal': {
if (!text) return m.reply(`Mau juz yang keberapa?\n\n Example : ${command} 1`)
if (!args[0]) m.reply(mess.wait)
if (args[0] === "1") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SiNO' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "2") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8RJmQ' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "3") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFSrtF' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "4") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SXi3' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "5") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8RZm3' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "6") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/28MBohs' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "7") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRIZC' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "8") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bufF7o' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "9") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2byr1bu' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "10") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bHfyUH' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "11") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bHf80y' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "12") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bWnTby' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "13") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFTiKQ' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "14") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SUTA' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "15") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRQIM' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "16") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SegG' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "17") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brHsFz' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "18") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SCfc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "19") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFSq95' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "20") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brI1zc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "21") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8VcBO' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "22") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRxNP' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "23") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brItxm' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "24") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brHKw5' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "25") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brImlf' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "26") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRHF2' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "27") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRXno' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "28") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brI3ai' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "29") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRyBF' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "30") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFREcc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } 
}
break
      case 'quotes':
                 var asp = `Example : ${prefix + command} katabucin\n\nOpsi Tersedia:\n• katabucin\n• gombal\n• galau\n• dare\n• truth\n• renungan\n• motivasi\n\nBy ${ownerName}`
                 if (!text) throw m.reply(asp)
                 if (args[0] === "katabucin") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/katabucin.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "gombal") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/gombalan.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "galau") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/katagalau.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "dare") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/dare.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "truth") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/truth.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "renungan") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/renungan.json`)
                 result = pickRandom(anu)
                 Resta.sendMessage(m.chat, { image: { url: result }, caption: `Quotes ${command}` }, { quoted: m })              
                 } else if (args[0] === "motivasi") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/motivasi.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 }
                 break
      case 'pantun':
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/pantun.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 break
//CONVERTER MEDIA//
      case 'emojimix2':
		         if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	             if (!text) throw m.reply(`Example : ${prefix + command} 😅`) 
	             anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		         for (let res of anu.results) {
		         let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		         fs.unlinkSync(encmedia)
		         }
	             break
      case 'emojimix': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        let [emoji1, emoji2] = text.split`+`
		        if (!emoji1) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		        if (!emoji2) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		        anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		        for (let res of anu.results) {
		        let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		        fs.unlinkSync(encmedia)
		        }
	            }
	            break        
      case 'sticker': case 's': case 'stickergif': case 'sgif': {
                 //if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
				m.reply(mess.wait)
                let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
			m.reply(mess.wait)
                let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw m.reply(`*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`)
                }
                 }
                 break
      case 'swm': case 'stickerwm': case 'take': case 'wm':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!quoted) return m.reply('mana gambarnya')
       	     if (!args.join(" ")) return m.reply(`Example :\nswm Resta | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                Resta.downloadAndSaveMediaMessage(quoted, "gifee")
                Resta.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 15 detik!')
                let media = await quoted.download()
                let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                fs.unlinkSync(encmedia)
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                break
      case 'imagenobg':
      case 'removebg': case 'remove-bg':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	            if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = './src/remobg-'+getRandom('')
	            localFile = await Resta.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = './src/hremo-'+getRandom('.png')
	            m.reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            Resta.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	            fs.unlinkSync(localFile)
	            fs.unlinkSync(outputFile)
	            })
	            break
    case 'tomp3': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
  if (/document/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!quoted) throw m.reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  Resta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Resta.user.name}.mp3`}, { quoted : m })
  }
  break
default:
  if (budy.startsWith('=>')) {
    if (!isOwner) return m.reply(mess.botOwner); 
    try {
    const result = await eval(`(async () => { return ${budy.slice(3)} })()`);
    const formattedResult = JSON.stringify(result, null, 2);
    return m.reply(formattedResult);
    } catch (error) {
    return m.reply(util.format(error));
    }
    }
 
  if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))}}

if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(mess.botOwner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(util.format(err))
                        if (stdout) return m.reply(util.format(stdout))
                    })
                }

}
// Anti Tag ( FenZo||77+ )
/*
const listTag = owner.map(number => `${number}@s.whatsapp.net`)
if (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.participant) {
  const partiNum = m.message.extendedTextMessage.contextInfo.participant
  if (listTag.includes(partiNum)) {
    if (!m.isGroup) return
    if (m.key.fromMe) return
    Resta.readMessages(m.chat, m.sender, [m.key.id])
    Resta.sendImageAsSticker(m.chat, `https://telegra.ph/file/0c3184d777d56bfe77dab.png`, m, {packname: packname, author: author})
  }
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes(owner.map(number => `@${number}`))) {
if (!m.isGroup) return
if (m.key.fromMe) return
Resta.readMessages(m.chat, m.sender, [m.key.id])
Resta.sendImageAsSticker(m.chat, `https://telegra.ph/file/0c3184d777d56bfe77dab.png`, m, {packname: packname, author: author})
}*/
} catch (err) { 
console.log(err)
m.reply(util.format(err))

}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
