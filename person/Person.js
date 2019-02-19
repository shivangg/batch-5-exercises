class Person {
  constructor(firstname, lastname, DOB) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.dateOfBirth = DOB;
  }

  addDobDigits() {
    const dateDigitsSum = this.dateOfBirth
      .split('')
      .filter(el => el !== '/')
      .reduce((acc, el) => acc + parseInt(el, 10), 0);

    // console.log(parseInt(day, 10) + parseInt(month, 10) + parseInt(year, 10));
    return dateDigitsSum;
  }
}

export {
  Person,
};
