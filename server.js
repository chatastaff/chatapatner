const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://partner1er1.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const config = require("./config.json");
const ms = require("ms");
const enmap = require("enmap");
const moment = require("moment");

const client = new Discord.Client();
const db = new enmap({ name: "test" });

const prefix = config.prefix;
const token = config.token;
const time = config.time;


client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ["Project By : M0NA"];

  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
/*
client.on('ready' , () => {
const join = client.channels.get("792966740119912448")
if (join) join.join()
  
})*/


client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("ریکلام")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("Reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("REKLAM")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("slaw reklam agornawa")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});


client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("Beza7mat reklam dagornawa?")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});




client.on("message", async message => {
  if (message.content === "wara voice") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
  if (
    message.author.bot ||
    message.channel.type !== "dm" ||
    !message.content.includes("https://discord.gg/")
  )
    return;

  var user = message.author;
  if (db.get(user.id) == undefined) {
    db.ensure(user.id, {
      last: null
    });
  }

  if (
    db.get(user.id, "last") !== null &&
    moment().diff(moment(parseInt(db.get(user.id, "last"))), "h") < time
  ) {
    message.channel.send(
      `> **you can't send link wait until ${moment(
        parseInt(db.get(user.id, "last"))
      )
        .add(time, "h")
        .fromNow()}**`
    );
    return;
  }

  var ad_message = message.content
    .replace("@everyone", "everyone qadaxaya ")
    .replace("@here", "here qadaxaya");

  client.channels.cache
    .get(config.ad_channel)
    .send(ad_message + "\n\n<@" + user.id + ">");

  message.channel.send(
    "https://discord.gg/gWjzgxhyqy reklamakat kra tosh am servara rekalam bka"
    
  );

  db.set(user.id, moment().format("x"), "last");
});
client.login("Desanawa Tokene bot dabne⛔⛔");
