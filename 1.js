class Student {
    constructor(name, averageGrade) {
        this.name = name;
        this.averageGrade = averageGrade;
    }
}

function ShellSort(students) {
    const n = students.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) 
    {        
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j;
            for (j = i; j >= gap && students[j - gap].averageGrade > temp.averageGrade; j -= gap) {
                students[j] = students[j - gap];
            }
            students[j] = temp;
        }
    }
}

const students = [
    new Student("Андрей", 4.7),
    new Student("Артём", 4.2),
    new Student("Павел", 4.3),
    new Student("Никита", 5),
    new Student("Виктор", 4.9),
    new Student("Руслан", 5)
];

ShellSort(students);
console.log(students);