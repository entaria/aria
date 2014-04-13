describe("My Routines", function() {
    //basic operation tests
    it("operation1 ", function () {
        expect(Jsroutines.method1(10,10)).toBe(20);
    })
    it("operation2 ", function () {
        expect(Jsroutines.method2(10,10)).toBe(20);
    })
    it("operation3 ", function () {
        expect(Jsroutines.method3(10,10)).toBe(20);
    })
    it("operation4 ", function () {
        expect(Jsroutines.method4(10,10)).toBe(20);
    })
    it("operation 5 throw error ", function () {
        expect(function () { Jsroutines.method5(0,10) }).toThrow(new Error("Method 5 error"));
    })
    
    //handle non-numerics
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

})