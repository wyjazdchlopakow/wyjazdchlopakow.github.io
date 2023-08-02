const stoliceList = document.getElementById("stoliceList");
const odwiedzoneStolice = ["Toruń", "Wrocław", "Lublin", "Kraków", "Warszawa", "Opole", "Poznań"];

stoliceList.addEventListener("click", (event) => {
  const clickedLi = event.target;
  clickedLi.classList.toggle("visited");
});

// Odfiltrowanie nieodwiedzonych stolic i dodanie klasy "visited" tylko dla odwiedzonych
const liElements = stoliceList.getElementsByTagName("li");
for (const li of liElements) {
  const stolica = li.textContent.trim();
  if (odwiedzoneStolice.includes(stolica)) {
    li.classList.add("visited");
  }
}
