var sales = [
    { "item": "Americano", "QtySold": 199 },
    { "item": "Latte", "QtySold": 199 },
    { "item": "Mocha", "QtySold": 234 },
    { "item": "Cappuccino", "QtySold": 234 },
    { "item": "Herbal Tea", "QtySold": 10 },
    { "item": "Real Tea", "QtySold": 290 },
    { "item": "Water", "QtySold": 200 }

    ];

    $(jQuery.parseJSON(JSON.stringify(sales))).each(function () {
        var label = this.item;
        var y = this.QtySold;

   //    alert("This Item " + label + " Qty Sold " + y);
    });


    var localData = JSON.stringify(sales);
    window.localStorage.setItem('SalesData', localData);

    var localData = JSON.parse(window.localStorage.getItem('SalesData'));
    $(jQuery.parseJSON(JSON.stringify(localData))).each(function () {
        var label = this.item;
        var y = this.QtySold;

        
    });