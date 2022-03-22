const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use('/jquery', express.static(__dirname+"/node_modules/jquery/dist/"));
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/home.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})