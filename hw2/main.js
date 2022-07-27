// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array1 = [ 1, 'one', 2 , true, 3, 'thirty', 7 , false, 9, 'ten'
]
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
console.log(array1[8]);
console.log(array1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Picture of Dorian Gray',
    pageCount: 288,
    genre: 'Philosophical fiction'
}

let book2 = {
    title: 'Harry Potter and the Philosophers Stone',
    pageCount: 	223,
    genre:'Fantasy'
}
let book3 = {
    title:'The Old Man and the Sea',
    pageCount: 127,
    genre: 'Literary Fiction'
};

// Додатково
console.log(book1.title);
console.log(book2["pageCount"]);
console.log(book3.genre);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book11= {
    title:'The Picture of Dorian Gray',
    pageCount:288,
    genre:'Philosophical fiction',
    authors: [
        {name: 'Anna', age: 35},
        {name: 'John', age: 40},
        {name: 'Lionel', age: 35}
    ]
};
console.log(book11);

let book12 = {
    title: 'The Old Man and the Sea',
    pageCount: 127,
    genre: 'Literary Fiction',
    authors: [
        {name: 'Matt', age: 34},
        {name: 'Scott', age: 20},
        {name: 'Viktor', age: 55}
    ]
};
console.log(book12)
let book13={
    title: 'Harry Potter and the Philosophers Stone',
    pageCount: 223,
    genre:'Fantasy',
    authors: [
        {name: 'Will', age: 40},
        {name: 'Hugo', age: 75},
        ]
};
// Додатково
console.log(book11.title);
console.log(book12["pageCount"]);
console.log(book13.authors[0].name);
console.log(book13["authors"][1]["name"])

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Viktor', username: 'viktor12', password: '123asd'},
    {name: 'Anna', username: '12anna', password: '234anna$'},
    {name: 'Artur', username: '45art45', password: '4353art'},
    {name: 'Brian', username: 'brian_oconner', password: 'skyline34'},
    {name: 'Mykola', username: 'kolya666', password: 'kolya_cool12'},
    {name: 'Andrey', username: 'Sheva55', password: 'Sheva_A'},
    {name: 'Kyrylo', username: 'gulchizavr', password: '12kirya34'},
    {name: 'Inna', username: 'Innessa', password: '76iinnaa67'},
    {name: 'Peter', username: 'spider_man', password: 'web_spider54'},
    {name: 'John', username: 'john_week', password: 'john_12'},
]
console.log(users[0].password);
console.log(users[1]["password"]);
console.log(users[2].password);
console.log(users[3].password, users[4]["password"]);
console.log(users[5]['password'], users[6].password);
console.log(users[7]["password"]);
console.log(users[8].password);
console.log(users[9]["password"]);