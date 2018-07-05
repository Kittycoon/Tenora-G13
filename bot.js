const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!the raven cries') {
        document.write("you cannot understand this.");
    	document.write("\n");
        document.write("Leave.");
  	}
    if (message.content === '!app') {
    	message.reply('please specify the agent to follow up on.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
