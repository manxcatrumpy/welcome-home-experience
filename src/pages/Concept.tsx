import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import handsImage from '@/assets/hands-vegetables.jpg';

const Concept = () => {
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
            CONCEPT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-10"
          >
            悦納
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-large text-muted-foreground"
          >
            把生活過成喜歡的樣子
          </motion.p>
        </div>
      </section>

      {/* Philosophy Intro */}
      <section className="section-padding bg-secondary">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg md:text-xl leading-loose tracking-wide font-light"
          >
            <p>選擇，提供身體需要的</p>
            <p>自在，如家一樣的溫馨</p>
            <p>心意，時間熬出的清甜</p>
          </motion.div>
        </div>
      </section>

      {/* 人 */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="image-container aspect-[4/5]">
                <img
                  src={handsImage}
                  alt="擁抱自然"
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
              <span className="block text-4xl md:text-5xl font-light text-muted-foreground/40 mb-8">人</span>
              <h2 className="text-heading mb-6">純淨，使身體深呼吸</h2>
              <p className="text-body text-muted-foreground leading-loose mb-6">
                回歸本質，滋養每一位會生活的生命。
              </p>
              <p className="text-body text-muted-foreground leading-loose">
                來到悦納，你會發現「純淨」其實很簡單，就是讓身體重新深呼吸。我們相信，每個人都懂得為自己選擇更好的。所以我們幫你把關，洗去多餘的負擔，留下食材最原本的美好。在這裡，吃飯不只是填飽肚子，更是打開胸懷，感受大地的生命力，成為與自然的連結，感受身心久違的輕盈與自由。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 事 */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <span className="block text-4xl md:text-5xl font-light text-muted-foreground/40 mb-8">事</span>
              <h2 className="text-heading mb-6">空間，讓日常有溫度</h2>
              <p className="text-body text-muted-foreground leading-loose mb-6">
                如家溫暖，陪你實踐有生命的生活。
              </p>
              <p className="text-body text-muted-foreground leading-loose">
                我們常說，空間是生活的容器。悦納想做的，就是個讓你覺得「像家」的地方。溫暖的色調、剛剛好的光線，這裡的一切都在和你說：幸福不在遠方，它在一碗熱湯的溫暖中、喝一杯茶的時光裡，活在我們相視而笑的瞬間…這些日常的、小小的互動與選擇，都是我們活出一份有生命的生活樣貌。家的溫度，始終來自我們共同創造的日常。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <div className="image-container aspect-[4/5] bg-muted" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 物 */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="image-container aspect-[4/5] bg-muted" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="block text-4xl md:text-5xl font-light text-muted-foreground/40 mb-8">物</span>
              <h2 className="text-heading mb-6">料理，是時間的祝福</h2>
              <p className="text-body text-muted-foreground leading-loose mb-6">
                簡單中見豐盛，心安，即是幸福歸處。
              </p>
              <p className="text-body text-muted-foreground leading-loose">
                這裡的料理，沒有捷徑，只有時間。我們慢火細燉，喚醒食物天然的風味；用手作的溫度，傳遞一份想好好款待你的心意。每道菜，都是對自然的感謝，也是對你身體的滋養。我們希望你吃進去的，不只是營養，更是一份喜悦與祝福。簡單，但很豐盛；心安，就是幸福的歸處。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/dining"
              className="link-minimal"
            >
              <span>探索餐飲體驗</span>
              <span className="text-xs">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Concept;
