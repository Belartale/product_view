//! form valid
$(document).ready(function () {
  $(".form_parameters").validate();
});

//! arrow button of input
let plusButton = document.getElementById("control-input-plus");
let minusButton = document.getElementById("control-input-minus");
let input = document.getElementById("form_parameters__qty");
plusButton.addEventListener("click", function () {
  if (input.value == "") {
    input.value = 1;
  } else {
    input.value = parseInt(input.value) + 1;
  }
});
minusButton.addEventListener("click", function () {
  if (input.value <= 1) {
    return;
  } else {
    input.value = input.value - 1;
  }
});

input.addEventListener("input", function () {
  if (input.value <= 1) {
    input.value = 1;
  }
  console.log(input.value);
});
