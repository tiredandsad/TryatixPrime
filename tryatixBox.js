//This is the token dummy.
//OTc4NDc2NDc5MzU4ODMyNzAw.Gn9I1I.3FgBlKp4bkUVl8ydiLfdIRevkwRBBZKtVG6Unk

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login('OTc4NDc2NDc5MzU4ODMyNzAw.Gn9I1I.3FgBlKp4bkUVl8ydiLfdIRevkwRBBZKtVG6Unk');


client.on('message', message => {
	if (message.content === 'Ben') {
		message.channel.send("They're nowhere near as cool as me");
	} else if (message.content === 'ben') {
        message.channel.send("They're nowhere near as cool as me");
    } else if (message.content === '@tryatix') {
        message.channel.send("They're nowhere near as cool as me");
    } else if (message.content === 'music') {
        message.channel.send('I made a music once.');
    } else if (message.content === 'have you ever had a dream') {
        message.channel.send('that you, um, you had, your, you- you could, you’ll do, you- you wants, you, you could do so, you- you’ll do, you could- you, you want, you want them to do you so much you could do anything?');
    }
});