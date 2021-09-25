const express = require('express')
const app = express()
const portti = 1337


app.get('/', (req, res) => {
  res.send('skeletonni')
})

app.listen(portti, () => {
  console.log(`servu startannu.... ${portti}`)
})