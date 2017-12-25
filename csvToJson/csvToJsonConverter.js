const csvToJson = require('csvtojson')
const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname,'customer-data.csv')
var buff=""
let jsonArray = []
csvToJson().fromFile(filePath).on('json', (jsonobj)=>{
    jsonArray.push(jsonobj)
}).on('done',(error)=>{
    if(error) return process.exit(1)
    console.log(jsonArray)
    fs.writeFile('json-data.json', JSON.stringify(jsonArray, null, 2), (error)=>{
        if(error) return process.exit(1)
        console.log('write success')
        process.exit(0)
    })
})