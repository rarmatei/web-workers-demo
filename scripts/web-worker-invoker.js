/**
 * Created by volker on 10/07/2016.
 */

var worker = new Worker("scripts/web-worker.js");

function doWorkInWebWorker() {

    document.getElementById(resultId).innerHTML = "";
    var difficulty = 1000000;
    var min = 5000;
    var max = 100000000;

    function workerResponse(message) {
        if(message.data.command === "done") {

            document.getElementById(resultId).innerHTML = message.data.sum;
            console.timeEnd("Web worker: ");
            console.log(difficulty + " iterations");
            worker.removeEventListener("message", workerResponse);

        }
    }

    worker.addEventListener("message", workerResponse, false);
    console.time("Web worker: ");
    worker.postMessage({
            "difficulty": difficulty,
            "min": min,
            "max": max
    });

}


