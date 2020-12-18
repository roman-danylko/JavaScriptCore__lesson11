// Створіть функцію truncate(str, maxlength), яка перевіряє довжину рядка str, і якщо вона перевищує maxlength - замінює кінець str на "...", так щоб її довжина стала дорівнювати maxlength. 

// Результатом функції повинен бути (при необхідності) зменшений рядок. 

// Наприклад: 
// truncate ("Ось, що мені хотілося б сказати на цю тему:", 20) = "Ось, що мені хот ..." 
// truncate ("Всім привіт!", 20) = "Всім привіт!" 

function truncate(str, maxlength){
    let newStr = str;
    if(str.length > maxlength){
        newStr = str.slice(0, maxlength - 3).concat('...')
    } 

    console.log(newStr);
}


truncate("Ось, що мені хотілося б сказати на цю тему:", 20);
truncate("Всім привіт!", 20);
