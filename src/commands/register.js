import { SlashCommandBuilder } from '@discordjs/builders';

const registerCommand = new SlashCommandBuilder()
  .setName('register')
  .setDescription('Register a user to the server officially');

export default registerCommand.toJSON();
