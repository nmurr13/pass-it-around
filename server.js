const express = require("express")


const app = express()


app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of Beer on the Wall!</h1>
    <a href = "/98">Take one down & pass it around!</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    const number_of_bottles = req.params.number_of_bottles
    if (number_of_bottles > 0) {
    res.send(`<h1>${number_of_bottles} Bottles of beer on the wall</h1>
    <a href = "/${number_of_bottles -1}">Take one down, pass it around<a/>`)}
    else {
        res.send(`<a href="./"><h1>Hair of the Dog</h1></a>`);
    }
})

app.listen(3000, () => {console.log("server is listening on port 3000")})