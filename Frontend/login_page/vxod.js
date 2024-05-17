const password = document.getElementById("password");
const username = document.getElementById("email");
const button = document.getElementById("vxod");

button.addEventListener('click', async () => {

    const axios = window.axios;

    await axios.post(`http://localhost:5083/api/user/login`, 
    {
        Email: username.value,
        Password: password.value
    })
    .then(response => {
        localStorage.setItem('isLoggedIn', 'true');
        window.localStorage.setItem('email', document.getElementById("email").value);
        window.localStorage.setItem("token", response.body.token)
        console.log(response.data.token)
        window.location.href = 'cabinet.html';
    })
    .catch(response => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Неверный логин или пароль';
        errorMessage.style.color = 'red';
        button.insertAdjacentElement('beforebegin', errorMessage);
    })
});
