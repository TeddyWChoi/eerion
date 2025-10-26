import { HeroSection } from './components/hero-section';
import { FeaturesSection } from './components/features-section';
import { ScreenshotsSection } from './components/screenshots-section';
import { BuddysCallSection } from './components/buddys-call-section';
import { FixedScreensSection } from './components/fixed-screens-section';
import { CTASection } from './components/cta-section';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { LanguageProvider } from './contexts/language-context';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <FixedScreensSection />
          <BuddysCallSection />
          <ScreenshotsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
