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
    "thumbnail": { "url": "https://orig00.deviantart.net/5293/f/2019/104/1/a/kayte__2__by_rgssxtreme-dd4l8sh.png" },
    "image": { "url": "https://orig00.deviantart.net/7447/f/2019/104/c/9/kayte_by_rgssxtreme-dd4l85z.png" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Kayte Storm](https://www.deviantart.com/rgssxtreme/art/Kayte-Star-Merchunaries-2-793769111)"
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
        "name": "Status:",
        "value": "In Action"
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
    if (message.content === '!app Valoi') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/329c70a1-e832-4df7-9505-2075075b33f8/dd4oej0-3067641f-d376-4b80-b227-00fccb4c6a58.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyOWM3MGExLWU4MzItNGRmNy05NTA1LTIwNzUwNzViMzNmOFwvZGQ0b2VqMC0zMDY3NjQxZi1kMzc2LTRiODAtYjIyNy0wMGZjY2I0YzZhNTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ng277oYEMLVVu1QG1DpXHMWWfVsGuP3dtmth4gmQJcM" },
    "image": { "url": "https://img00.deviantart.net/6a51/i/2019/099/1/2/sm__valoi_by_lurkingshadoww-dd4713t.png" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Valoi Lucinai](https://www.deviantart.com/lurkingshadoww/art/SM-Valoi-793106777)"
      },
      {
        "name": "Age and DOB:",
        "value": "33 || January 8, 2001"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
      },
      {
        "name": "Weapon:",
        "value": "N/A",
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
   if (message.content === '!app Aviator') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/671ccb9d-0e7d-42b9-be0f-853b04657a9e/dd4nr3j-e6bfe888-fb53-43e6-88df-b7f8f8afa7c4.png/v1/fill/w_772,h_1035,strp/_sm2__aviator_by_invader_jay_122_dd4nr3j-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNyIsInBhdGgiOiJcL2ZcLzY3MWNjYjlkLTBlN2QtNDJiOS1iZTBmLTg1M2IwNDY1N2E5ZVwvZGQ0bnIzai1lNmJmZTg4OC1mYjUzLTQzZTYtODhkZi1iN2Y4ZjhhZmE3YzQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PLAOajYTqwwDgHnSucDgWVEXaBtDj2BlQFDXuljFxcc" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Aviator](https://www.deviantart.com/invader-jay-122/art/SM2-Aviator-793886959)"
      },
      {
        "name": "Age and DOB:",
        "value": "???"
      },
      {
        "name": "Gender:",
        "value": "???"
      },
      {
        "name": "Status:",
        "value": "In Action"
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
    if (message.content === '!app Naotan') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7923769-cd01-4521-8166-17ae63b50fb8/dd4nqpi-f641ca44-8436-4b4f-b3c4-acae5bd35aca.png/v1/fill/w_1613,h_495,strp/_s_m2__naotan_boulce_by_najishio_dd4nqpi-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvZTc5MjM3NjktY2QwMS00NTIxLTgxNjYtMTdhZTYzYjUwZmI4XC9kZDRucXBpLWY2NDFjYTQ0LTg0MzYtNGI0Zi1iM2M0LWFjYWU1YmQzNWFjYS5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.icAPV7HA6K8b_0v4Iu7wOvVDOKhTo1qgCajkz3XRMeE" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Naotan Boulce](https://www.deviantart.com/najishio/art/S-M2-Naotan-Boulce-793886454)"
      },
      {
        "name": "Age and DOB:",
        "value": "33 (old.)"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
      },
      {
        "name": "Weapon:",
        "value": "N/A",
        "inline": true
      },
      {
        "name": "Skill:",
        "value": " Being A Prick \n Avoiding Karma \n soft boy™",
        "inline": true
      }
    ]
  }
});
   }
   if (message.content === '!app Minah') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7923769-cd01-4521-8166-17ae63b50fb8/dd4faum-b02414df-5165-4c78-9477-86c1a2d45539.png/v1/fill/w_894,h_894,strp/_s_m2__minah_reed_by_najishio_dd4faum-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcL2U3OTIzNzY5LWNkMDEtNDUyMS04MTY2LTE3YWU2M2I1MGZiOFwvZGQ0ZmF1bS1iMDI0MTRkZi01MTY1LTRjNzgtOTQ3Ny04NmMxYTJkNDU1MzkucG5nIiwid2lkdGgiOiI8PTE1MzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nKkdkBYBAJXaL2dQPtXwlQa8cC3upvzJo7ChyIftcN0" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Minah Reed](https://www.deviantart.com/najishio/art/S-M2-Minah-Reed-793492654)"
      },
      {
        "name": "Age and DOB:",
        "value": "23"
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
        "name": "Skills:",
        "value": "N/A",
        "inline": true
      }
    ]
  }
});
   }
   if (message.content === '!app Patches') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2916859f-063b-413f-9ee6-c2fb0366e0f8/dd4o76h-d6d02b90-bf7d-40b8-add8-222717597a84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5MTY4NTlmLTA2M2ItNDEzZi05ZWU2LWMyZmIwMzY2ZTBmOFwvZGQ0bzc2aC1kNmQwMmI5MC1iZjdkLTQwYjgtYWRkOC0yMjI3MTc1OTdhODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AhJWHxC33i-_CzbZqE73JrWyGE5l5NfGMcWo_E9y44Y" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2916859f-063b-413f-9ee6-c2fb0366e0f8/dd4nihm-3c063205-5110-41f6-8fc8-7d909411a726.png/v1/fill/w_942,h_848,q_70,strp/__sm2___tyden_patches_smith_by_adgerelli_dd4nihm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMiIsInBhdGgiOiJcL2ZcLzI5MTY4NTlmLTA2M2ItNDEzZi05ZWU2LWMyZmIwMzY2ZTBmOFwvZGQ0bmlobS0zYzA2MzIwNS01MTEwLTQxZjYtOGZjOC03ZDkwOTQxMWE3MjYucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DXRDW1IFjDZYAEvl5SuxWhoaOqsPnxXE9MZWHlig40g" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Tyden Patches Smith](https://www.deviantart.com/adgerelli/art/SM2-Tyden-Patches-Smith-793875802)"
      },
      {
        "name": "Age and DOB:",
        "value": "27 || August 18, 2004"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
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
   if (message.content === '!app Isabelle') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://pre00.deviantart.net/f3a1/th/pre/f/2019/104/7/6/panda_by_ayakoko-dd4mmj8.png" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Isabelle Brooks](https://www.deviantart.com/ayakoko/art/SM2-Isabelle-Brooks-793834388)"
      },
      {
        "name": "Age and DOB:",
        "value": "28"
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
   if (message.content === '!app Martin') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4afade57-66c5-4ead-a950-096d6c9bb0a7/dd4jjl3-86199a36-d1c2-436c-aca4-0badd1fc27c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZmFkZTU3LTY2YzUtNGVhZC1hOTUwLTA5NmQ2YzliYjBhN1wvZGQ0ampsMy04NjE5OWEzNi1kMWMyLTQzNmMtYWNhNC0wYmFkZDFmYzI3YzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3OV7CL_yyvHKGcfRUlK4CJHDXKmM7-cGEPeeYHDp4rc" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4afade57-66c5-4ead-a950-096d6c9bb0a7/dd4jixa-6a8bc968-ac45-4023-9ebc-d13cfec58fca.png/v1/fill/w_1024,h_273,q_80,strp/sm2_martin__description_added__by_sbinoplane_dd4jixa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjczIiwicGF0aCI6IlwvZlwvNGFmYWRlNTctNjZjNS00ZWFkLWE5NTAtMDk2ZDZjOWJiMGE3XC9kZDRqaXhhLTZhOGJjOTY4LWFjNDUtNDAyMy05ZWJjLWQxM2NmZWM1OGZjYS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fHXQy4T7t0XuKr4Pz9CGhhkldSOW1-HpA5VZev2RMwc" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Martin Ray](https://www.deviantart.com/sbinoplane/art/SM2-Martin-793689742)"
      },
      {
        "name": "Age and DOB:",
        "value": "30"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
      },
      {
        "name": "Weapon:",
        "value": "M16 Assault Rifle",
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
   if (message.content === '!app Hickory') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c446a47-33b6-4106-b46a-f1c9e8e0e3cc/dd4g57o-690d740b-d6da-4b96-9c2a-62f11c02a296.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjNDQ2YTQ3LTMzYjYtNDEwNi1iNDZhLWYxYzllOGUwZTNjY1wvZGQ0ZzU3by02OTBkNzQwYi1kNmRhLTRiOTYtOWMyYS02MmYxMWMwMmEyOTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B13H8BouksgQ4WLhJiGY35axz5s6EZ_vZHxgZlxTRk0" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Karatsuri Ginha || Hickory Silverleaf](https://www.deviantart.com/jshadowm/art/SM2-Karatsuri-Ginha-793532004)"
      },
      {
        "name": "Age and DOB:",
        "value": "29 || May 3"
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
   if (message.content === '!app Kit') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f0cdcdc-77d5-47db-8aea-c893e07a685f/dd4ycbf-51039e95-f15a-4ee6-8552-ebfee3e25a01.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmMGNkY2RjLTc3ZDUtNDdkYi04YWVhLWM4OTNlMDdhNjg1ZlwvZGQ0eWNiZi01MTAzOWU5NS1mMTVhLTRlZTYtODU1Mi1lYmZlZTNlMjVhMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xXqspjk3i6AcSV547C8oEI5IWhIThDos82H9dE2WaC0" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f0cdcdc-77d5-47db-8aea-c893e07a685f/dd4fby2-7189975b-f559-4a26-b495-23fd8908afb0.png/v1/fill/w_908,h_881,strp/__sm2___pika_kit___by_orandoggo_dd4fby2-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI0MiIsInBhdGgiOiJcL2ZcLzVmMGNkY2RjLTc3ZDUtNDdkYi04YWVhLWM4OTNlMDdhNjg1ZlwvZGQ0ZmJ5Mi03MTg5OTc1Yi1mNTU5LTRhMjYtYjQ5NS0yM2ZkODkwOGFmYjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.b1Ofp1I9lRBjn0d4YAmS-afm-we0DT2Eq4e1vnlSMiA" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Kaytlyn HanJun](https://www.deviantart.com/orandoggo/art/SM2-Pika-Kit-793494074)"
      },
      {
        "name": "Age and DOB:",
        "value": "27"
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
   if (message.content === '!app Mist') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1c55511-87fa-4142-8057-335c73921f78/dd51izs-45e3e0bc-da0c-47e1-a20f-062fd7551b66.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxYzU1NTExLTg3ZmEtNDE0Mi04MDU3LTMzNWM3MzkyMWY3OFwvZGQ1MWl6cy00NWUzZTBiYy1kYTBjLTQ3ZTEtYTIwZi0wNjJmZDc1NTFiNjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IFjIJ2q9Jo-uuKcilPqVgtzUa-tPgztY1ojZhryESJ8" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1c55511-87fa-4142-8057-335c73921f78/dd4crkj-8936947b-30eb-419e-892f-080caf7c0cbf.png/v1/fill/w_892,h_896,q_70,strp/sm2___mist_by_heavenswave_dd4crkj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4NSIsInBhdGgiOiJcL2ZcL2YxYzU1NTExLTg3ZmEtNDE0Mi04MDU3LTMzNWM3MzkyMWY3OFwvZGQ0Y3Jrai04OTM2OTQ3Yi0zMGViLTQxOWUtODkyZi0wODBjYWY3YzBjYmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JukwdBZCFVfUZZVD28OgfFA0Lpxzy20WTHAX8QVncLE" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Mist Nikolae](https://www.deviantart.com/heavenswave/art/SM2-Mist-793374355)"
      },
      {
        "name": "Age and DOB:",
        "value": "28"
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
   if (message.content === '!app Alex') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://orig00.deviantart.net/160c/f/2019/110/d/a/sm2_alex_w__icon_by_skullychu-dd52vnj.png" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6a52c3-a405-4610-9471-2a61252c81fa/dcshimp-53d23a75-c8ba-4b61-9a45-7fd332c05f2d.png/v1/fill/w_690,h_1158,strp/alex_w__sm2_by_skullychu_dcshimp-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNyIsInBhdGgiOiJcL2ZcLzRiNmE1MmMzLWE0MDUtNDYxMC05NDcxLTJhNjEyNTJjODFmYVwvZGNzaGltcC01M2QyM2E3NS1jOGJhLTRiNjEtOWE0NS03ZmQzMzJjMDVmMmQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yYQVjKzJZJwYVXq8VKiPSmjLcnM94q53WhQHjy6d85Q" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Alex W.](https://www.deviantart.com/skullychu/art/Alex-W-SM2-773440657)"
      },
      {
        "name": "Age and DOB:",
        "value": "26"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
      },
      {
        "name": "Weapon:",
        "value": "Submachine Gun",
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
   if (message.content === '!app Faith') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/863c4496-a251-40c5-acca-8351b6436146/dd5eoql-f108f7bc-1820-47e8-ad86-ba77feb76ebb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2M2M0NDk2LWEyNTEtNDBjNS1hY2NhLTgzNTFiNjQzNjE0NlwvZGQ1ZW9xbC1mMTA4ZjdiYy0xODIwLTQ3ZTgtYWQ4Ni1iYTc3ZmViNzZlYmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hv7KWK5rH50G0I0JOSYOODJzF6olp1kf8L1z7Y_ugR8" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/863c4496-a251-40c5-acca-8351b6436146/dd46owd-a203ef1a-6a1e-4ea2-a695-a782c514640c.png/v1/fill/w_860,h_929,strp/_sm2__faith_star_by_pikacshu_dd46owd-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwNiIsInBhdGgiOiJcL2ZcLzg2M2M0NDk2LWEyNTEtNDBjNS1hY2NhLTgzNTFiNjQzNjE0NlwvZGQ0Nm93ZC1hMjAzZWYxYS02YTFlLTRlYTItYTY5NS1hNzgyYzUxNDY0MGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VuG6wpj0axYCE_tQmB2QNCuah3tllHtL1w2F317gzeI" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Faith Star](https://www.deviantart.com/pikacshu/art/SM2-Faith-Star-793090957)"
      },
      {
        "name": "Age and DOB:",
        "value": "27"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
      },
      {
        "name": "Weapon:",
        "value": "Shotgun",
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
   if (message.content === '!app Royce') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0c351a7-e37f-46c9-bdfb-89f59181326e/dd5c8n6-134ce0a8-8998-4bc1-8574-07c5310a3d71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwYzM1MWE3LWUzN2YtNDZjOS1iZGZiLTg5ZjU5MTgxMzI2ZVwvZGQ1YzhuNi0xMzRjZTBhOC04OTk4LTRiYzEtODU3NC0wN2M1MzEwYTNkNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ndreNy8qCV0Rub3QGUWVa7bsU-HnCxrMMz7LCeHjBdc" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0c351a7-e37f-46c9-bdfb-89f59181326e/dd5c867-d3a7f193-f2a8-4fcc-aa5e-15f58f8a3e34.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwYzM1MWE3LWUzN2YtNDZjOS1iZGZiLTg5ZjU5MTgxMzI2ZVwvZGQ1Yzg2Ny1kM2E3ZjE5My1mMmE4LTRmY2MtYWE1ZS0xNWY1OGY4YTNlMzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nVr-bl2D7lreNjU_wQooAO7M_8IYz7EUmgFcLmaF9zg" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Royce](https://www.deviantart.com/darknesstiger/art/SM2-Royce-795028831)"
      },
      {
        "name": "Age and DOB:",
        "value": "27"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
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
   if (message.content === '!app Coral') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f687462-50c1-40c0-bc87-324de1ba1bf6/dd4q4sh-5ce75bff-43f2-4808-8210-43ccba23b5a4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmNjg3NDYyLTUwYzEtNDBjMC1iYzg3LTMyNGRlMWJhMWJmNlwvZGQ0cTRzaC01Y2U3NWJmZi00M2YyLTQ4MDgtODIxMC00M2NjYmEyM2I1YTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q9mJjGsKeRz0r1Cdn0v4IIOQ3mGMPk310-dtrhnXOW8" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f687462-50c1-40c0-bc87-324de1ba1bf6/dd4q4li-838fe8f2-0d95-42b9-b229-de086b9193dc.png/v1/fill/w_816,h_979,strp/_sm2____coral_seaver_by_verumtee_dd4q4li-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyOSIsInBhdGgiOiJcL2ZcLzRmNjg3NDYyLTUwYzEtNDBjMC1iYzg3LTMyNGRlMWJhMWJmNlwvZGQ0cTRsaS04MzhmZThmMi0wZDk1LTQyYjktYjIyOS1kZTA4NmI5MTkzZGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Tq34U2e5lU7HSWNgH48dWvOuH_7kXDydT6B2xkF_7Yc" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Coral Seaver](https://www.deviantart.com/verumtee/art/SM2-Coral-Seaver-793997766)"
      },
      {
        "name": "Age and DOB:",
        "value": "35"
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
   if (message.content === '!app Deklyn') {
    	message.reply({
  
  "embed": {
    "title": "Mercenary Database",
    "description": "",
    "color": 0xffbf00,
    "thumbnail": { "url": "https://cdn.discordapp.com/embed/avatars/0.png" },
    "image": { "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4afade57-66c5-4ead-a950-096d6c9bb0a7/dd5eunk-07c5c4ab-f29a-4ce4-ba27-4ddc2b38a414.png/v1/fill/w_1024,h_731,strp/deklyn_app_by_sbinoplane_dd5eunk-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMxIiwicGF0aCI6IlwvZlwvNGFmYWRlNTctNjZjNS00ZWFkLWE5NTAtMDk2ZDZjOWJiMGE3XC9kZDVldW5rLTA3YzVjNGFiLWYyOWEtNGNlNC1iYTI3LTRkZGMyYjM4YTQxNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9dXbl1Ae2vDTPKVTJSQ35k-s4V-kZyfLuH1N3xk4unA" },
    "fields": [
      {
        "name": "Name:",
        "value": "[Dex](https://www.deviantart.com/sbinoplane/art/Deklyn-App-795151280)"
      },
      {
        "name": "Age and DOB:",
        "value": "30"
      },
      {
        "name": "Gender:",
        "value": "Male"
      },
      {
        "name": "Status:",
        "value": "In Action"
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
    
    if (message.content === 'hey tenora, whose the cutest bitch on this planet') {
    	message.reply('White, obviously.');
  	}
});


client.login(process.env.BOT_TOKEN);

