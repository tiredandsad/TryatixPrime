import Bank from './bank.js';
const creditUnion = new Bank()
const config = require('./config.json')
const { token } = config;
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});
const badFridayNightIdeas = [
    "Play hide and seek in a dark forest.",
    "Have a spaghetti eating contest without hands.",
    "Reenact a silent play with invisible props.",
    "Go ghost hunting in an abandoned, rumored-to-be-haunted building.",
    "Host a 'worst karaoke singers' competition.",
    "Have a staring contest with strangers at a busy mall.",
    "Create a human pyramid on a beach during high tide.",
    "Organize a synchronized swimming competition in a kiddie pool.",
    "Attempt to break a world record for the most failed attempts at breaking a world record.",
    "Build a blanket fort in the middle of a busy street.",
    "Have a fish impersonation contest at a seafood restaurant.",
    "Play 'Pin the Tail on the Invisible Donkey.'",
    "Try extreme ironing on a mountain summit.",
    "Have a DIY tattoo session with marker pens.",
    "Hold a mime flash mob in a quiet library.",
    "Go snorkeling in a bathtub filled with Jell-O.",
    "Organize a synchronized shopping cart ballet in a grocery store.",
    "Attempt to set a world record for the longest conga line in a public restroom.",
    "Have a spaghetti wrestling match in a giant inflatable pool.",
    "Try to build a human pyramid while rollerblading.",
    "Host a thumb wrestling tournament with strangers on public transportation.",
    "Have a paintball fight in formal wear.",
    "Organize a competitive nap time in a crowded movie theater.",
    "Create a flash mob of interpretive dance in a fast-food restaurant.",
    "Try to set a record for the most consecutive failed attempts at a cartwheel.",
    "Have a bubble-wrap popping marathon in a quiet library.",
    "Go snowboarding on a grassy hill.",
    "Attempt to create the world's largest balloon animal in a crowded subway.",
    "Have a limbo competition under a doorway that's too low.",
    "Try to set a record for the most consecutive high-fives in an hour.",
    "Organize a pie-eating contest with savory pies.",
    "Attempt to breakdance in a room filled with marbles.",
    "Host a synchronized dance-off in a crowded elevator.",
    "Have a thumb war tournament in a fine art gallery.",
    "Try to set a record for the most consecutive failed attempts at juggling.",
    "Organize a 'quietest scream' competition in a library.",
    "Have a staring contest with statues at a museum.",
    "Try to set a record for the most socks put on one foot in a minute.",
    "Organize a pogo stick race through a busy downtown area.",
    "Have a tricycle race in a shopping mall.",
    "Try to set a record for the most consecutive failed attempts at a somersault.",
    "Organize a thumb-wrestling tournament with toe wrestling rules.",
    "Have a synchronized swimming competition in a bathtub.",
    "Try to set a record for the most consecutive failed attempts at a handstand.",
    "Organize a slow-motion race in a busy intersection.",
    "Have a penguin waddling competition in a fancy restaurant.",
    "Try to set a record for the most consecutive failed attempts at a backflip."
  ];
  
const getRandomActivity = () => {
    let rndNum = Math.floor(Math.random() * 51)
    return `We could ${badFridayNightIdeas[rndNum]}`
}

client.on('messageCreate', (message) => {
    // console.log(`Content: "${message.content}"`);
    console.log(message)
    if(message.author.id === '978476479358832700'){
        console.log('bot has messaged, skipping flow.')
        return;
    }
    creditUnion.userIncome(message.author.id)
    if (message.content.includes('my balance')) {
        message.channel.send(creditUnion.getBalance(message.author.id, message.author.globalName))
    }

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
    } else if (message.content.includes('what are we doing')) {
        message.channel.send(getRandomActivity());
    }
     else if (message.content.includes('hollow knight')) {
        message.channel.send('HOLLOW KNIGHT IS THE BEST GAME IN EXISTENCE. FIGHT ME.');
    } else if (message.content.includes('touch grass')) {
        message.channel.send('no u');
    } else if (message.content.includes('omae wa mou shindeiru')){
        message.channel.send('何？！');
    }
    else if (message.content.includes('Edm') || message.content.includes('edm') || message.content.includes('EDM')) {
        message.channel.send('EDM is the soul of every festival and the beat of my heart. The Oxford Dictionary defines EDM as "popular music intended for dancing to in clubs, typically having a repetitive beat and a synthesized backing track. I say that is bullshit as it is the best and arguably ONLY form of music. Fight me Elise');
    } else if (message.content.includes('Boo') || message.content.includes('boo') || message.content.includes('BOO')) {
        let rndNum = Math.floor(Math.random() * 3);
        console.log(rndNum)
        if (rndNum === 0){
            message.channel.send('Holy shit you scared me!')
        } else if (rndNum === 1){
            message.channel.send('Goddammit you should not say that out of nowhere.')
        } else if (rndNum === 2){
            message.channel.send('AAH, That is very rude of you,')
        } else {
            message.channel.send('aaaah!')
        }
    } else if (message.content.includes('meaning')) {
        message.channel.send('The true meaning was the friends we made along the way.')
    }

        if (message.content.includes('advice')) {
        async function getAdvice() {
            try {
                const response = await fetch('https://api.adviceslip.com/advice');
                const result = await response.json();
                message.channel.send(`${result.slip.advice}`);
            } catch (error) {
                console.error('Error fetching advice:', error);
                message.channel.send('Sorry, I could not fetch advice at the moment.');
            }
        }

        getAdvice();
    }
});



client.login(token);