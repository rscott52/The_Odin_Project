const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
    const myItem = input.value;
    input.value = " ";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    listItem.appendChild(span);
    span.textContent = myItem;
    listItem.appendChild(button);
    button.textContent = "Delete";
    ul.appendChild(listItem);

    button.addEventListener("click", () => {
        ul.removeChild(listItem);
    })

    input.focus();
}
)