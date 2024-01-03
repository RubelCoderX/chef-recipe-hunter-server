const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

const chefs = require('./Data/chefs.json');

app.use(cors());
app.get('/',(req, res) =>{
    res.send('chef recipe is coming')
})

app.get('/chefs',(req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id',(req, res) =>{
    const id =parseInt (req.params.id);
    console.log(id);
    const selectedChefs = chefs.find(chef => chef._id === id);
    res.send(selectedChefs);
})


app.listen(port, () =>{
     console.log(`Chef API is running on port:${port}`)
})