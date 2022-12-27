const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
      password: faker.internet.password(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      id: faker.datatype.uuid()
    };
    return newFake;
};

const createCompany = () => {
  const newFake = {
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  };
  return newFake;
};

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
  const newFakeUser = createUser();
  console.log(newFakeUser);
  res.json( newFakeUser );
});

app.get("/api/companies/new", (req, res) => {
  const newFakeCo = createCompany();
  console.log(newFakeCo);
  res.json( newFakeCo );
});

app.get("/api/user/company", (req, res) => {
  const newFakeBoth = [createUser(), createCompany()];
  console.log(newFakeBoth);
  res.json( newFakeBoth );
});

// this needs to be below the other code blocks
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
