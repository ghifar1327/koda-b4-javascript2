const bio = {
  name: "muhammad ghifar ramdhani",
  age: 26,
};
const extraintfo = {
  skills: ["Web Programing", "Painting"],
  education: [{ name: "SMAN 2 KARAWANG", year: 2017 }],
};
const profile = {
  ...bio,
  ...extraintfo,
  ...{
    skills: [...extraintfo.skills, "soccer"],
  },
};


const {name: myName} = profile;
console.log(myName);
const {
    skills: [_, skill],
} = profile;
console.log(skill);
// console.log(profile);

