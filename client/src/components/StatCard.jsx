function StatCard({ title, amount, color }) {
  return (
    <div className={`rounded-xl shadow-lg p-6 text-white ${color}`}>
      <h2 className="text-lg">{title}</h2>

      <h1 className="text-3xl font-bold mt-3">
        ₹ {amount}
      </h1>
    </div>
  );
}

export default StatCard;