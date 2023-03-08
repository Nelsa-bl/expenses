import { useEffect, useState } from "react";

// Import API_URL
import { API_URL } from "~/config";

type Expense = {
  id: number;
  name: string;
  net: string;
  tax: string;
};

type Favorite = {
  id: number;
};

export default function Index() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  // Get API data
  useEffect(() => {
    const getExpensesMap = async () => {
      try {
        setIsLoading(true);
        const getExpensesFromAPI = await fetch(API_URL);
        if (!getExpensesFromAPI.ok) {
          throw new Error(
            `Problem getting products. Status: ${getExpensesFromAPI.status}`
          );
        }
        const data = await getExpensesFromAPI.json();
        setIsLoading(false);
        setExpenses(data?.items || []);
      } catch (err) {
        // If error then show message
        let message;
        if (err instanceof Error) message = err.message;
        else message = String(err);
        console.error({ message });
      }
    };
    getExpensesMap();
  }, []);

  // Calculate the Gross
  const calcGross = (net: string, tax: string) => {
    return Number(net) + Number(tax);
  };

  // Calculate the total expenses
  const calcTotalExpenses = (expenses: Expense[]) => {
    return expenses.reduce((sum, expense) => {
      const gross = Number(expense.net) + Number(expense.tax);
      const total = sum + gross;
      return total;
    }, 0);
  };

  // Get total expenses for all expenses
  const calcTotal = calcTotalExpenses(expenses);

  // Get total expenses for favorites
  const calcTotalFavorites = calcTotalExpenses(
    expenses.filter((expense) =>
      favorites.some((favorite) => favorite.id === expense.id)
    )
  );

  // Format currency
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  // Add Favourites
  const addFavorite = (productToAdd: Expense) => {
    setFavorites([...favorites, { id: productToAdd.id }]);
  };

  // Remove Favourite
  const removeFavorite = (productToRemove: Expense) => {
    setFavorites(
      favorites.filter((favorite) => favorite.id !== productToRemove.id)
    );
  };

  // Render all expenses or favorites
  const showExpense = (expenses: Expense[]) => {
    return (
      <div className="expenses-container">
        {expenses.map((expense) => (
          <div key={expense.id} className="expenses-item">
            <h2>{expense.name}</h2>
            <p>Net: {formatCurrency(Number(expense.net))}</p>
            <p>Tax: {formatCurrency(Number(expense.tax))}</p>
            <p>Gross: {formatCurrency(calcGross(expense.net, expense.tax))}</p>
            <span
              className="fav-icon"
              onClick={() => {
                if (favorites.some((favorite) => favorite.id === expense.id)) {
                  removeFavorite(expense);
                } else {
                  addFavorite(expense);
                }
              }}
            >
              {favorites.some((favorite) => favorite.id === expense.id)
                ? "❤️"
                : "🤍"}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <h1>Alasco HQ: Expense Tracking</h1>

      <div>
        <button
          className={`filter-btn ${showFavorites ? "" : "active"}`}
          onClick={() => setShowFavorites(false)}
        >
          All ({expenses.length})
        </button>
        <button
          className={`filter-btn ${showFavorites ? "active" : ""}`}
          onClick={() => setShowFavorites(true)}
        >
          Favorites ({favorites.length})
        </button>
      </div>

      {isLoading ? (
        <div className="spinner-overlay">
          <div className="spinner-container"></div>
        </div>
      ) : (
        <>
          {showFavorites
            ? showExpense(
                expenses.filter((expense) =>
                  favorites.some((favorite) => favorite.id === expense.id)
                )
              )
            : showExpense(expenses)}

          {showFavorites && favorites.length > 0 && (
            <h3>
              Total expenses for favorites: {formatCurrency(calcTotalFavorites)}
            </h3>
          )}

          {!showFavorites && expenses.length > 0 && (
            <h3>Total expenses: {formatCurrency(calcTotal)}</h3>
          )}
        </>
      )}
    </>
  );
}
