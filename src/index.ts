// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number

function calculateTotalStars(reviews: { stars: number }[]): number {
  return reviews.reduce((total, review) => {
      return total + review.stars;
  }, 0); // Initial value set to 0 (number type)
}

const reviews: { name: string; stars: number; loyaltyUser: boolean; date: string }[] = [
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

const reviewTotalDisplay = document.querySelector<HTMLDivElement>("#reviews");
if (reviewTotalDisplay) {
  const totalStars = calculateTotalStars(reviews);
  reviewTotalDisplay.textContent = `Total Stars: ${totalStars}`;}

  else {
    console.error("Element with ID '#reviews' not found.");}
  
