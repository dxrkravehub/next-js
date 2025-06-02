"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Microscope, Users, Calendar, ExternalLink } from "lucide-react"

export default function ResearchPage() {
  const [language, setLanguage] = useState<"en" | "ru" | "kz">("kz")
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "en" | "ru" | "kz"
    const savedAccessibility = localStorage.getItem("accessibility-mode") === "true"

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedAccessibility) setIsAccessibilityMode(savedAccessibility)
  }, [])

  const researchProjects = {
    en: [
      {
        id: 1,
        title: "Sustainable Energy Solutions",
        description: "Developing renewable energy technologies for Kazakhstan's future energy independence.",
        field: "Engineering",
        team: "12 researchers",
        status: "Active",
        startDate: "2023",
      },
      {
        id: 2,
        title: "AI in Healthcare",
        description: "Machine learning applications for early disease detection and treatment optimization.",
        field: "Computer Science",
        team: "8 researchers",
        status: "Active",
        startDate: "2024",
      },
      {
        id: 3,
        title: "Cultural Heritage Preservation",
        description: "Digital archiving and preservation of Kazakh cultural artifacts and traditions.",
        field: "Digital Humanities",
        team: "15 researchers",
        status: "Completed",
        startDate: "2022",
      },
    ],
    ru: [
      {
        id: 1,
        title: "Решения устойчивой энергетики",
        description:
          "Разработка технологий возобновляемой энергии для будущей энергетической независимости Казахстана.",
        field: "Инженерия",
        team: "12 исследователей",
        status: "Активный",
        startDate: "2023",
      },
      {
        id: 2,
        title: "ИИ в здравоохранении",
        description: "Применение машинного обучения для раннего выявления заболеваний и оптимизации лечения.",
        field: "Информатика",
        team: "8 исследователей",
        status: "Активный",
        startDate: "2024",
      },
      {
        id: 3,
        title: "Сохранение культурного наследия",
        description: "Цифровая архивация и сохранение казахских культурных артефактов и традиций.",
        field: "Цифровые гуманитарные науки",
        team: "15 исследователей",
        status: "Завершен",
        startDate: "2022",
      },
    ],
    kz: [
      {
        id: 1,
        title: "Тұрақты энергетикалық шешімдер",
        description:
          "Қазақстанның болашақ энергетикалық тәуелсіздігі үшін жаңартылатын энергия технологияларын дамыту.",
        field: "Инженерия",
        team: "12 зерттеуші",
        status: "Белсенді",
        startDate: "2023",
      },
      {
        id: 2,
        title: "Денсаулық сақтаудағы AI",
        description: "Ауруларды ерте анықтау және емдеуді оңтайландыру үшін машиналық оқыту қолданбалары.",
        field: "Информатика",
        team: "8 зерттеуші",
        status: "Белсенді",
        startDate: "2024",
      },
      {
        id: 3,
        title: "Мәдени мұраны сақтау",
        description: "Қазақ мәдени артефактілері мен дәстүрлерін цифрлық архивтеу және сақтау.",
        field: "Цифрлық гуманитарлық ғылымдар",
        team: "15 зерттеуші",
        status: "Аяқталды",
        startDate: "2022",
      },
    ],
  }

  const currentProjects = researchProjects[language]

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
                ? "Research & Innovation"
                : language === "ru"
                  ? "Исследования и инновации"
                  : "Зерттеу және инновация"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Advancing knowledge through cutting-edge research projects that address real-world challenges and contribute to scientific progress."
                : language === "ru"
                  ? "Продвижение знаний через передовые исследовательские проекты, которые решают реальные проблемы и способствуют научному прогрессу."
                  : "Нақты әлемдегі мәселелерді шешетін және ғылыми прогреске үлес қосатын озық зерттеу жобалары арқылы білімді дамыту."}
            </p>
          </div>

          {/* Research Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentProjects.map((project) => (
              <Card key={project.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                      {project.field}
                    </Badge>
                    <Badge
                      variant={
                        project.status === "Active" || project.status === "Белсенді" || project.status === "Активный"
                          ? "default"
                          : "outline"
                      }
                      className={
                        project.status === "Active" || project.status === "Белсенді" || project.status === "Активный"
                          ? "bg-green-100 text-green-700"
                          : ""
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {language === "en" ? "Started" : language === "ru" ? "Начато" : "Басталды"}: {project.startDate}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === "en" ? "View Details" : language === "ru" ? "Подробности" : "Толық ақпарат"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Centers */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <Microscope className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {language === "en"
                  ? "Research Centers"
                  : language === "ru"
                    ? "Исследовательские центры"
                    : "Зерттеу орталықтары"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {language === "en"
                    ? "Innovation Lab"
                    : language === "ru"
                      ? "Лаборатория инноваций"
                      : "Инновация зертханасы"}
                </h3>
                <p className="text-gray-600">
                  {language === "en"
                    ? "State-of-the-art facilities for technology development and prototyping."
                    : language === "ru"
                      ? "Современные объекты для разработки технологий и прототипирования."
                      : "Технология дамыту және прототиптеу үшін заманауи мүмкіндіктер."}
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {language === "en"
                    ? "Data Science Center"
                    : language === "ru"
                      ? "Центр науки о данных"
                      : "Деректер ғылымы орталығы"}
                </h3>
                <p className="text-gray-600">
                  {language === "en"
                    ? "Advanced analytics and machine learning research facility."
                    : language === "ru"
                      ? "Передовая аналитика и исследовательский центр машинного обучения."
                      : "Озық аналитика және машиналық оқыту зерттеу орталығы."}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-blue-900 text-white rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                {language === "en"
                  ? "Join Our Research Community"
                  : language === "ru"
                    ? "Присоединяйтесь к нашему исследовательскому сообществу"
                    : "Біздің зерттеу қауымдастығымызға қосылыңыз"}
              </h2>
              <p className="mb-6">
                {language === "en"
                  ? "Collaborate with leading researchers and contribute to groundbreaking discoveries."
                  : language === "ru"
                    ? "Сотрудничайте с ведущими исследователями и вносите вклад в революционные открытия."
                    : "Жетекші зерттеушілермен ынтымақтасып, революциялық жаңалықтарға үлес қосыңыз."}
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                {language === "en"
                  ? "Contact Research Office"
                  : language === "ru"
                    ? "Связаться с отделом исследований"
                    : "Зерттеу бөлімімен байланысу"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} isAccessibilityMode={isAccessibilityMode} />
    </div>
  )
}
