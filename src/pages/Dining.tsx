import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import soupImage from '@/assets/dining-soup.jpg';

const Dining = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="content-narrow text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-caption mb-6"
          >
            DINING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-10"
          >
            餐飲體驗
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-large text-muted-foreground"
          >
            感恩大自然帶給我們的美好
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content-max-width"
        >
          <div className="image-container aspect-[21/9]">
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
        <div className="content-narrow text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-body-large text-muted-foreground leading-loose mb-8"
          >
            本店嚴選純植物性及原形食物為出發，堅持純手工制作，回歸天然飲食為我們的健康增添多一層保障，多一份安心。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body text-muted-foreground leading-loose"
          >
            每日新鮮現煮五行蔬菜湯，在清洗食材浸泡及烹飪料理，都經能量直飲水處理，讓您吃得無負擔、安心有能量。
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* 精緻套餐 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="image-container aspect-[4/5] bg-muted mb-8" />
              <p className="text-caption mb-3">SET MENU</p>
              <h3 className="text-xl font-light mb-4">品悦・納幅</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                嚴選當令珍饈，以細膩工序演繹四季流轉。每一口，都是對天地厚賜的歡喜接納，為身心注入圓滿的幸福能量。
              </p>
            </motion.div>

            {/* 常態套餐 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="image-container aspect-[4/5] bg-muted mb-8" />
              <p className="text-caption mb-3">DAILY</p>
              <h3 className="text-xl font-light mb-4">真味・日常</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                以慢火熬煮的濃郁與歲月醃漬的甘醇，重現記憶中的溫暖況味。這是一份撫慰身心的紮實陪伴，讓每一餐，都成為安心的歸屬。
              </p>
            </motion.div>

            {/* 料理工法 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="image-container aspect-[4/5] bg-muted mb-8" />
              <p className="text-caption mb-3">COOKING</p>
              <h3 className="text-xl font-light mb-4">蘊火・炊香</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                仿效古法土鍋炊飯，利用陶鍋燒製過程中產生的氣孔以及砂土的遠紅外線效果，讓食材從裡到外徹底加熱。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading mb-10">歡迎預約品嚐</h2>
            <Link
              to="/access"
              className="btn-minimal-inverse"
            >
              預約訂位
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Dining;
