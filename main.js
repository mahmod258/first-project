let mainImg = document.getElementById("main-img");

let imgs = document.getElementsByClassName("imgs");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let thing = document.getElementById("mainImg");

let min = document.getElementById("min");
let plus = document.getElementById("plus");

let counterNumber = document.getElementById("counter-number");

let theCart = document.getElementById("the-cart");
let addedToCart = document.getElementById("added-to-cart");

function design(Img) {
  img1.style.cssText = `border:0px`;
  img2.style.cssText = `border:0px`;
  img3.style.cssText = `border: 0px`;
  img4.style.cssText = `border:0px`;
  Img.style.cssText = `
    border: 3px solid orange;
    `;
  let number = Img.id[3];
  thing.src = `images/image-product-${number}.jpg`;
}

function addto(d) {
  let counterValue = parseInt(counterNumber.innerHTML);

  if ((counterValue >= 0 && d == 1) || (d == -1 && counterValue > 0)) {
    counterNumber.innerHTML = counterValue + d;
  }
}
let sw = true;
function basket() {
  let theDisplay = addedToCart.style.display;
  if (sw) {
    addedToCart.style.display = "none";
  } else {
    addedToCart.style.display = "flex";
  }
  sw = !sw;
}
let theSubmit = document.getElementById("submit");
let theDetail = document.getElementById("detail");
let theSneakers = document.getElementById("sneakers");
let theSection = document.getElementById("section");
let howmuchSneaker1 = document.getElementById("howmuch-sneaker1");
let howmuchSneaker2 = document.getElementById("howmuch-sneaker2");

function submit() {
  if (parseInt(counterNumber.innerHTML) > 0) {
    theSection.style.display = `none`;
    theDetail.style.display = `flex`;
    theSneakers.innerHTML = counterNumber.innerHTML;
    howmuchSneaker2.innerHTML = counterNumber.innerHTML;
    howmuchSneaker1.style.display = `flex`;
  }
}
function deleter() {
  theDetail.style.display = `none`;
  theSection.style.display = `flex`;
  howmuchSneaker1.style.display = `none`;
}

let headerMenu2 = document.getElementById("header-menu2");

function theHeaderMenu() {
  headerMenu2.style.display = `block`;
}
function hide() {
  headerMenu2.style.display = `none`;
}
