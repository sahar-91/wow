"use client";

import Link from "next/link";

const sitemapLinks = [
  { label: "about us", href: "/about-us" },
  { label: "our work", href: "/our-work" },
  { label: "our clients", href: "/our-clients" },
  { label: "our team", href: "/our-team" },
  { label: "contact us", href: "/contact-us" },
];

const offices = [
  { city: "dubai", country: "UAE" },
  { city: "beirut", country: "LEBANON" },
  { city: "paris", country: "FRANCE" },
  { city: "cairo", country: "EGYPT" },
  { city: "riyadh", country: "KSA" },
];

export default function Footer() {
  return (

    <footer className="bg-[#FF5A5F] text-white">
      
      <div className="container mx-auto px-2 md:px-10">
  
      <div className="px-6 md:px-10  pt-14 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <p className="mb-6 text-l">
            sitemap
          </p>
          <ul className="flex flex-col gap-0.5">
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-semibold lowercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-6 text-l">
            offices
          </p>
          <ul className="flex flex-col gap-0.5 text-m">
            {offices.map((office) => (
              <li key={office.city}>
                <Link
                  href="/contact-us"
                  className="font-semibold  hover:text-white transition lowercase"
                >
                  {office.city},{" "}
                  <span className="uppercase">{office.country}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

     
        <div className="hidden md:block" />

     
        <div>
          <p className="mb-6 text-l">
            inquiries
          </p>
          <a
            href="mailto:briefme@xyt.agency"
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
           <img width="40" height="40" src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
          </a>

        
          <a href="#" className="text-white text-3xl font-bold">
            in
          </a>
        </div>

    
        <div className="flex items-center gap-3 ">
          <Link href="/privacy-policy">
            privacy policy
          </Link>
          <span className="text-white">|</span>
          <Link href="/terms-conditions">
            terms & conditions
          </Link>
        </div>
      </div>
    </div>
    </footer>
  );
}