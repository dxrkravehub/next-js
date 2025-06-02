"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ru" | "kz">("kz")
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false)

  // Load saved preferences on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "en" | "ru" | "kz"
    const savedAccessibility = localStorage.getItem("accessibility-mode") === "true"

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedAccessibility) setIsAccessibilityMode(savedAccessibility)
  }, [])

  // Save preferences when they change
  useEffect(() => {
    localStorage.setItem("preferred-language", language)
  }, [language])

  useEffect(() => {
    localStorage.setItem("accessibility-mode", isAccessibilityMode.toString())
  }, [isAccessibilityMode])

  return (
    <div className={`min-h-screen bg-gray-50 ${isAccessibilityMode ? "accessibility-mode" : ""}`}>
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-link">
        {language === "en"
          ? "Skip to main content"
          : language === "ru"
            ? "Перейти к основному содержанию"
            : "Негізгі мазмұнға өту"}
      </a>

      <Header
        language={language}
        setLanguage={setLanguage}
        isAccessibilityMode={isAccessibilityMode}
        setIsAccessibilityMode={setIsAccessibilityMode}
      />
      <main id="main-content">
        <Hero language={language} isAccessibilityMode={isAccessibilityMode} />
        <NewsSection language={language} isAccessibilityMode={isAccessibilityMode} />
      </main>
      <Footer language={language} isAccessibilityMode={isAccessibilityMode} />
    </div>
  )
}
