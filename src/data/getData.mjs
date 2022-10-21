import { writeFileSync } from "fs";

import { faker } from "@faker-js/faker";

const USERS = [];
const COMPANIES = [];

function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
  };
}

function createRandomCompany() {
  return {
    companyName: faker.company.companyName(),
    companyCity: faker.address.city(),
    domainName: faker.internet.domainName(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  COMPANIES.push(createRandomCompany());
});

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});

const data = {
  COMPANIES,
  USERS,
};

writeFileSync("./data.json", JSON.stringify(data));
