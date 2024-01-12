window.addEventListener("load", function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation");
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          const invalidField = form.querySelector(":invalid:not(fieldset)");
          if (invalidField) invalidField.focus();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
});
