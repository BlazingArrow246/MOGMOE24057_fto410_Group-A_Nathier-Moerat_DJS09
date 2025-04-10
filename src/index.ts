

 //Selecting elements from the DOM   

import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from "./utils";
import {Permissions, LoyaltyUser} from "./enums";
import { Review, Property } from "./interfaces";
import {MainProperty} from "./classes"
const reviewContainer = document.querySelector(".reviews") 
const container = document.querySelector(".container") 
const button = document.querySelector(".button") 
const footer = document.querySelector(".footer") 
const propertyContainer = document.querySelector(".properties") 

let isLoggedIn : boolean

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
const properties: Property[] = [

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
    contact: [+274956382345, 'andyluger@aol.com'],
    isAvailable: true,
  },
{
  image: "images/malaysian-hotel.jpg",
  title: "Malia Hotel",
  price: 35,
  location: {
    firstLine: "Room 4",
    city: "Malia",
    country: "Malaysia",
    code: 38473,
  },
  contact: [+273956392317, 'lee34@gmail.com'],
  isAvailable: false,
}
]


  showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser); //Dynamically updates showReviewTotal function

populateUser(you.isReturning, you.firstName)

 //Add the properties
for(let i = 0; i < properties.length; i++){
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img")
  image.setAttribute('src', properties[i].image) 
  card.appendChild(image);
  showDetails(you.permissions, card, properties[i].price);
  propertyContainer.appendChild(card);
}

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

class MainProperty {
  src: string
  title: string
  reviews: Review[]
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

let yourMainProperty = new MainProperty
('images/columbia-property.jpg',
  'Italian House',
[{
  name: "Olive",
  stars: 5,
  loyaltyUser: LoyaltyUser.GOLD_USER,
  date: "12-04-2021",
}])

const mainImageContainer = document.querySelector(".main-image")
const Image = document.createElement("img")
Image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(Image)