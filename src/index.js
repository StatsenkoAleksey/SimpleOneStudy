import {Person, Student, Employee, Manager, PersonFactory} from './personFactory';
import {PersonList} from './personList';

console.log('-------Person1-------')
const person1 = new Person({firstName: 'Person1'});
console.log(person1.getInfo());

console.log('\n-------Person2-------')
const person2 = new Student({firstName: 'Person2'});
console.log(person2.getInfo());

console.log('\n-------Person3-------')
const person3 = new Employee({firstName: 'Person3'});
 console.log(person3.getInfo());

console.log('\n-------Person4-------')
const person4 = new Manager({firstName: 'Person4'});
console.log(person4.getInfo());

console.log('\n-------Person5-------')
const person5 = new PersonFactory({type: 'person', firstName: 'Person5'});
console.log(person5.getInfo());

console.log('\n-------Person6-------')
const person6 = new PersonFactory({type: 'student', firstName: 'Person6'});
console.log(person6.getInfo());

console.log('\n-------Person7-------')
const person7 = new PersonFactory({type: 'employee', firstName: 'Person7'});
console.log(person7.getInfo());

console.log('\n-------Person8-------')
const person8 = new PersonFactory({type: 'manager', firstName: 'Person8'});
console.log(person8.getInfo());

console.log('\n-------PersonList-------')
const personList = new PersonList();
personList.addPerson(person1);
personList.addPerson(person2);
personList.addPerson(person3);
personList.addPerson(person4);
personList.addPerson(person5);
personList.addPerson(person6);
personList.addPerson(person7);
personList.addPerson(person8);
console.log(personList.countOfPerson());
personList.addPerson();

console.log(personList.list);


console.log(`Total count: ${person1.totalCount()}`);
console.log(`Total count: ${person8.totalCount()}`);

console.log('\n-------Person1-------')
person1.changeFirstName('Aleksey');
person1.changeLastName('Statsenko');
console.log(person1.getInfo());

console.log('\n-------Person2-------')
person2.course = 4;
person2.birthday = new Date(1993, 11, 31);
console.log(person2.getInfo());

console.log('\n-------Person3-------')
person3.salary = 15000;
person3.addPayout();
console.log(person3.getInfo());


console.log('\n-------Person4-------')
person4.addSubordinate(person2);
console.log(person4.addSubordinate(person1));
console.log(person4.getInfo());
console.log('Befor remove:')
console.log(person4.subordinatedList);
person4.removeSubordinate(person => person.type === 'person');
console.log('After remove:')
console.log(person4.subordinatedList);