// https://jsonplaceholder.typicode.com/users

$.get("https://jsonplaceholder.typicode.com/users", (response) => {
    const [userList] = $("#userList")

    response.forEach(user => {
        const newLi = document.createElement("li")
        newLi.innerText = user.name
        userList.appendChild(newLi);
    });
})