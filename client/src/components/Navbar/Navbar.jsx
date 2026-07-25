import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { title: "Problem", id: "problem" },
  { title: "Architecture", id: "architecture" },
  { title: "Signals", id: "sensors" },
  { title: "Dashboard", id: "dashboard" },
  { title: "API", id: "api" },
  { title: "Business", id: "business" },
  { title: "Vision", id: "vision" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

          <a href="#hero" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center">
              <img src="asiLogo.png" alt="" className="" />
            </div>

            <div>

              <h2 className="text-lg font-bold text-white">
                Axeiro
              </h2>

              <p className="text-[10px] uppercase tracking-[3px] text-cyan-400">
                Safety Infrastructure
              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {item.title}
                </a>
              </li>
            ))}

          </ul>

          {/* Desktop Right */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="https://github.com/Amarjha01/ASI"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl text-gray-300 transition hover:text-white" />
            </a>

            <a href="#contact">

              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105 cursor-not-allowed">
                Become Partner
              </button>

            </a>

          </div>

          {/* Mobile Button */}

          <button
            className="text-2xl text-white lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-[#050816]"
          >

            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <h2 className="text-2xl font-bold text-white">
                Axeiro
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-white"
              >
                <FaTimes />
              </button>

            </div>

            <div className="flex flex-col px-8 py-10">

              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-5 text-xl text-gray-300 transition hover:text-cyan-400"
                >
                  {item.title}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                <button className="mt-10 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-semibold text-white">
                  Become Design Partner
                </button>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-3 text-gray-300"
              >
                <FaGithub />

                GitHub

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;