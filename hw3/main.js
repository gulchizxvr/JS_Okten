// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//  що дорівнює 1, 0, -3

let x = -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let y = 0
if (y !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let n = 1
if (n !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let t = 52
if (t >= 0 && t < 15) {
    console.log('1 чверть години');
} else if (t >= 15 && t < 30) {
    console.log('2 чверть години');
} else if (t >= 30 && t < 45) {
    console.log('3 чверть години');
} else if (t >= 45 && t <= 59) {
    console.log('4 чветь години');
} else {
    console.log('Введіть число від 0 до 59')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).


let day = 9;
if (day >= 1 && day <= 31) {
    if (day >= 1 && day <= 10) {
        console.log('Перша декада місяця');
    } else if (day > 10 && day <= 20) {
        console.log('Друга декада місяця');
    } else {
        console.log('Третя декада місяця');
    }
} else {
    console.log(Error);
}

//or

let day1 = 9;
if (day1 >= 1 && day1 <= 10) {
    console.log('Перша декада місяця');
} else if (day1 > 10 && day1 <= 20) {
    console.log('Друга декада місяця');
} else {
    console.log('Третя декада місяця');
}


// - Скласти розклад на тиждень за допомогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = +prompt('Введіть порядковий номер дня тижня');
switch (weekday) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Sunday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default :
        console.log('Error');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.

let a = +prompt('A');
let b = +prompt('B');
if (a !== b) {
    let result = a > b ? a : b;
    console.log(result);
} else{
    console.log(`${a}   ${b}`);
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)

let x1 = 2;
x1 = x1 || 'default';
console.log(x1);
