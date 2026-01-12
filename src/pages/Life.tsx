import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Life = () => {
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
            LIFE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-10"
          >
            生活美學
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-large text-muted-foreground leading-loose"
          >
            每一次相聚，都是生活美好的提案<br className="hidden md:block" />
            在這裡，我們交換智慧，共寫生命的律動
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="content-narrow text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-body-large text-muted-foreground leading-loose mb-8"
          >
            悦納不只是餐廳，更是個「策展日常」的場域。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body text-muted-foreground leading-loose"
          >
            我們相信，生活需要不斷地被啟發與滋養。透過茶席、故事會，我們邀請每一位會生活的生命，在此交會。從沙龍到心靈的跨界思維，這些活動紀錄不僅是回憶，更是我們共同學習、一起長出有生命的生活的軌跡。
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-caption mb-4">EVENTS</p>
            <h2 className="text-heading">活動紀錄</h2>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${i === 1 || i === 4 ? 'col-span-2 row-span-2' : ''}`}
              >
                <div className={`image-container bg-muted ${i === 1 || i === 4 ? 'aspect-square' : 'aspect-[4/3]'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-secondary">
        <div className="content-narrow text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl leading-relaxed font-light text-foreground"
          >
            「生活的藝術，在於覺察每一個微小的美好。」
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/shop"
              className="link-minimal"
            >
              <span>探索好物選購</span>
              <span className="text-xs">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Life;
