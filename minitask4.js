
let suhu = 34;
// keyword function
function cF(suhu) {
  return suhu * 1.18 + " fahrenheit";
}
// Anonymous function
const cR = function (suhu) {
  return (4 / 5) * suhu + " reamur";
};
// arrow function
const cK = (suhu) => {
  return suhu + 273.15 + " kelvin";
};

console.log(cF(suhu));
console.log(cR(suhu));
console.log(cK(suhu));
