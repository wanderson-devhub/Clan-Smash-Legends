"use client";

import { useEffect } from "react";
import Navbar from "@/components/ui/layout/navbar";
import HeroSection from "@/components/ui/layout/hero-section";
import StatsSection from "@/components/ui/layout/stats-section";
import AboutSection from "@/components/ui/layout/about-section";
import AchievementsSection from "@/components/ui/layout/achievements-section";
import MembersSection from "@/components/ui/layout/members-section";
import JoinSection from "@/components/ui/layout/join-section";
import Footer from "@/components/ui/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { WelcomeToast } from "@/components/ui/layout/welcome-toast";

export function ClanName() {
  return "TeenWolf";
}

export default function Home() {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast when the page loads
    toast({
      variant: "clan",
      title: (
        <div>
          <WelcomeToast />
        </div>
      ) as unknown as string,
    });
  }, [toast]);

  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-b from-[#0F1133] to-[#1B1F40]">
      <Toaster />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AchievementsSection />
      <MembersSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
