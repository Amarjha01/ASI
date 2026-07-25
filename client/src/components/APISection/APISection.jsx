import { motion } from "framer-motion";

import EndpointCard from "./EndpointCard";
import CodeBlock from "./CodeBlock";

import {
  FaNodeJs,
  FaPython,
  FaJava
} from "react-icons/fa";

import {
  SiGo
} from "react-icons/si";

const APISection = () => {
  return (
    <section className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[5px] font-semibold text-cyan-400">
            Developer Platform
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">

            API First.

            <span className="text-cyan-400">

              Infrastructure Always.

            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">

            Integrate emergency intelligence into your applications using
            secure APIs, SDKs and real-time event processing.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-5">

            <EndpointCard
              method="POST"
              endpoint="/v1/signals"
              description="Submit Edge AI signals securely."
            />

            <EndpointCard
              method="POST"
              endpoint="/v1/heartbeat"
              description="Keep wearable devices connected."
            />

            <EndpointCard
              method="GET"
              endpoint="/v1/alerts"
              description="Retrieve AI-generated emergency alerts."
            />

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

              <p className="text-sm uppercase tracking-widest text-cyan-400">

                API KEY

              </p>

              <p className="mt-4 font-mono text-white">

                ax_live_************************

              </p>

            </div>

          </div>

          {/* Right */}

          <CodeBlock />

        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8">

          <div className="flex items-center gap-3 text-gray-300">

            <FaNodeJs className="text-3xl text-green-500" />

            Node.js SDK

          </div>

          <div className="flex items-center gap-3 text-gray-300">

            <FaPython className="text-3xl text-yellow-400" />

            Python SDK

          </div>

          <div className="flex items-center gap-3 text-gray-300">

            <SiGo className="text-3xl text-cyan-400" />

            Go SDK

          </div>

          <div className="flex items-center gap-3 text-gray-300">

            <FaJava className="text-3xl text-orange-400" />

            Java SDK

          </div>

        </div>

        <div className="mt-16 flex justify-center">

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">

            Start Building →

          </button>

        </div>

      </div>

    </section>
  );
};

export default APISection;