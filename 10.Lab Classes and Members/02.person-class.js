class Person {
    constructor (firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    toString () {
        return `${this.fullName} (age: ${this.age}, email: ${this.email})`;
    }
}
