import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GetRevivedSection from "@/components/GetRevivedSection";
import IVTherapiesSection from "@/components/IVTherapiesSection";
import BoosterShotsSection from "@/components/BoosterShotsSection";
import WhyRevivSection from "@/components/WhyRevivSection";
import DoorstepSection from "@/components/DoorstepSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <GetRevivedSection />
        <IVTherapiesSection />
        <BoosterShotsSection />
        <WhyRevivSection />
        <DoorstepSection />
        <TestimonialsSection />
        <FAQSection />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
