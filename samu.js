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
const api = '967708a41dbb7e1de3be0213'
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
├ *${prefix}menu4* (Comandos Herramientas)
├ *${prefix}menu5* (Comandos +18)
├ *${prefix}menu6* (Comandos para Logos)
├ *${prefix}menu7* (Comandos para el Creador)
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
╠              *MENU DE DESCARGAS*                ╣
╠═════════════════╝
║
╠ *${prefix}play* [nombre de la canción]
║ _Descarga un audio._
║
╠ *${prefix}playvid* [nombre de la canción]
║ _Descarga un video._
║
╠ *${prefix}playvidgif* [nombre de la canción]
║ _Descarga un video en forma de gif._
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
				

${bodyM} ${prefix}ig *(Fotos y videos de Instagram)*
${bodyM} ${prefix}twit *(videos de Twitter)*
${bodyM} ${prefix}mfire *(Link de mediafire)*

${bodyM} ${prefix}letra *(Busca la letra de una cancion)*
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
				data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
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
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=${api}&query=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.audio}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_audio = await getBuffer(get_result.audio)
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
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${api}&url=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.link.link}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el audio no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_audio = await getBuffer(get_result.link.link)
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
					get_result = await getJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${api}&url=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result.link.link}`)
					ini_txt = `Titulo : ${get_result.title}\n\n`
					ini_txt += `_Si el video no llega, puedes descargarlo mediante el siguiente link:_\n${short.result}`
					ini_buffer = await getBuffer(get_result.thumbnail)
					await samu330.sendMessage(from, ini_buffer, image, { quoted: fimg, caption: ini_txt, contextInfo: { "forwardingScore": 9999, "isForwarded": true } })
					get_video = await getBuffer(get_result.link.link)
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
				reply(mess.wait);
				query = args.join(' ')
				fakee = fs.readFileSync('./src/img.jpg')
				try {
					get_result = await getJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${api}&url=${query}`)
					get_result = get_result.result
					short = await getJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${api}&url=${get_result}`)
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
				reply(mess.wait);
				query = args.join(' ')
				const tiktokwm = await getBuffer(`https://api.lolhuman.xyz/api/tiktokwm?apikey=${api}&url=${query}`)
				samu330.sendMessage(from, tiktokwm, video, { mimetype: 'video/mp4', quoted: fvid })
			break

			case 'tiktokmusic':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length == 0) return reply(`*Agrega el link de tiktok.*\nPor ejemplo: ${prefix + command} https://vm.tiktok.com/ZMdvgJgM7/`)
				reply(mess.wait);
				query = args.join(' ')
				const tiktokmusic = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${api}&url=${query}`)
				samu330.sendMessage(from, tiktokmusic, audio, { mimetype: 'audio/mp4', quoted: faud })
			break
			
			case 'facebook':
			case 'fb':
				assistant = fs.readFileSync('./src/assistant.jpg')
				if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: mess.only.usrReg, thumbnail: assistant, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
				if (args.length < 1) return reply(`*Agrega el link del video de facebook.*`)
				if (!isUrl(args[0]) && !args[0].includes('facebook')) return reply('El link tiene que ser de facebook')
				teks = args.join(' ')
				reply(mess.wait)
				res = await fbDown(teks).catch(e => {
					reply(mess.ferr)
				})
				a = res[0]
				result = `
*Source:* ${a.source}
*Tamaño:* ${a.size}
*Calidad:* ${a.quality}
*Tipo:* ${a.type}
`
				sendFileFromUrl(a.thumb, image, { caption: result, quoted: fimg })
				sendFileFromUrl(a.link, video, { mimetype: 'video/mp4', quoted: fvid, filename: `${a.judul}.${a.type}` })
			break
		
			case 'pussy7':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
				  pussy7 = await axios.get('https://nekos.life/api/v2/img/pussy')
				  exec(`wget ${pussy7.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
					  if (err) return reply('error')
					  buffer = fs.readFileSync(rano)
					  samu330.sendMessage(from, buffer, sticker, {quoted: ftoko})
					  fs.unlinkSync(rano)
				  })
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
				
			case 'fordward':
				samu330.sendMessage(from, `${budy.slice(10)}`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true } })
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
			case 'tiktok1':
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
			

			case 'kick':
			

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
			
			case 'clearall':
				if (!isOwner && !itsMe) return await reply('Este comando solo puede ser usado por *Samu330* ⚙')
				for (let chat of totalChat) {
					await samu330.modifyChat(chat.jid, "delete")
				}
				await wa.sendFakeStatus(from, "Success clear all chat", "success")
				break

			case 'toimg':
			
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
			
			
				
			case 'ttp':
				if (args.length < 1) return reply('Y el texto?')
				var teks = encodeURIComponent(args.join(' '))
				const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
				samu330.sendMessage(from, ttp, sticker, { quoted: ftoko, contextInfo: { "forwardingScore": 999, "isForwarded": true } })
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

