const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  return array.reduce((total,current) => total+current,0)
}

const multiply = function(array) {
  return array.reduce((product,current) => product*current);

};

const power = function(a,b) {
  return Math.pow(a,b)

};

const factorial = function(n) {
  let result = 1;
  if(n == 0){
  }
  else {
    
    for(let count = 1; count<=n; count++){
      result *= count;
    }
  }
  return result
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
