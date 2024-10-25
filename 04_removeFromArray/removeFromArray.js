
// ... args used for multiple element input
const removeFromArray = function(arr,...args){

    const newArr = []; 
    // forEach to loop through the array elements 
    arr.forEach((element) => {
        // push all elements that does not contain elements in function argument(args)
        if (!args.includes(element)){
            newArr.push(element)
        }
    });

    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
