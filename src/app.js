const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../../weather-app/utils/geocode.js')
const forecast = require('../../weather-app/utils/forecast.js')

console.log(__dirname)
const app = express()

//setup handlebar and view location
app.set('view engine','hbs')
app.set('views',path.join(__dirname, '../template/views'))
const partialPath = path.join(__dirname, '../template/partials')
hbs.registerPartials(partialPath)

//setup static directory
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        name: "Weather",
        title: "Weather",
        author: "Pritesh",
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: "About Page",
        title: "About",
        author: "Pritesh"
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        name: "This is help page",
        title: "Help",
        author: "Pritesh"
    })
})
app.get('/help/*',(req, res) => {
    res.send("This help page is not found!")
    //TBD - make handle bar and pass generic data based on page context
})
app.get('*', (req, res) => {
    res.render("404", {
        title: "Help",
        author: "pritesh"
    })
})
// app.get('/help', (req, res) => {
// app.get('/help', (req, res) => {
//     const data = {name: "pritesh", age: 30}
//     res.send(data)
// })

// app.get('/about', (req, res) => {
//     res.send("about page")
// })

app.get('/weather', (req, res) => {
    res.render('help', {
        title: "NodJS title",
        location: "Singapore",
        temprature: 21 
    })
})
//     city = "dublin"
//     geocode(city, (error, data) => {
//         if (error){
//             console.log(error)
//         } else {
//             //console.log(data)
//             res.send("<h1>Today's weather</h1><br>")
//             // const forcast = forecast(data, (error, weatherData) => {
//             //     if (error){
//             //         console.log(error)
//             //     } else {
//             //         let finalStr = '<h2>Hi! Current temperature in <b>' + city +  '</b> is ' + weatherData.temperature + ' degree</h2>'
//             //         console.log(finalStr) 
//             //         res.send("<h1>Today's weather</h1><br>" + finalStr)
//             //         //console.log('There is a ' + chalk.gray.inverse(weatherData.precip + "%") + ' chance of rain')
//             //     }
//             // })
//         }
//     })
    
// })
app.listen(3000, ()=> {
    console.log("Server is up on port 3000")
})