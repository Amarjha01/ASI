import { motion } from "framer-motion";

const FloatingCard = ({
  icon,
  title,
  subtitle,
  top,
  left,
  right,
  bottom,
  mobile = false,
}) => {
  return (
    <div
      className={`rounded-2xl border border-cyan-500/20
      bg-slate-900/70 backdrop-blur-xl p-5 shadow-lg animate-bounce
      ${
        mobile
          ? "relative w-[170px]"
          : "absolute w-60"
      }`}
      style={
        mobile
          ? {}
          : { top, left, right, bottom }
      }
    >
      {icon}
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default FloatingCard;