const searchBtn =
document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

const keyword =
document.querySelector(".search-box input")
.value
.trim();

if(!keyword){
alert("Please enter a product");
return;
}

window.location.href =
`search.html?q=${encodeURIComponent(keyword)}`;

});
