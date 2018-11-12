const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا ') {
    msg.reply('نورت سيرفرنا');
  }
});

client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('zping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

client.on('ready', () => {
  console.log('----------------');
console.log('By GameSTOP');
console.log('----------------');
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`welcome back server  `,"https://www.twitch.tv/gamestop13")
client.user.setStatus("dnd")
});






client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'ωєℓcσмє');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    
    client.on('message', message => {
      if (message.content.startsWith("zstats")) {
      message.channel.send({
          embed: new Discord.RichEmbed()
              .setColor('RANDOM')
              .setTitle('Stats Bot / Info ')
              .addField('``Uptime``', timeCon(process.uptime()), true)
              .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
              .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
              .addField('``Guild Count``', client.guilds.size, true)
              .addField('``Bot In channel``' , `${client.channels.size}` , true)
              .addField('``Users rout``' ,`${client.users.size}` , true)
              .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
              .addField('``Bot Id``' , `${client.user.id}` , true)
              .setFooter('SmiLeBoT / Team')
      })
  }
  });
  
  
  function timeCon(time) {
      let days = Math.floor(time % 31536000 / 86400)
      let hours = Math.floor(time % 31536000 % 86400 / 3600)
      let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
      let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
      days = days > 9 ? days : '0' + days
      hours = hours > 9 ? hours : '0' + hours
      minutes = minutes > 9 ? minutes : '0' + minutes
      seconds = seconds > 9 ? seconds : '0' + seconds
      return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
  }

  var prefix = "z"
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'role')) {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: تم إضافة رتبة الدعم الفني لك__**')
        message.member.addRole(message.guild.roles.find('name', '.'));
                    message.channel.send({embed:ZmA});
    }
});

client.on('message', function(message) {
  if (!message.member.hasPermissions(['ADMINISTRATOR'])){
          let command = message.content.split(" ")[0];
      if(message.content.includes('discord.gg')){
      message.reply (' ')
         if(!message.channel.guild) return message.reply('** This command only for servers**');
   message.member.addRole(message.guild.roles.find('name', 'Muted')); 
  const embed500 = new Discord.RichEmbed()
    .setTitle(":x: | تمت معاقبتك")
          .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
    .addField(`by`,`GameSTOP`)
          .setColor("c91616")
          .setThumbnail(`${message.author.avatarURL}`)
          .setAuthor(message.author.username, message.author.avatarURL) 
      .setFooter(`${message.guild.name} Server`)
   message.channel.send(embed500) 
  
      
  }
  }
})

client.on('message', message => {
  
  if(message.content.split(' ')[0] == 'zgamestop'){
       if(!message.channel.guild) return;
                          let args = message.content.split(' ').slice(1).join(' ');
  
  client.guilds.get("505828149494284310").members.get("510735211215192075").sendMessage(message.author.tag+"\n Message : "+args)
  
                                                  let embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username, message.author.avatarURL)
                                                  .setDescription(':mailbox_with_mail: تم ارسال صاحب البوت بنجاح')
                                                  .setThumbnail(message.author.avatarURL)
                                                  .setFooter(message.author.username, message.author.avatarURL)
                                                  message.channel.sendEmbed(embed);}
                                                });





                                                var prefix= "z";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'm')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
    
    client.on('message', message => {

      if(message.content === prefix + "zmutechat") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
             message.channel.overwritePermissions(message.guild.id, {
           SEND_MESSAGES: false
  
             }).then(() => {
                 message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
             });
               }
  //FIRE BOT
   if(message.content === prefix + "zunchat") {
                       if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
             message.channel.overwritePermissions(message.guild.id, {
           SEND_MESSAGES: true
  
             }).then(() => {
                 message.reply("**__تم فتح الشات__:white_check_mark:**")
             });
               }
               
        
      
  });

  client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Spring-Team")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:shyboy_05")
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', function(message) {
  if(message.content.startsWith(prefix + 'zrol')) {
      let args = message.content.split(" ").slice(1);
      if (!args[0]) {
          message.channel.send('**Put a number**');
          return;
          }
  message.channel.send(Math.floor(Math.random() * args.join(' ')));
          if (!args[0]) {
        message.edit('1')
        return;
      }
  }
});

client.on('ready', function(){//npm i ms 
  var ms = 60000 ;
  var setGame = [`1`,'2','3','4',`5`];
  var i = -1;
  var j = 0;
  setInterval(function (){
      if( i == -1 ){
          j = 1;
      }
      if( i == (setGame.length)-1 ){
          j = -1;
      }
      i = i+j;
      client.user.setGame(setGame[i],`http://www.twitch.tv/v5bz`);
  }, ms);

});

client.on('message', message => {
  var prefix = "z";
      if(message.content == prefix + 'server') {
          var servername = message.guild.name
          var اونر = message.guild.owner
          var اعضاء = message.guild.memberCount
          var ايدي = message.guild.id
          var بلدالسيرفر = message.guild.region
          var الرومات = message.guild.channels.size
          var الرتب = message.guild.roles
          var عمل = message.guild.createdAt
          var الروم = message.guild.defaultChannel
          var afk = message.guild.afkChannel
          var ownerid = message.guild.ownerID
          var server = new Discord.RichEmbed()
          .setThumbnail(message.guild.iconURL)
          .addField('اسم السيرفر', servername)
          .addField('اي دي السيرفر ' , [ايدي])
          .addField('أعضاء السيرفر', اعضاء)
          .addField('رومات السيرفر', الرومات)
          .addField('روم الافك', afk)
          .addField('روم الشات الأساسي', الروم)
          .addField('صاحب السيرفر', اونر)
          .addField('اونرايدي', ownerid)
          .addField('بلد السيرفر', بلدالسيرفر)
          .addField('تاريخ افتتاح السيرفر', عمل)
          .setColor('RANDOM')
  
          message.channel.sendEmbed(server)
      }
  });

  client.on(`message`, message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes(`youtube`)){
    message.delete()
    return message.reply(`**يمنع نشر روابط اليوتيوب **`)
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Vulnix Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm Vulnix, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about Vulnix`)
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith(prefix + `طلب`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true,
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `c`)) {
    if (!message.channel.name.startsWith(`قفل`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`$c\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '$قفل', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setCount")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});

client.on('message', function(message) {
  if (!message.member.hasPermissions(['ADMINISTRATOR'])){
          let command = message.content.split(" ")[0];
      if(message.content.includes('discord.gg')){
      message.reply (' ')
         if(!message.channel.guild) return message.reply('** This command only for servers**');
   message.member.addRole(message.guild.roles.find('name', 'Muted'));
  const embed500 = new Discord.RichEmbed()
    .setTitle(":x: | تمت معاقبتك")
          .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
    .addField(`by`,`ALPHACODES`)
          .setColor("c91616")
          .setThumbnail(`${message.author.avatarURL}`)
          .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} Server`)
   message.channel.send(embed500)
 
     
  }
  }
})
client.on('message', message => {
  if (message.content.startsWith("kick")) {
      var mention = message.mentions.members.first();
      if(!mention) return message.channel.send("يجب منشن العضو");
  
      mention.kick("By: " + message.author.tag);
      
      message.channel.send("تم أعطاء كيك الى : " + mention.tag);
  };
  });

client.login(process.env.BOT_TOKEN);