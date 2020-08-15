document.querySelector("#addToListButton").onclick = addItemToList;
document.querySelector("#clearComplete").onclick = clearComplete
document.querySelector("#clearAll").onclick = clearList
let count = 0;

document.querySelector("form").addEventListener("submit",(el) =>{
  let item = document.querySelector("#itemInput").value;
  el.preventDefault()
  if (item == ""){
  } else {
    addTaskToList()
    document.querySelector("#addItem").innerHTML = ''
  }
})
function addItemToList(){
  let item = document.querySelector("#itemInput").value
  let ul = document.querySelector("#toDoList")
  let textNode = document.createTextNode(item)
  let li = document.createElement("li")

  if (item == ""){
  }else {
    li.appendChild(textNode)
    ul.appendChild(li)
    count++
    document.querySelector("#itemInput").value = ""
  }
}
//code is not complete. will be resubmitting working code.
