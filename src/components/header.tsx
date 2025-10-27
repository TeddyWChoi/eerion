import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/7d0945e1d39251ac137b0d4488aabd6b6d097b19.png';
import { useLanguage } from '../contexts/language-context';
import { translations } from '../utils/translations';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko');
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-0 lg:px-4">
                <div className="flex items-center justify-between h-16 sm:h-20 px-4 lg:px-0">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="eerion" className="h-8 sm:h-10 w-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-gray-700 hover:text-[#FE2AB3] transition-colors">
                            {t.features}
                        </a>
                        <a href="#screenshots" className="text-gray-700 hover:text-[#FE2AB3] transition-colors">
                            {t.preview}
                        </a>
                        <a href="#download" className="text-gray-700 hover:text-[#FE2AB3] transition-colors">
                            {t.download}
                        </a>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <Globe className="w-4 h-4 text-gray-700" />
                            <span className="text-gray-700">{language === 'ko' ? '한국어' : 'English'}</span>
                        </button>
                        <Button className="bg-[#FE2AB3] hover:bg-[#E0248F] text-white">{t.getStarted}</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button onClick={toggleLanguage} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Globe className="w-5 h-5 text-gray-700" />
                        </button>
                        <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-900" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-900" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 px-4 border-t border-gray-100">
                        <nav className="flex flex-col gap-4">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-[#FE2AB3] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t.features}
                            </a>
                            <a
                                href="#screenshots"
                                className="text-gray-700 hover:text-[#FE2AB3] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t.preview}
                            </a>
                            <a
                                href="#download"
                                className="text-gray-700 hover:text-[#FE2AB3] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t.download}
                            </a>
                            <Button className="bg-[#FE2AB3] hover:bg-[#E0248F] text-white w-full">
                                {t.getStarted}
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
