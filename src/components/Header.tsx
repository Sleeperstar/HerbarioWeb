"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Leaf, Menu, X, Search, BookOpen, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-smooth ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-all-smooth hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-botanical-leaf/20 rounded-full blur-sm group-hover:blur-none transition-all-smooth"></div>
              <Leaf className="w-8 h-8 lg:w-10 lg:h-10 text-botanical-leaf relative z-10 group-hover:rotate-12 transition-all-smooth" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-headline text-xl lg:text-2xl font-bold text-foreground group-hover:text-botanical-leaf transition-colors">
                Herbario USM
              </h1>
              <p className="text-xs lg:text-sm text-muted-foreground font-medium">
                Explorer Digital
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/" icon={<Search className="w-4 h-4" />}>
              Explorar
            </NavLink>
            <NavLink href="/about" icon={<Info className="w-4 h-4" />}>
              Acerca del Proyecto
            </NavLink>
            <NavLink href="/collections" icon={<BookOpen className="w-4 h-4" />}>
              Colecciones
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-botanical-sage/20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-border/50 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <MobileNavLink href="/" icon={<Search className="w-4 h-4" />} onClick={() => setIsMenuOpen(false)}>
                Explorar Colección
              </MobileNavLink>
              <MobileNavLink href="/about" icon={<Info className="w-4 h-4" />} onClick={() => setIsMenuOpen(false)}>
                Acerca del Proyecto
              </MobileNavLink>
              <MobileNavLink href="/collections" icon={<BookOpen className="w-4 h-4" />} onClick={() => setIsMenuOpen(false)}>
                Colecciones Históricas
              </MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ 
  href, 
  children, 
  icon 
}: { 
  href: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium text-foreground/80 hover:text-botanical-leaf hover:bg-botanical-sage/10 transition-all-smooth relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-botanical-leaf/5 to-botanical-amber/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

function MobileNavLink({ 
  href, 
  children, 
  icon, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground/80 hover:text-botanical-leaf hover:bg-botanical-sage/10 transition-all-smooth group"
    >
      {icon && (
        <span className="text-botanical-leaf/70 group-hover:text-botanical-leaf transition-colors">
          {icon}
        </span>
      )}
      <span className="font-medium">{children}</span>
    </Link>
  );
}
