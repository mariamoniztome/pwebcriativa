import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xl bg-background border-l border-border z-50 shadow-lg transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-20">
            <img
              className="w-24 h-24 object-cover"
              alt="Logo"
              src="/logo.png"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-12 h-12 p-0 hover:bg-transparent hover:rotate-90 transition-transform duration-300"
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
                className={`transition-all duration-400 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms" }}
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
                  className={`block text-6xl leading-tight transition-all duration-300 ${
                    item.isHighlight
                      ? "font-montreal-italic italic text-primary hover:brightness-110"
                      : "font-montreal text-foreground hover:text-muted-foreground"
                  }`}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </nav>

          <div className="mt-auto">
            <p className="text-muted-foreground text-body-small font-montreal">
              23-27 de fevereiro
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
