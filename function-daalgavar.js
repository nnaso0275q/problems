// Bodlogo #1
// nasand hursen suragchiig filterlej oloh function bich

let data = [
  {
    name: "zulaa",
    age: 18,
    grade: 11,
    gender: "female",
  },

  {
    name: "bilguunee",
    age: 19,
    grade: 11,
    gender: "male",
  },

  {
    name: "haliunaa",
    age: 14,
    grade: 11,
    gender: "female",
  },

  {
    name: "nandia",
    age: 17,
    grade: 11,
    gender: "male",
  },

  {
    name: "deegii",
    age: 16,
    grade: 11,
    gender: "female",
  },
];
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age > 18;
  });
  return filtered;
}

let result = findAdultStudents(data);
console.log("bodlogo1 = ", result);

// Bodlogo #2
// gender ogonguut tuhain gendereer filterlej ogoh function bich
// eg: filterByGender(students,"male") => zovhon erchuudiig yalgaj ogno

function filterByGender(student1) {
  let filtered = students.male((student) => {
    return student.male > student.gender;
  });
  return filtered;
}
let eregtei = filterByGender(data);
console.log("bodlogo2 = ", eregtei);
// Bodlogo #3
// nasaar n sortloh function bich
// Bodlogo #4
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich
// bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]
// bodlogo #6
// removeGenders from student array function bich


// git add .
// git commit -m"nerle"
// git push
// 