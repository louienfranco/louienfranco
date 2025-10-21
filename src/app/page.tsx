import HeroSection from "@/components/about/hero-section";
import { DottedGridPattern } from "@/components/custom/bg-style";
import Toggle from "@/components/theme/toggle-theme";

import AboutSection from "@/components/about/about";

export default function Home() {
  return (
    <>
      <Toggle />
      <main className="font-sans flex min-h-screen flex-col">
        <DottedGridPattern
          width={28}
          height={28}
          cr={1}
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
          ]}
          className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        />
        <HeroSection />
      </main>

      <AboutSection />
    </>
  );
}
