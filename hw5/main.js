// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
debugger
function areaOfSquare(a, b) {
     x = a * b;
    return x;
}
let res = areaOfSquare(3, 4)
console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaOfCircle = (r) =>  Math.PI * Math.pow( r, 2);
console.log(areaOfCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaofCylinder = (h, r) => 2 * Math.PI * r  * (r + h);
console.log(areaofCylinder(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function print(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

print([1, 4, 5, 6, 1])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let print_p = (text) => document.write(`<p>${text}</p>`);

print_p('document')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function print_li3(li_text) {
    document.write(`<ul>
        <li>${li_text}</li>
        <li>${li_text}</li>
        <li>${li_text}</li>
        </ul>`)
}

// or

print_li3('items');

function print_ul(li_text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li_text}</li>`)

    }
    document.write(`</ul>`)
}

print_ul('item');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function print_ul1(li_text, li_lenght) {
    document.write(`<ul>`)
    for (let i = 0; i < li_lenght; i++) {
        document.write(`<li>${li_text}</li>`)
    }
    document.write(`</ul>`)
}

print_ul1('item_1', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let listOfArray = function (array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        {
            document.write(`<li>${arrayElement}</li>`)
        }


    }
    document.write(`</ul>`)
};

listOfArray([1, 'string', true])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let div_element = function (array) {
    for (const arrayElement of array) {
        document.write(`<div class="card">`)
        for (const arrayElementKey in arrayElement) {
            document.write(`${arrayElementKey} - ${arrayElement[arrayElementKey]}; `)
        }
        document.write('<br>')
        document.write(`</div>`)

    }
};

let t = [
    {
        name: 'vasya',
        age: 34,
        status: true
    },
    {
        name: 'kolya',
        age: 45,
        status: false
    }
];

div_element(t)

// - створити функцію яка повертає найменьше число з масиву

let minimum_number = function (array) {
    let first_min = array[0];
    for (const arrayElement of array) {
        if (arrayElement < first_min) {
            first_min = arrayElement;
        }
    }
    console.log(first_min)
};

minimum_number([1, -4, 5, 9, 10, -100]);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum_number = function (array) {
    let total = 0;
    for (const arrayElement of array) {
        total += arrayElement
    }
    return total;
};
console.log(sum_number([4, 7, 3, -10, -100, 100]));
