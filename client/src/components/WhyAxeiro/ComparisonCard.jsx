import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonCard = ({ title, items, positive }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`rounded-3xl border p-8 backdrop-blur-xl ${
        positive
          ? "border-cyan-500/30 bg-cyan-500/5"
          : "border-red-500/20 bg-red-500/5"
      }`}
    >
      <h3
        className={`text-3xl font-bold ${
          positive ? "text-cyan-400" : "text-red-400"
        }`}
      >
        {title}
      </h3>

      <div className="mt-10 space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {positive ? (
              <FaCheckCircle className="mt-1 text-xl text-cyan-400" />
            ) : (
              <FaTimesCircle className="mt-1 text-xl text-red-400" />
            )}

            <span className="text-lg text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ComparisonCard;