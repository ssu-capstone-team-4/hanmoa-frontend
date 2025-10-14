import DubbingHero from "@/components/DubbingHero";
import ProjectDashboard from "@/components/ProjectDashboard";
import TimelinePreview from "@/components/TimelinePreview";
import AuthSection from "@/components/AuthSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DubbingHero />
      <ProjectDashboard />
      <TimelinePreview />
      <AuthSection />
    </div>
  );
};

export default Index;
