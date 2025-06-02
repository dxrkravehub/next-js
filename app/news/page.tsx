"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsSection } from "@/components/news-section"

export default function NewsPage() {
  const [language, setLanguage] = useState<"en" | "ru" | "kz">("kz")
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "en" | "ru" | "kz"
    const savedAccessibility = localStorage.getItem("accessibility-mode") === "true"

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedAccessibility) setIsAccessibilityMode(savedAccessibility)
  }, [])

  return (
    <div className={`min-h-screen bg-gray-50 ${isAccessibilityMode ? "accessibility-mode" : ""}`}>
      <Header
        language={language}
        setLanguage={setLanguage}
        isAccessibilityMode={isAccessibilityMode}
        setIsAccessibilityMode={setIsAccessibilityMode}
      />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {language === "en"
                ? "News & Updates"
                : language === "ru"
                  ? "Новости и обновления"
                  : "Жаңалықтар мен жаңартулар"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Stay informed about the latest developments, achievements, and events at our institution."
                : language === "ru"
                  ? "Будьте в курсе последних событий, достижений и мероприятий нашего учреждения."
                  : "Біздің мекемедегі соңғы дамулар, жетістіктер мен іс-шаралар туралы хабардар болыңыз."}
            </p>
          </div>
        </div>

        <NewsSection language={language} isAccessibilityMode={isAccessibilityMode} />
      </main>

      <Footer language={language} isAccessibilityMode={isAccessibilityMode} />
    </div>
  )
}
