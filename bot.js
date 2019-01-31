const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "!";
client.on('message', message => {
   if (message.content === '!app Jessica') {
    	message.reply({
  "embed": {
    "title": "_`STARS PROFILE PREVIEW`_",
    "url": "https://discordapp.com",
    "color": 0xffbf00,
    "timestamp": "2019-01-31T01:43:56.510Z",
    "thumbnail": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
      {
        "name": "Name:",
        "value": "`Jessica Aquila`"
      },
      {
        "name": "Age:",
        "value": "`25`"
      },
      {
        "name": "Alignment:",
        "value": "Lol I dont even fucken know which side is what this is just a demo anyways."
      },
      {
        "name": "Primary Weapon:",
        "value": "`Sniper Rifle`",
        "inline": true
      },
      {
        "name": "Weapon Mastery",
        "value": "`good succ ability`",
        "inline": true
      }
    ]
  }
});
          if (message.content === '!events sm') {
    	message.reply({
  "embed": {
    "title": "_`CURRENT EVENTS`_",
    "color": 0xffbf00,
    "thumbnail": {
      "url": ""
    },
    "image": {
      "url": ""
    },
    "fields": [
      {
        "name": "EVENTS:",
        "value": "Nothing is going on at the moment. All is quiet on comms."
      }
    ]
  }
});
  	}
    if (message.content === '!app') {
    	message.reply('please specify the agent to follow up on.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
