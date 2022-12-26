// Bar Menu Open, MOBILE MENU
window.onload;

const closeBtn = document.getElementById("closeBarBtn");
const openBtn = document.getElementById("openBarBtn");
const show = document.getElementById("mobileHeader");

openBtn.addEventListener("click", () => {
  show.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  show.classList.remove("show");
});

// middle description box

const useLiButton = document.getElementById("useLi");
const littleDescrButton = document.getElementById("littleDescr");
const conditionsButton = document.getElementById("conditions");

const useLiBox = document.getElementById("useLiBox");
const littleDescrBox = document.getElementById("littleDescrBox");
const conditionsBox = document.getElementById("conditionsBox");

const x = window.matchMedia("(max-width: 768px)");
const img = document.getElementById("snupImage");

function myFunction(x) {
  useLiButton.addEventListener("click", () => {
    useLiButton.classList.add("active");
    useLiBox.classList.add("show");
    littleDescrBox.classList.remove("show");
    conditionsBox.classList.remove("show");
    littleDescrButton.classList.remove("active");
    conditionsButton.classList.remove("active");

    if (x.matches) {
      img.style.display = "none";
    }
  });

  littleDescrButton.addEventListener("click", () => {
    littleDescrButton.classList.add("active");
    littleDescrBox.classList.add("show");
    useLiBox.classList.remove("show");
    conditionsBox.classList.remove("show");
    useLiButton.classList.remove("active");
    conditionsButton.classList.remove("active");

    if (x.matches) {
      img.style.display = "none";
    }
  });

  conditionsButton.addEventListener("click", () => {
    conditionsButton.classList.add("active");
    conditionsBox.classList.add("show");
    useLiButton.classList.remove("active");
    useLiBox.classList.remove("show");
    littleDescrButton.classList.remove("active");
    littleDescrBox.classList.remove("show");

    if (x.matches) {
      img.style.display = "flex";
    }
  });
}

myFunction(x);
x.addListener(myFunction);

// Hide Image

const y = window.matchMedia("(min-width: 768px)");

function myFoo(y) {
  if (y.matches) {
    img.style.display = "flex";
  } else {
    img.style.display = "none";
  }
}

myFoo(y);
y.addListener(myFoo);

// SHOW MY DROP DOWN MENU

const dropBTN = document.getElementById("dropMenuBTN");
const showDropDownMenu = document.getElementById("hidenUL");

function openMYmenu() {
  dropBTN.addEventListener(
    "click",
    () => {
      showDropDownMenu.classList.add("showUl");
      dropBTN.style.transform = "rotate(0deg)";
      useLiButton.style.display = "flex";
      littleDescrButton.style.display = "flex";
      conditionsButton.style.display = "flex";
    },

    useLiButton.addEventListener("click", () => {
      showDropDownMenu.classList.remove("showUl");
      dropBTN.style.transform = "rotate(180deg)";
      littleDescrButton.style.display = "none";
      conditionsButton.style.display = "none";
    }),

    littleDescrButton.addEventListener("click", () => {
      showDropDownMenu.classList.remove("showUl");
      dropBTN.style.transform = "rotate(180deg)";
      useLiButton.style.display = "none";
      conditionsButton.style.display = "none";
    }),

    conditionsButton.addEventListener("click", () => {
      showDropDownMenu.classList.remove("showUl");
      dropBTN.style.transform = "rotate(180deg)";
      useLiButton.style.display = "none";
      littleDescrButton.style.display = "none";
    })
  );
}

//Show Modal Window

const BTN1 = document.getElementById("openButton1");
const BTN2 = document.getElementById("openButton2");
const BTN3 = document.getElementById("openButton3");

const openBox = document.getElementById("modalBuyBoxOpen");
const closeBox = document.getElementById("closeBuyModal");

BTN1.addEventListener("click", () => {
  openBox.classList.add("showBuyBox");
});

BTN2.addEventListener("click", () => {
  openBox.classList.add("showBuyBox");
});

BTN3.addEventListener("click", () => {
  openBox.classList.add("showBuyBox");
});

closeBox.addEventListener("click", () => {
  openBox.classList.remove("showBuyBox");
});

// SCROLL DOWN

function scrollDown() {
  const about_snup = document.getElementById("aboutSnup");
  about_snup.scrollIntoView();
}

function scrollDown2() {
  const use_snup = document.getElementById("useSnup");
  use_snup.scrollIntoView();
}
