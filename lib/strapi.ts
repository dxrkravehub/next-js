// Strapi API configuration and helper functions

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN

interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiArticle {
  id: number
  attributes: {
    title: string
    excerpt: string
    content?: string
    category: string
    publishedDate: string
    slug: string
    locale: string
    featuredImage?: {
      data?: {
        attributes: {
          url: string
          alternativeText?: string
        }
      }
    }
    createdAt: string
    updatedAt: string
  }
}

export interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content?: string
  category: string
  date: string
  slug: string
  image?: string
  imageAlt?: string
}

// Helper function to make API requests to Strapi
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  }

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Strapi API Error:", error)
    throw error
  }
}

// Transform Strapi article to our NewsArticle format
function transformStrapiArticle(strapiArticle: StrapiArticle): NewsArticle {
  const { attributes } = strapiArticle

  return {
    id: strapiArticle.id,
    title: attributes.title,
    excerpt: attributes.excerpt,
    content: attributes.content,
    category: attributes.category,
    date: attributes.publishedDate,
    slug: attributes.slug,
    image: attributes.featuredImage?.data?.attributes.url
      ? `${STRAPI_URL}${attributes.featuredImage.data.attributes.url}`
      : undefined,
    imageAlt: attributes.featuredImage?.data?.attributes.alternativeText,
  }
}

// Get all news articles with optional filtering
export async function getNewsArticles(
  locale: "en" | "ru" = "en",
  category?: string,
  limit = 10,
): Promise<NewsArticle[]> {
  try {
    let endpoint = `/news-articles?locale=${locale}&populate=featuredImage&sort=publishedDate:desc&pagination[limit]=${limit}`

    if (category && category !== "latest") {
      endpoint += `&filters[category][$eq]=${category}`
    }

    const response: StrapiResponse<StrapiArticle[]> = await fetchAPI(endpoint)

    return response.data.map(transformStrapiArticle)
  } catch (error) {
    console.error("Error fetching news articles:", error)
    // Return fallback data if Strapi is not available
    return getFallbackNewsData(locale, category)
  }
}

// Get a single news article by slug
export async function getNewsArticle(slug: string, locale: "en" | "ru" = "en"): Promise<NewsArticle | null> {
  try {
    const endpoint = `/news-articles?locale=${locale}&populate=featuredImage&filters[slug][$eq]=${slug}`
    const response: StrapiResponse<StrapiArticle[]> = await fetchAPI(endpoint)

    if (response.data.length === 0) {
      return null
    }

    return transformStrapiArticle(response.data[0])
  } catch (error) {
    console.error("Error fetching news article:", error)
    return null
  }
}

// Get articles by category
export async function getArticlesByCategory(
  category: string,
  locale: "en" | "ru" = "en",
  limit = 6,
): Promise<NewsArticle[]> {
  return getNewsArticles(locale, category, limit)
}

// Fallback data when Strapi is not available (for development/demo)
function getFallbackNewsData(locale: "en" | "ru", category?: string): NewsArticle[] {
  const fallbackData = {
    en: {
      latest: [
        {
          id: 1,
          title: "New Research Center Opens for Sustainable Technology",
          excerpt:
            "Our university inaugurates a state-of-the-art research facility dedicated to developing sustainable technologies for the future.",
          date: "2024-01-15",
          category: "Research",
          slug: "new-research-center-sustainable-technology",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "International Student Exchange Program Expands",
          excerpt:
            "We're excited to announce partnerships with 15 new universities across Europe and Asia for our exchange program.",
          date: "2024-01-12",
          category: "International",
          slug: "international-exchange-program-expands",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          title: "Alumni Achievement: Nobel Prize Winner",
          excerpt:
            "Congratulations to Dr. Sarah Chen, Class of 2010, for receiving the Nobel Prize in Chemistry for her groundbreaking research.",
          date: "2024-01-10",
          category: "Alumni",
          slug: "alumni-nobel-prize-winner",
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
          slug: "annual-science-fair-2024",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 5,
          title: "Guest Lecture: Future of AI in Education",
          excerpt:
            "Renowned AI researcher Dr. Michael Torres will discuss the transformative potential of artificial intelligence in education.",
          date: "2024-02-15",
          category: "Lecture",
          slug: "guest-lecture-ai-education",
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
          slug: "quantum-computing-breakthrough",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 7,
          title: "Medical School Develops New Treatment Protocol",
          excerpt: "Innovative treatment approach for rare diseases shows promising results in clinical trials.",
          date: "2024-01-05",
          category: "Medical",
          slug: "new-treatment-protocol",
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
          slug: "novyj-issledovatelskij-centr",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "Расширение международной программы обмена студентами",
          excerpt:
            "Мы рады объявить о партнерстве с 15 новыми университетами Европы и Азии для нашей программы обмена.",
          date: "2024-01-12",
          category: "Международное",
          slug: "rasshirenie-programmy-obmena",
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
          slug: "nauchnaya-yarmarka-2024",
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
          slug: "proryv-kvantovye-vychisleniya",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  }

  const data = fallbackData[locale] || fallbackData.en

  if (category && category !== "latest") {
    return data[category as keyof typeof data] || []
  }

  return data.latest
}
