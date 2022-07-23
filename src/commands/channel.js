import { SlashCommandBuilder } from '@discordjs/builders';

const channelsCommand = new SlashCommandBuilder()
  .setName('channels')
  .setDescription('channels cmd')
  .addChannelOption((option) =>
    option.setName('channels').setDescription('channels').setRequired(true)
  )
  .addBooleanOption((option) =>
    option
      .setName('deletemsgs')
      .setDescription('Delete the messages')
      .setRequired(true)
  )
  .addIntegerOption((option) =>
    option.setName('age').setDescription('Enter your age')
  )
  .addAttachmentOption((option) =>
    option.setName('file').setDescription('file')
  );

export default channelsCommand.toJSON();
