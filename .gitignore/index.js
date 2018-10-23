const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("RushWayBot | !uelp");
    console.log("Le RushWayBot a bien ete connecte");
});

bot.login("NTAzODg3MjE2NjM2ODU0Mjgz.DrCtfQ.Jzz0Dbf-u8ShQ_sW9nm6u19APl8");
