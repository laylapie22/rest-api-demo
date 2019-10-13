const express = require('express')
const faker = require('faker')

const app = express()

const port = 8080

const employees = []

for ( let i = 0; i < 10; i++) {
    const employee = {
        id: i + 1,
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(true),
        job: faker.name.jobTitle(),
        company: faker.company.companyName()
    }
    employees.push(employee)
}


app.get('/employees', (req,res) => {
    const search = req.query.search
    if ( search ) {
        searchEmployees(req,res)
        return
    }
    res.send(employees)
})

app.get('/employee/:id' ,(req,res) => {
    const id = req.params.id
    if(!id) {
        res.send("employee not found")
    } else {
        const employee = employees.find( (e) => {
            return e.id === parseInt(id)
        })
        res.send(employee)
    }
})

const searchEmployees = (req,res) => {
    const search = req.query.search.toLowerCase()
    const result = employees.filter( e => {
        if ( e.name.toLowerCase().includes(search) || 
            e.email.toLowerCase().includes(search) ||
            e.address.toLowerCase().includes(search)) {
            return true
        }
    })
    res.send(result)
}


app.get('/hello', (req,res) => {
    console.log(req.query)
    const name = req.query.name;
    if(!name) {
        res.send(`Hello world`)
    } else {
        res.send(`Hello world ${name}`)
    }
})

app.listen(port,() => console.log(`listening to port ${port}`))
