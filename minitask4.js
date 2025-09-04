let suhu = 1;
// keyword function
function cF(suhu) {
  return suhu * 1.18;
}
// Anonymous function
const cR = function (suhu) {
  return (4 / 5) * suhu;
};
// arrow function
const cK = (suhu) => {
  return suhu + 273.15;
};

function output(suhu) {
console.log(`dalam 1 suhu celcius adalah : ${cF(suhu)} farenheit`);
console.log (`dalam 1 suhu celcius adalah : ${cR(suhu)} reamur`);
console.log (`dalam 1 suhu celcius adalah : ${cK(suhu)} kelvin`);
}

output(25)