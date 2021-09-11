const reverseString = require("./index")

describe("REVERSE_STRING ALGORITHM", () => {

    test("Reverse function should be defined", () => {
        expect(reverseString).toBeDefined()
    })

    test("Reverse function should return string with reversed characters", () => {
        expect(reverseString("vahid")).toEqual("dihav")
    })

    test("Reverse function should reverse spaces too", ()=>{
        expect(reverseString("vahid   ")).toEqual("   dihav")
    })

})