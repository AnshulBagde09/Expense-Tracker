import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ExpenseChart from "../components/ExpenseChart";
import CategoryChart from "../components/CategoryChart";
import ExpenseTable from "../components/ExpenseTable";
import AddExpenseModal from "../components/AddExpenseModal";

import api from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const averageExpense =
    expenses.length > 0
      ? Math.round(totalExpense / expenses.length)
      : 0;

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <AddExpenseModal onSuccess={fetchExpenses} />

          <div className="grid md:grid-cols-3 gap-6 mb-6">

            <StatCard
              title="Total Expense"
              amount={totalExpense}
              color="bg-red-500"
            />

            <StatCard
              title="Transactions"
              amount={expenses.length}
              color="bg-blue-500"
            />

            <StatCard
              title="Average"
              amount={averageExpense}
              color="bg-green-500"
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">

            <ExpenseChart expenses={expenses} />

            <CategoryChart expenses={expenses} />

          </div>

          <ExpenseTable
            expenses={expenses}
            onDelete={fetchExpenses}
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;