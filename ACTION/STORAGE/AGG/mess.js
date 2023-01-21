module.exports = async (sock, m) => {
try{
const botNumber = sock.decodeJid(sock.user.id)
try{
var setBahasa = db.data.settings[botNumber].bahasa
} catch {
var setBahasa = "english"
}
if (setBahasa == "english") {
var mess = {
   wait: "_𝙒𝙖𝙞𝙩 𝘼 𝙈𝙞𝙣𝙪𝙩𝙚 シ_",
   success: "_𝙎𝙪𝙘𝙘𝙚𝙨𝙨シ_",
   on: "Already activated", 
   off: "Already off", 
   input: "Reply message/Tag user/Number",
   query: {
       text: "Text?",
       link: "Link?",
       cmd: "Commands?",
   },
   error: {
       fitur: "I'm sorry sis, there's an error feature, please chat with the bot developer so that it can be fixed immediately", 
       link: "Error link!"
   }, 
   expired: {
       owner: "Your time to be owner has run out, please chat owner",
       premium: "Your time to be premium has run out, please chat owner",
       sewa: "The lease period for this group has expired, the bot will leave automatically if you want to extend the chat owner's lease period"
   },
   time: {
       seconds: "seconds",
       minutes: "minutes",
       hours: "hours",
       days: "days",
       weeks: "weeks", 
       months: "months"
   },
   reply: {
       sticker: "Reply sticker!", 
       image: "Reply image!",
       audio: "Reply audio!",
       video: "Reply video!",
       viewonce: "Reply view once!",
       document: "Reply file!",
       message: "Reply message"
   },
   only: {
       prem: "_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙗𝙮 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙪𝙨𝙚𝙧𝙨シ_",
       sewa: "_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙞𝙣 𝙨𝙚𝙬𝙖シ_",
       limit: "your limit has run out, please chat with the owner to buy a limit",
       group: "_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙞𝙣 𝙜𝙧𝙤𝙪𝙥シ_",
       chats: "_𝙊𝙧𝙙𝙚𝙧𝙨 𝙖𝙧𝙚 𝙥𝙧𝙞𝙫𝙖𝙩𝙚 𝙤𝙣𝙡𝙮シ_",
       owner: "_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙗𝙮 𝙤𝙬𝙣𝙚𝙧シ_",
       admin: "_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙗𝙮 𝙖𝙙𝙢𝙞𝙣シ_",
       badmin: "_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙞𝙛 𝙩𝙝𝙚 𝙗𝙤𝙩 𝙞𝙨 𝙖𝙣 𝙖𝙙𝙢𝙞𝙣シ_"
   },
   security: {
       spam: {
          banned: "You have been banned for spamming", 
          detect: "You are detect spam", 
       },
       antilink: {
          detect: "*「 LINK DETECTED 」*\n\nYou send the link sorry you will be kicked"
       },
       antilinkgc: {
          detect: "*「 LINK GROUP DETECTED 」*\n\nYou send the link groups sorry you will be kicked"
       },
       antilinkytchannel: {
          detect: "*「 LINK YOUTUBE CHANNEL DETECTED 」*\n\nYou send the link youtube channel sorry you will be kicked"
       },
       antilinkytvideo: {
          detect: "*「 LINK YOUTUBE VIDEO DETECTED 」*\n\nYou send the link youtube video sorry you will be kicked"
       },
       antilinkfb: {
          detect: "*「 LINK FACEBOOK DETECTED 」*\n\nYou send the link facebook sorry you will be kicked"
       },
       antilinkig: {
          detect: "*「 LINK INSTAGRAM DETECTED 」*\n\nYou send the link instagram sorry you will be kicked"
       },
       antilinktele: {
          detect: "*「 LINK TELEGRAM DETECTED 」*\n\nYou send the link telegram sorry you will be kicked"
       },
       antilinkwa: {
          detect: "*「 LINK WHATSAPP DETECTED 」*\n\nYou send the link whatsapp sorry you will be kicked"
       },
       antilinktiktok: {
          detect: "*「 LINK TIKTOK DETECTED 」*\n\nYou send the link tiktok sorry you will be kicked"
       },
       antitoxic: {
          detect: "*「 TOXIC DETECTED 」*\n\nYou send the message toxic sorry you will be kicked"
       },
       antisange: {
          detect: "*「 SANGE DETECTED 」*\n\nYou send the message sange sorry you will be kicked"
       },
       antivirtex: {
          detect: "*「 VIRTEX DETECTED 」*\n\nYou send the virtex sorry you will be kicked"
       },
       antitag: {
          detect: "*「 TAG MEMBERS DETECTED 」*\n\nYou tag the members sorry you will be kicked"
       },
       antinsfw: {
          detect: "*「 NSFW DETECTED 」*\n\nYou send the nfsw sorry you will be kicked"
       },
       antilinktwitter: {
          detect: "*「 LINK TWITTER DETECTED 」*\n\nYou send the link twitter sorry you will be kicked"
       },
       blockcmd: {
          detect: (command) => `${command} commands has been blocked due to an error`
       },
       simi: "l don't understand",
       izin: "Permission received", 
       afk: {
          detect: "don't bother him he's afk", 
          done: "you have come back from afk", 
       },
       cmd: {
          detect: (prefix, command, matches) => `Commands ${command} not found maybe what it means is the ${prefix + matches.bestMatch.target.toLowerCase()}`
       },
       anticall: {
          text1: "system will automatically block!\nDon't call bots!\nPlease contact the owner to open it", 
          text2: (number) => `It has been detected that @${number.split("@")[0]} has called a bot`
       }, 
       game: {
          text1: "Congratulations you managed to answer correctly\nAnd managed to get 5000 balance", 
          text2: (teks) => `Time out the answer is ${teks}`
       },
       anonymous: {
          text: "Partner not found\nYou have left room anonymous"
       }
   },
   cmd: {
       join: {
          linkgc: "it's not a link group", 
       },
       bc: {
          text: (data) => `Success send broadcast message to ${data.length} chats`
       },
       bcgc: {
          text: (data) => `Success send broadcast message to ${data.length} groups chats`
       },
       bcpc: {
          text: (data) => `Success send broadcast message to ${data.length} chats`
       },
       getcase: {
          text: "Case not found"
       },
       culik: {
          linkgc: "it's not a link group", 
          success: (groupName) => `Success kidnapping members in the group ${groupName}` 
       }, 
       ban: {
          on: "Already banned", 
          success: (number) => `Success banned @${number.split("@")[0]}` 
       },
       unban: {
          on: "Already unbanned", 
          success: (number) => `Success unbanned @${number.split("@")[0]}` 
       },
       block: {
          on: "Already block", 
          success: (number) => `Success block @${number.split("@")[0]}` 
       },
       unblock: {
          on: "Already unblock", 
          success: (number) => `Success unblock @${number.split("@")[0]}` 
       },
       blockcmd: {
          on: "Already block commands", 
          success: (teks) => `Success block commands ${teks}` 
       },
       unblockcmd: {
          on: "Already unblock commands", 
          success: (teks) => `Success unblock commands ${teks}` 
       },
       setppbot: {
          text: (prefix, command) => `Use photos or Reply photos with captions ${prefix + command}`
       },
       setbio: {
          text: (teks) => `Success changed bio to ${teks}`
       },
       setnoowner: {
          query: "Number?",
          number: "Use country code", 
          text: (teks) => `Success changed owner number to ${teks}`
       }, 
       setnamaowner: {
          text: (teks) => `Success changed owner name to ${teks}`
       },
       setnamabot: {
          text: (teks) => `Success changed bot name to ${teks}`
       },
       setmenu: {
          text: (teks) => `Success changed the appearance of the bot menu to ${teks}`
       },
       setdoc: {
          text: (teks) => `Success changed documents to ${teks}`
       },
       setquoted: {       
          text: (teks) => `Success changed quoted to ${teks}`
       },
       setcopyright: {
          text: (teks) => `Success changed copyright to ${teks}`
       },
       settextreply: {
          text: (teks) => `Success changed text reply to ${teks}`
       },
       setreply: {
          text: (teks) => `Success changed reply to ${teks}`
       },
       setwelcome: {
          text: (teks) => `Success changed welcome to ${teks}`
       },
       setprefix: {
          text: (teks) => `Success changed prefix to ${teks}`
       },
       auto: {
          text: (teks) => `Auto ${teks} mode is active`
       },
       autoblockcmd: {
          on: "Auto block commands mode is active",
          off: "Auto block commands mode is off"
       },
       autoreport: {
          on: "Auto report mode is active",
          off: "Auto report mode is off"
       },
       autobio: {
          on: "Auto bio mode is active",
          off: "Auto bio mode is off"
       },
       autosticker: {
          on: "Auto sticker mode is active",
          off: "Auto sticker mode is off"
       },
       autorespon: {
          on: "Auto respon mode is active",
          off: "Auto respon mode is off"
       },
       autoread: {
          on: "Auto read mode is active",
          off: "Auto read mode is off"
       },
       autovn: {
          on: "Auto vn mode is active",
          off: "Auto vn mode is off"
       },
       autoquoted: {
          on: "Auto quoted mode is active",
          off: "Auto quoted mode is off"
       },
       autobutton: {
          on: "Auto button mode is active",
          off: "Auto button mode is off"
       },
       autojoin: {
          on: "Auto join mode is active",
          off: "Auto join mode is off"
       },
       autolevel: {
          on: "Auto level mode is active",
          off: "Auto level mode is off"
       },
       autodelsampah: {
          on: "Auto delete sampah mode is active",
          off: "Auto delete sampah mode is off"
       },
       antispam: {
          on: "Anti spam mode is active",
          off: "Anti spam mode is off"
       },
       anticall: {
          on: "Anti call mode is active",
          off: "Anti call mode is off"
       },
       mode: {
          public: "Publik mode is active",
          self: "Self mode is active", 
          group: "Group mode is active", 
          private: "Private mode is active",
       },
       getfile: {
          query: (prefix, command) => `Example : ${prefix + command} ./package.json`,
          text: "Send File..."
       },
       getfolder: {
          query: (prefix, command) => `Example : ${prefix + command} ./ACTION`,
          size: "File size is too large 😑",
          text: "Send File..."
       },
       getsesi: {
          query: "You are not in listjadibot",
          text: "Send File..."
       },
       updatefile: {
          query: (prefix, command) => `Example : ${prefix + command} ./ACTION/connect.js`,
          text: "File not found"
       },
       antilink: {
          on: "Anti link mode is active",
          off: "Anti link mode is off"
       },
       antilinkgc: {
          on: "Anti link group mode is active",
          off: "Anti link group mode is off"
       },
       antilinkytchannel: {
          on: "Anti link youtube channel mode is active",
          off: "Anti link youtube channel mode is off"
       },
       antilinkytvideo: {
          on: "Anti link youtube video mode is active",
          off: "Anti link youtube video mode is off"
       },
       antilinkfb: {
          on: "Anti link facebook mode is active",
          off: "Anti link facebook mode is off"
       },
       antilinkig: {
          on: "Anti link instagram mode is active",
          off: "Anti link instagram mode is off"
       },
       antilinktele: {
          on: "Anti link telegram mode is active",
          off: "Anti link telegram mode is off"
       },
       antilinkwa: {
          on: "Anti link whatsapp mode is active",
          off: "Anti link whatsapp mode is off"
       },
       antilinktiktok: {
          on: "Anti link tiktok mode is active",
          off: "Anti link tiktok mode is off"
       },
       antilinktwitter: {
          on: "Anti link twitter mode is active",
          off: "Anti link twitter mode is off"
       },
       antivirtex: {
          on: "Anti virtex mode is active",
          off: "Anti virtex mode is off"
       },
       antiasing: {
          on: "Anti asing mode is active",
          off: "Anti asing mode is off"
       },
       antitag: {
          on: "Anti tag mode is active",
          off: "Anti tag mode is off"
       },
       antidelete: {
          on: "Anti delete mode is active",
          off: "Anti delete mode is off"
       },
       antiviewonce: {
          on: "Anti view once mode is active",
          off: "Anti view once mode is off"
       },
       antitoxic: {
          on: "Anti toxic mode is active",
          off: "Anti toxic mode is off"
       },
       antisange: {
          on: "Anti sange mode is active",
          off: "Anti sange mode is off"
       },
       antinsfw: {
          on: "Anti nsfw mode is active",
          off: "Anti nsfw mode is off"
       },
       autorespongc: {
          on: "Auto respon group mode is active",
          off: "Auto respon group mode is off"
       },
       autoreact: {
          on: "Auto react mode is active",
          off: "Auto react mode is off"
       },
       banchat: {
          on: "banchat mode is active",
          off: "banchat mode is off"
       },
       welcome: {
          on: "welcome mode is active",
          off: "welcome mode is off"
       },
       setppgc: {
          text: (prefix, command) => `Use photos or Reply photos with captions ${prefix + command}`
       },
       setnamagc: {
          text: (teks) => `Success changed group name to ${teks}`
       },
       setdesc: { 
          text: (teks) => `Success changed description group to ${teks}`
       },
       gc: {
          open: "Success allowed all participants to send messages to this group", 
          close: "Success allowed only admins to send messages to this group"
       },
       revoke: {
          text: "Success reset link group"
       },
       add: {
          number: "Use country code", 
          text1: "The user is already in the group", 
          text2: (number, groupName) => `Success add @${number.split("@")[0]} in group ${groupName}`
       },
       kick: {
          number: "Use country code", 
          text1: "The user is not in the group", 
          text2: "Can't because it's the creator of the group", 
          text3: (number, groupName) => `Success kick @${number.split("@")[0]} in group ${groupName}`
       },
       promote: {
          number: "Use country code", 
          text1: "The user is not in the group", 
          text2: "The user is already an admin", 
          text3: (number, groupName) => `Success promote @${number.split("@")[0]} in group ${groupName}`
       },
       demote: {
          number: "Use country code", 
          text1: "The user is not in the group", 
          text2: "That user is no longer a group admin", 
          text3: (number, groupName) => `Success demote @${number.split("@")[0]} in group ${groupName}`
       },
       opentime: {
          text: "Open time starts from now"
       },
       closetime: {
          text: "Close time starts from now"
       },
       kalkulator: {
          text: (prefix, command) => `Example : ${prefix + command} 1+1`
       },
       delsampah: {
          text1: (data) => `${data.length} junk files detected`, 
          text2: "Removing junk files...", 
          text3: "Success deleted all junk files"
       },
       react: {
          query: (prefix, command) => `Example : ${prefix + command} 🐦`
       },
       readmore: {
          query: (prefix, command) => `Example : ${prefix + command} Kon|niciwa`
       },
       cariteman: {
          text1: "Looking for friends.......", 
          text2: "Success to get one friend"
       },
       kontak: {
          query: (prefix, command, number) => `Example : ${prefix + command} ${number.split("@")[0]}`, 
          number: "Use country code",
       },
       menfes: {
          query1: (prefix, command, number) => `Example : ${prefix + command} ${number}|pesan`, 
          query2: "There are still unfinished chats. If you want to stop, press the button below",
          query3: "The sender of the message has left you", 
          query4: "The recipient of the message has left you", 
          success1: "Success sent the message", 
          success2: "Success now you can send messages to the sender of the message", 
          text1: "Your message has been replied to by the recipient of the message", 
          text2: "The message recipient has ignored your message",
          text3: "The message sender has ignored your message"
       }, 
       listonline: {
          query: (prefix, command, number) => `Example : ${prefix + command} ${linkGroup}`, 
       }, 
       jadibot: {
          text1: "You are no longer a bot.", 
          text2: "Connected to whatsapp." 
       }, 
       stopjadibot: {
          text: "You are not on the list so bot"
       }, 
       deljadibot: {
          query: "That name doesn't exist in the database", 
          text: (number) => `Success to remove ${number.split("@")[0]} from the list so bot`
       },
       game: {
          query: "There are still unfinished questions"
       },
       sticker: {
          text: (prefix, command) => `Use photos/videos or Reply photos/videos with captions ${prefix + command}`
       },
       take: {
          text: (prefix, command) => `Use photos/videos or Reply photos/videos with captions ${prefix + command} nama`
       },
       removebg: {
          text: (prefix, command) => `Use photos or Reply photos/sticker with captions ${prefix + command}`
       },
       duration: {
          query: "must be a number", 
          text: (prefix, command) => `Use videos or Reply videos/audio with captions ${prefix + command} 359996949`
       },
       emojimix: {
          text: (prefix, command) => `Example : ${prefix + command} 🤣+😃`, 
       },
       tovn: {
          text: (prefix, command) => `Use videos or Reply videos/audio with captions ${prefix + command}`
       },
       tomp3: {
          text: (prefix, command) => `Use videos or Reply videos with captions ${prefix + command}`
       },
       tourl: {
          text: (prefix, command) => `Use photos/videos or Reply photos/videos/sticker/audio with captions ${prefix + command}`
       },
       tohd: {
          text: (prefix, command) => `Use photos or Reply photos/sticker with captions ${prefix + command}`
       },
       to2d: {
          text: (prefix, command) => `Use photos or Reply photos/sticker with captions ${prefix + command}`
       },
       anonymous: {
          text: "Anonymous Chat is\nfeatures that allow you\ninteract with other users\nwithout knowing identity\nand randomly integrated.\n\nClick start to start"
       },
       start: {
          query: "You are still in the anonymous room, press the button below to exit the anonymous room",
          text1: "Success found partner, now you can send messages",
          text2: "You have created an anonymous room\nPlease wait while looking for partners"
       },
       startchat: {
          query: "You are still in the anonymous room, press the button below to exit the anonymous room",
          text: "You have created an anonymous room\nNow you can send messages"
       },
       keluar: {
          text1: "Your partner has left room anonymous",
          text2: "You have left room anonymous",
          text3: "You are not in room anonymous"
       },
       next: {
          text1: "Looking for Partners...",
          text2: "Success found partner, now you can send messages",
          text3: "You have created an anonymous room\nPlease wait while looking for partners", 
          text4: "Your partner has kicked you out of room anonymous",
          text5: "Waiting for a partner to enter the room",
          text6: "Please wait while looking for a room",
          text7: "Success found partner, now you can send messages",
          text8: "You have created a new room\nPlease wait for the partner to enter the room",
          text9: "You are not in room anonymous"
       },
       sendkontak: {
          text1: "You are not in room anonymous", 
          text2: "You can't send contacts yet because you don't have a partner yet"
       },
       invite: {
          text1: "You are not in room anonymous",
          text2: "You are already in the anonymous room and have started a chat session", 
          text3: "Someone has invited you\nto join anonymous chat rooms\npress the join chat button below to\njoin the anonymous room and get started\nchat session with other users",
          text4: (data) => `Send anonymous invitation, finish time ${data.length * 3} seconds`,
          text5: (data) => `Invites have been sent to the ${data.length} group`
       },
       joinchat: {
          text1: "Enter anonymous room id",
          text2: "You are still in room anonymous", 
          text3: "You are already in the anonymous room and have started a chat session", 
          text4: "Success found partner, now you can send messages",
          text5: "You have created an anonymous room\nPlease wait while looking for partners",
       },
       jadwalsholat: {
          query: (prefix, command) => `Example : ${prefix + command} lampung`
       },
       lk21: {
          query: (prefix, command) => `Example : ${prefix + command} Transformer`
       },
       wattpad: {
          query: (prefix, command) => `Example : ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`
       },
       wattpadsearch: {
          query: (prefix, command) => `Example : ${prefix + command} Tere Liye`
       },
       filmapik: {
          query: (prefix, command) => `Example : ${prefix + command} Transformer`
       },
       kisahnabi: {
          query: (prefix, command) => `Example : ${prefix + command} idris`
       },
       yts: {
          query: (prefix, command) => `Example : ${prefix + command} Temola`
       },
       spotifysearch: {
          query: (prefix, command) => `Example : ${prefix + command} Melukis senja`
       },
       pinterest: {
          query: (prefix, command) => `Example : ${prefix + command} Loli kawai`
       },
       pixiv: {
          query: (prefix, command) => `Example : ${prefix + command} Loli kawai`
       },
       gimage: {
          query: (prefix, command) => `Example : ${prefix + command} Loli kawai`
       },
       konachan: {
          query: (prefix, command) => `Example : ${prefix + command} Loli kawai`
       },
       wallpeper: {
          query: (prefix, command) => `Example : ${prefix + command} Loli kawai`
       },
       playstore: {
          query: (prefix, command) => `Example : ${prefix + command} telegram`
       },
       shopee: {
          query: (prefix, command) => `Example : ${prefix + command} tas gendong`
       },
       google: {
          query: (prefix, command) => `Example : ${prefix + command} Loli kawai`
       },
       moddroid: {
          query: (prefix, command) => `Example : ${prefix + command} clash of clans`
       },
       groupwa: {
          query: (prefix, command) => `Example : ${prefix + command} islami`
       },
       character: {
          query: (prefix, command) => `Example : ${prefix + command} Miku Nakano`
       },
       manga: {
          query: (prefix, command) => `Example : ${prefix + command} Gotoubun No Hanayome`
       },
       anime: {
          query: (prefix, command) => `Example : ${prefix + command} Gotoubun No Hanayome`
       },
       kusonimesearch: {
          query: (prefix, command) => `Example : ${prefix + command} Gotoubun No Hanayome`
       },
       otakudesusearch: {
          query: (prefix, command) => `Example : ${prefix + command} Gotoubun No Hanayome`
       },
       play: {
          query: (prefix, command) => `Example : ${prefix + command} Temola`
       },
       ytmp3: {
          query: (prefix, command) => `Example : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`
       },
       ytmp4: {
          query: (prefix, command) => `Example : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`
       },
       cocofun: {
          query: (prefix, command) => `Example : ${prefix + command} https://www.icocofun.com/share/post/535378911765?lang=id&pkg=id&share_to=copy_link&m=3fa04a8fc277d4c877f801ecd87e6453&d=a284dbb0b532faa52ced65f97808cd9def5f14da8c1e8ca541020b8ceab8de67&nt=4`
       },
       fbdl: {
          query: (prefix, command) => `Example : ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`
       },
       tiktok: {
          query: (prefix, command) => `Example : ${prefix + command} https://vt.tiktok.com/ZS8RArRwb/`
       },
       tiktokmp3: {
          query: (prefix, command) => `Example : ${prefix + command} https://vt.tiktok.com/ZS8RArRwb/`
       },
       igdl: {
          query: (prefix, command) => `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
       },
       spotify: {
          query: (prefix, command) => `Example : ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
       },
       jooxplay: {
          query: (prefix, command) => `Example : ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
       },
       twtdl: {
          query: (prefix, command) => `Example : ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
       },
       zippyshare: {
          query: (prefix, command) => `Example : ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`
       },
       pinterestdl: {
          query: (prefix, command) => `Example : ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`
       },
       pixivdl: {
          query: (prefix, command) => `Example : ${prefix + command} 63456028`
       },
       mediafire: {
          query: (prefix, command) => `Example : ${prefix + command} https://www.mediafire.com/file/1xgaov026oc44n0/photo_2021-02-05_10-13-39.jpg/file`
       },
       genshin: {
          query: (prefix, command) => `Example : ${prefix + command} jean`
       },
       telesticker: {
          query: (prefix, command) => `Example : ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`
       },
       kusonime: {
          query: (prefix, command) => `Example : ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`
       },
       otakudesu: {
          query: (prefix, command) => `Example : ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`
       },
       cekumur: {
          text: (prefix, command) => `Use photos or Reply photos with captions ${prefix + command}`
       },
       cuaca: {
          query: (prefix, command) => `Example : ${prefix + command} bandung`
       },
       kodepos: {
          query: (prefix, command) => `Example : ${prefix + command} sleman`
       },
       translate: {
          query: (prefix, command) => `Example : ${prefix + command} Good morning`
       },
       brainly: {
          query: (prefix, command) => `Example : ${prefix + command} soekarno adalah`
       },
       kbbi: {
          query: (prefix, command) => `Example : ${prefix + command} kursi`
       },
       chord: {
          query: (prefix, command) => `Example : ${prefix + command} Melukis senja`
       },
       heroml: {
          query: (prefix, command) => `Example : ${prefix + command} Famny`
       },
       mlstalk: {
          query: (prefix, command) => `Example : ${prefix + command} 84830127/2169`
       },
       wikipedia: {
          query: (prefix, command) => `Example : ${prefix + command} Tahu`
       },
       lirik: {
          query: (prefix, command) => `Example : ${prefix + command} Melukis senja`
       },
       adderror: {
          query: (prefix, command) => `Example : ${prefix + command} menu|g mau respon`,
          text: (teks) => `Success added error ${teks} to listerror`
       },
       addstick: {
          query: "The name is already in use", 
          text: (teks) => `Success added sticker ${teks} to liststick`
       },
       addvn: {
          query: "The name is already in use", 
          text: (teks) => `Success added vn ${teks} to listvn`
       },
       addlimit: {
          text1: "Success now input amount", 
          text2: (teks1, teks2) => `Success added ${teks1} limits to @${teks2.split("@")[0]}`
       },
       addowner: {
          text1: (number) => `Success added owner @${number.split("@")[0]}`, 
          text2: (teks1, teks2, teks3) => `Success added owner @${teks1.split("@")[0]} ${teks2} ${teks3}`
       },
       addpremium: {
          text1: (number) => `Success added premium @${number.split("@")[0]}`, 
          text2: (teks1, teks2, teks3) => `Success added premium @${teks1.split("@")[0]} ${teks2} ${teks3}`
       },
       addsewa: {
          linkgc: "it's not a link group", 
          text1: (teks) => `Success added sewa ${teks}`, 
          text2: (teks1, teks2, teks3) => `Success added sewa ${teks1} ${teks2} ${teks3}`
       },
       addcmdowner: {
          query: "The name is already in use", 
          text: (teks) => `Success added commands owner ${teks}`
       },
       addcmdpremium: {
          query: "The name is already in use", 
          text: (teks) => `Success added commands premium ${teks}`
       },
       addcmdlimit: {
          query: "The name is already in use", 
          text: (teks) => `Success added commands limit ${teks}`
       },
       delerror: {
          query: "That name doesn't exist in the database", 
          text: (teks) => `Success delete error ${teks}`
       },
       delstick: {
          query: "That name doesn't exist in the database", 
          text: (teks) => `Success delete sticker ${teks}`
       },
       delvn: {
          query: "That name doesn't exist in the database", 
          text: (teks) => `Success delete vn ${teks}`
       },
       delowner: {
          query: "That name doesn't exist in the database", 
          text: (number) => `Success delete owner @${number.split("@")[0]}`
       },
       delpremium: {
          query: "That name doesn't exist in the database", 
          text: (number) => `Success delete premium @${number.split("@")[0]}`
       },
       delsewa: {
          query: "That name doesn't exist in the database", 
          linkgc: "it's not a link group", 
          text: (teks) => `Success delete sewa ${teks}`
       },
       delcmdowner: {
          query: "That name doesn't exist in the database", 
          text: (teks) => `Success delete commands owner ${teks}`
       },
       delcmdpremium: {
          query: "That name doesn't exist in the database", 
          text: (teks) => `Success delete commands premium ${teks}`
       },
       delcmdlimit: {
          query: "That name doesn't exist in the database", 
          text: (teks) => `Success delete commands limit ${teks}`
       },
   }
}
} else if (setBahasa == "indonesia") {
var mess = {
   wait: "_𝙏𝙪𝙣𝙜𝙜𝙪 𝙨𝙚𝙗𝙚𝙣𝙩𝙖𝙧 シ_",
   success: "_𝘽𝙚𝙧𝙝𝙖𝙨𝙞𝙡シ_",
   on: "Sudah aktif", 
   off: "Sudah off", 
   input: "Balas pesan/Tag member/Nomer",
   query: {
       text: "Teks?",
       link: "Link?",
       cmd: "Perintah?",
   },
   error: {
       fitur: "Mohon maaf kak fitur eror silahkan chat developer bot agar bisa segera diperbaiki", 
       link: "Error link!"
   }, 
   expired: {
       owner: "Waktu jadi pemilik bot ini telah habis silahkan chat pemilik bot utama!",
       premium: "Waktu jadi premium kamu habis silahkan chat pemilik bot!",
       sewa: "Waktu sewa bot di group ini telah habis silahkan chat pemilik bot!"
   },
   time: {
       seconds: "detik",
       minutes: "menit",
       hours: "jam",
       days: "hari",
       weeks: "minggu", 
       months: "bulan"
   },
   reply: {
       sticker: "Balas sticker!", 
       image: "Balas image!",
       audio: "Balas audio!",
       video: "Balas video!",
       document: "Balas file!",
       viewonce: "Balas pesan sekali buka!",
       message: "Balas pesan!"
   },
   only: {
       prem: "_𝙃𝙖𝙣𝙮𝙖 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙪𝙨𝙚𝙧 𝙥𝙧𝙚𝙢𝙞𝙪𝙢シ_",
       sewa: "_𝙃𝙖𝙣𝙮𝙖 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙠𝙚𝙩𝙞𝙠𝙖 𝙙𝙞 𝙨𝙚𝙬𝙖シ_",
       limit: "Limit kamu sudah habis silahkam chat pemilil bot untuk membeli limit",
       group: "_𝗛𝗮𝗻𝘆𝗮 𝗯𝗶𝘀𝗮 𝗱𝗶 𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽シ_",
       chats: "_𝙃𝙖𝙣𝙮𝙖 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙙𝙞 𝙥𝙧𝙞𝙫𝙖𝙩𝙨 𝙘𝙝𝙖𝙩シ_",
       owner: "_𝙃𝙖𝙣𝙮𝙖 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙥𝙚𝙢𝙞𝙡𝙞𝙠 𝙗𝙤𝙩シ_",
       admin: "_𝙃𝙖𝙣𝙮𝙖 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙖𝙙𝙢𝙞𝙣 𝙜𝙧𝙤𝙪𝙥シ_",
       badmin: "_𝙃𝙖𝙣𝙮𝙖 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙨𝙖𝙖𝙩 𝙗𝙤𝙩 𝙢𝙚𝙣𝙟𝙖𝙙𝙞 𝙖𝙙𝙢𝙞𝙣シ_"
   },
   security: {
       spam: {
          banned: "Kamu telah di banned karena melakukan spam",
          detect: "Ups kamu terdeteksi spam",
       },
       antilink: {
          detect: "*「 LINK DETECTED 」*\n\nKamu mengirim link maaf kamu akan di keluarkan dari group"
       },
       antilinkgc: {
          detect: "*「 LINK GROUP DETECTED 」*\n\nKamu mengirim link group maaf kamu akan di keluarkan dari group"
       },
       antilinkytchannel: {
          detect: "*「 LINK YOUTUBE CHANNEL DETECTED 」*\n\nKamu mengirim link youtube maaf kamu akan di keluarkan dari group"
       },
       antilinkytvideo: {
          detect: "*「 LINK YOUTUBE VIDEO DETECTED 」*\n\nKamu mengirim link youtube maaf kamu akan di keluarkan dari group"
       },
       antilinkfb: {
          detect: "*「 LINK FACEBOOK DETECTED 」*\n\nKamu mengirim link facebook maaf kamu akan di keluarkan dari group"
       },
       antilinkig: {
          detect: "*「 LINK INSTAGRAM DETECTED 」*\n\nKamu mengirim link instagram maaf kamu akan di keluarkan dari group"
       },
       antilinktele: {
          detect: "*「 LINK TELEGRAM DETECTED 」*\n\nKamu mengirim link telegram maaf kamu akan di keluarkan dari group"
       },
       antilinkwa: {
          detect: "*「 LINK WHATSAPP DETECTED 」*\n\nKamu mengirim link whatsapp maaf kamu akan di keluarkan dari group"
       },
       antilinktiktok: {
          detect: "*「 LINK TIKTOK DETECTED 」*\n\nKamu mengirim link tiktok maaf kamu akan di keluarkan dari group"
       },
       antitoxic: {
          detect: "*「 TOXIC DETECTED 」*\n\nKamu berkata kasar maaf kamu akan di keluarkan dari group"
       },
       antisange: {
          detect: "*「 SANGE DETECTED 」*\n\nKamu sange maaf kamu akan di keluarkan dari group"
       },
       antivirtex: {
          detect: "*「 VIRTEX DETECTED 」*\n\nKamu mengirim virtex maaf kamu akan di keluarkan dari group"
       },
       antitag: {
          detect: "*「 TAG MEMBERS DETECTED 」*\n\nKamu mengganggu org di group maaf kamu akan di keluarkan dari group"
       },
       antinsfw: {
          detect: "*「 NSFW DETECTED 」*\n\nKamu mengirim gambar 18+ kamu akan di keluarkan dari group"
       },
       antilinktwitter: {
          detect: "*「 LINK TWITTER DETECTED 」*\n\nKamu mengirim link twitter maaf kamu akan di keluarkan dari group"
       },
       blockcmd: {
          detect: (command) => `Maag perintah ${command} telah di block karena terjadi error`
       },
       simi: "Aku tidak mengerti",
       izin: "Izin diterima",
       afk: {
          detect: "jangan ganggu dia sedang afk",
          done: "kamu telah kembali dari afk",
       },
       cmd: {
          detect: (prefix, command, matches) => `Perintah ${command} tidak di temukan mungkin yang anda maksut adalah ${prefix + matches.bestMatch.target.toLowerCase()}`
       },
       anticall: {
          text1: "Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka!", 
          text2: (number) => `Terdeteksi @${number.split("@")[0]} telah menelpon bot`
       },
       game: {
          text1: "Selamat kamu berhasil menjawab dengan benar\nDan berhasil mendapatkan 5000 saldo", 
          text2: (teks) => `Waktu habis jawabannya adalah ${teks}`
       },
       anonymous: {
          text: "Partner tidak di temukan\nKamu telah keluar dari room anonymous"
       }
   },
   cmd: {
       join: {
          linkgc: "itu bukan link group",
       },
       bc: {
          text: (data) => `Berhasil mengirim pesan siaran ke ${data.length} chats`
       },
       bcgc: {
          text: (data) => `Berhasil mengirim pesan siaran ke ${data.length} groups chats`
       },
       bcpc: {
          text: (data) => `Berhasil mengirim pesan siaran ke ${data.length} chats`
       },
       getcase: {
          text: "Case tidak di temukan"
       },
       culik: {
          linkgc: "itu bukan link group",
          success: (groupName) => `Berhasil menculik member di group ${groupName}`
       }, 
       ban: {
          on: "Sudah di ban",
          success: (number) => `Berhasil banned @${number.split("@")[0]}`
       },
       unban: {
          on: "Sudah di unban",
          success: (number) => `Berhasil unbanned @${number.split("@")[0]}`
       },
       block: {
          on: "Sudah di block", 
          success: (number) => `Berhasil block @${number.split("@")[0]}`
       },
       unblock: {
          on: "Sudah di unblock", 
          success: (number) => `Berhasil unblock @${number.split("@")[0]}`
       },
       blockcmd: {
          on: "Sudah di block perintah",
          success: (teks) => `Berhasil block commands ${teks}`
       },
       unblockcmd: {
          on: "Sudah di unblock perintah",
          success: (teks) => `Berhasil unblock commands ${teks}` 
       },
       setppbot: {
          text: (prefix, command) => `Gunakan foto atau Reply foto dengan captions ${prefix + command}`
       },
       setbio: {
          text: (teks) => `Berhasil mengganti bio ke ${teks}`
       },
       setnoowner: {
          query: "Nomer?",
          number: "Gunakan code negara!", 
          text: (teks) => `Berhasil mengganti nomer pemilik ke ${teks}`
       }, 
       setnamaowner: {
          text: (teks) => `Berhasil mengganti nama pemilik ke ${teks}`
       },
       setnamabot: {
          text: (teks) => `Berhasil mengganti nama bot ke ${teks}`
       },
       setmenu: {
          text: (teks) => `Berhasil mengganti tampilan menu ke ${teks}`
       },
       setdoc: {
          text: (teks) => `Berhasil mengganti document ke ${teks}`
       },
       setquoted: {       
          text: (teks) => `Berhasil mengganti quoted ke ${teks}`
       },
       setcopyright: {
          text: (teks) => `Berhasil mengganti copyright ke ${teks}`
       },
       settextreply: {
          text: (teks) => `Berhasil mengganti teks balas ke ${teks}`
       },
       setreply: {
          text: (teks) => `Berhasil mengganti reply ke ${teks}`
       },
       setwelcome: {
          text: (teks) => `Berhasil mengganti welcome ke ${teks}`
       },
       setprefix: {
          text: (teks) => `Berhasil mengganti prefix ke ${teks}`
       },
       auto: {
          text: (teks) => `Mode auto ${teks} telah aktif`
       },
       autoblockcmd: {
          on: "Mode auto block perintah telah aktif",
          off: "Mode auto block perintah telah off"
       },
       autoreport: {
          on: "Mode auto laporkan telah aktif",
          off: "Mode auto laporkan telah off"
       },
       autobio: {
          on: "Mode auto bio telah aktif",
          off: "Mode auto bio telah off"
       },
       autosticker: {
          on: "Mode auto sticker telah aktif",
          off: "Mode auto sticker telah off"
       },
       autorespon: {
          on: "Mode auto respon telah aktif",
          off: "Mode auto respon telah off"
       },
       autoread: {
          on: "Mode auto read telah aktif",
          off: "Mode auto read telah off"
       },
       autovn: {
          on: "Mode auto pesan suara telah aktif",
          off: "Mode auto pesan suara telah off"
       },
       autoquoted: {
          on: "Mode auto quoted telah aktif",
          off: "Mode auto quoted telah off"
       },
       autobutton: {
          on: "Mode auto button telah aktif",
          off: "Mode auto button telah off"
       },
       autojoin: {
          on: "Mode auto join group telah aktif",
          off: "Mode auto join group telah off"
       },
       autolevel: {
          on: "Mode auto level telah aktif",
          off: "Mode auto level telah off"
       },
       autodelsampah: {
          on: "Mode auto hapus sampah telah aktif",
          off: "Mode auto hapus sampah telah off"
       },
       antispam: {
          on: "Mode anti spam telah aktif",
          off: "Mode anti spam telah off"
       },
       anticall: {
          on: "Mode anti telfon telah aktif",
          off: "Mode anti telfon telah off"
       },
       mode: {
          public: "Mode publik telah aktif",
          self: "Mode self telah aktif", 
          group: "Mode group telah aktif", 
          private: "Mode private telah aktif",
       },
       getfile: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} ./package.json`,
          text: "Mengirim File..."
       },
       getfolder: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} ./ACTION`,
          size: "Ukuran Filenya g ngotak 😑",
          text: "Mengirim File..."
       },
       getsesi: {
          query: "Kamu tidak ada di listjadibot",
          text: "Mengirim File..."
       },
       updatefile: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} ./package.json`,
          text: "File tidak di temukan"
       },
       antilink: {
          on: "Mode anti link telah aktif",
          off: "Mode anti link telah off"
       },
       antilinkgc: {
          on: "Mode anti link group telah aktif",
          off: "Mode anti link group telah off"
       },
       antilinkytchannel: {
          on: "Mode anti link youtube channel telah aktif",
          off: "Mode anti link youtube channel telah off"
       },
       antilinkytvideo: {
          on: "Mode anti link youtube video telah aktif",
          off: "Mode anti link youtube video telah off"
       },
       antilinkfb: {
          on: "Mode anti link facebook telah aktif",
          off: "Mode anti link facebook telah off"
       },
       antilinkig: {
          on: "Mode anti link instagram telah aktif",
          off: "Mode anti link instagram telah off"
       },
       antilinktele: {
          on: "Mode anti link telegram telah aktif",
          off: "Mode anti link telegram telah off"
       },
       antilinkwa: {
          on: "Mode anti link whatsapp telah aktif",
          off: "Mode anti link whatsapp telah off"
       },
       antilinktiktok: {
          on: "Mode anti link tiktok telah aktif",
          off: "Mode anti link tiktok telah off"
       },
       antilinktwitter: {
          on: "Mode anti link twitter telah aktif",
          off: "Mode anti link twitter telah off"
       },
       antivirtex: {
          on: "Mode anti virtex telah aktif",
          off: "Mode anti virtex telah off"
       },
       antiasing: {
          on: "Mode anti asing telah aktif",
          off: "Mode anti asing telah off"
       },
       antitag: {
          on: "Mode anti tag telah aktif",
          off: "Mode anti tag telah off"
       },
       antidelete: {
          on: "Mode anti delete telah aktif",
          off: "Mode anti delete telah off"
       },
       antiviewonce: {
          on: "Mode anti pesan sekali lihat telah aktif",
          off: "Mode anti pesan sekali lihat telah off"
       },
       antitoxic: {
          on: "Mode anti berkata kasar telah aktif",
          off: "Mode anti berkata kasar telah off"
       },
       antisange: {
          on: "Mode anti sange telah aktif",
          off: "Mode anti sange telah off"
       },
       antinsfw: {
          on: "Mode anti nfsw telah aktif",
          off: "Mode anti nfsw telah off"
       },
       autorespongc: {
          on: "Mode auto respon group telah aktif",
          off: "Mode auto respon group telah off"
       },
       autoreact: {
          on: "Mode auto react telah aktif",
          off: "Mode auto react telah off"
       },
       banchat: {
          on: "Mode banchat telah aktif",
          off: "Mode banchat telah off"
       },
       welcome: {
          on: "Mode welcome telah aktif",
          off: "Mode welcome telah off"
       },
       setppgc: {
          text: (prefix, command) => `Gunakan foto atau balas foto dengan caption ${prefix + command}`
       },
       setnamagc: {
          text: (teks) => `Berhasil memgganti nama group ke ${teks}`
       },
       setdesc: { 
          text: (teks) => `Berhasil memgganti description group ke ${teks}`
       },
       gc: {
          open: "Berhasil sekarang semua peserta dapat memgirim pesan", 
          close: "Berhasil sekarang hanya admin dapat memgirim pesan"
       },
       revoke: {
          text: "Berhasil mengganti link group"
       },
       add: {
          number: "Gunakan code negara!", 
          text1: "User tersebut sudah ada di group", 
          text2: (number, groupName) => `Berhasil menambahkan @${number.split("@")[0]} di group ${groupName}`
       },
       kick: {
          number: "Gunakan code negara!", 
          text1: "User tersebut tidak ada di group", 
          text2: "Tidak bisa karna itu pembuat group", 
          text3: (number, groupName) => `Berhasil mengeluarkan @${number.split("@")[0]} di group ${groupName}`
       },
       promote: {
          number: "Gunakan code negara!", 
          text1: "User tersebut tidak ada di group", 
          text2: "User tersebut sudah menjadi admin", 
          text3: (number, groupName) => `Berhasil promote @${number.split("@")[0]} di group ${groupName}`
       },
       demote: {
          number: "Gunakan code negara!", 
          text1: "User tersebut tidak ada di group", 
          text2: "User tersebut sudah bukan admin group", 
          text3: (number, groupName) => `Berhasil demote @${number.split("@")[0]} di group ${groupName}`
       },
       opentime: {
          text: "Membuka group di mulai dari sekarang"
       },
       closetime: {
          text: "Menutup group di mulai dari sekarang"
       },
       kalkulator: {
          text: (prefix, command) => `Penggunaan : ${prefix + command} 1+1`
       },
       delsampah: {
          text1: (data) => `Terdeteksi ${data.length} file sampah`,
          text2: "Menghapus file sampah....",
          text3: "Berhasil menghapus semua file sampah"
       },
       react: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} 🐦`
       },
       readmore: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Kon|niciwa`
       },
       cariteman: {
          text1: "Sedang mencari teman.......", 
          text2: "Berhasil mendapatkan satu teman"
       },
       kontak: {
          query: (prefix, command, number) => `Penggunaan : ${prefix + command} ${number.split("@")[0]}`, 
          number: "Gunakan code negara",
       },
       menfes: {
          query1: (prefix, command, number) => `Penggunaan : ${prefix + command} ${number}|pesan`, 
          query2: "Masih ada obrolan yang belum selesai. Jika Anda ingin berhenti, tekan tombol di bawah ini",
          query3: "Pengirim pesan telah meninggalkan Anda", 
          query4: "Penerima pesan telah meninggalkan Anda", 
          success1: "Berhasil mengirim pesan", 
          success2: "Berhasil sekarang kamu sudah bisa mengirim pesan ke pengirim pesan", 
          text1: "Pesan Anda telah dibalas oleh penerima pesan", 
          text2: "Penerima pesan telah mengabaikan pesan Anda",
          text3: "Pengirim pesan telah mengabaikan pesan Anda"
       }, 
       listonline: {
          query: (prefix, command, number) => `Penggunaan : ${prefix + command} ${linkGroup}`, 
       }, 
       jadibot: {
          text1: "Kamu sudah tidak lagi menjadi bot.", 
          text2: "Tersambung ke whatsapp." 
       }, 
       stopjadibot: {
          text: "Kamu tidak ada di list jadi bot"
       }, 
       deljadibot: {
          query: "Tidak ada di database", 
          text: (number) => `Berhasil menghapus ${number.split("@")[0]} ke listjadibot`
       },
       game: {
          query: "Masih ada soal yang belum selesai"
       },
       sticker: {
          text: (prefix, command) => `Gunakan foto/video atau balas foto/video dengan caption ${prefix + command}`
       },
       take: {
          text: (prefix, command) => `Gunakan foto/video atau balas foto/video dengan caption ${prefix + command}`
       },
       removebg: {
          text: (prefix, command) => `Gunakan foto atau balas foto/sticker dengan caption ${prefix + command}`
       },
       duration: {
          query: "harus berupa angka", 
          text: (prefix, command) => `Gunakan video atau balas video/audio dengan captions ${prefix + command} 359996949`
       },
       emojimix: {
          text: (prefix, command) => `Penggunaan : ${prefix + command} 🤣+😃`, 
       },
       tovn: {
          text: (prefix, command) => `Gunakan video atau balas video/audio dengan captions ${prefix + command}`
       },
       tomp3: {
          text: (prefix, command) => `Gunakan video atau balas video dengan captions ${prefix + command}`
       },
       tourl: {
          text: (prefix, command) => `Gunakan foto/video atau balas foto/video/sticker/audio dengan captions ${prefix + command}`
       },
       tohd: {
          text: (prefix, command) => `Gunakan foto atau balas foto/sticker dengan captions ${prefix + command}`
       },
       to2d: {
          text: (prefix, command) => `Gunakan foto atau balas foto/sticker dengan captions ${prefix + command}`
       },
       anonymous: {
          text: "Anonymous Chat adalah\nfitur yang memungkinkan kamu\nberinteraksi dengan user lain\ntanpa mengetahui identitas\ndan terintegrasi secara acak.\n\nKlik start untuk memulai"
       },
       start: {
          query: "Kamu masih berada di dalam room anonymous,  tekan button di bawah untuk keluar dari room anonymous",
          text1: "Berhasil menemukan partner, sekarang kamu dapat mengirim pesan",
          text2: "Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner"
       },
       startchat: {
          query: "Kamu masih berada di dalam room anonymous,  tekan button di bawah untuk keluar dari room anonymous",
          text: "Kamu telah membuat room anonymous\nSekarang kamu bisa mengirim pesan"
       },
       keluar: {
          text1: "Partnermu telah meninggalkan room anonymous",
          text2: "Kamu telah keluar dari room anonymous",          
          text3: "Kamu sedang tidak berada di room anonymous"
       },
       next: {
          text1: "Mencari Partner...",
          text2: "Berhasil menemukan partner, sekarang kamu dapat mengirim pesan",
          text3: "Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner",
          text4: "Partnermu telah mengeluarkanmu dari room anonymous",
          text5: "Menunggu partner masuk ke dalam room",
          text6: "Mohon tunggu sedang mencari room",
          text7: "Berhasil menemukan partner, sekarang kamu dapat mengirim pesan",
          text8: "Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room", 
          text9: "Kamu sedang tidak berada di room anonymous"
       },
       sendkontak: {
          text1: "Kamu sedang tidak berada di room anonymous",
          text2: "Kamu belum dapat mengirim kontak karena kamu belum punya partner"
       },
       invite: {
          text1: "Kamu sedang tidak berada di room anonymous",
          text2: "Kamu sudah berada di room anonymous dan sudah memulai sesi chat", 
          text3: "Seseorang telah mengundang kamu \nuntuk bergabung ke room anonymous chat\ntekan tombol join chat di bawah ini untuk\nbergabung di room anonymous dan memulai\nsesi chat dengan user lain",
          text4: (data) => `Mengirim undangan anonymous, waktu selesai ${data.length * 3} detik`, 
          text5: (data) => `Undangan telah terkirim ke ${data.length} group`
       },
       joinchat: {
          text1: "Masukan id room anonymous",
          text2: "Kamu masih berada di room anonymous", 
          text3: "Kamu sudah berada di room anonymous dan sudah memulai sesi chat",
          text4: "Berhasil menemukan partner, sekarang kamu dapat mengirim pesan",
          text5: "Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner",
       },
       jadwalsholat: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} lampung`
       },
       lk21: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Transformer`
       },
       wattpad: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`
       },
       wattpadsearch: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Tere Liye`
       },
       filmapik: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Transformer`
       },
       kisahnabi: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} idris`
       },
       yts: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Temola`
       },
       spotifysearch: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Melukis senja`
       },
       pinterest: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Loli kawai`
       },
       pixiv: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Loli kawai`
       },
       gimage: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Loli kawai`
       },
       konachan: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Loli kawai`
       },
       wallpeper: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Loli kawai`
       },
       playstore: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} telegram`
       },
       shopee: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} tas gendong`
       },
       google: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Loli kawai`
       },
       moddroid: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} clash of clans`
       },
       groupwa: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} islami`
       },
       character: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Miku Nakano`
       },
       manga: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Gotoubun No Hanayome`
       },
       anime: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Gotoubun No Hanayome`
       },
       kusonimesearch: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Gotoubun No Hanayome`
       },
       otakudesusearch: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Gotoubun No Hanayome`
       },
       play: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Temola`
       },
       ytmp3: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`
       },
       ytmp4: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`
       },
       cocofun: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www.icocofun.com/share/post/535378911765?lang=id&pkg=id&share_to=copy_link&m=3fa04a8fc277d4c877f801ecd87e6453&d=a284dbb0b532faa52ced65f97808cd9def5f14da8c1e8ca541020b8ceab8de67&nt=4`
       },
       fbdl: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`
       },
       tiktok: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://vt.tiktok.com/ZS8RArRwb/`
       },
       tiktokmp3: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://vt.tiktok.com/ZS8RArRwb/`
       },
       igdl: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
       },
       spotify: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
       },
       jooxplay: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
       },
       twtdl: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
       },
       zippyshare: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`
       },
       pinterestdl: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`
       },
       pixivdl: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} 63456028`
       },
       mediafire: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://www.mediafire.com/file/1xgaov026oc44n0/photo_2021-02-05_10-13-39.jpg/file`
       },
       genshin: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} jean`
       },
       telesticker: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`
       },
       kusonime: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`
       },
       otakudesu: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`
       },
       cekumur: {
          text: (prefix, command) => `Gunakan foto atau Reply foto dengan captions ${prefix + command}`
       },
       cuaca: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} bandung`
       },
       kodepos: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} sleman`
       },       
       translate: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Good morning`
       },
       brainly: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} soekarno adalah`
       },
       kbbi: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} kursi`
       },
       chord: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Melukis senja`
       },
       heroml: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Famny`
       },
       mlstalk: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} 84830127/2169`
       },
       wikipedia: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Tahu`
       },
       lirik: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} Melukis senja`
       },
       adderror: {
          query: (prefix, command) => `Penggunaan : ${prefix + command} menu|g mau respon`,
          text: (teks) => `Berhasil menambahkan error ${teks} ke listerror`
       },
       addstick: {
          query: "Sudah ada di database", 
          text: (teks) => `Berhasil menambahkan sticker ${teks} ke liststick`
       },
       addvn: {
          query: "Sudah ada di database", 
          text: (teks) => `Berhasil menambahkan vn ${teks} ke listvn`
       },
       addlimit: {
          text1: "Berhasil sekarang masukan jumlah", 
          text2: (teks1, teks2) => `Berhasil menambahkan ${teks1} limit ke @${teks2.split("@")[0]}`
       },
       addowner: {
          text1: (number) => `Berhasil menambahkan penilik @${number.split("@")[0]}`, 
          text2: (teks1, teks2, teks3) => `Berhasil menambahkan penilik @${teks1.split("@")[0]} ${teks2} ${teks3}`
       },
       addpremium: {
          text1: (number) => `Berhasil menambahkan premium @${number.split("@")[0]}`, 
          text2: (teks1, teks2, teks3) => `Berhasil menambahkan premium @${teks1.split("@")[0]} ${teks2} ${teks3}`
       },
       addsewa: {
          linkgc: "itu bukan link group",
          text1: (teks) => `Berhasil menambahkan sewa ${teks}`, 
          text2: (teks1, teks2, teks3) => `Berhasil menambahkan sewa ${teks1} ${teks2} ${teks3}`
       },
       addcmdowner: {
          query: "Sudah ada di database", 
          text: (teks) => `Berhasil menambahkan perintah pemilik ${teks}`
       },
       addcmdpremium: {
          query: "Sudah ada di database", 
          text: (teks) => `Berhasil menambahkan perintah premium ${teks}`
       },
       addcmdlimit: {
          query: "Sudah ada di database", 
          text: (teks) => `Berhasil menambahkan perintah limit ${teks}`
       },
       delerror: {
          query: "Tidak ada di database", 
          text: (teks) => `Berhasil mengahpus error ${teks}`
       },
       delstick: {
          query: "Tidak ada di database", 
          text: (teks) => `Berhasil mengahpus sticker ${teks}`
       },
       delvn: {
          query: "Tidak ada di database", 
          text: (teks) => `Berhasil mengahpus vn ${teks}`
       },
       delowner: {
          query: "Tidak ada di database", 
          text: (number) => `Berhasil mengahpus pemilik @${number.split("@")[0]}`
       },
       delpremium: {
          query: "Tidak ada di database", 
          text: (number) => `Berhasil mengahpus premium @${number.split("@")[0]}`
       },
       delsewa: {
          query: "Tidak ada di database", 
          linkgc: "itu bukan link group",
          text: (teks) => `Berhasil mengahpus sewa ${teks}`
       },
       delcmdowner: {
          query: "Tidak ada di database", 
          text: (teks) => `Berhasil mengahpus perintah pemilik ${teks}`
       },
       delcmdpremium: {
          query: "Tidak ada di database", 
          text: (teks) => `Berhasil mengahpus perintah premium ${teks}`
       },
       delcmdlimit: {
          query: "Tidak ada di database", 
          text: (teks) => `Berhasil mengahpus perintah limit ${teks}`
       },
   }
}
}
global.mess = mess
} catch (e) {
console.log(e)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})