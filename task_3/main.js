function extractCurrencyValue(str){
    let myRe = /[$] /g;
    let myArray;
    while ((myArray = myRe.exec(str)) !== null) {

    console.log(str.slice(myRe.lastIndex));
}
}

extractCurrencyValue('$ 120')