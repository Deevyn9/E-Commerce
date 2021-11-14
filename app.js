const toggleButton = document.getElementsByClassName("burger")[0];
const navbarUl = document.getElementsByClassName("menu")[0];
const closeButton = document.getElementsByClassName("close")[0];
const plusBtn = document.getElementsByClassName("plus")[0]; 
const minusBtn = document.getElementsByClassName("minus")[0];
const itemCount = document.getElementsByClassName("count")[0];
const cartBtn = document.getElementsByClassName("cart")[0];
const addToCart = document.getElementsByClassName("add-btn")[0];
const cartCard = document.getElementsByClassName("cart-card")[0];
const deleteBtn = document.getElementsByClassName("delete")[0];

let count = 0;

toggleButton.addEventListener('click', () => {
   navbarUl.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
 });

plusBtn.addEventListener('click', () => {
   itemCount.textContent = count++;
});

minusBtn.addEventListener('click', () => {
   itemCount.textContent = --count;
});

cartBtn.addEventListener('click', () => {
   cartCard.classList.toggle('toggle');
});

addToCart.addEventListener('click', () => {
   alert("fuck off Pussio!");
});

deleteBtn.addEventListener('click', () => {
   alert("Are you sure?");
});