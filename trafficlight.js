function switchLights() {
    // udvælg elementer i html-siden til senere brug
    const redLight = document.querySelector("#red");
    const yellowLight = document.querySelector("#yellow");
    // også selecte de andre to
    
    // Write if else if statements, to go from red being active, to yellow being active, to green
    // and back to red.
    const temperature = 28;
    if (temperature > 25) {
        alert("Jeppe kan lide vejret, det er ligesom at være i Spanien!")
    } else if (temperature >= 15) {
        alert("Jeppe kunne godt tænke sig at det var lidt varmere!")
    } else {
        alert("Jeppe fryser!")
    }




    // er der en css-klasse 'active' på id="red"
    //....classList.contains('active');
    const isRedActive = redLight.classList.contains("active");

    console.log(isRedActive);

    // 
    redLight.classList.remove("active")
    yellowLight.classList.add("active")


}

// Tilknyt event-listener på at brugeren trykker på knappen
document.getElementById('change-light').addEventListener('click', switchLights);

