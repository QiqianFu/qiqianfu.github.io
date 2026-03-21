(function () {
  "use strict";

  var NAV_HEIGHT = 70;
  var SCROLL_PER_LINE = 70;
  var BOTTOM_PADDING = 200;

  var sections = document.querySelectorAll(".demo-scroll-section");
  var revealItems = document.querySelectorAll(".reveal-on-scroll");

  function setSectionHeights() {
    sections.forEach(function (section) {
      var lines = section.querySelectorAll(".tl");
      var h = window.innerHeight + lines.length * SCROLL_PER_LINE + BOTTOM_PADDING;
      section.style.minHeight = h + "px";
    });
  }

  setSectionHeights();

  function updateSections() {
    sections.forEach(function (section) {
      var lines = section.querySelectorAll(".tl");
      if (!lines.length) return;

      var rect = section.getBoundingClientRect();
      var scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      var scrolled = -(rect.top - NAV_HEIGHT);
      var progress = Math.max(0, Math.min(1, scrolled / scrollable));

      var count = lines.length;
      lines.forEach(function (line, i) {
        var threshold = (i + 0.5) / count;
        if (progress >= threshold) {
          line.classList.add("visible");
        } else {
          line.classList.remove("visible");
        }
      });
    });
  }

  function checkReveals() {
    revealItems.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82) {
        el.classList.add("revealed");
      }
    });
  }

  function onScroll() {
    updateSections();
    checkReveals();
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  onScroll();

  window.addEventListener("resize", setSectionHeights);

  // Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll("[data-lightbox]").forEach(function (item) {
    item.addEventListener("click", function () {
      var img = this.querySelector("img");
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox) {
      lightbox.classList.remove("active");
    }
  });
})();
