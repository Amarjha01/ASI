import { motion } from "framer-motion";

import {
    FaMicrophone,
    FaMapMarkerAlt,
    FaHeartbeat,
    FaBatteryHalf,
    FaRunning,
    FaWifi,
    FaMobileAlt,
    FaMicrochip
} from "react-icons/fa";

import SensorCard from "./SensorCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AbstractAnimation from "../../assets/Abstract animation for apps.lottie";
const Sensors = () => {

    return (

        <section id="sensors" className="bg-[#050816] py-32">

            <div className="mx-auto max-w-7xl px-8 relative">

                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    className="text-center"
                >

                    <p className="uppercase tracking-[5px] font-semibold text-cyan-400">

                        Data Sources

                    </p>

                    <h2 className="mt-5 text-5xl font-black text-white">

                        Powered by

                        <span className="text-cyan-400">

                            {" "}Real World Signals

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400 leading-8">

                        Axeiro continuously analyzes multiple weak signals from
                        wearables, smartphones and IoT devices to understand
                        emergencies before humans can react.

                    </p>

                </motion.div>
        <DotLottieReact
          src={AbstractAnimation}
          loop
          autoplay
          className="absolute lg:top-10  top-[50%] h-[40%] lg:left-[30%] lg:h-fit lg:w-[40%] lg:rotate-90 rotate-0"
        />
                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    <SensorCard
                        icon={<FaRunning/>}
                        title="Motion Sensors"
                        description="Accelerometer and gyroscope detect falls, sudden movements and unusual activity."
                    />

                    <SensorCard
                        icon={<FaMapMarkerAlt/>}
                        title="GPS"
                        description="Track abnormal movement, unsafe zones and last known location."
                    />

                    <SensorCard
                        icon={<FaMicrophone/>}
                        title="Microphone"
                        description="Detect screams, distress keywords and abnormal sound patterns using Edge AI."
                    />

                    <SensorCard
                        icon={<FaHeartbeat/>}
                        title="Health Sensors"
                        description="Heart rate, SpO₂ and other biometric indicators provide context during emergencies."
                    />

                    <SensorCard
                        icon={<FaBatteryHalf/>}
                        title="Battery Status"
                        description="Low battery awareness helps estimate device reliability during an incident."
                    />

                    <SensorCard
                        icon={<FaWifi/>}
                        title="Connectivity"
                        description="Wi-Fi, Bluetooth and network quality provide context about the device state."
                    />

                    <SensorCard
                        icon={<FaMobileAlt/>}
                        title="4G / 5G / LTE"
                        description="Continuous communication over cellular networks for real-time emergency events."
                    />

                    <SensorCard
                        icon={<FaMicrochip/>}
                        title="Edge AI"
                        description="All signals are analyzed locally before only meaningful events are securely transmitted."
                    />

                </div>

            </div>

        </section>

    )

}

export default Sensors;