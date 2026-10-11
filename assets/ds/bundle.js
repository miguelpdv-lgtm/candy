/* @ds-bundle: {"format":4,"namespace":"CandyLab","components":[{"name":"Button"},{"name":"Sticker"},{"name":"PriceTag"},{"name":"Hero"},{"name":"Awning"},{"name":"AntojoMenu"},{"name":"ProductCard"},{"name":"PhotoSticker"},{"name":"CategoryBubble"},{"name":"QuantityStepper"},{"name":"SearchField"},{"name":"AnnouncementBar"},{"name":"SiteHeader"},{"name":"ScallopEdge"},{"name":"CandyHeadline"},{"name":"Icon"},{"name":"ProductArt"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var ICONS = {"bag": "<path d=\"M5 8.5h14l-1 11a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-1.8z\"/><path d=\"M8.8 8.5V7a3.2 3.2 0 0 1 6.4 0v1.5\"/>", "search": "<circle cx=\"10.8\" cy=\"10.8\" r=\"6.3\"/><path d=\"m15.6 15.6 4.4 4.4\"/>", "heart": "<path d=\"M12 20s-7.5-4.4-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.6 12 20 12 20z\"/>", "truck": "<path d=\"M2.8 6.5h10.4v9.8H2.8z\"/><path d=\"M13.2 9.8h3.9l3.1 3.3v3.2h-7\"/><circle cx=\"6.8\" cy=\"17.6\" r=\"1.9\"/><circle cx=\"16.6\" cy=\"17.6\" r=\"1.9\"/>", "chat": "<path d=\"M12 3.8a8.2 8.2 0 0 0-7.1 12.3L3.8 20.2l4.2-1.1A8.2 8.2 0 1 0 12 3.8z\"/><path d=\"M9 10.6h6M9 13.6h3.8\"/>", "user": "<circle cx=\"12\" cy=\"8.6\" r=\"3.9\"/><path d=\"M4.6 20.2a7.4 7.4 0 0 1 14.8 0\"/>", "menu": "<path d=\"M4 7h16M4 12h16M4 17h10\"/>", "close": "<path d=\"m6 6 12 12M18 6 6 18\"/>", "plus": "<path d=\"M12 5v14M5 12h14\"/>", "minus": "<path d=\"M5 12h14\"/>", "check": "<path d=\"m5 12.5 4.5 4.5L19 7.5\"/>", "gift": "<path d=\"M4 10.5h16v3H4zM5.5 13.5h13v6.7h-13zM12 10.5v9.7\"/><path d=\"M12 10.5c-1-3.4-5.4-4.4-5.4-1.7 0 1.4 2 1.7 5.4 1.7zM12 10.5c1-3.4 5.4-4.4 5.4-1.7 0 1.4-2 1.7-5.4 1.7z\"/>", "lollipop": "<circle cx=\"12\" cy=\"9\" r=\"6\"/><path d=\"M12 9a2.2 2.2 0 0 1 2.2 2.2A4.3 4.3 0 0 1 9.8 8 3.6 3.6 0 0 1 16 6.4\"/><path d=\"M12 15v6\"/>", "candy": "<rect x=\"7.5\" y=\"8.2\" width=\"9\" height=\"7.6\" rx=\"3.8\"/><path d=\"M7.5 12 3.6 8.6v6.8zM16.5 12l3.9-3.4v6.8z\"/>", "creamer": "<path d=\"M9.5 3.6h5v3h-5z\"/><path d=\"M9.2 6.6h5.6c1.6 1.4 2.6 2.9 2.6 5v7.2a1.6 1.6 0 0 1-1.6 1.6H8.2a1.6 1.6 0 0 1-1.6-1.6v-7.2c0-2.1 1-3.6 2.6-5z\"/><path d=\"M6.6 12.5h10.8\"/>", "sparkle": "<path d=\"M12 3.5c.7 4.4 2.1 5.8 6.5 6.5-4.4.7-5.8 2.1-6.5 6.5-.7-4.4-2.1-5.8-6.5-6.5 4.4-.7 5.8-2.1 6.5-6.5z\"/><path d=\"M18.5 16.5v4M16.5 18.5h4\"/>", "box": "<path d=\"m12 3.6 8 4.2v8.4l-8 4.2-8-4.2V7.8z\"/><path d=\"m4 7.8 8 4.2 8-4.2M12 12v8.4\"/>"};
  var ART = {"creamer": "<ellipse cx=\"80\" cy=\"146\" rx=\"40\" ry=\"6\" fill=\"#3B0A1F\" opacity=\".12\"/><path d=\"M62 34h36v18H62z\" fill=\"#E20047\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M66 26h28a4 4 0 0 1 4 4v4H62v-4a4 4 0 0 1 4-4z\" fill=\"#E20047\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M60 52h40c10 8 16 18 16 30v52a10 10 0 0 1-10 10H54a10 10 0 0 1-10-10V82c0-12 6-22 16-30z\" fill=\"#FFF9F1\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M44 86h72v40H44z\" fill=\"#9AD8F7\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M58 100c6-6 12 6 18 0s12 6 18 0 8 2 8 2\" fill=\"none\" stroke=\"#3B0A1F\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M60 114h26\" stroke=\"#3B0A1F\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><path d=\"M54 62c-3 5-4 10-4 16\" fill=\"none\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".9\"/>", "gummies": "<ellipse cx=\"80\" cy=\"148\" rx=\"44\" ry=\"6\" fill=\"#3B0A1F\" opacity=\".12\"/><path d=\"M40 22l5 6 5-6 5 6 5-6 5 6 5-6 5 6 5-6 5 6 5-6 5 6 5-6 5 6 5-6v12c4 30 4 66 0 96v12l-5-6-5 6-5-6-5 6-5-6-5 6-5-6-5 6-5-6-5 6-5-6-5 6-5-6-5 6v-12c-4-30-4-66 0-96z\" fill=\"#FE77B5\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M48 38h62M48 126h62\" stroke=\"#3B0A1F\" stroke-width=\"3.5\" stroke-linecap=\"round\" opacity=\".55\"/><rect x=\"52\" y=\"58\" width=\"56\" height=\"52\" rx=\"22\" fill=\"#FFF9F1\" stroke=\"#3B0A1F\" stroke-width=\"4\"/><circle cx=\"68\" cy=\"76\" r=\"8\" fill=\"#9AD8F7\" stroke=\"#3B0A1F\" stroke-width=\"3\"/><circle cx=\"88\" cy=\"72\" r=\"8\" fill=\"#FFD84A\" stroke=\"#3B0A1F\" stroke-width=\"3\"/><circle cx=\"78\" cy=\"92\" r=\"8\" fill=\"#E20047\" stroke=\"#3B0A1F\" stroke-width=\"3\"/><circle cx=\"96\" cy=\"90\" r=\"6\" fill=\"#FE77B5\" stroke=\"#3B0A1F\" stroke-width=\"3\"/><circle cx=\"62\" cy=\"94\" r=\"5\" fill=\"#FFD84A\" stroke=\"#3B0A1F\" stroke-width=\"3\"/><path d=\"M50 46c0 4 0 8 1 12\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".9\"/>", "lollipop": "<ellipse cx=\"80\" cy=\"150\" rx=\"22\" ry=\"5\" fill=\"#3B0A1F\" opacity=\".12\"/><rect x=\"75\" y=\"88\" width=\"10\" height=\"60\" rx=\"5\" fill=\"#FFF9F1\" stroke=\"#3B0A1F\" stroke-width=\"4\"/><circle cx=\"80\" cy=\"64\" r=\"44\" fill=\"#FFF9F1\" stroke=\"#3B0A1F\" stroke-width=\"4\"/><path d=\"M80 64m0-6a6 6 0 0 1 6 6 12 12 0 0 1-12 12 18 18 0 0 1-18-18 24 24 0 0 1 24-24 30 30 0 0 1 30 30 36 36 0 0 1-36 36\" fill=\"none\" stroke=\"#E20047\" stroke-width=\"9\" stroke-linecap=\"round\"/><path d=\"M80 64m0-6a6 6 0 0 1 6 6 12 12 0 0 1-12 12 18 18 0 0 1-18-18 24 24 0 0 1 24-24 30 30 0 0 1 30 30 36 36 0 0 1-36 36\" fill=\"none\" stroke=\"#3B0A1F\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0\"/><path d=\"M62 34a30 30 0 0 0-12 14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"5\" stroke-linecap=\"round\" opacity=\".9\"/><path d=\"M80 108c-10-6-20-2-20 4s10 8 20 0c10 8 20 6 20 0s-10-10-20-4z\" fill=\"#9AD8F7\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/>", "candybar": "<ellipse cx=\"80\" cy=\"140\" rx=\"52\" ry=\"6\" fill=\"#3B0A1F\" opacity=\".12\"/><g transform=\"rotate(-14 80 80)\"><path d=\"M22 58l8 4-8 4 8 4-8 4 8 4-8 4 8 4-8 4 8 4h100l8-4-8-4 8-4-8-4 8-4-8-4 8-4-8-4 8-4-8-4z\" fill=\"#FFD84A\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M30 58v44M130 58v44\" stroke=\"#3B0A1F\" stroke-width=\"3.5\"/><path d=\"M58 58h44v44H58z\" fill=\"#E20047\" stroke=\"#3B0A1F\" stroke-width=\"4\"/><path d=\"M68 80c4-6 8 6 12 0s8 6 12 0\" fill=\"none\" stroke=\"#FFF9F1\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M38 66v10\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".9\"/></g>", "mug": "<ellipse cx=\"76\" cy=\"146\" rx=\"44\" ry=\"6\" fill=\"#3B0A1F\" opacity=\".12\"/><path d=\"M112 70h8a18 18 0 0 1 0 36h-8\" fill=\"none\" stroke=\"#3B0A1F\" stroke-width=\"14\" stroke-linecap=\"round\"/><path d=\"M112 70h8a18 18 0 0 1 0 36h-8\" fill=\"none\" stroke=\"#FE77B5\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M34 50h84v74a16 16 0 0 1-16 16H50a16 16 0 0 1-16-16z\" fill=\"#FFF9F1\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><ellipse cx=\"76\" cy=\"50\" rx=\"42\" ry=\"9\" fill=\"#FE77B5\" stroke=\"#3B0A1F\" stroke-width=\"4\"/><path d=\"M76 116s-18-10-18-22a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 12-18 22-18 22z\" fill=\"#E20047\" stroke=\"#3B0A1F\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M60 24c-4 6 4 10 0 16M76 18c-4 6 4 10 0 16M92 24c-4 6 4 10 0 16\" fill=\"none\" stroke=\"#3B0A1F\" stroke-width=\"3.5\" stroke-linecap=\"round\" opacity=\".45\"/><path d=\"M42 66v40\" stroke=\"#fff\" stroke-width=\"5\" stroke-linecap=\"round\" opacity=\".9\"/>"};

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function rest(props, omit) {
    var o = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && omit.indexOf(k) < 0) o[k] = props[k];
    return o;
  }
  function formatCOP(n) {
    var s = Math.round(n).toString();
    return "$" + s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  /* ------------------------------------------------------------ Icon */
  function Icon(p) {
    var size = p.size || 24;
    return h("svg", {
      className: cx("cl-icon", p.className),
      width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: p.strokeWidth || 2.25,
      strokeLinecap: "round", strokeLinejoin: "round",
      "aria-hidden": p.label ? undefined : "true",
      role: p.label ? "img" : undefined, "aria-label": p.label,
      dangerouslySetInnerHTML: { __html: ICONS[p.name] || "" }
    });
  }

  /* ------------------------------------------------------------ ProductArt */
  function ProductArt(p) {
    return h("svg", {
      className: cx("cl-art", p.className), viewBox: "0 0 160 160",
      width: p.size || 160, height: p.size || 160, "aria-hidden": "true",
      dangerouslySetInnerHTML: { __html: ART[p.name] || ART.gummies }
    });
  }

  /* ------------------------------------------------------------ Button: a wrapped candy */
  function Button(p) {
    var variant = p.variant || "primary";
    var size = p.size || "md";
    var props = rest(p, ["variant", "size", "icon", "iconEnd", "className", "children", "href"]);
    props.className = cx("cl-btn", "cl-btn--" + variant, "cl-btn--" + size, p.className);
    var iconSize = size === "sm" ? 18 : size === "lg" ? 22 : 20;
    var label = [
      p.icon ? h(Icon, { key: "i", name: p.icon, size: iconSize, strokeWidth: 2.5 }) : null,
      h("span", { key: "t", className: "cl-btn__text" }, p.children),
      p.iconEnd ? h(Icon, { key: "e", name: p.iconEnd, size: iconSize, strokeWidth: 2.5 }) : null
    ];
    var content = variant === "quiet" ? label : h("span", { className: "cl-btn__wrap" }, label);
    if (p.href) { props.href = p.href; return h("a", props, content); }
    if (!props.type) props.type = "button";
    return h("button", props, content);
  }

  /* ------------------------------------------------------------ Sticker */
  function Sticker(p) {
    var tone = p.tone || "lemon";
    return h("span", {
      className: cx("cl-sticker", "cl-sticker--" + tone, p.tilt === false ? null : "cl-sticker--tilt", p.className),
      style: p.tilt && typeof p.tilt === "number" ? { transform: "rotate(" + p.tilt + "deg)" } : undefined
    }, p.children);
  }

  /* ------------------------------------------------------------ PriceTag */
  function PriceTag(p) {
    return h("span", { className: cx("cl-price", p.size === "lg" ? "cl-price--lg" : null, p.className) },
      h("span", { className: "cl-price__now" }, formatCOP(p.amount)),
      p.was ? h("s", { className: "cl-price__was" }, formatCOP(p.was)) : null
    );
  }

  /* ------------------------------------------------------------ ProductCard: photo + a shop label with a perforated top edge */
  function ProductCard(p) {
    var soldOut = !!p.soldOut;
    var well = p.image
      ? h("img", { className: "cl-card__img", src: p.image, alt: p.imageAlt || p.name, loading: "lazy" })
      : h(ProductArt, { name: p.art || "gummies", className: "cl-card__art" });
    return h("article", { className: cx("cl-card", soldOut ? "is-soldout" : null, p.className) },
      h("div", { className: "cl-card__well" },
        well,
        p.sticker ? h(Sticker, { tone: p.stickerTone || "lemon", className: "cl-card__sticker" }, p.sticker) : null,
        soldOut ? h(Sticker, { tone: "cream", tilt: false, className: "cl-card__soldout" }, "Agotado") : null
      ),
      h("div", { className: "cl-card__tag" }, h("div", { className: "cl-card__label" },
        p.category ? h("p", { className: "cl-card__cat" }, p.category) : null,
        h("h3", { className: "cl-card__name" }, p.name),
        h("div", { className: "cl-card__row" },
          h(PriceTag, { amount: p.price, was: p.was, className: "cl-card__price" }),
          soldOut
            ? h(Button, { variant: "secondary", size: "sm", onClick: p.onNotify }, "Avísame")
            : h(Button, { variant: "primary", size: "sm", onClick: p.onAdd, "aria-label": "Agregar " + p.name + " al pedido" }, "Agregar")
        )
      ))
    );
  }

  /* ------------------------------------------------------------ PhotoSticker: a die-cut photo */
  function PhotoSticker(p) {
    return h("figure", { className: cx("cl-photo", p.round ? "cl-photo--round" : null, p.className), style: Object.assign({ "--tilt": (p.tilt || 0) + "deg" }, p.style || {}) },
      h("img", { src: p.src, alt: p.alt || "", loading: "lazy" }),
      p.caption ? h("figcaption", { className: "cl-photo__cap" }, p.caption) : null);
  }

  /* ------------------------------------------------------------ Awning: the striped shop awning over the vitrina */
  function Awning(p) {
    return h("div", { className: cx("cl-awning", p.className), "aria-hidden": "true" },
      h("div", { className: "cl-awning__rod" }),
      h("div", { className: "cl-awning__cloth" }));
  }

  /* ------------------------------------------------------------ AntojoMenu: "what are you craving?", categories as photo bubbles */
  function AntojoMenu(p) {
    var items = p.items || [];
    return h("nav", { className: cx("cl-menu", p.className), "aria-label": p.title || "Categorías" },
      h("div", { className: "cl-menu__paper" },
        h("h2", { className: "cl-menu__title" }, p.title || "¿Qué se te antoja?"),
        h("ul", { className: "cl-menu__grid" }, items.map(function (it, i) {
          return h("li", { key: i },
            h("a", { className: "cl-menu__item", href: it.href || "#" },
              h("span", { className: "cl-menu__disc" }, h("img", { src: it.image, alt: "", loading: "lazy" })),
              h("span", { className: "cl-menu__label" }, it.label)));
        })),
        p.action ? h("div", { className: "cl-menu__action" }, p.action) : null));
  }

  /* ------------------------------------------------------------ Hero: the vitrina */
  function Hero(p) {
    return h("section", { className: cx("cl-hero", p.className), style: p.image ? { backgroundImage: "url(" + p.image + ")" } : undefined },
      p.header || null,
      p.awning === false ? null : h(Awning, null),
      h("div", { className: "cl-hero__grid" },
        h("div", { className: "cl-hero__label" },
          h("div", { className: "cl-hero__copy" },
            h("h1", { className: "cl-hero__title" }, p.title),
            p.lede ? h("p", { className: "cl-hero__lede" }, p.lede) : null,
            p.actions ? h("div", { className: "cl-hero__actions" }, p.actions) : null,
            p.note ? h("p", { className: "cl-hero__note" }, h(Icon, { name: "truck", size: 20 }), p.note) : null)),
        p.side ? h("div", { className: "cl-hero__side" }, p.side) : null),
      h(ScallopEdge, { color: "var(--surface-page)", radius: 14, className: "cl-hero__counter" }));
  }

  /* ------------------------------------------------------------ CategoryBubble */
  function CategoryBubble(p) {
    var inner = p.image
      ? h("img", { src: p.image, alt: "", loading: "lazy" })
      : p.icon ? h(Icon, { name: p.icon, size: 36, strokeWidth: 2.4 })
      : h("span", { className: "cl-bubble__glyph" }, p.glyph || (p.label || "?").charAt(0));
    return h("button", {
      type: "button",
      className: cx("cl-bubble", p.image ? "cl-bubble--photo" : null, p.active ? "is-active" : null, "cl-bubble--" + (p.tone || "bubblegum"), p.className),
      "aria-pressed": p.active ? "true" : "false", onClick: p.onClick
    },
      h("span", { className: "cl-bubble__disc" }, inner),
      h("span", { className: "cl-bubble__label" }, p.label)
    );
  }

  /* ------------------------------------------------------------ QuantityStepper */
  function QuantityStepper(p) {
    var st = React.useState(p.defaultValue || 1);
    var value = p.value != null ? p.value : st[0];
    var min = p.min != null ? p.min : 1, max = p.max != null ? p.max : 99;
    function set(v) { v = Math.max(min, Math.min(max, v)); st[1](v); if (p.onChange) p.onChange(v); }
    return h("div", { className: cx("cl-stepper", p.className), role: "group", "aria-label": p.label || "Cantidad" },
      h("button", { type: "button", className: "cl-stepper__btn", "aria-label": "Quitar uno", disabled: value <= min, onClick: function () { set(value - 1); } }, h(Icon, { name: "minus", size: 20, strokeWidth: 2.75 })),
      h("output", { className: "cl-stepper__value", "aria-live": "polite" }, value),
      h("button", { type: "button", className: "cl-stepper__btn", "aria-label": "Agregar uno", disabled: value >= max, onClick: function () { set(value + 1); } }, h(Icon, { name: "plus", size: 20, strokeWidth: 2.75 }))
    );
  }

  /* ------------------------------------------------------------ SearchField */
  function SearchField(p) {
    var props = rest(p, ["className", "label"]);
    props.className = "cl-search__input";
    props.type = "search";
    if (!props.placeholder) props.placeholder = "Busca creamers, gomitas, snacks…";
    props["aria-label"] = p.label || "Buscar en la tienda";
    return h("label", { className: cx("cl-search", p.className) },
      h(Icon, { name: "search", size: 20, className: "cl-search__icon" }),
      h("input", props)
    );
  }

  /* ------------------------------------------------------------ ScallopEdge */
  function ScallopEdge(p) {
    var r = p.radius || 12, n = 40, d = "M0 " + r * 2 + "V" + r;
    for (var i = 0; i < n; i++) d += "a" + r + " " + r + " 0 0 1 " + r * 2 + " 0";
    d += "V" + r * 2 + "z";
    return h("svg", {
      className: cx("cl-scallop", p.flip ? "cl-scallop--flip" : null, p.className),
      viewBox: "0 0 " + n * r * 2 + " " + r * 2, preserveAspectRatio: "none", "aria-hidden": "true",
      style: { color: p.color || "var(--surface-page)", height: r * 2 }
    }, h("path", { d: d, fill: "currentColor" }));
  }

  /* ------------------------------------------------------------ AnnouncementBar */
  function AnnouncementBar(p) {
    var items = p.items || ["Envíos a toda Colombia", "Compra en línea segura", "Importados de EE. UU."];
    var kids = [];
    items.forEach(function (t, i) {
      if (i) kids.push(h("span", { key: "s" + i, className: "cl-announce__sep", "aria-hidden": "true" }));
      kids.push(h("span", { key: "t" + i }, t));
    });
    return h("div", { className: cx("cl-announce", p.className) },
      h("p", { className: "cl-announce__row" }, kids));
  }

  /* ------------------------------------------------------------ SiteHeader */
  function SiteHeader(p) {
    var links = p.links || ["Creamers", "Dulces", "Suplementos", "Makeup", "Mugs"];
    return h("header", { className: cx("cl-header", p.tone === "bubblegum" ? "cl-header--bubblegum" : null, p.className) },
      h("a", { className: "cl-header__logo", href: p.homeHref || "#", "aria-label": "Candy Lab, inicio" },
        p.logoSrc ? h("img", { src: p.logoSrc, alt: "Candy Lab" }) : h("span", { className: "cl-header__wordmark" }, "Candy Lab")),
      h("nav", { className: "cl-header__nav", "aria-label": "Categorías" },
        links.map(function (l, i) { return h("a", { key: i, href: "#", className: i === p.current ? "is-current" : null }, l); })),
      h("div", { className: "cl-header__tools" },
        h("button", { type: "button", className: "cl-header__tool", "aria-label": "Buscar" }, h(Icon, { name: "search" })),
        h("button", { type: "button", className: "cl-header__tool cl-header__cart", "aria-label": "Tu pedido, " + (p.cartCount || 0) + " productos" },
          h(Icon, { name: "bag" }),
          p.cartCount ? h("span", { className: "cl-header__count" }, p.cartCount) : null)
      )
    );
  }

  /* ------------------------------------------------------------ CandyHeadline */
  function CandyHeadline(p) {
    var Tag = p.as || "h1";
    return h(Tag, { className: cx("cl-candy", "cl-candy--" + (p.size || "xl"), p.className) }, p.children);
  }

  var api = {
    Button: Button, Sticker: Sticker, PriceTag: PriceTag, ProductCard: ProductCard,
    Awning: Awning, AntojoMenu: AntojoMenu, Hero: Hero, PhotoSticker: PhotoSticker,
    CategoryBubble: CategoryBubble, QuantityStepper: QuantityStepper, SearchField: SearchField,
    AnnouncementBar: AnnouncementBar, SiteHeader: SiteHeader, ScallopEdge: ScallopEdge,
    CandyHeadline: CandyHeadline, Icon: Icon, ProductArt: ProductArt,
    formatCOP: formatCOP
  };
  window.CandyLab = window.CandyLab || {};
  for (var k in api) window.CandyLab[k] = api[k];
})();
