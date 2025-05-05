// script.js

document.getElementById("btn-ipod5").addEventListener("click", function () {
    const infoBox = document.getElementById("info-ipod5");
    if (infoBox.style.display === "none" || infoBox.style.display === "") {
      infoBox.style.display = "block";
    } else {
      infoBox.style.display = "none";
    }
  });