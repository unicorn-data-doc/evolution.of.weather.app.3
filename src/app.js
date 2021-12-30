function welcomeUser() {
    let city = prompt("Enter a City");
    if (city === "Paris") {
        alert("It is currently 19℃ (66℉) in" + city + "with a humidity of 80%");
    } else {
        alert("Sorry, we don't know the weather for this city, try going to https://weather.com");
    }
}

welcomeUser();

        