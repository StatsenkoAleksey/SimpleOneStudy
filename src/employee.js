import {Person} from './person';

const monthInRus = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export class Employee extends Person {

   constructor(props = {}) {
      super(props);
      this.type = props.type || 'employee';
      this.salary = props.salary || 0;
      this.salaryList = props.salaryList || [];
   }

   addSalaryToList({salary, date} = {salary: this.salary, date: new Date()}) {
      this.salaryList.push(`${date.getDate()} ${monthInRus[date.getMonth()]} получил(-а) ${salary} рублей`);
      return this;
   }

   changeSalary(salary) { 
      this.salary = salary;
      return this;
   }
   
}