const repeatString = function(string,num) {
    let result = string;
    if(num ==0){
        result = "";
    }
    else if(num < 0){
        result = "ERROR";
    }
    else {
        for (let i = 1; i<num;i++){
            result += string;        
            
        }
    }
    return result;
}

console.log(repeatString("hey",3));

// Do not edit below this line
module.exports = repeatString;
