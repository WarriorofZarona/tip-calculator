var totalPriceEl = document.querySelector("#total-price");
var tipEl = document.querySelector("#tip-percentage");
var submitEl = document.querySelector("#submit");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total")


function convertTip() {


    var tipVal = (parseFloat(tipEl.value) * .01).toFixed(2);

    return tipVal

}

submitEl.addEventListener("click", function (event) {

    event.preventDefault();

    var totalPrice = totalPriceEl.value;

    var tipTotal = (totalPrice * convertTip()).toFixed(2);

    tipAmountEl.textContent = tipTotal;


    var newPrice = (parseFloat(tipTotal) + parseFloat(totalPrice)).toFixed(2);

    newTotalEl.textContent = newPrice


});