let init = [0,1]
const fibonacci = function(number) {
    let index = parseInt(number);
    if (index<0){
        init = "OOPS";
        return init;
    }
    else if (index==0||typeof(index) !="number"){
        
        init = 0;
        return init;
    }
    else{
        for (let i = 1; i<=100; i++){
            init[i+1] = init[i-1]+init[i];
            
        }
        return init[index];
    }
};


console.log(fibonacci(""))

// Do not edit below this line
module.exports = fibonacci;


