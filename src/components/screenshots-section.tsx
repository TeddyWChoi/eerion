import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import loadingScreen from 'figma:asset/c906e067ca3258f91786416f62a3ac40e3803c04.png';
import eerionWelcome from 'figma:asset/67c2082377df80749134b4a93ba939f676c5b034.png';
import guardianSpirit from 'figma:asset/5b8c8027b2eea4526e4a8279a97fc249501d7e62.png';
import welcomeScreen from 'figma:asset/ec1e862839423820a6b48a775b6a481f39bd08a3.png';
import homeScreen from 'figma:asset/246c8542df21f89eb281628f9f71e5ed66ea8f64.png';
import sleepScreen from 'figma:asset/9620d90858cd7eaf4e12f5022319739123223e92.png';
import eatingScreen from 'figma:asset/704283e89176e9d013c38173c656aa5567a45d88.png';
import collectionScreen from 'figma:asset/930ad6738480b9cbff36355c72518534a79eabc3.png';
import exploreAddScreen from 'figma:asset/0890c4827a992871d212567d7ae730a4d581b2d3.png';
import postScreen from 'figma:asset/7bf2c5ab7e4f67d81f51f7c9a36af1a3ab3e9865.png';
import exploreMapScreen from 'figma:asset/c8de97c9444ea77ba26371fe42d00c1c74ad8559.png';
import walkingScreen from 'figma:asset/8c3e6deedeea4257310c63f4ab7d6b7f05a5f358.png';
import shoppingScreen from 'figma:asset/b443405e58c7ca226d15136ba416e0327c8f6516.png';
import chatScreen from 'figma:asset/dd385b837f0876f7e93bb9d08a3664a6a6b4b107.png';
import profileScreen from 'figma:asset/3c3f6f101209ab19107e966a2cdb34b69c79fa40.png';
import communityScreen from 'figma:asset/47d6d340e1038b0ee2c12e84bc79855a4392e717.png';
import bulbsScreen from 'figma:asset/d3bfef620442a3ab97eb512c28edfdc822d6a4af.png';
import costumeScreen from 'figma:asset/e9cee0f46d5c3c7fa4ab0597518e09211093c698.png';
import keyringImage from 'figma:asset/5923540eb820403a6d0ae888728508a1141e776d.png';
import sleepGif from '../assets/sleep.gif';
import walkGif from '../assets/walk.gif';
import eatGif from '../assets/eat.gif';
import dashboardGif from '../assets/normal.gif';
import letterGif from '../assets/letter.gif';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

