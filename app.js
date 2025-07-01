  function generateColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const colorBox = document.getElementById("colorBox");
    colorBox.textContent = randomColor;
    colorBox.style.backgroundColor = randomColor;
    colorBox.style.color = getTextColor(randomColor);
  }

  function getTextColor(bgColor) {
    // Decide black or white text based on brightness
    const r = parseInt(bgColor.substr(1,2), 16);
    const g = parseInt(bgColor.substr(3,2), 16);
    const b = parseInt(bgColor.substr(5,2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "#000" : "#fff";
  }