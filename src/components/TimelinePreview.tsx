import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Settings,
  Download,
  Edit3,
  Layers,
  Activity
} from "lucide-react";
import { useState } from "react";

const TimelinePreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([45]);
  const [volume, setVolume] = useState([80]);

  const speakers = [
    { id: 1, name: "Speaker 1", color: "bg-blue-500", segments: [{start: 0, end: 30}, {start: 60, end: 90}] },
    { id: 2, name: "Speaker 2", color: "bg-emerald-500", segments: [{start: 30, end: 60}, {start: 90, end: 120}] },
    { id: 3, name: "Narrator", color: "bg-purple-500", segments: [{start: 120, end: 180}] }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Advanced Timeline Editor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fine-tune your dubbing with precision controls, speaker separation, and real-time preview
          </p>
        </div>

        <Card className="video-timeline max-w-6xl mx-auto">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Marketing Video KR - Timeline</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  <Layers className="w-3 h-3 mr-1" />
                  3 Speakers
                </Badge>
                <Badge variant="outline">Korean</Badge>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Video Preview */}
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="text-white/60 mb-4">
                  <Activity className="h-16 w-16 mx-auto" />
                </div>
                <div className="text-white text-lg mb-2">Marketing Video Demo</div>
                <div className="text-white/60 text-sm">00:45 / 03:24</div>
              </div>
              
              {/* Play Controls Overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Timeline Controls */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-sm font-medium text-muted-foreground min-w-[60px]">
                  00:45
                </div>
                <div className="flex-1">
                  <Slider
                    value={currentTime}
                    onValueChange={setCurrentTime}
                    max={204}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="text-sm font-medium text-muted-foreground min-w-[60px]">
                  03:24
                </div>
              </div>

              {/* Speaker Tracks */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Speaker Tracks</h4>
                  <Button variant="outline" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Segments
                  </Button>
                </div>
                
                {speakers.map((speaker) => (
                  <div key={speaker.id} className="flex items-center gap-4">
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <div className={`w-3 h-3 rounded-full ${speaker.color}`}></div>
                      <span className="text-sm font-medium">{speaker.name}</span>
                    </div>
                    <div className="flex-1 h-8 bg-muted rounded relative">
                      {speaker.segments.map((segment, index) => (
                        <div
                          key={index}
                          className={`absolute h-full ${speaker.color} rounded opacity-80`}
                          style={{
                            left: `${(segment.start / 204) * 100}%`,
                            width: `${((segment.end - segment.start) / 204) * 100}%`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <Volume2 className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1 max-w-[200px]">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                />
              </div>
              <span className="text-sm text-muted-foreground min-w-[40px]">
                {volume[0]}%
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Fine-tune
                </Button>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Audio Settings
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  Save Draft
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Export Video
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TimelinePreview;