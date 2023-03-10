import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-NPWR72NU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\Sanel\Desktop\alesco-tech-task\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/assets/stylesheets/index.css
var stylesheets_default = "/build/_assets/index-NDGZLEDP.css";

// app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Alasco HQ: Expense Tracking",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: stylesheets_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-V42JOMXE.js.map
