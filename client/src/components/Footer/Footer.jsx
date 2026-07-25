import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="text-3xl font-black text-white">Axeiro</h2>

            <p className="mt-5 leading-8 text-gray-400">
              AI-powered Safety Infrastructure for intelligent emergency
              response.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5">Platform</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#architecture">Architecture</a>
              </li>
              <li>
                <a href="#dashboard">Dashboard</a>
              </li>
              <li><a href="#api">API</a></li>
              <li><a href="#vision">Roadmap</a></li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-bold text-white mb-5">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-bold text-white mb-5">Connect</h3>

            <div className="flex gap-5 text-2xl text-gray-400">
              <a href="https://github.com/Amarjha01/ASI">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/company/axeiro">
                <FaLinkedin />
              </a>

              <a href="https://twitter.com/axeirohq">
                <FaXTwitter />
              </a>
              <a href="mailto:admin@axeiro.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-gray-500">
            © 2026 Axeiro . All rights reserved.
          </p>

          <p className="text-gray-500">
            Building the Intelligence Layer for Emergency Response.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
