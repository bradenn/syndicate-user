const axios = require('axios');
const faker = require('faker');


for(let i = 0; i < 100; i++) {

    const body = {
        username: faker.internet.userName(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };

    console.log(body)

    axios.post('http://localhost:3001/api/v1/users/', body).then(user => console.log(user)).catch(error => {
        console.log(error.response.data)
    })
}
