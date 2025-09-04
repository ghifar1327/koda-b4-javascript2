let suhu = 1;
// keyword function
function cF(suhu) {
  return suhu * 1.18 + " fahrenheit";
}
// Anonymous function
const cR = function (suhu) {
  return (4 / 5) * suhu;
};
// arrow function
const cK = (suhu) => {
  return suhu + 273.15;
};

function informasi() {
  return `suhu dalam celcius adalah ${suhu} C, dalam fahrenheit adalah ${cF(
    suhu
  )}, dalam reamur adalah ${cR(suhu)}, dan dalam kelvin adalah ${cK(suhu)}`;
}
console.log(informasi());
