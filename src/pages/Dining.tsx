import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import soupImage from '@/assets/dining-soup.jpg';

const Dining = () => {
  return (
    <>
      {/* Navigation Bar - Sticky */}
      <div className="sticky top-0 z-40">
        <Navigation />
      </div>

      {/* Hero */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-display mb-8"
          >
            餐飲體驗
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-body-large text-muted-foreground"
          >
            感恩大自然帶給我們的美好
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="image-container aspect-[16/9] rounded-sm overflow-hidden">
            <img
              src={soupImage}
              alt="悦納蔬食料理"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-body-large text-muted-foreground leading-loose"
          >
            本店嚴選純植物性及原形食物為出發，堅持純手工制作，回歸天然飲食為我們的健康增添多一層保障，多一份安心。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-muted-foreground leading-loose mt-6"
          >
            每日新鮮現煮五行蔬菜湯，在清洗食材浸泡及烹飪料理，都經能量直飲水處理，讓您吃得無負擔、安心有能量！
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* 精緻套餐 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="image-container aspect-[4/5] rounded-sm overflow-hidden bg-sand mb-6" />
              <h3 className="font-serif text-2xl mb-3">品悦・納幅</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                嚴選當令珍饈，以細膩工序演繹四季流轉。每一口，都是對天地厚賜的歡喜接納，為身心注入圓滿的幸福能量。
              </p>
            </motion.div>

            {/* 常態套餐 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group"
            >
              <div className="image-container aspect-[4/5] rounded-sm overflow-hidden bg-sand mb-6" />
              <h3 className="font-serif text-2xl mb-3">真味・日常</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                以慢火熬煮的濃郁與歲月醃漬的甘醇，重現記憶中的溫暖況味。這是一份撫慰身心的紮實陪伴，讓每一餐，都成為安心的歸屬。
              </p>
            </motion.div>

            {/* 料理工法 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="image-container aspect-[4/5] rounded-sm overflow-hidden bg-sand mb-6" />
              <h3 className="font-serif text-2xl mb-3">蘊火・炊香</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                仿效古法土鍋炊飯，利用陶鍋燒製過程中產生的氣孔以及砂土的遠紅外線效果，讓食材從裡到外徹底加熱。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-heading mb-8">歡迎預約品嚐</h2>
            <Link
              to="/access"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-primary-foreground/30 rounded-sm text-sm tracking-widest hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <span>預約訂位</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Next Page CTA */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/space"
              className="group inline-flex items-center gap-3 text-foreground"
            >
              <span className="font-serif text-xl tracking-widest">探索空間日常</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Dining;
