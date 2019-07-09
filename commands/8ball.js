const Discord = require('discord.js');

exports.run = (bot, msg, args, tools) => {
        let question = msg.content.split(/\s+/g).slice(1).join(" ");
        if (!question) {
            return msg.channel.send('You must provide a question! **Usage: -8ball <question>**');

        }
    var answer = ['It is certain',
                                    'It is decidedly so',
                                    'Without a doubt',
                                    'Yes, definitely',
                                    'You may rely on it',
                                    'As I see it, yes',
                                    'Most likely',
                                    'Outlook good',
                                    'Yes',
                                    'Signs point to yes',
                                    'Reply hazy try again',
                                    'Ask again later',
                                    'Better not tell you now',
                                    'Cannot predict now',
                                    'Concentrate and ask again',
                                    'Don\'t count on it',
                                    'My reply is no',
                                    'My sources say no',
                                    'Outlook not so good',
                                    'Very doubtful'];
            const ballEmbed = new Discord.RichEmbed()
                .setAuthor(question)
                .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + '.')
                .setColor(0x646770);
                msg.channel.send(ballEmbed);  
}  