import { motion } from "framer-motion";

const CustomerCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition"
    >
      <div className="mb-5 text-5xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default CustomerCard;