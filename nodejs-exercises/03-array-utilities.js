const removeNegatives = ( numArray ) => {
    return numArray.filter( num => num >= 0 );
};

const sumAll = ( numArray ) => {
    let sum = 0;
    numArray.forEach(element => sum += element );
    return sum;
}

module.exports = {
    removeNegatives,
    sumAll
}