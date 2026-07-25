import { motion } from "framer-motion";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const TimelineItem = ({
    completed,
    phase,
    title,
    description
}) => {

    return (

        <motion.div
            whileHover={{x:10}}
            className="flex gap-6"
        >

            <div className="mt-1">

                {
                    completed ?

                        <FaCheckCircle className="text-2xl text-cyan-400"/>

                        :

                        <FaCircle className="text-xl text-gray-600"/>

                }

            </div>

            <div>

                <p className="uppercase tracking-[4px] text-sm text-cyan-400">

                    {phase}

                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">

                    {title}

                </h3>

                <p className="mt-3 leading-7 text-gray-400">

                    {description}

                </p>

            </div>

        </motion.div>

    )

}

export default TimelineItem;