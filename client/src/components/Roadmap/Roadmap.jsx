import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

const Roadmap = () => {

    return (

        <section id="vision" className="bg-[#050816] py-32">

            <div className="mx-auto max-w-6xl px-8">

                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    className="text-center"
                >

                    <p className="uppercase tracking-[5px] font-semibold text-cyan-400">

                        Vision

                    </p>

                    <h2 className="mt-5 text-5xl font-black text-white">

                        Building the Future of

                        <span className="text-cyan-400">

                            {" "}Safety Infrastructure

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

                        We are starting with AI-powered emergency detection,
                        but our long-term vision is to become the infrastructure
                        layer powering safety applications worldwide.

                    </p>

                </motion.div>

                <div className="relative mt-24">

                    <div className="absolute left-4 top-0 h-full w-[2px] bg-cyan-500/20"/>

                    <div className="space-y-16">

                        <TimelineItem

                            completed

                            phase="Phase 1"

                            title="Developer Platform"

                            description="Safety APIs, dashboards, Edge AI and Cloud AI infrastructure."

                        />

                        <TimelineItem

                            completed={false}

                            phase="Phase 2"

                            title="Enterprise Platform"

                            description="Organizations manage employees, campuses and emergency workflows."

                        />

                        <TimelineItem

                            completed={false}

                            phase="Phase 3"

                            title="OEM Integrations"

                            description="Native SDKs for smartwatches, wearables and IoT manufacturers."

                        />

                        <TimelineItem

                            completed={false}

                            phase="Phase 4"

                            title="Global Safety Infrastructure"

                            description="Become the Stripe for AI-powered safety by providing APIs and infrastructure for developers worldwide."

                        />

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Roadmap;