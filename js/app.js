document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
document.querySelectorAll(".menu-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("show"));
});

