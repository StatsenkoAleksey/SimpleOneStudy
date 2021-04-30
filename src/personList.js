import {PersonFactory} from './personFactory'

export class PersonList {

   constructor(props = {}) {
      this.list = props.list || [];
   }

   addPerson(props = {}) {      
      const person = ('getInfo' in props) ? props : new PersonFactory(props);
      this.list.push(person);
      return this;
   }

   countOfPerson() {
      return this.list.length;
   }

   filter(callback) {
      return this.list.filter(callback);
   }

   removePerson(callback) {
      let elemIndex;
      while ((elemIndex = this.list.findIndex(callback)) !== -1) {
         this.list.splice(elemIndex, 1);
      }
      return this;     
   }

}