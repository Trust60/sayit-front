import { Logo } from "@/components/sections/navbar/navbar";
import SocialLinks from "./social-links";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const CURRENT_YEAR = new Date().getFullYear();

const footerSections: FooterSection[] = [
  {
    title: "Курси",
    links: [
      { href: "/courses/general-english", label: "Загальна англійська" },
      { href: "/courses/business-english", label: "Бізнес-англійська" },
      { href: "/courses/conversation-club", label: "Розмовний клуб" },
      { href: "/courses/individual", label: "Індивідуальне навчання" },
      { href: "/courses/kids", label: "Англійська для дітей" },
    ],
  },
  {
    title: "Ресурси",
    links: [
      { href: "/level-test", label: "Онлайн-тест уровня" },
      { href: "/trial-lesson", label: "Пробний урок" },
      { href: "/blog", label: "Блог" },
      { href: "/vocabulary", label: "Картки слів і словники" },
    ],
  },
  {
    title: "Партнерам",
    links: [
      { href: "/corporate", label: "Корпоративне навчання" },
      { href: "/educational-institutions", label: "Школам та університетам" },
      { href: "/affiliate", label: "Партнерська/affiliate-програма" },
      { href: "/careers", label: "Викладачам (вакансії)" },
    ],
  },
  {
    title: "Контакти",
    links: [
      { href: "/about", label: "Про нас" },
      { href: "/team", label: "Наша команда" },
      { href: "/contact", label: "Контакти" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { href: "/terms-of-service", label: "Умови використання" },
  { href: "/privacy-policy", label: "Політика конфіденційності" },
  { href: "/cookie-policy", label: "Політика cookies" },
  { href: "/sitemap", label: "Карта сайту" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#281151] overflow-hidden relative"
      role="contentinfo"
    >
      <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4 pt-12 pb-7 flex flex-col gap-4">
        <Logo />
        <h3 className="text-muted-foreground">
          Наша місія - дати свободу у вивченні англійської для здійснення мрій
        </h3>
        <SocialLinks />

        <nav aria-label="Footer navigation" className="mt-4 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {footerSections.map((section, index) => (
              <section key={index}>
                <h2 className="text-violet-100 mb-4 font-bold text-lg">
                  {section.title}
                </h2>
                <ul
                  className="text-muted-foreground font-semibold space-y-2"
                  role="list"
                >
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-violet-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#281151] rounded"
                        aria-label={`${link.label} - ${section.title}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </nav>

        <Separator />

        <div className="text-muted-foreground text-center">
          <p>&copy; {CURRENT_YEAR} SayIt.</p>
        </div>

        <nav
          aria-label="Legal links"
          className="text-muted-foreground text-center"
        >
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-violet-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#281151] rounded px-1"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
