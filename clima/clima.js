const axios = require('axios');
const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6ac527a678cde4d09aeae45bab331463&units=metric`)

    return resp.data.main.temp;
};

module.exports = {
    getClima: getClima
}