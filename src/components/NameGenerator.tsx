import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { generateNames } from '../utils/nameGenerator';
import { Copy, Check, Download, Volume2 } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function NameGenerator() {
  const { language } = useLanguage();
  const t = translations[language];
  const [nameLanguage, setNameLanguage] = useState('en');
  const [gender, setGender] = useState('any');
  const [type, setType] = useState('normal');
  const [count, setCount] = useState(1);
  const [names, setNames] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const handwritingRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getHandwritingClass = (lang: string) => {
    switch (lang) {
      case 'en':
        return 'font-handwriting-en';
      case 'ja':
        return 'font-handwriting-ja';
      case 'zh':
        return 'font-handwriting-zh';
      default:
        return 'font-handwriting-en';
    }
  };

  const handleGenerate = () => {
    const generatedNames = generateNames(nameLanguage, gender, type, count);
    setNames(generatedNames);
    handwritingRefs.current = new Array(generatedNames.length).fill(null);
  };

  const handleCopy = (name: string, index: number) => {
    navigator.clipboard.writeText(name);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const downloadImage = async (index: number) => {
    const element = handwritingRefs.current[index];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        windowWidth: element.offsetWidth * 2,
        windowHeight: element.offsetHeight * 2
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `handwritten-name-${index + 1}.png`;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const speakName = (name: string, index: number) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(name);
      
      // Set language based on name language
      switch (nameLanguage) {
        case 'zh':
          utterance.lang = 'zh-CN';
          break;
        case 'ja':
          utterance.lang = 'ja-JP';
          break;
        default:
          utterance.lang = 'en-US';
      }

      setIsPlaying(index);
      
      utterance.onend = () => {
        setIsPlaying(null);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="generator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">{t.generateNames}</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.language}</label>
                <select
                  value={nameLanguage}
                  onChange={(e) => setNameLanguage(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                  <option value="ja">日本語</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.gender}</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="any">{t.any}</option>
                  <option value="male">{t.male}</option>
                  <option value="female">{t.female}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.type}</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="normal">{t.normal}</option>
                  <option value="legendary">{t.legendary}</option>
                  <option value="cute">{t.cute}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.count}</label>
                <select
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleGenerate}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t.generate}
              </button>

              {names.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{t.results}</h3>
                  <div className="space-y-4">
                    {names.map((name, index) => (
                      <div key={index} className="space-y-2">
                        <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                          <span className="text-gray-900">{name}</span>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => speakName(name, index)}
                              className={`text-purple-600 hover:text-purple-700 p-2 ${isPlaying === index ? 'animate-pulse' : ''}`}
                              title="Listen to pronunciation"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleCopy(name, index)}
                              className="text-purple-600 hover:text-purple-700 p-2"
                              title={t.copy}
                            >
                              {copiedIndex === index ? (
                                <Check className="w-5 h-5" />
                              ) : (
                                <Copy className="w-5 h-5" />
                              )}
                            </button>
                            <button
                              onClick={() => downloadImage(index)}
                              className="text-purple-600 hover:text-purple-700 p-2"
                              title={t.downloadHandwritten}
                            >
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <div 
                          ref={el => handwritingRefs.current[index] = el}
                          className={`p-4 bg-white rounded-lg ${getHandwritingClass(nameLanguage)} flex items-center justify-center`}
                        >
                          <span className="text-4xl text-gray-800">{name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}