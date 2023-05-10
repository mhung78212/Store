// Copy menu html
function copyMenu() {
    const dptCategory = document.querySelector(".dpt-cat"),
        dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    const navMenu = document.querySelector(".header-nav nav"),
        navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = navMenu.innerHTML;
}
copyMenu();

// Select language, money
const moneySelect = document.querySelector("#money-select"),
    moneyList = document.querySelectorAll("#money-list li"),
    moneyLabel = document.querySelector("#money-label");
moneySelect.addEventListener("click", (e) => {
    moneySelect.classList.toggle("action");
});
moneyList.forEach((moneyItem) => {
    moneyItem.addEventListener("click", () => {
        moneyLabel.innerText = moneyItem.querySelector("a").innerText;
    });
});

const langSelect = document.querySelector("#language-select"),
    langList = document.querySelectorAll("#language-list li"),
    langabel = document.querySelector("#language-label");
langSelect.addEventListener("click", (e) => {
    langSelect.classList.toggle("action");
});
langList.forEach((langItem) => {
    langItem.addEventListener("click", () => {
        langabel.innerText = langItem.querySelector("a").innerText;
    });
});

const menuBtn = document.querySelector(".trigger"),
    closeBtn = document.querySelector(".t-close"),
    addClass = document.querySelector(".site");
menuBtn.addEventListener("click", () => {
    addClass.classList.toggle("showmenu");
});
closeBtn.addEventListener("click", () => {
    addClass.classList.remove("showmenu");
});

const subMenu = document.querySelectorAll(".has-child .icon-small");
subMenu.forEach((menu) => menu.addEventListener("click", toogleMenu));
function toogleMenu(e) {
    e.preventDefault();
    subMenu.forEach((item) =>
        item != this
            ? item.closest(".has-child").classList.remove(".expand")
            : null,
    );
    if (this.closest(".has-child").classList != "expand")
        this.closest(".has-child").classList.toggle("expand");
}

function removeSelect(e) {
    if (!langSelect.contains(e.target)) {
        langSelect.classList.remove("action");
    }
    if (!moneySelect.contains(e.target)) {
        moneySelect.classList.remove("action");
    }
    if (!addClass.contains(e.target)) {
        addClass.classList.remove("showmenu");
    }
}
document.addEventListener("click", removeSelect);
document.addEventListener("scroll", removeSelect);

const showSearchBtn = document.querySelector(".menu-bottom .t-search"),
    closeSearchBtn = document.querySelector(".search-bottom .t-close"),
    searchBottom = document.querySelector(".search-bottom");

showSearchBtn.addEventListener("click", () => {
    searchBottom.classList.toggle("show-menu");
});
closeSearchBtn.addEventListener("click", () => {
    searchBottom.classList.toggle("show-menu");
});

// Deapartment menu
const dptShow = document.querySelector(".dpt-cat .dpt-trigger"),
    dptMenu = document.querySelector(".site");

dptShow.addEventListener("click", () => {
    dptMenu.classList.toggle("show-dpt");
});

// Range price

const rangeInput = document.querySelectorAll(".range-track input"),
    rangeText = document.querySelectorAll(".price-range span"),
    progress = document.querySelector(".progress"),
    priceMax = rangeInput[0].max,
    priceGap = 1000;

rangeInput.forEach((input) => {
    input.addEventListener("input", (event) => {
        let valMin = parseInt(rangeInput[0].value),
            valMax = parseInt(rangeInput[1].value);

        if (valMax - valMin < priceGap) {
            if (event.target.className === "range-min") {
                valMin = rangeInput[0].value = valMax - priceGap;
            } else {
                valMax = rangeInput[1].value = valMin + priceGap;
            }
        }
        let positionMin = (valMin / priceMax) * 100,
            positionMax = 100 - (valMax / priceMax) * 100;
        progress.style.left = positionMin + "%";
        progress.style.right = positionMax + "%";
        rangeText[0].innerText = valMin.toLocaleString();
        rangeText[1].innerText = valMax.toLocaleString();
    });
});
