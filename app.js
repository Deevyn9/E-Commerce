const toggleButton = document.getElementsByClassName("burger")[0];
const navbarUl = document.getElementsByClassName("menu")[0];
const closeButton = document.getElementsByClassName("close")[0];
const plusBtn = document.getElementsByClassName("plus")[0]; 
const minusBtn = document.getElementsByClassName("minus")[0];
const itemCount = document.getElementsByClassName("count")[0];
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