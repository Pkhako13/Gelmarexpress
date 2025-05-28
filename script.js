document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const product = document.getElementById("product").value;
      const quantity = document.getElementById("quantity").value;

      const message = `Thank you, ${name}! Your order for ${quantity} x ${product} has been received. We’ll contact you soon.`;

      document.getElementById("confirmationMessage").textContent = message;
      form.reset();
    });
  }
});
