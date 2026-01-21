import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-morning.jpg';
import diningImage from '@/assets/dining-soup.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Navigation - Top of page */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="悅納空間"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* Hero Text - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center px-6"
          >
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#5a7355] leading-relaxed mb-3">
              道家尊生活的生命，
            </p>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#5a7355] leading-relaxed mb-3">
              實踐尊生者的生活。
            </p>
            <p className="font-serif text-lg md:text-xl text-[#5a7355]/80 leading-relaxed">
              悅納，隨時歡迎你回家。
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#5a7355]/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#5a7355]/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Section 01 - About */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-[#c9a96e]">01</span>
                  <span className="font-sans text-sm tracking-widest text-[#c9a96e]">about</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#5a7355]">關於悅納</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>視飲，把生活過成你喜歡的樣子。</p>
                  <p>把生活過成你喜歡的樣子</p>
                  <p>內托，些許一種的溫馨</p>
                  <p>心意，時間熬出的清甜</p>
                </div>
                <Link to="/concept" className="inline-flex items-center text-[#c9a96e] text-sm tracking-wider hover:gap-3 transition-all">
                  more &gt;
                </Link>
              </div>
              {/* Decorative curve */}
              <div className="absolute -right-12 top-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="fill-[#c9a96e]">
                  <path d="M0,0 Q50,50 0,100 Z" />
                </svg>
              </div>
            </motion.div>

            {/* Image Right - Circular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={heroImage}
                    alt="植物"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative text overlay */}
                <div className="absolute -right-8 -bottom-8 text-6xl md:text-8xl font-serif text-[#e8dcc8] opacity-30 pointer-events-none">
                  enjoy
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 02 - Dining */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left - Circular */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={diningImage}
                    alt="餐飲"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-[#c9a96e]">02</span>
                  <span className="font-sans text-sm tracking-widest text-[#c9a96e]">dining</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#5a7355]">餐飲體驗</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>感恩大自然帶給我們的美好！</p>
                </div>
                <Link to="/dining" className="inline-flex items-center text-[#c9a96e] text-sm tracking-wider hover:gap-3 transition-all">
                  more &gt;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 03 - Space */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-[#c9a96e]">03</span>
                  <span className="font-sans text-sm tracking-widest text-[#c9a96e]">space</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#5a7355]">人文空間</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>不論職涯或做事，</p>
                  <p>在這裡都能感受。</p>
                  <p className="mt-6">如同家溫暖，帶著你的</p>
                  <p>環境與態度。</p>
                </div>
                <Link to="/space" className="inline-flex items-center text-[#c9a96e] text-sm tracking-wider hover:gap-3 transition-all">
                  more &gt;
                </Link>
              </div>
            </motion.div>

            {/* Image Right - Circular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={heroImage}
                    alt="空間"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative curve */}
                <div className="absolute -left-12 -top-8 w-40 h-40 opacity-20">
                  <svg viewBox="0 0 100 100" className="fill-[#c9a96e]">
                    <path d="M100,0 Q50,50 100,100 Z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 04 - Life */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left - Circular */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={diningImage}
                    alt="生活美學"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative text */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-serif text-[#e8dcc8] opacity-30 pointer-events-none">
                  life
                </div>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-[#c9a96e]">04</span>
                  <span className="font-sans text-sm tracking-widest text-[#c9a96e]">life</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#5a7355]">生活美學</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>每一次聚會，</p>
                  <p>都是生活裡的祝福課。</p>
                  <p className="mt-6">在這裡，與內心恬靜相會，</p>
                  <p>共享生命的滿意。</p>
                </div>
                <Link to="/life" className="inline-flex items-center text-[#c9a96e] text-sm tracking-wider hover:gap-3 transition-all">
                  more &gt;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 05 - Shop */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm text-[#c9a96e]">05</span>
                  <span className="font-sans text-sm tracking-widest text-[#c9a96e]">shop</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#5a7355]">健康選物</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>就是要給您最好。</p>
                  <p>延續幸福的質地心意，好好生活。</p>
                </div>
                <Link to="/shop" className="inline-flex items-center text-[#c9a96e] text-sm tracking-wider hover:gap-3 transition-all">
                  more &gt;
                </Link>
              </div>
            </motion.div>

            {/* Image Right - Circular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={heroImage}
                    alt="健康選物"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-[#5a7355]">地點位置</h2>
            <div className="space-y-2 text-gray-600">
              <p className="text-sm">新北市板橋區文聖街131號</p>
              <p className="text-sm">好食購工廠2樓(停車請往1樓左側停車場)</p>
            </div>
            <p className="text-sm text-gray-600">tel: +886-2-2250-0166</p>
            <Link
              to="/access"
              className="inline-flex items-center text-[#c9a96e] text-sm tracking-wider hover:gap-3 transition-all"
            >
              google map &gt;
            </Link>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 aspect-video bg-gray-200 rounded-sm overflow-hidden"
          >
            <div className="grid grid-cols-2 h-full">
              <div className="bg-gradient-to-br from-[#87CEEB] to-[#4682B4] flex items-center justify-center">
                <div className="text-white text-6xl">🗺️</div>
              </div>
              <div className="bg-white flex items-center justify-center p-8">
                <div className="space-y-2 text-left text-sm text-gray-600">
                  <p className="font-serif text-[#5a7355] text-xl mb-4">悅納</p>
                  <p>📍 新北市板橋區</p>
                  <p>文聖街131號</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 text-center bg-[#f5f3ef]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="font-serif text-xl md:text-2xl text-[#5a7355]">
            悅納，隨時歡迎你回家。
          </p>

          <div className="w-6 h-10 border-2 border-[#5a7355]/30 rounded-full flex items-start justify-center p-2 mx-auto">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#5a7355]/50 rounded-full"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 tracking-wider">FOLLOW US</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-sm flex items-center justify-center hover:border-[#5a7355] transition-colors"
              >
                <Instagram size={20} className="text-gray-600" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-sm flex items-center justify-center hover:border-[#5a7355] transition-colors"
              >
                <Facebook size={20} className="text-gray-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-sm flex items-center justify-center hover:border-[#5a7355] transition-colors"
              >
                <Instagram size={20} className="text-gray-600" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
