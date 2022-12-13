(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// показ пароля
$("body").on("click", ".password-checkbox", function () {
  if ($(this).is(":checked")) {
    $("#validationCustom07").attr("type", "text");
  } else {
    $("#validationCustom07").attr("type", "password");
  }
});
const txt = document.querySelector(".txt");
let item = 0;

let fun = setInterval(function () {
  item += 1;
  if (item === 11) {
    document.getElementById("au").play();
    item -= 10;
  }
  txt.innerHTML = item;
}, 1000);
