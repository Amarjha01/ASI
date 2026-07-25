import { motion } from "framer-motion";

const Card = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/10"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-4xl text-cyan-400 group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;