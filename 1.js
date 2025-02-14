function Perfect_Number(x)
{
    if (x > 1) {
        let sum = 1;
        const sqrt_X = Math.sqrt(x);
        for (let i = 2; i <= sqrt_X; i++) {
            if (x % i === 0) {
                sum += i;
                const num = x / i;
                if (num !== i) {
                    sum += num;
                }
            }
        }
        return sum === x;            
    }
    else
    {
        return false;
    }
}


const input = prompt("Введите целое число:");
const number = parseInt(input);

if (Number.isInteger(number))
{
    if (Perfect_Number(number))
    {
        console.log("Число является совершенным")
    }
    else{
        console.log("Число не является совершенным")
    }
}
else{
    console.log("Введённое значение не является целым числом")
}


