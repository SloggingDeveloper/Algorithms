

var loopThruStringsToMatchRegex = function (s, p) {
    if (p == undefined || p.length < 1)
        return false;

    if (s === undefined)
        s = '';

    var sIndex = -1;
    var pIndex = -1;
    var result = null;
    do {
        
        if(sIndex >= s.length && p[pIndex] !== undefined && p[pIndex] !== '*' && p[pIndex] !== '.')
          return false;

        if(pIndex >= p.length && sIndex < s.length)
        return false;

        if(sIndex >= s.length && pIndex >= p.length)
           return true;       

        if (p[pIndex] !== undefined && p[pIndex] !== '*' && p[pIndex] !== '.' && p[pIndex + 1] === '*') {
            result = checkForCharacterFollowedByStarMatches(s, p, sIndex, pIndex);
            if (completelyMatches(result))
                return true;

            if (mismatch(result))
                return false;

            pIndex = result.nextPIndexToCheck;
            sIndex = result.nextSindexToCheck;
        }

        else if (s[sIndex] === p[pIndex]) {    
            sIndex++;
            pIndex++;        
            continue;
        }

        else if (p[pIndex] === '*') {
            result = checkForStarMatchesWithNoPreceedingNonStarCharacter(s, p, sIndex, pIndex);
            if (completelyMatches(result))
                return true;

            if (mismatch(result))
                return false;

                pIndex = result.nextPIndexToCheck;
            sIndex = result.nextSindexToCheck;
        }

        else if (p[pIndex] === '.') {
            result = checkDotMatches(s, p, sIndex, pIndex);
            if (completelyMatches(result))
                return true;

            if (mismatch(result))
                return false;

            pIndex = result.nextPIndexToCheck;
            sIndex = result.nextSindexToCheck;

        }

    } while (true);

}

var completelyMatches = function(result){
    return result.matches && result.doNotCheckFurther;
};
var mismatch = function(result){
    return !result.matches && result.doNotCheckFurther;
};

var checkDotMatches = function (s, p, sIndex, pIndex) {
    if (s[sIndex] === undefined)
        return { matches: false, nextSindexToCheck: null, nextPIndexToCheck: null, doNotCheckFurther: true };

    return { matches: true, nextSindexToCheck: ++sIndex, nextPIndexToCheck: ++pIndex };
}

var checkForCharacterFollowedByStarMatches = function (s, p, sIndex, pIndex) {
    if (s[sIndex] === undefined)
        return { matches: true, nextSindexToCheck: ++sIndex, nextPIndexToCheck: pIndex + 2 };

    if (s[sIndex] !== p[pIndex])
        return { matches: true, nextSindexToCheck: sIndex, nextPIndexToCheck: pIndex + 2 };

    var sIndexMAtchesTill = sIndex + 1;

    while (s[sIndexMAtchesTill] !== undefined && s[sIndexMAtchesTill] === p[pIndex]) {
        sIndexMAtchesTill++;
    }

    return { matches: true, nextSindexToCheck: sIndexMAtchesTill, nextPIndexToCheck: pIndex + 2 };
}

var checkForStarMatchesWithNoPreceedingNonStarCharacter = function (s, p, sIndex, pIndex) {
    if (s[sIndex] === undefined)
        return { matches: true, nextSindexToCheck: ++sIndex, nextPIndexToCheck: ++pIndex };

    if (p[pIndex + 1] === undefined) {
        return { matches: true, nextSindexToCheck: null, nextPIndexToCheck: null, doNotCheckFurther: true };
    }

    if (p[pIndex + 1] === '.' || p[pIndex + 1] === '*') {
        return { matches: true, nextSindexToCheck: ++sIndex, nextPIndexToCheck: ++pIndex };
    }

    var sIndexMoveForward = sIndex;
    var nextNonRegexCharacterInp = p[pIndex + 1];
    while (s[sIndexMoveForward] !== nextNonRegexCharacterInp && s[sIndexMoveForward] !== undefined) {
        sIndexMoveForward++;
    }

    if (s[sIndexMoveForward] === undefined)
        return { matches: false, nextSindexToCheck: null, nextPIndexToCheck: null, doNotCheckFurther: true };

    return { matches: true, nextSindexToCheck: sIndexMoveForward, nextPIndexToCheck: ++pIndex };
};

