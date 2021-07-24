const express = require('express')
const mongoose = require('mongoose')
//Bypass Same-origin policy
const cors = require('cors')

const path = require('path')
const app = express();


require('dotenv').config()

app.use(cors())
app.use(express.json());


app.use(express.static(path.join(__dirname, 'dist')))

/*
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
*/

const registerRouter = require('./routes/register.ts')

app.use('/register', registerRouter)

app.set('port',process.env.PORT || 3001)
console.log('Obama + 'process.env.PORT)
app.listen(app.get('port') , () => {
    console.log(`Server is running on port: ${app.get('port')}`);
})
