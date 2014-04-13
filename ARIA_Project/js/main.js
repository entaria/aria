var Jsroutines = (function() {
    // Private stuff up here

    // Public methods here
    return {
       // method 1
       method1: function(operand,num) {   //operand = number to be added, num = number added to
            var op = parseFloat(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                return op + num;
       },
    
       // method 2
       method2: function(operand,num) {     //operand = number to be subtracted, num = number subtracted from
            var op = parseFloat(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                return num - op;
       },
       
       // method 3
       method3: function(operand,num) {    //operand = number to be multiplied by, num = number to be multiplied
            var op = parseFloat(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                return op * num;
       },
       
       // method 4
       method4: function(operand,num) {     //operand = number to divide by, num = number to be divided
            var op = parseFloat(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                return num/op;
       }
        
    }
}());
