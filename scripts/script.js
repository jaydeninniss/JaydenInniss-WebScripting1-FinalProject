
let city;






async function logweather(city) {



   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.28190749158899&lon=-123.10989051451176&appid=12308284112402dcd0444c20a407d318&units=metric");

    const weather = await response.json();
    console.log(weather);
    let temp = weather.main.temp;
    temp = temp.toFixed(0)
    document.querySelector("#main").innerHTML = weather.weather[0].main;
    document.querySelector("#temp").innerHTML = temp + "&deg;";

    
    weathericon = document.querySelector(".weathericonimg");
    iconname = weather.weather[0].icon;
    weathericon.src = "https://openweathermap.org/img/wn/" + iconname + "@4x.png"

    };


window.addEventListener('load', logweather);



//This makes the Photo Columns on the homepage have hover states:
let photoColumn1 = document.querySelector("#sport");
let photoColumn2 = document.querySelector("#adventure");
let photoColumn3 = document.querySelector("#landscape");
let photoColumn4 = document.querySelector("#product");


//1st Column
let hoverphoto1 = gsap.to("#overlay1", {
   paused: true,
   opacity: 0
});
photoColumn1.addEventListener("mouseenter", () => hoverphoto1.play());
photoColumn1.addEventListener("mouseleave", () => hoverphoto1.reverse());


//2nd Column
let hoverphoto2 = gsap.to("#overlay2", {
   paused: true,
   opacity: 0
});
photoColumn2.addEventListener("mouseenter", () => hoverphoto2.play());
photoColumn2.addEventListener("mouseleave", () => hoverphoto2.reverse());

//3rd Column
let hoverphoto3 = gsap.to("#overlay3", {
   paused: true,
   opacity: 0
});
photoColumn3.addEventListener("mouseenter", () => hoverphoto3.play());
photoColumn3.addEventListener("mouseleave", () => hoverphoto3.reverse());


//4th Column
let hoverphoto4 = gsap.to("#overlay4", {
   paused: true,
   opacity: 0
});
photoColumn4.addEventListener("mouseenter", () => hoverphoto4.play());
photoColumn4.addEventListener("mouseleave", () => hoverphoto4.reverse());



