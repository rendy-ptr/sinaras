import HeroSection from '@/components/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import FooterSection from '@/components/FooterSection';
import ReviewSection from '@/components/ReviewSection';

export default function Home() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-brand-cream/20 selection:bg-brand-yellow selection:text-slate-900 min-h-screen relative">
      <HeroSection />

      <ProductShowcase />
      <FeatureSection />

      <ReviewSection />

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
