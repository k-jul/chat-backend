const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const routes = require('./routes')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api", routes);



app.use((req, res, next) => {
    console.error('Route not found');
    res.sendStatus(404);
})



app.listen(8000, () => {
    console.log ("Server started on localhost:8000")
});