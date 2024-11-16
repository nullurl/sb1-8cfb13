import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const nameGeneratorLinks = {
    chinese: [
      { name: 'MyCnName', url: 'https://www.mycnname.com', description: '提供详细的名字解释和个性化生成器工具' },
      { name: 'RandomX AI', url: 'https://randomx.ai', description: '提供免费的中文名字生成器，支持多种风格和语言选择' },
      { name: 'Your Chinese Astrology', url: 'https://yourchineseastrology.com', description: '专注于中文名字生成和文化解读' }
    ],
    english: [
      { name: 'Nameberry', url: 'https://nameberry.com', description: '涵盖现代、复古和风格化英文名字的大型数据库' },
      { name: 'Fantasy Name Generators', url: 'https://www.fantasynamegenerators.com', description: '提供创意英文名字生成器' },
      { name: 'Behind the Name', url: 'https://www.behindthename.com', description: '专注于英文名字起源和意义的权威资源' }
    ],
    japanese: [
      { name: 'Fantasy Name Generators JP', url: 'https://www.fantasynamegenerators.com/japanese-names.php', description: '专注于动漫角色和历史文化的日本名字生成' },
      { name: 'Japanorama', url: 'https://www.japanorama.com', description: '提供关于名字含义和起源的详细信息' },
      { name: 'RandomX AI JP', url: 'https://randomx.ai/japanese', description: '支持日文名字生成，特别适合文化爱好者' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              NameCraft AI
            </h3>
            <p className="text-gray-400 mb-4">
              {t.footerDescription}
            </p>
            <div className="text-gray-400">
              <p>Email: joyforjoker43@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t.features}</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">{t.howItWorks}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t.pricing}</a></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">{t.support}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">{t.privacy}</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">{t.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Chinese Name Generators</h4>
              <ul className="space-y-4">
                {nameGeneratorLinks.chinese.map((link, index) => (
                  <li key={index} className="text-gray-400">
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                    <p className="text-sm mt-1">{link.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">English Name Generators</h4>
              <ul className="space-y-4">
                {nameGeneratorLinks.english.map((link, index) => (
                  <li key={index} className="text-gray-400">
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                    <p className="text-sm mt-1">{link.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Japanese Name Generators</h4>
              <ul className="space-y-4">
                {nameGeneratorLinks.japanese.map((link, index) => (
                  <li key={index} className="text-gray-400">
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                    <p className="text-sm mt-1">{link.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Marvin42. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}