const {
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

const fs = require('fs');
const FormData = require('form-data')
const request = require('request');
const moment = require("moment-timezone");
const ffmpeg = require('fluent-ffmpeg');
const os = require("os");
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const chalk = require('chalk');
const crypto = require("crypto-js");
const CryptoJS = require("crypto-js");
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { removeBackgroundFromImageBase64 } = require('remove.bg');
const { exec } = require('child_process');
const axios = require('axios');
const fetch = require('node-fetch');
const samuGg = require('google-it');
const samuGgImg = require('g-i-s');
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { sm330mfire } = require('./lib/mediafire.js')
const { covidworld } = require('./lib/covidworld.js')
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
const api = '4c69154700f597736c4b38e8'
const apivh = '2aba63b48dbe4e788cc43cd3e7fb1943'
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
			(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, { message: {
				"documentMessage": {
					"title": `Sam | Nexusᴮᴼᵀ\n${prefix}${command} ${q}`,
					'jpegThumbnail': fs.readFileSync('./src/fake.jpg')
				}
			},contextInfo: { "mentionedJid": memberr } }) : samu330.sendMessage(from, teks.trim(), extendedText, 

			{ quoted: sam, message: {
				"documentMessage": {
					"title": `Sam | Nexusᴮᴼᵀ\n${prefix}${command} ${q}`,
					'jpegThumbnail': fs.readFileSync('./src/fake.jpg')
				}
			},contextInfo: { "mentionedJid": memberr } })
			
		}
		const pushname = sam.key.fromMe ? samu330.user.name : sam.notify || sam.vname || sam.name || 'usuario'
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
			wait: '*Espera un momento por favor...*',
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
			message: { "audioMessage": { "mimetype": "audio/mp4", "caption": `Sam | Nexusᴮᴼᵀ`, 'jpegThumbnail': fs.readFileSync('./src/help.jpg') } }
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

		if (messagesC.includes("chat.whatsapp")) {
			if (!isGroup) return
			if (!isAntigp) return
			if (isAdmin) return reply('Tienes suerte, eres administrador y no te sacaré.')
			reply(`Link detectado ${sender.split("@")[0]} serás expulsado de este grupo.`)
			await sleep(4000)
			samu330.groupRemove(from, [sender])
		}


		///////////////////////FUNCIONES CREADAS POR SAMU330\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
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
├ *${prefix}menu3* (Comandos de Descargas)
├ *${prefix}menu4* (Comandos Convertidor)
├ *${prefix}menu5* (Comandos Creaciones)
├ *${prefix}menu6* (Comandos Entretenimiento)
├ *${prefix}menu7* (Comandos Información)
├ *${prefix}menu8* (Comandos Audios)
├ *${prefix}menu9* (Comandos Otros)
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
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
					mda = `
╔═════════════════╗
╠               *MENU MULTIMEDIA*               ╣
╠═════════════════╝
║
╠ *${prefix}caras*
║ _Etiqueta una imagen para detectar caras._
║
╠ *${prefix}imagen* [Palabra]
║ _Búsqueda de imágenes en Google._
║
╠ *${prefix}reversa*
║ _Etiqueta un video para ponerlo en reversa._
║
╠ *${prefix}sinfondo*
║ _Etiqueta una imagen para quitarle el fondo._
║
╠ *${prefix}sinfondo1*
║ _Etiqueta una imagen para quitarle el fondo._
║
╠ *${prefix}sinfondo2*
║ _Etiqueta una imagen para quitarle el fondo._
║
╠ *${prefix}wpbusca* [Palabra]
║ _Búsqueda de fondos de pantalla._
║
╟╼╾┤🖼️ Imágenes al azar 🖼️├╼╾
║
╠ *${prefix}blackpink*
║ _Imagen aleatoria de blackpink._
║
╠ *${prefix}bts*
║ _Imagen aleatoria de bts._
║
╠ *${prefix}elf*
║ _Imagen aleatoria de una elfo anime._
║
╠ *${prefix}estetic*
║ _Imagen aleatoria estética._
║
╠ *${prefix}neko*
║ _Imagen aleatoria de una neko-girl._
║
╠ *${prefix}neko1*
║ _Imagen aleatoria de una neko-girl._
║
╠ *${prefix}neko2*
║ _Imagen aleatoria de una neko-girl._
║
╠ *${prefix}waifu*
║ _Imagen aleatoria de una waifu._
║
╠ *${prefix}wallnime*
║ _Wallpaper aleatorio de anime._
║
╟╼╾┤🎧 Efectos para Audios 🎧├╼╾
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
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				stc = `
╔═════════════════╗
╠                *MENU DE STICKER*                ╣
╠═════════════════╝
║
╠ *${prefix}aimg*
║ _Convierte un sticker a imagen._
║
╠ *${prefix}agif*
║ _Convierte un sticker a gif._
║
╠ *${prefix}colores* [Texto]
║ _Genera un sticker de colores con tu texto._
║
╠ *${prefix}ger*
║ _Genera un sticker estilo Triggered_
║
╠ *${prefix}imagen* [Palabra]
║ _Búsqueda de imágenes en Google._
║
╠ *${prefix}renombrar*
║ _Etiqueta un sticker para renombrarlo._
║ _Sticker|WhatsApp_ 
║
╠ *${prefix}renombrarp* [Nombre|Autor]
║ _Etiqueta un sticker para renombrarlo._
║ _Nombre|Autor Personalizado._
║
╠ *${prefix}sinfondo*
║ _Etiqueta una imagen para quitarle el fondo._
║
╠ *${prefix}sinfondo1*
║ _Etiqueta una imagen para quitarle el fondo._
║
╠ *${prefix}sinfondo2*
║ _Etiqueta una imagen para quitarle el fondo._
║
╠ *${prefix}stickernobg*
║ _Etiqueta una imagen/gif/video._
║ _Para convertirlo en sticker sin fondo._
║
╠ *${prefix}sticker*
║ _Etiqueta una imagen/gif/video._
║ _Para convertirlo en sticker._
║
╠ *${prefix}stickerp* [Nombre|Autor]
║ _Etiqueta una imagen/gif/video._
║ _Para convertirlo en sticker personalizado._
║
╟╼╾┤🖼️ Sticker de Anime 🖼️├╼╾
║
╠ *${prefix}abrazo-sticker*
║ _Sticker aleatorio de un abrazo._
║
╠ *${prefix}abrazo1-sticker*
║ _Sticker aleatorio de un abrazo._
║
╠ *${prefix}abrazo2-sticker*
║ _Sticker aleatorio de un abrazo._
║
╠ *${prefix}alimentar-sticker*
║ _Sticker aleatorio al alimentar._
║
╠ *${prefix}bailar-sticker*
║ _Sticker aleatorio bailando._
║
╠ *${prefix}beso-sticker*
║ _Sticker aleatorio de un beso._
║
╠ *${prefix}beso1-sticker*
║ _Sticker aleatorio de un beso._
║
╠ *${prefix}bofetada-sticker*
║ _Sticker aleatorio de una bofetada._
║
╠ *${prefix}bullying-sticker*
║ _Sticker aleatorio de bullying._
║
╠ *${prefix}caricia-sticker*
║ _Sticker aleatorio de una caricia._
║
╠ *${prefix}chocalas-sticker*
║ _Sticker aleatorio de chocalas._
║
╠ *${prefix}cosquilla-sticker*
║ _Sticker aleatorio de cosquilla._
║
╠ *${prefix}despedida-sticker*
║ _Sticker aleatorio de despedida._
║
╠ *${prefix}feliz-sticker*
║ _Sticker aleatorio feliz._
║
╠ *${prefix}golpear-sticker*
║ _Sticker aleatorio golpe._
║
╠ *${prefix}guiño-sticker*
║ _Sticker aleatorio de un guiño._
║
╠ *${prefix}lamer-sticker*
║ _Sticker aleatorio lamer._
║
╠ *${prefix}manos-sticker*
║ _Sticker aleatorio de manos._
║
╠ *${prefix}matar-sticker*
║ _Sticker aleatorio matar._
║
╠ *${prefix}morder-sticker*
║ _Sticker aleatorio morder._
║
╠ *${prefix}neko-sticker*
║ _Sticker aleatorio de una neko-girl._
║
╠ *${prefix}presumir-sticker*
║ _Sticker aleatorio presumir._
║
╠ *${prefix}roche-sticker*
║ _Sticker aleatorio de roche._
║
╠ *${prefix}saludo-sticker*
║ _Sticker aleatorio de saludo._
║
╠ *${prefix}sonrisa-sticker*
║ _Sticker aleatorio de una sonrisa._
║
╠ *${prefix}sonrojarse-sticker*
║ _Sticker aleatorio sonrojarse._
║
╠ *${prefix}toque-sticker*
║ _Sticker aleatorio de un toque._
║
╠ *${prefix}toque1-sticker*
║ _Sticker aleatorio de un toque._
║
╠ *${prefix}verguenza-sticker*
║ _Sticker aleatorio de verguenza._
║
╟╼╾┤🖼️ Sticker al azar 🖼️├╼╾
║
╠ *${prefix}amongus-sticker*
║ _Sticker aleatorio de Among Us._
║
╠ *${prefix}anjing-sticker*
║ _Sticker aleatorio de Anjing._
║
╠ *${prefix}dado-sticker*
║ _Sticker aleatorio de un dado._
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

			case 'menug':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				gru = `
╔═════════════════╗
╠                *MENU DE GRUPOS*                ╣
╠═════════════════╝
║
╠ *${prefix}antibad*
║ _Evitar malas Palabras._
║
╠ *${prefix}addbad*
║ _Agregar malas palabras._
║
╠ *${prefix}delbad*
║ _Quitar malas palabras._
║
╠ *${prefix}listbad*
║ _Evitar malas Palabras._
║
╠ *${prefix}antilink*
║ _Evitar links._
║
╠ *${prefix}antigp*
║ _Evitar links de otros grupos._
║
╠ *${prefix}antileg*
║ _Evitar audios , contactos y_
║ _localizaciones._
║
║================================
║ 🔞 *COMANDOS +18:* ${prefix}+18
║================================
║
╠ *${prefix}nuevogrupo* [Nombre del grupo]
║ _Crear un grupo._
║
╠ *${prefix}link*
║ _Obtener link de invitación del grupo._
║
╠ *${prefix}entrabot* [Link del grupo]
║ _Agregar el bot a un grupo._
║
╠ *${prefix}salir*
║ _Salir del grupo._
║
╠ *${prefix}grupo* [abrir/cerrar]
║ _Abrir o cerrar mensajes del grupo._
║
╠ *${prefix}inspeccionar* [Link del grupo]
║ _Obtener datos de un grupo._
║
╠ *${prefix}añadir* [número sin el +]
║ _Lista de todos los usuarios._
║
╠ *${prefix}eliminar* @[tag]
║ _Elimina un usuario._
║
╠ *${prefix}notificar* [nombre]
║ _Agregar una notificación._
║
╠ *${prefix}contacto* @[tag/número|nombre]
║ _Compartir un contacto._
║
╠ *${prefix}top5* [tema]
║ _Lista de top5 al azar._
║
╠ *${prefix}nombre* [nombre]
║ _Cambiar el nombre del grupo._
║
╠ *${prefix}setdesc* [descripción]
║ _Agregar nueva descripción del grupo._
║
╠ *${prefix}todos*
║ _Lista de todos los usuarios._
║
╠ *${prefix}adminlist*
║ _Lista de todos los administradores._
║
╠ *${prefix}online*
║ _Lista de usuarios conectados._
║
╰──────────────
`
				samu330.sendMessage(from, gru, MessageType.text, {
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
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				desca = `
╔═════════════════╗
╠             *MENU DE DESCARGAS*            ╣
╠═════════════════╝
║
╠ *${prefix}play* [nombre de la canción]
║ _Descarga un audio._
║
╠ *${prefix}ytmp3* [link de youtube]
║ _Descarga un audio de youtube._
║
╠ *${prefix}ytmp4* [link de youtube]
║ _Descarga un video de youtube._
║
╠ *${prefix}fb* [link de facebook]
║ _Descarga un video de facebook._
║
╠ *${prefix}ig* [link de instagram]
║ _Descarga un video de instagram._
║
╠ *${prefix}twitter* [link de twitter]
║ _Descarga un video de twitter._
║
╠ *${prefix}titkok* [link de tiktok]
║ _Descarga un video sin marca de agua._
║
╠ *${prefix}tiktokwm* [link de tiktok]
║ _Descarga un video con marca de agua._
║
╠ *${prefix}tiktokmusic* [link de tiktok]
║ _Descarga la musica original del video._
║
╰──────────────				
`
				samu330.sendMessage(from, desca, MessageType.text, {
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

			case 'menu4':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				conve = `
╔═════════════════╗
╠             *MENU CONVERTIDOR*            ╣
╠═════════════════╝
║
╠ *${prefix}tomp3*
║ _Convierte un video en un audio._
║
╠ *${prefix}ytmp3* [link de youtube]
║ _Descarga un audio de youtube._
║
╠ *${prefix}ytmp4* [link de youtube]
║ _Descarga un video de youtube._
║
╠ *${prefix}fb* [link de facebook]
║ _Descarga un video de facebook._
║
╠ *${prefix}ig* [link de instagram]
║ _Descarga un video de instagram._
║
╠ *${prefix}twitter* [link de twitter]
║ _Descarga un video de twitter._
║
╠ *${prefix}titkok* [link de tiktok]
║ _Descarga un video sin marca de agua._
║
╠ *${prefix}tiktokwm* [link de tiktok]
║ _Descarga un video con marca de agua._
║
╠ *${prefix}tiktokmusic* [link de tiktok]
║ _Descarga la musica original del video._
║
╰──────────────				
`
				samu330.sendMessage(from, conve, MessageType.text, {
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
			
			case 'reg':
				assistant = fs.readFileSync('./src/assistant.jpg')
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
						samu330.sendMessage(from, assistant, image, { quoted: fdoc, caption: `*「 REGISTRO CORRECTO 」*\n\n*◦ Nombre : ${nombre}*\n*◦ Número : wa.me/${sender.split("@")[0]}*\n*◦ Edad : ${edad}*\n*◦ Hora De Registro : ${time}*\n*◦ SN : ${serialUser}*\n\n *📋Se ha registrado correctamente*\n\n*Para ver todos los comandos que acepta Sam | Nexusᴮᴼᵀ escribe el siguiente comando: ${prefix}menu*`,thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
					})
			break
			
			case 'reglas':
				reply(`*Hola, estas son las reglas que debes seguir para que no tengas ningún problema con el propietario del Bot.*\n\n1- _Mantén una conducta respetuosa._\n2- _Si vas a añadir el Bot a algún grupo, verifica que el grupo cumpla con el requisito de tener mínimo 5 integrantes._\n3- _❌ NO HAGAS SPAM DE COMANDOS ❌_ *Esto es enserio, puedes hacer que el Bot se apague.*\n4- _📵 NO HAGAS LLAMADAS POR WHATSAPP AL PROPIETARIO DEL BOT 📵_ *Serás bloqueado inmediatamente*\n5- _🕐 Espera el tiempo necesario cuando pidas alguna función, ya que algunas tardan en realizarse, no escribas el comando nuevamente hasta que el BOT te responda o te llegue un mensaje de error._\n\nPor favor cumple y respeta las reglas.`)
			break
		
			case 'caras':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
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

			case 'imagen':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} gato`)
				reply(`Por favor espera un momento mientras busco imágenes de ` + args.join(' '))
				ggimg = args.join(' ')
				res = await samuGgImg(ggimg, google)
				function google(error, result) {
					if (error) { return reply('_[ ! ] *Intentalo de nuevo.*_') }
					else {
						var gugIm = result
						var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
						sendFileFromUrl(random, image, { quoted: fimg, caption: `*🔍Busqueda de* _${ggimg}_` })
					}
				}
			break

			case 'reversa':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isQuotedVideo) return reply('*Por favor etiqueta un video con el comando.*')
				reply('*Espera un momento por favor...*')
				encmediav = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam;
				mediav = await samu330.downloadAndSaveMediaMessage(encmediav)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${mediav} -vf reverse -af areverse ${ran}`, (err) => {
					fs.unlinkSync(mediav)
					if (err) return reply(`Error: ${err}`)
					vre = fs.readFileSync(ran)
					samu330.sendMessage(from, vre, MessageType.video, { mimetype: 'video/mp4', quoted: fvid })
					fs.unlinkSync(ran)
				})
			break

			case 'sinfondo':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				imgbb = require('imgbb-uploader')
				if ((isMedia || isQuotedImage)) {
				const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
				const median = await samu330.downloadAndSaveMediaMessage(encmedianb)
				reply(mess.wait)
				sam330 = await imgbb('20a14861e4f7591f3dc52649cb07ae02', median);
				link = `${sam330.display_url}`;
				foto = `https://api.lolhuman.xyz/api/removebg?apikey=${api}&img=${link}`
				sendFileFromUrl(foto, image, {quoted: fimg })
				} else {
					reply('*Por favor etiqueta una imagen con el comando.*')
				}
			break
			
			case 'sinfondo1':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				imgbb = require('imgbb-uploader')
				if ((isMedia || isQuotedImage)) {
				const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
				const median = await samu330.downloadAndSaveMediaMessage(encmedianb)
				reply(mess.wait)
				sam330 = await imgbb('20a14861e4f7591f3dc52649cb07ae02', median);
				link = `${sam330.display_url}`;
				foto = `https://docs-jojo.herokuapp.com/api/remove-bg?url=${link}`
				sendFileFromUrl(foto, image, {quoted: fimg })
				} else {
					reply('*Por favor etiqueta una imagen con el comando.*')
				}
			break
			
			case 'sinfondo2':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if ((isMedia || isQuotedImage)) {
					const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const median = await samu330.downloadAndSaveMediaMessage(encmedianb)
					reply(mess.wait)
					keyrmbg = 'iWVtDDPrqmy9oWKDnRR7wPpp'
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
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} gatos`)
				reply(mess.wait)
				query = args.join(' ')
				get_result = await getJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${api}&query=${query}`)
				ini_buffer = await getBuffer(get_result.result)
				await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg })
			break

			case 'blackpink':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/blackpink?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break
			
			case 'bts':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/bts?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break
			
			case 'elf':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/elf?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break
			
			case 'estetic':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/estetic?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
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

			case 'neko1':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/neko?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break

			case 'neko2':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random2/neko?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break

			case 'waifu':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/waifu?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break

			case 'wallnime':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				foto = `https://api.lolhuman.xyz/api/random/wallnime?apikey=${api}`
				sendFileFromUrl(foto, image, {quoted: fimg })	
			break
			
			case 'ardilla':
				assistant = fs.readFileSync('./src/assistant.jpg')
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
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					ass = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					bas = await samu330.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break
			
			case 'grave':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					muk = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					gem = await samu330.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'hode':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					ho = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					de = await samu330.downloadAndSaveMediaMessage(ho)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${de} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(de)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'imut':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					im = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					ut = await samu330.downloadAndSaveMediaMessage(im)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${ut} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(ut)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break
			
			case 'slow':
			case 'lento':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					low = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					slo = await samu330.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'trigger':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (((isAudio && !sam.message.audioMessage) || isQuotedAudio) && args.length == 0) {
					tri = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					//reply(mess.wait)
					ger = await samu330.downloadAndSaveMediaMessage(tri)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${ger} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(ger)
						if (err) return reply('¡Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: faud })
						fs.unlinkSync(ran)
					})
				} else {
					reply('*Por favor etiqueta un audio con el comando.*')
				}
			break

			case 'aimg':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isQuotedSticker) return reply(`Por favor etiqueta un sticker con el comando.`)
				if (sam.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true) {
					reply(`Este comando solo funciona con stickers estáticos, para convertir un sticker animado a gif, usa: ${prefix}agif`)
				} else {
					var media1 = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					var media2 = await samu330.downloadAndSaveMediaMessage(media1)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
						fs.unlinkSync(media2)
						if (err) return reply('*Algo salio mal, intenta de nuevo.*')
						
						buffer = fs.readFileSync(ran)
						samu330.sendMessage(from, buffer, MessageType.image, { quoted: fimg })
						fs.unlinkSync(ran)
						
					})
				}
			break

			case 'agif':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ger = isQuotedSticker ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
				var imgbb = require('imgbb-uploader')
				reply(mess.wait)
				owgi = await samu330.downloadAndSaveMediaMessage(ger)
				data = await imgbb("20a14861e4f7591f3dc52649cb07ae02", owgi)
				anu = await getJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${api}&img=${data.display_url}`)
				result = await getBuffer(anu.result)
				samu330.sendMessage(from, result, video, { quoted: ftoko, mimetype: 'video/gif' })
			break
			
			case 'colores':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply(`*Agrega el texto que deseas convertir en sticker de colores.*\nPor ejemplo: ${prefix + command} gato`)
				var teks = encodeURIComponent(args.join(' '))
				const attp1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
				samu330.sendMessage(from, attp1, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
			break

			case 'ger':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !sam.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					reply(mess.wait)
					owgi = await samu330.downloadAndSaveMediaMessage(ger)
					anu = await imgbb('20a14861e4f7591f3dc52649cb07ae02', owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply('*Algo salio mal, intenta de nuevo.*')
						nobg = fs.readFileSync(rano)
						samu330.sendMessage(from, nobg, sticker, { quoted: ftoko })
						fs.unlinkSync(rano)
					})

				} else {
					reply('*Por favor etiqueta una imagen con el comando.*')
				}
			break

			case 'renombrar':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isQuotedSticker) return reply(`*Por favor etiqueta un sticker con el comando.*`)
				const encmediia = JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const meidia = await samu330.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('error')
					wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), ftoko)
					fs.unlinkSync(meidia)
				})
			break

			case 'renombrarp':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isQuotedSticker) return reply(`*Por favor etiqueta un sticker con el comando.*\nPor ejemplo: ${prefix + command} nombre|autor`)
				const stsam = body.slice(11)
				if (!stsam.includes('|')) return reply(`*Por favor etiqueta un sticker con el comando.*\nPor ejemplo: ${prefix + command} nombre|autor`)
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

			case 'stickernobg':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				imgbb = require('imgbb-uploader')
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sam
				const media = await samu330.downloadAndSaveMediaMessage(encmedia)
				reply(mess.wait)
				nobg = await imgbb('20a14861e4f7591f3dc52649cb07ae02', media);
				link = `${nobg.display_url}`;
				
				//ini_buffer = `https://api.lolhuman.xyz/api/removebg?apikey=${api}&img=${link}`
				
				get_result = await getJson(`https://api.vhtear.com/removebgwithurl?link=${link}&apikey=${apivh}`)
				get_result = get_result.result
				short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.image}`)
		
				const attp1 = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${api}&img=${short.result}`)
				samu330.sendMessage(from, attp1, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				
			
				} else {
					reply('*Por favor etiqueta una imagen con el comando.*')
				}
				
				
			break
			case 'sss':
				case 'ssss':
					if ((isMedia || isQuotedImage) && args.length === 0) {
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
						samu330.sendImageAsSticker(from, imageBase64)
						.then(() => {
							reply(from, 'Here\'s your sticker')
							console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
						})
					} else if (args[0] === 'nobg') {
						if (isMedia || isQuotedImage) {
							try {
							var mediaData = await decryptMedia(message, uaOverride)
							var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
							var base64img = imageBase64
							var outFile = './media/noBg.png'
							// kamu dapat mengambil api key dari website remove.bg dan ubahnya difolder settings/api.json
							var result = await removeBackgroundFromImageBase64({ base64img, apiKey: apiNoBg, size: 'auto', type: 'auto', outFile })
							await fs.writeFile(outFile, result.base64img)
							await aruga.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
							} catch(err) {
							console.log(err)
							   await aruga.reply(from, 'Maaf batas penggunaan hari ini sudah mencapai maksimal', id)
							}
						}
					} else if (args.length === 1) {
						if (!isUrl(url)) { await aruga.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
						aruga.sendStickerfromUrl(from, url).then((r) => (!r && r !== undefined)
							? aruga.sendText(from, 'Maaf, link yang kamu kirim tidak memuat gambar.')
							: aruga.reply(from, 'Here\'s your sticker')).then(() => console.log(`Sticker Processed for ${processTime(t, moment())} Second`))
					} else {
						await aruga.reply(from, `Tidak ada gambar! Untuk menggunakan ${prefix}sticker\n\n\nKirim gambar dengan caption\n${prefix}sticker <biasa>\n${prefix}sticker nobg <tanpa background>\n\natau Kirim pesan dengan\n${prefix}sticker <link_gambar>`, id)
					}
					break	
	
		
			case 'sticker':
			case 's':
			case 'stiker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
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
					reply(mess.wait)
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
					reply(`*Por favor etiqueta una imagen/video/gif con el comando.*\nNota: El video/gif no debe de durar mas de 10 segundos.`)
				}
			break

			case 'stickerp':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (isMedia && !sam.message.videoMessage || isQuotedImage) {
					if (!arg.includes('|')) return reply(`*Envía o etiqueta una imagen con el comando.*\nPor ejemplo: *${prefix + command} nombre|autor`)
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
					if (!arg.includes('|')) return reply(`*Envía o etiqueta una imagen con el comando.*\nPor ejemplo: ${prefix + command} nombre|autor`)
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
					const media = await samu330.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					const packname1 = arg.split('|')[0]
					const author1 = arg.split('|')[1]
					exif.create(packname1, author1, `stickwm_${sender}`)
					reply(mess.wait)
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
					reply(`*Por favor etiqueta una imagen/video/gif con el comando, agregando también nombre|autor*\nNota: El video/gif no debe de durar mas de 10 segundos.`)
				}
			break

			case 'abrazo-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/cuddle?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'abrazo1-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random2/cuddle?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'abrazo2-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/glomp?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break
			
			case 'alimentar-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random2/feed?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'bailar-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/dance?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break
			
			case 'beso-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/kiss?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'beso1-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random2/kiss?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'bofetada-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/slap?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'bullying-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/bully?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'caricia-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/pat?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'chocalas-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/highfive?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break
			
			case 'cosquilla-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random2/tickle?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'despedida-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/wave?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'feliz-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/happy?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'golpear-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/bonk?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'guiño-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/wink?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'lamer-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/lick?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'manos-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/handhold?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'matar-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/kill?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'morder-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/bite?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'neko-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random2/ngif?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'presumir-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/smug?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'roche-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/blush?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break
			
			case 'saludo-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/wave?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'sonrisa-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/smile?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break
			
			case 'sonrojarse-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/blush?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'toque-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/poke?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break
			
			case 'toque1-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random2/poke?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'verguenza-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				ranp = getRandom('.gif')
      			rano = getRandom('.webp')
				reply(mess.wait)
				exec(`wget https://api.lolhuman.xyz/api/random/cringe?apikey=${api} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  		fs.unlinkSync(ranp)
					if (err) return reply('error')
					buffer = fs.readFileSync(rano)
					samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					fs.unlinkSync(rano)
				})
			break

			case 'amongus-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				const amongusattp1 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${api}`)
				samu330.sendMessage(from, amongusattp1, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
			break

			case 'anjing-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				const anjingattp1 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=${api}`)
				samu330.sendMessage(from, anjingattp1, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
			break
			
			case 'dado-sticker':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				reply(mess.wait)
				const dadoattp1 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=${api}`)
				samu330.sendMessage(from, dadoattp1, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
			break

			case 'antibad':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escribe *1* para activar.')
				if (args[0] === '1') {
					if (isBadWord) return reply('*Ya está activo.*')
					badword.push(from)
					fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
					reply(`*Anti-bad [ Activado ] ✔️*`)
					reply(`*Las personas que envíen una mala palabra serán eliminadas.* _Para ver la lista de malas palabras usa el comando: ${prefix}listbad_`)
				} else if (args[0] === '0') {
					var ini = badword.indexOf(from)
					badword.splice(ini, 1)
					fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
					reply(`*Anti-bad [ Desactivado ] ✔️*`)
				} else {
					reply('*1 para activar, 0 para desactivar.*')
				}
			break
	
			case 'addbad':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply(`Escribe ${prefix}addbad [palabra]. Ejemplo: ${prefix}addbad puto`)
				const bw = q
				bad.push(bw)
				fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
				reply('Se añadio con éxito.')

			break

			case 'delbad':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isOwner) return reply(mess.only.ownerB)
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply(`Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad hola`)
				let dbw = q
				bad.splice(dbw)
				fs.writeFileSync('./src/bad.json', JSON.stringify(bad))
				reply('Se quito con éxito.')

			break

			case 'listbad':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				let lbw = `Lista de malas palabras.\nTotal : ${bad.length}\n`
				for (let i of bad) {
					lbw += `◦ ${i.replace(bad)}\n`
				}
				await reply(lbw)
			break

			case 'antilink':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escriba *1* para activar.')
				if (args[0] === '1') {
					if (isAntiLink) return reply('*Ya está activo.*')
					antilink.push(from)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					reply('*Anti-link [ Activado ] ✔️*')
					reply(`Los miembros que manden un link serán eliminados. *Nota:* _CUALQUIER TIPO DE LINK._`)
				} else if ((args[0]) === '0') {
					var ini = antilink.indexOf(from)
					antilink.splice(ini, 1)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					reply('*Anti-link [ Desactivado ] ✔️*')
				} else {
					reply('*1 para activar, 0 para desactivar.*')
				}
			break
		
			case 'antigp':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escriba *1* para activar.')
				if (args[0] === '1') {
					if (isAntigp) return reply('*Ya está activo.*')
					antigp.push(from)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
					reply('*Anti-link de grupos [ Activado ] ✔️*')
					reply(`Los miembros que manden un link de otro grupo serán eliminados.`)
				} else if ((args[0]) === '0') {
					var ini = antigp.indexOf(from)
					antigp.splice(ini, 1)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antigp))
					reply('*Anti-link de grupos [ Desactivado ] ✔️*')
				} else {
					reply('*1 para activar, 0 para desactivar.*')
				}
			break

			case 'antileg':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escriba *1* para activar.')
				if (args[0] === '1') {
					if (isAntiLeg) return reply('Ya esta activo.')
					legion.push(from)
					fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
					reply('*Antilegiones [ Activado ] ✔️*')
				} else if ((args[0]) === '0') {
					var ini = legion.indexOf(from)
					legion.splice(ini, 1)
					fs.writeFileSync('./src/sm330Leg.json', JSON.stringify(legion))
					reply('*Antilegiones [ Desactivado ] ✔️*')
				} else {
					reply('*1 para activar, 0 para desactivar.*')
				}
			break

			case '+18':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (args.length < 1) return reply('Escribe *1* para activar.')
				if (args[0] === '1') {
					if (isNsfw) return reply('*Ya está activo.*')
					nsfw.push(from)
					fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
					reply(`+18 *[ Activado ]*`)
				} else if (args[0] === '0') {
					var ini = nsfw.indexOf(from)
					nsfw.splice(ini, 1)
					fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
					reply(`+18 *[ Desactivado ]*`)
				} else {
					reply('*1 para activar, 0 para desactivar.*')
				}
			break

			case 'nuevogrupo':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				const nombregc = args.join(' ')
				if (!nombregc) return reply('*Por favor escribe el nombre que quieras que tenga el grupo.*')
				const group = await samu330.groupCreate(`${nombregc}`, [sender])
				reply(`*EL GRUPO FUE CREADO CORRECTAMENTE CON EL NOMBRE:*\n\n*${nombregc}*\n\nId del grupo: ${group.gid}`)
				samu330.sendMessage(group.gid, "¡Hola mundo!", MessageType.text, {
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

			case 'link':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				var link = await wa.getGroupInvitationCode(from)
				await wa.sendFakeStatus(from, link, "El lik de este grupo es: ")
			break

			case 'entrabot':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				linkgp = args.join(' ')
				if (!linkgp) return reply('Falta el link del grupo.')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Este no es un link de WhatsApp...*')
				var eb = q.split('https://chat.whatsapp.com/')[1]
				var { id } = await samu330.query({ 
				json: ["query", "invite", eb],
				expect200:true })

				samu330.query({
					json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
				})
				reply('Ya entre al grupo. 😉')
				samu330.sendMessage(id, `*¡Hola!* \nSoy Sam, me han designado como *BOT* para este grupo.🤖\n\n*Por favor lee mis reglas:* \n${prefix}reglas\n\nPor favor síguelas o atente a las consecuencias. ⚠\n*Quedo a su disposición, no me hagan sentir mal.... porque yo también tengo sentimientos. 😣*`, MessageType.text, {
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

			case 'salir':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Nexus* ⚙')
				if (!isGroup) return await reply(mess.only.group)
				reply(`Saldre de este grupo: ${groupName} en 3 segundos`).then(async () => {
					await help.sleep(3000)
					await samu330.groupLeave(from)
				})
			break

			case 'grupo':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				if (args[0] === 'abrir') {
					samu330.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
						wa.sendFakeStatus(from, "*Grupo abierto.*", "GROUP SETTING")
					})
				} else if (args[0] === 'cerrar') {
					samu330.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
						wa.sendFakeStatus(from, "*Grupo cerrado.*", "GROUP SETTING")
					})
				} else {
					await reply(`Por ejemplo: ${prefix}${command} abrir/cerrar`)
				}
			break

			case 'inspeccionar':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				linkgpi = args.join(' ')
				if (!linkgpi) return reply('Falta el link del grupo.')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Este no es un link de WhatsApp...*')
				if (!q) return reply('Falta el link del grupo.')
				sp = args[0]
				jids = []
				var net = sp.split('https://chat.whatsapp.com/')[1]
				if (!net) return reply('Por favor aegurate que el link sea de un grupo de whatsapp: *https://whatsapp.com/....*')
				let { owner,subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation } = await samu330.query({
					json: ["query", "invite", net],
					expect200: true
				})
				let insSm = `_*Inspección de Grupo*_

*° Creador del grupo:* ${owner ? ` @${owner.split('@')[0]}` : ''}

*° Nombre del Grupo:* _${subject}_

*° Fecha de creación:* ${Date(creation * 1000)}

*° Total de Miembros:* ${size}

${desc ? `*° Descripción:* ${desc}` : '*° Descripción:* Sin descripción'}

*° Id de la Descripción:* ${descId}

${descOwner ? `*° Descripción cambiada por:* @${descOwner.split('@')[0]}` : '*° Descripción cambiada por:* -'}\n\n*° Fecha*: ${descTime ? `${Date(descTime * 1000)}` : '-'}\n\n*° Contactos agendados*\n`
				for (let y of participants) {
					insSm += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
					jids.push(`${y.id.replace(/@c.us/g, '@s.whatsapp.net')}`)
				}
				jids.push(`${owner ? `${owner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`)
				jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`)
				samu330.sendMessage(from, insSm, MessageType.text, { quoted: fdoc })
			break

			case 'añadir':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Falta agregar el número de celular.')
				if (args[0].startsWith('99')) return reply('Utiliza el código de pais.')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					samu330.groupAdd(from, [num])
				} catch (e) {
					console.log('Error:', e)
					return samu330.sendMessage(from, 'Modo privado.', MessageType.text)
				}
			break

			case 'eliminar':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply(mess.only.group)
				if (!isAdmin) return reply(mess.only.admin)
				if (!botAdmin) return reply(mess.only.Badmin)
				if (sam.message.extendedTextMessage != undefined) {
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					if (!mentioned) return reply(`*Debes agregar el tag del usuario.*\nPor ejemplo: ${prefix + command} @usuario\nTambién puedes etiquetar un mensaje del usuario a eliminar.`)
					await wa.FakeTokoForwarded(from, `Adios...`, '')
					await sleep(5000)
					if (mentionUser.length == 1)
						samu330.groupRemove(from, mentionUser)
					//samu330.groupRemove(from, mentioned)
				} else {
					await wa.FakeTokoForwarded(from, `Adios...`, '')
					await sleep(5000)
					samu330.groupRemove(from, mentioned)
				}
			break

			case 'notificar':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isAdmin) return reply(mess.only.admin)
				samu330.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('Escribe un mensaje.')
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

			case 'contacto':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!itsMe) return reply('Este comando solo puede ser usado por *Nexus* ⚙')
				argz = arg.split('|')
				if (!argz) return reply(`Usa ${prefix}contacto @(tag/número)|nombre`)
				if (sam.message.extendedTextMessage != undefined) {
					mentioned = sam.message.extendedTextMessage.contextInfo.mentionedJid
					wa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					wa.sendKontak(from, argz[0], argz[1])
				}
			break

			case 'top5':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return reply('*Este comando solo puede usarse en grupos🤕')
				if (args.length < 1) return reply('Escribe un tema.')
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
*Los más destacados:*\n\n1= @${o1.jid.split('@')[0]}\n\n2=@${o2.jid.split('@')[0]}\n\n3=@${o3.jid.split('@')[0]}\n\n4= @${o4.jid.split('@')[0]}\n\n5= @${o5.jid.split('@')[0]}\n\n\n_Top 5_ *${top5}* en este grupo.`
				member.push(o1.jid)
				member.push(o2.jid)
				member.push(o3.jid)
				member.push(o4.jid)
				member.push(o5.jid)
				mentions(teks, member, true)
			break
			
			case 'nombre':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escribe un nombre.')
				var newName = args.join(" ")
				samu330.groupUpdateSubject(from, newName).then(() => {
					wa.sendFakeStatus(from, "El nombre del grupo se ha cambiado a: " + newName, "GROUP SETTING")
				})
			break

			case 'setdesc':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (!isGroup) return await reply(mess.only.group)
				if (!isAdmin) return await reply(mess.only.admin)
				if (!botAdmin) return await reply(mess.only.Badmin)
				if (args.length < 1) return reply('Escribe una descripción.')
				var newDesc = args.join(" ")
				samu330.groupUpdateDescription(from, newDesc).then(() => {
					wa.sendFakeStatus(from, "La descripción del grupo se ha cambiado a: " + newDesc, "GROUP SETTING")
				})
			break

			case 'todos':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
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
				mentions('[  *Lista de todos los usuarios* ]\n┏━━━━━━━━━━━━━━━━━━━\n┠ ►' + teks + '┗━━━━━━━━━━━━━━━━━━━', members_id, true)

			break

			case 'adminlist':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				var textt = msg.admin(groupAdmins, groupName)
				await wa.sendFakeStatus(from, textt, "Lista de administradores", groupAdmins)
			break
			
			case 'online':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
				let online = [...Object.keys(samu330.chats.get(ido).presences), samu330.user.jid]
				samu330.sendMessage(from, 'Lista de usuarios en línea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, {
					quoted: fdoc,
					contextInfo: { mentionedJid: online }
				})
			break

			case 'play':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} Green day Holiday`)
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.vhtear.com/ytmp3?query=${query}&apikey=${apivh}`)
					get_result = get_result.result
					//short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.mp3}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					//ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link:_\n${get_result.mp3}`
					ini_buffer = await getBuffer(get_result.image)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_audio = await getBuffer(get_result.mp3)
					await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', quoted: faud })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'playvid':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} Green day Holiday`)
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${api}&query=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.video}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_video = await getBuffer(get_result.video)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'playvidgif':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega lo que deseas buscar.*\nPor ejemplo: ${prefix + command} Green day Holiday`)
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${api}&query=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.video}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fvid, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_video = await getBuffer(get_result.video)
					await samu330.sendMessage(from, get_video, video, { mimetype: Mimetype.gif, filename: `${get_result.title}.mp4`, quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'ytmp3':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link de youtube.*\nPor ejemplo: ${prefix + command} https://youtu.be/z5YonNBmNXI`)
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					//get_result = await getJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${api}&url=${query}`)
					get_result = await getJson(`https://api.vhtear.com/ytdl?link=${query}&apikey=${apivh}`)
					get_result = get_result.result
					//short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.link.link}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					//ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link:_\n${get_result.UrlMp3}`
					ini_buffer = await getBuffer(get_result.imgUrl)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_audio = await getBuffer(get_result.UrlMp3)
					await samu330.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', quoted: faud })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'ytmp4':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link de youtube.*\nPor ejemplo: ${prefix + command} https://youtu.be/z5YonNBmNXI`)
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					//get_result = await getJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${api}&url=${query}`)
					get_result = await getJson(`https://api.vhtear.com/ytdl?link=${query}&apikey=${apivh}`)
					get_result = get_result.result
					//short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.link.link}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					//ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link:_\n${get_result.UrlVideo}`
					ini_buffer = await getBuffer(get_result.imgUrl)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_video = await getBuffer(get_result.UrlVideo)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'tomp3':
			case 'toaudio':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				samu330.updatePresence(from, Presence.recording)
				if (!isQuotedVideo) return reply('*Por favor etiqueta un video con el comando.*')
				reply(mess.wait);
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

			case 'tiktok':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link de tiktok.*\nPor ejemplo: ${prefix + command} https://vm.tiktok.com/ZMdvgJgM7/`)
				if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('*El link tiene que ser de tiktok.*')
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${api}&url=${query}`)
					get_result = get_result.result
					get_video = await getBuffer(get_result)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'tiktokwm':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link de tiktok.*\nPor ejemplo: ${prefix + command} https://vm.tiktok.com/ZMdvgJgM7/`)
				if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('*El link tiene que ser de tiktok.*')
				reply(mess.wait);
				query = args.join(' ')
				try {
					const tiktokwm = await getBuffer(`https://api.lolhuman.xyz/api/tiktokwm?apikey=${api}&url=${query}`)
					samu330.sendMessage(from, tiktokwm, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'tiktokmusic':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link de tiktok.*\nPor ejemplo: ${prefix + command} https://vm.tiktok.com/ZMdvgJgM7/`)
				reply(mess.wait);
				query = args.join(' ')
				try {
					const tiktokmusic = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${api}&url=${query}`)
					samu330.sendMessage(from, tiktokmusic, audio, { mimetype: 'audio/mp4', quoted: faud })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'facebook':
			case 'fb':
			case 'fbvideo':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link del video de facebook.*\nPor ejemplo: ${prefix + command} Link_video_facebook`)
				if (!isUrl(args[0]) && !args[0].includes('facebook')) return reply('*El link tiene que ser de facebook.*')
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.vhtear.com/fbdl?link=${query}&apikey=${apivh}`)
					get_result = get_result.result
					get_video = await getBuffer(get_result.VideoUrl)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'instagram':
			case 'ig':
			case 'igvideo':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link del video de instagram.*\nPor ejemplo: ${prefix + command} Link_video_instagram`)
				if (!isUrl(args[0]) && !args[0].includes('instagram')) return reply('*El link tiene que ser de instagram.*')
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.vhtear.com/instadl?link=${query}&apikey=${apivh}`)
					get_result = get_result.result
					get_video = await getBuffer(get_result.post.urlDownload)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
			break

			case 'twitter':
			case 'twvideo':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link del video de twitter.*\nPor ejemplo: ${prefix + command} Link_video_twitter`)
				if (!isUrl(args[0]) && !args[0].includes('twitter')) return reply('*El link tiene que ser de twitter.*')
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.vhtear.com/twitter?link=${query}&apikey=${apivh}`)
					get_result = get_result.result
					get_video = await getBuffer(get_result.urlVideo)
					await samu330.sendMessage(from, get_video, video, { mimetype: 'video/mp4', quoted: fvid })
				} catch {
					reply(`*Ocurrió un problema, puedes intentarlo nuevamente más tarde.*`)
				}
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
				if (!itsMe) return reply('Este comando solo puede ser usado por *Nexus* ⚙')
				if (args.length < 1) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
				if (!arg.split('|')) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
				exif.create(q.split('|')[0], q.split('|')[1])
				reply(`*El nombre de paquete de Stiker a cambiado a:* _${arg.split('|')[0]}\n*Y el autor a:* ${arg.split('|')[1]}`)
			break
			
			default:
				if (body.startsWith(">")) {
					if (!itsMe) return await reply('Este comando solo puede ser usado por *Nexus* ⚙')
					return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
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

