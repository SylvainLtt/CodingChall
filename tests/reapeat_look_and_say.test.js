const reading_digits = require('../app/reading_digits');

test('Test empty string', () => {
    expect(reading_digits.repeatedLookAndSay("", 3)).toBe("1110");
});

test('Test 1 digit strings', () => {
    expect(reading_digits.repeatedLookAndSay("0", 0)).toBe("0");
    expect(reading_digits.repeatedLookAndSay("0", 1)).toBe("10");
    expect(reading_digits.repeatedLookAndSay("0", 2)).toBe("1110");
    expect(reading_digits.repeatedLookAndSay("0", 3)).toBe("3110");
    expect(reading_digits.repeatedLookAndSay("0", 4)).toBe("132110");
    expect(reading_digits.repeatedLookAndSay("0", 5)).toBe("1113122110");

    expect(reading_digits.repeatedLookAndSay("1", 0)).toBe("1");
    expect(reading_digits.repeatedLookAndSay("1", 1)).toBe("11");
    expect(reading_digits.repeatedLookAndSay("1", 2)).toBe("21");
    expect(reading_digits.repeatedLookAndSay("1", 3)).toBe("1211");
});


test('Test 2 digits strings', () => {
    expect(reading_digits.repeatedLookAndSay("33", 5)).toBe("132112132113");
    expect(reading_digits.repeatedLookAndSay("18", 5)).toBe("311311222118");
});

test('Test random strings', () => {
    expect(reading_digits.repeatedLookAndSay("376149", 9)).toBe("311311221112131221123113112221121113122113111231133221173113112221131112311332211613211321322113311213212322211431131122211311123113322119");
    expect(reading_digits.repeatedLookAndSay("484095", 7)).toBe("132113213221141321132132211813211321322114132113213221101321132132211913211321322115");
    expect(reading_digits.repeatedLookAndSay("44803", 10)).toBe("3113112221131112311332211231131122211311123113322114132113213221133112132123222118132113213221133112132123222110132113213221133112132123222113");
    expect(reading_digits.repeatedLookAndSay("579419", 6)).toBe("31131122211531131122211731131122211931131122211413211321322119");
});