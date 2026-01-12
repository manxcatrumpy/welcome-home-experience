import { motion } from 'framer-motion';

const Access = () => {
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
            ACCESS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-10"
          >
            交通資訊
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-large text-muted-foreground"
          >
            悦納，隨時歡迎你回家坐坐
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-caption mb-6">ADDRESS</p>
              <h3 className="text-lg font-light mb-4">地址</h3>
              <p className="text-sm text-muted-foreground leading-loose">
                220 新北市板橋區<br />文聖街131號
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-caption mb-6">PHONE</p>
              <h3 className="text-lg font-light mb-4">電話</h3>
              <a
                href="tel:0222500166"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                02 2250 0166
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-caption mb-6">HOURS</p>
              <h3 className="text-lg font-light mb-4">營業時間</h3>
              <div className="text-sm text-muted-foreground leading-loose">
                <p>午餐 11:30 - 14:00</p>
                <p>午茶 14:30 - 16:30</p>
                <p>晚餐 17:30 - 20:00</p>
                <p className="mt-3 text-xs">週三公休</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4!2d121.4735!3d25.0276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzM5LjQiTiAxMjHCsDI4JzI0LjYiRQ!5e0!3m2!1szh-TW!2stw!4v1704067200000!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="悦納地圖"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              近捷運江子翠站（步行約 10-15 分鐘）
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="content-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading mb-10">預約訂位</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-minimal-inverse"
              >
                線上預約
              </a>
              <a
                href="tel:0222500166"
                className="link-minimal text-background/70 hover:text-background"
              >
                <span>電話預約</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store Photo */}
      <section className="section-padding bg-background">
        <div className="content-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="image-container aspect-[16/9] bg-muted mb-10" />
            <p className="text-lg font-light text-muted-foreground">
              期待與你相見
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Access;
