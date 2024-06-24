const Discord = require('discord.js');
const fs = require('fs');
const configs = require('./config.js');

async function initializeBot(config) {
    const client = new Discord.Client();
    client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }

    client.once('ready', async () => {
        console.log(`Logged in as ${client.user.tag}`);

        client.user.setPresence({
            activity: { name: 'parsher baba', type: 'PLAYING' },
            status: 'online',
        });

        async function connectToVoiceChannel() {
            try {
                const channel = await client.channels.fetch(config.VOICE_CHANNEL_ID);
                if (channel && channel.type === 'voice') {
                    const connection = await channel.join();
                    console.log(`Joined voice channel: ${channel.name}`);
                    connection.on('disconnect', () => {
                        console.log(`Disconnected from voice channel: ${channel.name}`);
                        setTimeout(connectToVoiceChannel, 5000); // 5 saniye sonra tekrar dene
                    });
                } else {
                    console.error('Voice channel not found or not a voice channel.');
                }
            } catch (error) {
                console.error(`Could not join voice channel: ${error}`);
                setTimeout(connectToVoiceChannel, 5000); // 5 saniye sonra tekrar dene
            }
        }

        connectToVoiceChannel();
    });

    client.on('message', message => {
        if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;

        const args = message.content.slice(config.PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    });

    try {
        await client.login(config.TOKEN);
    } catch (error) {
        console.error(`Failed to login: ${error}`);
    }
}

configs.forEach(config => {
    initializeBot(config);
});