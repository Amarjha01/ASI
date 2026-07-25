import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import FloatingCard from "./FloatingCard";
import { FaArrowRight, FaShieldAlt, FaBrain, FaCloud } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RobotAnimation from "../../assets/Robot.lottie";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      <HeroBackground />

     <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row">
        {/* LEFT */}

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              AI-powered Infrastructure
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">
              Building the
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Future of Safety
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Axeiro Safety Infrastructure enables organizations to build
              intelligent emergency response systems powered by Edge AI, Cloud
              AI and explainable multi-signal reasoning.
            </p>

            <div className="mt-12 flex gap-5">
              <button className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:scale-105 cursor-not-allowed">
                Request Demo
                <FaArrowRight />
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-500 cursor-not-allowed">
                Developer Docs
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
{/* please dont hide this for mobile version make it responsive */}
        <div className="relative flex w-full flex-1 items-center justify-center">

  <DotLottieReact
    src={RobotAnimation}
    autoplay
    loop
    className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[550px] h-auto opacity-60"
  />

  <FloatingCard
    icon={<FaShieldAlt />}
    title="Edge AI"
    subtitle="Privacy First"
    top="10%"
    left="5%"
  />

  <FloatingCard
    icon={<FaBrain />}
    title="AI Agent"
    subtitle="Reasoning"
    top="50%"
    right="0%"
  />

  <FloatingCard
    icon={<FaCloud />}
    title="Cloud AI"
    subtitle="Multi Signal"
    bottom="10%"
    left="15%"
  />

</div>
      </div>
    </section>
  );
};

export default Hero;
