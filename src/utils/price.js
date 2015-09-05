﻿global.price = function (item) {

    // We must have at least one price
    if (!item.price && !item.marketPrice) return false;

    // and it must not be marked as unavailable
    if (item.unavail) return false;

    var finalPrice = "";

    var defaultDiscount = .80;
    var newBookAge = 5;
    var newBookDiscount = .90;
    var beatMarketBy = .95;

    var marketPrice = parseFloat(item.marketPrice);
    var price = parseFloat(item.price);

    var year = new Date().getFullYear();
    var discount = year - parseInt(item.year) >= newBookAge ? defaultDiscount : newBookDiscount;

    // If we got a marketPrice and it is less than the discount
    // we can make
    if (marketPrice && marketPrice < price * discount) {

        // If new book, make our price the same
        if (discount == newBookDiscount) {

            finalPrice = marketPrice;

            // Otherwise beat them by beatMarketBy
        } else {

            finalPrice = marketPrice * beatMarketBy;

        }

    // Otherwise apply our normal discount
    } else finalPrice = price * discount;

    // Normalize
    finalPrice = String(Math.round(finalPrice * 100) / 100);

    // Make sure there's 2 digits after decimal point
    return finalPrice + (String(finalPrice).split('.')[1] && String(finalPrice).split('.')[1].length != 2 ? '0' : '');

};