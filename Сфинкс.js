const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = '*'
 
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'ek')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Идёт набор на ежедневную катку!');
	 }
	 if(message.content.startsWith(prefix + 'turnir')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Идёт набор на турнир! Успей встать в очередь на поражение!');
	 }
	  if(message.content.startsWith(prefix + 'kubek')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> @everyone <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> \n Граждане Имперского города! Делайте ваши ставки! Кто победит в ежедневной катке!? \n Кликайте по иконке претендента!');
	 }
	 if(message.content.startsWith(prefix + 'kubtur')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
		message.channel.sendMessage('<:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> @everyone <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> \n Граждане Имперского города! Делайте ваши ставки! Кто победит в сегодняшнем турнире!? \n Кликайте по иконке претендента!');
	 }	 
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
if(message.content.startsWith(prefix + 'hero')) {
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
      attachment: 'https://github.com/NorthTort/Sphinx/raw/master/Vopros%204.png',
      name: 'Win Hero.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Карта
if(message.content.startsWith(prefix + 'map')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.h5m'
      }
   },
   files: [{
      attachment: 'https://github.com/NorthTort/Valeria/raw/master/Tri_Dorogi.h5m',
      name: 'Tri Dorogi.h5m'
   }]
})
.then(console.log)
.catch(console.error);
}
//Сражение
if(message.content.startsWith(prefix + 'battle')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error); 
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.sav'
      }
   },
   files: [{
      attachment: 'https://github.com/NorthTort/Valeria/raw/master/Salo1221_VS_Scorpio.sav',
      name: 'Salo1221_VS_Scorpio.sav'
   }]
})
.then(console.log)
.catch(console.error);
}

let messageArray = message.content.split(" ");
let args = messageArray.slice(1);    
    if(message.content.startsWith(prefix + 'calc')) {
const sayMessage1 = args.join(" ");
        message.channel.send(eval(sayMessage1))
     } 
 
 });

client.login(process.env.BOT_TOKEN);
