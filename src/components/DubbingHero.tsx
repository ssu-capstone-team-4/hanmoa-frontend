import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Play, Languages, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dubbing.jpg";

const DubbingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-5">
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
            한모아
            <span className="block accent-gradient bg-clip-text text-transparent mt-3">
              AI로 완성하는 자연스러운 영상 더빙
            </span>
          </h1>

          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            화자의 말투는 그대로, 언어만 자연스럽게 바꾸세요. <br />
            AI 더빙 플랫폼 한모아가 당신의 영상을 새롭게 말해줍니다.
          </p>

          {/* Upload Area */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="upload-dropzone p-12 bg-white/5 backdrop-blur-sm border-white/20">
              <div className="text-center">
                <Upload className="h-16 w-16 text-black/70 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-black mb-4">
                  더빙할 영상을 업로드해 주세요
                </h3>
                <p className="text-black/70 mb-8">
                  파일을 드래그하거나 클릭해서 선택할 수 있어요
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-lg"
                >
                  파일 선택
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
                {/* Speaker Separation */}
                목소리를 알아듣는 AI
              </h3>
              <p className="text-white/70">
                AI가 각 인물의 목소리를 <br /> 정교하게 구분해요
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm w-fit mx-auto mb-4">
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {/* Natural Translation */}
                말투를 살린 자연스러운 번역
              </h3>
              <p className="text-white/70">
                문맥과 감정을 살리는 <br /> 자연스러운 한국어 번역
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm w-fit mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {/* Voice Synthesis */}
                원래 목소리 느낌 그대로
              </h3>
              <p className="text-white/70">
                화자의 말투와 음색을 최대한 살린 <br /> 고품질 음성 합성
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DubbingHero;
