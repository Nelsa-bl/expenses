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
  const [favourites, setFavourites] = (0, import_react.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const [totalExpenses, setTotalExpenses] = (0, import_react.useState)(0);
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Alasco HQ: Expense Tracking"), expenses.map((expense) => /* @__PURE__ */ React.createElement("div", {
    key: expense.id,
    className: "expenses-list"
  }, /* @__PURE__ */ React.createElement("h2", null, expense.name), /* @__PURE__ */ React.createElement("p", null, "Net: ", expense.net), /* @__PURE__ */ React.createElement("p", null, "Tax: ", expense.tax), /* @__PURE__ */ React.createElement("p", null, "Gross: ", calcGross(expense.net, expense.tax)))), /* @__PURE__ */ React.createElement("h3", null, "Total expenses: ", calcTotal));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-SULW6AL4.js.map
