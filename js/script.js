function menubut() {
    var ulmenu = document.getElementById("mylinks");
    if (ulmenu.style.display === "flex") {
      ulmenu.style.display = "none";
    } else {
      ulmenu.style.display = "flex";
    }
  }