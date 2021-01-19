const discord = require('discord.js');
const client = new Discord.Client();

module.export : {
 name: "reverse word";
 usage: "s!reverse<word>";
 description: "get the user's word in reverse form";
}

client.on('ready', () => {
	console.log("I,m in");
	console.log(client.user.username)
});

client.on('message', msg => {
	if(msg.author.id != Client.user.id) {
		msg.channel.send(msg.conte)
	}
})