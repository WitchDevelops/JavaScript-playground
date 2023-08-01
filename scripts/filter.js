// given code
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}

//convert object to an array
let studentsArray = Object.values(students);
console.log(studentsArray);

let allStudentsNames = [];
for (student in studentsArray) {
  allStudentsNames.push(studentsArray[student].name);
}

//display the list of all students
document.getElementById("allStudentsList").innerHTML = allStudentsNames.map (student => `<li>${student}<li>`);

//find the people who's GPA matches the benchmark
const honorRoll = studentsArray.filter(student => {
 return student.gpa >= GPA_BENCHMARK;
});

//create a new array with them
let bestStudents = [];
for (student in honorRoll) {
bestStudents.push(honorRoll[student].name);
};

//print to console to check
console.log(bestStudents);

//display the list of best students
document.getElementById("bestStudentsList").innerHTML = bestStudents.map (student => `<li>${student}<li>`).map(txt => `<li>${txt}</li>`);