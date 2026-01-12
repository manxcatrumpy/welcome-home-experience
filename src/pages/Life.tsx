import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Life = () => {
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
            生活美學
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-body-large text-muted-foreground leading-loose"
          >
            每一次相聚，都是生活美好的提案<br />
            在這裡，我們交換智慧，共寫生命的律動
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-body-large text-muted-foreground leading-loose"
          >
            悦納不只是餐廳，更是個「策展日常」的場域。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-muted-foreground leading-loose mt-6"
          >
            我們相信，生活需要不斷地被啟發與滋養。透過茶席、故事會，我們邀請每一位會生活的生命，在此交會。從沙龍到心靈的跨界思維，這些活動紀錄不僅是回憶，更是我們共同學習、一起長出有生命的生活的軌跡。
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-heading text-center mb-16"
          >
            活動紀錄
          </motion.h2>

          {/* Scrapbook-style Grid */}
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
                <div className={`image-container rounded-sm overflow-hidden bg-sand ${i === 1 || i === 4 ? 'aspect-square' : 'aspect-[4/3]'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground"
          >
            「生活的藝術，在於覺察每一個微小的美好。」
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 text-foreground"
            >
              <span className="font-serif text-xl tracking-widest">探索好物選購</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Life;
