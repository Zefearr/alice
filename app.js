const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix } = require('./config.json');  
const { token } = require('./config.json');  

bot.on('ready', () => { 
  // bot.user.setPresence({ game: { name: 'with knife' }})
  // bot.user.setActivity('silence', { type: 'listening'})
  bot.user.setActivity('red sky', { type: 'watching'}) 
  .then(bot.user.setPresence({status:'idle'}))
  .then(console.log)
  .catch(console.error);
  console.log(`Logged in as ${bot.user.tag}!`);  
 
});

bot.on('message', msg => {

  // Variables
  let args = msg.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  // Return Statements
  if (msg.author.bot) return; 
  if (!msg.content.startsWith(prefix)) return; 

  // Command Handler
  try {

      let commandFile = require(`./commands/${cmd}.js`); 
      commandFile.run(bot, msg, args);  

  } catch (e) {
      console.log(e.stack); 
  }
 
});


bot.login(token); 