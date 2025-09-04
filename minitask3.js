// no 1
let tinggiPersegi = 5;

for (let i = 1; i <= tinggiPersegi; i++) {
  let baris = "";
  for (let j = 1; j <= tinggiPersegi; j++) {
    if (i === 1 || i === tinggiPersegi) {
      baris += "*1";
    } else {
      if (j === 1 || j === tinggiPersegi) {
        baris += "*2";
      } else {
        baris += "  ";
      }
    }
  }
  console.log(baris);
}
// no 2
let n = 5;
for (i = 1; i <= n; i++) {
  let output = "";
  for (j = i; j <= n; j++) {
    output += " ";
  }
  for (k = 1; k <= i; k++) {
    output += "* ";
  }
  console.log(output);
}
// no 3
let t = 5;
for (x = 0; x < t; x++) {
  let btg2 = "";
  for (y = 0; y < 11; y++) {
    if (x == 0 || x == 2 || x === 4) {
      if (y % 2 === 0) {
        btg2 += "*";
      } else {
        btg2 += " ";
      }
    } else {
      if (x == 1 && y == 8) {
        btg2 += "*";
      } else if (y != 10) {
        btg2 += " ";
      } else {
        btg2 += "*";
      }
    }
  }
  console.log(btg2);
}
