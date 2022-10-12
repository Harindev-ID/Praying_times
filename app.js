function prayerTimes(latitude, longitude){
    fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2&month=10&year=2022')
    .then(Response => Response.json())
    .then(function(Response){
        console.log(Response.data[0].timings)
    });
}

function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    alert('Your location not accessible');
}

function userlocation(){
    if(!navigator.geolocation){
        alert('Geolocation not support in your browser, Please use another browser')
    } else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){
    let app         = document.getElementById('app');
    let h3          = document.createElement('h3');
    h3.innerHTML    = 'Prayers Times';

    app.appendChild(h3);

    userlocation();
}

index();