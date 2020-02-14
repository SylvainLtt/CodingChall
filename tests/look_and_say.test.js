const reading_digits = require('../app/reading_digits');

test('Test empty string', () => {
    expect(reading_digits.lookAndSay("")).toBe("0");
});

test('Test 1 digit strings', () => {
    expect(reading_digits.lookAndSay("0")).toBe("10");
    expect(reading_digits.lookAndSay("1")).toBe("11");
    expect(reading_digits.lookAndSay("2")).toBe("12");
});

test('Test 2 digit strings', () => {
    expect(reading_digits.lookAndSay("00")).toBe("20");
    expect(reading_digits.lookAndSay("11")).toBe("21");
    expect(reading_digits.lookAndSay("22")).toBe("22");
});

test('Test 2 different digit strings', () => {
    expect(reading_digits.lookAndSay("20")).toBe("1210");
    expect(reading_digits.lookAndSay("81")).toBe("1811");
    expect(reading_digits.lookAndSay("28")).toBe("1218");
    expect(reading_digits.lookAndSay("45")).toBe("1415");
    expect(reading_digits.lookAndSay("14")).toBe("1114");
    expect(reading_digits.lookAndSay("56")).toBe("1516");
    expect(reading_digits.lookAndSay("98")).toBe("1918");
});

test('Test 3 digit strings', () => {
    expect(reading_digits.lookAndSay("888")).toBe("38");
    expect(reading_digits.lookAndSay("333")).toBe("33");
})

test('Test 4 digit strings', () => {
    expect(reading_digits.lookAndSay("5555")).toBe("45");
    expect(reading_digits.lookAndSay("4444")).toBe("44");
})

test('Test random digit strings', () => {
    expect(reading_digits.lookAndSay("77325776")).toBe("271312152716");
    expect(reading_digits.lookAndSay("42823714")).toBe("1412181213171114");
    expect(reading_digits.lookAndSay("43952566")).toBe("14131915121526");
    expect(reading_digits.lookAndSay("62087449")).toBe("16121018172419");
})