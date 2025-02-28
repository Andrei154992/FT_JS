const student = {
    second_name: "Белогородцев",
    first_name: "Виктор",
    marks: [
        {
            subject: "Русский язык",
            mark: 3
        },
        {
            subject: "Математика",
            mark: 3
        },
        {
            subject: "Информатика",
            mark: 5
        }        
    ]
}

function Output_inf(obj){
    console.log("Фамилия: " + obj.second_name)
    console.log("Имя: " + obj.first_name)
    console.log("Успеваемость:")
    obj.marks.forEach(mark => {
        console.log("\t" + mark.subject + ": " + mark.mark);
    });
}

class Student{
    constructor(second_name, first_name, marks){
        this.second_name = second_name;
        this.first_name = first_name;
        this.marks = marks;
    } 

    output_all_subject(){
        console.log("Информация по всем предметам: ")
        this.marks.forEach(mark => {
            console.log("\t" + mark.subject + ": " + mark.mark)
        });
    }

    average_mark() {
        let result = 0;
        marks.forEach(mark => {
            result += mark.mark
        });
        result /= marks.length
        console.log(`Средняя оценка: ${result}`)
    } 

    output_all_marks(subject){
        console.log(`Все оценки по предмету ${subject}: `)
        this.marks.forEach(mark => {
            if (subject === mark.subject){
                console.log("\t" + mark.mark)
            }
        });
    }

    add_mark(subject, mark){
        const new_mark = new Mark(subject, mark);
        this.marks.push(new_mark);
    }

    delete_mark(subject){
        this.marks = this.marks.filter(mark => mark.subject !== subject);
        console.log(`Удаление предмета ${subject} прошло успешно`)
    }
}

class Mark{
    constructor(subject, mark){
        this.subject = subject;
        this.mark = mark;
    }
}

const marks = [
    new Mark("Математика", 3),
    new Mark("Физика", 3),
    new Mark("Химия", 5)
];

const student1 = new Student("Иванов", "Иван", marks);

Output_inf(student)
console.log("===================")
student1.add_mark("Математика", 5)
student1.output_all_marks("Математика")
student1.delete_mark("Математика")
student1.output_all_marks("Математика")
student1.output_all_subject();
student1.average_mark();