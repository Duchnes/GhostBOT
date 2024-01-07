const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Wyrzuca użytkownika z serwera',
    usage: '.kick [@user] [powód]',
    execute: async(message, args) => {
        if(message.member.roles.cache.has(config.ModerationRolesID)){
            const member = message.mentions.members.first() || message.member;
            if(member){
                const Target = message.guild.members.cache.get(member.id);
                const reason = args.join(" ").slice(22);
                Target.kick();
    
                const Kick = new Discord.MessageEmbed()
                .setColor('00ff08')
                .setTitle(`Użytkownik został wyrzucony!`)
                .setDescription(`**Administrator: ${message.author}**\n**Wyrzucony: ${member.user.tag}**\n**Powód: ${reason}**`)
    
                message.channel.send({ embeds: [Kick] })
    
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