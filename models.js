const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

// db.authenticate().then( () => {
//   console.log("connected to database");
// })

module.exports = { db };
