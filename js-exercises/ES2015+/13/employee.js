export default class Employee {
    constructor ( name, age, role, dept ) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday () {
        this.age++;
    }
}