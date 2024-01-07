const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Wyświetla avatar danego użytkownika',
    usage: '.avatar [@user]',
    execute: async(message, args) => {
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setTitle('Avatar')
        .setDescription(`Avatar użytkownika ${user}\n[Kliknij tutaj](${user.avatarURL({ dynamic: true, size: 2048 })}), aby wyświetlić obraz w większej rozdzielczości`)
        .setImage(user.avatarURL({ dynamic: true, size: 512 }))

        message.channel.send({ embeds: [embed] });
    }
}