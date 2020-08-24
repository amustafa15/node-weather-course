const request = require("request")

const forecast = (lat, long, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=c88d67038e3eecd7231858167176b6c7&query=' + lat + ',' + long + '&units=f'
    
    request({ url, json: true }, (err, {body}) => {
        if (err) {
            callback("Unable to conect to the Server")
        } else if (body.error) {
            callback("Unable to find the Location")
        } else {
            callback(undefined, {
                current_weather: body.current.weather_descriptions[0],
                feelslike: body.current.feelslike,
                country: body.location.country,
                region: body.location.region,
            })
        }
    })
}
module.exports = forecast