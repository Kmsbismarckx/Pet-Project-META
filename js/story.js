///export default function() {
const storyMain = document.querySelector(".story-main");
const list = storyMain.querySelector(".story-list");
const listItems = list.querySelectorAll(".story-list__item");
const listItemsDescriptions = storyMain.querySelectorAll(
  ".story-list__item_description"
);

function addClickHandler(item, descr) {
  item.addEventListener("click", function() {
    const temp = storyMain.querySelectorAll(".active");
    for (let i = 0; i < temp.length; i++) {
      temp[i].classList.remove("active");
    }
    item.classList.add("active");
    descr.classList.add("active");
  });
}

for (let i = 0; i < listItems.length; i++) {
  addClickHandler(listItems[i], listItemsDescriptions[i]);
}
//}
