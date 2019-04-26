const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
   if (message.content === '!app Jessica') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "fields": [
      {
        "name": "Name:",
        "value": "Jessica Aquila"
      },
      {
        "name": "Age and DOB:",
        "value": "26 || April, 17"
      },
      {
        "name": "Gender:",
        "value": "Female"
      },
      {
        "name": "Status:",
        "value": "In Action"
      },
      {
        "name": "Weapon:",
        "value": "Sniper Rifle",
        "inline": true
      },
      {
        "name": "Skill:",
        "value": "N/A",
        "inline": true
      }
    ]
  }
});
   }
   if (message.content === '!app Kayte') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "fields": [
      {
        "name": "Name:",
        "value": "Kayte Storm"
      },
      {
        "name": "Age and DOB:",
        "value": "22 || September 22, 2010"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Weapon:",
        "value": "N/A",
        "inline": true
      },
      {
        "name": "Skills:",
        "value": "N/A",
        "inline": true
      }
    ]
  }
});
   }

   if (message.content === '!events sm') {
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
   if (message.content === '!help') {
    	message.reply({
  
  "embed": {
    "title": "Help Menu",
    "description": "Little lost? Here's a list of commands that the bot accepts. \n \n Application lookup: `!app [Name of Character (Case Sensitive)]` \n Current Events: `!events [sm, fs]` \n Store Stock Check: `!store [Name of Store]`",
    "color": 0xffbf00,
  }
});
   }
    if (message.content === '!app') {
    	message.reply('please specify the agent to follow up on.');
  	}
});

client.login(process.env.BOT_TOKEN);

