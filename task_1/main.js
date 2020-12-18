// Створіть функцію myFunct(str), яка повертає рядок str з заголовним першим символом, наприклад: 
// myFunct("yura") ==> //"Yura"; 


function myFunct(str) {
    let newStr = str.charAt(0).toUpperCase();
    for( let i = 1; i < str.length; i++){
        newStr += str.charAt(i).toLowerCase();
    }

    console.log(newStr);
}

myFunct('yura');
