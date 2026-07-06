import api from "../services/api";

function ExpenseTable({ expenses, onDelete }) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this expense?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/expenses/${id}`);

      alert("Expense Deleted Successfully!");

      onDelete();
    } catch (error) {
      console.log(error);
      alert("Failed to delete expense");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Recent Expenses
      </h2>

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-200">

            <th className="p-3">Title</th>

            <th className="p-3">Category</th>

            <th className="p-3">Amount</th>

            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {expenses.map((expense) => (

            <tr key={expense._id}>

              <td className="border p-3">
                {expense.title}
              </td>

              <td className="border p-3">
                {expense.category}
              </td>

              <td className="border p-3">
                ₹ {expense.amount}
              </td>

              <td className="border p-3">

                <button
                  onClick={() => handleDelete(expense._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ExpenseTable;