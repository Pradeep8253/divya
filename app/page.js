import Hero from "@/components/hero/Hero";
import Loader from "@/components/ui/Loader";
import BrandStatement from "@/components/sections/BrandStatement";
import About from "@/components/sections/About";
import WhyDivya from "@/components/sections/WhyDivya";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Portfolio from "@/components/sections/Portfolio";
import BeforeAfter from "@/components/sections/BeforeAfter";
import LookbookPreview from "@/components/sections/LookbookPreview";
import Testimonials from "@/components/sections/Testimonials";
import BrideStories from "@/components/sections/BrideStories";
import BridalPreparation from "@/components/sections/BridalPreparation";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <main>
      <Loader />
      <Hero />
      <BrandStatement />
      <About />
      <WhyDivya />
      <Services />
      <Packages />
      <Portfolio />
      <BeforeAfter />
      <LookbookPreview />
      <Testimonials />
      <BrideStories />
      <BridalPreparation />
      <FAQ />
      <Location />
    </main>
  );
}
