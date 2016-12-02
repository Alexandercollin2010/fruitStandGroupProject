var fruitArray = [];//end fruitArray

$(document).ready(function(){
    var apples = {
      marketPrice: 1.00,
      avgPrice: 0,
      quantity: 0,
      };// end apples
    var oranges= {
      marketPrice: 0.75,
      avgPrice: 0,
      quantity: 0,
    };//end oranges
    var bananas= {
      marketPrice: 0.50,
      avgPrice: 0,
      quantity: 0,
    };//end bananas
    var grapes= {
      marketPrice: 2.00,
      avgPrice: 0,
      quantity: 0,
    };// end grapes


    //add objects to fruitArray
    fruitArray.push(apples, oranges, bananas, grapes);

    console.log(fruitArray);

    //show MarketPrice on DOM
    var showMarketPrice = function(){
      //loop thru fruitArray and show each price
      $('#applesMP').html(fruitArray[0].marketPrice);
      $('#orangesMP').html(fruitArray[1].marketPrice);
      $('#bananasMP').html(fruitArray[2].marketPrice);
      $('#grapesMP').html(fruitArray[3].marketPrice);
    };//end showMarketPrice

    //random price change function
    var changePrice = function (){
      for (var i = 0; i < fruitArray.length; i++) {
      console.log( fruitArray[i].marketPrice = (Number(fruitArray[i].marketPrice) + (Math.random()-0.5)).toLocaleString('en-US', { style:'currency', currency: 'USD'}));
      //setInterval(changePrice, 15000);
      }
      showMarketPrice();
    };// end changePrice
    changePrice();

    $('#applesB').on('click', function(){
      console.log(fruitArray);
      fruitArray[0].quantity += 1;
      $('#applesQ').html(fruitArray[0].quantity);
    });
    $('#orangesB').on('click', function(){
      console.log('working');
      fruitArray[1].quantity += 1;
      $('#orangesQ').html(fruitArray[1].quantity);
    });
    $('#bananasB').on('click', function(){
      console.log('working');
      fruitArray[2].quantity += 1;
      $('#bananasQ').html(fruitArray[2].quantity);
    });
    $('#grapesB').on('click', function(){
      console.log('working');
      fruitArray[3].quantity += 1;
      $('#grapesQ').html(fruitArray[3].quantity);
    });


});//end of document ready function

var sum = [1, 2, 3].reduce((a, b) >= a + b, 0);
console.log(sum);
