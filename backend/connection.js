const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.yyeefvo.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('Połączono z mongodb')
})
