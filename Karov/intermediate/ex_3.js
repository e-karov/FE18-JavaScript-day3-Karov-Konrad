// Solution with the build in String method String.repeat():

// for (let index = 1; index < 7; index++) {
//     let row = "*".repeat(index);
//     console.log(row);
// }

// Solution with nested loops:

for (let index = 1; index < 7; index++) {
    let row ="";
    for (let k = 1; k <= index; k++) {
        row += "*";
    }
    console.log(row);
}