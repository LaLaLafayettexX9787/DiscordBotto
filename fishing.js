const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.login(auth.token).then(() => {
    console.log("I am ready");

        var guild = client.guilds.get('639214033291051027');
        if(guild && guild.channels.get('734898382212169841')){
            guild.channels.get('734898382212169841').send("Bzzzzt! Good Morning Crater Trainer! Are you ready to go Fishing today?\n\n" + 
            "If you would like to see what might be in the water today fill out the form pinned in the  channel and submit it there!\n\n" +
            "**Dates:** We're only open for Fishing on **Saturdays**!"
            ).then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
            //<#750847262795628556> channel example
        }
        client.destroy();
    });

    //<@&734904907076731011> (Venture Tag)