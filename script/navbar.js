var menu = document.getElementById("bar");
var item = document.getElementById("items");

item.style.right = "-300px";
menu.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

function logOut(){
  window.location.href="../index.html";
}