(function () {

    const power = function (x, n) {
        let mem = [0, x];
        return divideAndCalculatePower(x, n, mem);
    };

    const divideAndCalculatePower = function (x, n, mem) {
        if (x === 0)
            return 0;
        if (n === 0)
            return 1;

        if (n === 1)
            return mem[n];

        if (mem[n] !== undefined)
            return mem[n];

        if (n % 2 === 0) {
            let result = divideAndCalculatePower(x, n / 2, mem) * divideAndCalculatePower(x, n / 2, mem);
            mem[n] = result;
            return result;
        }


        let result = divideAndCalculatePower(x, (n - 1) / 2, mem) * x * divideAndCalculatePower(x, (n - 1) / 2, mem);
        mem[n] = result;
        return result;

    };

    module.exports = power;
})();