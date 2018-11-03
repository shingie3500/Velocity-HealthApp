const Paynow = require('paynow');

let paynow = new Paynow("6340", "1c22d9dd-9823-405f-a4c6-cf428c126d0c");

// Set return and result urls
paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow";

// Create a new payment
let payment = paynow.createPayment("Invoice 35");

// Add items to the payment list passing in the name of the item and it's price
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);

// Send off the payment to Paynow
paynow.send(payment).then((response) => {

    // Check if request was successful
    if (response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response.redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;
    }

});