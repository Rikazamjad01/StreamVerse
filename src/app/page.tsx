import Banner from "@/components/banner/Banner";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import Features from "@/components/features/Features";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import Navbar from "@/components/navbar/Navbar";
import TestimonialCarousel from "@/components/testimonial/Testimonial";
// import TestimonialCarousel from '@/components/testimonial/Testimonial'

export default function Home() {
  return (
    <div className="md:pt-8 pt-4 w-full mx-auto">
      <Navbar />
      <Banner />
      <DownloadApp />
      <Features />
      <HowItWorks />
      <TestimonialCarousel />
    </div>
  );
}
