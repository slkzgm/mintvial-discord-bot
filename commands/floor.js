const axios = require('axios');
const { apiUrl } = require('../config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { valuesHandler } = require("./utils/handlers");

const commandName = 'floor';

module.exports = {
  data: new SlashCommandBuilder()
    .setName(commandName)
    .setDescription('Replies with collections floor prices.'),
  async execute(interaction) {
    const data = (await axios.get(apiUrl + commandName)).data;
    const lastUpdate = (await axios.get(apiUrl)).data.lastUpdate.toString().slice(0, 10);
    let clonex, mintvial;

    data.map(collection => {
      switch (collection.collection) {
        case 'cloneX':
          clonex = valuesHandler(collection.floorPrice.toFixed(2), 6);
          break;
        case 'mintVial':
          mintvial = valuesHandler(collection.floorPrice.toFixed(2), 6);
          break;
      }
    });
    await interaction.reply('Collections floor prices:\n' +
      '```\n' +
      '-----------------------------------------------\n' +
      '| COLLECTION  | MINTVIAL | CLONEX |\n' +
      `| FLOOR PRICE |   ${mintvial} | ${clonex} |\n` +
      '-----------------------------------------------\n' +
      '```' +
      `Last successfull update: <t:${lastUpdate}:R>`
    );
  }
};
