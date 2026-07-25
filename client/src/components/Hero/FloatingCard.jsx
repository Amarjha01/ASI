import { motion } from "framer-motion";

const FloatingCard = ({
    icon,
    title,
    subtitle,
    top,
    bottom,
    left,
    right
}) => {

    return (

        <motion.div

            animate={{
                y:[0,-20,0]
            }}

            transition={{
                repeat:Infinity,
                duration:5
            }}

            style={{
                top,
                bottom,
                left,
                right
            }}

            className="absolute w-60 rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-2xl"

        >

            <div className="text-3xl text-cyan-400">

                {icon}

            </div>

            <h2 className="mt-4 text-xl font-bold text-white">

                {title}

            </h2>

            <p className="mt-2 text-gray-400">

                {subtitle}

            </p>

        </motion.div>

    )

}

export default FloatingCard;