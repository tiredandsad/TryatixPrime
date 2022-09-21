// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
//movie api keys and shit
const queryBase = 'http://www.omdbapi.com/?t='
const queryKey = '&apikey=85b7c5f1'
//calling global shit outside of the async function a few lines down.
//yes, I could 100% set these down in the .then() of the movieDetails() but that is more effort than I have at the moment.
let plot = 'test';
let title = 'ugh';

//Function to get movie details.
async function movieDetails(searchTerm) {
    const response = await fetch(queryBase + searchTerm + queryKey);
    const result = await response.json();
    console.log(result);
    plot = result.Plot;
    title = result.Title;
    return(result);
};
//This is self explanatory
function getRandom() {
    minCeil = Math.ceil(0);
    maxCeil = Math.floor(100);
    return Math.floor(Math.random() * (maxCeil - minCeil) + minCeil);
}
//message listener (might want to change this to a switch, but who knows/cares)

client.on('message', message => {
    console.log(message.content);
    console.log(message);
	if (message.content.includes('Ben' || 'ben' || 'BEN' || '@tryatix#8318')) {
		message.channel.send("They're nowhere near as cool as me");
    // } else if (message.content.includes('music')) {
    //     message.channel.send('I made a music once.');
    } else if (message.content.includes('have you ever had a dream')) {
        message.channel.send('that you, um, you had, your, you- you could, you’ll do, you- you wants, you, you could do so, you- you’ll do, you could- you, you want, you want them to do you so much you could do anything?');
    } else if (message.content.includes('hollow knight')) {
        message.channel.send('HOLLOW KNIGHT IS THE BEST FUCKING GAME IN EXISTANCE FIGHT ME.');
    } else if (message.content.includes('touch grass')) {
        message.channel.send('no u');
    } else if (message.content.includes('edm' || 'EDM' || 'Edm')) {
        message.channel.send('Edm is the soul of every festival and the beat of my heart. The Oxford Dictionary defines EDM as "popular music intended for dancing to in clubs, typically having a repetative beat and a synthesized backing track.  I say that is bullshit as it is the best and arguably ONLY form of music. Fight me Elise');
    // } else if (message.content.includes('movie')) {
    //     message.channel.send(`I'm actually working on a little movie review thing for every single movie in existance. Check back with me in a few days.` )
    }
    //process for getting movie reviews
    if(message.content.includes('+movie review')){
        let string = message.content.trim();
        let removed = string.substring(14)
        let parsed = removed.split(' ').join('+');
        console.log(parsed);
        const movieReply = () => {
        message.channel.send(`${title}`);
        message.channel.send(`Here's the plot... ${plot}`);
        message.channel.send(`I give it a ${getRandom()} out of ${getRandom()}`);
        }
        movieDetails(parsed)
            .then(movieReply);
    }
    //dispenses advice if the word 'advice' is used in a message
    if(message.content.includes('advice')){
        async function getAdvice() {
            const response = await fetch('https://api.adviceslip.com/advice');
            const result = await response.json();
            message.channel.send(`${result.slip.advice}`)
        }
        getAdvice()
    }
});

client.login(token);