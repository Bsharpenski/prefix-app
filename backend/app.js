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



//____________________________________________________________________________GET

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



//___________________________________________________________________________POST

app.post('/users', (req, res) => {
    const {id, first_name, last_name, username, password} = req.body

    knex('users')
        .insert({id, first_name, last_name, username, password})
        .then( function(){
            res.json({success: true, message: 'ok'})
        })
})

app.post('/items', (req, res) => {
    const {id, user_id, item_name, description, quantity} = req.body

    knex('items')
        .insert({id, user_id, item_name, description, quantity})
        .then( function(){
            res.json({success: true, message: 'ok'})
        })
})


//_______________________________________________________________________DELETE


app.delete('/users/:id', (req, res) => {
    let getId =req.params.id
    knex('users')
        .where({'id':getId})
        .del()
        .then( function(){
            res.json({success: true, message: 'ok'})
        })
})


app.delete('/items/:id', (req, res) => {
    let getId =req.params.id
    knex('items')
    .where({'id':getId})
    .del()
    .then( function(){
        res.json({success: true, message: 'ok'})
    })
})

//_______________________________________________________________________PATCH

app.patch('/users/:id', (req, res) => {
    let getId =req.params.id
    const {first_name, last_name, username, password} = req.body

    knex('users')
        .where({'id':getId})
        .update({first_name, last_name, username, password})
        .then( function(){
            res.json({success: true, message: 'ok'})
        })
        .catch(err => {
            res.json(err)
        })
})


app.patch('/items/:id', (req, res) => {
    let getId =req.params.id
    const {user_id, item_name, description, quantity} = req.body

    knex('items')
        .where({'id':getId})
        .update({user_id, item_name, description, quantity})
        .then( function(){
            res.json({success: true, message: 'ok'})
        })
        .catch(err => {
            res.json(err)
        })
})