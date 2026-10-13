(function () {
  // Número de WhatsApp de la tienda, formato internacional sin "+" (ej. "573001234567").
  var WHATSAPP = "";

  // Menú móvil
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

  // Cinta: duplicar el contenido para que el desplazamiento no tenga cortes
  var track = document.querySelector(".ribbon__track");
  if (track) track.innerHTML += track.innerHTML;

  // Carrito de demostración
  var count = 0;
  var cartBtn = document.querySelector(".cart");
  var badge = document.querySelector(".cart__count");
  var toast = document.querySelector(".toast");
  var timer;
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
    clearTimeout(timer);
    timer = setTimeout(function () { toast.hidden = true; }, 2600);
  });

  // Enlaces de WhatsApp
  if (WHATSAPP) {
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola Candy Lab, estoy buscando ");
      a.target = "_blank"; a.rel = "noopener";
    });
  }
})();
