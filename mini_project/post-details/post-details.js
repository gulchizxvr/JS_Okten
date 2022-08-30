let url= new URL(location.href)
let id = url.searchParams.get('id');

const container = document.createElement('div')
document.body.append(container)
container.classList.add('container')

const boxInfo = document.createElement('div')
container.append(boxInfo)
boxInfo.classList.add('boxInfo')


fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(infoId => {

        for (const infoIdKey in infoId) {
            const infoUser = document.createElement("p");
            infoUser.innerText = `${infoIdKey} — ${infoId[infoIdKey]}`
            boxInfo.append(infoUser)
        }
    });

fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {

        comments.forEach(comment => {
            const post_info = document.createElement("div");
            container.append(post_info)
            post_info.classList.add('postInfo')

            const infoKey = document.createElement("h3");
            post_info.append(infoKey)
            infoKey.innerText = 'Comment'


        const keys = Object.keys(comment)
        keys.forEach(key => {
            if (!(key === 'postId')){
            const info_line = document.createElement('p')
            info_line.innerHTML = `${key} — ${comment[key]}`
            post_info.append(info_line)
            }
        })
    })

})

//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//