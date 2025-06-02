"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Search, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [language, setLanguage] = useState<"en" | "ru" | "kz">("kz")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Search query:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <Image src="/logo.png" alt="EduCenter Logo" width={40} height={40} className="h-10 w-auto" />
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "ru" : language === "ru" ? "kz" : "en")}
                className="text-gray-600 hover:text-blue-900"
              >
                {language.toUpperCase()}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Login Card */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-blue-900">
                {language === "en" ? "Sign In" : language === "ru" ? "Вход в систему" : "Жүйеге кіру"}
              </CardTitle>
              <p className="text-gray-600">
                {language === "en"
                  ? "Access your student portal"
                  : language === "ru"
                    ? "Доступ к студенческому порталу"
                    : "Студенттік порталға кіру"}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === "en"
                      ? "Email Address"
                      : language === "ru"
                        ? "Электронная почта"
                        : "Электрондық пошта"}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === "en" ? "Password" : language === "ru" ? "Пароль" : "Құпия сөз"}
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                      placeholder={
                        language === "en"
                          ? "Enter your password"
                          : language === "ru"
                            ? "Введите ваш пароль"
                            : "Құпия сөзіңізді енгізіңіз"
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      {language === "en" ? "Remember me" : language === "ru" ? "Запомнить меня" : "Мені есте сақта"}
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                      {language === "en"
                        ? "Forgot password?"
                        : language === "ru"
                          ? "Забыли пароль?"
                          : "Құпия сөзді ұмыттыңыз ба?"}
                    </Link>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  {language === "en" ? "Sign In" : language === "ru" ? "Войти" : "Кіру"}
                </Button>
              </form>

              {/* Divider */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      {language === "en" ? "Or" : language === "ru" ? "Или" : "Немесе"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Search Section */}
              <div className="mt-6">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en"
                        ? "Find Student/Staff"
                        : language === "ru"
                          ? "Найти студента/сотрудника"
                          : "Студент/қызметкерді табу"}
                    </label>
                    <div className="relative">
                      <input
                        id="search"
                        name="search"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-10"
                        placeholder={
                          language === "en"
                            ? "Enter name or ID"
                            : language === "ru"
                              ? "Введите имя или ID"
                              : "Аты немесе ID енгізіңіз"
                        }
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="absolute inset-y-0 right-0 px-3 bg-orange-500 hover:bg-orange-600 text-white rounded-l-none"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Registration Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {language === "en"
                    ? "Don't have an account? "
                    : language === "ru"
                      ? "Нет аккаунта? "
                      : "Аккаунтыңыз жоқ па? "}
                  <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                    {language === "en" ? "Sign up" : language === "ru" ? "Зарегистрироваться" : "Тіркелу"}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
