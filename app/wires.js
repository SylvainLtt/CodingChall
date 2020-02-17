var fs = require('fs');

module.exports = {

    /** Read assembly instruction and parse it to get a object with wires as keys and gate, left and right operands as values
     *  Returns wires object
     */
    parseFile: function () {

        // object to store all wires
        let wires = {}
        fs.readFileSync('app/assembly-instructions.txt').toString().split('\r\n').forEach(line => {

            // process each line to get left side, gate, right side and wire
            let [, left, gate, right, wire] = line.match(/^(?:([a-z\d]+) )?(?:(AND|OR|LSHIFT|RSHIFT|NOT) )?([a-z\d]+) -> ([a-z]+)$/);

            // convert to numer if possible
            if (!isNaN(left)) left = +left;
            if (!isNaN(right)) right = +right;

            // store wire
            wires[wire] = [gate, left, right];
        });

        return wires;
    },

    /** Compute gate operation based on gate type, left operand and right operand
     * 
     * @param {*} gate 
     * @param {*} left 
     * @param {*} right 
     */
    resolveWire: function (gate, left, right) {

        switch (gate) {
            case "NOT": return 65535 - right;
            case "AND": return left & right;
            case "OR": return left | right;
            case "LSHIFT": return left << right;
            case "RSHIFT": return left >> right;
            default: return right;
        }
    },

    /** Process the whole assembly instruction and returns the value of each wire
     * 
     */
    solveCircuit: function () {
        let wires = this.parseFile();
        let solved_wires = {};

        // loop while all wires are not solved  
        while (Object.keys(solved_wires).length < Object.keys(wires).length) {
            
            for (let wire in wires) {
                if (!solved_wires[wire]) {
                    let gate = wires[wire][0];
                    let left = wires[wire][1];
                    let right = wires[wire][2];

                    // get left operand value if possible (if value is in solved_wires)
                    // if value is a string but not found in solved, skip this instruction
                    if (typeof left === "string"){
                        if (solved_wires.hasOwnProperty(left)) {
                            left = solved_wires[left];
                        } else continue;
                    }

                    // same for right
                    if (typeof right === "string"){
                        if (solved_wires.hasOwnProperty(right)) {
                            right = solved_wires[right];
                        } else continue;
                    }

                    // call resolveWire function and store value in solved_wires
                    let value = this.resolveWire(gate, left, right);
                    if (value !== null) {
                        solved_wires[wire] = value;
                    }
                }
            }
        }

        return solved_wires;
    }
}