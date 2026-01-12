import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-morning.jpg';

const spaceItems = [
  { name: '包廂', en: 'PRIVATE ROOM' },
  { name: '客席', en: 'DINING AREA' },
  { name: '甜點櫃', en: 'DESSERT' },
  { name: '書櫃', en: 'LIBRARY' },
  { name: '產品櫃', en: 'PRODUCTS' },
  { name: '入口', en: 'ENTRANCE' },
];

const Space = () => {
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);

  return (
    <>
      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedSpace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpace(null)}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedSpace(null)}
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] bg-muted mb-8" />
              <div className="text-center">
                <h3 className="text-xl font-light mb-2">{selectedSpace}</h3>
                <p className="text-sm text-muted-foreground">
                  感受空間的每一個角落，都是為了款待你的到來。
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="content-narrow text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-caption mb-6"
          >
            SPACE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-10"
          >
            空間日常
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-large text-muted-foreground leading-loose"
          >
            不論獨處或相聚，在如家的溫暖裡<br className="hidden md:block" />
            陪你實踐健康、有愛的有生命的生活
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
              src={heroImage}
              alt="悦納空間"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
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
            我們常說，空間是生活的容器，而悦納想做的，就是成為你「安心的家」。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body text-muted-foreground leading-loose"
          >
            無論你是獨自前來沉澱，還是與親友歡喜相聚，悦納都在輕聲對你說：歡迎回家。在這個傳遞愛的生活場域裡，每一個相視而笑的瞬間，都是我們共同創造的日常。讓我們陪你，在像家一樣的氛圍裡，自在實踐有生命的生活。
          </motion.p>
        </div>
      </section>

      {/* Space Gallery */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-caption mb-4">GALLERY</p>
            <h2 className="text-heading">空間導覽</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaceItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setSelectedSpace(item.name)}
              >
                <div className="image-container aspect-[4/3] bg-muted mb-4 relative">
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                </div>
                <p className="text-caption mb-1">{item.en}</p>
                <p className="text-base font-light">{item.name}</p>
              </motion.div>
            ))}
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
              to="/life"
              className="link-minimal"
            >
              <span>探索生活美學</span>
              <span className="text-xs">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Space;
