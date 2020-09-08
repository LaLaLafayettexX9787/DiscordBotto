const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.login(auth.token).then(() => {
    console.log("I am ready");

        var guild = client.guilds.get('639214033291051027');
        if(guild && guild.channels.get('734898382212169841')){
            guild.channels.get('734898382212169841').send("Bzzzzt! Good Morning Crater Trainer! Are you ready to go on a <@&734904907076731011> today?\n\n" + 
            "If you would like to see what today brings you be sure to fill out the form pinned in the <#734529017285312592> channel and submit it there!\n" +
            "Not a fan of doing things on Discord? Bzzzt! We have a journal on dA just in case! <https://www.deviantart.com/professorjadaeden/art/Zone-1-Venture-Gates-City-Docks-849258690>\n\n" +
            "**Dates:** We're only open for Ventures on **Mondays** and **Wednesdays**!"
            ).then(() => client.destroy());
        } else {
            console.log("nope");
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        }
        client.destroy();
    });

    //<@&734904907076731011> (Venture Tag)