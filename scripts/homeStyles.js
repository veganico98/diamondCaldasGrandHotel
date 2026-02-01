(function () {
    const header = document.querySelector("header");
    const toggle = document.querySelector(".nav-toggle");
    const overlay = document.querySelector(".nav-overlay");
    const links = document.querySelectorAll(".nav-links a");

    if (!header || !toggle || !overlay) return;

    function openMenu() {
      header.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    function isOpen() {
      return header.classList.contains("nav-open");
    }

    toggle.addEventListener("click", () => {
      isOpen() ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);

    links.forEach(link => {
      link.addEventListener("click", () => {
        // fecha apenas no mobile
        if (window.matchMedia("(max-width: 768px)").matches) {
          closeMenu();
        }
      });
    });

    // ESC fecha
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) closeMenu();
    });

    // se redimensionar pra desktop, garante que o scroll volta
    window.addEventListener("resize", () => {
      if (!window.matchMedia("(max-width: 768px)").matches && isOpen()) {
        closeMenu();
      }
    });
  })();
