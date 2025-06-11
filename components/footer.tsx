"use client"
import { useTranslation } from 'react-i18next';
import '../i18n';
import Image from "next/image"
import { Instagram, Send, Mail, Phone, MapPin, ChevronRight } from "lucide-react"

export default function Footer() {
    const { t, i18n } = useTranslation();
  
  return (
    <footer className="relative z-20 bg-gradient-to-r from-premium-900 to-cyclone-dark text-white overflow-hidden">
      {/* Декоративный элемент */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16 xl:px-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/cyclone.svg"
                alt={t('footer.company.logoAlt')}
                width={120}
                height={60}
                className="h-auto w-[120px]"
              />
            </div>
            <p className="mb-6 text-white/80 font-light">
              {t('footer.company.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cyclone.kgz/?next=%2F"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/cyclone56666"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@cyclone-app.com"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gold-accent pb-2 tracking-tight">{t('footer.links.title')}</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: t('footer.links.about') },
                { href: "#problem", label: t('footer.links.problem') },
                { href: "#our_solve", label: t('footer.links.solution') },
                { href: "#how_work", label: t('footer.links.functionality') },
                { href: "#our_pluses", label: t('footer.links.advantages') },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-gold-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gold-accent pb-2 tracking-tight">{t('footer.contacts.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-gold-400" />
                <span>{t('footer.contacts.phone')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-gold-400" />
                <span>{t('footer.contacts.email')}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-gold-400" />
                <span>{t('footer.contacts.address')}</span>
              </li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gold-accent pb-2 tracking-tight">{t('footer.investors.title')}</h3>
            <p className="mb-4 text-white/80 font-light">
              {t('footer.investors.description')}
            </p>
            <a
              href="mailto:inursultan80@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-500 text-premium-900 rounded-lg font-medium hover:shadow-gold transition-all duration-300"
            >
              {t('footer.investors.contact')}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}