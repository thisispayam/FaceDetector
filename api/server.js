const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


const database = {
    users: [
        {
            id: '123',
            name: 'john',
            email: 'john@test.com',
            password: 'password1',
            enteries: 0,
            joined: new Date()
        },
        {
            id: '456',
            name: 'jane',
            email: 'jane@test.com',
            password: 'password2',
            enteries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('this is working');
});

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json('signin is working');
    } else{
        res.status(400).json('error logging in');
    }
});

app.post('/register', (req, res) => {
   const {email, name, password} = req.body;
   database.users.push({
       id: '789',
       name: 'payam',
       email: 'payam@test.com',
       password: 'password3',
       enteries: 0,
       joined: new Date()
   });
   res.json(database.users[database.users.length-1]); //the last user
});

app.listen(4000, () => {
    console.log('server is running on port 4000');
})

/* planning the API

/ --> res= this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user 

*/