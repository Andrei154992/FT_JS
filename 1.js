class Figure
{
    #x;
    #y;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
    set x(value) {
        this.#x = value;
    }

    set y(value) {
        this.#y = value;
    }

    square(){
        return undefuned
    }
     
}

class Circle extends Figure 
{
    #r;

    constructor(x, y, r){
        super(x, y);
        this.#r = r;
    }

    square(){
        return Math.PI * this.#r ** 2
    }
}

class Rectangle extends Figure
{
    #h;
    #w;
    constructor(x, y, h, w){
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    square(){
        return this.#h * this.#w
    }
}

b = true;
while(b){
    alert("МЕНЮ\n1 - Площадь круга\n2 - Площадь прямоугольника\n0 - Завершение работы")
    input = prompt("Введите команду: ")
    c = parseInt(input)
    switch(c){
        case 1:
            input = prompt("Введите x: ")
            x = parseInt(input)
            input = prompt("Введите y: ")
            y = parseInt(input)
            input = prompt("Введите радиус круга: ")
            r = parseInt(input)
            const circle = new Circle(x, y, r);
            alert(`Площадь круга равна: ${circle.square()}\nКоординаты центра круга: (${circle.x}; ${circle.y})`)
            break;
        case 2:
            input = prompt("Введите x: ")
            x = parseInt(input)
            input = prompt("Введите y: ")
            y = parseInt(input)
            input = prompt("Введите длину прямоугольника: ")
            h = parseInt(input)
            input = prompt("Введите ширину прямоугольника: ")
            w = parseInt(input)
            const rectangle = new Rectangle(x, y, h, w);
            alert(`Площадь прямоугольника равна: ${rectangle.square()}\nКоординаты центра прямоугольника: (${rectangle.x}; ${rectangle.y})`)
            break;
        case 0:
            alert("Завершение работы")
            b = false
            break;
    }
}