"use client";

import Link from "next/link";
import { useLanguage } from "../app/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const sitemapLinks = [
    { en: "about us", ar: "من نحن", href: "/about" },
    { en: "latest news", ar: "آخر الأخبار", href: "/latest-news" },
    { en: "our work", ar: "أعمالنا", href: "/work" },
    { en: "our clients", ar: "عملاؤنا", href: "/our-clients" },
    { en: "our team", ar: "فريقنا", href: "/our-team" },
    { en: "contact us", ar: "اتصل بنا", href: "/contact-us" },
  ];

  const offices = [
    { cityEn: "dubai", cityAr: "دبي", country: "UAE" },
    { cityEn: "beirut", cityAr: "بيروت", country: "LEBANON" },
    { cityEn: "paris", cityAr: "باريس", country: "FRANCE" },
    { cityEn: "cairo", cityAr: "القاهرة", country: "EGYPT" },
    { cityEn: "riyadh", cityAr: "الرياض", country: "KSA" },
  ];

  const t = {
    EN: {
      sitemap: "sitemap",
      offices: "offices",
      inquiries: "inquiries",
      privacy: "privacy policy",
      terms: "terms & conditions",
    },
    AR: {
      sitemap: "خريطة الموقع",
      offices: "المكاتب",
      inquiries: "الاستفسارات",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
  };

  return (
    <footer className="bg-[#FF5A5F] text-white">
      <div className="container mx-auto px-2 md:px-10">

        <div className="px-6 md:px-10 pt-14 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <p className="mb-6 text-lg">
              {t[language].sitemap}
            </p>

            <ul className="flex flex-col gap-0.5">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-semibold lowercase"
                  >
                    {language === "AR" ? link.ar : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-lg">
              {t[language].offices}
            </p>

            <ul className="flex flex-col gap-0.5 text-m">
              {offices.map((office) => (
                <li key={office.cityEn}>
                  <Link
                    href="/contact-us"
                    className="font-semibold hover:text-white transition lowercase"
                  >
                    {language === "AR" ? office.cityAr : office.cityEn},{" "}
                    <span className="uppercase">{office.country}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block" />

          <div>
            <p className="mb-6 text-lg">
              {t[language].inquiries}
            </p>

            <a
              href="mailto:briefme@wow-studio.com"
              className="font-semibold"
            >
              briefme@wow-studio.com
            </a>
          </div>

        </div>

        <div className="px-6 md:px-10 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">

          <div className="flex items-center gap-6 ">

            <Link href="/" className="flex items-baseline">
              <span className="font-black text-[1.6rem] tracking-tight lowercase">
                WOW studio
              </span>
            </Link>

            <span className="w-px h-5 bg-white" />

            <a href="#" className="text-white font-bold ">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png"
                alt="instagram"
              />
            </a>

            <a href="#" className="text-white text-3xl font-bold">
              in
            </a>

          </div>

          <div className="flex items-center gap-3 ">

            <Link href="/privacy-policy">
              {t[language].privacy}
            </Link>

            <span className="text-white">|</span>

            <Link href="/terms-conditions">
              {t[language].terms}
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}