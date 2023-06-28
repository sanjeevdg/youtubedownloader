const mongoose = require('mongoose');
//process.env.MONGODB_URL
//mongodb://atlas-sql-60633187e8d97e4530926580-g9vs9.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin
mongoose
  .connect("mongodb+srv://root:sanjeev@cluster0.g9vs9.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
