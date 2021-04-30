import {Person} from './person';

export class Student extends Person {

   constructor(props = {}) {
      super(props);
      this.type = props.type || 'student';
      this.birthday = props.birthday || new Date();
      this.course = props.course || 1;
   }

   changeCourse(course) {
      this.course = course;
      return this;
   }

   changeBirthday(birthday) {
      this.birthday = birthday;
      return this;
   }
}