const penjumlahan = (param1, param2) => {
    return param1 + param2;
}

test("testing-basic", () => {
    expect(true).toBe(true);
})

test("Menjumlahkan nilai", () => {
    expect(penjumlahan(2,3)).toBe(5);
})