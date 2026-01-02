import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar,
  Mail,
  Github,
  Linkedin,
  Heart
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Student Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Portfolio Sinh viên</h3>
                <p className="text-sm text-background/60">Digital Learning Journey</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Portfolio này được xây dựng như một phần của môn học, thể hiện quá trình học tập và phát triển kỹ năng số.
            </p>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              Thông tin môn học
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 mt-0.5 text-primary" />
                <span>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Năm học 2024 - 2025</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Liên hệ
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="mailto:student@university.edu.vn" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  student@university.edu.vn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  github.com/student
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/student
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60 text-center md:text-left">
            © 2024 Digital Portfolio. Xây dựng với
            <Heart className="w-4 h-4 inline-block mx-1 text-red-500" />
            bằng React & Tailwind CSS
          </p>
          <div className="flex items-center gap-4 text-sm text-background/60">
            <span>Nguyễn Văn A</span>
            <span className="w-1 h-1 rounded-full bg-background/40" />
            <span>MSSV: 123456789</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
