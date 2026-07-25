import { motion } from "framer-motion";

import {
  FaMobileAlt,
  FaMicrochip,
  FaCloud,
  FaBrain,
  FaBell,
  FaServer,
} from "react-icons/fa";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import FlowCard from "./FlowCard";

const steps = [
  {
    icon: <FaMobileAlt />,
    title: "Wearables & Smartphones",
    description:
      "Collect motion, GPS, voice, sensor and health signals.",
  },
  {
    icon: <FaMicrochip />,
    title: "Edge AI",
    description:
      "Performs local inference to preserve privacy and reduce latency.",
  },
  {
    icon: <FaServer />,
    title: "Safety API",
    description:
      "Receives verified events through secure API endpoints.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Infrastructure",
    description:
      "Processes events through scalable infrastructure and messaging.",
  },
  {
    icon: <FaBrain />,
    title: "AI Reasoning",
    description:
      "Correlates multiple weak signals before making decisions.",
  },
  {
    icon: <FaBell />,
    title: "Emergency Response",
    description:
      "Notifies hospitals, enterprises, schools or emergency contacts.",
  },
];

const Architecture = () => {
  return (
    <section id="architecture" className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="font-semibold uppercase tracking-[5px] text-cyan-400">
            Platform Architecture
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            How
            <span className="text-cyan-400">
              {" "}Axeiro{" "}
            </span>
            Works
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Axeiro continuously analyzes multiple signals using Edge AI
            and Cloud AI to make intelligent emergency decisions instead
            of relying on manual SOS actions.
          </p>

        </motion.div>

        <div className="mx-auto mt-24 flex max-w-md flex-col items-center">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center"
            >
              <FlowCard {...step} />

              {index !== steps.length - 1 && (
                <MdKeyboardDoubleArrowDown
                  className="my-5 text-5xl text-cyan-500"
                />
              )}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Architecture;