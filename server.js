const express = require('express')
const app = express()
const portti = 1337






function fibonacci(kuinkamonta) {
  var eka = 1
  var toka = 1
  var kolmas = 1
  var numerot = []
  numerot.push(eka)
  numerot.push(toka)

  for (let i = 0; i < kuinkamonta; i++) {
    kolmas = eka + toka;
    numerot.push(kolmas)

    eka = toka;
    toka = kolmas;

  }

  return numerot
}

console.log(fibonacci(50)) 


app.get('/', (req, res) => {
  res.send('skeletonni')
})

app.get('/fibonacci/:amount?', (req, res) => {
  if (req.params.amount) {
    res.send(fibonacci(req.params.amount))
  }
  res.send(fibonacci(15))

})

app.listen(portti, () => {
  console.log(`servu startannu.... ${portti}`)
})