function Task_1(x, y, z)
{
    if (x > y && z > y) return x*z
    else if (y > x && z > x) return y*z
    else return x*y
}

function Task_2(name, rank = "рядовой") 
{
    alert(`Здравствуйте, ${rank} ${name}!`);
}

function Task_3(func, ...args) 
{
    return func(...args);
}

function Task_4(x){

    if (Number.isInteger(x)){
        if (x % 2 === 0) {
            return (x) => x ** 2;
        } else {
            return (x) => x ** 3;
        }
    }
    else{
        alert("Число должно быть целым")
    }
}

function Task_5(n){

    if (Number.isInteger(n)){
        if (n === 0 || n === 1) 
            return 1;    
        return n * Task_5(n - 1);
    }
    else{
        alert("Число должно быть целым")
    }
}


let b = true;

while(b){
    alert("МЕНЮ\n1 - Задание №1\n2 - Задание №2\n3 - Задание №3\n4 - Задание №4\n5 - Задание №5\n0 - Завершение работы")
    
    const input = prompt("Введите номер пункта меню")
    number = parseInt(input)
    switch(number){
        case 1:
            alert("Задание 1")
            alert("Необходимо ввести целые числа")
            input1 = prompt("Введите первое число")
            num1 = parseInt(input1)
            input2 = prompt("Введите второе число")
            num2 = parseInt(input2)
            input3 = prompt("Введите третье число")
            num3 = parseInt(input3)
            alert("Ответ: " + Task_1(num1, num2, num3))
            break;
        case 2:
            alert("Задание 2")
            input1 = prompt("Введите имя")
            input2 = prompt("Введите звание")
            if (input2 == ""){
                Task_2(input1)
            }
            else{
                Task_2(input1, input2)
            }
            break;
        case 3:
            alert("Задание 3")
            alert("Функция: Task_5\nПараметр: 5")
            alert("Ответ: " + Task_3(Task_5, 5))
            break;
        case 4:
            alert("Задание 4")
            input1 = prompt("Введите число: ")            
            num1 = parseInt(input1)
            alert("Ответ: " + Task_4(num1))
            break;
        case 5:
            alert("Задание 5")
            input1= prompt("Введите число: ")          
            num1 = parseInt(input1)
            alert("Факториал числа: " + Task_5(num1))
            break;
        case 0:
            alert("Завершение работы...")
            b = false;
            break;
    }
}