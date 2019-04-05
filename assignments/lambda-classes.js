// CODE here for your Lambda Classes

console.group('lamba-classes');

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
});
const ted = new Person({
  name: 'Ted',
  location: 'Des Moines',
  age: 42,
  gender: 'male',
});

fred.speak();
console.log(ted.age);
console.log(ted.gender);

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

const fred2 = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const ted2 = new Instructor({
  name: 'Ted',
  location: 'Des Moines',
  age: 42,
  gender: 'male',
  favLanguage: 'Malbolge',
  specialty: 'beating head against wall',
  catchPhrase: `Here come Dat Boi`
});

fred2.grade({name: 'jimbob'}, 'Fortran');
console.log(fred2.favLanguage);
console.log(ted2.specialty);
console.log(ted2.catchPhrase);

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(e => {
      console.log(e);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const fred3 = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  previousBackground: 'retail',
  className: 'WEBPT5',
  favSubjects: ['front-end', 'React']
});
const ted3 = new Student({
  name: 'Ted',
  location: 'Des Moines',
  age: 42,
  gender: 'male',
  previousBackground: 'memelord',
  className: 'IOS34562',
  favSubjects: ['assembly language', 'hexadecimal poetry']
});

fred3.listSubjects();
ted3.PRAssignment("How do I computer?");
fred3.sprintChallenge('JS');
console.log(ted3.className);

console.groupEnd();