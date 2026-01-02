import { 
  FolderOpen, 
  Search, 
  Sparkles, 
  Users, 
  Video, 
  Shield 
} from 'lucide-react';

// Import images
import bai1Step1 from '@/assets/bai1-step1.jpg';
import bai1Step2 from '@/assets/bai1-step2.jpg';
import bai1Step3 from '@/assets/bai1-step3.jpg';
import bai2Sources from '@/assets/bai2-sources.jpg';
import bai3Prompt1 from '@/assets/bai3-prompt1.jpg';
import bai3Prompt2 from '@/assets/bai3-prompt2.jpg';
import bai4Trello from '@/assets/bai4-trello.jpg';
import bai4Zoom from '@/assets/bai4-zoom.jpg';
import bai5Canva from '@/assets/bai5-canva.jpg';
import bai6Policy from '@/assets/bai6-policy.jpg';

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
  evidence: ProjectSection & { 
    links?: { label: string; url: string }[];
    images?: string[];
  };
  analysis: {
    strengths: string[];
    weaknesses: string[];
    improvements: string[];
  };
  academicIntegrity: {
    aiUsage: string[];
    verification: string[];
  };
  documentUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'chapter1',
    chapter: 'Chương 1',
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    shortDescription: 'Thiết kế cấu trúc thư mục học tập logic, quy tắc đặt tên tệp tin và quản lý tài liệu hiệu quả.',
    icon: FolderOpen,
    color: 'from-blue-500 to-cyan-500',
    documentUrl: '/documents/Bai_1_VuVanDiem.docx',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Thiết kế cấu trúc thư mục học tập logic và khoa học',
        'Thực hiện các thao tác cơ bản với tệp tin: tạo, sao chép, di chuyển, đổi tên, xóa',
        'Xây dựng quy tắc đặt tên tệp tin nhất quán và dễ tìm kiếm',
        'Phát triển kỹ năng quản lý tài liệu số hiệu quả',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Mở File Explorer và truy cập thư mục Tài Liệu (Documents)',
        'Bước 2: Sao chép tệp tin vào thư mục Tài Liệu bằng Ctrl + C và Ctrl + V',
        'Bước 3: Tạo thư mục mới có tên ThucHanh_VuVanDiem trong Documents',
        'Bước 4: Tạo tệp tin GhiChu.txt trong thư mục vừa tạo',
        'Bước 5: Đổi tên tệp tin thành GhiChuQuanTrong.txt',
        'Bước 6: Tạo thư mục con TaiLieu bên trong thư mục ThucHanh_VuVanDiem',
        'Bước 7: Di chuyển tệp tin vào thư mục con',
        'Bước 8: Xóa tệp tin và khôi phục từ Recycle Bin',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Ảnh chụp màn hình từng bước thực hiện, cấu trúc thư mục hoàn chỉnh ThucHanh_VuVanDiem với các thư mục con và tệp tin đúng quy tắc đặt tên.',
      images: [bai1Step1, bai1Step2, bai1Step3],
      links: [
        { label: 'Tải file gốc bài tập', url: '/documents/Bai_1_VuVanDiem.docx' },
      ],
    },
    analysis: {
      strengths: [
        'Thực hiện đầy đủ các bước theo hướng dẫn',
        'Cấu trúc thư mục rõ ràng, logic với tên ThucHanh_VuVanDiem',
        'Quy tắc đặt tên nhất quán, không dấu, dễ tìm kiếm',
        'Có ảnh chụp màn hình minh chứng cho từng bước',
      ],
      weaknesses: [
        'Một số bước thực hiện chưa có chú thích đầy đủ',
        'Cần thêm thời gian để quen với phím tắt',
      ],
      improvements: [
        'Tạo template cấu trúc thư mục cho các môn học khác',
        'Sử dụng thêm các phím tắt để tăng hiệu suất',
        'Đồng bộ thư mục với Google Drive để backup',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Không sử dụng AI trong bài tập này',
        'Thực hiện hoàn toàn theo hướng dẫn của giảng viên',
      ],
      verification: [
        'Tự thực hiện từng bước trên máy tính cá nhân',
        'Chụp ảnh màn hình làm minh chứng thực hiện',
        'Đối chiếu với yêu cầu bài tập trên LMS',
      ],
    },
  },
  {
    id: 'chapter2',
    chapter: 'Chương 2',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    shortDescription: 'Nghiên cứu về chính sách nới lỏng tiền tệ, tìm kiếm tài liệu học thuật và đánh giá độ tin cậy nguồn.',
    icon: Search,
    color: 'from-emerald-500 to-teal-500',
    documentUrl: '/documents/Bai_2_VuVanDiem.docx',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Phát triển kỹ năng tìm kiếm thông tin học thuật chuyên sâu',
        'Áp dụng các toán tử tìm kiếm nâng cao (site:, filetype:, ...)',
        'Đánh giá độ tin cậy của nguồn thông tin theo 5 tiêu chí',
        'Xây dựng danh sách tài liệu tham khảo chất lượng cho nghiên cứu',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Xác định chủ đề nghiên cứu: "Tác động của chính sách nới lỏng tiền tệ lên nền kinh tế"',
        'Bước 2: Tìm kiếm trên Google Scholar và các cơ sở dữ liệu như NBER, Federal Reserve',
        'Bước 3: Sử dụng từ khóa như "Quantitative Easing", "Large-Scale Asset Purchases"',
        'Bước 4: Thu thập 12 tài liệu học thuật từ các nguồn uy tín',
        'Bước 5: Đánh giá từng tài liệu theo 5 tiêu chí: Tác giả, Cơ quan, Phương pháp, Trích dẫn, Cập nhật',
        'Bước 6: Tổng hợp và xếp hạng độ tin cậy (scale 1-5)',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Bảng đánh giá 12 tài liệu học thuật về chính sách nới lỏng tiền tệ, bao gồm các nghiên cứu từ Federal Reserve, Brookings Institution, NBER, và các tác giả hàng đầu như Gagnon, Bernanke, Krishnamurthy.',
      images: [bai2Sources],
      links: [
        { label: 'Tải file gốc bài tập', url: '/documents/Bai_2_VuVanDiem.docx' },
      ],
    },
    analysis: {
      strengths: [
        'Thu thập được 12 tài liệu học thuật chất lượng cao',
        'Đánh giá chi tiết theo nhiều tiêu chí khách quan',
        'Các nguồn đến từ cơ quan uy tín: Fed, Brookings, BIS, IMF',
        'Phân tích sâu về phương pháp nghiên cứu của từng tài liệu',
      ],
      weaknesses: [
        'Một số tài liệu hơi cũ (2003-2010)',
        'Chưa có tài liệu từ các nền kinh tế mới nổi',
      ],
      improvements: [
        'Bổ sung tài liệu nghiên cứu mới hơn (2020-2024)',
        'Tìm thêm case study về QE ở châu Á',
        'Hoàn thiện format trích dẫn theo chuẩn APA',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng AI để gợi ý từ khóa tìm kiếm mở rộng',
        'AI hỗ trợ giải thích các thuật ngữ kinh tế phức tạp',
        'Không dùng AI để viết nội dung đánh giá',
      ],
      verification: [
        'Truy cập trực tiếp các trang của Federal Reserve, NBER, Brookings',
        'Kiểm tra số lần trích dẫn trên Google Scholar',
        'Xác minh thông tin tác giả và cơ quan công bố',
      ],
    },
  },
  {
    id: 'chapter3',
    chapter: 'Chương 3',
    title: 'Viết prompt hiệu quả cho học tập',
    shortDescription: 'Thực hành viết prompt từ cơ bản đến nâng cao cho các tác vụ học thuật: tóm tắt, giải thích khái niệm, tạo câu hỏi ôn tập.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    documentUrl: '/documents/Bai_3_VuVanDiem.docx',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Hiểu và áp dụng các kỹ thuật viết prompt hiệu quả',
        'So sánh kết quả giữa prompt cơ bản, cải tiến và nâng cao',
        'Phân tích lý do tại sao một số prompt hoạt động tốt hơn',
        'Tổng hợp nguyên tắc viết prompt cho các tác vụ học tập khác nhau',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Chọn 3 tác vụ học tập: Tóm tắt tài liệu, Giải thích khái niệm, Tạo câu hỏi ôn tập',
        'Bước 2: Viết 3 mức prompt cho mỗi tác vụ: Cơ bản - Cải tiến - Nâng cao',
        'Bước 3: Sử dụng ChatGPT để test các prompt',
        'Bước 4: So sánh chất lượng đầu ra của mỗi mức prompt',
        'Bước 5: Phân tích các yếu tố làm prompt hiệu quả hơn',
        'Bước 6: Tổng hợp 7 nguyên tắc viết prompt hiệu quả',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Bảng so sánh 9 prompt (3 tác vụ x 3 mức độ) với kết quả đầu ra, phân tích chi tiết về "Giá trị gia tăng nội địa" (DVA) và nghịch lý thương mại Việt Nam.',
      images: [bai3Prompt1, bai3Prompt2],
      links: [
        { label: 'Tải file gốc bài tập', url: '/documents/Bai_3_VuVanDiem.docx' },
      ],
    },
    analysis: {
      strengths: [
        'Áp dụng đúng các kỹ thuật: role prompting, chain-of-thought, few-shot',
        'So sánh rõ ràng giữa 3 mức độ prompt',
        'Ví dụ thực tế với chủ đề kinh tế (DVA, thương mại)',
        'Tổng hợp 7 nguyên tắc viết prompt hiệu quả',
      ],
      weaknesses: [
        'Một số prompt nâng cao khá dài, có thể tối ưu hơn',
        'Chưa test trên nhiều AI khác nhau để so sánh',
      ],
      improvements: [
        'Thử nghiệm prompt trên Gemini, Claude để so sánh',
        'Xây dựng thư viện prompt mẫu cho các môn học',
        'Thêm ví dụ về prompt cho tác vụ sáng tạo',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng ChatGPT như đối tượng thử nghiệm prompt',
        'AI tạo đầu ra để phân tích và so sánh',
        'Prompt nâng cao sử dụng kỹ thuật role prompting',
      ],
      verification: [
        'Đánh giá đầu ra AI theo tiêu chí học thuật',
        'Đối chiếu thông tin với giáo trình kinh tế quốc tế',
        'Viết phân tích và kết luận hoàn toàn bằng tư duy cá nhân',
      ],
    },
  },
  {
    id: 'chapter4',
    chapter: 'Chương 4',
    title: 'Hợp tác trực tuyến cho dự án nhóm',
    shortDescription: 'Sử dụng Trello, Google Docs, Zoom, Google Drive để quản lý dự án "Tác động của AI đến thị trường lao động".',
    icon: Users,
    color: 'from-orange-500 to-amber-500',
    documentUrl: '/documents/Bai_4_VuVanDiem.docx',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Thành thạo sử dụng các công cụ hợp tác trực tuyến',
        'Phân công và theo dõi nhiệm vụ nhóm hiệu quả với Trello',
        'Cộng tác viết tài liệu đồng thời trên Google Docs',
        'Tổ chức cuộc họp trực tuyến chuyên nghiệp qua Zoom',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Lập kế hoạch dự án "Tác động của AI đến người lao động"',
        'Bước 2: Thiết lập Trello Board với các cột: To Do, In Progress, Review, Done',
        'Bước 3: Phân công nhiệm vụ: Nghiên cứu, Thu thập dữ liệu, Viết báo cáo, Thiết kế slide',
        'Bước 4: Tạo cuộc họp Zoom, làm người điều phối và ghi hình cuộc họp',
        'Bước 5: Cộng tác viết báo cáo trên Google Docs với Comments và Suggested Edits',
        'Bước 6: Tổ chức file trên Google Drive theo cấu trúc: 01_Nguon, 02_Du_lieu, 03_Ban_thao, 04_San_pham',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Ảnh chụp màn hình Trello Board, Meeting Info Zoom (ID: 815 6208 5871), Google Docs với nhiều người cùng chỉnh sửa, cấu trúc Google Drive nhóm.',
      images: [bai4Trello, bai4Zoom],
      links: [
        { label: 'Tải file gốc bài tập', url: '/documents/Bai_4_VuVanDiem.docx' },
      ],
    },
    analysis: {
      strengths: [
        'Phân công công việc rõ ràng, có deadline cụ thể trên Trello',
        'Vai trò người điều phối cuộc họp Zoom chuyên nghiệp',
        'Google Docs hỗ trợ làm việc đồng thời hiệu quả',
        'Cấu trúc Drive nhóm logic, dễ tìm kiếm',
      ],
      weaknesses: [
        'Lịch làm việc không đồng bộ giữa các thành viên',
        'Một số thành viên chưa quen sử dụng Trello',
        'Quy tắc đặt tên file ban đầu chưa thống nhất',
      ],
      improvements: [
        'Tổ chức mini video hướng dẫn Trello cho thành viên mới',
        'Thiết lập quy tắc phản hồi trong 24h',
        'Ghi lại cuộc họp Zoom để người vắng xem lại',
        'Đưa ra quy tắc đặt tên file chung từ đầu',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Không sử dụng AI để viết nội dung báo cáo nhóm',
        'Tất cả nội dung do các thành viên tự viết và đóng góp',
        'Chỉ sử dụng công cụ để tổ chức và quản lý công việc',
      ],
      verification: [
        'Ghi nhận đóng góp của từng thành viên qua Trello',
        'Lịch sử chỉnh sửa Google Docs minh chứng ai viết phần nào',
        'Recording cuộc họp Zoom làm bằng chứng làm việc nhóm',
      ],
    },
  },
  {
    id: 'chapter5',
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số với AI',
    shortDescription: 'Tạo bài thuyết trình về "Ứng dụng AI trong học tập" sử dụng Grok và Canva AI.',
    icon: Video,
    color: 'from-rose-500 to-pink-500',
    documentUrl: '/documents/Bai_5_VuVanDiem.docx',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Sáng tạo nội dung thuyết trình về ứng dụng AI trong học tập',
        'Kết hợp AI tạo văn bản (Grok) và AI thiết kế (Canva AI)',
        'Phân tích vai trò của AI trong quy trình sáng tạo nội dung số',
        'Nhận thức các vấn đề đạo đức khi sử dụng AI sáng tạo',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Viết nội dung 8 slide về "Ứng dụng AI trong Học Tập: Hướng Dẫn Thực Tế"',
        'Bước 2: Sử dụng Grok (AI) để tạo cấu trúc và nội dung chi tiết cho từng slide',
        'Bước 3: Prompt cho Grok: "Bạn là chuyên gia về viết nội dung số, viết nội dung bài thuyết trình..."',
        'Bước 4: Sử dụng Canva AI để thiết kế slide từ nội dung đã có',
        'Bước 5: Chỉnh sửa màu sắc, layout và bổ sung chi tiết',
        'Bước 6: Phân tích vai trò AI: điểm mạnh, điểm yếu, vấn đề đạo đức',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Bài thuyết trình hoàn chỉnh trên Canva với 8 slide về AI trong học tập, bao gồm: Giới thiệu, Khái niệm AI, Cá nhân hóa học tập, Hỗ trợ nghiên cứu, Đánh giá tự động, Lợi ích, Thách thức, Kết luận.',
      images: [bai5Canva],
      links: [
        { label: 'Tải file gốc bài tập', url: '/documents/Bai_5_VuVanDiem.docx' },
        { label: 'Xem bài thuyết trình Canva', url: 'https://www.canva.com/design/DAG7XUaciik/YzV7v0zVPDg1HnrT0nzM7w/edit' },
      ],
    },
    analysis: {
      strengths: [
        'Kết hợp hiệu quả hai công cụ AI: Grok tạo nội dung, Canva thiết kế',
        'Nội dung có cấu trúc logic, liên kết mạch lạc giữa các slide',
        'Phân tích sâu về vai trò AI trong sáng tạo nội dung',
        'Nhận thức rõ các vấn đề đạo đức: quyền tác giả, phụ thuộc AI, bias',
      ],
      weaknesses: [
        'Nội dung AI tạo ra thường mang tính tổng hợp, thiếu trải nghiệm cá nhân',
        'AI không thực sự "hiểu" ý nghĩa, chỉ dự đoán chuỗi từ hợp lý',
      ],
      improvements: [
        'Bổ sung trải nghiệm và ví dụ cá nhân vào nội dung AI tạo',
        'Luôn kiểm tra và chỉnh sửa đầu ra của AI',
        'Phát triển năng lực tư duy phản biện khi sử dụng AI',
        'Ghi nhận rõ vai trò của AI trong sản phẩm cuối',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng Grok để tạo cấu trúc và nội dung draft cho bài thuyết trình',
        'Canva AI hỗ trợ thiết kế layout và hình ảnh',
        'AI là công cụ hỗ trợ, không thay thế tư duy sáng tạo',
      ],
      verification: [
        'Đánh giá và chỉnh sửa nội dung AI tạo theo tiêu chuẩn học thuật',
        'Bổ sung quan điểm và phân tích cá nhân',
        'Ghi rõ prompt đã sử dụng và vai trò của AI trong báo cáo',
      ],
    },
  },
  {
    id: 'chapter6',
    chapter: 'Chương 6',
    title: 'Sử dụng AI có trách nhiệm',
    shortDescription: 'Nghiên cứu chính sách AI của VNU-UEB, phân tích vấn đề đạo đức và xây dựng bộ nguyên tắc cá nhân.',
    icon: Shield,
    color: 'from-indigo-500 to-blue-500',
    documentUrl: '/documents/Bai_6_VuVanDiem.docx',
    objective: {
      title: 'Mục tiêu bài tập',
      content: [
        'Nghiên cứu chính sách sử dụng AI trong học tập của VNU và UEB',
        'Phân tích các vấn đề đạo đức liên quan đến AI trong học thuật',
        'Thực hành sử dụng AI để hỗ trợ ôn thi môn Triết học Mác-Lênin',
        'Xây dựng bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm',
      ],
    },
    process: {
      title: 'Quy trình thực hiện',
      content: [
        'Bước 1: Nghiên cứu chính sách AI của VNU và UEB từ các nguồn chính thức',
        'Bước 2: Phân tích: Cho phép sử dụng AI như công cụ hỗ trợ, Cấm thay thế hoàn toàn nỗ lực cá nhân',
        'Bước 3: So sánh với chính sách của Harvard, NUS',
        'Bước 4: Thực hành: Sử dụng ChatGPT tóm tắt đề cương Triết học Mác-Lênin',
        'Bước 5: Prompt: "Bạn là chuyên gia triết học, tóm tắt đề cương ôn thi trắc nghiệm..."',
        'Bước 6: Đánh giá, chỉnh sửa đầu ra AI và đối chiếu với giáo trình',
        'Bước 7: Phân tích 4 vấn đề đạo đức: Ranh giới gian lận, Quyền sở hữu trí tuệ, Tác động đến học tập, Công bằng giáo dục',
      ],
    },
    evidence: {
      title: 'Sản phẩm minh chứng',
      content: 'Báo cáo nghiên cứu chính sách AI của VNU-UEB, bảng tóm tắt đề cương Triết học Mác-Lênin 6 chương, phân tích 4 vấn đề đạo đức AI trong học thuật.',
      images: [bai6Policy],
      links: [
        { label: 'Tải file gốc bài tập', url: '/documents/Bai_6_VuVanDiem.docx' },
      ],
    },
    analysis: {
      strengths: [
        'Nghiên cứu chi tiết chính sách AI của VNU và UEB',
        'Phân tích sâu 4 vấn đề đạo đức quan trọng',
        'Thực hành minh chứng việc sử dụng AI có trách nhiệm',
        'Có đối chiếu với chính sách của các đại học quốc tế',
      ],
      weaknesses: [
        'VNU chưa có khung chính sách thống nhất như các đại học quốc tế',
        'Ranh giới giữa hỗ trợ và gian lận đôi khi còn mờ nhạt',
      ],
      improvements: [
        'Cập nhật thường xuyên khi VNU ban hành chính sách mới',
        'Xây dựng checklist kiểm tra trước khi nộp bài có sử dụng AI',
        'Tham gia các hội thảo về AI trong giáo dục của UEB',
      ],
    },
    academicIntegrity: {
      aiUsage: [
        'Sử dụng ChatGPT để hỗ trợ hệ thống hóa nội dung đề cương',
        'AI gợi ý khung ý ban đầu cho bản tóm tắt',
        'Nội dung cuối cùng được đối chiếu với giáo trình và chỉnh sửa bởi bản thân',
      ],
      verification: [
        'Đối chiếu với giáo trình Triết học chính thức',
        'Kiểm tra thuật ngữ và định nghĩa với slide bài giảng',
        'Viết lại hoàn toàn bằng ngôn ngữ của mình',
        'Ghi rõ trích dẫn: "Trong quá trình tóm tắt, tôi có sử dụng ChatGPT để hỗ trợ..."',
      ],
    },
  },
];
