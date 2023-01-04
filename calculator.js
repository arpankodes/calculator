const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res )=>{
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req,res)=>{
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send(`The result is ${result}`)
})

app.listen(port, ()=>{
  console.log(`Calculator app listening on port ${port}`)
})
