"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, Eye, Type, Contrast } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  language: "en" | "ru" | "kz"
  setLanguage: (lang: "en" | "ru" | "kz") => void
  isAccessibilityMode: boolean
  setIsAccessibilityMode: (mode: boolean) => void
}

export function Header({ language, setLanguage, isAccessibilityMode, setIsAccessibilityMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState("normal")
  const [highContrast, setHighContrast] = useState(false)

  const navigationItems = {
    en: [
      { href: "/", label: "Home" },
      { href: "/programs", label: "Programs" },
      { href: "/research", label: "Research" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" },
    ],
    ru: [
      { href: "/", label: "Главная" },
      { href: "/programs", label: "Программы" },
      { href: "/research", label: "Исследования" },
      { href: "/news", label: "Новости" },
      { href: "/contact", label: "Контакты" },
    ],
    kz: [
      { href: "/", label: "Басты" },
      { href: "/programs", label: "Бағдарламалар" },
      { href: "/research", label: "Зерттеулер" },
      { href: "/news", label: "Жаңалықтар" },
      { href: "/contact", label: "Байланыс" },
    ],
  }

  const currentNavItems = navigationItems[language]

  useEffect(() => {
    document.documentElement.classList.toggle("accessibility-mode", isAccessibilityMode)
    document.documentElement.classList.toggle("large-text", fontSize === "large")
    document.documentElement.classList.toggle("high-contrast", highContrast)
  }, [isAccessibilityMode, fontSize, highContrast])

  return (
    <header
      className={`bg-white border-b border-gray-200 sticky top-0 z-50 ${isAccessibilityMode ? "accessibility-mode" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="EduCenter Logo" width={40} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            {/* Accessibility Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-2 ${isAccessibilityMode ? "bg-sky-100 text-sky-700" : "text-gray-600 hover:text-blue-900"}`}
                  title={
                    language === "en"
                      ? "Accessibility options"
                      : language === "ru"
                        ? "Параметры доступности"
                        : "Қолжетімділік опциялары"
                  }
                >
                  <Eye className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem
                  onClick={() => setIsAccessibilityMode(!isAccessibilityMode)}
                  className="flex items-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>
                    {language === "en"
                      ? isAccessibilityMode
                        ? "Disable accessibility"
                        : "Enable accessibility"
                      : language === "ru"
                        ? isAccessibilityMode
                          ? "Отключить доступность"
                          : "Включить доступность"
                        : isAccessibilityMode
                          ? "Қолжетімділікті өшіру"
                          : "Қолжетімділікті қосу"}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setFontSize(fontSize === "large" ? "normal" : "large")}
                  className="flex items-center space-x-2"
                >
                  <Type className="h-4 w-4" />
                  <span>
                    {language === "en"
                      ? fontSize === "large"
                        ? "Normal text size"
                        : "Large text size"
                      : language === "ru"
                        ? fontSize === "large"
                          ? "Обычный размер текста"
                          : "Крупный размер текста"
                        : fontSize === "large"
                          ? "Қалыпты мәтін өлшемі"
                          : "Үлкен мәтін өлшемі"}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setHighContrast(!highContrast)}
                  className="flex items-center space-x-2"
                >
                  <Contrast className="h-4 w-4" />
                  <span>
                    {language === "en"
                      ? highContrast
                        ? "Normal contrast"
                        : "High contrast"
                      : language === "ru"
                        ? highContrast
                          ? "Обычный контраст"
                          : "Высокий контраст"
                        : highContrast
                          ? "Қалыпты контраст"
                          : "Жоғары контраст"}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 px-3 py-2"
                  title={language === "en" ? "Change language" : language === "ru" ? "Изменить язык" : "Тілді өзгерту"}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`flex items-center space-x-2 ${language === "en" ? "bg-blue-50" : ""}`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ru")}
                  className={`flex items-center space-x-2 ${language === "ru" ? "bg-blue-50" : ""}`}
                >
                  <span className="text-lg">🇷🇺</span>
                  <span>Русский</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("kz")}
                  className={`flex items-center space-x-2 ${language === "kz" ? "bg-blue-50" : ""}`}
                >
                  <span className="text-lg">🇰🇿</span>
                  <span>Қазақша</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/login">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                {language === "en" ? "Log In" : language === "ru" ? "Войти" : "Кіру"}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Controls */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {language === "en" ? "Language:" : language === "ru" ? "Язык:" : "Тіл:"}
                  </span>
                  <div className="flex space-x-2">
                    <Button
                      variant={language === "en" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                      className="text-xs"
                    >
                      EN
                    </Button>
                    <Button
                      variant={language === "ru" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("ru")}
                      className="text-xs"
                    >
                      RU
                    </Button>
                    <Button
                      variant={language === "kz" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("kz")}
                      className="text-xs"
                    >
                      KZ
                    </Button>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAccessibilityMode(!isAccessibilityMode)}
                  className={`flex items-center space-x-2 justify-start ${isAccessibilityMode ? "bg-sky-100 text-sky-700" : "text-gray-600"}`}
                >
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">
                    {language === "en" ? "Accessibility" : language === "ru" ? "Доступность" : "Қолжетімділік"}
                  </span>
                </Button>
              </div>

              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/login">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                    {language === "en" ? "Log In" : language === "ru" ? "Войти" : "Кіру"}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
