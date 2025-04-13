import { useState } from "react";
import ExpenseInputForm from "./ExpenseInputForm";
import ExpenseTable from "./ExpenseOutput";
import Search from "./Search";
import "./index.css";

function App() {

  const [expenses, setExpenses] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {

    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {

    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>

    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">

      <div className="form-section">
        <ExpenseInputForm onAddExpense={handleAddExpense} />
      </div>

      <div className="table-section">
        <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
      </div>

    </div>
  );
}

export default App;
