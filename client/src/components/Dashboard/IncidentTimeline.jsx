import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaMicrophone,
} from "react-icons/fa";

const events = [
  {
    icon: <FaHeartbeat />,
    title: "Heart Rate Spike",
    time: "10:01 AM",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "GPS Anomaly",
    time: "10:01 AM",
  },
  {
    icon: <FaMicrophone />,
    title: "Scream Detected",
    time: "10:02 AM",
  },
  {
    icon: <FaCheckCircle />,
    title: "Emergency Triggered",
    time: "10:02 AM",
  },
];

const IncidentTimeline = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1120]/70 p-6">

      <h3 className="mb-6 text-xl font-bold text-white">
        Incident Timeline
      </h3>

      <div className="space-y-6">

        {events.map((event, index) => (
          <div key={index} className="flex gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">

              {event.icon}

            </div>

            <div>

              <h4 className="font-semibold text-white">
                {event.title}
              </h4>

              <p className="text-sm text-gray-400">
                {event.time}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default IncidentTimeline;