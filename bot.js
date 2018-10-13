const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', message => {
if (message.content.split(' ')[0] == '$bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("CONNECT"))  return;
member.send( `${member} ! ` + "**" + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});


client.login(process.env.BOT_TOKEN);
