import { motion } from 'motion/react';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

import chi1 from '../assets/chi1.png';
import chi2 from '../assets/chi2.png';
import buddy1 from 'figma:asset/04e308c1ef0e26edc5f2b92cf13b4cc9e04a6889.png';
import buddy2 from 'figma:asset/91e43294aed4714fd13e4ce9a341abdcdd714b3b.png';
import mobileImage from '../assets/mobile.png';

const eatGif = chi1;
const letterGif = chi2;
const sleepGif = buddy1;
const walkGif = buddy2;

export function BuddysCallSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const calls = [
    {
      title: t.buddyCall1Title,
      message: t.buddyCall1Message,
      gif: eatGif,
      bgColor: '#4BA2FF',
    },
    {
      title: t.buddyCall2Title,
      message: t.buddyCall2Message,
      gif: letterGif,
      bgColor: '#4BA2FF',
    },
    {
      title: t.buddyCall3Title,
      message: t.buddyCall3Message,
      gif: sleepGif,
      bgColor: '#FFE0DF',
    },
    {
      title: t.buddyCall4Title,
      message: t.buddyCall4Message,
      gif: walkGif,
      bgColor: '#06D38C',
    },
  ];

  return (
    <section className="bg-[#c5defc] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
            {t.buddysCallTitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-full mx-auto">
            {t.buddysCallDescription}
          </p>
        </motion.div>

        {/* Main Content - Phone and Call Cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
          {/* Left Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src={mobileImage}
              alt="Mobile Phone"
              className="w-[280px] sm:w-[320px] lg:w-[350px] h-auto object-contain"
            />
          </motion.div>

          {/* Right Side - Call Cards */}
          <div className="flex flex-col gap-6 w-full max-w-[600px]">
            {calls.map((call, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar with GIF */}
                  <div 
                    className="flex-shrink-0 w-[75px] h-[75px] sm:w-[91px] sm:h-[91px] rounded-[20px] flex items-center justify-center"
                    style={{ backgroundColor: call.bgColor }}
                  >
                    <img
                      src={call.gif}
                      alt={call.title}
                      className="w-[55px] h-[50px] sm:w-[70px] sm:h-[60px] object-contain"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-xl sm:text-2xl text-[#383838] mb-1 font-black" style={{ fontWeight: 900 }}>
                      {call.title}
                    </h3>
                    <p className="text-lg sm:text-[22px] text-[#383838] leading-relaxed">
                      {call.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
