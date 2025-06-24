
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




  const servicesLink = document.getElementById("servicesDropdown");

  servicesLink.addEventListener("click", function (e) {
    if (window.innerWidth >= 992) {
      // Prevent redirect on desktop — just toggle dropdown
      e.preventDefault();
    } else {
      // Allow default behavior: navigate to service.html
      window.location.href = "service.html";
    }
  });

  // Submenu toggling for desktop
  document.querySelectorAll(".mega-menu-list a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const submenuId = this.getAttribute("data-submenu");
      document.querySelectorAll(".submenu-content").forEach(el => el.classList.add("d-none"));
      const target = document.getElementById(submenuId);
      if (target) target.classList.remove("d-none");
    });
  });

