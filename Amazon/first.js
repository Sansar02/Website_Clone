const imageContainer = document.querySelector(".image-container");
const imgEl = document.querySelectorAll(".image-container img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentValue = 1;
let timeout;

prev.addEventListener("click", () => {
    currentValue--;
    updateImg();
    clearTimeout(timeout)
})

next.addEventListener("click", () => {
    currentValue++;
    updateImg();
    clearInterval(timeout);
})

updateImg();
function updateImg() {
    if (currentValue > imgEl.length) {
        currentValue = 1;
    } else if (currentValue < 1) {
        currentValue = imgEl.length;
    }
    imageContainer.style.transform = `translateX(-${(currentValue - 1) * 1536}px)`
    timeout = setTimeout(() => {
        currentValue++;
        updateImg();
    },2000)
}

const allimg = document.querySelectorAll(".slide1 img");
const slide1 = document.querySelector(".slide1");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
let indexvalue = 1;

first.addEventListener("click", () => {
    indexvalue--;
    clearTimeout(timeout);
    updatebook();
})

second.addEventListener("click", () => {
    indexvalue++;
    clearTimeout(timeout);
    updatebook();
})

updatebook();
function updatebook() {
    if (indexvalue > allimg.length) {
        indexvalue = 1;
    } else if (indexvalue < 1) {
        indexvalue = allimg.length;
    }
    slide1.style.transform = `translateX(-${(indexvalue - 1) * 170}px)`;
    timeout = setTimeout(() => {
        indexvalue++;
        updatebook();
    },2000)
}

const secondimg = document.querySelectorAll(".slide2 img");
const slide2 = document.querySelector(".slide2");
const third = document.querySelector(".third");
const four = document.querySelector(".four");
let bookvalue = 1;

third.addEventListener("click", () => {
    bookvalue--;
    clearTimeout(timeout);
    lastbook();
})

four.addEventListener("click", () => {
    bookvalue++;
    clearTimeout(timeout);
    lastbook();
})

lastbook();
function lastbook() {
    if (bookvalue > secondimg.length) {
        bookvalue = 1;
    } else if (bookvalue < 1) {
        bookvalue = secondimg.length;
    }
    slide2.style.transform = `translateX(-${(bookvalue - 1) * 170}px)`;
    timeout = setTimeout(() => {
        bookvalue++;
        lastbook();
    },3000)
}
