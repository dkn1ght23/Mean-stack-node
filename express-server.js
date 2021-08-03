const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req,res) => {
      res.send('Welcome to expressJS');
})

app.get('/welcome', (req,res) => {
    res.send('Welcome to expressJS 2');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
console.log(app);