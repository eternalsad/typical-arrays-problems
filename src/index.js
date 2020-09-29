exports.min = function min(array) {
    if (array == null || array.length == 0) return 0;
    let min = Number.POSITIVE_INFINITY;
    array.forEach((element) => {
        min = element < min ? element : min;
    });
    return min;
};

exports.max = function max(array) {
    if (array == null || array.length == 0) return 0;
    return array.reduce((a, b) => {
        if (a > b) return a;
        else return b;
    });
};

exports.avg = function avg(array) {
    if (array == null || array.length == 0) return 0;
    return array.reduce((a, b) => a + b) / array.length;
};
