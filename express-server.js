const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req,res) => {
      res.send('Welcome to expressJS');
})

app.get('/welcome', (req,res) => {
    res.send('Welcome to expressJS 2');
})

app.get('/sendmail', (req,res) => {
    let mailDetails = {
        subject: 'Account registration',
        body: 'Welcome onboard, Your code is 4a7s93',
        to: 'tanzilebad@gmail.com'
    }
    res.json(mailDetails);
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
console.log(app);