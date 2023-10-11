/*const teachers = [
    {
        name: "Whalen",
        classes: ["AP Comp Sci", "Freshman Comp Sci", "Advanced Comp Sci"],
        hair: false,
        room: "C56",
        college: "Saint. Johns",

    },

    {
        name: "colangelo",
        classes: ["Physics", "Physics in Medicine", "Physics Lab"],
        hair: true,
        room: 144,
        college: "idk harvard?",
    },

    {
        name: "carr",
        classes: ["Sophmore APWH", "Freshman APWH"],
        hair: true,
        room: 325,
        college: "idk yale?",
    },
    {
        name: "callahan",
        classes: ["Sophmore Russian", "Junior Russian"],
        hair: true,
        room: 317,
        college: "some irish college",
    },
]
teachers.forEach((teacher)=> console.log(teacher.hair));
*/
const teachers = [{name: 'Whalen', classes: ['AP Comp Sci', 'Freshman Comp Sci', 'Advanced Comp Sci'], hair: false, room: 'C56', college: 'Saint.Johns',},
                  {name: 'Colangelo', classes: ["Physics", "Physics in Medicine", "Physics Lab"], hair: true, room: '144', college: 'idk harvard',},
                  {name: 'Carr', classes: ["Sophmore APWH", "Freshman APWH"], hair: true, room: '325', college: 'idk yale',},
                  {name: "callahan", classes: ["Sophmore Russian", "Junior Russian"], hair: true, room: '317', college: 'idk some irish school',},
];

const result = classes.filter((classes) => classes.hair !==true)
console.log(result);

teachers.forEach((teacher)=> console.log(teacher.name));
teachers.forEach((teacher)=> teacher.classes.forEach((classes) => console.log(classes)))
 teachers.forEach((teacher)=> console.log(teacher.hair));
 teachers.forEach((teacher)=> console.log(teacher.room));
 teachers.forEach((teacher)=> console.log(teacher.college));