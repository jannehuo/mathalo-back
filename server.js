const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const portti = 1337;

function fibonacci(kuinkamonta) {
  var eka = 1;
  var toka = 1;
  var kolmas = 1;
  var numerot = [];
  numerot.push(eka);
  numerot.push(toka);

  for (let i = 0; i < kuinkamonta; i++) {
    kolmas = eka + toka;
    numerot.push(kolmas);

    eka = toka;
    toka = kolmas;
  }

  return numerot;
}

console.log(fibonacci(50)) 

// #######################################

var countPrimes = function(n) {
  var arr = [1]

  if(n === 1){
return 0;
  }
  let count = 0;
  for(let i = 2; i < n; i++){
      if(i !== 2 && i % 2 == 0){
          continue;
      }

          if(isPrime(i)){
            arr.push(i)
              count++;

          }

  }
  return arr;
};

function isPrime(num) {
var sqrtnum=Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for(var i=2; i<sqrtnum+1; i++) { 
      if(num % i == 0) {
          prime = false;
          break;
      }
  }
  return prime;
}

console.log(countPrimes(1000))



app.get('/', (req, res) => {
  res.send('skeletonni');
});

app.get('/fibonacci/:amount?', (req, res) => {
  if (req.params.amount) {
    res.send(fibonacci(req.params.amount));
  }
  res.send(fibonacci(15));
});

app.get('/prime/:until?', (req, res) => {
  if (req.params.until) {
    res.send(countPrimes(req.params.amount))
  }
  res.send(countPrimes(15))

})

app.listen(portti, () => {
  console.log(`servu startannu.... ${portti}`);
});
