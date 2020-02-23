(function () {
    function permute(input) {
        var result = [];
        if (input.length === 1)
            return [input];

        for (var i = 0; i < input.length; i++) {
            var newStr = input.split('');
            newStr.splice(i, 1);
            var comb = permute(newStr.join(''));

            for (var j = 0; j < comb.length; j++) {
                result.push(input[i] + comb[j]);
            }
        }

        return result;
    }

    module.exports = permute;
}
)();