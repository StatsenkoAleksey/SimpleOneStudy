import {PersonFactory} from './personFactory'

export class PersonList {

   constructor(props = {}) {
      this._list = props.list || [];
   }

   get list() {
      return this._list;
   }

   set list(list) {
      if (this._list.length) {
         throw new Error('You can\'t set list of person');
      }
      this._list = list;
   }

   addPerson(props = {}) {      
      const person = ('getInfo' in props) ? props : new PersonFactory(props);
      this._list.push(person);
      return this;
   }

   countOfPerson() {
      return this._list.length;
   }

   filter(callback) {
      return this._list.filter(callback);
   }

   removePerson(callback) {
      let elemIndex;
      while ((elemIndex = this._list.findIndex(callback)) !== -1) {
         this._list.splice(elemIndex, 1);
      }
      return this;     
   }

}