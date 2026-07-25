import { motion } from "framer-motion";

const FlowCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-3xl border border-cyan-500/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition group-hover:opacity-100"></div>

      <div className="relative z-10">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">

          {icon}

        </div>

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {description}
        </p>

      </div>
    </motion.div>
  );
};

export default FlowCard;