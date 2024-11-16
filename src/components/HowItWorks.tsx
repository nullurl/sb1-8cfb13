import React from 'react';
import { Settings, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: t.step1Title,
      description: t.step1Desc
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: t.step2Title,
      description: t.step2Desc
    },
    {
      icon: <Check className="w-8 h-8 text-purple-600" />,
      title: t.step3Title,
      description: t.step3Desc
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.howItWorksSubtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center relative z-10">
                  <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}