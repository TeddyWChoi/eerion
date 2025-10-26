import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Activity, Heart, Moon, TrendingUp, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

export function FeaturesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Activity,
      title: t.feature1Title,
      description: t.feature1Description,
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Heart,
      title: t.feature2Title,
      description: t.feature2Description,
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Moon,
      title: t.feature3Title,
      description: t.feature3Description,
      color: 'from-purple-400 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: t.feature4Title,
      description: t.feature4Description,
      color: 'from-blue-400 to-cyan-500',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
            {t.featuresTitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.featuresDescription}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
