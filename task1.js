const firstEl = document.querySelector("#list").firstElementChild.textContent;
const lastEl = document.querySelector("#list").lastElementChild.textContent;
const secondtEl = document.querySelector("#list").children[1].textContent;
const fourthEl = document.querySelector("#list").children[3].textContent;
const thirdtEl = document.querySelector("#list").children[2].textContent;

console.log(firstEl);
console.log(lastEl);
console.log(secondtEl);
console.log(fourthEl);
console.log(thirdtEl);

module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
