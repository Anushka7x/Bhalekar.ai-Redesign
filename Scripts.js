
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('Bhalekar-header-placeholder').innerHTML = data;
    })
    .catch(err => console.error("Navbar load error:", err));

  // Load footer
  fetch('Footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('Bhalekar-footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error("Footer load error:", err));