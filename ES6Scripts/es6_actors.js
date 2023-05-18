const academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];
console.log("who has a memID of 187");
const id187 = academyMembers.find((member) => member.memID === 187);
console.log(id187.name);

console.log("  ");
console.log("who has done atleast 3 films");

const atleast3Films = academyMembers.filter(
  (member) => member.films.length >= 3
);
atleast3Films.forEach((member) => {
  console.log(member.name);
});

console.log("  ");
console.log("whos name starts with bob");

const startsWBob = academyMembers.filter(
  (member) => member.name.substring(0, 3) === "Bob"
);

startsWBob.forEach((member) => {
  console.log(member.name);
});
console.log("  ");
console.log(" academy members that have been in a film that starts with A");

const startsWithA = (filmName) => filmName.startsWith("A");
const containsTitlesA = (films) => films.find(startsWithA);

const actorsInFilmsA = academyMembers.filter((member) =>
  containsTitlesA(member.films)
);
actorsInFilmsA.forEach((actor) => console.log(actor.name));
