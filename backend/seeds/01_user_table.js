/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, first_name: 'brock', last_name: 'hampton', username: 'bhammy', password: '1'},
    {id: 2, first_name: 'joe', last_name: 'mane', username: 'jname', password: '2'},
    {id: 3, first_name: 'clay', last_name: 'plant', username: 'cplant', password: '3'}
  ]);
};
