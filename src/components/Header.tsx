import React, { useState } from 'react';
import { Menu, X, Globe2, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="NameCraft AI Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                NameCraft AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              {t.features}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              {t.howItWorks}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              {t.pricing}
            </button>
            <Link 
              to="/support"
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
            >
              <HeadphonesIcon className="w-4 h-4" />
              <span>{t.support}</span>
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <Globe2 className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <button onClick={() => setLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">English</button>
                  <button onClick={() => setLanguage('zh')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">中文</button>
                  <button onClick={() => setLanguage('ja')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">日本語</button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('generator')}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {t.getStarted}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block px-3 py-2 text-gray-700 w-full text-left"
              >
                {t.features}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="block px-3 py-2 text-gray-700 w-full text-left"
              >
                {t.howItWorks}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block px-3 py-2 text-gray-700 w-full text-left"
              >
                {t.pricing}
              </button>
              <Link 
                to="/support"
                className="block px-3 py-2 text-gray-700 w-full text-left"
              >
                {t.support}
              </Link>
              <button 
                onClick={() => scrollToSection('generator')} 
                className="block px-3 py-2 text-gray-700 w-full text-left"
              >
                {t.getStarted}
              </button>
              <div className="px-3 py-2">
                <button onClick={() => setLanguage('en')} className="block py-2 text-gray-700">English</button>
                <button onClick={() => setLanguage('zh')} className="block py-2 text-gray-700">中文</button>
                <button onClick={() => setLanguage('ja')} className="block py-2 text-gray-700">日本語</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}