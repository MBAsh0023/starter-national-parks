console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const areaClass = document.querySelector(".area");
console.log(areaClass);

const statDiv = document.querySelector(".stat > div");
console.log(statDiv);

const hello= document.querySelector(".hello");
console.log(heading);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

//get list of all <div> elements
const divList= document.querySelectorAll("div")

//iterate over the list and pring each one
for(let element of divList.values()) {
    console.log(element);
}

for(let i=0; i < divList.length; i++){
    const element = divList[i];
    console.log(element);
}

const descriptions = document.querySelectorAll(".description-display")
for(let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content)

    if(content.length >250){
        content = content.slice(0,250);
        content = content + '<a href="#">...</a>'
    }
    desc.innerHTML = content //interText update the HTML
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);

const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter")

// Add an event listener
nameSorter.addEventListener("click",(event) =>{
    event.preventDefault();
    // 1. Get the main element
    const main = document.querySelector("main");

    //2.Get the list of parks
    const parkList = main.querySelectorAll(".park-display");

    //3. Empty the main element
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parkList);

    //5. Sort the Array
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if(parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    });

    // 6.Insert each parkinto the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });

    // Select the `ratingSorter` link
    const ratingSorter = document.querySelector("#rating-sorter")

    //Function for sorting by rating
    const sortByRating = (parkA, parkB) => {
        const parkARating = parseFloat(
            parkA.querySelector(".rating-display > .value").innerText
          );
          const parkBRating = parseFloat(
            parkB.querySelector(".rating-display > .value").innerText
          );
          return parkBRating - parkARating;
        };

    //fuction for handling the `ratingSorter` click

    const ratingSorterClickHandeler = (event) => {
        event.preventDefault();
    }

    console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

 
});

