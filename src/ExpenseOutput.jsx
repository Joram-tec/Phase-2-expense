function ExpenseTable({ expenses, onDeleteExpense }) {
    return (
      <table border="1" cellPadding="10">
        <thead>

          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount (KES)</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>
          {expenses.length > 0 ? (
            expenses.map((exp) => (
              <tr key={exp.id}>
                <td>{exp.name}</td>
                <td>{exp.description}</td>
                <td>{exp.category}</td>
                <td>{exp.amount}</td>
                <td>{exp.date}</td>
                <td>
                  <button onClick={() => onDeleteExpense(exp.id)}>Delete</button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td style={{ textAlign: "center" }}>No expenses added.</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  