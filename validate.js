(() => {
  'use strict';
  
  const form = document.getElementById('registrationForm');
  
  form.addEventListener('submit', (event) => {
    let isValid = true;
    
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');
    
    
    inputs.forEach(input => {
      if (input.value.trim().length < 3) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }

      if (input.type === 'email' && !validateEmail(input.value)) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        isValid = false;
      }
    });
    
    textareas.forEach(textarea => {
      if (textarea.value.trim().length < 10) {
        textarea.classList.add('is-invalid');
        textarea.classList.remove('is-valid');
        isValid = false;
      } else {
        textarea.classList.remove('is-invalid');
        textarea.classList.add('is-valid');
      }
    });

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("Datos enviados");
    }
    
    form.classList.add('was-validated');
  }, false);
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
})();
