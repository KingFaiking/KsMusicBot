const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true})
client.login(process.env.BOT_TOKEN);
client.on('ready', ()=> {
    console.log('Ready!')
})
 Music.start(client, {
    prefix: "!-", // البرفكس هنا
    youtubeKey: 'AIzaSyDIv8O9OwZdoTaghK3_SQmyGcQFzkXMW6E', //هنا ال yt v3 api key
    global: false, // يكون للسيرفرات ؟ خليه false, يكون queue مشترك خليه true            
    maxQueueSize: 50, // اقصى حجم لل queue        
    playCmd: 'play', // امر التشغيل
    volumeCmd: 'vol',     // امر الصوت
    thumbnailType: 'high',
    leaveCmd: 'stop',    // امر المغادرة
    anyoneCanSkip: true, // تبي الكل يقدر يسوي skip? true > yep, false > nope
    disableLoop: false, // تبي يكون فيه اعادة؟ , true > yep, false > nope
    searchCmd: 'search', //امر البحث 
    requesterName: true, 
    inlineEmbeds: false,     
    queueCmd: 'queue', // امر القائمة
    pauseCmd: 'pause', // امر الايقاف المؤقت
    resumeCmd: 'resume', // امر الاستمرار
    skipCmd: 'skip', // امر السكب
    loopCmd: 'loop', // امر الاعادة
    enableQueueStat: true,
  });

  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`${prefix}h | Music `,` ${prefix}he | Music `,`${prefix}hel | Music `,`${prefix}help | Music `];
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
        client.user.setGame(setGame[i],`http://twitch.tv/idk`);
    }, ms);1000

});
