var prefix = "!"
const Discord = require("discord.js");

const bot = new Discord.Client({discordEveryone: true});

var dispatcher;

bot.on("ready", async () => {
  console.log(`${bot.user.username} est connecté !`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.author.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var args = message.content.substring(prefix.length).split(" ");

var prefix = "!"
const Discord = require("discord.js");

const bot = new Discord.Client({discordEveryone: true});

var dispatcher;

bot.on("ready", async () => {
  console.log(`${bot.user.username} est connecté !`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.author.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var args = message.content.substring(prefix.length).split(" ");

bot.on("guildMemberAdd", member => {

  let bvnEmbed = new Discord.RichEmbed()
    .setDescription(":wave: • Bienvenue !")
    .setColor("#00ff3b")
    .addField(`:bust_in_silhouette: • Utilisateur » ${member.user.username}`)
    .addField(`:arrow_right: • Passe du bon temps sur nos plateformes !`)

     member.guild.channels.find("name", "👋╿вιєηνєηυє").send(bvnEmbed);
});


  if(cmd === `${prefix}jeu`){
    if(message.member.id != '396722578812829700') return message.channel.send(":x: • Tu n'as pas la permission d'exécuter cette commande !");

    else {
      let game = args.slice(1).join(' ')
    message.channel.send(`Description : ${game}`)
    bot.user.setActivity(game);
    }
  }

  if(cmd === `${prefix}chien`){

    var chien = [

      "https://media.giphy.com/media/yjGdFXjeQsDqJNSzE4/giphy.gif",
      "https://media.giphy.com/media/JfDNFU1qOZna/giphy.gif",
      "https://media.giphy.com/media/d3Fym9OQ08o6agYE/giphy.gif"

    ];

    var gif = chien[Math.floor(Math.random() * chien.length)];

    var dog_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(":dog: • Woufff")
    .setImage(gif)
    message.channel.send(dog_embed);
    }
  

  if(cmd === `${prefix}dm`){

    let helpEmbed = new Discord.RichEmbed()
    .setDescription(":grey_question: • **Aide - RushWayBot**")
    .setColor("#ff0000")
    .addField(":trackball: • Préfixe")
    .addField("!")
    .add
    .setFooter("Bot développé par RushWay.")
    message.author.send(helpEmbed);
    message.delete().catch(O_o=>{});
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: • Cet utilisateur est introuvable !");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous n'avez pas la permission d'exécuter cette commande !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous ne pouvez pas expulser cet utilisateur !");

    let banEmbed = new Discord.RichEmbed()
    .setDescription(":door: • Bannissement")
    .setColor("#ff0000")
    .addField(":bust_in_silhouette: • Utilisateur banni", `${bUser}`)
    .addField(":hammer: • Banni par", `<@${message.author.id}>`)
    .addField(":paperclips: • Dans le canal", message.channel)
    .addField(":clock3: • Banni le", message.createdAt)
    .addField(":pushpin: • Raison", bReason);

    let banChannel = message.guild.channels.find(`name`, "sanctions");
    if(!banChannel) return message.channel.send(":x: • Le système de sanctions est en maintenance");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);


    return;

  }

  if(cmd === `${prefix}kick`){


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: • Cet utilisateur est introuvable !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous n'avez pas la permission d'exécuter cette commande !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous ne pouvez pas expulser cet utilisateur !");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription(":door: • Expulsion")
    .setColor("#ff0000")
    .addField(":bust_in_silhouette: • Utilisateur expulsé", `${kUser}`)
    .addField(":hammer: • Expulsé par", `<@${message.author.id}>`)
    .addField(":paperclips: • Dans le canal", message.channel)
    .addField(":clock3: • Expulsé le", message.createdAt)
    .addField(":pushpin: • Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "sanctions");
    if(!kickChannel) return message.channel.send(":x: • Le système de sanctions est en maintenance");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);


    return;
  }

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(":x: • Cet utilisateur est introuvable !");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(":triangular_flag_on_post: • Signalement")
    .setColor("#ff00ee")
    .addField(":bust_in_silhouette: • Utilisateur signalé", `${rUser}`)
    .addField(":eyes: • Signalé par", `${message.author}`)
    .addField(":paperclips: • Dans le canal", message.channel)
    .addField(":clock3: • Signalé à", message.createdAt)
    .addField(":pushpin: • Raison", reason);

    let reportschannel = message.guild.channels.find(`name`, "signalements");
    if(!reportschannel) return message.channel.send(":x: • Le système de signalements est en maintenance");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    return;
  }


  if(cmd === `${prefix}guild`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription(":information_source: • Informations sur le serveur")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField(":ribbon: • Nom du serveur", message.guild.name)
    .addField(":birthday: • Création du serveur", message.guild.createdAt)
    .addField(":triangular_flag_on_post: • Vous avez rejoint", message.member.joinedAt)
    .addField(":busts_in_silhouette: • Nombre de membres", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}bot`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription(":information_source: • Informations sur le **RushWayBot**")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField(":robot: • Nom du Robot", bot.user.username)
    .addField(":birthday: • Date de naissance", bot.user.createdAt);

    return message.channel.send(botembed);
  }
});

bot.login(process.env.BOT_TOKEN);


bot.on("guildMemberRemove", member => {
  const bvn = member.guild.channels.find(m => m.name === "👋╿вιєηνєηυє")
  if (!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#FE0101')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .addField("🚀 Au-revoir à bientôt", `[${member.user.tag}](https://discordapp.com)`, true )
  .addField(`👨‍ Nous sommes actuellement`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
});

  if(cmd === `${prefix}jeu`){
    if(message.member.id != '396722578812829700') return message.channel.send(":x: • Tu n'as pas la permission d'exécuter cette commande !");

    else {
      let game = args.slice(1).join(' ')
    message.channel.send(`Description : ${game}`)
    bot.user.setActivity(game);
    }
  }

  if(cmd === `${prefix}chien`){

    var chien = [

      "https://media.giphy.com/media/yjGdFXjeQsDqJNSzE4/giphy.gif",
      "https://media.giphy.com/media/JfDNFU1qOZna/giphy.gif",
      "https://media.giphy.com/media/d3Fym9OQ08o6agYE/giphy.gif"

    ];

    var gif = chien[Math.floor(Math.random() * chien.length)];

    var dog_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(":dog: • Woufff")
    .setImage(gif)
    message.channel.send(dog_embed);
    }
  

  if(cmd === `${prefix}dm`){

    let helpEmbed = new Discord.RichEmbed()
    .setDescription(":grey_question: • **Aide - RushWayBot**")
    .setColor("#ff0000")
    .addField(":trackball: • Préfixe")
    .addField("!")
    .add
    .setFooter("Bot développé par RushWay.")
    message.author.send(helpEmbed);
    message.delete().catch(O_o=>{});
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: • Cet utilisateur est introuvable !");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous n'avez pas la permission d'exécuter cette commande !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous ne pouvez pas expulser cet utilisateur !");

    let banEmbed = new Discord.RichEmbed()
    .setDescription(":door: • Bannissement")
    .setColor("#ff0000")
    .addField(":bust_in_silhouette: • Utilisateur banni", `${bUser}`)
    .addField(":hammer: • Banni par", `<@${message.author.id}>`)
    .addField(":paperclips: • Dans le canal", message.channel)
    .addField(":clock3: • Banni le", message.createdAt)
    .addField(":pushpin: • Raison", bReason);

    let banChannel = message.guild.channels.find(`name`, "sanctions");
    if(!banChannel) return message.channel.send(":x: • Le système de sanctions est en maintenance");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);


    return;

  }

  if(cmd === `${prefix}kick`){


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: • Cet utilisateur est introuvable !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous n'avez pas la permission d'exécuter cette commande !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: • Vous ne pouvez pas expulser cet utilisateur !");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription(":door: • Expulsion")
    .setColor("#ff0000")
    .addField(":bust_in_silhouette: • Utilisateur expulsé", `${kUser}`)
    .addField(":hammer: • Expulsé par", `<@${message.author.id}>`)
    .addField(":paperclips: • Dans le canal", message.channel)
    .addField(":clock3: • Expulsé le", message.createdAt)
    .addField(":pushpin: • Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "sanctions");
    if(!kickChannel) return message.channel.send(":x: • Le système de sanctions est en maintenance");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);


    return;
  }

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(":x: • Cet utilisateur est introuvable !");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(":triangular_flag_on_post: • Signalement")
    .setColor("#ff00ee")
    .addField(":bust_in_silhouette: • Utilisateur signalé", `${rUser}`)
    .addField(":eyes: • Signalé par", `${message.author}`)
    .addField(":paperclips: • Dans le canal", message.channel)
    .addField(":clock3: • Signalé à", message.createdAt)
    .addField(":pushpin: • Raison", reason);

    let reportschannel = message.guild.channels.find(`name`, "signalements");
    if(!reportschannel) return message.channel.send(":x: • Le système de signalements est en maintenance");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    return;
  }


  if(cmd === `${prefix}guild`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription(":information_source: • Informations sur le serveur")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField(":ribbon: • Nom du serveur", message.guild.name)
    .addField(":birthday: • Création du serveur", message.guild.createdAt)
    .addField(":triangular_flag_on_post: • Vous avez rejoint", message.member.joinedAt)
    .addField(":busts_in_silhouette: • Nombre de membres", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}bot`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription(":information_source: • Informations sur le **RushWayBot**")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField(":robot: • Nom du Robot", bot.user.username)
    .addField(":birthday: • Date de naissance", bot.user.createdAt);

    return message.channel.send(botembed);
  }
});

bot.login(process.env.BOT_TOKEN);
