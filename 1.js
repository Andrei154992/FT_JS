function Task1(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const elements = [...set1].filter(element => set2.has(element));

    return elements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(Task1(array1, array2)); 

function Task2(arr) {
    const map = new Map();
    
    for (const element of arr) {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    return map;
}

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(Task2(array)); 

class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function Task3(students) {
    const groupCounts = new Map();

    for (const student of students) {
        if (groupCounts.has(student.group)) {
            groupCounts.set(student.group, groupCounts.get(student.group) + 1);
        } else {
            groupCounts.set(student.group, 1);
        }
    }
    
    let maxCount = 0;
    for (const count of groupCounts.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}

const students = [
    new Student("Андрей", "6203"),
    new Student("Артём", "5134"),
    new Student("Павел", "5134"),
    new Student("Никита", "6203"),
    new Student("Виктор", "6203"),
    new Student("Руслан", "3456")
];

console.log(Task3(students));