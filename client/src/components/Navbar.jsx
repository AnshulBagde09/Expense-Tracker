import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        Expense Tracker
      </h1>

      <div className="flex items-center gap-3">
        <FaUserCircle size={35} className="text-gray-700" />
        <span className="font-semibold">Welcome</span>
      </div>
    </nav>
  );
}

export default Navbar;