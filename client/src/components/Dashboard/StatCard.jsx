const StatCard = ({ title, value, color }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1120]/70 p-5 backdrop-blur-xl">
      <p className="text-sm text-gray-400">{title}</p>

      <h3 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h3>
    </div>
  );
};

export default StatCard;