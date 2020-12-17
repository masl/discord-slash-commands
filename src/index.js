const {
    Client
} = require('discord.js');
const bot = new Client();
const axios = require('axios');
require('localenv');
require('dotenv').config();

bot.on('ready', () => {
    console.log('Bot is running!');
});

bot.on('raw', async e => {
    if (e.t === 'INTERACTION_CREATE') {
        const url = `https://discord.com/api/v8/interactions/${e.d.id}/${e.d.token}/callback`;
        const body = {
            "type": 4,
            "data": {
                "content": "Hello World"
            }
        };
        const data = await axios.post(url, body, null);
        console.log(data);
    }
});

bot.login(process.env.BOT_TOKEN);