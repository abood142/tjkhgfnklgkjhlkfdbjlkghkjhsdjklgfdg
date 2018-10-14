const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setActivity("$bc",{type: 'PLAYING'});
});
client.on('ready', () => {
    client.user.setStatus(" online");
 
 });

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('$bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "YaYa Chan | Bot Created By: ! Aboood#7163";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react(':white_check_mark:')
    .then(() => msg.react(':white_check_mark: '))
    .then(() =>msg.react(':x: '))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`${message.guild.members.size} :تم إرسال البرودكاست و عدد المستلمين`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('اسم السيرفر', message.guild.name)
       .addField('المُرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم إلغاء البرودكاست**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

   client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`:boom: :fire: **اوامر البوت** :fire::boom: 
        **1-$bc**
		_________________
		**2-:gear: صيانه كل شوي :gear: **
		_________________
		**البوت من صنع ! Evil !ٌُ Aboood#7163**
		_________________`)
   message.author.sendEmbed(embed)
   
   }
   });
client.login(process.env.BOT_TOKEN);
