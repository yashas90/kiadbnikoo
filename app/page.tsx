import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { KiadbSection } from "@/components/sections/KiadbSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { BuilderSection } from "@/components/sections/BuilderSection";
import { SiteVisitSection } from "@/components/sections/SiteVisitSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { ExitIntentModal } from "@/components/ExitIntentModal";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <KiadbSection />
        <HighlightsSection />
        <PricingSection />
        <LocationSection />
        <AmenitiesSection />
        <BuilderSection />
        <SiteVisitSection />
        <FaqSection />
        <TrustSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <StickyMobileBar />
      <ExitIntentModal />
    </>
  );
}
