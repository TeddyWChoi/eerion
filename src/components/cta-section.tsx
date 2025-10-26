import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Apple, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

export function CTASection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="download" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FE2AB3] via-[#FE2AB3] to-[#20EDA3] p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
              style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}
            >
              {t.ctaTitle}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              {t.ctaDescription}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button className="bg-white text-[#FE2AB3] hover:bg-gray-100 px-8 py-6 w-full sm:w-auto">
                <Apple className="w-5 h-5 mr-2" />
                {t.downloadNow}
              </Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 w-full sm:w-auto">
                <Smartphone className="w-5 h-5 mr-2" />
                {t.learnMore}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-white/80"
            >
              {t.availableOn}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
