import {Employee} from './employee';

export class Manager extends Employee {

   constructor(props = {}) {
      super(props);
      this.type = props.type || 'manager';
      this.subordinatedList = props.subordinatedList || [];
   }

   addSubordinate(subordinate) {
      this.subordinatedList.push(subordinate);
      return this;
   }

   removeSubordinate(callback) {
      let elemIndex;
      while ((elemIndex = this.subordinatedList.findIndex(callback)) !== -1) {
         this.subordinatedList.splice(elemIndex, 1);
      }
      return this;     
   }

}