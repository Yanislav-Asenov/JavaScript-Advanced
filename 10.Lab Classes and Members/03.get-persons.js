let result = (function solve () {
    class Person {
        constructor (firstName = undefined, lastName = undefined, age = undefined, email = undefined) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString () {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    function getPersons () {
        return [
            new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
            new Person('SoftUni'),
            new Person('Stephan', 'Nikolov', 25),
            new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
        ];
    }

    return getPersons;
})();
