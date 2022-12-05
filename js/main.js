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
