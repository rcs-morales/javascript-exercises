const sumAll = function(a,b) {
    
    if ((a || b) < 0) return 'ERROR' 
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    
    let totalSum = 0;
    let sum = 0;
    
    for(let i = 0; i < (a+b)-1 ; i++ ){
        if(a < b){
            sum = (a + i)
            totalSum += sum;
        } else {
            sum = (b + i)
            totalSum += sum;
        }           
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
