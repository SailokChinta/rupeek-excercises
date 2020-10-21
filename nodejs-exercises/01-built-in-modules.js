// list all the files in the folder, using child_process node module
const childProcess = require( 'child_process' );
childProcess.exec('ls', ( error, stdout, stderr)=> {
    if( error ) {
        console.log( `error occurred with message: ${error.message}` );
        return;
    }

    console.log( `stdout: ${stdout}` );
    console.error( `stderr: ${stderr}` );
});