import {Person} from './person';

const monthInRus = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export class Employee extends Person {

   constructor(props = {}) {
      super(props);
      this.type = props.type || 'employee';
      this._salary = props.salary || 0;
      this._salaryList = props.salaryList || [];
   }

   addPayout({salary, date} = {salary: this._salary, date: new Date()}) {
      this._salaryList.push(`${date.getDate()} ${monthInRus[date.getMonth()]} получил(-а) ${salary} рублей`);
      return this;
   }

   get salary() {
      return this._salary;
   }

   set salary(salary) {
      this._salary = salary;
   }
   
   
   get salaryList() {
      return this._salaryList;
   }

   set salaryList(salaryList) {
      if (this._salaryList.length) {
         throw new Error('You can\'t set salary list');
      }
      this._salaryList = salaryList;
   }

}