const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "!";
client.on('message', message => {
   if (message.content === '!app Jessica') {
    	message.reply(`\n Name: Jessica Aquila \n Age: 25`);
        
  	}
    if (message.content === '!app') {
    	message.reply('please specify the agent to follow up on.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

