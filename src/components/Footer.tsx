import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="section-padding-sm">
        <div className="content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="block mb-6">
                <h2 className="text-2xl tracking-[0.3em] font-light">悦納</h2>
              </Link>
              <p className="text-xs text-muted-foreground leading-loose tracking-wide">
                滋養會生活的生命<br />
                實踐有生命的生活
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-1">
              <p className="text-xs tracking-widest text-muted-foreground mb-6">MENU</p>
              <nav className="flex flex-col gap-3">
                <Link to="/concept" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  關於悦納
                </Link>
                <Link to="/dining" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  餐飲體驗
                </Link>
                <Link to="/space" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  空間日常
                </Link>
                <Link to="/life" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  生活美學
                </Link>
                <Link to="/shop" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  好物選購
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <p className="text-xs tracking-widest text-muted-foreground mb-6">CONTACT</p>
              <div className="text-sm font-light text-muted-foreground leading-loose">
                <p className="mb-3">220 新北市板橋區</p>
                <p className="mb-3">文聖街131號</p>
                <a
                  href="tel:0222500166"
                  className="hover:text-foreground transition-colors"
                >
                  02 2250 0166
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="md:col-span-1">
              <p className="text-xs tracking-widest text-muted-foreground mb-6">HOURS</p>
              <div className="text-sm font-light text-muted-foreground leading-loose">
                <p>午餐 11:30 - 14:00</p>
                <p>午茶 14:30 - 16:30</p>
                <p>晚餐 17:30 - 20:00</p>
                <p className="mt-3 text-xs">週三公休</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 px-6 md:px-12 lg:px-24">
        <div className="content-max-width flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2024 悦納. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
            >
              Facebook
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
            >
              LINE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
