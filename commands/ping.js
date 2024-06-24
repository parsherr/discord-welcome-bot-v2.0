module.exports = {
    name: 'ping',
    description: 'Ping command',
    async execute(message, args, client) {
        const sentMessage = await message.channel.send('Pinging...');
        const ping = sentMessage.createdTimestamp - message.createdTimestamp;
        sentMessage.edit(`ping ${ping}ms`);
    },
};