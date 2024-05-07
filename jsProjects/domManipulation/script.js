// Gets the Div with ID container 
const container = document.querySelector("#container");

// Adds a red text p with "Hey I'm Red!"
const par = document.createElement("p");

par.textContent = "Hey I'm Red!";

par.setAttribute("style", "color: red")

container.appendChild(par);
// Adds H3 wiith blue text that says "I'm blue H3!"

const h3 = document.createElement("h3")

h3.textContent = "I'm blue H3!"

h3.setAttribute("style", "color: blue")
container.appendChild(h3);

// Adds a DIV with a black border and pink background

const bpDiv = document.createElement("div");

bpDiv.setAttribute("style", "background: pink; border: 5px solid black; display: flex; justify-content: center")

container.appendChild(bpDiv);
// Adds another h1 that says "I'm in a Div!"
const h1 = document.createElement("h1");

h1.textContent = "I'm in Div!";

bpDiv.appendChild(h1);

// Adds a p that says "Me to!"
const secP = document.createElement("p");

secP.textContent = "ME TOO!!!";

secP.setAttribute("style", "margin-top: 250px; display: flex; justify-content: center");

bpDiv.appendChild(secP);
