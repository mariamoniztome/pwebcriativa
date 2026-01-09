import { Instagram, Facebook, Linkedin, X } from 'lucide-react';

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Programa', href: '#programa' },
  { label: 'Open Calls', href: '#open-calls' },
  { label: 'Contacto', href: '#contacto' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export const Menu = ({ isOpen, onClose }: MenuProps): JSX.Element => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
        className={`fixed inset-0 z-[101] flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <X className="w-8 h-8 text-white" strokeWidth={2} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6 mb-16">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={onClose}
              className="text-white text-4xl md:text-5xl font-normal hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 items-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
