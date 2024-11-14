function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Пожалуйста, введите оба числа.";
        return;
    }

    switch (operation) {
        case "plus":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
            break;
    }
    document.getElementById("result").textContent = "Результат: " + result;
}
