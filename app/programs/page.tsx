"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, BookOpen } from "lucide-react"

export default function ProgramsPage() {
  const [language, setLanguage] = useState<"en" | "ru" | "kz">("kz")
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "en" | "ru" | "kz"
    const savedAccessibility = localStorage.getItem("accessibility-mode") === "true"

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedAccessibility) setIsAccessibilityMode(savedAccessibility)
  }, [])

  const programs = {
    en: [
      {
        id: 1,
        title: "Computer Science",
        description:
          "Comprehensive program covering software development, algorithms, and modern computing technologies.",
        duration: "4 years",
        students: "250+",
        level: "Bachelor",
        category: "Technology",
      },
      {
        id: 2,
        title: "Business Administration",
        description: "Strategic business management, entrepreneurship, and leadership development program.",
        duration: "4 years",
        students: "180+",
        level: "Bachelor",
        category: "Business",
      },
      {
        id: 3,
        title: "International Relations",
        description: "Global politics, diplomacy, and international cooperation studies.",
        duration: "4 years",
        students: "120+",
        level: "Bachelor",
        category: "Social Sciences",
      },
    ],
    ru: [
      {
        id: 1,
        title: "Информатика",
        description: "Комплексная программа по разработке ПО, алгоритмам и современным вычислительным технологиям.",
        duration: "4 года",
        students: "250+",
        level: "Бакалавр",
        category: "Технологии",
      },
      {
        id: 2,
        title: "Администрирование бизнеса",
        description: "Стратегическое управление бизнесом, предпринимательство и развитие лидерства.",
        duration: "4 года",
        students: "180+",
        level: "Бакалавр",
        category: "Бизнес",
      },
      {
        id: 3,
        title: "Международные отношения",
        description: "Глобальная политика, дипломатия и изучение международного сотрудничества.",
        duration: "4 года",
        students: "120+",
        level: "Бакалавр",
        category: "Социальные науки",
      },
    ],
    kz: [
      {
        id: 1,
        title: "Информатика",
        description:
          "Бағдарламалық жасақтаманы дамыту, алгоритмдер және заманауи есептеу технологиялары бойынша кешенді бағдарлама.",
        duration: "4 жыл",
        students: "250+",
        level: "Бакалавр",
        category: "Технология",
      },
      {
        id: 2,
        title: "Бизнес әкімшілігі",
        description: "Стратегиялық бизнес басқару, кәсіпкерлік және көшбасшылықты дамыту бағдарламасы.",
        duration: "4 жыл",
        students: "180+",
        level: "Бакалавр",
        category: "Бизнес",
      },
      {
        id: 3,
        title: "Халықаралық қатынастар",
        description: "Жаһандық саясат, дипломатия және халықаралық ынтымақтастық зерттеулері.",
        duration: "4 жыл",
        students: "120+",
        level: "Бакалавр",
        category: "Әлеуметтік ғылымдар",
      },
    ],
  }

  const currentPrograms = programs[language]

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
              {language === "en"
                ? "Academic Programs"
                : language === "ru"
                  ? "Академические программы"
                  : "Академиялық бағдарламалар"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Discover our comprehensive range of undergraduate and graduate programs designed to prepare you for success in your chosen field."
                : language === "ru"
                  ? "Откройте для себя наш широкий спектр программ бакалавриата и магистратуры, разработанных для подготовки к успеху в выбранной области."
                  : "Таңдаған саладағы табысқа дайындауға арналған бакалавриат пен магистратура бағдарламаларының кең ауқымын ашыңыз."}
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPrograms.map((program) => (
              <Card key={program.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                      {program.category}
                    </Badge>
                    <Badge variant="outline" className="border-blue-900 text-blue-900">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>
                        {program.students}{" "}
                        {language === "en" ? "students" : language === "ru" ? "студентов" : "студент"}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    {language === "en" ? "Learn More" : language === "ru" ? "Узнать больше" : "Толығырақ"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <BookOpen className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                {language === "en"
                  ? "Ready to Start Your Journey?"
                  : language === "ru"
                    ? "Готовы начать свой путь?"
                    : "Сапарыңызды бастауға дайынсыз ба?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "en"
                  ? "Contact our admissions team to learn more about our programs and application process."
                  : language === "ru"
                    ? "Свяжитесь с нашей приемной комиссией, чтобы узнать больше о наших программах и процессе подачи заявления."
                    : "Біздің бағдарламалар мен өтінім беру процесі туралы көбірек білу үшін қабылдау тобымызбен байланысыңыз."}
              </p>
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                {language === "en"
                  ? "Contact Admissions"
                  : language === "ru"
                    ? "Связаться с приемной"
                    : "Қабылдаумен байланысу"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} isAccessibilityMode={isAccessibilityMode} />
    </div>
  )
}
