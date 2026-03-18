// ================= MENU TOGGLE =================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// CLOSE MENU ON LINK CLICK
document.querySelectorAll("nav a").forEach(link=>{
  link.addEventListener("click", ()=>{
    nav.classList.remove("active");
  });
});

// ================= GSAP =================
gsap.from(".home-text",{x:-100,opacity:0,duration:1});
gsap.from(".home img",{x:100,opacity:0,duration:1});

// ================= TYPING =================
new Typed(".typing",{
  strings:["Developer","AI Engineer","Data Analyst"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});

document.querySelector(".contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully 🚀");
});
// ================= MATRIX =================
const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letters="01";
const fontSize=10;
const columns=canvas.width/fontSize;

const drops=[];
for(let i=0;i<columns;i++){drops[i]=1;}

function draw(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0f0";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height&&Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}
setInterval(draw,33);

// ================= POPUP =================
function openPopup(img){
document.getElementById("popup").style.display="flex";
document.getElementById("popup-img").src=img;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

// ================= SLIDER =================
function scrollSlider(direction){
const slider = document.getElementById("slider");
slider.scrollBy({
left: direction * 300,
behavior: "smooth"
});
}

// AUTO SLIDE
setInterval(()=>{
document.getElementById("slider").scrollBy({
left:300,
behavior:"smooth"
});
},3000);

// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = () => {
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
localStorage.setItem("theme","light");
themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}else{
localStorage.setItem("theme","dark");
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}
};

// LOAD SAVED THEME
window.onload = () => {
if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light");
themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
};