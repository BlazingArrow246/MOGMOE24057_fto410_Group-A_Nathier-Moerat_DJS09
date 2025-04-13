import { LoyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement | null;

//Updates the DOM to show the total number of reviews, the name of the last reviewer, and an icon.
export function showReviewTotal (value : number, reviewer: string, isLoyalty : LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "👤";
    
      reviewTotalDisplay.innerHTML = 
        value.toString() +  //Reviews total
        'Review' +
        makeMultiple(value) +
       '| last reviewed by ' +
       reviewer + '' + iconDisplay
  }

  //Updates DOM with user information
// If the user is a returning user, it will display "back in html"
  export function populateUser(isReturning : boolean , userName: string ){
    if(isReturning){
    returningUserDisplay.innerHTML = "back"
}
userNameDisplay.innerHTML = userName
  }

  //Dynamically appends pricing details to a specified HTML element if the user has permissions.
export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number)

{if(value){ //If value is true or indicates proper permissions, creates a new <div> element and sets its inner HTML to the price.
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild (priceDisplay);
}
}
   
//if mutiple reviews, the word "Review" will become plural by adding "s"
export function makeMultiple(value: number) : string{
    if(value > 1 || value == 0){
        return 's'
    }   else return ''
}

//Get top 2 reviews
export function getTopReviews(reviews: Review[]): Review[] { 
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars); //Sorts the reviews in descending order of stars (from highest to lowest).
return sortedReviews.slice(0, 2); //Returns the first two reviews in the sorted array.
}