function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pswd = document.getElementById("pswd").value;
    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Имя не может быть пустым.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Email должен содержать '@' и '.'";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (pswd.length < 8) {
        document.getElementById("pswdError").textContent = "Пароль должен содержать минимум 8 символов.";
        valid = false;
    } else {
        document.getElementById("pswdError").textContent = "";
    }

    if (valid) {
        alert("Форма была успешно заполнено! Добро пожаловать! :3");
    }
}
