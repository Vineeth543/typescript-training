console.log("Helllo from script.ts");
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity("Hello"));
