// tasks hai hamara
// List karna ka
// filter karna ka


let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
    {
        profileUrl: "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg",
        name: "Pankaj Tripathi",
        email: "pankajmirja@tripathi.com",
    },
    {
        profileUrl: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-alipazani-2836486.jpg&fm=jpg",
        name: "Munna Bhaiya",
        email: "munnababu@gmail.com",
    },
    {
        profileUrl: "https://hips.hearstapps.com/hmg-prod/images/the-top-model-gisele-bundchen-in-her-last-fashion-show-during-the-colcci-fashion-show-at-sao-paulo-fashion-week-summer-2016-rtw-spfw-on-april-15-2015-in-sao-paulo-brazil-65b3a701e2cd2.jpg?resize=980:*",
        name: "Guddu Bhaiya",
        email: "guddupandit@gmail.com",
    },
]

function renderUsers(arr) {
    userContainer.innerHTML = ""   // hum kuch bhi search karta hai to vo uski duplicate karke append kar deta hai isliye ya line upar likhi hai
    arr.map((obj) => {

        let { profileUrl, name, email } = obj

        let divElem = document.createElement("div");
        divElem.className = "userItem"
        divElem.innerHTML = `
    <div class="image">
                    <img src=${profileUrl} alt="error loading image"></div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            </div>
    `
        userContainer.append(divElem);
    })
}

renderUsers(users);

function handleSearch(e) {
    // console.log(searchInput.value)
    // console.log(e.target.value)
    let searchValue = e.target.value
    let filteredUsers = users.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filteredUsers)
}

searchInput.addEventListener("input", handleSearch)