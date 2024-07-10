const findTheOldest = function(array) {
  //first add age to each element  
  array.forEach((person) =>{
    if(typeof(person.yearOfDeath)!="number"){
      person.yearOfDeath = new Date().getFullYear()
    }      
    person.age = person.yearOfDeath - person.yearOfBirth;
  })

  console.table(array);
  const result = array.sort((a,b) => 
    a.age > b.age ? -1 : 1 
)
  console.table(result);
  return result[0];
  
};

// Do not edit below this line
module.exports = findTheOldest;
