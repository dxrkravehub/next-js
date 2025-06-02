import Link from "next/link"
import { Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

interface FooterProps {
  language?: "en" | "ru" | "kz"
  isAccessibilityMode?: boolean
}

export function Footer({ language = "kz", isAccessibilityMode = false }: FooterProps) {
  return (
    <footer className="bg-blue-900 text-white">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${isAccessibilityMode ? "accessibility-mode" : ""}`}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">EduCenter</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              {language === "en"
                ? "Leading the way in higher education with innovative programs, world-class research, and a commitment to student success."
                : language === "ru"
                  ? "Лидируем в сфере высшего образования с инновационными программами, исследованиями мирового класса и приверженностью успеху студентов."
                  : "Инновациялық бағдарламалар, әлемдік деңгейдегі зерттеулер және студенттердің табысына деген міндеттемелермен жоғары білім саласында көшбасшылық етеміз."}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-blue-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://egov.kz"
                className="text-blue-200 hover:text-white transition-colors flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">egov.kz</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === "en" ? "Quick Links" : language === "ru" ? "Быстрые ссылки" : "Жылдам сілтемелер"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en"
                    ? "Academic Programs"
                    : language === "ru"
                      ? "Академические программы"
                      : "Академиялық бағдарламалар"}
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en" ? "Research" : language === "ru" ? "Исследования" : "Зерттеулер"}
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en" ? "Library" : language === "ru" ? "Библиотека" : "Кітапхана"}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en" ? "Careers" : language === "ru" ? "Карьера" : "Мансап"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === "en"
                ? "Student Resources"
                : language === "ru"
                  ? "Ресурсы для студентов"
                  : "Студенттік ресурстар"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portal" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en" ? "Student Portal" : language === "ru" ? "Портал студента" : "Студенттік портал"}
                </Link>
              </li>
              <li>
                <Link href="/housing" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en" ? "Housing" : language === "ru" ? "Жилье" : "Тұрғын үй"}
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en"
                    ? "Dining Services"
                    : language === "ru"
                      ? "Услуги питания"
                      : "Тамақтану қызметтері"}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en"
                    ? "Student Support"
                    : language === "ru"
                      ? "Поддержка студентов"
                      : "Студенттерді қолдау"}
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-blue-100 hover:text-white transition-colors">
                  {language === "en"
                    ? "Campus Activities"
                    : language === "ru"
                      ? "Кампусные мероприятия"
                      : "Кампус іс-шаралары"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === "en" ? "Contact Us" : language === "ru" ? "Свяжитесь с нами" : "Бізбен байланысыңыз"}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">
                  123 University Avenue
                  <br />
                  Almaty, Kazakhstan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">+7 (727) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">info@educenter.kz</span>
              </div>
            </div>

            {/* Government Portal Link */}
            <div className="border-t border-blue-800 pt-4">
              <h4 className="text-sm font-semibold mb-2 text-blue-200">
                {language === "en"
                  ? "Government Services"
                  : language === "ru"
                    ? "Государственные услуги"
                    : "Мемлекеттік қызметтер"}
              </h4>
              <Link
                href="https://egov.kz"
                className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>egov.kz</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 EduCenter.{" "}
            {language === "en"
              ? "All rights reserved."
              : language === "ru"
                ? "Все права защищены."
                : "Барлық құқықтар қорғалған."}{" "}
            |
            <Link href="/privacy" className="hover:text-white transition-colors ml-1">
              {language === "en"
                ? "Privacy Policy"
                : language === "ru"
                  ? "Политика конфиденциальности"
                  : "Құпиялылық саясаты"}
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white transition-colors ml-1">
              {language === "en" ? "Terms of Service" : language === "ru" ? "Условия обслуживания" : "Қызмет шарттары"}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
