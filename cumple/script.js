// script.js
const audio=document.getElementById("audio");

let maxGuests=1;
let selectedGuests=1;

window.onload=()=>{
audio.play().catch(()=>{});
readGuests();
updateButtons();
updateConfirm();
countdown();
setInterval(countdown,1000);
observeReveal();
};

function enterInvite(){
welcome.style.display="none";

audio.muted=false;
audio.play().catch(()=>{});

setTimeout(()=>{
heroTop.classList.add("show");
},300);

setTimeout(()=>{
one.classList.add("show");
five.classList.add("show");
},1500);

setTimeout(()=>{
numeros.classList.add("swap");
},4500);

setTimeout(()=>{
document.getElementById("name").classList.add("show");
},6500);

setTimeout(()=>{
subhero.classList.add("show");
},7200);
}

function toggleMusic(){
if(audio.paused){
audio.play();
musicBtn.innerHTML="❚❚";
}else{
audio.pause();
musicBtn.innerHTML="▶";
}
}

function countdown(){
const target=new Date("May 9, 2026 21:00:00").getTime();
const now=new Date().getTime();
const diff=target-now;

d.innerHTML=Math.floor(diff/(1000*60*60*24));
h.innerHTML=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
m.innerHTML=Math.floor((diff%(1000*60*60))/(1000*60));
s.innerHTML=Math.floor((diff%(1000*60))/1000);
}

function openGift(){
giftModal.style.display="flex";
}

function copyAlias(){
navigator.clipboard.writeText("NAVIO.DUPLA.VELERO");
giftModal.style.display="none";
alert("Alias copiado");
}

function readGuests(){
const p=new URLSearchParams(location.search);
maxGuests=parseInt(p.get("cantidad"))||1;
selectedGuests=maxGuests;

cantidadInvitados.innerHTML=maxGuests;
qtyValue.innerHTML=maxGuests;
}

function changeQty(v){
selectedGuests+=v;

if(selectedGuests<0)selectedGuests=0;
if(selectedGuests>maxGuests)selectedGuests=maxGuests;

qtyValue.innerHTML=selectedGuests;
updateButtons();
updateConfirm();
}

function updateButtons(){
minusBtn.style.display=selectedGuests===0?"none":"flex";
plusBtn.style.display=selectedGuests===maxGuests?"none":"flex";
}

function updateConfirm(){
let txt="";

if(selectedGuests===0){
txt="Hola Lily, lamentablemente no podremos asistir. Gracias por la invitación 💚";
}else if(selectedGuests===1){
txt="Hola Lily, confirmo asistencia. Seré 1 persona 💚";
}else{
txt="Hola Lily, confirmamos asistencia. Seremos "+selectedGuests+" personas 💚";
}

confirmBtn.href="https://wa.me/5493875245214?text="+encodeURIComponent(txt);
}

function observeReveal(){
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.15});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});
}