import { motion } from "framer-motion";

import StatCard from "./StatCard";
import IncidentTimeline from "./IncidentTimeline";

const Dashboard = () => {
  return (
    <section id="dashboard" className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="font-semibold uppercase tracking-[5px] text-cyan-400">
            Live Dashboard
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Monitor incidents
            <span className="text-cyan-400">
              {" "}in real time
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Organizations receive AI-generated emergency insights,
            confidence scores and signal timelines through a unified dashboard.
          </p>

        </motion.div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid gap-5 md:grid-cols-4">

            <StatCard
              title="AI Confidence"
              value="96%"
              color="text-cyan-400"
            />

            <StatCard
              title="Risk Score"
              value="High"
              color="text-red-400"
            />

            <StatCard
              title="Response Time"
              value="< 4 sec"
              color="text-green-400"
            />

            <StatCard
              title="Active Alerts"
              value="12"
              color="text-yellow-400"
            />

          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* LEFT */}

            <div className="rounded-2xl border border-white/10 bg-[#0B1120]/70 p-7">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold text-white">
                  Incident #2841
                </h3>

                <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm text-red-400">
                  Active
                </span>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    User
                  </span>

                  <span className="text-white">
                    Demo User
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Location
                  </span>

                  <span className="text-white">
                    Gurgaon
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    AI Decision
                  </span>

                  <span className="font-semibold text-cyan-400">
                    Dispatch Emergency Alert
                  </span>

                </div>

              </div>

              <div className="mt-10">

                <h4 className="mb-4 text-lg font-semibold text-white">
                  Signals
                </h4>

                <div className="flex flex-wrap gap-3">

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                    Fall Detected
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                    GPS Anomaly
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                    Scream
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                    Heart Rate
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <IncidentTimeline />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Dashboard;