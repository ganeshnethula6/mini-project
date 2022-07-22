function changeTheme() {
  var s = document.getElementById("pageStyle").getAttribute("href");
  if (s == "./assets/css/miniProjectlight.css") {
    document
      .getElementById("pageStyle")
      .setAttribute("href", "./assets/css/miniProjectdark.css");
  } else if (s == "./assets/css/miniProjectdark.css") {
    document
      .getElementById("pageStyle")
      .setAttribute("href", "./assets/css/miniProjectlight.css");
  }
}
