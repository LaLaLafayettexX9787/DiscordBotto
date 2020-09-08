const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.login(auth.token).then(() => {
    console.log("I am ready");

        var guild = client.guilds.get('639214033291051027');
        if(guild && guild.channels.get('734898382212169841')){
            guild.channels.get('734898382212169841').send("Bzzzzt! Good Morning Crater Trainer! Are you ready to gamble at the Crystal Crater Casino today?\n\n" + 
            "If you would like to try your luck please be sure to fill out a form at our official Casino Journal on dA!\n<https://www.deviantart.com/professorjadaeden/art/The-Crystal-Crater-Casino-854018312>\n\n" +
            "**Dates:** We're only open for Casinos on **Tuesdays** and **Thursdays**!"
            ).then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });

    //<@&734904907076731011> (Venture Tag)