import React from 'react';
import { Globe, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: t.multiLanguageTitle,
      description: t.multiLanguageDesc
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: t.customizableTitle,
      description: t.customizableDesc
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: t.batchGenerationTitle,
      description: t.batchGenerationDesc
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.featuresTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-purple-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}