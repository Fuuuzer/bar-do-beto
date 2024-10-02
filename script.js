const submitBtn = document.querySelector(".submit-btn");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelectorAll(".delete-btn");
const form = document.querySelector(".form__container");
const input = document.querySelector(".form__input");
const items = document.querySelector(".items");
// const item = document.querySelectorAll(".item");

function addItem(e) {
  e.preventDefault();

  if (!input.value == "") {
    const item = document.createElement("div");
    const text = input.value;
    item.innerHTML = ` <p>${text}</p>
    <div class="item__icons">
      <i class="edit-btn fa-regular fa-pen-to-square"></i>
      <i class="delete-btn fa-solid fa-trash"></i>
    </div>`;
    item.classList.add("item");
    items.appendChild(item);
    input.value = "";
  } else {
    const wrong = document.createElement("p");
    wrong.innerText = "Por favor, digite um item";
    alert("Por favor digite um item");
    input.appendChild(wrong);
  }
}

function editItem() {
  
}

submitBtn.addEventListener("click", addItem);

items.addEventListener("click", function deleteItem(event) {
  if (event.target && event.target.classList.contains("delete-btn")) {
    const listItem = event.target.parentElement.parentElement;
    listItem.remove();
  }
});
