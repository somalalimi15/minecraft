const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '498284570165116950').join();
});

    client.on('ready', () => {
     client.user.setActivity("- MineCraftSK | Road To 4K .",{type: 'Playing'});

});



client.login(process.env.BOT_TOKEN);
