import {Person} from './person';
import {Student} from './student';
import {Employee} from './employee';
import {Manager} from './manager';

export {Person, Student, Employee, Manager};

export class PersonFactory {

   constructor(props = {}, personList) {
      const typeOfPersonList = {
         'person': Person,
         'student': Student,
         'employee': Employee,
         'manager': Manager
      };

      if (Object.keys(typeOfPersonList).includes(props.type)) {
         return new typeOfPersonList[props.type](props);
      }
      return new Person(props);
   }
   
}
