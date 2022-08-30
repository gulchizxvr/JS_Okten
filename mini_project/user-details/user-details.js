let url = new URL(location.href);
let id = url.searchParams.get('id');

let container = document.createElement('div');
document.body.append(container);
container.classList.add('container-info');

fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(user => {

        let userCard = document.createElement('div');
        container.append(userCard);
        userCard.classList.add("userCard")

        console.log(user);

        function foo(user) {
            for (const userKey in user) {


                if (typeof user[userKey] === 'object') {
                    const object = user[userKey]

                    const h3 = document.createElement('h3')
                    userCard.append(h3)
                    h3.innerHTML = `${userKey}`

                    foo(object)

                } else {
                    const p = document.createElement('p')
                    userCard.append(p)
                    p.innerHTML = `${userKey} — ${user[userKey]}`
                }
            }
        }

        foo(user)

        const info_post = document.createElement("div");
        info_post.classList.add('info_post');

        const buttonPosts = document.createElement('button');
        container.append(info_post)
        userCard.append(buttonPosts)

        buttonPosts.innerText = 'posts of current user';
        buttonPosts.classList.add(`buttonPosts`)
        buttonPosts.onclick = function () {
            fetch(`http://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(resp => resp.json())
                .then(posts => {
                    posts.forEach(value => {

                        const boxPost = document.createElement('div')
                        boxPost.classList.add('boxPost')
                        info_post.append(boxPost)

                        const textTitle = document.createElement('p');
                        textTitle.innerText = value.title;
                        boxPost.append(textTitle)


                        const buttonInfoPost = document.createElement('button');
                        boxPost.append(buttonInfoPost)
                        buttonInfoPost.innerText = 'info about this post'


                        buttonInfoPost.onclick = function () {
                            location.href = `../post-details/post-details.html?id=${value.id}`
                        }


                    })
                })
        }
    })


// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//  6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.