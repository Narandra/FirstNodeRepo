console.log('Inside the script')
//const axios = require('axios')
async function fetchPerson() {
    try {
        console.log('Inside fetchPerson')
        const people = await axios.get('/api/people')
        const result = document.querySelector('.result')
        const personList = people.map((person)=> person.name)
        result.innerHTML = personList
    }
    catch (error) {
        result.innerHTML = error
    }
}