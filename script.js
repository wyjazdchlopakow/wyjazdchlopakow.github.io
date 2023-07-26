const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const result = document.getElementById("result");

let spinning = false;
let selectedItem;

spinBtn.addEventListener("click", () => {
    if (!spinning) {
        spinning = true;
        selectedItem = null;
        const spinDuration = 3000; // 3 seconds
        const degrees = 1080 + Math.floor(Math.random() * 1080); // Spin 3-6 full rotations
        wheel.style.transition = `transform ${spinDuration}ms ease-out`;
        wheel.style.transform = `rotate(${degrees}deg)`;
        setTimeout(() => {
            wheel.style.transition = "none";
            spinning = false;
            showResult();
        }, spinDuration);
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
