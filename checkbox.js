document.getElementById("myBtn").onclick = function () {
    const myCheck = document.getElementById("myCheck");
    const visaBtn = document.getElementById("visa");
    const masterBtn = document.getElementById("master");
    const paypalBtn = document.getElementById("paypal");
    if (myCheck.checked) {
        console.log("You have subscribed");
    } else {
        console.log("You have not yet subscribed!");
    }
    if (visaBtn.checked) {
        console.log("You are paying with your visa card");
    } else if (masterBtn.checked) {
        console.log("You are paying with you master card");
    } else if (paypalBtn.checked) {
        console.log("YOU are paying with your paypal");
    }else{
        console.log("YOu must select a payment type");
    }
}