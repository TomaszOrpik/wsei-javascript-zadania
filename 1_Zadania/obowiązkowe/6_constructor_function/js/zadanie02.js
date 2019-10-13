console.log("Zadanie 2:");

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2
    var operations = [];
    function add(num1, num2) {
        var result = num1+num2;
        var text = "added "+num1+" to "+num2+" got "+result;
        operations.push(text);
        return result;
    }
}

var cal1 = new Calculator();
cal1.add(2, 2);