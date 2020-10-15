class Employee {
    constructor ( id, name, role, departemnt, projects ) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.departemnt = departemnt;
        this.projects = projects;
    }
};

class Project {
    constructor ( id, name, client ) {
        this.id = id;
        this.name = name;
        this.client = client;
    }
};

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' ); 
 
console.log ( dbsPayroll );
console.log ( intranetDeployment );

const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );

const jane = new Employee( 2, 'Jane', 'Project Manager','IT', [ dbsPayroll, intranetDeployment ] );

const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );

console.log ( john );
console.log ( jane );
console.log ( mark );