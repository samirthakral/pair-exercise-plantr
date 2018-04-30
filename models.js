const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planted_on: {
    type: Sequelize.DATE
  }
})

Plot.belongsTo(Gardener, { as: 'gardener' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });
Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Gardener.belongsTo(Vegetable, { as: 'favoriteVegetable' });

// db.authenticate().then( () => {
//   console.log("connected to database");
// })

module.exports = { db };
