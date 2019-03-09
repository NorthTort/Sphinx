const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = '*'
 
 client.on('message', message => {
    if(message.author === client.user) return;
      if(message.content.startsWith(prefix + 'say')) {
  if(message.author.id !== '386834372466049024') return;
    const args = message.content.slice(prefix.length).split('say'); 
      message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
             message.channel.sendMessage(message.content.slice(prefix.length).split('say'));
     }
      if(message.content.startsWith(prefix + 'send')) {
  if(message.author.id !== '435498881040777231') return;
    const args = message.content.slice(prefix.length).split('send'); 
      message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
             message.channel.sendMessage(message.content.slice(prefix.length).split('send'));
     }
     // Арты победителя
if(message.content.startsWith(prefix + 'question')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.png'
      }
   },
   files: [{
      attachment: '',
      name: 'question.png'
   }]
})
.then(console.log)
.catch(console.error);
}

client.login(process.env.BOT_TOKEN);
