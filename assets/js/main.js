
// Auto-highlight active nav link based on current path
(function () {
  const path = window.location.pathname.replace(/\/$/, '');
  const links = document.querySelectorAll('#navLinks a');
  links.forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (href && path.endsWith(href)) a.classList.add('active');
    if ((path === '' || path.endsWith('/index.html')) && href.endsWith('/index.html')) {
      a.classList.add('active');
    }
  });

  // Bootstrap form validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
