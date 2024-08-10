const mongoose = require("mongoose");

require("dotenv").config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  // useNewUrlParser: true, // Remove this line
  // useUnifiedTopology: true // Remove this line
});



const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

module.exports = dbConnect;