import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Founder />
      <Services />
      <Process />
      <Cta />
      <Footer />
    </main>
  );
}
