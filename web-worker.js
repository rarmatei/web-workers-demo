/**
 * Created by volker on 10/07/2016.
 */

self.addEventListener("message", startWork);

function startWork(message) {
    var difficulty = message.data.difficulty;
    var min = message.data.min;
    var max = message.data.max;

    var primes = calculateRandomPrimes(difficulty, min, max);
    var sum = 0;
    primes.forEach((prime)=>{
        sum += prime;
    });

    self.postMessage({
       "command":"done",
        "sum": sum
    });
}

function calculateRandomPrimes(iterations, min, max) {
    var primes = [];
    for(var i=0; i<iterations; i++) {
        var toTest = getRandom(min, max);
        var isPrime = true;
        for(var j=2; j<Math.sqrt(toTest); j++) {
            if(toTest%j===0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primes.push(toTest);
    }
    return primes;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



