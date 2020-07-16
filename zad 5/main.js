const dd = new Date();

let d = dd.getDate() + 1 + 1; //dodać 1 dzień
let mm = dd.getMonth() + 1 + 2; //dodać 2 miesiące
let yy = dd.getFullYear();

console.log("Nowa data: " + yy + "/" + mm + "/" + d);