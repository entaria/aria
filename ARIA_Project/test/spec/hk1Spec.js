describe("Aria Routines", function() {
    //basic operation tests
    it("generate QRcode", function () {
        //alert("table " + jsUtils.generateQRtable("great expectations").createCanvas());
        expect(jsUtils.generateQRtable("great expectations")).toBe("?");
    })
    /*
    it("generate QRcode", function () {
        expect(jsUtils.generateChecksum(11111111111111)).toBe("?");
    })
    */
    it("check email address 1 ", function () {
        expect(jsUtils.validateEmail("hugh.kelly@student.ncirl.ie")).toBe(true);
    })
    it("check email address 2 ", function () {
        expect(jsUtils.validateEmail("hugh.kelly@student")).toBe(false);
    })
    it("check email address 3 ", function () {
        expect(jsUtils.validateEmail("hugh.kelly.student.ncirl.ie")).toBe(false);
    })
    it("check email address 4 ", function () {
        expect(jsUtils.validateEmail("@student.ncirl.ie")).toBe(false);
    })
    it("validate geocode 1 ", function () {
        expect(Validation.geocodeCheck("55 0 0W 0 0 0E")).toBe(true);
    })
    it("validate geocode 2 ", function () {
        expect(Validation.geocodeCheck("55 0 61W 0 0 0E")).toBe(false);
    })
    it("validate geocode 3 ", function () {
        expect(Validation.geocodeCheck("55 0 61W 0 0 0E")).toBe(false);
    })
    
    
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