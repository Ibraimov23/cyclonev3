"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Send, User, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")

    // Имитация отправки формы на сервер
    setTimeout(() => {
      // В реальном приложении здесь был бы запрос к API
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Сбрасываем форму
      setFormData({ name: "", email: "", phone: "", message: "" })
      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 5000)
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <motion.div
        className="bg-gradient-to-r from-premium-50 to-premium-100 rounded-xl p-8 shadow-premium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 gold-accent pb-2 tracking-tight">
          <Briefcase className="h-5 w-5 text-cyclone" />
          <span>Для инвесторов и партнеров</span>
        </h3>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-premium-700 mb-1">
                Ваше имя
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-premium-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-premium-200 rounded-lg shadow-sm focus:ring-cyclone focus:border-cyclone bg-white"
                  placeholder="Иван Иванов"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-premium-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-premium-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-premium-200 rounded-lg shadow-sm focus:ring-cyclone focus:border-cyclone bg-white"
                  placeholder="example@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-premium-700 mb-1">
                Телефон
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-premium-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="block w-full pl-10 pr-3 py-3 border border-premium-200 rounded-lg shadow-sm focus:ring-cyclone focus:border-cyclone bg-white"
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-premium-700 mb-1">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                required
                className="block w-full px-3 py-3 border border-premium-200 rounded-lg shadow-sm focus:ring-cyclone focus:border-cyclone bg-white"
                placeholder="Расскажите о ваших интересах и возможностях сотрудничества..."
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-gradient-to-r from-cyclone to-cyclone-light hover:shadow-cyclone focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyclone transition-all duration-300 ${
                formStatus === "sending" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {formStatus === "sending" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Отправить сообщение
                </>
              )}
            </button>

            {formStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            {formStatus === "error" && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с нами по email:
                inursultan80@gmail.com
              </div>
            )}
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white rounded-xl border border-premium-200 p-8 shadow-premium">
          <h3 className="text-xl font-semibold mb-6 gold-accent pb-2 tracking-tight">Контактная информация</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-premium-50 rounded-lg transition-all duration-300 hover:shadow-sm">
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="h-5 w-5 text-cyclone" />
              </div>
              <div>
                <p className="font-medium text-premium-800">Email</p>
                <a href="mailto:inursultan80@gmail.com" className="text-cyclone hover:underline">
                  inursultan80@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-premium-50 rounded-lg transition-all duration-300 hover:shadow-sm">
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="h-5 w-5 text-cyclone" />
              </div>
              <div>
                <p className="font-medium text-premium-800">Телефон</p>
                <a href="tel:+996551636369" className="text-cyclone hover:underline">
                  +996 551 636 369
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-premium-200">
            <h4 className="font-semibold mb-4 text-premium-800">Наши партнеры</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-premium-50 px-4 py-2 rounded-lg border border-premium-100 shadow-sm">
                <p className="font-medium text-premium-700">Рейна-Кенч</p>
              </div>
              <div className="bg-premium-50 px-4 py-2 rounded-lg border border-premium-100 shadow-sm">
                <p className="font-medium text-premium-700">TSI College</p>
              </div>
              <div className="bg-premium-50 px-4 py-2 rounded-lg border border-premium-100 shadow-sm">
                <p className="font-medium text-premium-700">AgroTech Hub</p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl shadow-premium">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyclone/10 to-cyclone/5 opacity-60"></div>
              <img
                src="/images/team-cyclone.png"
                alt="Команда Cyclone"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-premium-900/80 to-transparent p-4">
                <p className="text-white font-medium">Команда Cyclone</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
