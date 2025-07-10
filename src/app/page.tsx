import Banner from "@/components/banner/Banner";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import Navbar from "@/components/navbar/Navbar";
import PricingSection from "@/components/pricingSection/PricingSection";
import TestimonialCarousel from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <div className="md:pt-8 pt-4 w-full mx-auto">
      <Navbar />
      <Banner />
      <DownloadApp />
      <Features />
      <HowItWorks />
      <TestimonialCarousel />
      <PricingSection />
      <Footer />
    </div>
  );
}
