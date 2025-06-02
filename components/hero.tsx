import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  language?: "en" | "ru" | "kz"
  isAccessibilityMode?: boolean
}

export function Hero({ language = "kz", isAccessibilityMode = false }: HeroProps) {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${isAccessibilityMode ? "accessibility-mode" : ""}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            {language === "en" ? "Excellence in" : language === "ru" ? "Превосходство в" : "Үздіктік"}
            <span className="block text-sky-400">
              {language === "en" ? "Higher Education" : language === "ru" ? "Высшем образовании" : "Жоғары білімде"}
            </span>
          </h1>

          {/* High School Image */}
          <div className="my-12 flex justify-center">
            <div className="relative max-w-4xl w-full">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt={
                  language === "en"
                    ? "Modern university campus with students"
                    : language === "ru"
                      ? "Современный университетский кампус со студентами"
                      : "Студенттермен заманауи университет кампусы"
                }
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Empowering minds, shaping futures. Join our community of scholars and innovators dedicated to advancing knowledge and creating positive impact in the world."
              : language === "ru"
                ? "Расширяем возможности разума, формируем будущее. Присоединяйтесь к нашему сообществу ученых и новаторов, стремящихся к развитию знаний и созданию позитивного влияния в мире."
                : "Ақыл-ойды дамыту, болашақты қалыптастыру. Білімді дамытуға және әлемде оң әсер етуге арналған ғалымдар мен жаңашылдар қауымдастығына қосылыңыз."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              {language === "en"
                ? "Explore Programs"
                : language === "ru"
                  ? "Изучить программы"
                  : "Бағдарламаларды зерттеу"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3"
            >
              {language === "en" ? "Schedule a Visit" : language === "ru" ? "Запланировать визит" : "Сапарды жоспарлау"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
