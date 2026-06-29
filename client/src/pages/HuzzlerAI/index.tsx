import Hero from "./components/Hero";
import Journey from "./components/Journey";
import StandFor from "./components/StandFor";
import Metrics from "./components/Metrics";
import Team from "./components/Team";
import Advantage from "./components/Advantage";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import JoinMission from "./components/JoinMission";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function HuzzlerAI() {
  return (
    <div className="bg-white">
      <Hero />
      <Journey />
      <StandFor />
      <Metrics />
      <Team />
      <Advantage />
      <Process />
      <Impact />
      <Testimonials />
      <JoinMission />
      <CTA />
      <Footer />
    </div>
  );
}
