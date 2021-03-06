import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      nombre: "agua",
      costo: 300,
      date: new Date(2022, 2, 12),
    },
    {
      id: 2,
      nombre: "luz",
      costo: 1000,
      date: new Date(2022, 2, 28),
    },
    {
      id: 3,
      nombre: "gas",
      costo: 700,
      date: new Date(2022, 2, 10),
    }
  ]

  const newExpenseHandler = (expenses) => {
    console.log(expenses)
  }

  return (
    <div className="App">
      <NewExpense onNewExpense = {newExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
