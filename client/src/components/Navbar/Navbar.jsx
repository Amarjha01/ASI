import { motion } from "framer-motion";
import { FaGithub, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-black shadow-lg shadow-cyan-500/30">
            A
          </div>

          <div>

            <h2 className="text-xl font-bold tracking-wide text-white">
              Axeiro
            </h2>

            <p className="text-xs tracking-[4px] uppercase text-cyan-400">
              Safety Infrastructure
            </p>

          </div>

        </div>

        {/* Links */}

        <ul className="hidden gap-10 text-sm text-gray-300 lg:flex">

          <li className="cursor-pointer transition hover:text-cyan-400">
            Features
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Architecture
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            API
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Dashboard
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Docs
          </li>

        </ul>

        {/* Right */}

        <div className="flex items-center gap-5">

          <FaGithub
            className="cursor-pointer text-xl text-gray-300 transition hover:text-white"
          />

          <FaDiscord
            className="cursor-pointer text-xl text-gray-300 transition hover:text-cyan-400"
          />

          <button
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Book Demo
          </button>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;