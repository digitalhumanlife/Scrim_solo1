let homeCounter = document.getElementById("home-score");
let guestCounter = document.getElementById("guest-score");
let home = 0;
let guest = 0;

function homeButton(number){
    home += number;
    homeCounter.textContent = home;
}


function guestButton(number){
    guest += number;
    guestCounter.textContent = guest;
}
