import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl tracking-widest mb-4">悦納</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              滋養會生活的生命<br />
              實踐有生命的生活
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <nav className="flex flex-col gap-3">
              <Link to="/concept" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                關於悦納
              </Link>
              <Link to="/dining" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                餐飲體驗
              </Link>
              <Link to="/space" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                空間日常
              </Link>
              <Link to="/life" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                生活美學
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="font-sans text-sm text-muted-foreground leading-loose">
              220 新北市板橋區文聖街131號<br />
              02 2250 0166<br />
              <span className="text-xs">週三公休</span>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-sans text-xs text-muted-foreground tracking-wider">
            © 2024 悦納. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
