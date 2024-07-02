const removeFromArray = function() {
    
    let toCheck = arguments[0];
    console.log(toCheck.length);
    let toExclude = argumentsToArray(arguments);
    toExclude = getToExclude(toExclude);
    let result = new Array;

    outer : for (let i = 0; i < toCheck.length; i++){
        for (let j = 0; j < toExclude.length; j++){

            console.log("This is i: "+i+" and this is the current value of toCheck with index i: "+toCheck[i])

            console.log("This is j: "+j+" and this is the current value of toExclude with index j: "+toExclude[j])
            if (toCheck[i] === toExclude[j]){
                console.log("Fehler gefunden!")
                continue outer;
            }
        }
        result.push(toCheck[i]);

    }
    return result;


    // array in input finden und speichern --> stelle 0
    // ausschlusskriterien finden und speichern --> stelle ab 1
    // leeren array definieren
    // erste stelle prüfen ob er mit ausschlusskriterim übereinstimmt
    // wenn ja, dann weiter
//     // wenn nein, dann anhängen
}

function getToExclude (array) {
    let result = new Array;
    for (let count = 1; count < array.length; count ++){
        result.push(array[count]);
    }
    return result;
}

function argumentsToArray (array){
    let result = new Array;
    for (let num = 0; num < array.length; num++){
    result.push(array[num]);
    }
    return result;
}

console.log("This is the new array: "+removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
