
var getSum = function(iterable){
    var returnVal;
    if (iterable.length >= 2){
        returnVal = iterable.map(function(item){
            return parseInt(item);
        }).reduce(function(accum, item){
            return accum + item;
        });

        return returnVal;
    }

    return ""

};


//var inputArgs = process.argv.slice(2);

console.log(getSum(process.argv.slice(2)));