

 //Selecting elements from the DOM   
const propertyContainer = document.querySelector(".properties") 
const footer = document.querySelector(".footer")
import { showReviewTotal, populateUser } from "./utils";
let isOpen : boolean

//Array of review objects
const reviews: {

name: string,
stars: number,
loyaltyUser: boolean,
date: string,
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

//user data object
//const you : {
 // firstName : string,
 // lastName : string,
 // isReturning : boolean,
 // age : number,
 // stayedAt: string[],
//} = {
  //firstName: "John",
 // lastName: "Brown",
 // isReturning: true,
  //age: 35,
  //stayedAt: ["floride-home", "oman-flat", "tokyo-bungalow"],
//}

const ADMIN ='admin'
const READ_ONLY = 'read-only'

enum Permissions {
  ADMIN ,
  READ_ONLY 
}

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
    country: string,
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

//Add the properties
for(let i = 0; i < properties.length; i++){
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img")
  image.setAttribute('src', properties[i].image) 
  card.appendChild(image);
  propertyContainer.appendChild(card);
}

//Current Location,time and temperature
let currentLocation: [string, string, number] = ["London", "11:35", 20]
footer.innerHTML = currentLocation[0] + " " + currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2] + ""; 