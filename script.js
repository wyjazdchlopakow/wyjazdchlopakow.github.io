const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const result = document.getElementById("result");

let spinning = false;
let selectedItem;

spinBtn.addEventListener("click", () => {
    if (!spinning) {
        spinning = true;
        selectedItem = null;
        wheel.style.animation = "spin 3s ease-out";
        setTimeout(() => {
            wheel.style.animation = "";
            spinning = false;
            showResult();
        }, 3000);
    }
});

function showResult() {
    if (selectedItem === null) {
        const items = document.querySelectorAll(".wheel-item");
        const randomIndex = Math.floor(Math.random() * items.length);
        selectedItem = items[randomIndex].textContent;
    }

    result.textContent = `Selected: ${selectedItem}`;
}
