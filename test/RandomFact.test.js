describe("Unidad de pruebas para randomfact", () => {
    test("1)Imprime dato aleatorio", () => {
        const fact = require("./../lib/services/RandomFact");
        expect(fact.RandomFact()).not.toBe("[]");
    });
});