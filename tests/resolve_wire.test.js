const wires = require('../app/wires');

test('Test NOT gate', () => {
    expect(wires.resolveWire("NOT", null, 0)).toBe(65535);
    expect(wires.resolveWire("NOT", null, 1)).toBe(65534);
    expect(wires.resolveWire("NOT", null, 123)).toBe(65412);
    expect(wires.resolveWire("NOT", null, 854)).toBe(64681);
    expect(wires.resolveWire("NOT", null, 65535)).toBe(0);
    expect(wires.resolveWire("NOT", null, 9842)).toBe(55693);
});

test('Test AND gate', () => {
    expect(wires.resolveWire("AND", 0, 0)).toBe(0);
    expect(wires.resolveWire("AND", 0, 2547)).toBe(0);
    expect(wires.resolveWire("AND", 1, 4578)).toBe(0);
    expect(wires.resolveWire("AND", 65535, 65535)).toBe(65535);
    expect(wires.resolveWire("AND", 65535, 0)).toBe(0);
    expect(wires.resolveWire("AND", 65535, 35478)).toBe(35478);
    expect(wires.resolveWire("AND", 8563, 8563)).toBe(8563);
    expect(wires.resolveWire("AND", 102, 10254)).toBe(6);
});

test('Test OR gate', () => {
    expect(wires.resolveWire("OR", 0, 0)).toBe(0);
    expect(wires.resolveWire("OR", 0, 2547)).toBe(2547);
    expect(wires.resolveWire("OR", 1, 4578)).toBe(4579);
    expect(wires.resolveWire("OR", 0, 1)).toBe(1);
    expect(wires.resolveWire("OR", 65535, 65535)).toBe(65535);
    expect(wires.resolveWire("OR", 65535, 0)).toBe(65535);
    expect(wires.resolveWire("OR", 65535, 35478)).toBe(65535);
    expect(wires.resolveWire("OR", 8563, 8563)).toBe(8563);
    expect(wires.resolveWire("OR", 102, 10254)).toBe(10350);
    expect(wires.resolveWire("OR", 58952, 4785)).toBe(63225);
});

test('Test LSHIFT gate', () => {
    expect(wires.resolveWire("LSHIFT", 0, 0)).toBe(0);
    expect(wires.resolveWire("LSHIFT", 0, 1)).toBe(0);
    expect(wires.resolveWire("LSHIFT", 1, 1)).toBe(2);
    expect(wires.resolveWire("LSHIFT", 32000, 1)).toBe(64000);
    expect(wires.resolveWire("LSHIFT", 10, 10)).toBe(10240);
    expect(wires.resolveWire("LSHIFT", 457, 5)).toBe(14624);
    expect(wires.resolveWire("LSHIFT", 1245, 3)).toBe(9960);
});

test('Test RSHIFT gate', () => {
    expect(wires.resolveWire("RSHIFT", 0, 0)).toBe(0);
    expect(wires.resolveWire("RSHIFT", 0, 1)).toBe(0);
    expect(wires.resolveWire("RSHIFT", 1, 1)).toBe(0);
    expect(wires.resolveWire("RSHIFT", 32000, 1)).toBe(16000);
    expect(wires.resolveWire("RSHIFT", 65535, 10)).toBe(63);
    expect(wires.resolveWire("RSHIFT", 65535, 1)).toBe(32767);
    expect(wires.resolveWire("RSHIFT", 58401, 5)).toBe(1825);
});

test('Test assignment', () => {
    expect(wires.resolveWire(undefined, 542, 1789)).toBe(1789);
    expect(wires.resolveWire(undefined, 14, 35410)).toBe(35410);
    expect(wires.resolveWire(undefined, 14587, 62150)).toBe(62150);
    expect(wires.resolveWire(undefined, 35789, 0)).toBe(0);

});