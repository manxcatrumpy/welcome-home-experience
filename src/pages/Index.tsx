import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-morning.jpg';
import diningImage from '@/assets/dining-soup.jpg';
import handsImage from '@/assets/hands-vegetables.jpg';

const Index = () => {
  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Slow Zoom */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="悦納空間"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl tracking-[0.5em] font-light mb-6"
          >
            悦納
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-sm md:text-base tracking-[0.3em] font-light"
          >
            把生活過成喜歡的樣子
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-white/70 text-xs tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Concept Section */}
      <section className="section-padding bg-background">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading mb-12">
              滋養會生活的生命<br />
              實踐有生命的生活
            </h2>
            <p className="text-body text-muted-foreground leading-loose mb-16">
              悦納，一個讓你放下疲憊、回歸本質的空間。<br />
              在這裡，我們相信純淨的食物能滋養身體，<br />
              溫暖的氛圍能撫慰心靈。
            </p>
            <Link
              to="/concept"
              className="link-minimal"
            >
              <span>more</span>
              <span className="text-xs">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Philosophy Grid - 人事物 */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* 人 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center"
            >
              <span className="block text-3xl md:text-4xl font-light text-muted-foreground/60 mb-8">人</span>
              <h3 className="text-lg md:text-xl font-light mb-4">純淨，使身體深呼吸</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                回歸本質，滋養每一位會生活的生命
              </p>
            </motion.div>

            {/* 事 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center"
            >
              <span className="block text-3xl md:text-4xl font-light text-muted-foreground/60 mb-8">事</span>
              <h3 className="text-lg md:text-xl font-light mb-4">空間，讓日常有溫度</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                如家溫暖，陪你實踐有生命的生活
              </p>
            </motion.div>

            {/* 物 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <span className="block text-3xl md:text-4xl font-light text-muted-foreground/60 mb-8">物</span>
              <h3 className="text-lg md:text-xl font-light mb-4">料理，是時間的祝福</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                簡單中見豐盛，心安即是幸福歸處
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <p className="text-caption mb-6">DINING</p>
              <h2 className="text-heading mb-8">餐飲體驗</h2>
              <p className="text-body text-muted-foreground leading-loose mb-10">
                本店嚴選純植物性及原形食物為出發，堅持純手工制作。
                回歸天然飲食，為我們的健康增添多一層保障，多一份安心。
              </p>
              <Link to="/dining" className="link-minimal">
                <span>more</span>
                <span className="text-xs">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <div className="image-container aspect-[4/3]">
                <img
                  src={diningImage}
                  alt="悦納蔬食料理"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="image-container aspect-[4/3]">
                <img
                  src={heroImage}
                  alt="悦納空間"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-caption mb-6">SPACE</p>
              <h2 className="text-heading mb-8">空間日常</h2>
              <p className="text-body text-muted-foreground leading-loose mb-10">
                空間是生活的容器，悦納想做的，就是成為你「安心的家」。
                無論獨處或相聚，在如家的溫暖裡，自在實踐有生命的生活。
              </p>
              <Link to="/space" className="link-minimal">
                <span>more</span>
                <span className="text-xs">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <p className="text-caption mb-6">SHOP</p>
              <h2 className="text-heading mb-8">好物選購</h2>
              <p className="text-body text-muted-foreground leading-loose mb-10">
                延續幸福的質地。讓悦納的純淨與心意，陪你回到日常，好好生活。
                我們嚴選友善環境的食材、職人手作的料理，以及滋養身心的好物。
              </p>
              <Link to="/shop" className="link-minimal">
                <span>more</span>
                <span className="text-xs">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <div className="image-container aspect-[4/3]">
                <img
                  src={handsImage}
                  alt="悦納選物"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access / CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-background/60 mb-6">ACCESS</p>
            <h2 className="text-heading mb-8">悦納，隨時歡迎你回家</h2>
            <p className="text-body text-background/70 mb-12">
              220 新北市板橋區文聖街131號<br />
              02 2250 0166
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/access"
                className="btn-minimal-inverse"
              >
                預約訂位
              </Link>
              <Link
                to="/access"
                className="link-minimal text-background/70 hover:text-background"
              >
                <span>交通資訊</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section - Optional */}
      <section className="section-padding-sm bg-background">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div>
              <p className="text-caption mb-4">NEWS</p>
              <h3 className="text-lg font-light">最新消息</h3>
            </div>
            <div className="flex-1 md:max-w-xl">
              <div className="border-b border-border pb-4">
                <p className="text-xs text-muted-foreground mb-2">2024.01.15</p>
                <p className="text-sm font-light">新年期間營業時間調整公告</p>
              </div>
            </div>
            <Link to="/life" className="link-minimal">
              <span>more</span>
              <span className="text-xs">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
