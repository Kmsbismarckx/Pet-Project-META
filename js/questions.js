//export default function() {
const checkbox = document.querySelectorAll(".questions__list_checkbox");
const text = document.querySelectorAll(".questions__list_footer");

function addCheckHandler(item, toChange) {
  item.addEventListener("change", function() {
    toChange.classList.toggle("active");
  });
}

for (let i = 0; i < checkbox.length; i++) {
  addCheckHandler(checkbox[i], text[i]);
}
//}
