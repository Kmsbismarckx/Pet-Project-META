let storyMain = document.querySelector(".story-main");
let list = storyMain.querySelector(".story-list");
let listItems = list.querySelectorAll(".story-list__item");
let listItemsDescriptions = storyMain.querySelectorAll(
  ".story-list__item_description"
);

function addClickHandler(item, descr) {
  item.addEventListener("click", function() {
    let temp = storyMain.querySelectorAll(".active");
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
