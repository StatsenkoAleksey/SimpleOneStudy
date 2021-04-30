import {Person} from './person';

export class Student extends Person {

   constructor(props = {}) {
      super(props);
      this.type = props.type || 'student';
      this._birthday = props.birthday || new Date();
      this._course = props.course || 1;
   }

   get course() {
      return this._course;
   }

   set course(course) {
      this._course = course;
   }

   get birthday() {
      return this._birthday;
   }

   set birthday(birthday) {
      this._birthday = birthday;
   }
}