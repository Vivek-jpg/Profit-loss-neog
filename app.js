var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var output = document.querySelector("#output-box");
var btn = document.querySelector("#submit-btn");


btn.addEventListener("click", submitHandler);

function submitHandler() {

    var ip = Number(initialPrice.value);
    var qt = Number(stockQuantity.value);
    var cpp = Number(currentPrice.value);
    profitAndLoss(ip, qt, cpp);

    initialPrice.value = ' ';
    stockQuantity.value = ' ';
    currentPrice.value = ' ';

}


function profitAndLoss(initial, quantity, current) {

    if (initial < 0 || quantity < 0 || current < 0) {
        message("Please enter positive values");
    } else

    if (initial == '' || quantity == '' || current == '') {
        message("Input fields can not be empty or zero");

        document.querySelector("body").style.backgroundColor = "#08ffd6";
        document.querySelector("body").style.color = "white";



    } else

    if (initial < current) {
        console.log(initial,current);

        var profit = (current - initial) * quantity;

        var profitPercent = (((current - initial)*100 )/initial).toFixed(2);

        message(`Hey you have made ${profit} profit and your profit percentage is ${profitPercent}% `);

        document.querySelector("#output-box").style.backgroundColor = "rgb(3, 129, 3)";
        document.querySelector("body").style.backgroundColor = "#8dd693";

   
    }
     else  if (initial > current) {
        var loss = (initial - current) * quantity;

        var lossPercent = (((initial - current)*100)/initial).toFixed(2);

        message(`Hey you have made ${loss} loss and your loss percentage is ${lossPercent}% `);

        document.querySelector("#output-box").style.backgroundColor = "red";
        document.querySelector("body").style.backgroundColor = "#ba5f5f";


    } else {
        message("No gain no pain, No pain no gain");
        document.querySelector("#output-box").style.backgroundColor = "#2186eb";
        document.querySelector("body").style.backgroundColor = "#6da5de";



    }
}

function message(msg) {
    output.innerText = msg;
    output.style.border = "3px solid white";
    



}