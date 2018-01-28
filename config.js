/**
 * Discord Bot settings. These are mandatory and will affect what the bot
 *   posts about, and where it posts to.
 */

module.exports = {
  discord: {
    // The Discord token of the Bot to post through.
    token: process.env.NDA3MTIzNTgyNDgxNzI3NDg4.DU8_1Q.kEYJ3PHyEsyV4vCLYPH3J6I9I7Y,
    // The ID of the discord channel to post battleboard infos to.
    feedChannelId: process.env.407116046105837568,
    // The ID of the discord channel to post albion status infos to.
    statusChannelId: process.env.407116046105837568
  },
  guild: {
    // The name of your guild (or guilds, if the guild is large).
    guilds: process.env.MOTHERLAND
    ? process.env.ALBION_GUILDS.split(',') : [],
    // The alliance your guild belongs to
    alliance: process.env.ROD
  },
  battle: {
    // Min players to report as battle
    minPlayers: 10,
    // Min guild players to report as battle
    minRelevantPlayers: 1
  },
  kill: {
    // Min killfame to report kill
    minFame: 5000
  }
};
