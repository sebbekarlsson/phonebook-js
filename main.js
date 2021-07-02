class PhoneBookPage {
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }
};

class PhoneBook {
  constructor() {
    this.pages = []
  }

  addPage(page) {
    this.pages.push(page);
  }
}

class Person {
  constructor(firstname, lastname, phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
  }

  getFirstname() {
    return this.firstname;
  }
};
