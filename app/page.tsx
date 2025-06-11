"use client"
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { motion, useScroll, useSpring } from "framer-motion"
import type React from "react"

import {
  CheckCircle,
  ChevronRight,
  Download,
  BarChart3,
  LineChart,
  PieChart,
  Users,
  Award,
  TrendingUp,
  Mail,
  ArrowUpRight,
  DollarSign,
  Rocket,
  Target,
  Briefcase,
  BarChart,
  PieChartIcon as PieChart3,
  Send,
  User,
  Phone,
} from "lucide-react"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackgroundCircles from "@/components/background-circles"
import ZigZagDivider from "@/components/zig-zag-divider"
import AnimatedSection from "@/components/animated-section"
import ScrollProgress from "@/components/ui/scroll-progress"
import RevealText from "@/components/ui/reveal-text"
import ParallaxSection from "@/components/ui/parallax-section"
import AnimatedCounter from "@/components/ui/animated-counter"
import AnimatedButton from "@/components/ui/animated-button"

const advantages = [
  {
    titleKey: "advantages.items.1.title",
    descriptionKey: "advantages.items.1.description",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    titleKey: "advantages.items.2.title",
    descriptionKey: "advantages.items.2.description",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    titleKey: "advantages.items.3.title",
    descriptionKey: "advantages.items.3.description",
    icon: <Award className="h-6 w-6" />,
  },
  {
    titleKey: "advantages.items.4.title",
    descriptionKey: "advantages.items.4.description",
    icon: <LineChart className="h-6 w-6" />,
  },
]

