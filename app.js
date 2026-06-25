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

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if(href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add functionality to category cards
document.querySelectorAll('.categories .card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const category = card.textContent.trim().split(' ')[1].toLowerCase();
    alert(`Searching for ${category} products...`);
    window.location.href = `search.html?q=${encodeURIComponent(category)}`;
  });
});

// Add functionality to product "Compare Prices" buttons
document.querySelectorAll('.product button').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.closest('.product').querySelector('h3').textContent;
    alert(`Comparing prices for ${productName}...`);
    window.location.href = `search.html?q=${encodeURIComponent(productName)}`;
  });
});