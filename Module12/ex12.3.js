const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],

    /*1. A method called “findPerson” takes two arguments, a type
(either a student or teacher), and an id. It will return a
particular object of that person.*/
    findPerson: function (type, id) {
        if (type === "teacher") {
            return this.teachers.find((teacher) => teacher.id === id);
        } else if (type === "student") {
            return this.students.find((student) => student.id === id);
        } else {
            return "Sorry, This id isn't exist";
        }
    },

    /*2. A method called “assignStudent” that takes two
arguments, a student’s id and a subject. Assign all of the
students to the first available teacher who teaches that
subject and who is not in full capacity. If all of the teachers
are in the full capacity log to the console “Sorry, no
available teachers left”.*/

assignStudent: function (studentId, subject){

// Find an available teacher who can teach the subject and has capacity left
const availableTeacher = this.teachers.find(
(teacher) => teacher.subjects.includes(subject) && teacher.capacityLeft > 0);

if (!availableTeacher) {
    console.log("Sorry, no available teachers left.");
    return;
}

const student = this.students.find((student) => student.id === studentId);

if (!student) {
    console.log("Student not found.");
    return;
}
availableTeacher.students.push(student);
availableTeacher.capacityLeft--;
console.log(`${student.name} has been assigned to ${availableTeacher.name}`);

},

/*3. A method called “assignTeachersSubject” that takes two
arguments, the teacher’s id, and a new subject. Assign the
new subject to that particular teacher if that subject
doesn’t exist in their array of subjects.*/

assignTeachersSubject : function (teacherId, newSubject){
const teacher = this.teachers.find((teacher) => teacher.id === teacherId);
if (teacher) {
    if (!teacher.subjects.includes(newSubject)) {
        teacher.subjects.push(newSubject);
        console.log(`${teacher.name} now teaches ${newSubject}`);
    }else{
        console.log(`${teacher.name} already teaches ${newSubject}`);
    }
    }else {
        console.log("Teacher not found.");
    }
},

//4. Create a new method
 addTeacher : function (id, name, subjects, capacityLeft) {
    const newTeacher = {
        id: id,
        name: name,
        subjects: subjects || [], // Default to an empty array if subjects not provided
        capacityLeft: capacityLeft || 0, // Default to 0 capacity if not provided
    };
    this.teachers.push(newTeacher);
    console.log(`${name} has been added as a new teacher`);
},
}


// Test the methods
console.log(school.findPerson("teacher", 1));
school.assignStudent(10, "chemistry");
school.assignTeachersSubject(2, "math");

// Example usage of the new method:
school.addTeacher(3, "Yishai", ["HTML", "CSS", "JavaScript"], 2);




