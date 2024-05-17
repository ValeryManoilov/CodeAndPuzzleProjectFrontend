const password = document.getElementById("password");
const confirmPassword = document.getElementById("passwordpovtor");
const username = document.getElementById("email");
const button = document.getElementById("zaregistr");


button.addEventListener('click', () => {
    if (password.value !== confirmPassword.value) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Пароли не совпадают';
        errorMessage.style.color = 'red';
        button.insertAdjacentElement('beforebegin', errorMessage);
        return;
    }
    const axios = window.axios;

    axios.post(`http://localhost:5083/api/user/register`, 
    {
        Email: username.value,
        Password: password.value
    })
    .then(response => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem("token", response.data.token)
        window.localStorage.setItem('username', document.getElementById("email").value);
    })
    .catch(response => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Не удалось зарегистрироваться. Попробуйте еще раз.';
        errorMessage.style.color = 'red';
        button.insertAdjacentElement('beforebegin', errorMessage);
        console.log(response.status)
    });

    // fetch(`http://localhost:5083/api/user/register`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         Email: username.value,
    //         Password: password.value
    //     }),
    //     headers: {
    //         'Access-Control-Allow-Origin': "*",
    //         "Content-Type": "application/json",
    //       },
    // })
    // .then(response => {
    //     localStorage.setItem('isLoggedIn', 'true');
    //     window.localStorage.setItem('username', document.getElementById("email").value);
    // })
    // .catch(response => {
    //     const errorMessage = document.createElement('p');
    //     errorMessage.textContent = 'Не удалось зарегистрироваться. Попробуйте еще раз.';
    //     errorMessage.style.color = 'red';
    //     button.insertAdjacentElement('beforebegin', errorMessage);
    //     console.log(response.status)
    // });
});