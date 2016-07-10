/**
 * Created by volker on 10/07/2016.
 */

function doSomethingIntensive() {
    document.getElementById(resultId).innerHTML = "";
    var difficulty = 1000000;
    var min = 5000;
    var max = 100000000;
    console.time("Blocking script: ");
    var primes = calculateRandomPrimes(difficulty, min, max);
    console.timeEnd("Blocking script: ");
    console.log(difficulty + " iterations");
    var sum = 0;
    primes.forEach((prime)=>{
        sum += prime;
    });
    document.getElementById(resultId).innerHTML = sum;

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



