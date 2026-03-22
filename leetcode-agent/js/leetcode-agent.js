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

  // --- Scroll-driven line reveal ---
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

  // --- Screenshot reveal ---
  function checkReveals() {
    revealItems.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82) {
        el.classList.add("revealed");
      }
    });
  }

  // --- Section snap (Apple-style transition) ---
  var isSnapping = false;
  var lastScrollY = window.scrollY;

  function checkSnap() {
    if (isSnapping) return;

    var currentY = window.scrollY;
    var scrollingDown = currentY > lastScrollY + 1;
    lastScrollY = currentY;

    if (!scrollingDown) return;

    // Hero → Demo 1: once hero scrolls past 30% of viewport, snap to demo 1
    var hero = document.querySelector(".hero-full");
    if (hero && sections.length > 0) {
      var heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom > 0 && heroRect.bottom < window.innerHeight * 0.7) {
        isSnapping = true;
        var targetY = window.scrollY + sections[0].getBoundingClientRect().top - NAV_HEIGHT + 1;
        window.scrollTo({ top: targetY, behavior: "smooth" });
        setTimeout(function () { isSnapping = false; }, 1200);
        return;
      }
    }

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var lines = section.querySelectorAll(".tl");
      if (!lines.length) continue;

      var rect = section.getBoundingClientRect();
      var scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) continue;

      var scrolled = -(rect.top - NAV_HEIGHT);
      var progress = Math.max(0, Math.min(1, scrolled / scrollable));

      // All lines shown and we've entered the bottom gap zone
      if (progress >= 0.96 && rect.bottom > 0) {
        var nextEl = section.nextElementSibling;
        if (nextEl) {
          isSnapping = true;
          var targetY = window.scrollY + nextEl.getBoundingClientRect().top - NAV_HEIGHT + 1;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          setTimeout(function () { isSnapping = false; }, 1200);
          return;
        }
      }
    }
  }

  // --- Unified scroll handler ---
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateSections();
        checkReveals();
        checkSnap();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateSections();
  checkReveals();

  window.addEventListener("resize", setSectionHeights);

  // --- Lightbox ---
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
