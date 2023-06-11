/* ==================== Dots section ==================== */  
let dots = document.querySelector(".dots");
let setting = document.querySelector(".setting");

dots.addEventListener("mouseover", () => {
    setting.classList.remove("sett")
})

dots.addEventListener("mouseout", () => {
    setting.classList.add("sett")
})

/* ==================== Microphone section ==================== */  
let mics = document.querySelector(".mics");
let searchvoice = document.querySelector(".search_voice");

mics.addEventListener("mouseover", () => {
    searchvoice.classList.remove("sett")
})

mics.addEventListener("mouseout", () => {
    searchvoice.classList.add("sett")
})

/* ==================== Glass Section ==================== */  
let glass = document.querySelector(".glass");
let searchDisplay = document.querySelector(".search_display");

glass.addEventListener("mouseover", () => {
    searchDisplay.classList.remove("sett")
})

glass.addEventListener("mouseout", () => {
    searchDisplay.classList.add("sett")
})