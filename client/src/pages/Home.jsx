import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Problem from "../components/Problem/Problem";
import Architecture from "../components/Architecture/Architecture";
import Dashboard from "../components/Dashboard/Dashboard";
import APISection from "../components/APISection/APISection";
import WhyAxeiro from "../components/WhyAxeiro/WhyAxeiro";
import Business from "../components/Business/Business";
import Roadmap from "../components/Roadmap/Roadmap";
// import CTA from "../components/CTA/Cta";
import Footer from "../components/Footer/Footer";
import Sensors from "../components/Sensors/Sensors";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#050816] text-white">

        <Hero />

        <Problem />

        <Architecture />

        <Sensors />

        <Dashboard />

        <APISection />

        <WhyAxeiro />

        <Business />

        <Roadmap />

        {/* <CTA /> */}

      </main>

      <Footer />
    </>
  );
};

export default Home;