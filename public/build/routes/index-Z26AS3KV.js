import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\Sanel\Desktop\alesco-tech-task\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());

// app/config.ts
init_react();
var API_URL = "https://9tt010tdl0.execute-api.eu-central-1.amazonaws.com/prod";

// app/routes/index.tsx
function Index() {
  const [expenses, setExpenses] = (0, import_react.useState)([]);
  const [favorites, setFavorites] = (0, import_react.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const [totalExpenses, setTotalExpenses] = (0, import_react.useState)(0);
  const [showFavorites, setShowFavorites] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const getExpensesMap = async () => {
      try {
        setIsLoading(true);
        const getExpensesFromAPI = await fetch(API_URL);
        if (!getExpensesFromAPI.ok) {
          throw new Error(`Problem getting products. Status: ${getExpensesFromAPI.status}`);
        }
        const data = await getExpensesFromAPI.json();
        setIsLoading(false);
        setExpenses(data.items);
      } catch (err) {
        let message;
        if (err instanceof Error)
          message = err.message;
        else
          message = String(err);
        reportError({ message });
      }
    };
    getExpensesMap();
  }, []);
  const calcGross = (net, tax) => {
    return Number(net) + Number(tax);
  };
  const calcTotal = expenses.reduce((sum, exp) => {
    const total = sum + calcGross(exp.net, exp.tax);
    return total;
  }, 0);
  const formatCurrency = (value) => new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(value);
  const addFavorite = (productToAdd) => {
    setFavorites([...favorites, productToAdd]);
  };
  const removeFavorite = (productToRemove) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== productToRemove.id));
  };
  const renderExpenses = (expenses2) => {
    return expenses2.map((expense) => /* @__PURE__ */ React.createElement("div", {
      key: expense.id,
      className: "expenses-list"
    }, /* @__PURE__ */ React.createElement("h2", null, expense.name), /* @__PURE__ */ React.createElement("p", null, "Net: ", formatCurrency(expense.net)), /* @__PURE__ */ React.createElement("p", null, "Tax: ", formatCurrency(expense.tax)), /* @__PURE__ */ React.createElement("p", null, "Gross: ", calcGross(expense.net, expense.tax)), /* @__PURE__ */ React.createElement("span", {
      className: "fav-icon",
      onClick: () => {
        if (favorites.some((favorite) => favorite.id === expense.id)) {
          removeFavorite(expense);
        } else {
          addFavorite(expense);
        }
      }
    }, favorites.some((favorite) => favorite.id === expense.id) ? "\u2764\uFE0F" : "\u{1F90D}")));
  };
  const filteredExpenses = showFavorites ? expenses.filter((expense) => favorites.some((favorite) => favorite.id === expense.id)) : expenses;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Alasco HQ: Expense Tracking"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setShowFavorites(false)
  }, "All"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setShowFavorites(true)
  }, "Favorites (", favorites.length, ")")), isLoading ? /* @__PURE__ */ React.createElement("p", null, "Loading...") : /* @__PURE__ */ React.createElement(React.Fragment, null, showFavorites ? renderExpenses(expenses.filter((expense) => favorites.some((favorite) => favorite.id === expense.id))) : renderExpenses(expenses), /* @__PURE__ */ React.createElement("h3", null, "Total expenses: ", formatCurrency(calcTotal))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-Z26AS3KV.js.map
