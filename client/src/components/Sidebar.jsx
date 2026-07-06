import {
  FaChartPie,
  FaMoneyBillWave,
  FaWallet,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-10">
        Expense Tracker
      </h2>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <FaChartPie />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <FaWallet />
          Expenses
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <FaMoneyBillWave />
          Income
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <FaUser />
          Profile
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;