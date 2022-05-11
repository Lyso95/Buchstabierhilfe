const form = document.getElementById('spellit');
const toSpell = form.elements[spellword];

let spelling = spellword.value;



const para = document.createElement("p");
const node = document.createTextNode(spellword);
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);

