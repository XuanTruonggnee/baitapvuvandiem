import React, { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects, Project } from '@/data/projects';
import { FolderOpen } from 'lucide-react';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Dự án học tập
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Các <span className="gradient-text">bài tập</span> đã hoàn thành
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mỗi dự án là một hành trình học tập, thể hiện sự phát triển về kiến thức và kỹ năng số
          </p>
        </AnimatedSection>

        {/* Timeline Indicator */}
        <AnimatedSection className="mb-12" delay={100}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{projects.length} bài tập</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Chương 1</span>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <span>Chương 6</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-16" delay={600}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <span className="text-2xl">💡</span>
            <p className="text-sm font-medium">
              Click vào từng dự án để xem chi tiết quy trình thực hiện và phản tư học tập
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
