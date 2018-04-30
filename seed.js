const { db, Plot, Gardener, Vegetable } = require('./models')

const veggies = [
  {
    name: 'Carrot',
    color: 'Orange'
  },
  {
    name: 'Potato',
    color: 'Brown'
  },{
    name: 'Capsicum',
    color: 'Green'
  },
  {
    name: 'Onion',
    color: 'White'
  }
]

db.sync({ force: true})
.then(() => {
  console.log("Database Synced");
  return Vegetable.bulkCreate(veggies);
})
.catch( (error) => {
  console.log('Disaster! Something went wrong');
  console.log(error);
})
.finally( () => {
  db.close();
  console.log("Database connection closed;")
});

// db.close();
