import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", expense: 1200 },
  { month: "Feb", expense: 2200 },
  { month: "Mar", expense: 1800 },
  { month: "Apr", expense: 2600 },
];

function ExpenseChart() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Monthly Expenses
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="expense" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;