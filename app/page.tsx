import Hero from "./components/Hero";
import Services from "./components/Services";
import ConsultValues from "./components/ConsultValues";
import ContactInfo from "./components/ContactInfo";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Services />
      <ConsultValues />
      <ContactInfo />
      <ContactSection />
      <Footer />
    </div>
  );
}
