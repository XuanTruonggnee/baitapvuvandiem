import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, BookOpen, Code2 } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-background to-accent/30" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Digital Portfolio 2024-2025
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-foreground">Xin chào, tôi là</span>
          <span className="block gradient-text mt-2">Nguyễn Văn A</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Sinh viên ngành <span className="text-primary font-semibold">Công nghệ Thông tin</span>
          <br className="hidden sm:block" />
          Đam mê khám phá công nghệ số & Trí tuệ nhân tạo
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {[
            { icon: BookOpen, label: 'Học tập chủ động' },
            { icon: Code2, label: 'Kỹ năng số' },
            { icon: Sparkles, label: 'AI có trách nhiệm' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            variant="hero"
            size="xl"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Xem các dự án
            <ArrowDown className="w-5 h-5 ml-1" />
          </Button>
          <Button
            variant="glass"
            size="xl"
            onClick={scrollToAbout}
          >
            Tìm hiểu về tôi
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Cuộn xuống</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
