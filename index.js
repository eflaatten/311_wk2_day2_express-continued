const express = require("express");
const bodyParser = require("body-parser");

const contacts = require('./data/contacts')
const vehicles = require('./data/vehicles')
const comments = require('./data/comments')
const products = require('./data/products')

const app = express();
app.use('/', express.static("public"))
app.use(bodyParser.json())

const contactsRouter = require('./routes/contacts')
app.use('./contacts', contactsRouter)

const vehiclesRouter = require('./routes/vehicles')
app.use('./vehicles', vehiclesRouter)

const commentsRouter = require('./routes/comments')
app.use('./comments', commentsRouter)

const productsRouter = require('./routes/products')
app.use('./products', productsRouter)

const port = process.env.PORT || 4001;

//GET
app.get('/contacts', (req, res) => {
    res.json(contacts)
})

app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})

app.get('/comments', (req, res) => {
    res.json(comments)
})

app.get('/products', (req, res) => {
    res.json(products)
})

// GET SPECIFIC ID
app.get('/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const contact = contacts.find(contact => contact._id === id)
    res.json(contact)
})

app.get('/vehicles/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const vehicle = vehicles.find(vehicle => vehicle._id === id)
    res.json(vehicle)
})

app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const comment = comments.find(comment => comment._id === id)
    res.json(comment)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = products.find(product => product._id === id)
    res.json(product)
})

//POST
app.post('/contacts', (req, res) => {
    let counter = contacts.length
    const newContacts = req.body
    newContacts._id = ++counter
    contacts.push(newContacts)
    res.json(newContacts)
})

app.post('/vehicles', (req, res) => {
    let counter = vehicles.length
    const newVehicles = req.body
    newVehicles._id = ++counter
    vehicles.push(newVehicles)
    res.json(newVehicles)
})

app.post('/comments', (req, res) => {
    let counter = comments.length
    const newComments = req.body
    newComments._id = ++counter
    comments.push(newComments)
    res.json(newComments)
})

app.post('/products', (req, res) => {
    let counter = products.length
    const newProducts = req.body
    newProducts._id = ++counter
    products.push(newProducts)
    res.json(newProducts)
})


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
