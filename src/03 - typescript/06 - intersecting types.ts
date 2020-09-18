interface Name {
    firstname: string;
    middlename?: string;
    lastname: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;

const person: Person = { firstname: "Arjan", lastname: "Blok", age: 39 };
person;
