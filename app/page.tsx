import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import Features from "@/components/Features";
import AlertsSection from "@/components/AlertsSection";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import { CTAFooter, Footer } from "@/components/CTAFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MetricsBar />
      <section id="features">
        <Features />
      </section>
      <AlertsSection />
      <Pricing />
      <Docs />
      <CTAFooter />
      <Footer />
    </main>
  );
}
