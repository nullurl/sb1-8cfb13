import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToGenerator = () => {
    const element = document.getElementById('generator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={scrollToGenerator}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.tryNow}
            </button>
            <a 
              href="#features"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium border border-gray-200 hover:border-gray-400 transition-colors"
            >
              {t.learnMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}