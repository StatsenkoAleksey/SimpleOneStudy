export class Person {
  constructor(props = {}) {
    this.type = props.type || 'person';
    this._firstName = props.firstName || 'Unknown';
    this._lastName = props.lastName || 'Unknown';
    if (!Person.count) {
      Person.count = 0;
    }
    Person.count++;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  getInfo() {
    let result = '';
    for (const [key, value] of Object.entries(this)) {
      result += `${key}: ${value}\n`;
    }
    return result.slice(0, -1);
  }

  totalCount() {
    return Person.count;
  }

  changeFirstName(firstName) {
    this._firstName = firstName;
    return this;
  }

  changeLastName(lastName) {
    this._lastName = lastName;
    return this;
  }
}
