import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Download,
  Edit,
  MoreHorizontal,
  PlayCircle,
  FileText,
  Languages,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ProjectDashboard = () => {
  const projects = [
    {
      id: 1,
      title: "Marketing Video KR",
      originalLanguage: "English",
      targetLanguage: "Korean",
      status: "completed",
      duration: "3:24",
      createdAt: "2024-01-15",
      thumbnail: "/api/placeholder/400/225",
    },
    {
      id: 2,
      title: "Product Demo JP",
      originalLanguage: "English",
      targetLanguage: "Korean",
      status: "processing",
      duration: "8:15",
      createdAt: "2024-01-14",
      thumbnail: "/api/placeholder/400/225",
    },
    {
      id: 3,
      title: "Training Video ES",
      originalLanguage: "English",
      targetLanguage: "Korean",
      status: "review",
      duration: "12:30",
      createdAt: "2024-01-12",
      thumbnail: "/api/placeholder/400/225",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Clock className="w-3 h-3 mr-1" />
            Processing
          </Badge>
        );
      case "review":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            Review
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              더빙 프로젝트
            </h2>
            <p className="text-lg text-muted-foreground">
              내 영상을 관리하고 진행 상황을 확인하세요
            </p>
          </div>
          <Button size="lg" className="px-6">
            새 더빙 시작
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4">
                  {getStatusBadge(project.status)}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">{project.duration}</div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Languages className="h-4 w-4" />
                  <span>
                    {project.originalLanguage} → {project.targetLanguage}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>생성일 {project.createdAt}</span>
                </div>

                <div className="flex gap-2">
                  {project.status === "completed" && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      다운로드
                    </Button>
                  )}
                  {project.status === "review" && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-2" />
                      검토하기
                    </Button>
                  )}
                  {project.status === "processing" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      disabled
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      처리 중...
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">
                    전체 프로젝트
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-emerald-100">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-muted-foreground">완료됨</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">처리 중</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-amber-100">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">검토 중</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectDashboard;
