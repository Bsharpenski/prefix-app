const express = require('express');
const app = express();
const PORT = 3001;
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('App is running!')
});

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`)
});

app.get('/items', (req, res) => {
    knex('items')
    .select('*')
    .then(data => res.json(data))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch items'})
    })
})

app.get('/users', (req, res) => {
    knex('users')
    .select('*')
    .then(data => res.json(data))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch items'})
    })
})

app.get('/joined', (req, res) => {
    knex('users')
    .join('items', 'user_id', '=', 'users.id')
    .then(data => res.json(data))
})