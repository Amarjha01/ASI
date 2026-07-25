import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Cta = () => {

    return (

        <section className="bg-[#050816] py-32">

            <div className="mx-auto max-w-6xl px-8">

                <motion.div

                    initial={{opacity:0}}

                    whileInView={{opacity:1}}

                    viewport={{once:true}}

                    className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-16 text-center"

                >

                    <h2 className="text-5xl font-black text-white">

                        Building the Intelligence Layer

                        <span className="block text-cyan-400">

                            for Emergency Response

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

                        Whether you're building a wearable,
                        healthcare platform, smart campus,
                        enterprise solution or public safety application,
                        Axeiro provides the infrastructure
                        to build faster.

                    </p>

                    <div className="mt-12 flex justify-center gap-6">

                        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white hover:scale-105 transition">

                            Book Demo

                        </button>

                        <button className="flex items-center gap-3 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white hover:border-cyan-400">

                            Developer Docs

                            <FaArrowRight/>

                        </button>

                    </div>

                </motion.div>

            </div>

        </section>

    )

}

export default Cta;