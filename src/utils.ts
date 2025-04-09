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

function add(firstValue : (number | string), secondValue : (number | string)) {
    let result
    if(typeof firstValue === "number" && typeof secondValue === "number") {
        result = firstValue + secondValue
    }
    if (typeof firstValue === "string" && typeof secondValue === "string") {
        result = firstValue.toString() +' '+ secondValue.toString()
    }
    if (typeof firstValue === "number" && typeof secondValue === "string") {
        console.log ("cannot perform this addition")
    }
    if (typeof firstValue === "string" && typeof secondValue === "number") {
   console.log ("cannot perform this addition")
    }
  }
  const combinedReviews = add(5, 1)
  const firstNameLastName = add('Ania', 'Kowalska')