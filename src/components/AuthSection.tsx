import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Chrome, Shield, Zap } from "lucide-react";

const AuthSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-lg text-muted-foreground">
            Sign in with your preferred method and start dubbing videos instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Login */}
          <Card className="project-card">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Quick Sign In</CardTitle>
              <p className="text-muted-foreground">
                Use your existing account to get started immediately
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full justify-start gap-3 h-12"
              >
                <Chrome className="h-5 w-5 text-[#4285f4]" />
                Continue with Google
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full justify-start gap-3 h-12"
              >
                <Github className="h-5 w-5" />
                Continue with GitHub
              </Button>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="project-card">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Why Sign Up?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Secure Projects</h4>
                  <p className="text-sm text-muted-foreground">
                    Your videos and dubbing projects are encrypted and private
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Priority access to our AI dubbing pipeline
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Project History</h4>
                  <p className="text-sm text-muted-foreground">
                    Access all your dubbing projects anytime, anywhere
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