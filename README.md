# mintvial-discord-bot
A discord bot to get informed of live data of CloneX - Mintvial reveal process

This discord bot use a js script that scrap Opensea and 0xReservoir API every minute to retrieve data regarding Mintvial reveal process.
It comes with commands that give various informations and analytics about the reveal process state live state like:
- Actual revealed distribution
- Collections floor price
- Available supply left
- ...

# Invite Mintvial discord bot: 

You can add the mintvial-discord-bot to your server by using this link:

- https://discord.com/api/oauth2/authorize?client_id=1005857622597062726&permissions=0&scope=bot 



# Run it yourself:

You can also host the bot by yourself following these steps:

1: Clone the repo

2: Make sure to use node v16.15.0+

3: Install dependencies: `npm install`

5: Create your config.json file:

```json
{
  "token": YOUR_TOKEN,
  "clientId": YOUR_CLIENT_ID,
  "apiUrl": "https://www.slkzgm.com/mintvial/" // OR USE YOUR OWN API
}
```

7 `optional`: If you have edit commands name, descriptions, or creating new ones, you will have to run `node deploy-commands.js`

6: run the discord bot: `node .`

# Screenshots:

![image](https://user-images.githubusercontent.com/105301169/183384432-d565ba5e-de3e-4adb-80ad-2c1f18558ff0.png)
![image](https://user-images.githubusercontent.com/105301169/183384545-c8cf97fc-c03c-4197-b261-8276b414cce1.png)
