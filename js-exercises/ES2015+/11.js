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