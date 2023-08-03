// Write appropriate functions for JS_Fun_Practice GitHub colab
const identity = (x) => x;
const addb = (a, b) => a + b;
const subb = (a, b) => a - b;
const mulb = (a, b) => a * b;
const minb = (a, b) => a < b ? a : b;
const maxb = (a, b) => a > b ? a : b;
const add = (...nums) => {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
const sub = (...nums) => {
    let diff = nums[0];
    for (let i = 1; i < nums.length; i++) {
        diff -= nums[i];
    }
}
const mul = (...nums) => {
    let product = nums[0];
    for (let i = 1; i < nums.length; i++) {
        product *= nums[i];
    }
}
const min = (...nums) => {
    let smallest = 0;
    for (num of nums) {
        smallest = smallest < num ? smallest : num;
    }
}
const max = (...nums) => {
    let biggest = 0;
    for (num of nums) {
        biggest = biggest < num ? biggest : num;
    }
}
const addRecurse = (...nums) => {
    const goRecurse = (sum, i) => {
        if (i === nums.length) {
            return sum;
        }
        else {
            sum += nums[i];
            return goRecurse(sum, i + 1);
        }
    }
    return goRecurse(0, 0);
}
const mulRecurse = (...nums) => {
    const goRecurse = (product, i) => {
        if (i === nums.length) {
            return product;
        }
        else {
            product *= nums[i];
            return goRecurse(product, i + 1);
        }
    }
    return goRecurse(1, 0);
}

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    // minRecurse,
    // maxRecurse,
    // not,
    // acc,
    // accPartial,
    // accRecurse,
    // fill,
    // fillRecurse,
    // set,
    // identityf,
    // addf,
    // liftf,
    // pure,
    // curryb,
    // curry,
    // inc,
    // twiceUnary,
    // doubl,
    // square,
    // twice,
    // reverseb,
    // reverse,
    // composeuTwo,
    // composeu,
    // composeb,
    // composeTwo,
    // compose,
    // limitb,
    // limit,
    // genFrom,
    // genTo,
    // genFromTo,
    // elementGen,
    // element,
    // collect,
    // filter,
    // filterTail,
    // concatTwo,
    // concat,
    // concatTail,
    // gensymf,
    // gensymff,
    // fibonaccif,
    // counter,
    // revocableb,
    // revocable,
    // extract,
    // m,
    // addmTwo,
    // addm,
    // liftmbM,
    // liftmb,
    // liftm,
    // exp,
    // expn,
    // addg,
    // liftg,
    // arrayg,
    // continuizeu,
    // continuize,
    // vector,
    // exploitVector,
    // vectorSafe,
    // pubsub,
    // mapRecurse,
    // filterRecurse,
};