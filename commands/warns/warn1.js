const Discord = require('discord.js');

module.exports = {
    name: 'warn1',
    description: 'Nadaje pierwszego warna użytkownikowi',
    usage: '.warn1 [@user]',
    execute: async(message, args) => {
        if(message.member.roles.cache.has(config.ModerationRolesID)) {
            const member = message.mentions.members.first() || message.member;
        const reason = args.join(" ").slice(22);
        if (message.member.roles.cache.some(role => role.name === config.Warn1RoleName)) {
            const errembed = new Discord.MessageEmbed()
            .setTitle('Błąd!')
            .setColor('RED')
            .setDescription(`Ta osoba ma już pierwszego warna!`)

            message.channel.send({ embeds: [errembed] });
        } else {
            if(member){
                const Target = message.guild.members.cache.get(member.id);
                member.roles.add(config.Warn1RoleID)
            }
            
            const embed = new Discord.MessageEmbed()
            .setTitle('Nadano warna!')
            .setColor('GREEN')
            .setDescription(`**Administrator:** ${message.author}\n**Ukarany:** ${member.user}\n**Powód:** ${reason}`)
    
            message.channel.send({ embeds: [embed] });
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