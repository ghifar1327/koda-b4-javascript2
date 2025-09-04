// let suhu = 1;
// // keyword function
// function cF(suhu) {
//   return suhu * 1.18;
// }
// // Anonymous function
// const cR = function (suhu) {
//   return (4 / 5) * suhu;
// };
// // arrow function
// const cK = (suhu) => {
//   return suhu + 273.15;
// };

// function output(suhu) {
// console.log(`dalam 1 suhu celcius adalah : ${cF(suhu)} farenheit`);
// console.log (`dalam 1 suhu celcius adalah : ${cR(suhu)} reamur`);
// console.log (`dalam 1 suhu celcius adalah : ${cK(suhu)} kelvin`);
// }

// output(25)

const hasil = (suhu, cb1, cb2, cb3) => {
  console.log(`dalam ${suhu} suhu celcius adalah : ${cb1(suhu)}`);
  console.log(`dalam ${suhu} suhu celcius adalah : ${cb2(suhu)}`);
  console.log(`dalam ${suhu} suhu celcius adalah : ${cb3(suhu)}`);
};

function farenheit(suhu) {
  return suhu * 1.18 + " farenheit";
}
function reamur(suhu) {
  return (4 / 5) * suhu + " reamur";
}
function kelvin(suhu) {
  return suhu + 273.15 + " kelvin";
}

hasil(25, farenheit, reamur, kelvin);
