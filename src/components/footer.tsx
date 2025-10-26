import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from 'figma:asset/7d0945e1d39251ac137b0d4488aabd6b6d097b19.png';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="eerion" className="h-8 w-auto brightness-200" />
            </div>
            <p className="text-gray-400 mb-4">
              {t.footerDescription}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FE2AB3] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FE2AB3] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FE2AB3] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FE2AB3] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">{t.product}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.features}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.download}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.blog}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">{t.support}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.helpCenter}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.contact}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.faq}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.community}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.careers}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#20EDA3] transition-colors">
                  {t.press}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">{t.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#20EDA3] transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="text-gray-400 hover:text-[#20EDA3] transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
