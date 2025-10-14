import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Chrome, Shield, Zap } from "lucide-react";

const AuthSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            몇 초 만에 시작해보세요
          </h2>
          <p className="text-lg text-muted-foreground">
            원하는 방식으로 로그인하고 지금 바로 한모아를 경험해보세요!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Login */}
          <Card className="project-card">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">간편 로그인</CardTitle>
              <p className="text-muted-foreground">
                기존 계정으로 바로 시작할 수 있어요
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                size="lg"
                variant="outline"
                className="w-full justify-start gap-3 h-12"
              >
                <Chrome className="h-5 w-5 text-[#4285f4]" />
                Google 계정으로 계속하기
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full justify-start gap-3 h-12"
              >
                <Github className="h-5 w-5" />
                GitHub 계정으로 계속하기
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  로그인하면 서비스 이용약관 및 개인정보 처리방침에 동의하게
                  됩니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="project-card">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">왜 가입해야 하나요?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">프로젝트 보안 유지</h4>
                  <p className="text-sm text-muted-foreground">
                    영상과 더빙 프로젝트는 안전하게 보호됩니다.
                  </p>
                </div>
              </div> */}

              {/* <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">빠른 처리. ㅗㄱ도</h4>
                  <p className="text-sm text-muted-foreground">
                    Priority access to our AI dubbing pipeline
                  </p>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">프로젝트 기록 관리</h4>
                  <p className="text-sm text-muted-foreground">
                    언제 어디서나 내가 작업한 더빙 프로젝트를 다시 확인할 수
                    있어요
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
