const body = document.body;

//can append strings plus all of appendChilds, and can append multiple things
// body.append("hello world", 'bye');

//can append divs, spans, etc only and cannot append multiple things
// body.appendChild("hello world");

//create a element - we have to add it to page now to see it.
const div = document.createElement("div");

//when we view it differs from textContent, it actually checks the css
div.innerText = "hello world";

// text content would basically copy and paste the copy spaces included
div.textContent = "hello world 2";
document.body.append(div);


//modifying the html inside element 
body.querySelector("span").innerHTML = "hello world 3";

//best approach
const strong = document.createElement("strong");
strong.innerText = "hello world 4";
body.append(strong);

const div5 = document.querySelector("#hi");
div5.innerText = "hello world 5";