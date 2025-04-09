import { LoyaltyUser } from "./enums";

const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement | null;

export function showReviewTotal (value : number, reviewer: string, isLoyalty : LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "👤";
    
      reviewTotalDisplay.innerHTML = 
        'review total: ' +
        value.toString() +  //Reviews total
        ' ' +
       '| last reviewed by ' +
       reviewer +' ' + iconDisplay
  }

  //Updates DOM with user information

  export function populateUser(isReturning : boolean , userName: string ){
    if(isReturning == true){
    returningUserDisplay.innerHTML = "back"
}
userNameDisplay.innerHTML = userName
}
