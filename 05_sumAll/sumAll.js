const sumAll = function(start,end) {
let result = 0;
    if  ((start<0||end<0)||(typeof(end)!= "number"||typeof(start)!= "number" )) return "ERROR";
    if (start<end){
    for (let i = start; i < end+1; i++){
        result = result + i;        
    }
    }
    else{
    for (let i = end; i < start+1; i++){
        result = result + i;
        
    }
}
    return result;
};

// Do not edit below this line
module.exports = sumAll;
