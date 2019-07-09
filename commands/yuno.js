const Discord = require('discord.js');
exports.run = (bot, msg, args, tools) => {
  const yunoRandom = () => {
    const yunoUrls = [
      'https://media.giphy.com/media/iZMLj898vBTO0/giphy.gif',
      'https://i.imgur.com/24tJ6GR.jpg',
      'https://i.imgur.com/wArXBKL.jpg',
      'https://i.imgur.com/Re4r42I.jpg',
      'https://media.giphy.com/media/mpCm4gIYrsRfW/giphy.gif',
      'https://media.giphy.com/media/NOycFdfd1y7Cg/giphy.gif',
      'https://media.giphy.com/media/hFVI29iuk2wFy/giphy.gif',
      'https://media.giphy.com/media/cAz2SaPSmGb7i/giphy.gif',
      'https://media.giphy.com/media/ghEn82I9FXaCc/giphy.gif',
      'https://media.giphy.com/media/xCzLjOXGjHJoA/giphy.gif',
      'https://media.giphy.com/media/jiXksZUQ5qR6U/giphy.gif',
      'https://media.giphy.com/media/bJdixBv9m3i9y/giphy.gif',
      'https://media.giphy.com/media/pqbV29cgnPe1O/giphy.gif',
      'https://media.giphy.com/media/ngkJJzRphtw2Y/giphy.gif',
      'https://media.giphy.com/media/pkqxVoQFkEIPm/giphy.gif',
      'https://media.giphy.com/media/4d8RSzlCf5mIU/giphy.gif',
      'https://media.giphy.com/media/13iJBLh3tVBcjK/giphy.gif',
      'https://media.giphy.com/media/MpqVedudEhQZi/giphy.gif',
      'https://media.giphy.com/media/LilBrChYgKLF6/giphy.gif',
      'https://media.giphy.com/media/8cT95TAy7EUfe/giphy.gif',
      'https://media.giphy.com/media/msM0bMGzkzKZW/giphy.gif',
      'https://media.giphy.com/media/11Jq9Y9IqBj0xa/giphy.gif',
      'https://media.giphy.com/media/uOQlYht85pz0I/giphy.gif',
      'https://media.giphy.com/media/GvDpVKCIPi65i/giphy.gif',
      'https://media.giphy.com/media/78ybnQ0NdlMdi/giphy.gif',
      'https://media.giphy.com/media/il7F0UPinKIAo/giphy.gif',
      'https://media.giphy.com/media/e2AVmzjGLdTHO/giphy.gif',
      'https://media.giphy.com/media/gkMSgCFwqu7ks/giphy.gif',
      'https://media.giphy.com/media/4fEUDRbPKc7Ly/giphy.gif',
      'https://media.giphy.com/media/MxVoFXJIdr2w0/giphy.gif',
      'https://media.giphy.com/media/11tIhqckSfrRbG/giphy.gif',
      'https://media.giphy.com/media/13z7eTXLCjwj8k/giphy.gif',
      'https://media.giphy.com/media/p7PnZROoSwRfG/giphy.gif',
      'https://media.giphy.com/media/xk8g9zYO0SlO/giphy.gif',
      'https://media.giphy.com/media/bKZrjzrhwMUak/giphy.gif',
      'https://media.giphy.com/media/encTNwjWRCVeo/giphy.gif',
      'https://media.giphy.com/media/NbhiUWbCf2bZK/giphy.gif',
      'https://media.giphy.com/media/DuMKqWQee5aog/giphy.gif',
      'https://media.giphy.com/media/Hx88WN35tXVDi/giphy.gif',
      'https://media.giphy.com/media/d661WbOk1XEM8/giphy.gif',
      'https://media.giphy.com/media/Zw2kVP2EodFlK/giphy.gif',
      'https://media.giphy.com/media/A6Y0YE1RyjEtO/giphy.gif',
      'https://media.giphy.com/media/Q8vRWNrwQ35XW/giphy.gif',
      'https://media.giphy.com/media/iNEU4Syvj8BEI/giphy.gif',
      'https://media.giphy.com/media/gQYJNB2KrJCZq/giphy.gif',
      'https://media.giphy.com/media/390HeABNv0F5m/giphy.gif',
      'https://media.giphy.com/media/YXHIlslYoozRu/giphy.gif',
      'https://media.giphy.com/media/ZKOgCIJUbv3Fe/giphy.gif',
      'https://media.giphy.com/media/l9cisQdYo987S/giphy.gif',
      'https://media.giphy.com/media/106MUb9k3OpMIw/giphy.gif',
      'https://media.giphy.com/media/59hfyoBL3ayhq/giphy.gif',
      'https://media.giphy.com/media/aAwlNG14wcjKM/giphy.gif',
      'https://media.giphy.com/media/DNMAwwJXxlWAo/giphy.gif',
      'https://media.giphy.com/media/PqqUBwD0tq1Ko/giphy.gif',
      'https://media.giphy.com/media/8NsKXMxiiwT4c/giphy.gif',
      'https://media.giphy.com/media/oWGqQWk8kOpNe/giphy.gif',
      'https://media.giphy.com/media/MxVoFXJIdr2w0/giphy.gif',
      'https://media.giphy.com/media/29mdRt8rdINUs/giphy.gif',
      'https://media.giphy.com/media/YXHIlslYoozRu/giphy.gif',
      'https://media.giphy.com/media/h1kqbDta5bJ7y/giphy.gif',
      'https://media.giphy.com/media/G1lpKliS98jK0/giphy.gif',
      'https://media.giphy.com/media/SEVJmmWOPjGiA/giphy.gif',
      'https://media.giphy.com/media/DFS6bVHn3aTEQ/giphy.gif',
      'https://media.giphy.com/media/Zg76C67cpivOE/giphy.gif',
      'https://media.giphy.com/media/63sUorBeuP8Q/giphy.gif',
      'https://media.giphy.com/media/e2AVmzjGLdTHO/giphy.gif'

    ];
    var item = yunoUrls[Math.floor(Math.random() * yunoUrls.length)];
    return item;
  }
  msg.channel.send('yuno kills');
  let uBoard = new Discord.RichEmbed()
  .setColor('#ff4dd2')
  .setImage(yunoRandom())
  return msg.channel.send(uBoard); 
}  