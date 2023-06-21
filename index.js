let barContainer = document.querySelector(".barContainer");
let sidebar = document.querySelector(".links");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});

function resume(){
  window.open("https://drive.google.com/file/d/1H3e4y4fDy0YiavWnZYIUZ4B67X1Kzc5F/view?usp=sharing");
}
function close(){
  barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
}