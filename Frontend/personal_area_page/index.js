const surname = document.getElementById("name");
const shame = document.getElementById("sname");
const username = document.getElementById("username");
// const email = document.getElementById("email");

const button = document.getElementById("save")

button.addEventListener("click", async () => {

    let email = window.localStorage.getItem("email")
    
    const axios = window.axios;

    await axios.put(`http://localhost:5083/api/user/updateuserinfo`, 
    {
        FirstName : shame.value,
        LastName : surname.value,
        Email: email,
        UserName: username,
    })
    .then(response => {
        console.log(response.status)
    })
    .catch(response => {
        console.log(response.status)
    })
})