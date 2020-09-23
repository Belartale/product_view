@@include("settings.js");
@@include("jq-slider.js");
@@include("jquery.raty.js");
@@include("form-validation.js");

//! settings raty
$(".control__rating_star").raty({
  path: "./img",
  space: false,
  starType: "img",
  starOff: "star-off.webp",
  starOn: "star-on.webp",
});

//! burger
let nav = document.querySelector("nav");
let burgerButton = document.querySelectorAll(".header__burger-button");

let navBurgerButtonTrue = document.querySelector(".header__burger-button-true");

burgerButton.forEach((element) => {
  element.addEventListener(
    "click",
    () => {
      nav.classList.toggle("is-active");
      navBurgerButtonTrue.classList.toggle(
        "header__burger-button-true--display-none"
      );
    },
    false
  );
});

//! heartExcuse heartExcuseButton
heartExcuseButton.addEventListener(
  "click",
  () => {
    if (heartExcuseButton.classList.contains("on")) {
      heartExcuseButton.classList.remove("on");
      heartExcuseBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px"><image x="0px" y="0px" width="18px" height="16px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAMAAAAs2N9uAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEVFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkdFRkf///8FyYTLAAAAD3RSTlMAEVV3ZkTuIsy7md2IM6qgLGHWAAAAAWJLR0QQlbINLAAAAAd0SU1FB+QJFxQ5IkEUOZEAAAB9SURBVBjTVY9bFsQgCEODKIi2w/53O6h92PzEcwkaAVDiTAgV5jIc2UPC0DoOFsPiTaHNTXqKBamA2cymOR+JAj8mwknLnR90K5DVD0l+xjJvhPq4unl6iYkO/3m+SZXVFce1S31lXqYbATiqqHTd32Zv0unbMF8f2nU+5A+OGwOmGkomXAAAAABJRU5ErkJggg=="></image></svg>`;
    } else {
      heartExcuseBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="16" viewBox="0 0 18 16"><image id="Слой_1" data-name="Слой 1" width="18" height="16" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAACzElEQVQ4jYWTTWwMYRjHfzszu2t3p7tdrW63EVpaylZKRTi1Log6IamjCyeCSFAXQXwdqa8TicSFi/hoE5GIcGmKbSIh0WpUsmwrWW26Y6ezMzuvzItV3//DzOSd5/29/+c/z/iEEALAMAzS6UGyY1kqdJ329nZ0XWem0oODDA8Py5WmpibaVqwov5Wgvr4+zp7r+WlTOBBg06pVbN+9i5xlceLkqTLku5a3tHDk2FF5oO95Oi26uw/TsaSZ1kyGmG1jRCI8KZg8M01S8+fxLveJkKqy1nFoMvJYqko2keDW2DhzGxu5eOE8arwyfrQqFKJjYIBCfz+FTAayWRqFy/z6Bh6+/0CyUGDL+Bj1c6opTU+Te/CASsOgIVnLo48fSbWk0Ly+O6pmI2wbxzTxaxrCdZl6/ZrYyAib/X4iU1PYfj+ZFy/wKQperJ9HR6mrqQG9QraseO2G6urwqSpqOIydz2Nms7iWRXFigmrDIGBZcl2USqAoIARKIIBr2+W8FC/5EXNaFgUqK5mVSBCIx3GLRfD5cE1TbvSceIeVTFM+K5pGdtkyCfEYSte2LobfvGF8x05iqRQ+TZOn+aNRWfRtOiRMwoXAH4vhb27m3ttRWpculaMgHXV2dnL9zh0yixYRqq2lmMtRsqyv8/EN7LnznGi6jh0Oczfy9b7/4AFZp3mXfXv3YBh5rj1+wqY5NcyLRrENAzUYlEWu4xCsrpaZFRyH+wsW8jkS5sjx4ySTyR8D+T2wK1eucuPmTbaubKOqp0e2okUi0o33Jc1Sidur1+DoOpcuXypDfgPNhK2PRln8dIDi5CSOYUBrK7fr65nGJwdwJuSPIE8eyAOu/JRjYyLBVDDIVVdQEYtx5vSp3yDljH7Vtq6usrt4Wxv9L19REYtKJ7/+yGV5jv6m3t5esW79BnHoULfI5/P/KhX/BHkaGhr6L0QIIb4ATjW1ORuEkIMAAAAASUVORK5CYII="/></svg>`;
      heartExcuseButton.classList.add("on");
    }
  },
  false
);

//todoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
