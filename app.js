function success(position){
    console.log(position);
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