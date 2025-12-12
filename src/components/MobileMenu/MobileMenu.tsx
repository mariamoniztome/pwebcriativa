import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { text: "PROGRAMA", href: "#programa" },
  { text: "CONTACTO", href: "#contacto" },
  { text: "OPEN CALLS", href: "#opencalls", isHighlight: true },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        itemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/80 z-40 opacity-0"
        onClick={onClose}
      />
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full max-w-[600px] bg-[#101010] z-50 shadow-2xl translate-x-full"
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-20">
            <img
              className="w-[100px] h-[100px] object-cover"
              alt="Logo"
              src="/logo.png"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-[50px] h-[50px] p-0 hover:bg-transparent hover:rotate-90 transition-transform duration-300"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L28 28M28 2L2 28"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>

          <nav className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="opacity-0"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`block text-[60px] leading-[1.2] transition-all duration-300 ${
                    item.isHighlight
                      ? "[font-family:'Neue_Montreal-Italic',Helvetica] italic text-[#fa5302] hover:text-[#ff6f2e]"
                      : "[font-family:'Neue_Montreal-Regular',Helvetica] text-neutral-100 hover:text-neutral-400"
                  }`}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </nav>

          <div className="mt-auto">
            <p className="text-neutral-400 text-sm [font-family:'Neue_Montreal-Regular',Helvetica]">
              23-27 de fevereiro
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
