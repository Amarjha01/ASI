import { motion } from "framer-motion";
import {
  FaBell,
  FaShieldAlt,
  FaUserShield,
  FaClock,
} from "react-icons/fa";

import ProblemCard from "./Card";

const problems = [
  {
    icon: <FaClock />,
    title: "Delayed Emergency Response",
    description:
      "Most emergency systems depend on manual SOS actions. Critical situations often leave people unable to react in time.",
  },
  {
    icon: <FaBell />,
    title: "Disconnected Signals",
    description:
      "Location, motion, wearable sensors, and voice data exist in isolation, preventing intelligent emergency detection.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Privacy Concerns",
    description:
      "Continuously streaming personal data to the cloud increases privacy risks and network costs.",
  },
  {
    icon: <FaUserShield />,
    title: "No AI-powered Safety Layer",
    description:
      "Developers repeatedly build custom emergency systems because there is no API-first safety infrastructure available.",
  },
];

const Problem = () => {
  return (
    <section className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            The Problem
          </p>

          <h2 className="mt-6 text-5xl font-black text-white">
            Emergency response
            <span className="text-cyan-400">
              {" "}still reacts{" "}
            </span>
            instead of predicting.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Existing systems rely heavily on manual intervention,
            fragmented sensor data, and cloud-only processing.
            Modern safety infrastructure should reason across multiple
            weak signals while preserving user privacy.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Problem;