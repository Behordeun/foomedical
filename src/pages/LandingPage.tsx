import { FeatureSection } from '../components/FeatureSection';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';

export function LandingPage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Footer />
    </>
  );
}