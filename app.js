document.querySelector("button").addEventListener("click", () => {

let keyword =
document.querySelector("input").value;

if(keyword === ""){
alert("Enter a product");
return;
}

window.location.href =
`search.html?q=${keyword}`;

});