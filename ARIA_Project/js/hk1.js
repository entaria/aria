var jsUtils = (function() {
    // Private stuff up here

    // Public methods here
    return {
       // method 1
       generateQRcode: function(options) {  
            $('#qrcode').qrcode(options);
       },
    
       generateQRtable: function(options) {  
            $('#qrcode').qrcode(options);
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
       },

       validateEmail: function(emailAddress) {
            var re = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (re.test(emailAddress)) {
                return true;
            } 
            else {
                return false;
            }
        }

       
    }
}());


