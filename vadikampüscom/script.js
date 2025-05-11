// script.js
//Navbarı Tüm sayfalara eklemek için hazır kodlar.
document.addEventListener("DOMContentLoaded", function () {
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error("Navbar yüklenemedi.");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => {
      console.error("Hata:", error);
    });
});
