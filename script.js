const TodoArray = ["Todo-One", "Todo-Two", "Todo-Three", "Todo-Four"];
const list = document.querySelector(".list");
const newTodo = document.querySelector(".newTodo");
const AddBtn = document.querySelector(".AddBtn");

const generateTodo = () => {
  let value = "";
  for (let i = 0; i < TodoArray.length; i++) {
    value += `<li class="item" >${TodoArray[i]} <span class="icon"onClick=todoRemove(${i})><i class="fas fa-trash"></i> </span></li>`;
  }
  return value;
};
list.innerHTML = generateTodo();

AddBtn.addEventListener("click", () => {
  const currentValue = newTodo.value;
  if (!currentValue) {
    return;
  }
  TodoArray.push(currentValue);
  list.innerHTML = generateTodo();
  newTodo.value = "";
});

const todoRemove = (index) => {
  TodoArray.splice(index, 1);
  list.innerHTML = generateTodo();
};
