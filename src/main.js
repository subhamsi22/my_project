
//first text 
var hh = document.getElementById("hh");
const a = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let all  = 0;
  function chnagew(){
    if(all<a.length){
      hh.textContent = a[all];

    }
    if(a[all] === "w"){
      clearInterval(intervell);
    }
    all++;
  }
 
  // escond 
  var hh2 = document.getElementById("hh2");
const a2 = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w"];
  let all2  = 0;
  function chnagew2(){
    if(all2<a2.length){
      hh2.textContent = a2[all2];

    }
    if(a2[all2] === "e"){
      clearInterval(intervell2);
    }
    all2++;
  }
  
//3rd text 

var hh3 = document.getElementById("hh3");
const a3 = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w"];
  let all3  = 0;
  function chnagew3(){
    if(all3<a3.length){
      hh3.textContent = a3[all3];

    }
    if(a3[all3] === "l"){
      clearInterval(intervell3);
    }
    all3++;
  }
 
  // 4rd text 


  var hh4 = document.getElementById("hh4");
const a4 = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w"];
  let all4  = 0;
  function chnagew4(){
    if(all4<a4.length){
      hh4.textContent = a4[all4];

    }
    if(a4[all4] === "c"){
      clearInterval(intervell4);
    }
    all4++;
  }
  
  // 5th text 

  
  var hh5 = document.getElementById("hh5");
const a5 = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w"];
  let all5  = 0;
  function chnagew5(){
    if(all5<a5.length){
      hh5.textContent = a5[all5];

    }
    if(a5[all5] === "o"){
      clearInterval(intervell5);
    }
    all5++;
  }
   
  // 6th text 
  
var hh6 = document.getElementById("hh6");
const a6 = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let all6  = 0;
  function chnagew6(){
    if(all6<a6.length){
      hh6.textContent = a6[all6];

    }
    if(a6[all6] === "m"){
      clearInterval(intervell6);
    }
    all6++;
  }



// 7th letter 

var hh7 = document.getElementById("hh7");
let all7 = 0;
function chnagew7(){
  if(all7 < a.length){
    hh7.textContent = a[all7];
  }
  if(a[all7] === "i"){
    clearInterval(intervell7);
  }
  all7++;
}

// for e 
var hhe = document.getElementById("hhe");
let alle = 0;
function chnagewe(){
  if(alle < a.length){
    hhe.textContent = a[alle];
  }
  if(a[alle] === "e"){
    clearInterval(intervelle);
  }
  alle++;
}
// 8th 

var hh8 = document.getElementById("hh8");
let all8 = 0;
function chnagew8(){
  if(all8 < a.length){
    hh8.textContent = a[all8];
  }
  if(a[all8] === "t"){
    clearInterval(intervell8);
  }
  all8++;
}
//9th

var hh9 = document.getElementById("hh9");
let all9 = 0;
function chnagew9(){
  if(all9 < a.length){
    hh9.textContent = a[all9];
  }
  if(a[all9] === "z"){
    clearInterval(intervell9);
  }
  all9++;
}
//10th 
var hh10 = document.getElementById("hh10");
let all10 = 0;
function chnagew10(){
  if(all10 < a.length){
    hh10.textContent = a[all10];
  }
  if(a[all10] === "f"){
    clearInterval(intervell10);
  }
  all10++;
}
//11th 
var hh11 = document.getElementById("hh11");
let all11 = 0;
function chnagew11(){
  if(all11 < a.length){
    hh11.textContent = a[all11];
  }
  if(a[all11] === "i"){
    clearInterval(intervell11);
  }
  all11++;
}
//12
var hh12 = document.getElementById("hh12");
let all12 = 0;
function chnagew12(){
  if(all12 < a.length){
    hh12.textContent = a[all12];
  }
  if(a[all12] === "z"){
    clearInterval(intervell12);
  }
  all12++;
}
//13th 


var hh13 = document.getElementById("hh13");
let all13 = 0;
function chnagew13(){
  if(all13 < a.length){
    hh13.textContent = a[all13];
  }
  if(a[all13] === "z"){
    clearInterval(intervell13);
  }
  all13++;
}



















 setTimeout(() => {
  const intervell  = setInterval(chnagew, 60);
}, 0);
setTimeout(() => {
  const intervell2 = setInterval(chnagew2, 120);
}, 200);

setTimeout(() => {
  const intervell3 = setInterval(chnagew3, 140);
}, 300);

setTimeout(() => {
  const intervell4 = setInterval(chnagew4, 160);
}, 400);

setTimeout(() => {
  const intervell5 = setInterval(chnagew5, 220);
}, 500);

setTimeout(() => {
  const intervell6 = setInterval(chnagew6, 240);
}, 600);

setTimeout(() => {
  const intervelle = setInterval(chnagewe, 260);
}, 200);

setTimeout(() => {
  const intervell7 = setInterval(chnagew7, 60);
}, 800);

setTimeout(() => {
  const intervell8 = setInterval(chnagew8, 60);
}, 900);

setTimeout(() => {
  const intervell9 = setInterval(chnagew9, 60);
}, 1000);

setTimeout(() => {
  const intervell10 = setInterval(chnagew10, 60);
}, 1100);

setTimeout(() => {
  const intervell11 = setInterval(chnagew11, 60);
}, 1200);

setTimeout(() => {
  const intervell12 = setInterval(chnagew12, 60);
}, 1300);

setTimeout(() => {
  const intervell13 = setInterval(chnagew13, 60);
}, 1400);



// close the loader 
var animation = document.getElementById("animation");
var main = document.getElementById("main");
window.addEventListener("load", () => {
  

  setTimeout(() => {
    animation.style.opacity = "0";
    animation.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      animation.style.display = "none";
      main.style.display="flex";
    }, 300);

  }, 5000);
});


// video scroll 
gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("video");

video.pause();

video.addEventListener("loadeddata", () => {

  let obj = { value: 0 };

  gsap.to(obj, {
    value: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#banner",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,     
      pin: true
    },
    onUpdate: () => {
      video.currentTime = video.duration * obj.value;
    }
  });

});
gsap.to("#clientbox",{
  opacity:1,
  scrollTrigger:{
    trigger:"#clientbox",
    start:"top 220",
    end:"bottom 30",
    scrub:true,
    // markers:true,
    delay:2,
    stragger:0.5
  }
})

