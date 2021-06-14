function fetchForecast(coordinates) {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast',
        type: 'GET',
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0],
            units: 'imperial'
        },
        error: function (error) {
            console.log(error);
        },
        success: function (data) {
            reverseGeocode(coordinates[0], coordinates[1])
                .then(function (locationData) {
                    let name = locationData.features.filter(function (el) {
                        return el.id.includes('place')
                    })[0]?.text || ''
                    // ? = Nullish Coalescing Operator
                    let filteredData = getFilteredData(data);
                    loadDomObjects(filteredData, name);
                })
                .catch(function (error) {
                    console.error(error);
                })
        }
    });
}

//for loop that goes through the array data
function getFilteredData(data) {
    let filteredData = [];
    for (let i = 0; i < data.list.length; i++) {
        if (i % 8 === 0) {
            filteredData.push(data.list[i])
        }
    }
    return filteredData;
}