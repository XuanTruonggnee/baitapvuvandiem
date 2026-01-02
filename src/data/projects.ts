import { 
  Monitor, 
  Database, 
  Brain, 
  Users, 
  Palette, 
  Shield 
} from 'lucide-react';

export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  id: string;
  chapter: string;
  title: string;
  shortDescription: string;
  icon: any;
  color: string;
  objective: ProjectSection;
  process: ProjectSection;
  evidence: ProjectSection & { links?: { label: string; url: string }[] };
  analysis: {
    strengths: string[];
    weaknesses: string[];
    improvements: string[];
  };
  academicIntegrity: {
    aiUsage: string[];
    verification: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'chapter1',
    chapter: 'Chương 1',
    title: 'Máy tính & Thiết bị ngoại vi',
    shortDescription: 'Khám phá cấu tạo, chức năng của máy tính và các thiết bị ngoại vi trong hệ sinh thái số.',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Hiểu rõ cấu tạo và chức năng của các thành phần máy tính',
        'Nhận biết và phân loại các thiết bị ngoại vi phổ biến',
        'Nắm được cách kết nối và sử dụng thiết bị ngoại vi hiệu quả',
        'Liên hệ kiến thức với ứng dụng thực tế trong học tập và công việc',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Nghiên cứu tài liệu về cấu tạo máy tính từ slide bài giảng và nguồn bổ sung',
        'Bước 2: Sử dụng Canva để thiết kế infographic minh họa các thành phần',
        'Bước 3: Tạo bảng so sánh các loại thiết bị ngoại vi bằng Google Docs',
        'Bước 4: Quay video giới thiệu setup máy tính cá nhân bằng điện thoại',
        'Bước 5: Biên tập video với CapCut, thêm phụ đề và chú thích',
        'Bước 6: Tổng hợp và nộp bài qua Google Drive',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Infographic về cấu tạo máy tính, bảng so sánh thiết bị ngoại vi, video giới thiệu setup cá nhân.',
      links: [
        { label: 'Xem Infographic', url: '#' },
        { label: 'Xem Video', url: '#' },
        { label: 'Google Drive', url: '#' },
      ],
    },
    analysis: {
      strengths: [
        'Trình bày trực quan, dễ hiểu với infographic sinh động',
        'Video có âm thanh rõ ràng, nội dung súc tích',
        'Đã liên hệ được với trải nghiệm cá nhân',
      ],
      weaknesses: [
        'Một số thuật ngữ kỹ thuật chưa được giải thích đầy đủ',
        'Video hơi dài, có thể cắt bớt phần không cần thiết',
      ],
      improvements: [
        'Thêm glossary giải thích thuật ngữ kỹ thuật',
        'Rút ngắn video xuống dưới 5 phút',
        'Bổ sung thêm ví dụ thực tế về thiết bị mới nhất',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng ChatGPT để gợi ý cấu trúc bài viết ban đầu',
        'AI hỗ trợ giải thích một số thuật ngữ kỹ thuật phức tạp',
        'Không sao chép nguyên văn, chỉ tham khảo ý tưởng',
      ],
      verification: [
        'Đối chiếu thông tin với tài liệu chính thức của nhà sản xuất',
        'Kiểm tra lại với slide bài giảng của giảng viên',
        'Viết lại hoàn toàn bằng ngôn ngữ của bản thân',
      ],
    },
  },
  {
    id: 'chapter2',
    chapter: 'Chương 2',
    title: 'Khai thác dữ liệu & Thông tin',
    shortDescription: 'Phát triển kỹ năng tìm kiếm, đánh giá và sử dụng thông tin một cách hiệu quả.',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Nắm vững kỹ năng tìm kiếm thông tin hiệu quả trên Internet',
        'Phát triển khả năng đánh giá độ tin cậy của nguồn thông tin',
        'Biết cách tổ chức và lưu trữ dữ liệu một cách khoa học',
        'Ứng dụng các công cụ số trong quản lý thông tin cá nhân',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Xác định chủ đề nghiên cứu và từ khóa tìm kiếm',
        'Bước 2: Sử dụng Google Scholar và các cơ sở dữ liệu học thuật',
        'Bước 3: Đánh giá nguồn tin theo tiêu chí CRAAP',
        'Bước 4: Tổ chức thông tin bằng Notion với hệ thống tag',
        'Bước 5: Tạo mindmap tổng hợp bằng Miro/Canva',
        'Bước 6: Viết báo cáo phân tích và rút ra bài học',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Báo cáo đánh giá nguồn tin, Notion workspace, mindmap tổng hợp kiến thức.',
      links: [
        { label: 'Notion Workspace', url: '#' },
        { label: 'Mindmap', url: '#' },
        { label: 'Báo cáo PDF', url: '#' },
      ],
    },
    analysis: {
      strengths: [
        'Hệ thống hóa thông tin rõ ràng, dễ tra cứu',
        'Áp dụng đúng tiêu chí đánh giá nguồn tin',
        'Notion workspace được tổ chức logic',
      ],
      weaknesses: [
        'Một số nguồn tin còn thiếu trích dẫn đầy đủ',
        'Mindmap có thể chi tiết hơn ở một số nhánh',
      ],
      improvements: [
        'Hoàn thiện format trích dẫn theo chuẩn APA',
        'Thêm liên kết giữa các khái niệm trong mindmap',
        'Cập nhật định kỳ Notion workspace',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng AI để gợi ý từ khóa tìm kiếm mở rộng',
        'ChatGPT hỗ trợ giải thích các tiêu chí đánh giá nguồn tin',
        'Không dùng AI để viết nội dung báo cáo',
      ],
      verification: [
        'Truy cập trực tiếp các nguồn tin để xác minh',
        'Cross-check thông tin giữa nhiều nguồn độc lập',
        'Sử dụng công cụ kiểm tra fact-check',
      ],
    },
  },
  {
    id: 'chapter3',
    chapter: 'Chương 3',
    title: 'Tổng quan về Trí tuệ nhân tạo',
    shortDescription: 'Tìm hiểu về AI, các ứng dụng thực tế và cách sử dụng AI có trách nhiệm.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Hiểu được khái niệm và lịch sử phát triển của AI',
        'Nhận biết các ứng dụng AI trong đời sống và học tập',
        'Nắm được nguyên tắc sử dụng AI có trách nhiệm',
        'Thực hành sử dụng các công cụ AI phổ biến',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Nghiên cứu tài liệu về lịch sử và phân loại AI',
        'Bước 2: Thực hành với ChatGPT, Gemini, Claude',
        'Bước 3: Sử dụng DALL-E/Midjourney tạo hình ảnh AI',
        'Bước 4: Ghi chép nhật ký sử dụng AI trong 1 tuần',
        'Bước 5: Phân tích ưu nhược điểm của từng công cụ',
        'Bước 6: Tổng hợp thành bài trình bày PowerPoint',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Bài trình bày về AI, nhật ký sử dụng AI, bộ sưu tập hình ảnh AI.',
      links: [
        { label: 'Slides', url: '#' },
        { label: 'Nhật ký AI', url: '#' },
        { label: 'Gallery', url: '#' },
      ],
    },
    analysis: {
      strengths: [
        'Trải nghiệm đa dạng với nhiều công cụ AI khác nhau',
        'Nhật ký chi tiết, ghi nhận cả thành công và thất bại',
        'Bài trình bày sinh động với nhiều ví dụ thực tế',
      ],
      weaknesses: [
        'Chưa đi sâu vào nguyên lý hoạt động của AI',
        'Một số so sánh giữa các công cụ còn chủ quan',
      ],
      improvements: [
        'Bổ sung kiến thức về Machine Learning cơ bản',
        'Thêm tiêu chí đánh giá khách quan hơn',
        'Cập nhật thêm các công cụ AI mới ra mắt',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng AI như đối tượng nghiên cứu chính của bài',
        'Thử nghiệm và ghi nhận phản hồi của AI',
        'AI tạo hình ảnh minh họa cho bài trình bày',
      ],
      verification: [
        'Kiểm tra thông tin AI cung cấp với nguồn đáng tin cậy',
        'Ghi rõ prompt đã sử dụng và kết quả nhận được',
        'Phân biệt rõ nội dung do AI tạo và do bản thân viết',
      ],
    },
  },
  {
    id: 'chapter4',
    chapter: 'Chương 4',
    title: 'Giao tiếp & Hợp tác trong môi trường số',
    shortDescription: 'Phát triển kỹ năng làm việc nhóm và giao tiếp hiệu quả qua các nền tảng số.',
    icon: Users,
    color: 'from-orange-500 to-amber-500',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Nắm vững kỹ năng giao tiếp chuyên nghiệp qua email và chat',
        'Biết cách sử dụng các công cụ hợp tác trực tuyến',
        'Phát triển kỹ năng làm việc nhóm từ xa',
        'Xây dựng văn hóa làm việc số lịch sự và hiệu quả',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Thành lập nhóm và phân công nhiệm vụ trên Trello',
        'Bước 2: Thiết lập kênh giao tiếp qua Discord/Slack',
        'Bước 3: Cộng tác viết tài liệu trên Google Docs',
        'Bước 4: Tổ chức họp online qua Google Meet',
        'Bước 5: Sử dụng Miro cho brainstorming online',
        'Bước 6: Tổng hợp và đánh giá quá trình làm việc nhóm',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Trello board, Google Docs chung, recording cuộc họp, Miro board.',
      links: [
        { label: 'Trello Board', url: '#' },
        { label: 'Google Docs', url: '#' },
        { label: 'Miro Board', url: '#' },
      ],
    },
    analysis: {
      strengths: [
        'Phân công công việc rõ ràng, có deadline cụ thể',
        'Giao tiếp thường xuyên, giải quyết vấn đề kịp thời',
        'Sản phẩm cuối cùng đạt chất lượng tốt',
      ],
      weaknesses: [
        'Đôi khi gặp khó khăn về múi giờ và lịch trình',
        'Một số thành viên phản hồi chậm',
      ],
      improvements: [
        'Thiết lập quy tắc phản hồi trong 24h',
        'Sử dụng async communication nhiều hơn',
        'Tạo template cho các loại tài liệu thường dùng',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'AI hỗ trợ soạn thảo email chuyên nghiệp',
        'Sử dụng AI để tóm tắt nội dung cuộc họp',
        'ChatGPT gợi ý cách giải quyết xung đột nhóm',
      ],
      verification: [
        'Review nội dung email trước khi gửi',
        'Xác nhận tóm tắt cuộc họp với các thành viên',
        'Điều chỉnh gợi ý của AI phù hợp với tình huống thực tế',
      ],
    },
  },
  {
    id: 'chapter5',
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số',
    shortDescription: 'Thực hành tạo các sản phẩm nội dung số đa dạng với công cụ hiện đại.',
    icon: Palette,
    color: 'from-rose-500 to-pink-500',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Nắm được quy trình sáng tạo nội dung số từ ý tưởng đến sản phẩm',
        'Sử dụng thành thạo các công cụ thiết kế và biên tập',
        'Hiểu về bản quyền và sử dụng tài nguyên hợp pháp',
        'Tạo ra sản phẩm có tính thẩm mỹ và giá trị truyền thông',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Brainstorm ý tưởng và lập kế hoạch nội dung',
        'Bước 2: Thiết kế poster/banner bằng Canva',
        'Bước 3: Quay và biên tập video ngắn bằng CapCut',
        'Bước 4: Tạo infographic tổng hợp kiến thức',
        'Bước 5: Sử dụng nhạc và hình ảnh có bản quyền hợp lệ',
        'Bước 6: Publish và nhận feedback',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Poster, video TikTok/Reel, infographic, tài liệu ghi chép bản quyền.',
      links: [
        { label: 'Poster Collection', url: '#' },
        { label: 'Video', url: '#' },
        { label: 'Infographic', url: '#' },
      ],
    },
    analysis: {
      strengths: [
        'Sản phẩm có tính thẩm mỹ cao, thu hút',
        'Tuân thủ đầy đủ quy định về bản quyền',
        'Nội dung phù hợp với đối tượng mục tiêu',
      ],
      weaknesses: [
        'Một số thiết kế chưa tối ưu cho mobile',
        'Video có thể ngắn gọn hơn',
      ],
      improvements: [
        'Thiết kế theo mobile-first approach',
        'Học thêm về video storytelling',
        'Thử nghiệm với các format nội dung mới',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng AI để gợi ý ý tưởng thiết kế',
        'Canva AI hỗ trợ tạo layout tự động',
        'AI suggest nhạc nền phù hợp cho video',
      ],
      verification: [
        'Kiểm tra bản quyền hình ảnh qua TinEye/Google Images',
        'Sử dụng nhạc từ thư viện miễn phí bản quyền',
        'Ghi credit đầy đủ cho tài nguyên sử dụng',
      ],
    },
  },
  {
    id: 'chapter6',
    chapter: 'Chương 6',
    title: 'An toàn & Liêm chính học thuật',
    shortDescription: 'Hiểu về an toàn số, bảo mật thông tin và thực hành liêm chính học thuật.',
    icon: Shield,
    color: 'from-indigo-500 to-blue-500',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Nắm vững kiến thức về an toàn thông tin cá nhân',
        'Hiểu rõ các nguyên tắc liêm chính học thuật',
        'Biết cách nhận diện và tránh các rủi ro trên mạng',
        'Xây dựng thói quen sử dụng Internet an toàn',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Nghiên cứu về các loại tấn công mạng phổ biến',
        'Bước 2: Kiểm tra và tăng cường bảo mật tài khoản cá nhân',
        'Bước 3: Tìm hiểu quy định về liêm chính học thuật của trường',
        'Bước 4: Thực hành sử dụng công cụ kiểm tra đạo văn',
        'Bước 5: Tạo checklist an toàn số cá nhân',
        'Bước 6: Viết cam kết về liêm chính học thuật',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Báo cáo an toàn số, checklist bảo mật, cam kết liêm chính học thuật.',
      links: [
        { label: 'Báo cáo', url: '#' },
        { label: 'Checklist', url: '#' },
        { label: 'Cam kết', url: '#' },
      ],
    },
    analysis: {
      strengths: [
        'Hiểu rõ các rủi ro và biện pháp phòng tránh',
        'Đã áp dụng xác thực 2 lớp cho các tài khoản',
        'Có ý thức cao về liêm chính học thuật',
      ],
      weaknesses: [
        'Một số thói quen cũ khó thay đổi ngay',
        'Cần cập nhật kiến thức thường xuyên hơn',
      ],
      improvements: [
        'Thiết lập reminder kiểm tra bảo mật định kỳ',
        'Theo dõi tin tức về an ninh mạng',
        'Chia sẻ kiến thức với bạn bè và gia đình',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'AI giải thích các thuật ngữ bảo mật phức tạp',
        'Sử dụng AI để tìm kiếm best practices',
        'Không dùng AI viết cam kết - hoàn toàn tự viết',
      ],
      verification: [
        'Kiểm tra thông tin với nguồn chính thức (CERT, NCSC)',
        'Tham khảo quy định của trường',
        'Xác minh các công cụ bảo mật được khuyên dùng',
      ],
    },
  },
];
