/**
 * Created by volker on 10/07/2016.
 */


function blockButRequestAnimationFrame() {
    document.getElementById(resultId).innerHTML = "";
    //vs 1M on full blocking, but it takes the same time => this is much slower
    var iterations = 500;
    var min = 5000;
    var max = 100000000;

    function loopPrime(iteration) {
        if (iteration === iterations) {
            var sum = 0;
            primes.forEach((prime)=> {
                sum += prime;
            });
            document.getElementById(resultId).innerHTML = sum;
            console.timeEnd("Request frame: ");
            console.log(iterations + " iterations");
            return;
        }

        var toTest = getRandom(min, max);
        var isPrime = true;
        for (var j = 2; j < Math.sqrt(toTest); j++) {
            if (toTest % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(toTest);
        window.requestAnimationFrame(() => loopPrime(++iteration));
    }

    var primes = [];

    console.time("Request frame: ");
    window.requestAnimationFrame(()=> loopPrime(0));
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


