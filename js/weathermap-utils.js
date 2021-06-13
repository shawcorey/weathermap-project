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
        success: function (data) {
            console.log(getFilteredData(data));

        }
    });
}
//for loop that goes through the array data
function getFilteredData(data) {
    let filteredData = [];
    for (let i = 0; i < data.list.length; i++){
        if (i % 8 === 0){
            filteredData.push(data.list[i])
        }
    }
    return filteredData;
}