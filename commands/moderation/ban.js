const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Banuje użytkownika z serwera',
    usage: '.ban [@user] [powód] [czas]',
    execute: async(message, args) => {
        if(message.member.roles.cache.has(config.ModerationRolesID)) {
            const member = message.mentions.members.first() || message.member;
            if(member){
                const Target = message.guild.members.cache.get(member.id);
                const reason = args.join(" ").slice(22);
                Target.ban();
    
                const ban = new Discord.MessageEmbed()
                .setColor('00ff08')
                .setTitle(`Użytkownik został Zbanowany!`)
                .setDescription(`**Administrator: ${message.author}**\n**Zbanowany: ${member.user.tag}**\n**Powód: ${reason}**`)
    
                message.channel.send({ embeds: [ban] })
    
            }else{
                const Error = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`Wystąpił błąd!`)
            }
        } else {
            const NoPermission = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Błąd!`)
            .setDescription('Nie posiadasz uprawnień do wykonania tej czynności!')

            message.channel.send({ embeds: [NoPermission] })
        }
    }
}