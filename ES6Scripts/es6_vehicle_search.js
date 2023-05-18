const vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2023"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2023"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];
console.log("Which vehicles are RED?");
const redCars = vehicles.filter((vehicle) => vehicle.color === "Red");
redCars.forEach((vehicle) => {
  console.log(vehicle.licenseNo);
});

console.log("  ");
console.log("Which vehicles have registrations that are expired?");
const expiredNow = vehicles.filter(
  (vehicle) => vehicle.registrationExpires < new Date()
);
expiredNow.forEach((vehicle) => {
  console.log(vehicle.licenseNo);
});

console.log("  ");
console.log("Which vehicles that hold at least 6 people?");
const hold6People = vehicles.filter((vehicle) => vehicle.capacity >= 6);
hold6People.forEach((vehicle) => {
  console.log(vehicle.licenseNo);
});

console.log("  ");
console.log("Which vehicles have license plates that end with 222?");
const end222 = vehicles.filter((vehicle) => vehicle.licenseNo.endsWith("222"));
end222.forEach((vehicle) => {
  console.log(vehicle.licenseNo);
});
