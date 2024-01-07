const Discord = require('discord.js');

module.exports = {
    name: 'ip',
    description: 'Wyświetla IP serwera',
    usage: '.ip',
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('IP')
        .setColor('BLUE')
        .setDescription('Serwer jeszcze nie wystartował!')

        message.channel.send({ embeds: [embed] });
    }
}