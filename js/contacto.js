const btn = document.getElementById('button');

document.getElementById('nombre')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_v52b1cl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar ahora';
      alert('Enviado!!');
    }, (err) => {
      btn.value = 'Enviar ahora';
      alert(JSON.stringify(err));
    });
});