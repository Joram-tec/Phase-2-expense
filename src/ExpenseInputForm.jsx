import { useState } from "react";

function ExpenseInputForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, category, amount, date } = formData;

    if (!name || !description || !category || !amount || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(amount)
    };

    onAddExpense(newExpense);

    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <p>Enter your expense details below</p>
      <form onSubmit={handleSubmit} id="form">
        <input type="text" placeholder="Enter expense name..." name="name" value={formData.name} onChange={handleChange} required />
        <input type="text" placeholder="Enter expense description..." name="description" value={formData.description} onChange={handleChange} required />
        <input type="text" placeholder="Enter expense category..." name="category" value={formData.category} onChange={handleChange} required />
        <input type="number" placeholder="Enter amount..." name="amount" value={formData.amount} onChange={handleChange} required />
        <input type="text" placeholder="mm/dd/yy" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseInputForm;
