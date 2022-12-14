function prayerTimes(latitude, longitude){
    fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=11')
    .then(Response => Response.json())
    .then(function(Response){
        let date        = new Date();
        let today       = date.getDate() - 1;
        let data        = Response.data[0].timings;

        let app         = document.getElementById('app');
        let table       = document.createElement('table');
        let tableTbody  = document.createElement('tbody');

        for(i in data){
            let row         = tableTbody.insertRow();
            let name        = row.insertCell(0);
            let time        = row.insertCell(1);
            name.innerHTML  = i;
            time.innerHTML  = data[i];
            tableTbody.appendChild(row);
        }
        table.appendChild(tableTbody);
        app.appendChild(table);
    });
}

function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    // default use lat and long mecca
    prayerTimes('21.422510', '39.826168');
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