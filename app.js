/**
 * Created by volker on 10/07/2016.
 */

window.onload = () => {
    loop();
};

var resultId = "resultValue";

var direction = true;
function loop() {
    var animationString = (direction ? '+' : '-') + "=500";
    $('#superman').css({right:0});
    $('#superman').animate ({
        left: animationString,
    }, 2000, 'linear', function() {
        direction = !direction;
        loop();
    });
}