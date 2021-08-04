const express = require('express');

const app = express();
const port = 4000;

//Middleware
app.use('/welcome', (req,res, next) => {
    res.send('bad request');
})
//Middleware
//Every routes must go through middleware and if middleware wants to stop, it can do it.
//Here, welcome is the key word, that is why server will show "bad request".

app.get('/', (req,res) => {
    let mailDetails = {
        subject: 'Account registration',
        body: 'Welcome onboard, Your code is 4a7s93',
        to: 'tanzilebad@gmail.com'
    }
    res.json(mailDetails);
})

app.get('/welcome', (req,res) => {
    res.send('Hello mate!');
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
console.log(app);