//Zadanie #0
console.log("Zadanie 0:");

var Basket = {
    products = [],
    prices = [],
    sum = 0,
    addProduct: function(name, number) {
        products.push(name);
        prices.push(number);
        sum = sum + number;
    },
    showBasket: function() {
        for(var i=0; i<products.length; i++)
            console.log("produkt: "+products[i]+" cena: "+prices[i]);

        console.log("Suma: "+sum);
    }
}

//var aliceBasket = new Basket();
//aliceBasket.addProduct("pomidor",10);

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.showBasket();

