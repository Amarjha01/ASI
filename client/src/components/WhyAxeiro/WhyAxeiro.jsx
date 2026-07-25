import { motion } from "framer-motion";
import ComparisonCard from "./ComparisonCard";

const traditional = [
  "Manual SOS buttons",
  "Cloud-only processing",
  "Rule-based alerts",
  "Single signal decisions",
  "High false positives",
  "Difficult integration",
];

const axeiro = [
  "AI-assisted emergency detection",
  "Edge + Cloud AI",
  "Multi-signal reasoning",
  "Explainable AI decisions",
  "API-first platform",
  "Privacy-first architecture",
];

const WhyAxeiro = () => {
  return (
    <section id="why" className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[5px] text-cyan-400">
            Why Axeiro
          </p>

          <h2 className="mt-6 text-5xl font-black text-white">
            Modern Safety Needs
            <span className="text-cyan-400">
              {" "}Modern Infrastructure
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Instead of building another emergency application,
            Axeiro provides the infrastructure layer that enables
            organizations to create intelligent, privacy-first,
            AI-powered safety solutions.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          <ComparisonCard
            title="Traditional Systems"
            items={traditional}
          />

          <ComparisonCard
            title="Axeiro"
            items={axeiro}
            positive
          />

        </div>

      </div>
    </section>
  );
};

export default WhyAxeiro;