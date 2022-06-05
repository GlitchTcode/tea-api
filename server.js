const express = require('express')
const app = express()
const cors =require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type':'black',
        'origin': 'Grocery store',
        'water temp': 200,
        'steep time in seconds': 180,
        'caffeinated': true,
        'flavor': 'delicious',
    },
    'matcha': {
        'type':'green',
        'origin': 'Grocery store',
        'water temp': 200,
        'steep time in seconds': 180,
        'caffeinated': true,
        'flavor': 'greenlicious',
    },
    'unknown': {
        'type':'unknown',
        'origin': 'unknown',
        'water temp': 200,
        'steep time in seconds': 180,
        'caffeinated': true,
        'flavor': 'unknown',
    }
}

app. get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])

    } else {
        response.json(tea['unknown'])
    }
    response.json(tea)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`This server is running on port ${PORT}! Better go catch it!`)
})