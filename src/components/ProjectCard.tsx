import React from 'react';
import { Project } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="glass-card rounded-2xl p-6 h-full hover-lift transition-all duration-300 overflow-hidden">
        {/* Background Gradient */}
        <div className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br rounded-2xl',
          project.color
        )} />
        
        {/* Chapter Badge */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
            {project.chapter}
          </span>
          <div className={cn(
            'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-soft group-hover:shadow-medium group-hover:scale-110 transition-all duration-300',
            project.color
          )}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50 relative z-10">
          <span className="text-xs text-muted-foreground">
            {project.evidence.links?.length || 0} sản phẩm
          </span>
          <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
            Xem chi tiết
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className={cn(
          'absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none'
        )} />
      </div>
    </div>
  );
}
