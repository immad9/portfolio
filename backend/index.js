const app = require("./app");
const generateEmail = require("./email.controller/index")
const port = process.env.PORT || 3000

app.get('/', async(req, res) => {
    res.send('Hello World!')
})

app.post('/', async(req, res) => {
    await generateEmail(req,res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})