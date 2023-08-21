import { faker } from "@faker-js/faker";

const validAddTrainingVideoPayload = {
    name: `${faker.random.word()}`,
    description: `${faker.random.words(5)}`,
    url: `${faker.internet.url()}`
};

export {
    validAddTrainingVideoPayload
}