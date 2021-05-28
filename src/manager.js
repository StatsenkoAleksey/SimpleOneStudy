import {Employee} from './employee';

export class Manager extends Employee {

   constructor(props = {}) {
      super(props);
      this.type = props.type || 'manager';
      this._subordinatedList = props.subordinatedList || [];
   }

   addSubordinate(subordinate) {
      this._subordinatedList.push(subordinate);
      return this;
   }

   removeSubordinate(callback) {
      let elemIndex;
      while ((elemIndex = this._subordinatedList.findIndex(callback)) !== -1) {
         this._subordinatedList.splice(elemIndex, 1);
      }
      return this;     
   }

   get subordinatedList() {
      return this._subordinatedList;
   }

   set subordinatedList(list) {
      if (this._subordinatedList.length) {
         throw new Error('You can\'t set subordinate list for this manager');
      }
      this._subordinatedList = list;
   }

}