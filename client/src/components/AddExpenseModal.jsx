import { useState } from "react";
import api from "../services/api";

function AddExpenseModal({ onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/expenses", form);

      alert("Expense Added Successfully!");

      setForm({
        title: "",
        amount: "",
        category: "",
        date: "",
        note: "",
      });

      onSuccess();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add expense");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="border rounded p-3"
        />

        <textarea
          name="note"
          placeholder="Note"
          value={form.note}
          onChange={handleChange}
          className="border rounded p-3 md:col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-3 md:col-span-2 hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpenseModal;