import express from 'express';
let app = express();

app.get('/',function(req,res) {
res.send('Hello How are you');
})

app.listen(8081);