const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req, res) =>{
    res.send('chef recipe is coming')
})

app.listen(port, () =>{
     console.log(`Chef API is running on port:${port}`)
})