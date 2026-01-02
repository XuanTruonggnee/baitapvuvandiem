import React from 'react';
import { Project } from '@/data/projects';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  X, 
  Target, 
  ListChecks, 
  FileImage, 
  BarChart3, 
  Shield,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Bot,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const Icon = project.icon;

  const sections = [
    {
      id: 'objective',
      title: 'Mục tiêu bài tập',
      icon: Target,
      content: (
        <ul className="space-y-2">
          {Array.isArray(project.objective.content) ? (
            project.objective.content.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))
          ) : (
            <li>{project.objective.content}</li>
          )}
        </ul>
      ),
    },
    {
      id: 'process',
      title: 'Quy trình thực hiện',
      icon: ListChecks,
      content: (
        <div className="space-y-3">
          {Array.isArray(project.process.content) ? (
            project.process.content.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <p className="text-sm">{step}</p>
              </div>
            ))
          ) : (
            <p className="text-sm">{project.process.content}</p>
          )}
        </div>
      ),
    },
    {
      id: 'evidence',
      title: 'Sản phẩm minh chứng',
      icon: FileImage,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {project.evidence.content}
          </p>
          
          {/* Image Gallery */}
          {project.evidence.images && project.evidence.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.evidence.images.map((image, i) => (
                <a
                  key={i}
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Minh chứng ${i + 1}`}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Xem ảnh gốc
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
          
          {/* Download Links */}
          {project.evidence.links && project.evidence.links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.evidence.links.map((link, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'analysis',
      title: 'Phân tích – Đánh giá',
      icon: BarChart3,
      content: (
        <div className="space-y-4">
          {/* Strengths */}
          <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <h5 className="font-semibold text-sm text-green-700">Điểm hiệu quả</h5>
            </div>
            <ul className="space-y-2">
              {project.analysis.strengths.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-4 h-4 text-amber-500" />
              <h5 className="font-semibold text-sm text-amber-700">Hạn chế</h5>
            </div>
            <ul className="space-y-2">
              {project.analysis.weaknesses.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-blue-500" />
              <h5 className="font-semibold text-sm text-blue-700">Cải thiện</h5>
            </div>
            <ul className="space-y-2">
              {project.analysis.improvements.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'integrity',
      title: 'Liêm chính học thuật & Sử dụng AI',
      icon: Shield,
      content: (
        <div className="space-y-4">
          {/* AI Usage */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-4 h-4 text-primary" />
              <h5 className="font-semibold text-sm">Sử dụng AI</h5>
            </div>
            <ul className="space-y-2">
              {project.academicIntegrity.aiUsage.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Verification */}
          <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-4 h-4 text-secondary" />
              <h5 className="font-semibold text-sm">Kiểm tra & Xác minh</h5>
            </div>
            <ul className="space-y-2">
              {project.academicIntegrity.verification.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className={cn(
          'relative p-6 bg-gradient-to-br text-white',
          project.color
        )}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-medium opacity-80">{project.chapter}</span>
              <DialogTitle className="text-2xl font-bold mt-1">
                {project.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-6">
            {sections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <SectionIcon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{section.title}</h4>
                  </div>
                  <div className="pl-10">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
