module.exports = {
    name: 'guildMemberAdd',
    async execute(client, member) {
        const user = member.user;
        const channel = client.channels.cache.get(config.WelcomeChannel)

        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Lotnisko')
        .setDescription(`**Witaj na ${config.ServerName} <@${user.id}> !**`)

        message.channel.send({ embeds: [embed] });
    }
}