const Discord = require("discord.js");
const axios = require("axios");
const yt = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const fs = require("fs");
const getYTID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const prefix = botSettings.prefix;
const ytApiKey = botSettings.ytApiKey;
const youtube = new YouTube(ytApiKey);

const bot = new Discord.Client({
	disableEveryone: true
})

client.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);

});





client.login(process.env.BOT_TOKEN);
