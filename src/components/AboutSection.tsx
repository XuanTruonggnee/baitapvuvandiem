import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  User, 
  GraduationCap, 
  Heart, 
  Target, 
  Folder,
  Code2,
  Brain,
  Lightbulb,
  BookOpen,
  Cpu
} from 'lucide-react';

const skills = [
  { name: 'Tư duy phản biện', level: 85, icon: Brain },
  { name: 'Kỹ năng số', level: 80, icon: Code2 },
  { name: 'Sử dụng AI', level: 75, icon: Cpu },
  { name: 'Làm việc nhóm', level: 90, icon: Heart },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Giới thiệu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Về <span className="gradient-text">tôi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Khám phá hành trình học tập và phát triển kỹ năng số của tôi
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Profile Info */}
          <AnimatedSection animation="fade-left">
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <User className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-card flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">Vũ Văn Điềm</h3>
                    <div className="flex items-center gap-2 justify-center sm:justify-start text-muted-foreground mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>Sinh viên Đại học Kinh tế - ĐHQGHN</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <Code2 className="w-4 h-4" />
                      Kinh tế - Chính trị
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Sở thích</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Học tập số',
                    'Tư duy hệ thống',
                    'AI trong giáo dục',
                    'Kinh tế học',
                    'Phân tích dữ liệu',
                    'Nghiên cứu học thuật',
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Progress */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Kỹ năng</h4>
                </div>
                <div className="space-y-5">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Goals */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="space-y-8">
              {/* Learning Goals */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Mục tiêu học tập</h4>
                    <p className="text-sm text-muted-foreground">Định hướng phát triển cá nhân</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Tôi đặt mục tiêu <span className="text-foreground font-medium">nâng cao kỹ năng số, biết cách tìm kiếm - đánh giá - sử dụng thông tin</span> và ứng dụng AI như một công cụ hỗ trợ tư duy, không thay thế tư duy.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Phát triển tư duy hệ thống và kỹ năng số',
                      'Sử dụng AI hiệu quả và có trách nhiệm trong học tập',
                      'Biết cách đánh giá độ tin cậy của nguồn thông tin',
                      'Xây dựng năng lực làm việc trong môi trường số',
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-primary text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-sm">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Portfolio Goals */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Mục tiêu Portfolio</h4>
                    <p className="text-sm text-muted-foreground">Lý do xây dựng portfolio này</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Portfolio này được tạo ra nhằm <span className="text-foreground font-medium">lưu trữ các bài tập học phần, thể hiện quá trình học tập</span> và năng lực cá nhân, dễ dàng chia sẻ và đánh giá.
                  </p>
                  <div className="grid gap-3">
                    {[
                      { icon: BookOpen, text: 'Trình bày 6 bài tập học phần đầy đủ và chi tiết' },
                      { icon: Brain, text: 'Thể hiện tư duy và quá trình thực hiện mỗi bài' },
                      { icon: Cpu, text: 'Minh chứng việc sử dụng AI có trách nhiệm' },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                          <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="absolute -top-3 left-6 text-4xl text-primary/30">"</div>
                <p className="text-lg font-medium italic text-foreground/90 pt-4">
                  Học tập không chỉ là tiếp thu kiến thức, mà còn là hành trình khám phá và hoàn thiện bản thân mỗi ngày.
                </p>
                <p className="text-sm text-muted-foreground mt-3">— Châm ngôn của tôi</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
