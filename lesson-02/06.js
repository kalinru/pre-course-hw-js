let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

const deepCopy = structuredClone(passportWithAddress);

deepCopy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(deepCopy.address.city);
