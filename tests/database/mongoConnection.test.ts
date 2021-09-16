require('dotenv').config()

let db_host = process.env.DB_HOST
const mongoose = require('mongoose')

test('check DB connection', async () => {
  let connection = false

  await mongoose.connect(db_host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    connection = true
    mongoose.connection.close();
  })

  expect(connection).toBe(true)
});
