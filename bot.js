const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '498284570165116950').join();
});

    client.on('ready', () => {
     client.user.setActivity("- MineCraftSK | Road To 4K .",{type: 'Listening'});

});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "MineCraft Ping")) {
        message.channel.sendMessage(':ping_pong: **__Pong! In__** `' + `${client.ping}` + ' ms`');
    }
});


client.login(process.env.BOT_TOKEN);
