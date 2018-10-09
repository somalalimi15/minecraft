const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready',async () => {
client.channels.find(ch => ch.id === "498284570165116950" && ch.type === 'MineCraft Join Room').join();
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
