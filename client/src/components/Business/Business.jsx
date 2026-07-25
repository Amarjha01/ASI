import { motion } from "framer-motion";

import {
  FaHospital,
  FaSchool,
  FaBuilding,
  FaMicrochip,
  FaUniversity,
  FaMoneyBillWave,
  FaCode,
  FaCloud,
  FaHandshake,
} from "react-icons/fa";

import CustomerCard from "./CustomerCard";
import RevenueCard from "./RevenueCard";

const Business = () => {
  return (
    <section className="bg-[#050816] py-32">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] font-semibold text-cyan-400">
            Business Model
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Who Uses
            <span className="text-cyan-400"> Axeiro?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            Axeiro provides AI-powered safety infrastructure that can be
            integrated into existing products, platforms and organizations.
          </p>

        </motion.div>

        {/* Customers */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          <CustomerCard
            icon={<FaHospital className="text-cyan-400" />}
            title="Hospitals"
            description="Emergency monitoring and intelligent patient alerts."
          />

          <CustomerCard
            icon={<FaSchool className="text-cyan-400" />}
            title="Schools"
            description="Student safety and campus emergency management."
          />

          <CustomerCard
            icon={<FaBuilding className="text-cyan-400" />}
            title="Enterprises"
            description="Workplace safety and employee emergency response."
          />

          <CustomerCard
            icon={<FaMicrochip className="text-cyan-400" />}
            title="Wearable OEMs"
            description="Integrate Axeiro APIs directly into smart devices."
          />

          <CustomerCard
            icon={<FaUniversity className="text-cyan-400" />}
            title="Government"
            description="Public safety and smart city emergency infrastructure."
          />

        </div>

        {/* Revenue */}

        <div className="mt-28">

          <h3 className="text-center text-4xl font-bold text-white">
            Revenue Streams
          </h3>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <RevenueCard
              title="SaaS Platform"
              subtitle="Monthly subscription for organizations using the dashboard."
            />

            <RevenueCard
              title="API Usage"
              subtitle="Pay-per-event pricing similar to communications APIs."
            />

            <RevenueCard
              title="SDK Licensing"
              subtitle="License Edge AI SDKs for wearable and IoT manufacturers."
            />

            <RevenueCard
              title="Enterprise"
              subtitle="Custom deployments, integrations and dedicated support."
            />

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10">

          <div className="grid items-center gap-8 lg:grid-cols-2">

            <div>

              <h3 className="text-4xl font-bold text-white">
                Infrastructure,
                not another safety app.
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Developers integrate Axeiro once and gain access to
                intelligent emergency detection, Edge AI, Cloud AI,
                dashboards and APIs without building the infrastructure
                from scratch.
              </p>

            </div>

            <div className="grid gap-5">

              <div className="flex items-center gap-4 rounded-xl bg-[#0B1120]/70 p-5">

                <FaMoneyBillWave className="text-3xl text-green-400" />

                <span className="text-white">
                  Subscription Revenue
                </span>

              </div>

              <div className="flex items-center gap-4 rounded-xl bg-[#0B1120]/70 p-5">

                <FaCode className="text-3xl text-cyan-400" />

                <span className="text-white">
                  API Monetization
                </span>

              </div>

              <div className="flex items-center gap-4 rounded-xl bg-[#0B1120]/70 p-5">

                <FaCloud className="text-3xl text-blue-400" />

                <span className="text-white">
                  Enterprise Cloud
                </span>

              </div>

              <div className="flex items-center gap-4 rounded-xl bg-[#0B1120]/70 p-5">

                <FaHandshake className="text-3xl text-yellow-400" />

                <span className="text-white">
                  Strategic Partnerships
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Business;