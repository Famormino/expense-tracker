import Expenses from "./components/Expenses/Expenses";

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
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
