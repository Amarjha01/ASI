import { motion } from "framer-motion";

const RevenueCard = ({ title, subtitle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
    >
      <h3 className="text-xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="mt-3 text-gray-300">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default RevenueCard;