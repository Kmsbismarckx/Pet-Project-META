let list = document.querySelector(".story-list");
let listItems = list.querySelectorAll(".story-list__item");
let listItemsDescriptions = document.querySelectorAll(
  ".story-list__item_description"
);

function addClickHandler(item, descr) {
  item.addEventListener("click", function () {
    let temp = document.querySelectorAll(".active");
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
