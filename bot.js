﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607103894853517324")
setInterval(function() {
channel.send(`تـآآيـيـلر كاريزما تـآآيـيـلر كاريزما تـآآيـيـلر كاريزما تـآآيـيـلر كاريزما تـآآيـيـلر كاريزما تـآآيـيـلر كاريزما تـآآيـيـلر كاريزما`);
}, 30)
})

client.login(process.env.BOT_TOKEN);