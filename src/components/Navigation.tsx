import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/concept', label: '關於', en: 'CONCEPT' },
  { path: '/dining', label: '餐飲', en: 'DINING' },
  { path: '/space', label: '空間', en: 'SPACE' },
  { path: '/life', label: '生活', en: 'LIFE' },
  { path: '/shop', label: '選物', en: 'SHOP' },
  { path: '/access', label: '交通', en: 'ACCESS' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/98 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 md:py-6">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <h1 className="text-xl md:text-2xl tracking-[0.3em] font-light text-foreground">
              悦納
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs tracking-[0.2em] font-light transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section: Language + Reservation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Language Switcher */}
            <div className="flex items-center gap-3 text-xs tracking-wider">
              <button className="text-foreground font-normal">TW</button>
              <span className="text-muted-foreground/30">|</span>
              <button className="text-muted-foreground hover:text-foreground transition-colors">EN</button>
            </div>

            {/* Reservation Button */}
            <Link
              to="/access"
              className="text-xs tracking-[0.2em] font-light px-6 py-2.5 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              預約
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground"
            aria-label={isOpen ? '關閉選單' : '開啟選單'}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden bg-background"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full"
            >
              {/* Navigation Links */}
              <div className="flex flex-col items-center gap-8 mb-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-lg tracking-[0.3em] font-light transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Reservation Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Link
                  to="/access"
                  className="text-sm tracking-[0.2em] font-light px-8 py-3 border border-foreground/20 hover:border-foreground transition-colors duration-300"
                >
                  預約訂位
                </Link>
              </motion.div>

              {/* Language Switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-4 mt-10 text-sm tracking-wider"
              >
                <button className="text-foreground">TW</button>
                <span className="text-muted-foreground/30">|</span>
                <button className="text-muted-foreground">EN</button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Reservation Button (visible when scrolled on desktop) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-6 md:right-12 lg:right-24 z-50 hidden lg:block"
          >
            {/* Already visible in nav when scrolled */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
