import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Access = () => {
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
            交通資訊
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-body-large text-muted-foreground"
          >
            悦納，隨時歡迎你回家坐坐
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-background">
                <MapPin size={20} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-4">地址</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
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
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-background">
                <Phone size={20} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-4">電話</h3>
              <a 
                href="tel:0222500166" 
                className="font-sans text-muted-foreground hover:text-foreground transition-colors"
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
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-background">
                <Clock size={20} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-4">營業時間</h3>
              <div className="font-sans text-sm text-muted-foreground leading-loose">
                <p>午餐 11:30 - 14:00</p>
                <p>午茶 14:30 - 16:30</p>
                <p>晚餐 17:30 - 20:00</p>
                <p className="mt-2 text-xs">週三公休</p>
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
            <div className="aspect-[16/9] rounded-sm overflow-hidden bg-sand">
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
            <p className="font-sans text-sm text-muted-foreground mt-6 text-center">
              近捷運江子翠站（步行約 10-15 分鐘）
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-heading mb-8">預約訂位</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-sm text-sm tracking-widest hover:opacity-90 transition-opacity duration-300"
              >
                <span>線上預約</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="tel:0222500166"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary-foreground/30 rounded-sm text-sm tracking-widest hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                電話預約
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store Photo */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="image-container aspect-[16/9] rounded-sm overflow-hidden bg-sand mb-8" />
            <p className="font-serif text-xl text-muted-foreground">
              期待與你相見
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Access;
