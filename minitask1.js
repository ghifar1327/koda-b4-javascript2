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
};

console.log(profile.skills[1]);
