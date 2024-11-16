import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  const plans = [
    {
      name: t.freePlan,
      price: '$0',
      features: [t.feature1Free, t.feature2Free, t.feature3Free]
    },
    {
      name: t.proPlan,
      price: '$9.99',
      features: [t.feature1Pro, t.feature2Pro, t.feature3Pro, t.feature4Pro]
    },
    {
      name: t.enterprisePlan,
      price: t.contactUs,
      features: [t.feature1Enterprise, t.feature2Enterprise, t.feature3Enterprise, t.feature4Enterprise]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.pricingTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.pricingSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== t.contactUs && <span className="text-gray-600">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                {t.getStarted}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}