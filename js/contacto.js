const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "service_j8i7mtt";
  const templateID = "template_v52b1cl";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar ahora";
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email enviado",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    (err) => {
      btn.value = "Enviar ahora";
      alert(JSON.stringify(err));
    }
  );
});
