import { SlashCommandBuilder } from '@discordjs/builders';

const orderCommand = new SlashCommandBuilder()
  .setName('order')
  .setDescription('Order your favorite meal!');
// .addStringOption((option) =>
//   option
//     .setName('food')
//     .setDescription('Select your favorite food')
//     .setRequired(true)
//     .setChoices(
//       {
//         name: 'Cake',
//         value: 'cake',
//       },
//       {
//         name: 'Hamburger',
//         value: 'hamburger',
//       },
//       {
//         name: 'Pizza',
//         value: 'pizza',
//       }
//     )
// )
// .addStringOption((option) =>
//   option
//     .setName('drink')
//     .setDescription('Select your favorite drink')
//     .setRequired(true)
//     .setChoices(
//       {
//         name: 'Water',
//         value: 'water',
//       },
//       {
//         name: 'Coca-Cola',
//         value: 'coca_cola',
//       },
//       {
//         name: 'Sprite',
//         value: 'sprite',
//       }
//     )
// );

export default orderCommand.toJSON();
