//replace word1 with word2 minimum steps count
(function () {
    const editDistance = function (wFrom, wTo) {

        if (!wFrom || wFrom.trim() === '')
            return wTo ? wTo.length : 0;

        if (!wTo || wTo.trim() === '')
            return wFrom ? wFrom.length : 0;

        var wFromScanStopIndex = wFrom.length > wTo.length ? wTo.length : wFrom.length;

        let editDistanceValue = 0;
        for (let i = 0; i < wFromScanStopIndex; i++) {
            if (wFrom[i] !== wTo[i])
                editDistanceValue++;
        }

        editDistanceValue+= Math.abs(wFrom.length - wTo.length);

        return editDistanceValue;
    };

    module.exports = editDistance;
})();