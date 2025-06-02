"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ru" | "kz">("kz")
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "en" | "ru" | "kz"
    const savedAccessibility = localStorage.getItem("accessibility-mode") === "true"

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedAccessibility) setIsAccessibilityMode(savedAccessibility)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {language === "en" ? "Contact Us" : language === "ru" ? "Свяжитесь с нами" : "Бізбен байланысыңыз"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Get in touch with our team. We're here to help with any questions about our programs, admissions, or services."
                : language === "ru"
                  ? "Свяжитесь с нашей командой. Мы здесь, чтобы помочь с любыми вопросами о наших программах, поступлении или услугах."
                  : "Біздің командамызбен байланысыңыз. Біз бағдарламалар, қабылдау немесе қызметтер туралы кез келген сұрақтарға көмектесуге дайынбыз."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  {language === "en"
                    ? "Send us a Message"
                    : language === "ru"
                      ? "Отправьте нам сообщение"
                      : "Бізге хабарлама жіберіңіз"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en" ? "Full Name" : language === "ru" ? "Полное имя" : "Толық аты"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={
                        language === "en"
                          ? "Enter your full name"
                          : language === "ru"
                            ? "Введите ваше полное имя"
                            : "Толық атыңызды енгізіңіз"
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en"
                        ? "Email Address"
                        : language === "ru"
                          ? "Электронная почта"
                          : "Электрондық пошта"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={
                        language === "en"
                          ? "Enter your email"
                          : language === "ru"
                            ? "Введите ваш email"
                            : "Электрондық поштаңызды енгізіңіз"
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en" ? "Subject" : language === "ru" ? "Тема" : "Тақырып"}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={
                        language === "en" ? "Enter subject" : language === "ru" ? "Введите тему" : "Тақырыпты енгізіңіз"
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en" ? "Message" : language === "ru" ? "Сообщение" : "Хабарлама"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={
                        language === "en"
                          ? "Enter your message"
                          : language === "ru"
                            ? "Введите ваше сообщение"
                            : "Хабарламаңызды енгізіңіз"
                      }
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    {language === "en"
                      ? "Send Message"
                      : language === "ru"
                        ? "Отправить сообщение"
                        : "Хабарлама жіберу"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    {language === "en"
                      ? "Contact Information"
                      : language === "ru"
                        ? "Контактная информация"
                        : "Байланыс ақпараты"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-900 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === "en" ? "Address" : language === "ru" ? "Адрес" : "Мекенжай"}
                      </h3>
                      <p className="text-gray-600">
                        123 University Avenue
                        <br />
                        Almaty, Kazakhstan 050000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-900 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === "en" ? "Phone" : language === "ru" ? "Телефон" : "Телефон"}
                      </h3>
                      <p className="text-gray-600">+7 (727) 123-4567</p>
                      <p className="text-gray-600">+7 (727) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-900 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === "en" ? "Email" : language === "ru" ? "Электронная почта" : "Электрондық пошта"}
                      </h3>
                      <p className="text-gray-600">info@educenter.kz</p>
                      <p className="text-gray-600">admissions@educenter.kz</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-900 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === "en" ? "Office Hours" : language === "ru" ? "Часы работы" : "Жұмыс уақыты"}
                      </h3>
                      <p className="text-gray-600">
                        {language === "en"
                          ? "Monday - Friday: 9:00 AM - 6:00 PM"
                          : language === "ru"
                            ? "Понедельник - Пятница: 9:00 - 18:00"
                            : "Дүйсенбі - Жұма: 9:00 - 18:00"}
                      </p>
                      <p className="text-gray-600">
                        {language === "en"
                          ? "Saturday: 9:00 AM - 2:00 PM"
                          : language === "ru"
                            ? "Суббота: 9:00 - 14:00"
                            : "Сенбі: 9:00 - 14:00"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>
                        {language === "en"
                          ? "Interactive Map"
                          : language === "ru"
                            ? "Интерактивная карта"
                            : "Интерактивті карта"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} isAccessibilityMode={isAccessibilityMode} />
    </div>
  )
}
