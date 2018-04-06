require('dotenv').config();
const express = require('express'),
        bodyParser = require('body-parser'),
       ctrl = require('./controllers/auth_controller'),
        app = express(),
        session=require('express-session'),
        massive=require('massive');

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env


app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const db = app.get('db');

//Middleware
// app.use(session({
//     secret: 'whateverjksh',
//     resave: false,
//     saveUninitialized: false,
// }))

// app.post('/api/auth/login',auth_controller.login);
// app.post('/api/auth/register',auth_controller.register);
// app.post('/api/auth/logout',auth_controller.logout)

app.post('/api/properties', ctrl.create);
app.get('/api/properties', ctrl.read);
app.get('/api/properties/filter', ctrl.filter)
app.delete('/api/properties/:id', ctrl.delete)
app.put('/api/properties/:id', ctrl.edit)



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})