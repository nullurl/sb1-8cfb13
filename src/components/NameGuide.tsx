import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Globe } from 'lucide-react';

export default function NameGuide() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeGuide, setActiveGuide] = useState<'ja' | 'zh' | 'en'>('ja');

  useEffect(() => {
    setActiveGuide(language as 'ja' | 'zh' | 'en');
  }, [language]);

  const defaultGuide = {
    title: 'Name Guide',
    intro: 'Understanding names is crucial for creating authentic names.',
    sections: [
      {
        title: 'Family Names',
        content: 'Family names often have historical origins and meanings.'
      },
      {
        title: 'Given Names',
        content: 'Given names can reflect cultural heritage and traditions.'
      }
    ],
    tips: [],
    elements: [],
    genderPatterns: {
      male: [],
      female: []
    },
    trends: []
  };

  const guides = {
    ja: {
      title: t.nameGuideTitle || '日本語の名前ガイド',
      intro: t.nameGuideIntro || '日本語の名前を理解することは、本物の名前を作成する上で重要です。',
      sections: [
        {
          title: t.familyNameSection || '姓',
          content: t.familyNameContent || '日本の姓は地理的特徴、職業、または歴史的な氏族との関連を持つことが多いです。'
        },
        {
          title: t.givenNameSection || '名',
          content: t.givenNameContent || '名前はひらがな、カタカナ、または漢字で書くことができます。'
        }
      ],
      tips: Array.isArray(t.namingTips) ? t.namingTips : [],
      elements: Array.isArray(t.popularElementsList) ? t.popularElementsList : [],
      genderPatterns: {
        male: Array.isArray(t.malePatterns) ? t.malePatterns : [],
        female: Array.isArray(t.femalePatterns) ? t.femalePatterns : []
      },
      trends: Array.isArray(t.trendsList) ? t.trendsList : []
    },
    zh: {
      title: t.nameGuideTitle || '中文名字指南',
      intro: t.nameGuideIntro || '了解中文名字的构成对于创建真实的中文名字至关重要。',
      sections: [
        {
          title: t.familyNameSection || '姓氏',
          content: t.familyNameContent || '中国有数千个姓氏，每个姓氏都有其独特的历史渊源。'
        },
        {
          title: t.givenNameSection || '名字',
          content: t.givenNameContent || '中文名字通常由一个或两个字组成。'
        }
      ],
      tips: Array.isArray(t.namingTips) ? t.namingTips : [],
      elements: Array.isArray(t.popularElementsList) ? t.popularElementsList : [],
      genderPatterns: {
        male: Array.isArray(t.malePatterns) ? t.malePatterns : [],
        female: Array.isArray(t.femalePatterns) ? t.femalePatterns : []
      },
      trends: Array.isArray(t.trendsList) ? t.trendsList : []
    },
    en: {
      title: t.nameGuideTitle || 'English Name Guide',
      intro: t.nameGuideIntro || 'Understanding English names is crucial for creating authentic names.',
      sections: [
        {
          title: t.familyNameSection || 'Family Names',
          content: t.familyNameContent || 'English family names often have historical origins and meanings.'
        },
        {
          title: t.givenNameSection || 'Given Names',
          content: t.givenNameContent || 'English given names can reflect cultural heritage and family traditions.'
        }
      ],
      tips: Array.isArray(t.namingTips) ? t.namingTips : [],
      elements: Array.isArray(t.popularElementsList) ? t.popularElementsList : [],
      genderPatterns: {
        male: Array.isArray(t.malePatterns) ? t.malePatterns : [],
        female: Array.isArray(t.femalePatterns) ? t.femalePatterns : []
      },
      trends: Array.isArray(t.trendsList) ? t.trendsList : []
    }
  };

  const currentGuide = guides[activeGuide] || defaultGuide;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveGuide('ja')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeGuide === 'ja'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              日本語
            </button>
            <button
              onClick={() => setActiveGuide('zh')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeGuide === 'zh'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setActiveGuide('en')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeGuide === 'en'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <article className="prose lg:prose-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <Globe className="w-6 h-6 text-purple-600" />
            {currentGuide.title}
          </h2>
          
          <p className="text-gray-600 mb-12">
            {currentGuide.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {currentGuide.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.namingTipsTitle || 'Naming Tips'}
            </h3>
            <ul className="space-y-4">
              {currentGuide.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.popularElements || 'Popular Elements'}
            </h3>
            <ul className="space-y-4">
              {currentGuide.elements.map((element, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">{element}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.genderConsiderations || 'Gender Considerations'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Male Names</h4>
                <ul className="space-y-4">
                  {currentGuide.genderPatterns.male.map((pattern, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-600">{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Female Names</h4>
                <ul className="space-y-4">
                  {currentGuide.genderPatterns.female.map((pattern, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-600 font-bold mr-2">•</span>
                      <span className="text-gray-600">{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.modernTrends || 'Modern Trends'}
            </h3>
            <ul className="space-y-4">
              {currentGuide.trends.map((trend, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">{trend}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}