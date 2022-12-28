const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())









const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ixgnoqu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





app.get('/', async (req, res) => {
    res.send('One stop Gammers server is running')
})


app.listen(port, () => {
    console.log(`One stop Gammers server is running on port ${port}`);
})