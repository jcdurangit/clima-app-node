const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=71bc0cdaf1d0b436c57d3e49b1674a19&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}