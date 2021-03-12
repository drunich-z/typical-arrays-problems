exports.min = function min(array) {
    //проверка входящего параметра на существование и на 'непустость'
    if (typeof array == "undefined" || array.length == 0) {
        return 0;
    }
    var minn = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) {
        // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (minn > array[i]) minn = array[i];
    }
    // возвращаем минимальное значение
    return minn;
};

exports.max = function max(array) {
    //проверка входящего параметра на существование и на 'непустость'
    if (typeof array == "undefined" || array.length == 0) {
        return 0;
    }
    var maxx = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) {
        // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (maxx < array[i]) maxx = array[i];
    }
    // возвращаем максимальное значение
    return maxx;
};

exports.avg = function avg(array) {
    //проверка входящего параметра на существование и на 'непустость'
    if (typeof array == "undefined" || array.length == 0) {
        return 0;
    }
    var avgg = 0; // пока среднего нет
    for (var i = 0; i < array.length; i++) {
        // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        avgg += array[i];
    }
    avgg = avgg / array.length;
    // возвращаем среднее значение
    return avgg;
};
