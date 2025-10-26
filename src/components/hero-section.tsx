import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download, Play } from 'lucide-react';
import welcomeScreen from 'figma:asset/ec1e862839423820a6b48a775b6a481f39bd08a3.png';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section 
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(32, 237, 163, 0.10) 0%, #EFF6FF 50%, rgba(254, 42, 179, 0.10) 100%)'
      }}
    >
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-[#FE2AB3] rounded-full text-white"
            >
              {t.nowAvailable}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-[#FE2AB3] hover:bg-[#E0248F] text-white px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                {t.downloadApp}
              </Button>
              <Button className="bg-[#20EDA3] hover:bg-[#1BC98A] text-black px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                {t.watchDemo}
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-8 justify-center lg:justify-start">
              <div>
                <div className="text-2xl sm:text-3xl text-gray-900">500K+</div>
                <div className="text-gray-600">{t.downloads}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl text-gray-900">4.8</div>
                <div className="text-gray-600">{t.rating}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl text-gray-900">100K+</div>
                <div className="text-gray-600">{t.activeUsers}</div>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FE2AB3] to-[#20EDA3] rounded-[3rem] blur-3xl opacity-20 animate-pulse" />
              <img
                src={welcomeScreen}
                alt="eerion App"
                className="relative w-64 sm:w-80 h-auto rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
