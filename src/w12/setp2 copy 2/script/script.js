let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "#0000ff";
let card = document.querySelector(".card");
for (let i = 0; i < card.clientHeight; i++) {
  let eachCard = card[i];
}
eachCard.addEventLister("click", function () {
  container.dataset.selected = evt.currentTarget.dataset.nth;
});
