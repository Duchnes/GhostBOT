const Discord = require('discord.js');
const fs = require('fs');
global.config = require('./config/config.json')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,

    ]
});

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const prefix = config.Prefix;

client.once('ready', () =>
{
    console.log('✅ | Bot został załadowany pomyślnie!');
    console.log(`✅ | Zalogowano jako [${client.user.tag}]`)
    client.user.setActivity('BlueRP')
});

client.on('messageCreate', async message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Ta komenda nie działa poprawnie!');
    }
});

client.on('interactionCreate', async interaction => {
    if(interaction.customId = 'verify') {
        const roleId = config.VerificatedRoleID;
        const role = interaction.guild.roles.cache.get(roleId)

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Nadano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }
});

client.login(config.Token);
