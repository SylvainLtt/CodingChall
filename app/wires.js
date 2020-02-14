var fs = require('fs');

let wires = {};


/** Evaluate an operation and return the result if it can
 * 
 * @param {*} gate operation
 * @param {*} left left operand
 * @param {*} right right operand
 */


module.exports = {

    /** Read assembly instruction and parse it to get a 
     * 
     */
    parseFile : function(){

        // object to store all wires
        let wire = {}
        fs.readFileSync('app/assembly-instructions.txt').toString().split('\r\n').forEach(line => {

            // process each line to get left side, gate, right side and wire
            let [ , left, gate, right, wire ] = line.match(/^(?:([a-z\d]+) )?(?:(AND|OR|LSHIFT|RSHIFT|NOT) )?([a-z\d]+) -> ([a-z]+)$/);
            
            // convert to numer if possible
            if (!isNaN(left)) left = +left;
            if (!isNaN(right)) right = +right;

            // store wire
            wires[wire] = [ gate, left, right ];
        });
    },

    /** Compute gate operation based on gate type, left operand and right operand
     * 
     * @param {*} gate 
     * @param {*} left 
     * @param {*} right 
     */
    resolveWire: function(gate, left, right){

        switch (gate) {
            case "NOT": return 65535 - right;
            case "AND": return left & right;
            case "OR": return left | right;
            case "LSHIFT": return left << right;
            case "RSHIFT": return left >> right;
            default: return right;
        }
    },
    
    
}