const { db } = require('./models')

db.sync({ force: true})
.then( () => console.log("Database Synced"))
.catch( (error) => {
  console.log('Disaster! Something went wrong');
  console.log(error);
})
.finally( () => {
  db.close();
  console.log("Database connection closed;")
});

// db.close();
