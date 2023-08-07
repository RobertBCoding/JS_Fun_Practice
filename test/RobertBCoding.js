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

const minRecurse = (...nums) => {
    const goRecurse = (min, i) => {
        if (i === nums.length) {
            return min;
        }
        else {
            min = min < nums[i] ? min : nums[i];
            return goRecurse(min, i + 1);
        }
    }    
    return goRecurse(nums[0], 1);
}

const maxRecurse = (...nums) => {
    const goRecurse = (max, i) => {
        if (i === nums.length) {
            return max;
        }
        else {
            max = max > nums[i] ? max : nums[i];
            return goRecurse(max, i + 1);
        }
    }
    return goRecurse(nums[0], 1);
}

const not = (func) => (...args) => !func(...args);

const acc = (func, initial) => (...args) => args.reduce(func, initial);

// Ultimately, this function will return a function that returns a new array
const accPartial = (func, start, end) => (...nums) => {
    const subArray = nums.slice(start, end).reduce((acc, num) => {
    return func(acc, num); // Requires return statement for reduce()
    }); 
    return nums.slice(0, start).concat(subArray, nums.slice(end));
}
// * I found a solution that is representative of a common way of solving the above problem.
// That solution (as expressed by JMCrawf_Solution.js) is as follows:
// const accPartial = (f, start, end) => {
//     const inside = (...nums) => {
//         let subset =  nums.slice(start,end).reduce((acc, num) => {
//             return f(acc,num);
//         });
//         nums.splice(start, end-start, subset)
//         return nums
//     }
//     return inside;
// }

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
    minRecurse,
    maxRecurse,
    not,
    acc,
    accPartial,
    accRecurse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb,
    curry,
    inc,
    twiceUnary,
    doubl,
    square,
    twice,
    reverseb,
    reverse,
    composeuTwo,
    composeu,
    composeb,
    composeTwo,
    compose,
    limitb,
    limit,
    genFrom,
    genTo,
    genFromTo,
    elementGen,
    element,
    collect,
    filter,
    filterTail,
    concatTwo,
    concat,
    concatTail,
    gensymf,
    gensymff,
    fibonaccif,
    counter,
    revocableb,
    revocable,
    extract,
    m,
    addmTwo,
    addm,
    liftmbM,
    liftmb,
    liftm,
    exp,
    expn,
    addg,
    liftg,
    arrayg,
    continuizeu,
    continuize,
    vector,
    exploitVector,
    vectorSafe,
    pubsub,
    mapRecurse,
    filterRecurse,
};