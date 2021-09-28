function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
}

Student.prototype.name = function() {
    return `${this.firstName} ${this.lastName}`;
}

Student.prototype.enroll = function(course) {
    if (!this.courses.includes(course)) {
        this.courses.push(course);
        course.students.push(this);
    }
}

Student.prototype.courseLoad = function() {
    let courseLoad = new Map();
    this.courses.forEach(el =>  {
        courseLoad.set(el.department, (courseLoad.get(el.department) || 0) + el.credits);
    })
    return courseLoad;
}

function Course(name, department, credits, timeBlock, daysOfWeek) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.students = [];
    this.timeBlock = timeBlock;
    this.daysOfWeek = daysOfWeek;
}

Course.prototype.addStudent = function(student) {
    student.enroll(this);
}

Course.prototype.conflictsWith = function(course) {
    if (this.timeBlock !== course.timeBlock){
        return false
    }
    this.daysOfWeek.forEach (el => {
        if (course.daysOfWeek.includes(el)){
            return true
        }
    })
    return false
}


