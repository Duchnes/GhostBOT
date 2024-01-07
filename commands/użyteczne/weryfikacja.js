const Discord = require('discord.js');

module.exports = {
    name: 'weryfikacja',
    description: 'Wysyła wiadomość z możliwością weryfikacji',
    usage: '.weryfikacja',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('verify')
            .setLabel('Zweryfikuj się')
            .setStyle('SUCCESS')
        );
      
        const embed = new Discord.MessageEmbed()
        .setTitle('Weryfikacja')
        .setDescription('Kliknij poniższy przycisk aby się zweryfikować!')

        message.channel.send({ embeds: [embed], components: [buttons] });
    }
}