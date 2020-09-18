const details = {
    firstname: "Arjan",
    lastname: "Blok",
    age: 39,
    address: {
        city: "Pijnacker",
    },
};

const { firstname, age } = details;
console.log(firstname, age);

const { lastname: familyname } = details;
console.log(familyname);

const {
    address: { city },
} = details;
console.log(city);
