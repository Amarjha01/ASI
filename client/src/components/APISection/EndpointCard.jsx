import { motion } from "framer-motion";

const colors = {
  GET: "bg-green-500/20 text-green-400",
  POST: "bg-blue-500/20 text-blue-400",
  PUT: "bg-yellow-500/20 text-yellow-400",
  DELETE: "bg-red-500/20 text-red-400",
};

const EndpointCard = ({ method, endpoint, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/10 bg-[#0B1120]/70 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">

        <span
          className={`rounded-lg px-3 py-1 text-sm font-bold ${colors[method]}`}
        >
          {method}
        </span>

        <span className="font-mono text-lg text-white">
          {endpoint}
        </span>

      </div>

      <p className="mt-5 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default EndpointCard;