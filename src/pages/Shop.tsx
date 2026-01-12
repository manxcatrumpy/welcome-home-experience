import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import handsImage from '@/assets/hands-vegetables.jpg';

const products = [
  { name: '有機五行蔬菜湯', category: 'SOUP', en: '湯品' },
  { name: '手作醬料禮盒', category: 'SAUCE', en: '調味' },
  { name: '能量直飲水', category: 'WATER', en: '飲品' },
  { name: '養生茶包組', category: 'TEA', en: '茶品' },
];

const Shop = () => {
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
            SHOP
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-10"
          >
            好物選購
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-large text-muted-foreground leading-loose"
          >
            延續幸福的質地<br className="hidden md:block" />
            讓悦納的純淨與心意，陪你回到日常，好好生活
          </motion.p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content-max-width"
        >
          <div className="image-container aspect-[21/9]">
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
        <div className="content-narrow text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-loose font-light text-foreground mb-8"
          >
            選物，是對生活的一種表態。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body text-muted-foreground leading-loose"
          >
            悅納將這份對純淨的堅持，延伸至你的家中。我們嚴選友善環境的食材、職人手作的料理，以及滋養身心的好物。每一件商品，都承載著我們對自然的敬意與對品質的承諾。希望這些經過時間淬鍊的選品，能成為你日常生活的溫柔陪伴，讓你在悦納之外，也能持續實踐純淨而豐盛的生活方式。
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="image-container aspect-square bg-muted mb-6" />
                <p className="text-caption mb-2">{product.category}</p>
                <h3 className="text-lg font-light">{product.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Purchase */}
      <section className="section-padding bg-foreground text-background">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading mb-6">宅配訂購</h2>
            <p className="text-body text-background/70 mb-10">
              歡迎來電或私訊洽詢
            </p>
            <Link
              to="/access"
              className="btn-minimal-inverse"
            >
              聯絡我們
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Shop;
