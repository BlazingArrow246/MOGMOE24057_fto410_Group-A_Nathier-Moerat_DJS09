// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number

 //Selecting elements from the DOM   

const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement | null;
let isOpen : boolean

//Array of review objects
const reviews: [ 
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

//Displays name of the reviewer, total number of reviews, and if they are a loyalty user

function showReviewTotal (value : number, reviewer: string, isLoyalty : boolean) {
  const iconDisplay = isLoyalty ? "⭐" : "👤";
  
    reviewTotalDisplay.innerHTML = 
      'review total: ' +
      value.toString() +  //Reviews total
      ' ' +
     '| last reviewed by ' +
     reviewer +' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser); //Dynamically updates showReviewTotal function

//user data object
const you : {
  firstName : string,
  lastName : string,
  isReturning : boolean,
  age : number,
  stayedAt: string[],
} = {
  firstName: "John",
  lastName: "Brown",
  isReturning: true,
  age: 35,
  stayedAt: ["floride-home", "oman-flat", "tokyo-bungalow"],
},

//Updates DOM with user information
function populateUser(isReturning: boolean, userName : string){
  if(isReturning){
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
  },


populateUser(you.isReturning, you.firstName)