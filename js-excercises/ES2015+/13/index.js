import Employee from './employee.js';
import Project from './project.js';

const projects = [];
projects.push ( new Project ( 'Unicommerce' ) );
projects.push ( new Project ( 'Nineleaps' ) );

const employees = []
employees.push ( new Employee ( 'Sailok', 21, 'Backend Developer', 'IT' ) );
employees.push ( new Employee ( 'Ramesh', 51, 'Bank Manager', 'Finance' ) );

console.log ( projects, employees );

export { 
    projects,
    employees
}


