import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-morning.jpg';

const Space = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-display mb-8"
          >
            空間日常
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-body-large text-muted-foreground leading-loose"
          >
            不論獨處或相聚，在如家的溫暖裡<br />
            陪你實踐健康、有愛的有生命的生活
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
              src={heroImage}
              alt="悦納空間"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
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
            我們常說，空間是生活的容器，而悦納想做的，就是成為你「安心的家」。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-muted-foreground leading-loose mt-6"
          >
            無論你是獨自前來沉澱，還是與親友歡喜相聚，悦納都在輕聲對你說：歡迎回家。在這個傳遞愛的生活場域裡，每一個相視而笑的瞬間，都是我們共同創造的日常。讓我們陪你，在像家一樣的氛圍裡，自在實踐有生命的生活。
          </motion.p>
        </div>
      </section>

      {/* Space Gallery */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-heading text-center mb-16"
          >
            空間導覽
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['包廂', '客席', '甜點櫃', '書櫃', '產品櫃', '入口'].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="image-container aspect-[4/3] rounded-sm overflow-hidden bg-sand mb-4" />
                <p className="font-serif text-lg text-center">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/life"
              className="group inline-flex items-center gap-3 text-foreground"
            >
              <span className="font-serif text-xl tracking-widest">探索生活美學</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Space;
