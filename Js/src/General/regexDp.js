'use strict';

(function () {

    const isSpecficCharRepetition = function (word, index) {
        return (index + 1) <= word.length && word[index] !== '*' && word[index] !== '.' && word[index + 1] === '*';
    };

    const isAnyCharRepitition = function (word, index) {
        return (index + 1) <= word.length && word[index] === '.' && word[index + 1] === '*';
    };

    const isAnySingleChar = function (word, index) {
        return (index + 1) <= word.length && word[index] === '.' && word[index + 1] !== '*';
    };


    const tokenizeRegex = function (pattern) {
        let split = pattern.split('');
        let tokenized = [];
        for (let i = 0; i < split.length; i++) {
            if (isAnyCharRepitition(split, i) || isSpecficCharRepetition(split, i)) {
                tokenized.push(split[i] + split[i + 1]);
                i++;
            }
            else
                tokenized.push(split[i]);
        }
        return tokenized;
    };

    const getMatchMatrix = function (word, pattern) {
        let wordSplit = word.split('');
        let tokenizedPattern = tokenizeRegex(pattern);
        let matrix = [];
        for (let i = 0; i < tokenizedPattern.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < wordSplit.length; j++) {
                matrix[i][j] = false;
            }
        }

        for (let i = 0; i < tokenizedPattern.length; i++) {
            //case 1:
            if (isAnyCharRepitition(tokenizedPattern[i].split(''), 0)) {
                MatchWildCard(i, wordSplit, matrix);
            }

            else if (isSpecficCharRepetition(tokenizedPattern[i].split(''), 0)) {
                matchCharWithWildCard(tokenizedPattern, i, wordSplit, matrix);
            }

            else if (isAnySingleChar(tokenizedPattern[i], 0)) {
                matrix[i][i] = true && matrix[i - 1][i - 1]
            }

            else {
                matchSingleCharacter(tokenizedPattern, i, wordSplit, matrix);
            }
        }

        return matrix;
    };



    const isMatch = function (word, pattern) {
        let matrix = getMatchMatrix(word, pattern);
        return matrix[matrix.length - 1][matrix[0].length - 1];
    };

    const matchSingleCharacter = function (tokenizedPattern, outerIndex, wordSplit, matrix) {
        if ((tokenizedPattern[outerIndex - 1] && (isAnyCharRepitition(tokenizedPattern[outerIndex - 1].split(''), 0) ||
            isSpecficCharRepetition(tokenizedPattern[outerIndex - 1].split(''), 0))) ||
            (tokenizedPattern[outerIndex - 2] && (isAnyCharRepitition(tokenizedPattern[outerIndex - 2].split(''), 0) ||
            isSpecficCharRepetition(tokenizedPattern[outerIndex - 2].split(''), 0) && isAnySingleChar(tokenizedPattern[outerIndex - 1], 0)))
            )
             {
            var wordIndex = outerIndex - 1;
            while (wordIndex < wordSplit.length) {
                if (tokenizedPattern[outerIndex] === wordSplit[wordIndex]) {
                    matrix[outerIndex][wordIndex] = true && matrix[outerIndex - 1][wordIndex];
                }
                wordIndex++;
            }
        }

        else if (tokenizedPattern[outerIndex] === wordSplit[outerIndex]) {
            if (outerIndex > 0)
                matrix[outerIndex][outerIndex] = true && matrix[outerIndex - 1][outerIndex - 1];
            else
                matrix[outerIndex][outerIndex] = true;
        }
    }

    const MatchWildCard = function (outerIndex, wordSplit, matrix) {
        let lastMatchStatus = outerIndex > 0 ? matrix[outerIndex - 1][outerIndex - 1] : true;
        for (let j = outerIndex; j < wordSplit.length; j++) {
            lastMatchStatus = matrix[outerIndex][j] = true && lastMatchStatus;
        }
    }

    const matchCharWithWildCard = function (tokenizedPattern, i, wordSplit, matrix) {
        let char = tokenizedPattern[i][0];
        for (let j = i; j < wordSplit.length && wordSplit[j] === char; j++) {
            if (i > 0 && j > 0)
                matrix[i][j] = true && matrix[i - 1][j - 1];
            else
                matrix[i][j] = true;
        }
    }

    module.exports = isMatch;
})();




