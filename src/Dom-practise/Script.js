//1) document.getElementById("title")-->work only if the attribute is id simply pass id name like title
//2) document.querySelector("#name")-->work for id, class, tag name, attribute, etc. simply pass the selector if it is id use # id it it is class use .
//3)document.querySelector find the finst matching element
//4) document.querySelectorAll find all matching elements

// | Property / Method    | What it does                                             | Example                                |
// | -------------------- | -------------------------------------------------------- | -------------------------------------- |
// | `innerHTML`          | Gets/changes the **HTML inside** an element              | `div.innerHTML = "<b>Hello</b>"`       |
// | `innerText`          | Gets/changes the **visible text**                        | `div.innerText = "Hello"`              |
// | `textContent`        | Gets/changes **all text content**, including hidden text | `div.textContent = "Hello"`            |
// | `value`              | Gets/changes the **value of form inputs**                | `input.value = "John"`                 |
// | `addEventListener()` | Adds a **response/action when an event happens**         | `button.addEventListener("click", fn)` |



const title = document.getElementById("title");
const nameInput = document.querySelector("#name");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {

    title.textContent = "Hello ChandraSekarPeriyasami";

    output.textContent = nameInput.value;

});