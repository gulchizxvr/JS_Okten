// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let array = []
array.push(new User(8, 'Vlad', 'Gurk', 'gurk@gmail.com', '09875'),
    new User(5, 'Gleb', 'Belg', 'belg@gmail.com', '09242'),
    new User(4, 'Petya', 'Aytep', 'aytep@gmail.com', '09760'),
    new User(3, 'Vasya', 'Aysav', 'aysav@gmail.com', '06976'),
    new User(6, 'Jora', 'Aroj', 'aroj@gmail.com', '06895'),
    new User(9, 'Kolya', 'Aylok', 'aylok@gmail.com', '06598'),
    new User(1, 'Richard', 'Drahcir', 'drahcir@gmail.com', '06546'),
    new User(10, 'Tom', 'Mot', 'mot@gmail.com', '03298'),
    new User(2, 'Tolya', 'Aylot', 'aylot@gmail.com', '08736'),
    new User(7, 'Vika', 'Akiv', 'akiv@gmail.com', '03287'));

console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterParni = array.filter(value => !(value.id % 2));
console.log(filterParni);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortParni = filterParni.sort((a, b) => a.id - b.id);
console.log(sortParni);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
let arrayClient = [];

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order
    }
}

arrayClient.push(new Client(5, 'Gleb', 'Belg', 'belg@gmail.com', '09242', ['milk', 'juicy']),
    new Client(4, 'Petya', 'Aytep', 'aytep@gmail.com', '09760', ['tomato', 'onion', 'meat']),
    new Client(3, 'Vasya', 'Aysav', 'aysav@gmail.com', '06976', ['cabbage', 'carrot']),
    new Client(6, 'Jora', 'Aroj', 'aroj@gmail.com', '06895', ['juice', 'milk', 'water', 'carrot', 'bacon']),
    new Client(9, 'Kolya', 'Aylok', 'aylok@gmail.com', '06598', ['tomato']),
    new Client(1, 'Richard', 'Drahcir', 'drahcir@gmail.com', '06546', ['water', 'flower']),
    new Client(10, 'Tom', 'Mot', 'mot@gmail.com', '03298', ['flower']),
    new Client(2, 'Tolya', 'Aylot', 'aylot@gmail.com', '08736', ['desktop', 'table', 'paper']),
    new Client(7, 'Vika', 'Akiv', 'akiv@gmail.com', '03287', ['tomato']),
    new Client(8, 'Vlad', 'Gurk', 'gurk@gmail.com', '09875', ['onion', 'carrot', 'tomato']));

console.log(arrayClient);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrayClient.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,year,max_speed ,engine_capacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_capacity = engine_capacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${max_speed} на годину`);
    }

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== "function" && typeof this[key] !== "object" ) {
                let x = `${key} - ${this[key]}`
            console.log(x)
            }
            else if (typeof this[key] === "object"){
                console.log(`${key} -  ${JSON.stringify(this[key]).replaceAll( '"', ' ')}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {this.driver = driver};
}

let tesla_model_x = new Car('Model X', 'Tesla', 2020, 245, null);
tesla_model_x.info();
tesla_model_x.increaseMaxSpeed(300);
tesla_model_x.addDriver({name: 'Vadym'})
tesla_model_x.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars extends Car{
    constructor(model,producer,year,max_speed ,engine_capacity) {
        super(model, producer, year, max_speed, engine_capacity);
    }
}
let toyota_mark_II = new Car('Mark 2', 'Toyota', 2000, 280, 2.5 );
console.log(toyota_mark_II);
toyota_mark_II.info()
toyota_mark_II.increaseMaxSpeed(240);
toyota_mark_II.addDriver({name: 'Vadym'})
toyota_mark_II.info();



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arr = [
    new Popelushka('Vika',21,38),
    new Popelushka('Tanya',20,40),
    new Popelushka('Ira',21,37),
    new Popelushka('Katya',19,38),
    new Popelushka('Zosia',22,40),
    new Popelushka('Nastya',23,41),
    new Popelushka('Oksana',21,39),
    new Popelushka('Olya',24,40),
    new Popelushka('Anya',22,42),
    new Popelushka('Masha',21,36)
]

class Prince extends Popelushka {
    constructor(name,age,size) {
        super(name,age,size);
        this.search= function () {
            for (const girl of arr) {
                if (girl.size === this.size){
                    console.log(girl);
                }

            }
        }
    }
}

prince = new Prince('Kolya', 30, 41)
prince.search()

let popelushka = arr.find(value => value.size === prince.size);
console.log(popelushka);



