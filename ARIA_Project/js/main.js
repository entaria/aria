var Jsroutines = (function() {
    // Private stuff up here

    // Public methods here
    return {

        // Generate QR Code
        generateQRcode: function(options) {  
            $('#qrcode').qrcode(options);
        },
    
        generateQRtable: function(options) {  
            $('#qrcode').qrcode(options);
        },

        validateEmail: function(emailAddress) {
            var re = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (re.test(emailAddress)) {
                return true;
            } 
            else {
                return false;
            }
        },

        // method 2
        method2: function(operand,num) {     //operand = number to be subtracted, num = number subtracted from
            var op = parseFloat(operand);
                if (isNaN(op) == true) {
                    throw new Error ("Not a number");
                }
                return num - op;
        }

    
    }
}());
