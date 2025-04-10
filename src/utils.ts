import { LoyaltyUser, Permissions } from "./enums";

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

export function showDetils(value: boolean | Permissions, element : HTMLDivElement, price: number)
{if(value){
    const priceDisplay = document.querySelector("#price") as HTMLElement | null;
    priceDisplay.innerHTML = price.toString() + '/night'
    element.appendChild (priceDisplay);
}
userNameDisplay.innerHTML = userName
}

function add(firstValue : number , secondValue : number) : number{
    return firstValue + secondValue
}
   
export function makeMultiple(value: number){
    if(value > 1){
        return 's'
    }
}