import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Play, Languages, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dubbing.jpg";

const DubbingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
              <Languages className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered Video
            <span className="block accent-gradient bg-clip-text text-transparent">
              Dubbing Platform
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your videos with cutting-edge AI technology. Speaker separation, 
            natural voice synthesis, and perfect audio synchronization in any language.
          </p>
          
          {/* Upload Area */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="upload-dropzone p-12 bg-white/5 backdrop-blur-sm border-white/20">
              <div className="text-center">
                <Upload className="h-16 w-16 text-white/70 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Upload Your Video
                </h3>
                <p className="text-white/70 mb-8">
                  Drag and drop your video file or click to browse
                </p>
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  Choose File
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm w-fit mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Speaker Separation
              </h3>
              <p className="text-white/70">
                Advanced AI identifies and separates individual speakers
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm w-fit mx-auto mb-4">
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Natural Translation
              </h3>
              <p className="text-white/70">
                Context-aware translation preserving meaning and emotion
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm w-fit mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Voice Synthesis
              </h3>
              <p className="text-white/70">
                Maintain original speaker's tone and speaking style
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DubbingHero;