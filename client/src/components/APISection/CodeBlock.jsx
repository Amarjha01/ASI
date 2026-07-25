const code = `POST /v1/signals

{
  "deviceId": "watch_2041",
  "latitude": 28.4595,
  "longitude": 77.0266,
  "fallDetected": true,
  "voiceStress": 0.91,
  "heartRate": 161
}`;

const CodeBlock = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]">

      <div className="flex items-center gap-2 border-b border-white/10 p-4">

        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>

      </div>

      <pre className="overflow-x-auto p-6 text-sm text-cyan-300">

        <code>

          {code}

        </code>

      </pre>

    </div>
  );
};

export default CodeBlock;