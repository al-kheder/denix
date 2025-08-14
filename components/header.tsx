"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import Link from "next/link";
import DropdownMenu, {
  DropdownItem,
  DropdownSection,
  DropdownMenuProps,
} from "./dropdown-menu";
import {
  Sun,
  Moon,
  Menu,
  X,
  Search,
  ChevronDown,
  Globe,
  User,
  Monitor,
  Smartphone,
  Layers,
  Box,
  TrendingUp,
  BarChart,
  Users,
  Compass,
  BarChart2,
  Archive,
  LucideIcon,
} from "lucide-react";

interface NavigationItem {
  title: string;
  href?: string;
  submenu?: {
    sections: DropdownSection[];
  };
}

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll position for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navigation: NavigationItem[] = [
    {
      title: t("nav.product"),
      submenu: {
        sections: [
          {
            title: t("product.business_software"),
            items: [
              {
                title: t("product.usability"),
                description: t("product.usability_desc"),
                href: "/usability",
                icon: User,
              },
              {
                title: t("product.modern_work"),
                description: t("product.modern_work_desc"),
                href: "/modern-work",
                icon: Monitor,
              },
              {
                title: t("product.productive_everywhere"),
                description: t("product.productive_everywhere_desc"),
                href: "/productive",
                icon: Smartphone,
              },
              {
                title: t("product.ecosystem"),
                description: t("product.ecosystem_desc"),
                href: "/ecosystem",
                icon: Layers,
              },
              {
                title: t("product.ai_support"),
                description: t("product.ai_support_desc"),
                href: "/ai-support",
                icon: Box,
              },
            ],
          },
          {
            title: t("company.your_company"),
            items: [
              {
                title: t("company.efficiency"),
                description: t("company.efficiency_desc"),
                href: "/efficiency",
                icon: TrendingUp,
              },
              {
                title: t("company.growth"),
                description: t("company.growth_desc"),
                href: "/growth",
                icon: BarChart,
              },
              {
                title: t("company.customer_focus"),
                description: t("company.customer_focus_desc"),
                href: "/customer-focus",
                icon: Users,
              },
              {
                title: t("company.employee_satisfaction"),
                description: t("company.employee_satisfaction_desc"),
                href: "/employee-satisfaction",
                icon: Compass,
              },
              {
                title: t("company.cost_optimization"),
                description: t("company.cost_optimization_desc"),
                href: "/cost-optimization",
                icon: BarChart2,
              },
              {
                title: t("company.data_analysis"),
                description: t("company.data_analysis_desc"),
                href: "/data-analysis",
                icon: Archive,
              },
            ],
          },
          {
            title: t("start.your_start"),
            items: [
              {
                title: t("start.easy_intro"),
                description: t("start.easy_intro_desc"),
                href: "/easy-intro",
                icon: User,
              },
              {
                title: t("start.switch_to_denix"),
                description: t("start.switch_to_denix_desc"),
                href: "/switch",
                icon: Monitor,
              },
              {
                title: t("start.video_courses"),
                description: t("start.video_courses_desc"),
                href: "/video-courses",
                icon: Smartphone,
              },
              {
                title: t("start.maintenance"),
                description: t("start.maintenance_desc"),
                href: "/maintenance",
                icon: Layers,
              },
              {
                title: t("start.scaling"),
                description: t("start.scaling_desc"),
                href: "/scaling",
                icon: Box,
              },
            ],
          },
        ],
      },
    },
    {
      title: t("nav.solutions"),
      href: "/solutions",
    },
    {
      title: t("nav.pricing"),
      href: "/pricing",
    },
    {
      title: t("nav.customers"),
      href: "/customers",
    },
    {
      title: t("nav.partners"),
      href: "/partners",
    },
    {
      title: t("nav.community"),
      href: "/community",
    },
  ];

  const handleMouseEnter = (item: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setHoverTimeout(timeout);
  };
  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="w-32 h-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 z-50 backdrop-blur-sm transition-shadow duration-200 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <svg
                width="140"
                height="37"
                viewBox="0 0 140 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-auto"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M15.85 21.1299H10.57V26.4099H15.85V21.1299Z"
                    fill="#CF211B"
                  ></path>
                  <path
                    d="M10.56 5.28003H5.28003V10.56H10.56V5.28003Z"
                    fill="#CF211B"
                  ></path>
                  <path
                    d="M5.28 15.8001V10.5701H0V15.8501H5.28V21.0801H10.57V15.8501H15.85V10.5701H10.57V15.8001H5.28Z"
                    fill="#CF211B"
                  ></path>
                  <path
                    d="M34.34 13.21C34.34 20.5 28.43 26.42 21.13 26.42V21.14C25.51 21.14 29.05 17.59 29.05 13.22C29.05 8.85 25.5 5.3 21.13 5.3H15.85H10.57V0H15.85H21.13C28.43 0 34.34 5.91 34.34 13.21ZM41.6 5.28V26.41H46.88V5.28H41.6ZM56.13 5.28V26.41H61.3V13.11L75.27 26.41H79.25V5.28H74.08V18.17L60.53 5.28H56.13ZM87.83 5.28V26.41H108.3V21.84H93.17V18H108.3V13.57H93.17V9.86H108.3V5.28H87.83ZM133.25 5.28L127.46 12.14L121.45 5.28H114.7L123.57 15.36L114.24 26.41H120.53L126.78 19.03L133.28 26.41H140L130.64 15.77L139.54 5.27H133.25V5.28Z"
                    fill="#1E1E75"
                  ></path>
                  <path
                    d="M74.73 34.2201C75.82 34.2201 76.39 34.6201 76.39 35.4301C76.39 36.3401 75.84 36.8801 74.49 36.8801H70.37L71.25 35.7401H74.6C74.92 35.7401 75.07 35.6501 75.07 35.4201C75.07 35.1901 74.92 35.1001 74.6 35.1001H72.19C71.05 35.1001 70.53 34.5901 70.53 33.8301C70.53 33.0001 71.09 32.4501 72.43 32.4501H76.28L75.4 33.6001H72.33C72.01 33.6001 71.86 33.6701 71.86 33.9001C71.86 34.1301 72.01 34.2101 72.33 34.2101H74.73V34.2201ZM84.03 36.8801H82.41L81.61 35.7501C81.48 35.5901 81.31 35.3201 81.16 35.1101L80.37 33.9401L78.29 36.8801H76.67L79.51 32.8701C79.7 32.6101 79.97 32.3701 80.4 32.3701C80.82 32.3701 81.08 32.5801 81.27 32.8701L84.03 36.8801ZM70.14 36.8801H68.52L67.72 35.7501C67.59 35.5901 67.42 35.3201 67.27 35.1101L66.48 33.9401L64.4 36.8801H62.78L65.62 32.8701C65.81 32.6101 66.08 32.3701 66.51 32.3701C66.93 32.3701 67.19 32.5801 67.38 32.8701L70.14 36.8801ZM62.62 36.8801H61L60.2 35.7501C60.07 35.5901 59.9 35.3201 59.75 35.1101L58.96 33.9401L56.88 36.8801H55.26L58.1 32.8701C58.29 32.6101 58.56 32.3701 58.99 32.3701C59.41 32.3701 59.67 32.5801 59.86 32.8701L62.62 36.8801ZM87.58 34.1001C87.97 34.8001 88.14 35.1101 88.29 35.4201C88.43 35.1101 88.61 34.7801 89 34.1001L89.71 32.8401C89.87 32.5601 90.1 32.3701 90.46 32.3701C90.8 32.3701 91.1 32.5601 91.23 32.9801L92.35 36.8701H90.99L90.57 35.3301C90.43 34.8301 90.34 34.4801 90.27 34.1101C90.12 34.4201 89.95 34.7601 89.65 35.3401L89.05 36.4501C88.82 36.8901 88.59 36.9501 88.26 36.9501C87.93 36.9501 87.7 36.8901 87.47 36.4501L86.87 35.3301C86.55 34.7301 86.39 34.4101 86.25 34.1101C86.18 34.4601 86.08 34.8301 85.95 35.3301L85.53 36.8701H84.19L85.34 32.9801C85.47 32.5601 85.77 32.3701 86.11 32.3701C86.46 32.3701 86.7 32.5501 86.86 32.8401L87.58 34.1001ZM99.35 34.0001C98.76 33.7501 98.19 33.6201 97.64 33.6201C97.01 33.6201 96.7 33.7301 96.7 33.9401C96.7 34.0901 96.88 34.1901 97.24 34.2301L98.51 34.3801C99.41 34.4901 99.91 34.9501 99.91 35.6701C99.91 36.5401 99.2 36.9901 97.84 36.9901C97.04 36.9901 96.26 36.8401 95.51 36.5401L95.88 35.6201C96.52 35.9201 97.18 36.0701 97.87 36.0701C98.51 36.0701 98.82 35.9501 98.82 35.7101C98.82 35.5401 98.66 35.4701 98.26 35.4101L97.04 35.2601C96.09 35.1401 95.62 34.7301 95.62 34.0301C95.62 33.1801 96.37 32.7101 97.75 32.7101C98.07 32.7101 98.38 32.7401 98.66 32.8001C98.94 32.8601 99.3 32.9601 99.7 33.1001L99.35 34.0001ZM101.69 33.3101C102.19 32.9201 102.84 32.7201 103.65 32.7201C104.46 32.7201 105.11 32.9201 105.6 33.3101C106.1 33.7001 106.34 34.2201 106.34 34.8601C106.34 35.5101 106.1 36.0301 105.6 36.4201C105.11 36.8101 104.46 37.0001 103.65 37.0001C102.84 37.0001 102.18 36.8101 101.69 36.4201C101.2 36.0301 100.96 35.5101 100.96 34.8601C100.95 34.2201 101.2 33.7001 101.69 33.3101ZM102.07 34.8601C102.07 35.2201 102.22 35.5201 102.5 35.7401C102.78 35.9601 103.17 36.0701 103.64 36.0701C104.11 36.0701 104.49 35.9601 104.79 35.7401C105.08 35.5101 105.23 35.2201 105.23 34.8601C105.23 34.5001 105.08 34.2001 104.79 33.9901C104.5 33.7701 104.11 33.6501 103.64 33.6501C103.17 33.6501 102.79 33.7601 102.5 33.9901C102.22 34.2001 102.07 34.5001 102.07 34.8601ZM111.45 32.8401V33.7901H108.78V34.5301H111.28L110.9 35.4801H108.79V36.8801H107.69V32.8401H111.45ZM116.34 32.8401V33.8101H114.75V36.8801H113.65V33.8101H112.06V32.8401H116.34ZM117.99 32.8401L118.81 35.6601L119.58 32.8401H121.08L121.84 35.6601L122.68 32.8401H123.84L122.58 36.8801H121.12L120.33 34.0801L119.51 36.8801H118.05L116.8 32.8401H117.99ZM123.88 36.8801L125.9 32.8401H127.2L129.22 36.8801H128.03L127.69 36.2001H125.38L125.04 36.8801H123.88ZM125.76 35.3001H127.31L126.54 33.7501L125.76 35.3001ZM132.84 32.8401C133.98 32.8401 134.6 33.2801 134.6 34.1101C134.6 34.7501 134.24 35.1801 133.59 35.3401L134.81 36.8901H133.45L132.36 35.4701H131.62L132.03 34.5201H133C133.34 34.5201 133.5 34.4001 133.5 34.1601C133.5 33.9201 133.33 33.8001 132.99 33.8001H131.35V36.8901H130.23V32.8501H132.84V32.8401ZM139.78 32.8401V33.7901H137.17V34.3801H139.61L139.23 35.3101H137.18V35.9301H140V36.8801H136.07V32.8401H139.78Z"
                    fill="#141923"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="140" height="37" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                      onMouseEnter={() => handleMouseEnter(item.title)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Menu */}
                    {/* Reusable DropdownMenu */}
                    <DropdownMenu
                      sections={item.submenu.sections}
                      isOpen={activeDropdown === item.title}
                      onMouseEnter={() => handleMouseEnter(item.title)}
                    />
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                {t("buttons.book_appointment")}
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                {t("buttons.free_trial")}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex items-center justify-between w-full text-left py-2 text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.submenu.sections.map((section) => (
                            <div key={section.title}>
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                {section.title}
                              </h4>
                              {section.items.map((subItem) => (
                                <a
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                  {subItem.title}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {t("buttons.book_appointment")}
                </button>
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  {t("buttons.free_trial")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
