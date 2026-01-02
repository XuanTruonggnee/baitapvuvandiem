import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  Heart, 
  Lightbulb, 
  Mountain, 
  Star,
  Quote,
  TrendingUp,
  BookOpen,
  Sparkles
} from 'lucide-react';

const reflections = [
  {
    icon: Heart,
    title: 'Cảm nhận cá nhân',
    content: 'Hành trình xây dựng Portfolio này đã giúp tôi nhận ra việc học không chỉ dừng lại ở kiến thức lý thuyết mà còn là quá trình tự phản tư, tự đánh giá và không ngừng hoàn thiện bản thân. Mỗi bài tập là một cơ hội để tôi thực sự hiểu sâu hơn về công nghệ số và cách ứng dụng nó trong cuộc sống.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Kiến thức & Kỹ năng nổi bật',
    content: 'Tôi đã học được cách khai thác thông tin hiệu quả, sử dụng AI có trách nhiệm, và làm việc nhóm trong môi trường số. Đặc biệt, kỹ năng tư duy phản biện và khả năng tự đánh giá công việc của mình đã được cải thiện đáng kể. Việc sáng tạo nội dung số cũng trở nên dễ dàng hơn nhờ các công cụ hiện đại.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Mountain,
    title: 'Khó khăn & Cách vượt qua',
    content: 'Ban đầu, việc quản lý thời gian để hoàn thành đủ các phần của mỗi bài tập là một thách thức lớn. Tôi đã học cách lập kế hoạch chi tiết hơn, sử dụng Trello để theo dõi tiến độ, và không ngại nhờ sự hỗ trợ từ bạn bè và giảng viên khi gặp vấn đề.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Star,
    title: 'Điều tâm đắc nhất',
    content: 'Điều tôi tâm đắc nhất là đã xây dựng được một Portfolio hoàn chỉnh - minh chứng cho quá trình học tập nghiêm túc của mình. Portfolio này không chỉ là bài tập mà còn là tài sản số, có thể sử dụng để thể hiện năng lực với nhà tuyển dụng trong tương lai.',
    color: 'from-purple-500 to-violet-500',
  },
];

const achievements = [
  { label: 'Bài tập hoàn thành', value: '6', icon: BookOpen },
  { label: 'Kỹ năng mới', value: '10+', icon: Sparkles },
  { label: 'Công cụ số sử dụng', value: '15+', icon: TrendingUp },
];

export function ConclusionSection() {
  return (
    <section id="conclusion" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tổng kết
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Hành trình</span> học tập
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nhìn lại quá trình học tập, phản tư và rút ra bài học quý giá
          </p>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection className="mb-16" delay={100}>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-4 md:p-6 text-center hover-lift"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Reflections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reflections.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={index * 100}
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 h-full hover-lift">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold pt-2">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Quote */}
        <AnimatedSection delay={400}>
          <div className="relative max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary/20 absolute -top-2 left-1/2 -translate-x-1/2" />
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium italic text-foreground/90 mb-6">
                "Portfolio này không chỉ là bài tập cuối kỳ, mà là điểm khởi đầu cho hành trình phát triển kỹ năng số của tôi trong tương lai. Mỗi phản tư, mỗi đánh giá đều là bài học quý giá để tôi tiếp tục hoàn thiện."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="text-left">
                  <p className="font-semibold">Nguyễn Văn A</p>
                  <p className="text-sm text-muted-foreground">Sinh viên CNTT</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
