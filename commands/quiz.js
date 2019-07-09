const Discord = require('discord.js');
const {quiz} = require('./questions');
const bot = new Discord.Client();
let coins = {};

exports.run = async(bot, msg, args, tools) => {  
  let options = {
    max: 1, 
    time: 20050, 
    errors: ['time'],
  };
  let item = quiz[Math.floor(Math.random() * quiz.length)];
  function getTotal() {
    return quiz.length;
  }
  function iter(arr) {
    for(let i = 0; i < arr.length; i++) {
      return arr[i];
    }
  }
  let qEmbed = new Discord.RichEmbed()
    .setTitle(`${item.q}`)
    .setDescription(`Варианты ответов:  **${item.vars[0].vA}**, **${item.vars[1].vB}**, **${item.vars[2].vC}**, **${item.vars[3].vD}**`) 
    .setColor('RANDOM')
    .setImage(item.url)
    await msg.channel.send(qEmbed);
 
  try {

    
    let collected = await msg.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    let winnerMessage = collected.first();
    if(!coins[winnerMessage.author.tag]) {
      coins[winnerMessage.author.tag] = {
        coins: 0
      }
    }
    if(winnerMessage) {
      coins[winnerMessage.author.tag] = {
        coins: coins[winnerMessage.author.tag].coins + 1
      };
    }
  
    if( coins[winnerMessage.author.tag].coins >= 5) {
      coins[winnerMessage.author.tag].coins = 0;
      return msg.channel.send({embed: new Discord.RichEmbed()
        .setTitle(`Поздравляем самого блеать умного типа `)
        .setAuthor(`Победитель: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
        .setImage('https://media.giphy.com/media/g9582DNuQppxC/giphy.gif')
        .setColor('RANDOM')
      });
    
    }
    return msg.channel.send({embed: new Discord.RichEmbed()
              .setAuthor(`Победитель: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
              .setTitle(`Правильный ответ: \`${winnerMessage.content}\``)
              .setDescription(`${winnerMessage.author} имеет ${coins[winnerMessage.author.tag].coins} монет`)
              .setFooter(`Вопрос был: ${item.q}`)
              .setColor('RANDOM')
            });
  } catch(e) {
    return msg.channel.send({embed: new Discord.RichEmbed()
              .setAuthor('Никто не ответил за отведённое время!')
              .setTitle(`Правильный ответ никто не узнает`)
              .setFooter(`Вопрос был: ${item.q}`)
            })

  }

}
