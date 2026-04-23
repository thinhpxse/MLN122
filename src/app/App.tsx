import React, { useState, useEffect } from 'react';
import {
  Factory,
  Settings,
  TrendingUp,
  Globe,
  Sprout,
  Cpu,
  Handshake,
  Target,
  Book,
  MapPin,
  Rocket,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Users,
  BarChart3
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const phases = [
    {
      period: '1960–1985',
      color: '#D49A1A',
      icon: <Factory className="w-6 h-6" />,
      image: '/images/phase-1960-1985.png',
      imageAspect: 'aspect-[4/3] lg:aspect-[3/5]',
      label: 'Khởi đầu với khát vọng Công nghiệp nặng',
      achievements: [
        'Bắt đầu từ ĐH III (1960) ở miền Bắc, áp dụng cả nước sau 1975.',
        'Áp dụng rập khuôn mô hình CNH Liên Xô, ưu tiên CN nặng ngay từ đầu.',
        'Cơ chế kế hoạch hóa tập trung, mệnh lệnh, huy động qua nhà nước.'
      ],
      challenges: [
        'Do nóng vội, đầu tư dàn trải khi chưa đủ vốn và công nghệ.',
        'Nền kinh tế mất cân đối nghiêm trọng, trì trệ và khủng hoảng đầu thập kỷ 80.'
      ]
    },
    {
      period: '1986–Nay',
      color: '#D4AF37',
      icon: <Sprout className="w-6 h-6" />,
      image: '/images/phase-1986-now.png',
      imageAspect: 'aspect-[4/3] lg:aspect-[4/5]',
      label: 'Bước ngoặt Đổi mới & CNH hiện đại',
      achievements: [
        '1986: Khởi xướng Đổi mới, thực hiện 3 chương trình: Lương thực, Tiêu dùng, Xuất khẩu.',
        '1994: Khẳng định "CNH gắn liền với HĐH", chuyển sử dụng lao động thủ công sang công nghệ tiên tiến.',
        '2011-Nay: CNH-HĐH gắn với kinh tế tri thức, bảo vệ môi trường, thích ứng Cách mạng 4.0.'
      ],
      challenges: []
    },
    {
      period: 'Tổng Kết',
      color: '#C5A572',
      icon: <TrendingUp className="w-6 h-6" />,
      image: null,
      imageAspect: '',
      label: 'Thành tựu, Hạn chế & Thách thức',
      achievements: [
        'Thành tựu: Thoát tình trạng kém phát triển, trở thành nước có thu nhập trung bình.',
        'Cơ cấu tích cực: Tỷ trọng công nghiệp/dịch vụ tăng, giá trị nông nghiệp cao nhờ công nghệ.'
      ],
      challenges: [
        'Hạn chế: Năng suất lao động xã hội thấp, trình độ công nghệ nhiều ngành còn lạc hậu.',
        'Thách thức: Áp lực tụt hậu về kinh tế, công nghệ nếu không đổi mới hệ thống quản lý & nhân lực trước làn sóng 4.0.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]" style={{ fontFamily: "'Be Vietnam Pro', serif" }}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#0A0A0A]/98 backdrop-blur-sm shadow-sm border-b border-[#D49A1A]/30'
          : 'bg-transparent'
        }`}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-[#D49A1A]">
                <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-1">
                  Triết Học • Thực Tiễn
                </div>
                <div className="font-semibold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  MLN122
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors text-sm tracking-wide"
              >
                TRANG CHỦ
              </button>
              <button
                onClick={() => scrollToSection('timeline')}
                className="text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors text-sm tracking-wide"
              >
                PHÂN TÍCH LỘ TRÌNH
              </button>
              <button
                onClick={() => scrollToSection('comparison')}
                className="text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors text-sm tracking-wide"
              >
                CÁC MÔ HÌNH
              </button>
              <button
                onClick={() => scrollToSection('strategy')}
                className="text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors text-sm tracking-wide"
              >
                ĐỊNH HƯỚNG 4.0
              </button>
              <button
                onClick={() => scrollToSection('ai-usage')}
                className="text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors text-sm tracking-wide"
              >
                CAM KẾT AI
              </button>
              <a
                href="https://mln122-team7.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors text-sm tracking-wide"
              >
                MINI GAME
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#D49A1A]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden pb-6 space-y-4 border-t border-[#D49A1A]/30 pt-4"
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-[#6B5644]/80 hover:text-[#6B5644] transition-colors py-2 text-sm tracking-wide"
              >
                TRANG CHỦ
              </button>
              <button
                onClick={() => scrollToSection('timeline')}
                className="block w-full text-left text-[#6B5644]/80 hover:text-[#6B5644] transition-colors py-2 text-sm tracking-wide"
              >
                PHÂN TÍCH LỘ TRÌNH
              </button>
              <button
                onClick={() => scrollToSection('comparison')}
                className="block w-full text-left text-[#6B5644]/80 hover:text-[#6B5644] transition-colors py-2 text-sm tracking-wide"
              >
                CÁC MÔ HÌNH
              </button>
              <button
                onClick={() => scrollToSection('strategy')}
                className="block w-full text-left text-[#6B5644]/80 hover:text-[#6B5644] transition-colors py-2 text-sm tracking-wide"
              >
                ĐỊNH HƯỚNG 4.0
              </button>
              <button
                onClick={() => scrollToSection('ai-usage')}
                className="block w-full text-left text-[#6B5644]/80 hover:text-[#6B5644] transition-colors py-2 text-sm tracking-wide"
              >
                CAM KẾT AI
              </button>
              <a
                href="https://mln122-team7.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-[#6B5644]/80 hover:text-[#6B5644] transition-colors py-2 text-sm tracking-wide"
              >
                MINI GAME
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D49A1A] to-transparent"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654124803050-57ec5e258437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMHN0dWR5aW5nJTIwcGhpbG9zb3BoeXxlbnwxfHx8fDE3NzY2NzIwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Triết học"
                  className="w-full h-full object-cover filter sepia-[0.2]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
              </div>


            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="inline-block px-4 py-2 border border-[#D49A1A]/50 mb-6">
                  <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">
                    Nghiên Cứu Triết Học
                  </p>
                </div>
              </div>

              <h1
                className="text-4xl lg:text-6xl mb-6 text-[#D49A1A] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Lộ Trình Công Nghiệp Hóa - Hiện Đại Hóa của Việt Nam
              </h1>

              <h2 className="text-xl lg:text-2xl text-[#D4AF37] mb-6 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Từ Đổi Mới (1986) đến Cách Mạng Công Nghiệp 4.0
              </h2>

              <p className="text-[#D49A1A]/80 mb-8 leading-relaxed text-lg">
                Một trang sách triết học không chỉ là những dòng chữ khô khan, mà là kết tinh của hằng nghìn năm tư duy nhân loại. Từ những bản thảo cổ xưa từ tưởng Mác–Lênin hiện đại, tri thức luôn gắn liền với thực tiễn.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('timeline')}
                  className="px-8 py-4 bg-[#D49A1A] text-[#0A0A0A] hover:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2 group font-semibold"
                >
                  <span className="tracking-wider text-sm">KHÁM PHÁ LỘ TRÌNH</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('comparison')}
                  className="px-8 py-4 border-2 border-[#D49A1A] text-[#D49A1A] hover:bg-[#D49A1A]/10 transition-all duration-300"
                >
                  <span className="tracking-wider text-sm">TÌM HIỂU THÊM</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#D49A1A]/30">
                <div>
                  <div className="text-3xl font-bold text-[#D49A1A] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>1986</div>
                  <div className="text-xs text-[#D4AF37]/70 tracking-wide uppercase">Khởi điểm</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D49A1A] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>38</div>
                  <div className="text-xs text-[#D4AF37]/70 tracking-wide uppercase">Năm CNH</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D49A1A] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>2045</div>
                  <div className="text-xs text-[#D4AF37]/70 tracking-wide uppercase">Mục tiêu</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D49A1A]/50 to-transparent"></div>
      </div>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 border border-[#D49A1A]/50 mb-6">
              <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Phần I</p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#D49A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Phân Tích Lộ Trình CNH-HĐH
            </h2>
            <p className="text-[#D4AF37]/70 text-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Hành trình công nghiệp hóa của Việt Nam qua các thế hệ
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Period marker */}
                  <div className="lg:col-span-3">
                    <div className="sticky top-32">
                      <div
                        className="inline-flex items-center gap-3 px-4 py-2"
                        style={{ borderLeft: `3px solid ${phase.color}` }}
                      >
                        <div style={{ color: phase.color }}>
                          {phase.icon}
                        </div>
                        <div>
                          <div className="font-bold text-[#D49A1A] text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {phase.period}
                          </div>
                        </div>
                      </div>

                      {phase.image && (
                        <div className={`mt-5 overflow-hidden border border-[#D49A1A]/30 rounded-sm ${phase.imageAspect}`}>
                          <ImageWithFallback
                            src={phase.image}
                            alt={phase.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <h3 className="text-2xl font-bold text-[#D49A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {phase.label}
                    </h3>

                    <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 rounded-sm h-full">
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm tracking-[0.15em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
                          <div className="w-1 h-4" style={{ backgroundColor: phase.color }}></div>
                          Thành tựu nổi bật
                        </h4>
                        <ul className="space-y-3">
                          {phase.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-[#D49A1A]/90">
                              <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: phase.color }} />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {phase.challenges.length > 0 && (
                        <div className="pt-6 border-t border-[#D49A1A]/20">
                          <h4 className="text-sm tracking-[0.15em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
                            <div className="w-1 h-4 bg-[#C5A572]/50"></div>
                            Hạn chế / Thách thức
                          </h4>
                          <ul className="space-y-3">
                            {phase.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-3 text-[#D49A1A]/70">
                                <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-[#C5A572]/50" />
                                <span className="leading-relaxed">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute left-[12.5%] top-full w-px h-16 bg-gradient-to-b from-[#D49A1A]/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D49A1A]/50 to-transparent"></div>
      </div>

      {/* COMPARISON SECTION */}
      <section id="comparison" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 border border-[#D49A1A]/50 mb-6">
              <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Phân Tích</p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#D49A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              So Sánh Mô Hình Công Nghiệp Hóa
            </h2>
            <p className="text-[#D4AF37]/70 text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Từ phương thức truyền thống đến kỷ nguyên số hóa hiện đại
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Model 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D49A1A]/30">
                <Factory className="w-6 h-6 text-[#D49A1A]" />
                <h3 className="text-xl text-[#D49A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Mô Hình Cổ Điển
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Đại diện</h4>
                  <p className="text-[#D49A1A]/90">Anh, Pháp, Mỹ</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Thứ tự ưu tiên</h4>
                  <p className="text-[#D49A1A]/90">C.nghiệp nhẹ (Dệt may) → C.nghiệp nặng</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Cơ chế & Nguồn vốn</h4>
                  <p className="text-[#D49A1A]/90">Thị trường tự do. Bóc lột lao động, thuộc địa.</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Thời gian</h4>
                  <p className="text-[#D49A1A]/90">Tuần tự, kéo dài 60 - 80 năm</p>
                </div>
              </div>
            </motion.div>

            {/* Model 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D49A1A]/30">
                <TrendingUp className="w-6 h-6 text-[#D49A1A]" />
                <h3 className="text-xl text-[#D49A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Mô Hình Liên Xô (cũ)
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Bối cảnh</h4>
                  <p className="text-[#D49A1A]/90">Xây dựng nhanh sức mạnh vật chất XHCN</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Thứ tự ưu tiên</h4>
                  <p className="text-[#D49A1A]/90">Ưu tiên phát triển công nghiệp nặng ngay từ đầu</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Cơ chế & Nguồn vốn</h4>
                  <p className="text-[#D49A1A]/90">Kế hoạch hóa tập trung, Nhà nước là chủ thể duy nhất</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-2">Kết quả</h4>
                  <p className="text-[#D49A1A]/90">Hạ tầng lớn, nhưng thiếu thị trường làm xơ cứng kinh tế</p>
                </div>
              </div>
            </motion.div>

            {/* Model 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#D49A1A] to-[#D4AF37] text-[#0A0A0A] p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="w-32 h-32 text-[#0A0A0A]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#0A0A0A]/20">
                  <Cpu className="w-6 h-6 text-[#0A0A0A]" />
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Mô Hình Hiện Đại / Rút Ngắn
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/80 mb-2 font-semibold">Đại diện</h4>
                    <p className="text-[#0A0A0A]/90 font-medium">Nhật Bản, Các nước NICs</p>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/80 mb-2 font-semibold">Thứ tự ưu tiên</h4>
                    <p className="text-[#0A0A0A]/90 font-medium">Hướng về xuất khẩu, ứng dụng công nghệ hiện đại ngay từ đầu</p>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/80 mb-2 font-semibold">Cơ chế & Nguồn vốn</h4>
                    <p className="text-[#0A0A0A]/90 font-medium">Thị trường kết hợp Nhà nước, thu hút FDI & nhập công nghệ</p>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/80 mb-2 font-semibold">Thời gian</h4>
                    <p className="text-[#0A0A0A]/90 font-medium">Rút ngắn đáng kể, chỉ 20 - 30 năm (đi tắt đón đầu)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lesson Box for Vietnam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A]/60 backdrop-blur-sm border-2 border-[#D49A1A]/50 p-10 text-center"
          >
            <h3 className="text-2xl text-[#D49A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bài Học Chọn Mô Hình Cho Việt Nam
            </h3>
            <p className="text-[#D49A1A]/90 max-w-4xl mx-auto text-lg leading-relaxed">
              Việt Nam chọn con đường <span className="font-semibold text-[#D49A1A]">Công nghiệp hóa rút ngắn</span>, tận dụng lợi thế của nước đi sau để tiếp thu công nghệ và kinh nghiệm từ các quốc gia phát triển, nhằm thu hẹp khoảng cách trong thời gian nhanh nhất có thể.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D49A1A]/50 to-transparent"></div>
      </div>

      {/* STRATEGY 4.0 SECTION */}
      <section id="strategy" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 border border-[#D49A1A]/50 mb-6">
              <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Phần III</p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#D49A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Định Hướng Chiến Lược Thích Ứng Mới
            </h2>
            <p className="text-[#D4AF37]/70 text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Để "cưỡi sóng" 4.0 và thực hiện thành công CNH-HĐH hiện đại, Việt Nam cần thực hiện đồng bộ 4 định hướng lớn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#D49A1A]/50 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-[#D49A1A]" />
              </div>
              <div>
                <h3 className="text-xl text-[#D49A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  1. Hoàn Thiện Thể Chế Kinh Tế
                </h3>
                <p className="text-[#D49A1A]/80 leading-relaxed text-sm">
                  Xây dựng hệ thống pháp luật minh bạch, bảo vệ quyền sở hữu trí tuệ để tạo môi trường thuận lợi nhất cho các doanh nghiệp đổi mới sáng tạo và khởi nghiệp công nghệ.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#D49A1A]/50 flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#D49A1A]" />
              </div>
              <div>
                <h3 className="text-xl text-[#D49A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2. Xây Dựng Hạ Tầng Số Đồng Bộ
                </h3>
                <p className="text-[#D49A1A]/80 leading-relaxed text-sm">
                  Ưu tiên phát triển hạ tầng mạng lưới viễn thông, internet băng thông rộng và các trung tâm dữ liệu lớn (Big Data). Đây là "mạch máu" của nền kinh tế số.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#D49A1A]/50 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#D49A1A]" />
              </div>
              <div>
                <h3 className="text-xl text-[#D49A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  3. Nguồn Nhân Lực Chất Lượng Cao
                </h3>
                <p className="text-[#D49A1A]/80 leading-relaxed text-sm">
                  Đổi mới giáo dục theo hướng STEM. Đào tạo đội ngũ lao động không chỉ giỏi tay nghề mà còn có khả năng làm chủ công nghệ và tư duy sáng tạo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#D49A1A] to-[#D4AF37] text-[#0A0A0A] p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#0A0A0A]/20 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-[#0A0A0A]" />
              </div>
              <div>
                <h3 className="text-xl mb-3 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  4. Chuyển Dịch Cơ Cấu Công Nghệ Lõi
                </h3>
                <p className="text-[#0A0A0A]/90 font-medium leading-relaxed text-sm">
                  Chuyển từ gia công lắp ráp sang nghiên cứu và chế tạo (Made in Vietnam). Đẩy mạnh ứng dụng AI, IoT vào cả nông nghiệp và dịch vụ để tạo ra giá trị thặng dư cao hơn.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D49A1A]/50 to-transparent"></div>
      </div>

      {/* AI USAGE SECTION */}
      <section id="ai-usage" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 border border-[#D49A1A]/50 mb-6">
              <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Phụ Lục</p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#D49A1A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cam Kết Sử Dụng AI & Liêm Chính Học Thuật
            </h2>
            <p className="text-[#D4AF37]/70 text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ứng dụng công nghệ đi đôi với trách nhiệm và sự minh bạch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#D49A1A]/50 flex items-center justify-center">
                <Target className="w-8 h-8 text-[#D49A1A]" />
              </div>
              <div>
                <h3 className="text-xl text-[#D49A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  1. Tính Minh Bạch
                </h3>
                <ul className="text-[#D49A1A]/80 leading-relaxed text-sm space-y-2 list-disc pl-4">
                  <li><span className="text-[#D4AF37] font-medium">Công cụ:</span> Antigravity, Figma, ChatGPT.</li>
                  <li><span className="text-[#D4AF37] font-medium">Mục đích:</span> Xây dựng giao diện React, cấu trúc website và hỗ trợ tìm kiếm tài liệu.</li>
                  <li><span className="text-[#D4AF37] font-medium">Quy trình:</span> AI tạo khung mã nguồn/giao diện, sinh viên trực tiếp biên soạn nội dung và tinh chỉnh UI.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#D49A1A]/50 flex items-center justify-center">
                <Book className="w-8 h-8 text-[#D49A1A]" />
              </div>
              <div>
                <h3 className="text-xl text-[#D49A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2. Trách Nhiệm
                </h3>
                <p className="text-[#D49A1A]/80 leading-relaxed text-sm">
                  Thông tin do AI đề xuất luôn được kiểm chứng nghiêm ngặt bằng Giáo trình Kinh tế Chính trị Mác - Lênin, nghị quyết, và văn bản chính thống. Nhóm hoàn toàn chịu trách nhiệm về độ chính xác của nội dung cuối cùng.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D49A1A]/30 p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#D49A1A]/50 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-[#D49A1A]" />
              </div>
              <div>
                <h3 className="text-xl text-[#D49A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  3. Sự Sáng Tạo
                </h3>
                <p className="text-[#D49A1A]/80 leading-relaxed text-sm">
                  AI chỉ đóng vai trò hỗ trợ triển khai kỹ thuật (code, đồ họa), không thay thế hoàn toàn tư duy phản biện, góc nhìn phân tích độc lập và sự sáng tạo trong nội dung của sinh viên.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#D49A1A] to-[#D4AF37] text-[#0A0A0A] p-8 flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 border border-[#0A0A0A]/20 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-[#0A0A0A]" />
              </div>
              <div>
                <h3 className="text-xl mb-3 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  4. Liêm Chính Học Thuật
                </h3>
                <ul className="text-[#0A0A0A]/90 font-medium leading-relaxed text-sm space-y-2 list-disc pl-4">
                  <li>Cam kết bằng văn bản: Không để AI làm thay toàn bộ bài tập.</li>
                  <li>Phân định rõ ràng giữa nội dung do sinh viên biên soạn và phần do AI tự động định dạng.</li>
                  <li>Đối chiếu và trích dẫn chuẩn xác các nguồn tài liệu chính thống để tránh sai sót.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-[#1A1A1A] to-[#000000] text-[#D49A1A] py-16 border-t border-[#D49A1A]/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Info */}
            <div>
              <div className="mb-4">
                <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-2">
                  Triết Học • Thực Tiễn
                </div>
                <div className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  MLN122
                </div>
              </div>
              <p className="text-[#D4AF37]/70 text-sm leading-relaxed">
                Kinh Tế Chính Trị Mác-Lênin<br />
                Chương 6: Lộ Trình CNH-HĐH
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-[0.15em] uppercase mb-6 text-[#D4AF37]">Nội Dung</h4>
              <div className="space-y-3 text-sm">
                <button onClick={() => scrollToSection('timeline')} className="block text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors">
                  I. Lộ Trình CNH-HĐH
                </button>
                <button onClick={() => scrollToSection('comparison')} className="block text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors">
                  II. Mô Hình Công Nghiệp Hóa
                </button>
                <button onClick={() => scrollToSection('strategy')} className="block text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors">
                  III. Định Hướng 4.0
                </button>
                <button onClick={() => scrollToSection('ai-usage')} className="block text-[#D49A1A]/80 hover:text-[#D49A1A] transition-colors">
                  Phụ Lục: Cam Kết AI
                </button>
              </div>
            </div>

            {/* Chapter Nav */}
            <div>
              <h4 className="text-sm tracking-[0.15em] uppercase mb-6 text-[#D4AF37]">Điều Hướng</h4>
              <div className="flex gap-3">
                <button className="px-6 py-3 border border-[#D49A1A]/30 hover:bg-[#D49A1A]/10 transition-colors flex items-center gap-2 text-sm">
                  <ChevronLeft className="w-4 h-4" />
                  Ch. 5
                </button>
                <button className="px-6 py-3 bg-[#D49A1A] text-[#0A0A0A] text-sm font-semibold">
                  Ch. 6
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D49A1A]/20 pt-8 text-center flex flex-col items-center">
            <div className="mb-6 px-6 py-3 border border-[#D49A1A]/30 bg-[#1A1A1A]/40 inline-block rounded-sm">
              <p className="text-[#D49A1A]/90 text-sm tracking-wide">
                <span className="font-semibold text-[#D4AF37]">AI Usage -</span> AI : tôi dùng là Antigravity , Figma , Chat GPT
              </p>
            </div>
            <p className="text-[#D4AF37]/50 text-xs tracking-wider">
              © 2026 MLN122 • KINH TẾ CHÍNH TRỊ MÁC-LÊNIN
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
