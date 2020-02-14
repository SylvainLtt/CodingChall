module.exports = {
    /** Apply the look and say algorithm to param seq, one time
     * 
     * @param {string} seq sequence to process
     */
    lookAndSay: function(seq){

    if (!seq.length){
        return "0";
    }

    // begin process of seq

    // init counter for consecutive identical chars
    let consecutive_chars = 1
    let result = '';

    // iterate through the seq chars
    for (let i = 1; i < seq.length; i++){


        if (seq[i] === seq[i-1]){
            // if current char is the same as the previous one
            // increment counter
            consecutive_chars++;

        } else {
            // else
            // append counter and char to result string
            result += consecutive_chars + seq[i-1];

            // reset counter
            consecutive_chars = 1;
        }
    }

    // append last chars
    result += consecutive_chars + seq[seq.length-1];

    return result;
    },

    /** Apply n time the look and say algorithm to param seq 
     * 
     * @param {string} seq sequence to process
     * @param {number} n number of iterations to do
     */
    repeatedLookAndSay: function(seq, n){

        for (let i=0; i < n; i++){
            seq = this.lookAndSay(seq);
        }

        return seq;
    }
}