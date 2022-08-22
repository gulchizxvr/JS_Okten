// - є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// - є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

let container = document.createElement('div');

document.body.appendChild(container)
container.classList.add('box');

let box_div = document.getElementsByTagName("div")[0];

for (const simpson of simpsons) {
    let card = document.createElement("div");
    card.classList.add('card_person');

    let short_info = document.createElement("h2")
    short_info.innerText = simpson.name + ' ' + simpson.surname + ' ' + simpson.age;

    let image_person = document.createElement('img');
    image_person.src = simpson.photo

    let description = document.createElement('p');
    description.innerText = simpson.info

    card.append(short_info, image_person, description)

    box_div.append(card);
}


//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let container_card = document.createElement('div');
container_card.classList.add('container_card');

for (const cardElement of coursesArray) {
    let card_info = document.createElement("div");
    card_info.classList.add('card')

    for (const cardElementKey in cardElement) {
        let info = document.createElement("div");
        info.classList.add(cardElementKey)

        if (Array.isArray(cardElement[cardElementKey])) {
            let list = document.createElement('ul');

            for (const arrayElement of cardElement[cardElementKey]) {
                let li = document.createElement('li');
                li.innerText = arrayElement;
                list.append(li);
            }
            info.append(list)

        } else {
            info.innerText = cardElement[cardElementKey];
        }
            card_info.append(info);
    }
    container_card.append(card_info);
}
document.body.append(container_card);


// рекурсія, щоб добавити класс border(що створює борбер) кожному елементу
function foo(elements) {
    let childrenArray = elements.children
    if (childrenArray.length !== 0){
        for (const child_element of childrenArray) {
            child_element.classList.add('border')
            foo(child_element)
        }
    }
}

foo(document.getElementsByClassName('container_card')[0]);




// ------------------

//     - створити блок
let block = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.background = 'black';
block.style.color = 'grey';
block.style.fontSize = '16px'

// - додати цей блок в body.

document.body.append(block)

// - клонувати його повністю, та додати клон в body.

let clone_div = block.cloneNode(true);
document.body.append(clone_div)

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


//!! file template1.html !!



// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const arrayElement of coursesAndDurationArray) {
    let box = document.createElement('div');
    for (const arrayElementKey in arrayElement) {
        let text = `${arrayElement[arrayElementKey]} `
        box.append(text)
    }
    document.body.append(box)
}


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for (const arrayElement of coursesAndDurationArray) {
    let container = document.createElement('div');
    container.classList.add('item');

    let header = document.createElement("h1");
    header.classList.add('heading');

    let paragraph = document.createElement('p');
    paragraph.classList.add('description');

    for (const arrayElementKey in arrayElement) {
        if (arrayElementKey === 'title') {
            header.innerText = arrayElement[arrayElementKey];
        }
        else if (arrayElementKey === 'monthDuration') {
            paragraph.innerText = arrayElementKey + ' - ' + arrayElement[arrayElementKey]
        }
    }
    container.append(header,paragraph)
    document.body.append(container)
}

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement('div');
div.classList.add('text');
document.body.append(div);
div.onclick = function () {
    let id_text = document.getElementsByClassName('text')

    // створив змінну і проітерував , щоб ВСІ елементи, що в будуть мати такий id зникали, а не тільки обраний

    for (const idTextElement of id_text) {
        idTextElement.hidden = true
    }
}


////     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let button = document.getElementsByTagName("button")[0];
let form1 = document.forms.form1;

form1.onsubmit = function (e) {
    e.preventDefault();
    let value = this.user_age.value;
    if (value < 18){
        alert('error');
    }
    else{
        console.log(value);
    };
}


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let button2 = document.getElementsByTagName("button")[1];

let form2 = document.forms.form2;

form2.onsubmit = function (e) {
    e.preventDefault();
    let row = this.row.value
    let column = this.column.value
    let text = this.text.value
    console.log(row, column);

    function table(row, column) {
        let table = document.createElement("table")
        let div = document.getElementsByClassName('additional_task')[0];
        for (let i = 0; i < row; i++) {

            let tr = document.createElement("tr");

            for (let j = 0; j < column; j++) {
                let th = document.createElement('th')
                th.innerText = text
                tr.append(th);
            }
            table.append(tr);
        }

        console.log(table)
        div.append(table)

    }

    table(row, column)
}

