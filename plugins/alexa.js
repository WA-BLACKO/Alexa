const {cmd , commands} = require('../command')

cmd({
    pattern: "alexa",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
╒✦•··············•••••••••··············•··•✦
*ALEXA MD 👧🏻 බොට් යනු WhatsApp සඳහා වන පරිශීලක බොට් එකක් වන අතර එමඟින් ඔබට බොහෝ කාර්යයන් ඉටු කිරීමට ඉඩ සලසයි. මෙය විවෘත මූලාශ්‍ර ව්‍යාපෘතියක් නොවේ. මෙය බොට් යන්ත්‍රයක් යෙදවීමට ඔබට ඉඩ සලසන ව්‍යාපෘතියක් පමණි*

*මෙමගින් ඉබට බොහෝ කාර්‍යන් කර ගත හැක උදාහරණයක් ලෙස ඔබට යූ ටියුබ් ගීතයක් බාගත කිරීම සදහා* 
- .song ගීතයේ නම
*ඉහත පරිදි බාගත කර හැක*

*මෙය සම්පූර්ණයෙන්ම නොමිලේ ලබා ගත හැක*

*ALEXA විධාන ලැයිස්තුව ලබා ගැනීම සදහා 📖  .menu විධානය භාවිතා කරන්න*
╘✦•·············•••••••••··················•✦

*ALEXA බොට්ව නිර්මාණය කරේ ALEXA ඩිවලොපර් කණ්ඩායම විසිනි 👯🏻*

*ඔබට යම්කිසි ගැටලුවක් පැවතියහොත් ALEXA ඩිවලොපර් කෙනෙකු සම්බන්ධ කර ගන්න ඒ සදහා 🧑🏻‍💻 .owner විධානය භාවිතා කරන්න*

ස්තූතිය....!

> ALEXA-MD
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
