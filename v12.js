client.on("guildMemberUpdate", (oldMember, newMember) => {

  const wc = client.guilds.cache.get('server_id') // The Server 
  const channle = wc.channels.cache.get('channel_id') // The channel you want the message to be sent in

  if (!oldMember.roles.cache.has("booster_role_id") && newMember.roles.cache.has("booster_role_id")) { // Add in your Server Booster Role ID
    /*let s_role = newMember.guild.roles.cache.get('give_another role');
    let supporter = newMember.guild.roles.cache.get('give_another role'); */ // This allows you to give roles to people when they Boost the server
    const boost = new Discord.MessageEmbed()
    .setTitle('New Boost!')
    .setDescription(`${newMember} Just Boosted the Server!
    \nThank you so much for Boosting **server_name**! // Change Server Name
    \nMade by [Nickzz](https://github.com/NickzzDev/)`) // This gives me Credit as I made this code, so please don't Change this. Thanks.
    .setTimestamp()
    .setColor("RED")
    .setFooter('Server Boosts')
    channle.send(boost)
    /*newMember.roles.add(s_role)
    newMember.roles.add(supporter)*/
    newMember.send(`Thanks for Boosting **server_name!**`) // Change Server Name
  }
});
