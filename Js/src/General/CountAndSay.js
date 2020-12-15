(function () {

    function getResult(count) {
        let result = ["1"];
        let initial = "1";
        count--;
        while (count > 0) {            
            var nextString = "";
            var charCount = {char:initial[0], count:1};
            for (let i = 1; i < initial.length; i++) {

                if (charCount.char === initial[i]) {
                    charCount.count++;
                }
                else {
                    nextString += charCount.count + charCount.char;
                    charCount.char = initial[i];
                    charCount.count = 1;
                }
            }
            nextString += charCount.count + charCount.char;
            initial = nextString;
            result.push(nextString);
            count--;
        }

        return result;
    }

    module.exports = getResult;
})();