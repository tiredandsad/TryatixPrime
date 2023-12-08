// const { Client, GatewayIntentBits } = require('discord.js');
// // const fetch = require('node-fetch');
// // ^^^ This is broken and I am too lazy to troubleshoot it...
// const config = require('./config.json');

// const { token } = config;
// // Create a new client instance
// const client = new Client({ 
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.MessageContent
//     ] });

// // When the client is ready, run this code
// client.on('ready', () => {
//     console.log(`Ready! Logged in as ${client.user.tag}`);
// });

// // const queryBase = 'http://www.omdbapi.com/?t=';
// // const queryKey = '&apikey=85b7c5f1';
// // let plot = 'test';
// // let title = 'ugh';

// // async function movieDetails(searchTerm) {
// //     try {
// //         const response = await fetch(`${queryBase}${searchTerm}${queryKey}`);
// //         const result = await response.json();
// //         console.log(result);
// //         plot = result.Plot;
// //         title = result.Title;
// //         return result;
// //     } catch (error) {
// //         console.error('Error fetching movie details:', error);
// //         return null;
// //     }
// // }

// // function getRandom() {
// //     const minCeil = Math.ceil(0);
// //     const maxCeil = Math.floor(100);
// //     return Math.floor(Math.random() * (maxCeil - minCeil) + minCeil);
// // }

// client.on('messageCreate', message => {
//     console.log(message.content);
//     console.log(message);

//     const keywords = ['Ben', 'ben', 'BEN', '@tryatix'];
//     if (keywords.some(keyword => message.content.includes(keyword))) {
//         message.channel.send("They're nowhere near as cool as me");
//     } else if (message.content.includes('have you ever had a dream')) {
//         message.channel.send('that you, um, you had, your, you- you could, you’ll do, you- you wants, you, you could do so, you- you’ll do, you could- you, you want, you want them to do you so much you could do anything?');
//     } else if (message.content.includes('hollow knight')) {
//         message.channel.send('HOLLOW KNIGHT IS THE BEST GAME IN EXISTENCE. FIGHT ME.');
//     } else if (message.content.includes('touch grass')) {
//         message.channel.send('no u');
//     } else if (message.content.includes('edm' || 'EDM' || 'Edm')) {
//         message.channel.send('EDM is the soul of every festival and the beat of my heart. The Oxford Dictionary defines EDM as "popular music intended for dancing to in clubs, typically having a repetitive beat and a synthesized backing track. I say that is bullshit as it is the best and arguably ONLY form of music. Fight me Elise');
//     }

//     // if (message.content.startsWith('+movie review')) {
//     //     const string = message.content.trim();
//     //     const removed = string.substring(14);
//     //     const parsed = removed.split(' ').join('+');
//     //     console.log(parsed);

//     //     const movieReply = () => {
//     //         message.channel.send(`${title}`);
//     //         message.channel.send(`Here's the plot... ${plot}`);
//     //         message.channel.send(`I give it a ${getRandom()} out of ${getRandom()}`);
//     //     };

//     //     movieDetails(parsed).then(movieReply);
//     // }

//     // if (message.content.includes('advice')) {
//     //     async function getAdvice() {
//     //         try {
//     //             const response = await fetch('https://api.adviceslip.com/advice');
//     //             const result = await response.json();
//     //             message.channel.send(`${result.slip.advice}`);
//     //         } catch (error) {
//     //             console.error('Error fetching advice:', error);
//     //             message.channel.send('Sorry, I couldn\'t fetch advice at the moment.');
//     //         }
//     //     }

//     //     getAdvice();
//     // }
// });

// client.login(token);

const config = require('./config.json')
const { token } = config;
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('messageCreate', (message) => {
    console.log(`Content: "${message.content}"`);

    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message contains the word "ping"
    if (message.content.toLowerCase().includes('ping')) {
        // Respond with "pong"
        message.channel.send('pong');
    }
    const keywords = ['Ben', 'ben', 'BEN', '@tryatix'];
    if (keywords.some(keyword => message.content.includes(keyword))) {
        message.channel.send("They're nowhere near as cool as me");
    } else if (message.content.includes('have you ever had a dream')) {
        message.channel.send('that you, um, you had, your, you- you could, you’ll do, you- you wants, you, you could do so, you- you’ll do, you could- you, you want, you want them to do you so much you could do anything?');
    } else if (message.content.includes('hollow knight')) {
        message.channel.send('HOLLOW KNIGHT IS THE BEST GAME IN EXISTENCE. FIGHT ME.');
    } else if (message.content.includes('touch grass')) {
        message.channel.send('no u');
    } else if (message.content.includes('edm' || 'EDM' || 'Edm')) {
        message.channel.send('EDM is the soul of every festival and the beat of my heart. The Oxford Dictionary defines EDM as "popular music intended for dancing to in clubs, typically having a repetitive beat and a synthesized backing track. I say that is bullshit as it is the best and arguably ONLY form of music. Fight me Elise');
    }
});
// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login(token);
