let currentFontsize = 1;

function changeFontSize(how) {
  let area = document.getElementsByTagName("html")[0];
  currentFontsize = currentFontsize + how;
  area.style.fontSize = currentFontsize + "rem";
}
