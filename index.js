const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const contactsRouter = require('./routes/contacts')
const vehiclesRouter = require('./routes/vehicles')
const commentsRouter = require('./routes/comments')
const productsRouter = require('./routes/products')

app.use('/', express.static("public"))
app.use(bodyParser.json())
app.use(contactsRouter)
app.use(vehiclesRouter)
app.use(commentsRouter)
app.use(productsRouter)

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
