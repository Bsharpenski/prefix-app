/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      user_id: 1, 
      item_name:'Xbox', 
      description:'Used game console', 
      quantity:15
    },
    {
       user_id: 3,
        item_name:'PlayStation5',
         description:'Used game console',
          quantity:10
        },
    {
       user_id: 2,
        item_name:'Nintendo Switch',
         description:'Used game console',
          quantity:35
        },
    {
       user_id: 2,
        item_name:'Posters',
         description:'Prints of artwork or promotional material from popular games, often featuring iconic characters or scenes.',
          quantity:20
        },
    {
       user_id: 3,
        item_name:'PlayStation5',
         description:'New sony game console',
          quantity:5
        },
    {
       user_id: 2,
        item_name:'Xbox',
         description:'New game console',
          quantity:6
        },
    {
       user_id: 1,
        item_name:'Nintendo Switch',
         description:'New game console',
          quantity:15
        },
    {
       user_id: 2,
        item_name:'Board Games',
         description:'Physical games for tabletop play, including those based on popular video game franchises (e.g., "Monopoly: Super Mario").',
          quantity:25
        },
    {
       user_id: 3,
        item_name:'Puzzles',
         description:'Jigsaw puzzles based on video game art or characters, offering a relaxing yet themed activity for fans.',
          quantity:45
        },
    {
       user_id: 2,
        item_name:'Art Books',
         description:'Collectible books featuring concept art, behind-the-scenes content, and design processes of popular video games.',
          quantity:5
        },
    {
       user_id: 1,
        item_name:'Subscription Cards',
         description:'Cards for subscription services like Xbox Game Pass, PlayStation Plus, or Nintendo Switch Online, which offer access to a library of games or additional features.',
          quantity:1
        },
    {
       user_id: 2,
        item_name:'Gaming Keyboards',
         description:'Keyboards designed for gaming, with features like mechanical keys, RGB lighting, and programmable macros for better performance.',
          quantity:2
        },
    {
       user_id: 3,
        item_name:'Gaming Mice',
         description:'High-precision mice, often customizable, designed for PC gamers, especially those playing fast-paced games like FPS or strategy games.',
          quantity:6
        },
    {
       user_id: 2,
        item_name:'Game Headsets',
         description:'Audio equipment designed for immersive sound and communication, with built-in microphones for multiplayer gaming.',
          quantity:18
        },
    {
       user_id: 1,
        item_name:'Controllers',
         description:'Handheld devices used to interact with games, including wired, wireless, and specialty controllers for different gaming systems.',
          quantity:22
        },
    {
       user_id: 2,
        item_name:'Used Video Games',
         description:'Give an older game a new life, these traded in games will run like new at a lower cost!',
          quantity:16
        },
    {
       user_id: 3,
        item_name:'Action Figures and Collectibles',
         description:'Figurines, statues, or other physical representations of characters and elements from games, often as limited edition or collectible items.',
          quantity:47
        },
    {
       user_id: 1,
        item_name:'New video games',
         description:'Our newest games at the Lowest cost around',
          quantity:23
        }
  ]);
};
