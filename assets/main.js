(function () {
  // Número de WhatsApp de la tienda, formato internacional sin "+" (ej. "573001234567").
  var WHATSAPP = "";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menú móvil */
  var menuBtn = document.querySelector(".header__menu");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menuBtn.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
  }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Carrusel del hero: el fondo toma el color de cada foto */
  var hero = document.querySelector(".hero");
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var dots = Array.prototype.slice.call(document.querySelectorAll(".dots button"));
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var current = 0, timer = null;

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) {
      var on = k === current;
      s.classList.toggle("is-active", on);
      s.setAttribute("aria-hidden", on ? "false" : "true");
      s.querySelectorAll("a, button").forEach(function (el) { el.tabIndex = on ? 0 : -1; });
    });
    dots.forEach(function (d, k) { d.setAttribute("aria-selected", k === current ? "true" : "false"); });
    var bg = slides[current].getAttribute("data-bg");
    hero.style.setProperty("--hero-bg", bg);
    themeMeta.setAttribute("content", bg);
  }
  function play() { if (!reduceMotion) { stop(); timer = setInterval(function () { show(current + 1); }, 6000); } }
  function stop() { clearInterval(timer); }

  document.querySelector(".arrow--prev").addEventListener("click", function () { show(current - 1); play(); });
  document.querySelector(".arrow--next").addEventListener("click", function () { show(current + 1); play(); });
  dots.forEach(function (d, k) { d.addEventListener("click", function () { show(k); play(); }); });
  var stage = document.querySelector(".hero__stage");
  stage.addEventListener("mouseenter", stop);
  stage.addEventListener("mouseleave", play);
  stage.addEventListener("focusin", stop);
  stage.addEventListener("focusout", play);

  // Deslizar con el dedo
  var x0 = null;
  stage.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) { show(current + (dx < 0 ? 1 : -1)); play(); }
    x0 = null;
  });
  show(0);
  play();

  /* ---------- Chispas de colores alrededor del producto */
  var box = document.querySelector(".sprinkles");
  var colors = ["#e20047", "#9ad8f7", "#ffd84a", "#fff8f1", "#3b0a1f", "#fe77b5"];
  var seed = 7;
  function rand() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  var html = "";
  for (var i = 0; i < 46; i++) {
    // Solo a los lados y abajo, para no tapar el titular
    var side = i % 2 ? rand() * 24 : 76 + rand() * 24;
    var top = 30 + rand() * 62;
    var dot = rand() < 0.25;
    var w = dot ? 10 + rand() * 6 : 6 + rand() * 3;
    var h = dot ? w : 18 + rand() * 12;
    html += '<span class="sprinkle" style="left:' + side.toFixed(1) + "%;top:" + top.toFixed(1) + "%;--w:" + w.toFixed(0) + "px;--h:" + h.toFixed(0) +
      "px;--c:" + colors[Math.floor(rand() * colors.length)] + ";--r:" + Math.floor(rand() * 180) + "deg;--d:-" + (rand() * 6).toFixed(1) + 's"></span>';
  }
  box.innerHTML = html;

  /* ---------- Carrito de demostración */
  var count = 0, toastTimer;
  var cartBtn = document.querySelector(".cart");
  var badge = document.querySelector(".cart__count");
  var toast = document.querySelector(".toast");
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-add]");
    if (!btn) return;
    count += 1;
    badge.textContent = count;
    badge.hidden = false;
    badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
    cartBtn.setAttribute("aria-label", "Carrito, " + count + (count === 1 ? " producto" : " productos"));
    toast.querySelector("span").textContent = btn.getAttribute("data-add") + " se agregó al carrito";
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; }, 2600);
  });

  /* ---------- WhatsApp */
  if (WHATSAPP) {
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola Candy Lab, estoy buscando ");
      a.target = "_blank"; a.rel = "noopener";
    });
  }
})();