export default function Home() {
  const { t, i18n } = useTranslation();


  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 5000)
    }, 1500)
  }

  return (
    <>
      {isMounted && <BackgroundCircles />}
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <section id="main" className="relative bg-gradient-to-r from-black to-cyclone-dark overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 brightness-50 filter"
            style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
          ></div>
          <div className="container relative mx-auto px-4 py-24 md:py-32 md:px-8 lg:px-16 xl:px-32">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-cyclone text-white">
                    {t('autho.Innovative_startup')}
                  </span>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {t('autho.title')}
                  </h1>
                </motion.div>
                <motion.p
                  className="text-base text-white/90 sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t('autho.description')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a href="https://github.com/Ibraimov23/cyclone.io/raw/master/public/downloads/cyclone.apk" download>
                    <AnimatedButton variant="cyclone" className="px-6 py-3 text-base flex items-center gap-2">
                      <Download className="h-6 w-6" />
                      <span>{t('autho.buttons.download')}</span>
                    </AnimatedButton>
                  </a>
                  <a href="#demo">
                    <AnimatedButton variant="cyclone-outline" className="px-6 py-3 text-base flex items-center gap-2">
                      <ChevronRight className="h-6 w-6" />
                      <span>{t('autho.buttons.demo')}</span>
                    </AnimatedButton>
                  </a>
                </motion.div>
                <motion.div
                  className="grid grid-cols-2 gap-4 mt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <AnimatedCounter end={85} suffix="%" className="text-2xl font-bold text-white" />
                    <p className="text-sm text-white/80">{t('autho.metrics.timeSaving')}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <AnimatedCounter end={30} suffix="%" className="text-2xl font-bold text-white" />
                    <p className="text-sm text-white/80">{t('autho.metrics.productivityGrowth')}</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden md:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-cyclone/20 rounded-full blur-xl"></div>
                  <img
                    // src="/images/application-img.png"
                    src="/images/application_2.png"
                    alt={t('autho.imageAlt')}
                    className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/10"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl z-20">
                    <PieChart className="h-12 w-12 text-cyclone" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm py-6">
            <div className="container mx-auto px-4 md:px-8">
              <p className="text-center text-white/60 text-sm mb-4">
                {t('partners.title')}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <p className="text-white font-bold">{t('partners.reinaKench')}</p>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <p className="text-white font-bold">{t('partners.tsiCollege')}</p>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <p className="text-white font-bold">{t('partners.agroTechHub')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AnimatedSection id="about" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-cyclone/10 text-cyclone">
                  {t('about.label')}
                </span>
                <RevealText
                  text={t('about.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="order-2 md:order-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <p className="text-base sm:text-lg leading-relaxed mb-6">
                    {t('about.description1')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {t('about.description2')}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-cyclone/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-cyclone" />
                      </div>
                      <div>
                        <p className="font-medium">{t('about.team.label')}</p>
                        <p className="text-sm text-gray-600">{t('about.team.count')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-cyclone/10 flex items-center justify-center">
                        <Award className="h-5 w-5 text-cyclone" />
                      </div>
                      <div>
                        <p className="font-medium">{t('about.stage.label')}</p>
                        <p className="text-sm text-gray-600">{t('about.stage.status')}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="order-1 md:order-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-cyclone/5 rounded-2xl blur-md"></div>
                    <img
                      src="/images/team-cyclone.png"
                      alt={t('about.imageAlt')}
                      className="relative z-10 rounded-xl shadow-lg object-cover w-full h-auto"
                    />
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-cyclone flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-sm font-medium">{t('about.approval')}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="rounded-lg bg-gradient-to-br from-cyclone/5 to-cyclone/10 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter end={100} suffix="%" className="text-3xl font-bold text-cyclone md:text-4xl" />
                  <p className="mt-2 text-sm font-medium">{t('metrics.automation')}</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-cyclone/5 to-cyclone/10 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter
                    end={85}
                    suffix="%"
                    delay={0.2}
                    className="text-3xl font-bold text-cyclone md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium">{t('metrics.timeSaving')}</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-cyclone/5 to-cyclone/10 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter
                    end={95}
                    suffix="%"
                    delay={0.4}
                    className="text-3xl font-bold text-cyclone md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium">{t('metrics.dataAccuracy')}</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-cyclone/5 to-cyclone/10 p-6 text-center shadow-md hover-glow">
                  <AnimatedCounter
                    end={30}
                    suffix="%"
                    delay={0.6}
                    className="text-3xl font-bold text-cyclone md:text-4xl"
                  />
                  <p className="mt-2 text-sm font-medium">{t('metrics.productivityGrowth')}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <ZigZagDivider />
        <AnimatedSection id="problem" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-600">
                  {t('problem.label')}
                </span>
                <RevealText
                  text={t('problem.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <ParallaxSection speed={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src="/images/problem-img.png"
                        alt={t('problem.imageAlt')}
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </motion.div>
                  </ParallaxSection>
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                    <h3 className="text-lg font-semibold text-red-700 mb-2">{t('problem.keyIssuesTitle')}</h3>
                    <p className="text-base sm:text-lg">{t('problem.keyIssuesDesc')}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold">1</span>
                      </div>
                      <p>{t('problem.issue1')}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold">2</span>
                      </div>
                      <p>{t('problem.issue2')}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold">3</span>
                      </div>
                      <p>{t('problem.issue3')}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold">4</span>
                      </div>
                      <p>{t('problem.issue4')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <ZigZagDivider />
        <AnimatedSection id="our_solve" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
                  {t('ourSolve.label')}
                </span>
                <RevealText
                  text={t('ourSolve.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('ourSolve.description')}
              </motion.p>
              <div id="demo" className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-cyclone" />
                      {t('ourSolve.chart.titleWeight')}
                    </h3>
                    <div className="h-64 flex items-end justify-around">
                      {[250, 280, 320, 370, 420].map((value, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="text-sm mb-2">{value} кг</div>
                          <div
                            className="w-12 bg-gradient-to-t from-cyclone to-cyclone-light rounded-t-md transition-all duration-1000"
                            style={{
                              height: `${(value / 420) * 80}%`,
                              opacity: isMounted ? 1 : 0,
                              transform: isMounted ? "translateY(0)" : "translateY(20px)",
                            }}
                          ></div>
                          <div className="text-sm mt-2">{t('ourSolve.chart.months')[index]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-cyclone" />
                      {t('ourSolve.chart.compareRes')}
                    </h3>
                    <div className="flex items-center justify-center h-64">
                      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                        <div className="bg-gray-100 rounded-lg p-4 text-center">
                          <div className="text-4xl font-bold text-gray-500">40%</div>
                          <div className="mt-2">{t('ourSolve.chart.beforeImplement')}</div>
                          <div className="mt-4 h-2 w-full bg-gray-200 rounded-full">
                            <div
                              className="h-2 bg-gray-400 rounded-full transition-all duration-1000"
                              style={{
                                width: isMounted ? "40%" : "0%",
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="bg-cyclone/10 rounded-lg p-4 text-center">
                          <div className="text-4xl font-bold text-cyclone">85%</div>
                          <div className="mt-2">{t('ourSolve.chart.afterImplement')}</div>
                          <div className="mt-4 h-2 w-full bg-cyclone/20 rounded-full">
                            <div
                              className="h-2 bg-cyclone rounded-full transition-all duration-1000"
                              style={{
                                width: isMounted ? "85%" : "0%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-cyclone" />
                    {t('advantages.title')}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <h4 className="font-medium">{t('metrics.timeSaving')}</h4>
                      </div>
                      <p className="text-sm">{t('advantages.desc1')}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-medium">{t('metrics.dataAccuracy')}</h4>
                      </div>
                      <p className="text-sm">{t('advantages.desc2')}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-purple-600" />
                        </div>
                        <h4 className="font-medium">{t('metrics.productivityGrowth')}</h4>
                      </div>
                      <p className="text-sm">{t('advantages.desc3')}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-amber-600" />
                        </div>
                        <h4 className="font-medium">{t('metrics.automation')}</h4>
                      </div>
                      <p className="text-sm">{t('advantages.desc4')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <ZigZagDivider />
        <AnimatedSection id="how_work" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
                  {t('howWork.label')}
                </span>
                <RevealText
                  text={t('howWork.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyclone/20 hidden md:block"></div>
                <div className="grid gap-8">
                  {[
                    {
                      title: t('howWork.features.1.title'),
                      description: t('howWork.features.1.description'),
                      icon: <BarChart3 className="h-6 w-6" />,
                    },
                    {
                      title: t('howWork.features.2.title'),
                      description: t('howWork.features.2.description'),
                      icon: <LineChart className="h-6 w-6" />,
                    },
                    {
                      title: t('howWork.features.3.title'),
                      description: t('howWork.features.3.description'),
                      icon: <PieChart className="h-6 w-6" />,
                    },
                    {
                      title: t('howWork.features.4.title'),
                      description: t('howWork.features.4.description'),
                      icon: <TrendingUp className="h-6 w-6" />,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col md:flex-row gap-4 md:items-start relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="md:hidden h-10 w-10 rounded-full bg-cyclone flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="hidden md:flex h-10 w-10 rounded-full bg-cyclone flex-shrink-0 items-center justify-center text-white font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 md:ml-6 w-full">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-cyclone/10 flex items-center justify-center text-cyclone">
                            {feature.icon}
                          </div>
                          <h3 className="text-lg font-semibold sm:text-xl">{feature.title}</h3>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-cyclone/5 to-cyclone/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('howWork.cta.heading')}</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  {t('howWork.cta.description')}
                </p>
                <a href="https://github.com/Ibraimov23/cyclone.io/raw/master/public/downloads/cyclone.apk" download>
                  <AnimatedButton variant="cyclone" className="px-6 py-3 text-base flex items-center gap-2 mx-auto">
                    <Download className="h-6 w-6" />
                    <span>{t('howWork.cta.download')}</span>
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <ZigZagDivider />
        <AnimatedSection id="our_pluses" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-cyclone/10 text-cyclone">
                  {t('ourPluses.label')}
                </span>
                <RevealText
                  text={t('ourPluses.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-cyclone/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-cyclone/10 flex items-center justify-center text-cyclone mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(advantage.titleKey)}</h3>
                    <p className="text-gray-700">{t(advantage.descriptionKey)}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden relative rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg">
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyclone/5 blur-xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-cyclone/5 blur-xl"></div>
                <div className="flex flex-col md:flex-row gap-8 p-8 relative z-10">
                  <div className="md:w-1/2">
                    <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-cyclone/10 text-cyclone mb-4">
                      {t('investment.opportunityLabel')}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('investment.title')}</h3>
                    <p className="text-gray-700 mb-6 border-l-4 border-cyclone pl-4 py-2 bg-white/50 rounded-r-lg">
                      {t('investment.description')}
                    </p>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-cyclone" />
                        {t('investment.card.advantagesTitle')}
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <span className="font-medium">{t('investment.card.item1.title')}</span>
                            <p className="text-sm text-gray-600">{t('investment.card.item1.desc')}</p>
                          </div>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <span className="font-medium">{t('investment.card.item2.title')}</span>
                            <p className="text-sm text-gray-600">{t('investment.card.item2.desc')}</p>
                          </div>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <span className="font-medium">{t('investment.card.item3.title')}</span>
                            <p className="text-sm text-gray-600">{t('investment.card.item3.desc')}</p>
                          </div>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <span className="font-medium">{t('investment.card.item4.title')}</span>
                            <p className="text-sm text-gray-600">{t('investment.card.item4.desc')}</p>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <a href="#contact">
                          <AnimatedButton variant="cyclone" className="px-6 py-3 text-base flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            <span>{t('investment.investNow')}</span>
                          </AnimatedButton>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyclone/5 to-cyclone/10 rounded-xl transform rotate-3 scale-105"></div>
                    <img
                      src="/images/benefit-img.png"
                      alt={t('investment.imageAlt')}
                      className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg z-20">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-cyclone flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-sm font-medium">{t('investment.roi')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <ZigZagDivider />
        <AnimatedSection id="zachem" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-amber-100 text-amber-600 ">
                  {t('importance.label')}
                </span>
                <RevealText
                  text={t('importance.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
                    <h3 className="text-lg font-semibold text-amber-700 mb-2">{t('importance.needTitle')}</h3>
                    <p className="text-base sm:text-lg">{t('importance.need')}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-amber-600 font-bold">1</span>
                      </div>
                      <p>{t('importance.benefit1')}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-amber-600 font-bold">2</span>
                      </div>
                      <p>{t('importance.benefit2')}</p>
 Ascendancy
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-amber-600 font-bold">3</span>
                      </div>
                      <p>{t('importance.benefit3')}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-amber-600 font-bold">4</span>
                      </div>
                      <p>{t('importance.benefit4')}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <ParallaxSection speed={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src="/images/auto-img.png"
                        alt={t('importance.imageAlt')}
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </motion.div>
                  </ParallaxSection>
                </motion.div>
              </div>
              <motion.div
                className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <p className="text-base sm:text-lg md:text-xl">{t('importance.conclusion')}</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
        <ZigZagDivider />
        <AnimatedSection id="inovation" className="bg-white py-16 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-600">
                  {t('innovation.label')}
                </span>
                <RevealText
                  text={t('innovation.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('innovation.ml')}</h3>
                  <p className="text-gray-700">{t('innovation.mlDesc')}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('innovation.cloud')}</h3>
                  <p className="text-gray-700">{t('innovation.cloudDesc')}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('innovation.analytics')}</h3>
                  <p className="text-gray-700">{t('innovation.analyticsDesc')}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
                <div className="md:w-1/2">
                  <ParallaxSection speed={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src="/images/application-img.png"
                        alt={t('innovation.appAlt')}
                        className="h-auto w-full rounded-lg object-cover shadow-lg"
                      />
                    </motion.div>
                  </ParallaxSection>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('innovation.digital')}</h3>
                  <p className="text-gray-700 mb-4">{t('innovation.digitalDesc1')}</p>
                  <p className="text-gray-700">{t('innovation.digitalDesc2')}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a href="https://github.com/Ibraimov23/cyclone.io/raw/master/public/downloads/cyclone.apk" download>
                      <AnimatedButton variant="cyclone" className="px-6 py-3 text-base flex items-center gap-2">
                        <Download className="h-6 w-6" />
                        <span>{t('innovation.download')}</span>
                      </AnimatedButton>
                    </a>
                    <a href="#contact">
                      <AnimatedButton variant="cyclone-outline" className="px-6 py-3 text-base flex items-center gap-2">
                        <Mail className="h-6 w-6" />
                        <span>{t('innovation.contact')}</span>
                      </AnimatedButton>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-900 to-cyclone-dark text-white rounded-xl p-8 mt-8 overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-xl"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyclone/20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-3">
                      {t('investment.opportunityLabel')}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold">{t('investment.title')}</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-white/40 to-white/10 mx-auto mt-4"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-10px] hover:bg-white/15">
                      <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <DollarSign className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{t('investment.marketVolume')}</h4>
                      <p className="text-white/80">{t('investment.marketVolumeDesc')}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-10px] hover:bg-white/15">
                      <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{t('investment.annualGrowth')}</h4>
                      <p className="text-white/80">{t('investment.annualGrowthDesc')}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-10px] hover:bg-white/15">
                      <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <Target className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{t('investment.paybackPeriod')}</h4>
                      <p className="text-white/80">{t('investment.paybackPeriodDesc')}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    <div className="md:w-2/3 bg-white/5 backdrop-blur-sm rounded-xl p-6">
                      
                      <div className="flex flex-wrap gap-4 mt-6">
                        <a href="#contact">
                          <AnimatedButton
                            variant="primary"
                            className="bg-cyclone text-white hover:bg-cyclone-light px-6 py-3 font-bold flex items-center gap-2"
                          >
                            <Briefcase className="h-5 w-5" />
                            <span>{t('investment.investNow')}</span>
                          </AnimatedButton>
                        </a>
                        <a href="https://www.transfernow.net/dl/20250522Q0bAR5vN" target="_blank" rel="noreferrer">
                          <AnimatedButton
                            variant="outline"
                            className="border-white text-white hover:bg-white/10 px-6 py-3 font-medium flex items-center gap-2"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                            <span>{t('investment.downloadPresentation')}</span>
                          </AnimatedButton>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/3 bg-white/5 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-white" />
                        {t('investment.financialMetrics')}
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white/70">{t('investment.financial.roi')}</span>
                            <span className="text-sm font-medium">{t('investment.financial.roiValue')}</span>
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full">
                            <div
                              className="h-2 bg-gradient-to-r from-cyclone to-cyclone-light rounded-full"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white/70">{t('investment.financial.userGrowth')}</span>
                            <span className="text-sm font-medium">{t('investment.financial.userGrowthValue')}</span>
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full">
                            <div
                              className="h-2 bg-gradient-to-r from-cyclone to-cyclone-light rounded-full"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white/70">{t('investment.financial.marketShare')}</span>
                            <span className="text-sm font-medium">{t('investment.financial.marketShareValue')}</span>
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full">
                            <div
                              className="h-2 bg-gradient-to-r from-cyclone to-cyclone-light rounded-full"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <PieChart3 className="h-5 w-5 text-white" />
                          <h5 className="font-medium">{t('investment.financial.investmentDistribution')}</h5>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-white/70">{t('investment.financial.distribution.development')}</span>
                            <span>{t('investment.financial.distribution.developmentValue')}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">{t('investment.financial.distribution.marketing')}</span>
                            <span>{t('investment.financial.distribution.marketingValue')}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">{t('investment.financial.distribution.operations')}</span>
                            <span>{t('investment.financial.distribution.operationsValue')}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-white/70">{t('investment.financial.distribution.reserve')}</span>
                            <span>{t('investment.financial.distribution.reserveValue')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection id="contact" className="bg-white py-16 pb-24 overflow-hidden" delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col gap-12">
              <div className="text-center mb-8 direction">
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-cyclone/10 text-cyclone mb-4">
                  {t('contact.label')}
                </span>
                <RevealText
                  text={t('contact.heading')}
                  className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
                  as="h2"
                />
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t('contact.description')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-cyclone" />
                    <span>{t('contact.formTitle')}</span>
                  </h3>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.name')}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyclone focus:border-cyclone"
                            placeholder={t('contact.form.namePlaceholder')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.email')}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyclone focus:border-cyclone"
                            placeholder={t('contact.form.emailPlaceholder')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.phone')}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyclone focus:border-cyclone"
                            placeholder={t('contact.form.phonePlaceholder')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.form.message')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          rows={4}
                          required
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyclone focus:border-cyclone"
                          placeholder={t('contact.form.messagePlaceholder')}
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === "sending"}
                        className={`w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyclone hover:bg-cyclone-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyclone transition-colors ${
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
                            {t('contact.form.sending')}
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            {t('contact.form.submit')}
                          </>
                        )}
                      </button>
                      {formStatus === "success" && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
                          {t('contact.form.success')}
                        </div>
                      )}
                      {formStatus === "error" && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                          {t('contact.form.error')}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
                <div>
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                    <h3 className="text-xl font-semibold mb-6">{t('contact.infoTitle')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-cyclone/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Mail className="h-5 w-5 text-cyclone" />
                        </div>
                        <div>
                          <p className="font-medium">{t('contact.info.email')}</p>
                          <a href="mailto:inursultan80@gmail.com" className="text-cyclone hover:underline">
                            inursultan80@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-cyclone/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Phone className="h-5 w-5 text-cyclone" />
                        </div>
                        <div>
                          <p className="font-medium">{t('contact.info.phone')}</p>
                          <a href="tel:+996551636369" className="text-cyclone hover:underline">
                            +996 551 636 369
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="font-semibold mb-4">{t('contact.ourPartners')}</h4>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-gray-50 px-4 py-2 rounded-lg">
                          <p className="font-medium">{t('partners.reinaKench')}</p>
                        </div>
                        <div className="bg-gray-50 px-4 py-2 rounded-lg">
                          <p className="font-medium">{t('partners.tsiCollege')}</p>
                        </div>
                        <div className="bg-gray-50 px-4 py-2 rounded-lg">
                          <p className="font-medium">{t('partners.agroTechHub')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <img
                        src="/images/team-cyclone.png"
                        alt={t('about.imageAlt')}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}