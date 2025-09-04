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

const {
  skills: [_, skill],
} = profile;
const {
  education: [{ name: school }],
} = profile;
console.log(school);
console.log(skill);
// console.log(profile);
