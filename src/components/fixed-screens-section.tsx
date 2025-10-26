import { motion } from 'motion/react';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

const standardRandomGif = 'https://teddywchoi.github.io/eerion/img/standard-random.gif';
const walkingGif = 'https://teddywchoi.github.io/eerion/img/walking.gif';
const sleepingGif = 'https://teddywchoi.github.io/eerion/img/sleeping.gif';
const eatingGif = 'https://teddywchoi.github.io/eerion/img/eating.gif';
const postGif = 'https://teddywchoi.github.io/eerion/img/post.gif';
const standardImage = 'https://teddywchoi.github.io/eerion/img/standard.png';
const phoneMockup = 'https://teddywchoi.github.io/eerion/img/phone.png';
const mobile2 = 'https://teddywchoi.github.io/eerion/img/mobile2.png';

export function FixedScreensSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const states: Array<{
    title: string;
    note: string;
    gif?: string;
    image?: string;
  }> = [
    {
      title: t.stateStandard,
      note: '',
      image: standardImage,
    },
    {
      title: t.stateStandardRandom,
      note: t.stateStandardNote,
      gif: standardRandomGif,
    },
    {
      title: t.stateWalking,
      note: t.stateWalkingNote,
      gif: walkingGif,
    },
    {
      title: t.stateSleeping,
      note: t.stateSleepingNote,
      gif: sleepingGif,
    },
    {
      title: t.stateEating,
      note: t.stateEatingNote,
      gif: eatingGif,
    },
    {
      title: t.statePost,
      note: t.statePostNote,
      gif: postGif,
    },
  ];

  return (
    <section className="bg-[#ffeafd] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            {t.fixedScreensTitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.fixedScreensDescription}
          </p>
        </motion.div>

        {/* States Section */}
        <div className="mb-12">
          {/* Images Row */}
          <div className="flex justify-between items-center mb-6 px-4">
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                {state.gif || state.image ? (
                  <img
                    src={state.gif || state.image}
                    alt={state.title}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
                  />
                ) : (
                  <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">Image</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* First Divider - Solid */}
          <div className="border-t border-black mb-4"></div>

          {/* Titles Row */}
          <div className="flex justify-between items-start mb-4 px-4">
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-center flex-1"
              >
                <h3 className="text-[13px] sm:text-[15px] text-black">
                  {state.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Second Divider - Dashed */}
          <div className="border-t border-black border-dashed mb-6"></div>

          {/* Notes Row */}
          <div className="flex justify-between items-start px-4">
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="text-center flex-1"
              >
                {state.note && (
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-black leading-[1.4] px-1">
                    {state.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Third Divider - Solid */}
          <div className="border-t border-black mt-6"></div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center items-end mt-16 -mb-16 sm:-mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={mobile2}
              alt="Mobile Mockup"
              className="w-[500px] md:w-[650px] lg:w-[800px] h-auto object-contain"
            />
            {/* Post GIF Icon - positioned near 9:30 time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-[19%] left-[9%] sm:top-[7%] sm:left-[12%] lg:left-[22%]"
              style={{ marginLeft: '165px', marginTop: '35px' }}
            >
              <img
                src={postGif}
                alt="Notification"
                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
