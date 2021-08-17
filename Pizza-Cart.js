const smallIncreaseBtn = document.querySelector(".increaseBtn.small");
const mediumIncreaseBtn = document.querySelector(".increaseBtn.medium");
const largeIncreaseBtn = document.querySelector(".increaseBtn.large");

const smallIncreaseBtnBuy = document.querySelector(".increaseBtn.small.buy");
const mediumIncreaseBtnBuy = document.querySelector(".increaseBtn.medium.buy");
const largeIncreaseBtnBuy = document.querySelector(".increaseBtn.large.buy");

const smallDecreaseBtn = document.querySelector(".decreaseBtn.small");
const mediumDecreaseBtn = document.querySelector(".decreaseBtn.medium");
const largeDecreaseBtn = document.querySelector(".decreaseBtn.large");

const smallPizzaQty = document.querySelector(".smallPizzaQty");
const mediumPizzaQty = document.querySelector(".mediumPizzaQty");
const largePizzaQty = document.querySelector(".largePizzaQty");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const mediumPizzaTotal = document.querySelector(".mediumPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const theCartTotal = document.querySelector(".theCartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

//const callBtn = document.querySelector(".callBtn")

var theSmallQty = 0;
var theMediumQty = 0;
var theLargeQty = 0;
var theTotalCart = 0;

function BtnClick() {
    if (event.target.className == "increaseBtn small" || event.target.className == "increaseBtn small buy") {
        theSmallQty++;
        smallPizzaQty.innerHTML = theSmallQty;
    } else if (event.target.className == "increaseBtn medium" || event.target.className == "increaseBtn medium buy") {
        theMediumQty++;
        mediumPizzaQty.innerHTML = theMediumQty;
    } else if (event.target.className == "increaseBtn large" || event.target.className == "increaseBtn large buy") {
        theLargeQty++;
        largePizzaQty.innerHTML = theLargeQty;
    }

    if (event.target.className === "decreaseBtn small") {
        theSmallQty--;
        if (theSmallQty < 0) {
            theSmallQty = 0;
        }
        smallPizzaQty.innerHTML = theSmallQty;
    } else if (event.target.className === "decreaseBtn medium") {
        theMediumQty--;
        if (theMediumQty < 0) {
            theMediumQty = 0;
        }
        mediumPizzaQty.innerHTML = theMediumQty;
    } else if (event.target.className === "decreaseBtn large") {
        theLargeQty--;
        if (theLargeQty < 0) {
            theLargeQty = 0;
        }
        largePizzaQty.innerHTML = theLargeQty;
    }

    smallPizzaTotal.innerHTML = (theSmallQty * 49).toFixed(2);
    mediumPizzaTotal.innerHTML = (theMediumQty * 89).toFixed(2);
    largePizzaTotal.innerHTML = (theLargeQty * 129).toFixed(2);
    theTotalCart = theSmallQty * 49.00 + theMediumQty * 89.00 + theLargeQty * 129.00;
    theCartTotal.innerHTML = theTotalCart.toFixed(2);

    if (theTotalCart > 0) {
        checkOut.classList.remove('hidden');
    } else {
        checkOut.classList.add('hidden');
        payOut.classList.add('hidden');
    } 
}

function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment(){
    message.classList.toggle('hidden');
    var paymentAmt = Number(payAmt.value);
 if (paymentAmt == theTotalCart){
    message.innerHTML = "Enjoy your Pizza!";
    checkOut.classList.remove('hidden');
    theSmallQty = 0;
    theMediumQty = 0;
    theLargeQty = 0;
    theTotalCart = 0;

    smallPizzaQty.innerHTML = theSmallQty;
    mediumPizzaQty.innerHTML = theMediumQty;
    largePizzaQty.innerHTML = theLargeQty;

    smallPizzaTotal.innerHTML = (theSmallQty * 39).toFixed(2);
    mediumPizzaTotal.innerHTML = (theMediumQty * 79).toFixed(2);
    largePizzaTotal.innerHTML = (theLargeQty * 99).toFixed(2);
    theTotalCart = theSmallQty * 39.00 + theMediumQty * 79.00 + theLargeQty * 99.00;
    theCartTotal.innerHTML = theTotalCart.toFixed(2);

    setTimeout(function () {
        message.classList.toggle('hidden');
        checkOut.classList.toggle('hidden');
        payOut.classList.add('hidden');
        payAmt.value = "";
    }, 4000);

 } else if (paymentAmt > theTotalCart) {
    var change = paymentAmt - theTotalCart;
    message.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2);
    checkOut.classList.remove('hidden');
    theSmallQty = 0;
    theMediumQty = 0;
    theLargeQty = 0;
    theTotalCart = 0;

    smallPizzaQty.innerHTML = theSmallQty;
    mediumPizzaQty.innerHTML = theMediumQty;
    largePizzaQty.innerHTML = theLargeQty;

    smallPizzaTotal.innerHTML = (theSmallQty * 39).toFixed(2);
    mediumPizzaTotal.innerHTML = (theMediumQty * 79).toFixed(2);
    largePizzaTotal.innerHTML = (theLargeQty * 99).toFixed(2);
    theTotalCart = theSmallQty * 39.00 + theMediumQty * 79.00 + theLargeQty * 99.00;
    theCartTotal.innerHTML = theTotalCart.toFixed(2);

    setTimeout(function () {
        message.classList.toggle('hidden');
        checkOut.classList.toggle('hidden');
        payOut.classList.add('hidden');
        payAmt.value = "";
    }, 4000);

}  else{
    message.innerHTML = "Sorry, that is not enough money!";
    setTimeout(function () {
        checkOut.classList.add('hidden');
        message.classList.toggle('hidden');
   }, 4000);
}
}


smallIncreaseBtn.addEventListener('click', BtnClick);
smallDecreaseBtn.addEventListener('click', BtnClick);
smallIncreaseBtnBuy.addEventListener('click', BtnClick);

mediumIncreaseBtn.addEventListener('click', BtnClick);
mediumDecreaseBtn.addEventListener('click', BtnClick);
mediumIncreaseBtnBuy.addEventListener('click',BtnClick);

largeIncreaseBtn.addEventListener('click', BtnClick);
largeDecreaseBtn.addEventListener('click', BtnClick);
largeIncreaseBtnBuy.addEventListener('click',BtnClick);

checkOut.addEventListener('click', checkOutClick)

payBtn.addEventListener('click', payment)