export function ScreenshotsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);
  const [showKeyring, setShowKeyring] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const keyringTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasPlayedIntroRef = useRef(false);

  const screenshots = [
    {
      image: welcomeScreen,
      title: t.screenshot1Title,
      description: t.screenshot1Description,
      gif: null,
    },
    {
      image: eerionWelcome,
      title: t.screenshot2Title,
      description: t.screenshot2Description,
      gif: null,
    },
    {
      image: loadingScreen,
      title: t.screenshot3Title,
      description: t.screenshot3Description,
      gif: null,
    },
    {
      image: guardianSpirit,
      title: t.screenshot4Title,
      description: t.screenshot4Description,
      gif: null,
    },
    {
      image: homeScreen,
      title: t.screenshot5Title,
      description: t.screenshot5Description,
      gif: dashboardGif,
    },
    {
      image: walkingScreen,
      title: t.screenshot6Title,
      description: t.screenshot6Description,
      gif: walkGif,
    },
    {
      image: eatingScreen,
      title: t.screenshot7Title,
      description: t.screenshot7Description,
      gif: eatGif,
    },
    {
      image: sleepScreen,
      title: t.screenshot8Title,
      description: t.screenshot8Description,
      gif: sleepGif,
    },
    {
      image: exploreMapScreen,
      title: t.screenshot9Title,
      description: t.screenshot9Description,
      gif: null,
    },
    {
      image: exploreAddScreen,
      title: t.screenshot10Title,
      description: t.screenshot10Description,
      gif: null,
    },
    {
      image: communityScreen,
      title: t.screenshot11Title,
      description: t.screenshot11Description,
      gif: null,
    },
    {
      image: postScreen,
      title: t.screenshot12Title,
      description: t.screenshot12Description,
      gif: null,
    },
    {
      image: chatScreen,
      title: t.screenshot13Title,
      description: t.screenshot13Description,
      gif: letterGif,
    },
    {
      image: bulbsScreen,
      title: t.screenshot14Title,
      description: t.screenshot14Description,
      gif: null,
    },
    {
      image: costumeScreen,
      title: t.screenshot15Title,
      description: t.screenshot15Description,
      gif: null,
    },
    {
      image: shoppingScreen,
      title: t.screenshot16Title,
      description: t.screenshot16Description,
      gif: null,
    },
    {
      image: collectionScreen,
      title: t.screenshot17Title,
      description: t.screenshot17Description,
      gif: null,
    },
  ];

  // Trigger intro animation when section comes into view
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // Only play intro animation if it hasn't been played before
            if (!hasPlayedIntroRef.current) {
              // Clear any existing timer
              if (keyringTimerRef.current) {
                clearTimeout(keyringTimerRef.current);
              }
              keyringTimerRef.current = setTimeout(() => {
                setShowKeyring(true);
              }, 500);
            } else {
              // Skip intro animation and show screenshots immediately
              setIntroComplete(true);
              setActiveIndex(0);
            }
          } else {
            // Only reset view state, but keep intro completion state
            setIsInView(false);
            if (!hasPlayedIntroRef.current) {
              setShowKeyring(false);
              setIntroComplete(false);
            }
            if (keyringTimerRef.current) {
              clearTimeout(keyringTimerRef.current);
              keyringTimerRef.current = null;
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
      if (keyringTimerRef.current) {
        clearTimeout(keyringTimerRef.current);
      }
    };
  }, []);

  // Scroll-based screenshot changing (only after intro is complete)
  useEffect(() => {
    if (!introComplete) return;

    const observers: (IntersectionObserver | null)[] = [];
    
    // Small delay to ensure refs are attached
    const timeoutId = setTimeout(() => {
      featureRefs.current.forEach((ref, index) => {
        if (!ref) {
          observers.push(null);
          return;
        }
        
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveIndex(index);
              }
            });
          },
          {
            threshold: 0.6,
            rootMargin: '-20% 0px -20% 0px',
          }
        );

        observer.observe(ref);
        observers.push(observer);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [language, introComplete]);

  return (
    <section id="screenshots" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
            {t.experienceTitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.experienceDescription}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Sticky Phone Mockup - Left Side */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 flex justify-center">
            <div className="relative min-h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FE2AB3] to-[#20EDA3] rounded-[3rem] blur-3xl opacity-20" />
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-3 w-[280px] sm:w-[320px]">
                <div className="relative w-full aspect-[9/19.5] bg-gray-900 rounded-[2rem] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {introComplete ? (
                      <motion.img
                        key={activeIndex}
                        src={screenshots[activeIndex].image}
                        alt={screenshots[activeIndex].title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <div key="black-screen" className="absolute inset-0 w-full h-full bg-black" />
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Keyring Animation */}
              <AnimatePresence>
                {showKeyring && !introComplete && (
                  <motion.div
                    initial={{ x: -350, y: 80, rotate: -30, scale: 0.7, opacity: 0 }}
                    animate={{ 
                      x: 30,
                      y: 140,
                      rotate: 5,
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{ 
                      duration: 1.8,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    onAnimationComplete={() => {
                      setTimeout(() => {
                        setIntroComplete(true);
                        setActiveIndex(0);
                        hasPlayedIntroRef.current = true;
                      }, 600);
                    }}
                    className="absolute pointer-events-none left-0 top-0"
                    style={{ zIndex: 100 }}
                  >
                    <motion.img
                      src={keyringImage}
                      alt="Keyring"
                      className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl"
                      animate={{
                        rotate: [5, -5, 8, -8, 5],
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 1.8,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Tap effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 2, 0], opacity: [0, 0.8, 0.6, 0] }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white border-4 border-[#20EDA3]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Feature Descriptions - Right Side */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ duration: 0.6, delay: introComplete ? 0.5 : 0 }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={`screenshot-${index}`}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`flex items-center ${
                  index === screenshots.length - 1 
                    ? 'min-h-[100vh] lg:min-h-[80vh]' 
                    : 'min-h-[60vh] lg:min-h-[40vh]'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className="inline-block px-4 py-1 bg-[#FE2AB3] text-white rounded-full mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
                    {screenshot.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {screenshot.description}
                  </p>
                  {screenshot.gif && (
                    <div className="mt-6 flex justify-start">
                      <img 
                        src={screenshot.gif} 
                        alt={`${screenshot.title} animation`}
                        className="object-contain"
                        style={{ width: '250px', height: 'auto' }}
                      />
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
