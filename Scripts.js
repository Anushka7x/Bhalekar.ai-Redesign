fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('Bhalekar-header-placeholder').innerHTML = data;

    // Re-initialize dropdowns manually
    const dropdownTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
    dropdownTriggerList.map(function (dropdownTriggerEl) {
      return new bootstrap.Dropdown(dropdownTriggerEl);
    });
  });

  // Load footer
  fetch('Footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('Bhalekar-footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error("Footer load error:", err));

