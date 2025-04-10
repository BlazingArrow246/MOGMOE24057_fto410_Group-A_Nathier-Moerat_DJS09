

 Selecting elements from the DOM   
const propertyContainer = document.querySelector(".properties") 
const footer = document.querySelector(".footer")
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from "./utils";
import {Price,Country} from "./types";
import { Review } from "./interfaces";
const reviewContainer = document.querySelector(".reviews") 
const container = document.querySelector(".container") 
const button = document.querySelector(".button") 
const footer = document.querySelector(".footer") 

let isLoggedIn : boolean

enum Permissions {
  ADMIN = "admin",  
  READ_ONLY = "read-only",
}

enum LoyaltyUser {
  GOLD_USER = "GOLD-USER",
  SILVER_USER = "SILVER-USER",
  BRONZE_USER = "BRONZE-USER",
}


//Array of review objects
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    description: 'Great hosts, location and service',
  },
];

//Enum for user permissions

const you = {
  firstName: "John",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["floride-home", "oman-flat", "tokyo-bungalow"],
}
  //properties

const properties: {
  image: string,
  title: string,
  price: number,
  location: {
    firstLine: string,
    city: string,
    country: Country,
    code: number,
  },
  contact : [number, string],
  isAvailable: boolean,
}[] = [
  {
    image: "images/columbia-property.jpg",
    title: "Columbian Shack",
    price: 45,
    location: {
      firstLine: "Shack 37",
      city: "Bogota",
      country: "Columbia",
      code: 45632,
    },
    contact: [+27745748349, 'marywinkle@gmail.com'],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      country: "Poland",
      code: 343903,
    },
    contact: [+273645373849, 'garydavis@hotmail.com'],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      country: "United Kingdom",
      code: 67890,
    },
    contact: [+274956382345, 'andyluger@aol,com'],
    isAvailable: true,
  }
]


  showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser); //Dynamically updates showReviewTotal function

populateUser(you.isReturning, you.firstName)

let authorityStatus : any
isLoggedIn = false

 function showDetails(authorityStatus: boolean | Permissions, element : HTMLElement, price: number) {
  if (authorityStatus) {
 const priceDisplay = document.createElement("div");
 priceDisplay.innerHTML = price.toString() + '/night'
element.appendChild(priceDisplay);
  }
}
 //Add the properties
for(let i = 0; i < properties.length; i++){
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img")
  image.setAttribute('src', properties[i].image) 
  card.appendChild(image);
  propertyContainer.appendChild(card);
  showDetails(you.permissions, card, properties[i].price);
  propertyContainer.appendChild(card);
}

//Broken code
let count = 0
function addReviews(array: Review[]) : void {
  if(!count){
    count++
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + "stars from " + topTwo[i].name
      reviewContainer.appendChild(card);
    }
    container.removeChild(button)
  }
}

button.addEventListener ('click', () => addReviews(reviews))

//Current Location,time and temperature
let currentLocation: [string, string, number] = ["London", "11:35", 20]
footer.innerHTML = currentLocation[0] + " " + currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2] + ""; 

//Classes 
// class Car {
//make: string
// year: number
//color: string
// constructor(make: string, year: number, color: string) {
//   this.make = make;
//   this.year = year;
//   this.color = color;
// }
//}

class MainProperty {
  src: string
  title: string
  reviews: Review[]
  constructor(src, title, reviews) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}