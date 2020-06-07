// import packages
import { Server } from "http";
import Telegraf from "telegraf";

import data from "./data/data.json";
import { InlineQueryResult } from "telegraf/typings/telegram-types";

// bot


// admin


// everyone


// owner


// middlewares


// bot settings
const token = process.env.token;
const PORT = process.env.PORT;


// init bot and a server
const bot = new Telegraf(token);
const server = new Server((req, res) => res.end("Bot is working"));

//bot:


//admin:


//everyone:

bot.on("inline_query", ctx => {
    let type = ctx.inlineQuery.query;
    let res = "";

    if (["truth", "t", "0"].includes(type.toLowerCase())) {
        res = data.truths[Math.round(Math.random() * data.truths.length)];
    } else if (["dare", "d", "1"].includes(type.toLowerCase())) {
        res = data.dares[Math.round(Math.random() * data.dares.length)];
    } else {
        let randomType = ["truths", "dares"][Math.round(Math.random())];
        res = data[randomType][Math.round(Math.random() * data[randomType].length)];
    }

    let queryRes: InlineQueryResult = {
        id: "0",
        title: res,
        input_message_content: {
            message_text: res,
        },
        type: "article",
    };

    ctx.answerInlineQuery([queryRes], {
        cache_time: 0
    });
});

//owner:

// start
bot.launch();
server.listen(PORT);
