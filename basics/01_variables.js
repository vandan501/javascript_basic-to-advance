// const ----> value can not be changed [constant value]
const accountId=1235455;

// Variables declared by let are only available inside the block where they're defined. 
let accountEmail="vandanraval2002@gmail.com";

// Variables declared by var are available throughout the function in which they're declared.
var accountPassword="123554";

// we should avoide this declaration
accountCity="ahmedabad";

let accountState;  //undefiled variable

// accountId=3333;  //not allowed because of constant
accountEmail="vd@gmail.com";
accountPassword=2211;
accountCity="surat";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
NOTE:

Prefere not to use var in declaration of variable
because of issue of block scope  and functional scope.
*/