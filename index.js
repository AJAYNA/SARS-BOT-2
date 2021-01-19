const discord = require("discord.js");
const client = new Discord.Client();
const keep_alive = require ('./keep_alive.js');

client.once('ready', () => {
	console.log('ready!');
});

client.on('message', message => {
    if(message.content === '!ping') {
    	message.channel.send('pong.');
    }
});

client.on('message', message => {
  if(message.content === 'Hello') {
  	message.channel.send('Hi bro, How are u?');
  	else message.channel.send('I cant understand');
  }
});

client.on('message', message => {
 if(message.content === 'How are u bro?') {
 	message.channel,send('I am fine bro!');
 }
});

client.login('ODAwNjE5NDcwMzk2OTgxMjU4.YAUw_A.QZ3lgJVBMyTjx-4VYCm1KMKLcSM');