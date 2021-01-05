// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
  }
}

function randInsult(name) {
  var comps = ["You have a plentiful lack of wit.", "Thou art the cap of all the fools.", "Your wit’s as thick as a Tewkesbury mustard.", 
               "Your abilities are too infant-like for doing much alone.", "If thou wilt needs marry, marry a fool; for wise men know well enough what monsters you make of them.",
               "More of your conversation would infect my brain.", "Thou sodden-witted lord! Thou hast no more brain than I have in mine elbows!", 
               "Your brain is as dry as the remainder biscuit after voyage.", "If you spend word for word with me, I shall make your wit bankrupt.",
               "He has not so much brain as ear-wax", "Away thou rag, thou quantity, thou remnant.", "Foul spoken coward, that thund’rest with thy tongue, and with thy weapon nothing dares perform.",
               "Go, prick thy face, and over-red thy fear, Thou lily-liver’d boy.","You, minion, are too saucy.", "I must tell you friendly in your ear, sell when you can, you are not for all markets.",
               "I scorn you, scurvy companion.","You are not worth another word, else I’d call you knave."," Thy sin’s not accidental, but a trade.", "A fool, an empty purse. There was no money in’t.",
               "Thy tongue outvenoms all the worms of Nile.","Away, you mouldy rogue, away!","Would thou wert clean enough to spit upon.","I do desire that we may be better strangers.",
               "You are as a candle, the better burnt out.", "Drunkenness is your best virtue"];
  return comps[Math.floor(Math.random() * comps.length)];
}

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    wait(50);
    if(msg.channel.name === 'role-assignment') {
        switch(msg.content.toLowerCase()) {
            default:
                if(msg.content.toLowerCase().includes("sorry, i didn't understand that.")) {
                    wait(1000);
                    msg.delete();
                    break;
                }
                else {
                    msg.reply("Sorry, I didn't understand that.");
                    msg.delete();
                    break;
                }
            case "rift":
            case "rift s":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "Oculus Rift/Rift S"));
                msg.delete();
                break;
            case "vive":
            case "vive pro":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "HTC Vive/Vive Pro"));
                msg.delete();
                break;
            case "wmr":
            case "windows mixed reality":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "WMR"));
                msg.delete();
                break;
            case "psvr":
            case "playstation vr":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "Playstation VR"));
                msg.delete();
                break;
            case "quest":
            case "oculus quest":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "Oculus Quest"));
                msg.delete();
                break;
            case "no vr":
            case "novr":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "No VR"));
                msg.delete();
                break;
            case "index":
            case "valve index":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "Valve Index"));
                msg.delete();
                break;
            case "pimax":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "Pimax"));
                msg.delete();
                break;
            case "yes":
                msg.member.removeRole(msg.guild.roles.find(r => r.name === "NoRole"));
                msg.member.addRole(msg.guild.roles.find(r => r.name === "readers"));
                msg.delete();
                break;
        }
    }
  else if(msg.channel.name === 'talk-to-the-bots') {
    switch(msg.content.toLowerCase()) {
      case "trello":
      case "roadmap":
        msg.channel.send("https://trello.com/b/2AFssKxP/the-summit-vr-trello");
        break;
      case "help":
        msg.channel.send("Commands are:\n```trello \n sup \n members? \n favorite game? \n worst game? \n insult```")
        break;
      case "sup":
        msg.channel.send("Sup " + msg.member.user.username + ".");
        break;
      case "members?":
        msg.channel.send("There are " + msg.guild.memberCount + " members.");
        break;
      case "favorite game?":
        msg.channel.send("i mean if i had to guess, idk. I don't have favorites, i'm a dumbass robot lol");
        break;
      case "worst game?":
        msg.channel.send("no such thing as a bad game (this is literally false btw)");
        //msg.user.send("IT'S THE SUMMIT IT SUCKS I'VE SEEN IT");
        break;
      case "earth418":
      case "earth":
      case "ali":
        msg.channel.send("Nice try. My creator ~~and master~~ is not to be trifled with nor summoned. Begone!");
        break;
      case "miso":
      case "~miso":
        msg.channel.send("A very cool and strong man that will never give you up https://www.youtube.com/watch?v=j5a0jTc9S10");
        break;
      case "batman":
      case "~batman":
        msg.channel.send("Reeeeeeeeeeeeeeeeeee");
        break;
      case "firerocket":
      case "insult":
      case "firerocket33":
        msg.channel.send(randInsult());
        break;
      case "doublemint":
      case "vrclub":
        msg.channel.send("VRClub is a fun, discord-based community group where you can meet and group up with people in VR," +
                         "hang out and talk, and participate in game giveaways. Come join the shenanigans at: https://discord.gg/gzbUrrb");
        break;
    }
  }
});

client.on("guildMemberAdd", (newmem) => {
    newmem.send("Welcome to The Summit VR official discord server! \n" + 
    "To speak in the channels, please type what headset you own in #role-assignment. If you don't have a VR headset, just say No VR. \n" + 
    "For information about the game, visit #information, where you will find a brief summary of the game. This information is not finalized. \n" + 
    "If you'd like to watch some videos or look at screenshots from the game, check out #devlog. To comment on these, you can type in #devlog-feedback. \n" +
    "The game is not available yet. Tests will become available soon. A roadmap is available on our trello here: https://trello.com/b/2AFssKxP/the-summit-vr-trello \n" +
    "Please stay and enjoy your time on the server. Enjoy your day and have fun!");
    newmem.guild.channels.get("562799870977769473").send("Welcome " + newmem.user.username + "!\n" +
    "Please identify your headset in <#575456660043202572> and indicate whether or not you would like updates from the developer. \n" +
    "For more information, check <#570659514248855562>, and <#562799901940121620> has tons of screenshots and videos from the game. \n" + "The server now has " + newmem.guild.memberCount + " members!");
    newmem.addRole(newmem.guild.roles.find(r => r.name === "NoRole"));
});

client.on("guildMemberRemove", (leftmem) => {
    //leftmem.send("We're sad to see you go! If you ever want to join back, add @earth418#8369 and ask him.");
    leftmem.guild.channels.get("562799870977769473").send("Goodbye " + leftmem.user.username + "!\n" + "I'm sure you had a good reason to leave :(");
});

client.login(process.env.TOKEN);