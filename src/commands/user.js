import { SlashCommandBuilder } from '@discordjs/builders';

const usersCommand = new SlashCommandBuilder()
  .setName('users')
  .setDescription('users cmd')
  .addUserOption((option) => option.setName('user').setDescription('user'));

export default usersCommand.toJSON();
