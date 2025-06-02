"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Loader2 } from "lucide-react"

interface NewsSectionProps {
  language?: "en" | "ru" | "kz"
  isAccessibilityMode?: boolean
}

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export function NewsSection({ language = "kz", isAccessibilityMode = false }: NewsSectionProps) {
  const [activeTab, setActiveTab] = useState("latest")
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(false)

  const tabs = [
    {
      id: "latest",
      label: language === "en" ? "Latest News" : language === "ru" ? "Последние новости" : "Соңғы жаңалықтар",
    },
    {
      id: "events",
      label: language === "en" ? "Events" : language === "ru" ? "События" : "Іс-шаралар",
    },
    {
      id: "research",
      label: language === "en" ? "Research" : language === "ru" ? "Исследования" : "Зерттеулер",
    },
  ]

  // Mock data for demonstration
  const mockData = {
    en: {
      latest: [
        {
          id: 1,
          title: "New Research Center Opens for Sustainable Technology",
          excerpt:
            "Our university inaugurates a state-of-the-art research facility dedicated to developing sustainable technologies for the future.",
          date: "2024-01-15",
          category: "Research",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "International Student Exchange Program Expands",
          excerpt:
            "We're excited to announce partnerships with 15 new universities across Europe and Asia for our exchange program.",
          date: "2024-01-12",
          category: "International",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          title: "Alumni Achievement: Nobel Prize Winner",
          excerpt:
            "Congratulations to Dr. Sarah Chen, Class of 2010, for receiving the Nobel Prize in Chemistry for her groundbreaking research.",
          date: "2024-01-10",
          category: "Alumni",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      events: [
        {
          id: 4,
          title: "Annual Science Fair 2024",
          excerpt: "Join us for our biggest science fair featuring student innovations and research presentations.",
          date: "2024-02-20",
          category: "Events",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 5,
          title: "Guest Lecture: Future of AI in Education",
          excerpt:
            "Renowned AI researcher Dr. Michael Torres will discuss the transformative potential of artificial intelligence in education.",
          date: "2024-02-15",
          category: "Lecture",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      research: [
        {
          id: 6,
          title: "Breakthrough in Quantum Computing Research",
          excerpt:
            "Our physics department achieves a major milestone in quantum computing with a new algorithm for error correction.",
          date: "2024-01-08",
          category: "Research",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 7,
          title: "Medical School Develops New Treatment Protocol",
          excerpt: "Innovative treatment approach for rare diseases shows promising results in clinical trials.",
          date: "2024-01-05",
          category: "Medical",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    ru: {
      latest: [
        {
          id: 1,
          title: "Открытие нового исследовательского центра устойчивых технологий",
          excerpt:
            "Наш университет открывает современный исследовательский центр, посвященный разработке устойчивых технологий будущего.",
          date: "2024-01-15",
          category: "Исследования",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "Расширение международной программы обмена студентами",
          excerpt:
            "Мы рады объявить о партнерстве с 15 новыми университетами Европы и Азии для нашей программы обмена.",
          date: "2024-01-12",
          category: "Международное",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      events: [
        {
          id: 4,
          title: "Ежегодная научная ярмарка 2024",
          excerpt:
            "Присоединяйтесь к нашей крупнейшей научной ярмарке с инновациями студентов и исследовательскими презентациями.",
          date: "2024-02-20",
          category: "События",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      research: [
        {
          id: 6,
          title: "Прорыв в исследованиях квантовых вычислений",
          excerpt:
            "Наш физический факультет достигает важной вехи в квантовых вычислениях с новым алгоритмом коррекции ошибок.",
          date: "2024-01-08",
          category: "Исследования",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    kz: {
      latest: [
        {
          id: 1,
          title: "Тұрақты технологиялар үшін жаңа зерттеу орталығы ашылды",
          excerpt:
            "Біздің университет болашақтың тұрақты технологияларын дамытуға арналған заманауи зерттеу орталығын ашады.",
          date: "2024-01-15",
          category: "Зерттеу",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "Халықаралық студенттер алмасу бағдарламасы кеңейтілді",
          excerpt:
            "Біз алмасу бағдарламамыз үшін Еуропа мен Азияның 15 жаңа университетімен серіктестік туралы хабарлаймыз.",
          date: "2024-01-12",
          category: "Халықаралық",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      events: [
        {
          id: 4,
          title: "2024 жылғы жыл сайынғы ғылыми жәрмеңке",
          excerpt:
            "Студенттердің инновациялары мен зерттеу презентацияларын қамтитын ең үлкен ғылыми жәрмеңкеге қосылыңыз.",
          date: "2024-02-20",
          category: "Іс-шаралар",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      research: [
        {
          id: 6,
          title: "Кванттық есептеу зерттеулеріндегі жетістік",
          excerpt:
            "Біздің физика факультеті қателерді түзету үшін жаңа алгоритммен кванттық есептеуде маңызды жетістікке жетті.",
          date: "2024-01-08",
          category: "Зерттеу",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  }

  useEffect(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      const data = mockData[language]
      setArticles(data[activeTab as keyof typeof data] || [])
      setLoading(false)
    }, 500)
  }, [activeTab, language])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "en" ? "en-US" : language === "ru" ? "ru-RU" : "kk-KZ")
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isAccessibilityMode ? "accessibility-mode" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {language === "en"
              ? "News & Updates"
              : language === "ru"
                ? "Новости и обновления"
                : "Жаңалықтар мен жаңартулар"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Stay informed about the latest developments, achievements, and events at our institution."
              : language === "ru"
                ? "Будьте в курсе последних событий, достижений и мероприятий нашего учреждения."
                : "Біздің мекемедегі соңғы дамулар, жетістіктер мен іс-шаралар туралы хабардар болыңыз."}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === tab.id ? "bg-blue-900 text-white shadow-sm" : "text-gray-600 hover:text-blue-900"
                }`}
                onClick={() => setActiveTab(tab.id)}
                disabled={loading}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-900" />
            <span className="ml-2 text-gray-600">
              {language === "en"
                ? "Loading articles..."
                : language === "ru"
                  ? "Загрузка статей..."
                  : "Мақалалар жүктелуде..."}
            </span>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article) => (
                <Card key={article.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-sky-100 text-sky-700 hover:bg-sky-200">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-blue-900 leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto"
                    >
                      {language === "en" ? "Read More" : language === "ru" ? "Читать далее" : "Толығырақ оқу"}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Button */}
            {articles.length > 0 && (
              <div className="text-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8"
                >
                  {language === "en"
                    ? "View All News"
                    : language === "ru"
                      ? "Посмотреть все новости"
                      : "Барлық жаңалықтарды көру"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
