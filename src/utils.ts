import { LoyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement | null;

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

  export function populateUser(isReturning : boolean , userName: string ){
    if(isReturning){
    returningUserDisplay.innerHTML = "back"
}
userNameDisplay.innerHTML = userName
  }

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number)
{if(value){
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild (priceDisplay);
}
}
   
export function makeMultiple(value: number) : string{
    if(value > 1 || value == 0){
        return 's'
    }   else return ''
}

//Get top 2 reviews
export function getTopReviews(reviews: Review[]): Review[] { 
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
return sortedReviews.slice(0, 2);
}