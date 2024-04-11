// Weather API ----------

async function logweather() {

    //Using the keyword fetch to get the data from the Open Weather API! It is super easy to use, I asked for coordinates along with my API key and boom, it spit back a response, I will call the response: response.
   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.28190749158899&lon=-123.10989051451176&appid=12308284112402dcd0444c20a407d318&units=metric");

  

   //Once (hence the await keyword) the api returns the data, I will take the 'response' and make it into json, then call that 'weather'. Cus thats what it is.
    const weather = await response.json();

    //I am grabbing a specific piece of data from weather here - only the temperature. This will go under variable: temp
    let temp = weather.main.temp;

    //Rounding temp to no decimal points
    temp = temp.toFixed(0)

    //Update the DOM with the weather descritption from the weather json data. I am updating the #main h3 text.
    document.querySelector("#main").innerHTML = weather.weather[0].main;

    //Updating the temperature html with the actual temp from the json data and then concatenating the degree symbol behind it!
    document.querySelector("#temp").innerHTML = temp + "&deg;";

    
    //THIS IS FOR THE ICON:
    //I am queryselecting the weathericon image in the DOM
    weathericon = document.querySelector(".weathericonimg");

    //Then I am going into the json weather data again and finding the code for the icon. It looks like this: 1001 or 1002 or 1012 - each code coorsponds to a different icon variant.
    iconname = weather.weather[0].icon;

    //Now I am using this unique code to go onto the open weather website and grabbing the icon I want from their website. Thankfully, they host them all for you! I use concatenation to insert the iconname into the url! 
    weathericon.src = "https://openweathermap.org/img/wn/" + iconname + "@4x.png"

    };

    //Once the page is finished loading, the function logweather will run! This will update the weather widget in my footer!
window.addEventListener('load', logweather);

// GSAP ----------

// Creates a variable for each photo column. This makes the Photo Columns on the homepage have hover states
let photoColumn1 = document.querySelector("#sport");
let photoColumn2 = document.querySelector("#adventure");
let photoColumn3 = document.querySelector("#landscape");
let photoColumn4 = document.querySelector("#product");

// 1st Column
let hoverphoto1 = gsap.to("#overlay1", {
   // pauses the animation
   paused: true,
   // sets the opacity for the overlay to 0
   opacity: 0
});
// plays animation when the mouse enters the element
photoColumn1.addEventListener("mouseenter", () => hoverphoto1.play());
// plays the animation in reverse when the mouse exits the element
photoColumn1.addEventListener("mouseleave", () => hoverphoto1.reverse());


// 2nd Column
let hoverphoto2 = gsap.to("#overlay2", {
   // pauses the animation
   paused: true,
   // sets the opacity for the overlay to 0
   opacity: 0
});
// plays animation when the mouse enters the element
photoColumn2.addEventListener("mouseenter", () => hoverphoto2.play());
// plays the animation in reverse when the mouse exits the element
photoColumn2.addEventListener("mouseleave", () => hoverphoto2.reverse());

// 3rd Column
let hoverphoto3 = gsap.to("#overlay3", {
   // pauses the animation
   paused: true,
   // sets the opacity for the overlay to 0
   opacity: 0
});
// plays animation when the mouse enters the element
photoColumn3.addEventListener("mouseenter", () => hoverphoto3.play());
// plays the animation in reverse when the mouse exits the element
photoColumn3.addEventListener("mouseleave", () => hoverphoto3.reverse());


// 4th Column
let hoverphoto4 = gsap.to("#overlay4", {
   // pauses the animation
   paused: true,
   // sets the opacity for the overlay to 0
   opacity: 0
});
// plays animation when the mouse enters the element
photoColumn4.addEventListener("mouseenter", () => hoverphoto4.play());
// plays the animation in reverse when the mouse exits the element
photoColumn4.addEventListener("mouseleave", () => hoverphoto4.reverse());



