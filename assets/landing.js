(function () {
  var C = window.CandyLab, h = React.createElement;

  // Enlace de WhatsApp de la banda de cierre: pon el número de la tienda (formato https://wa.me/57XXXXXXXXXX).
  var WHATSAPP_URL = "#";

  // Los productos destacados. PENDIENTE: reemplazar por los del Instagram de Candy Lab
  // (nombre tal como viene en el empaque, foto propia en assets/img/ y precio real).
  // Por ahora usan los productos de ejemplo y las fotos de relleno del sistema de diseño.
  var PRODUCTS = [
    { name: "Starbucks Caramel Macchiato Zero", category: "Creamers", price: 42900, image: "assets/img/iced-latte.jpg", sticker: "Importado", stickerTone: "cotton" },
    { name: "Gomitas surtidas, bolsa grande", category: "Dulces", price: 23900, was: 29900, image: "assets/img/gummies-white.jpg", sticker: "-20%", stickerTone: "cherry" },
    { name: "Chupetas de corazón arcoíris", category: "Dulces", price: 9900, image: "assets/img/heart-lollipop.jpg", sticker: "Favorito", stickerTone: "bubblegum" }
  ];

  var CATEGORIES = [
    { label: "Gomitas", image: "assets/img/gummy-bears.jpg", href: "#favoritos" },
    { label: "Creamers", image: "assets/img/iced-latte.jpg", href: "#favoritos" },
    { label: "Chupetas", image: "assets/img/heart-lollipop.jpg", href: "#favoritos" },
    { label: "Suplementos", image: "assets/img/vitamins.jpg", href: "#favoritos" },
    { label: "Makeup", image: "assets/img/makeup-brushes.jpg", href: "#favoritos" },
    { label: "Mugs", image: "assets/img/pink-mug.jpg", href: "#favoritos" }
  ];

  var STEPS = [
    { t: "Elige tus antojos", d: "Recorre la tienda por categoría y agrega al carrito lo que se te antoje." },
    { t: "Paga en línea", d: "Finaliza tu compra en la tienda con un pago seguro." },
    { t: "Recíbelo en tu casa", d: "Enviamos a toda Colombia desde Barranquilla." }
  ];

  function App() {
    var cart = React.useState(0), toast = React.useState(null), timer = React.useRef(0);

    function add(p) {
      cart[1](function (n) { return n + 1; });
      toast[1](p.name + " agregado a tu pedido");
      clearTimeout(timer.current);
      timer.current = setTimeout(function () { toast[1](null); }, 2400);
    }

    return h("div", null,
      h(C.AnnouncementBar, null),
      h("main", { className: "home" },
        h(C.Hero, {
          header: h(C.SiteHeader, { logoSrc: "assets/img/candy-lab-wordmark.png", cartCount: cart[0] }),
          image: "assets/img/candy-store.jpg",
          title: "La vitrina de USA en tu casa",
          lede: "Gomitas, chocolates, creamers y snacks que no consigues aquí. Compra en línea y te llega a cualquier ciudad de Colombia.",
          actions: [
            h(C.Button, { key: "a", variant: "primary", size: "lg", href: "#favoritos" }, "Ver la tienda"),
            h(C.Button, { key: "b", variant: "secondary", size: "lg", href: "#como-pedir" }, "Cómo hacer un pedido")
          ],
          side: h(C.AntojoMenu, {
            title: "¿Qué se te antoja?",
            items: CATEGORIES,
            action: h(C.Button, { variant: "quiet", href: "#favoritos" }, "Ver todas las categorías")
          })
        }),

        h("section", { className: "sec", id: "favoritos" },
          h("div", { className: "sec__head" },
            h("div", null,
              h("h2", { className: "sec__title" }, "Los favoritos"),
              h("p", { className: "sec__lede" }, "Lo que más nos piden, recién llegado de Estados Unidos.")),
            h(C.Button, { variant: "quiet", href: "#favoritos" }, "Ver toda la tienda")),
          h("div", { className: "grid" }, PRODUCTS.map(function (p, i) {
            return h(C.ProductCard, Object.assign({ key: i, onAdd: function () { add(p); } }, p));
          }))),

        h("section", { className: "sec", id: "como-pedir" },
          h("div", { className: "sec__head" }, h("h2", { className: "sec__title" }, "Así se pide")),
          h("div", { className: "stepwrap" },
            h("ol", { className: "steps" }, STEPS.map(function (s, i) {
              return h("li", { className: "step", key: i },
                h("span", { className: "step__n" }, i + 1),
                h("h3", { className: "step__t" }, s.t),
                h("p", { className: "step__d" }, s.d));
            })))),

        h("section", { className: "band" },
          h("div", { className: "band__in" },
            h("div", null,
              h("h2", { className: "band__title" }, "¿No ves tu favorito?"),
              h("p", { className: "band__text" }, "Escríbele a Jeniffer con el producto que buscas. Si no está, lo encargamos en el próximo pedido.")),
            h(C.Button, { variant: "sweet", size: "lg", icon: "chat", href: WHATSAPP_URL }, "Preguntar por WhatsApp")))),

      h("footer", { className: "foot" },
        h("div", { className: "foot__in" },
          h("p", null, "Candy Lab, Barranquilla"),
          h("p", null, "Envíos a toda Colombia"))),

      toast[0] ? h("div", { className: "toast", role: "status" }, h(C.Icon, { name: "check", size: 20 }), toast[0]) : null);
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
