function loadDomObjects(data, placeName) {
    console.log(data);
    // console.log(data[0].main.temp);

    $('#forecast-container').html('');
    for (let i = 0; i < data.length; i++) {
        $('#forecast-container').append(`<div id="card${i}" class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${placeName}</h5>
    <p class="card-text">${data[i].main.temp}</p>
    <p class="card-text">${new Date(data[i].dt * 1000)
            .toLocaleString('en-US', { 
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}</p>
    
  </div>
</div>`)
    }


}


