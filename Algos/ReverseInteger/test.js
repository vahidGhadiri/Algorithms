const reverseInt = require("./index")

describe('REVERSE INT', () => {

    test('ReverseInt should be defined', () => {
        expect(reverseInt).toBeDefined()
    })

    test("ReverseInt handles 0 as an input", () => {
        expect(reverseInt(0)).toEqual(0)
    })

    test("ReverseInt flips a positive number", () => {
        expect(reverseInt(5)).toEqual(5)
        expect(reverseInt(15)).toEqual(51)
        expect(reverseInt(90)).toEqual(9)
        expect(reverseInt(12234)).toEqual(43221)
    })

    test("ReverseInt flips a negative number", () => {
        expect(reverseInt(-5)).toEqual(-5)
        expect(reverseInt(-15)).toEqual(-51)
        expect(reverseInt(-90)).toEqual(-9)
        expect(reverseInt(-12234)).toEqual(-43221)
    })

})