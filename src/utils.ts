import { LoyaltyUser, Permissions } from "./enums";

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

export function showDetils(value: boolean | Permissions, element : HTMLDivElement, price: number)
{if(value){
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild (priceDisplay);
}
}
   
export function makeMultiple(value: number){
    if(value > 1){
        return 's'
    }   else return ''
}