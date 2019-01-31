const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
   if (message.content === '!app Jessica') {
    	message.reply({
  
  "embed": {
    "title": "title",
    "description": "t",
    "color": 0xffbf00,
    "thumbnail": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
      {
        "name": "🤔",
        "value": "some of these properties have certain limits..."
      },
      {
        "name": "😱",
        "value": "try exceeding some of them!"
      },
      {
        "name": "🙄",
        "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "these last two",
        "inline": true
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "are inline fields",
        "inline": true
      }
    ]
  }
});
   }
   if (message.content === '!app meh') {
    	message.reply({
  
  "embed": {
    "title": "Current STAR Merchunary Events",
    "description": "Wonder what's going on in the SM Universe? This is your one stop shop for all of your gun shooting needs.",
    "color": 0xffbf00,
    "fields": [
      {
        "name": "Main Events:",
        "value": "Nothing Going on at the moment! \n "
      },
      {
        "name": "Sub Events:",
        "value": "Nothing Going on at the moment! \n "
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

