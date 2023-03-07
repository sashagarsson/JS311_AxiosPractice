console.log("hello")

const axios = require('axios');


const getContact = () => {
    try {
        const res = axios.get('https://randomuser.me/api/')
        .then(res => {console.log(res.data.results)})
    } catch(err) {
        console.log("ERROR", err)
    } finally {
    }
}
// console.log(getContact())

// https://swapi.dev/api/people/1 // but I want to pick different numbers --> use a template literal

const getStarWarsPerson = (id) => {
    try {
        const res = axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res=> {console.log(res.data)})
    } catch(err) {     
        console.log("ERROR", err)

    } 
}
console.log(getStarWarsPerson(1));