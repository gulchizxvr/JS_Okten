// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let container = document.createElement('div');
container.classList.add('container')
document.body.append(container)

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {

        for (const user of users) {
            let userCard = document.createElement('div');
            userCard.classList.add('userCard')

            let nameUser = document.createElement('h2');
            nameUser.innerHTML = `ID - ${user.id}: <br>${user.name}`;

            userCard.append(nameUser);

            let buttonUser = document.createElement('button');
            userCard.append(buttonUser);
            buttonUser.innerHTML = `get details about <br>${user.name}`

            buttonUser.onclick = function ()
            {
                location.href = `../user-details/user-details.html?id=${user.id}`;

            }

            container.append(userCard)


        }


    });


// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)