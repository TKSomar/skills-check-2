require("dotenv").config();

const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.use(express.json());

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/inventory', ctrl.addProduct);

app.listen(SERVER_PORT, () => console.log(`Shelfie app is running on port ${SERVER_PORT}`));