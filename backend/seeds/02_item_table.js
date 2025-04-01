/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1, user_id: 1, item_name:'Xbox', description:'Used game console', quantity:15},
    {id: 2, user_id: 1, item_name:'PlayStation5', description:'Used game console', quantity:10},
    {id: 3, user_id: 1, item_name:'Nintendo Switch', description:'Used game console', quantity:35}
  ]);
};
