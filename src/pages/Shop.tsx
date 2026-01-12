import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import handsImage from '@/assets/hands-vegetables.jpg';

const Shop = () => {
  const products = [
    { name: '有機五行蔬菜湯', category: '湯品' },
    { name: '手作醬料禮盒', category: '調味' },
    { name: '能量直飲水', category: '飲品' },
    { name: '養生茶包組', category: '茶品' },
  ];

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
            好物選購
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-body-large text-muted-foreground leading-loose"
          >
            延續幸福的質地<br />
            讓悦納的純淨與心意，陪你回到日常，好好生活
          </motion.p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="image-container aspect-[16/9] rounded-sm overflow-hidden">
            <img
              src={handsImage}
              alt="悦納選物"
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
            className="font-serif text-xl md:text-2xl leading-loose text-foreground mb-6"
          >
            選物，是對生活的一種表態。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-muted-foreground leading-loose"
          >
            悅納將這份對純淨的堅持，延伸至你的家中。我們嚴選友善環境的食材、職人手作的料理，以及滋養身心的好物。每一件商品，都承載著我們對自然的敬意與對品質的承諾。希望這些經過時間淬鍊的選品，能成為你日常生活的溫柔陪伴，讓你在悦納之外，也能持續實踐純淨而豐盛的生活方式。
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="image-container aspect-square rounded-sm overflow-hidden bg-sand mb-6 relative">
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to="/access"
                      className="px-6 py-3 bg-white/90 text-foreground font-serif tracking-widest text-sm hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      詳細資訊
                    </Link>
                  </div>
                </div>
                <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase">
                  {product.category}
                </span>
                <h3 className="font-serif text-xl mt-2 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Purchase */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-heading mb-6">宅配訂購</h2>
            <p className="font-sans text-primary-foreground/80 mb-8">
              歡迎來電或私訊洽詢
            </p>
            <Link
              to="/access"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-primary-foreground/30 rounded-sm text-sm tracking-widest hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <span>聯絡我們</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Shop;
