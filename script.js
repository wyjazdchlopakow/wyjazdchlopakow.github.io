const stoliceList = document.getElementById("stoliceList");

stoliceList.addEventListener("click", (event) => {
  const clickedLi = event.target;
  clickedLi.classList.toggle("visited");
});
