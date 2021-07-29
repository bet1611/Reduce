function extractValue(array, key) {
    return array.reduce(function(accum, nextValue) {
        accum.push(nextValue[key]);
        return accum;
    }, []);
}


function vowelCount(string) {
    const vowels = 'aeiou';
    return string.split('').reduct(function(acc, next) {
        let lowerCased = next.toLowerCase()
        if (vowels.indexOf(lowerCased) !== -1 {
            if(acc[lowerCased] {
                acc[lowerCased] ++;
            } else {
                acc[lowerCased] = 1;
            }

        }
        return acc;
    }, {});
}

function addKeyAndValue(array, key, value) {
    return array.reduce(function(acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, array);

}

function partition(array, callback) {
    return array.reduce(function(acc, next) {
        if(callback(next)) {
            acc[0].push(next);
        } esle {
            acc[1].push(next)
        }
        return acc;
    }, [[], []])
}