
exports.up = function(knex) {
  return knex("users").insert([
    {name: "Joelmir Rogério Carvalho"},
    {name: "Valdirene Aparecida Ferreira"},
    {name: "Maria Lídia Ferreira Carvalho"},
    {name: "Antony Bennedito Ferreira Carvalho"}
  ])
};

exports.down = function(knex) {
  
};
