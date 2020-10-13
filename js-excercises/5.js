// 5th question
const arr = [ 1,2,3,4 ];

console.log( arr.length );
arr[0]++;
arr[arr.length - 1] = arr[arr.length - 1] + arr[arr.length - 2];
arr.push(5);
console.log( arr );

const copy_arr = [];

for( let i = 0; i < arr.length; i++) {
    copy_arr.push( arr[i] );
}

console.log( copy_arr );