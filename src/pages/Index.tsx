import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-morning.jpg';
import diningImage from '@/assets/dining-soup.jpg';
import handsImage from '@/assets/hands-vegetables.jpg';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/assets/ambient-sound.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-foreground transition-all duration-300"
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};

const Index = () => {
  return (
    <>
      {/* Audio Player */}
      <div className="fixed top-8 right-8 z-50">
        <AudioPlayer />
      </div>

      {/* Hero Section - Full Screen Immersive */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image/Video with Slow Zoom */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover animate-slow-zoom hidden md:block"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            {/* Fallback to image if video not supported or not found */}
            <img
              src={heroImage}
              alt="悦納店內清晨陽光"
              className="w-full h-full object-cover"
            />
          </video>
          <img
            src={heroImage}
            alt="悦納店內清晨陽光"
            className="w-full h-full object-cover animate-slow-zoom md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
        </div>

        {/* Vertical Text Slogan */}
        <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="vertical-text font-serif text-lg md:text-xl lg:text-2xl leading-loose tracking-widest text-foreground"
          >
            <p className="mb-4">滋養會生活的生命</p>
            <p className="mb-4">實踐有生命的生活</p>
            <p className="text-muted-foreground text-base">悦納，隨時歡迎你回家</p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </section>

      {/* Navigation Bar - Sticky */}
      <div className="sticky top-0 z-40">
        <Navigation />
      </div>

      {/* Concept Preview */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-heading mb-8">把生活過成喜歡的樣子</h2>
            <p className="font-sans text-body-large text-muted-foreground max-w-2xl mx-auto">
              選擇，提供身體需要的<br />
              自在，如家一樣的溫馨<br />
              心意，時間熬出的清甜
            </p>
          </motion.div>

          <Link to="/concept" className="group flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="font-sans text-sm tracking-widest">探索更多</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="section-padding bg-secondary">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* 人 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center"
            >
              <span className="font-serif text-4xl text-accent mb-6 block">人</span>
              <h3 className="font-serif text-xl mb-4">純淨，使身體深呼吸</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                回歸本質，滋養每一位會生活的生命
              </p>
            </motion.div>

            {/* 事 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center"
            >
              <span className="font-serif text-4xl text-accent mb-6 block">事</span>
              <h3 className="font-serif text-xl mb-4">空間，讓日常有溫度</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                如家溫暖，陪你實踐有生命的生活
              </p>
            </motion.div>

            {/* 物 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <span className="font-serif text-4xl text-accent mb-6 block">物</span>
              <h3 className="font-serif text-xl mb-4">料理，是時間的祝福</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                簡單中見豐盛，心安即是幸福歸處
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining Preview */}
      <section className="section-padding bg-background">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-heading mb-6">感恩大自然帶給我們的美好</h2>
              <p className="font-sans text-muted-foreground leading-loose mb-8">
                本店嚴選純植物性及原形食物為出發，堅持純手工制作，回歸天然飲食為我們的健康增添多一層保障，多一份安心。
              </p>
              <Link to="/dining" className="group inline-flex items-center gap-3 text-foreground">
                <span className="font-sans text-sm tracking-widest">餐飲體驗</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="image-container aspect-square rounded-sm overflow-hidden">
                <img
                  src={diningImage}
                  alt="悦納蔬食料理"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="section-padding bg-cream">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-container aspect-square rounded-sm overflow-hidden">
                <img
                  src={handsImage}
                  alt="雙手捧著新鮮蔬菜"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-heading mb-6">延續幸福的質地</h2>
              <p className="font-sans text-muted-foreground leading-loose mb-8">
                讓悦納的純淨與心意，陪你回到日常，好好生活。我們嚴選友善環境的食材、職人手作的料理，以及滋養身心的好物。
              </p>
              <Link to="/shop" className="group inline-flex items-center gap-3 text-foreground">
                <span className="font-sans text-sm tracking-widest">好物選購</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-max-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-heading mb-8">悦納，隨時歡迎你回家</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/access"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary-foreground/30 rounded-sm text-sm tracking-widest hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                預約訂位
              </Link>
              <Link
                to="/access"
                className="inline-flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm tracking-widest transition-colors duration-300"
              >
                <span>交通資訊</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
