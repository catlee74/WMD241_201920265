let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "#0000ff";

let aCard = document.querySelector(".card");
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");

  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList);
});
let cards = document.querySelectorAll(".card");
console.log(cards);
// cards.forEach((eachCard)=>{eachCard.addEvent("click,function()")});
for (let i = 0; i < card.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toffle("card--state-clicked");
  });
}
