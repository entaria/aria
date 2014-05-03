describe("Aria Routines", function() {
    //basic operation tests
    /*
    it("generate QRcode", function () {
        //alert("table " + jsUtils.generateQRtable("great expectations").createCanvas());
        expect(jsUtils.generateQRtable("great expectations")).toBe(true);
    })
    */
    it("check email address 1 ", function () {
        expect(jsUtils.validateEmail("user.one@student.ncirl.ie")).toBe(true);
    })
    it("check email address 2 ", function () {
        expect(jsUtils.validateEmail("user.one@student")).toBe(false);
    })
    it("check email address 3 ", function () {
        expect(jsUtils.validateEmail("user.one.student.ncirl.ie")).toBe(false);
    })
    it("check email address 4 ", function () {
        expect(jsUtils.validateEmail("@student.ncirl.ie")).toBe(false);
    })
    it("check local JSON used in storage 1", function () {
        expect(sales[0].item).toBe("Americano");
    })    
    it("check local JSON used in storage 2", function () {
        expect(sales[0].QtySold).toBe(199);
    })   
    
    /*
    it("validate geocode 1 ", function () {
        expect(Validation.geocodeCheck("55 0 0W 1 0 0E")).toBe(true);
    })
    it("validate geocode 2 ", function () {
        expect(Validation.geocodeCheck("55 0 61W")).toBe(false);
    })
    it("validate geocode 3 ", function () {
        expect(Validation.geocodeCheck("444 444")).toBe(false);
    })
    */
    
    //handle non-numerics
    /*
    it("operation 1 should handle strings", function () {
        expect(function () { Jsroutines.method1("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("operation 2 should handle strings", function () {
        expect(function () { Jsroutines.method2("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("operation 3 should handle strings", function () {
        expect(function () { Jsroutines.method3("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("operation 4 should handle strings", function () {
        expect(function () { Jsroutines.method4("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("operation 5 should handle strings ", function () {
        expect(function () { Jsroutines.method5(0,10) }).toThrow(new Error("Not a number"));
    })
    */
});