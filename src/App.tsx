import { useEffect, useState } from "react";
import tank1 from "./assets/images/tank-1.png";
import tank2 from "./assets/images/tank-2.png";
import tank3 from "./assets/images/tank-3.png";
import tank4 from "./assets/images/tank-4.png";
import tank7 from "./assets/images/tank-7.png";
import tank8 from "./assets/images/tank-8.png";

type Lang = "ar" | "en";

const MAP_URL = "https://maps.app.goo.gl/rTXVNVcJ9TvzK57H6?g_st=aw";
const WHATSAPP_URL =
  "https://wa.me/97466140607?text=" +
  encodeURIComponent("مرحباً، أود الاستفسار عن خدمة تنظيف خزانات المياه");

const copy = {
  ar: {
    direction: "rtl",
    language: "English",
    nav: ["الرئيسية", "خدماتنا", "لماذا نحن", "أعمالنا", "تواصل معنا"],
    eyebrow: "مياه أنقى لحياة أكثر صحة",
    titleA: "نظافة خزانك",
    titleB: "تبدأ من الداخل",
    intro:
      "خدمات متخصصة في تنظيف وتعقيم خزانات المياه وتوريد معدات تنقية المياه للمنازل والمنشآت في قطر.",
    book: "احجز خدمتك الآن",
    call: "اتصل بنا",
    trusted: "خدمة موثوقة",
    location: "المنتزه، قطر",
    response: "استجابة سريعة",
    servicesLabel: "ما نقدّمه",
    servicesTitle: "حلول متكاملة لمياه نظيفة وآمنة",
    servicesIntro:
      "نهتم بأدق التفاصيل من الفحص الأولي حتى التعقيم النهائي، لضمان جودة المياه وراحة بالكم.",
    services: [
      {
        title: "تنظيف خزانات المياه",
        text: "إزالة الرواسب والطحالب والأوساخ المتراكمة بخطوات دقيقة ومعدات متخصصة.",
      },
      {
        title: "تعقيم الخزانات",
        text: "تعقيم آمن وفعّال يساعد على حماية المياه والمحافظة على نظافة الخزان.",
      },
      {
        title: "معدات تنقية المياه",
        text: "توفير حلول ومعدات تنقية مناسبة لاحتياجات المنازل والمباني والمنشآت.",
      },
    ],
    whyLabel: "لماذا Maximum؟",
    whyTitle: "نتيجة يمكنك رؤيتها، وجودة يمكنك الوثوق بها",
    whyText:
      "نؤمن أن المياه النظيفة ضرورة وليست رفاهية. لذلك نعمل بعناية وشفافية ونوثّق حالة الخزان قبل التنظيف وبعده.",
    reasons: [
      "فريق مدرّب ومتخصص",
      "معدات تنظيف احترافية",
      "عناية كاملة بالتفاصيل",
      "خدمة سريعة في أنحاء قطر",
    ],
    galleryLabel: "من أعمالنا",
    galleryTitle: "الفرق واضح",
    galleryText: "صور حقيقية من عمليات تنظيف خزانات نفذها فريقنا.",
    before: "قبل التنظيف",
    after: "بعد التنظيف",
    processLabel: "طريقة عملنا",
    processTitle: "أربع خطوات لخزان أنظف",
    steps: [
      ["01", "الفحص", "معاينة الخزان وتحديد حالته"],
      ["02", "التفريغ", "تفريغ المياه والرواسب بأمان"],
      ["03", "التنظيف", "تنظيف شامل للجدران والأرضية"],
      ["04", "التعقيم", "تعقيم نهائي وفحص النتيجة"],
    ],
    ctaTitle: "هل حان وقت تنظيف خزان المياه؟",
    ctaText: "تواصل معنا اليوم للحصول على خدمة سريعة وموثوقة في المنتزه وجميع أنحاء قطر.",
    whatsapp: "تواصل عبر واتساب",
    contactLabel: "تواصل معنا",
    contactTitle: "نحن على بُعد رسالة واحدة",
    address: "المنتزه، قطر",
    addressLabel: "موقعنا",
    phoneLabel: "الهاتف وواتساب",
    emailLabel: "البريد الإلكتروني",
    map: "افتح الموقع على الخريطة",
    company: "Maximum لمعدات تنقية المياه",
    footerText: "تنظيف وتعقيم خزانات المياه وتوفير معدات التنقية في قطر.",
    rights: "جميع الحقوق محفوظة.",
    credit: "صُنع بواسطة",
    cr: "س.ت: 249510",
    imageAlt: "خزان مياه ضمن أعمال التنظيف",
    close: "إغلاق",
  },
  en: {
    direction: "ltr",
    language: "العربية",
    nav: ["Home", "Services", "Why us", "Our work", "Contact"],
    eyebrow: "Cleaner water for a healthier life",
    titleA: "A cleaner tank",
    titleB: "starts from within",
    intro:
      "Specialized water tank cleaning, sanitization, and water purification equipment for homes and businesses across Qatar.",
    book: "Book your service",
    call: "Call us",
    trusted: "Trusted service",
    location: "Al Muntazah, Qatar",
    response: "Fast response",
    servicesLabel: "What we offer",
    servicesTitle: "Complete solutions for clean, safe water",
    servicesIntro:
      "We care for every detail, from initial inspection to final sanitization, for better water quality and peace of mind.",
    services: [
      {
        title: "Water tank cleaning",
        text: "Thorough removal of sediment, algae, and buildup using professional equipment.",
      },
      {
        title: "Tank sanitization",
        text: "Safe and effective sanitization to help protect your water and keep your tank clean.",
      },
      {
        title: "Purification equipment",
        text: "Water purification solutions and equipment for homes, buildings, and businesses.",
      },
    ],
    whyLabel: "Why Maximum?",
    whyTitle: "Results you can see. Quality you can trust.",
    whyText:
      "Clean water is essential. That is why we work with care and transparency, documenting each tank before and after cleaning.",
    reasons: [
      "Trained specialists",
      "Professional equipment",
      "Attention to detail",
      "Fast service across Qatar",
    ],
    galleryLabel: "Our work",
    galleryTitle: "The difference is clear",
    galleryText: "Real images from water tank cleaning projects completed by our team.",
    before: "Before cleaning",
    after: "After cleaning",
    processLabel: "Our process",
    processTitle: "Four steps to a cleaner tank",
    steps: [
      ["01", "Inspect", "Assess the tank and its condition"],
      ["02", "Drain", "Safely remove water and sediment"],
      ["03", "Clean", "Deep-clean walls and flooring"],
      ["04", "Sanitize", "Final sanitization and inspection"],
    ],
    ctaTitle: "Is it time to clean your water tank?",
    ctaText: "Contact us today for fast, dependable service in Al Muntazah and across Qatar.",
    whatsapp: "Chat on WhatsApp",
    contactLabel: "Contact us",
    contactTitle: "We are one message away",
    address: "Al Muntazah, Qatar",
    addressLabel: "Our location",
    phoneLabel: "Phone & WhatsApp",
    emailLabel: "Email",
    map: "Open location in maps",
    company: "Maximum Water Purification Equipment",
    footerText: "Water tank cleaning, sanitization, and purification equipment in Qatar.",
    rights: "All rights reserved.",
    credit: "Made by",
    cr: "CR: 249510",
    imageAlt: "Water tank cleaning project",
    close: "Close",
  },
} as const;

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    droplet: (
      <>
        <path d="M12 2.5S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.5-7-12.5Z" />
        <path d="M9 16a3 3 0 0 0 3 2" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.1 3.9L17 8l-3.9 1.1L12 13l-1.1-3.9L7 8l3.9-1.1L12 3Z" />
        <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" />
        <path d="m5 13 .7 2.3L8 16l-2.3.7L5 19l-.7-2.3L2 16l2.3-.7L5 13Z" />
      </>
    ),
    filter: (
      <>
        <path d="M4 5h16" />
        <path d="M7 10h10" />
        <path d="M10 15h4" />
        <path d="M12 15v6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.direction;
    document.title =
      lang === "ar"
        ? "Maximum | تنظيف خزانات المياه في قطر"
        : "Maximum | Water Tank Cleaning Qatar";
  }, [lang, t.direction]);

  const navIds = ["home", "services", "why", "work", "contact"];
  const gallery = [
    { src: tank3, tag: t.before },
    { src: tank4, tag: t.after },
    { src: tank7, tag: t.before },
    { src: tank8, tag: t.after },
    { src: tank1, tag: t.before },
    { src: tank2, tag: t.after },
  ];

  return (
    <div className="site" dir={t.direction}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{t.cr}</span>
          <div className="topbar-links">
            <a href="tel:+97466140607">
              <Icon name="phone" size={15} />
              <span dir="ltr">+974 6614 0607</span>
            </a>
            <span className="top-divider" />
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              <Icon name="pin" size={15} />
              {t.location}
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#home" aria-label={t.company}>
            <span className="logo-mark">
              <Icon name="droplet" size={27} />
            </span>
            <span className="logo-type">
              <strong>MAXIMUM</strong>
              <small>{lang === "ar" ? "لتنقية المياه" : "WATER PURIFICATION"}</small>
            </span>
          </a>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navIds[index]}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {t.book}
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="language-btn"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              aria-label="Change language"
            >
              <span className="globe">◎</span>
              {t.language}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span />
                <Icon name="sparkle" size={17} />
                {t.eyebrow}
              </div>
              <h1>
                {t.titleA}
                <br />
                <em>{t.titleB}</em>
              </h1>
              <p>{t.intro}</p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  {t.book}
                  <Icon name="arrow" size={19} />
                </a>
                <a className="btn btn-secondary" href="tel:+97466140607">
                  <Icon name="phone" size={19} />
                  {t.call}
                </a>
              </div>
              <div className="trust-row">
                <div>
                  <Icon name="shield" />
                  <span>
                    <strong>{t.trusted}</strong>
                    <small>CR 249510</small>
                  </span>
                </div>
                <div>
                  <Icon name="pin" />
                  <span>
                    <strong>{t.location}</strong>
                    <small>Doha</small>
                  </span>
                </div>
                <div>
                  <Icon name="clock" />
                  <span>
                    <strong>{t.response}</strong>
                    <small>WhatsApp</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <img src={tank8} alt={t.imageAlt} />
                <div className="water-rings">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="result-card">
                  <span className="result-icon">
                    <Icon name="check" size={20} />
                  </span>
                  <span>
                    <strong>{lang === "ar" ? "تنظيف احترافي" : "Professional cleaning"}</strong>
                    <small>
                      {lang === "ar" ? "نتائج واضحة وموثقة" : "Clear, documented results"}
                    </small>
                  </span>
                </div>
              </div>
              <div className="floating-drop">
                <Icon name="droplet" size={35} />
              </div>
            </div>
          </div>
          <a className="scroll-hint" href="#services">
            <span />
            <small>{lang === "ar" ? "اكتشف المزيد" : "Discover more"}</small>
          </a>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">{t.servicesLabel}</span>
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesIntro}</p>
            </div>
            <div className="service-grid">
              {t.services.map((service, i) => (
                <article className="service-card" key={service.title}>
                  <div className="service-number">0{i + 1}</div>
                  <span className="service-icon">
                    <Icon name={["droplet", "sparkle", "filter"][i]} size={30} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">
                    {lang === "ar" ? "اطلب الخدمة" : "Request service"}
                    <Icon name="arrow" size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="why">
          <div className="container why-grid">
            <div className="why-media">
              <div className="before-after">
                <div>
                  <img src={tank7} alt={t.before} />
                  <span>{t.before}</span>
                </div>
                <div>
                  <img src={tank8} alt={t.after} />
                  <span className="after-tag">{t.after}</span>
                </div>
              </div>
              <div className="experience-badge">
                <strong>100%</strong>
                <span>{lang === "ar" ? "عناية ونظافة" : "Care & cleaning"}</span>
              </div>
            </div>
            <div className="why-copy">
              <span className="section-label">{t.whyLabel}</span>
              <h2>{t.whyTitle}</h2>
              <p>{t.whyText}</p>
              <div className="reason-list">
                {t.reasons.map((reason) => (
                  <div key={reason}>
                    <span>
                      <Icon name="check" size={16} />
                    </span>
                    {reason}
                  </div>
                ))}
              </div>
              <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {t.book}
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="work">
          <div className="container">
            <div className="gallery-heading">
              <div>
                <span className="section-label">{t.galleryLabel}</span>
                <h2>{t.galleryTitle}</h2>
              </div>
              <p>{t.galleryText}</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, i) => (
                <button
                  className={`gallery-item item-${i + 1}`}
                  onClick={() => setSelectedImage(i)}
                  key={item.src}
                  aria-label={`${item.tag} ${i + 1}`}
                >
                  <img src={item.src} alt={`${t.imageAlt} - ${item.tag}`} />
                  <span className={item.tag === t.after ? "tag after" : "tag"}>{item.tag}</span>
                  <span className="expand">
                    <Icon name="expand" size={19} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="container">
            <div className="section-heading centered light">
              <span className="section-label">{t.processLabel}</span>
              <h2>{t.processTitle}</h2>
            </div>
            <div className="process-grid">
              {t.steps.map((step, i) => (
                <div className="process-step" key={step[0]}>
                  <span className="step-number">{step[0]}</span>
                  <div className="step-dot">
                    <Icon name={["shield", "droplet", "sparkle", "check"][i]} size={24} />
                  </div>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-card">
            <div className="cta-decor">
              <Icon name="droplet" size={190} />
            </div>
            <div>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {t.whatsapp}
                <Icon name="arrow" size={19} />
              </a>
              <a className="cta-phone" href="tel:+97466140607">
                <small>{t.call}</small>
                <strong dir="ltr">+974 6614 0607</strong>
              </a>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-label">{t.contactLabel}</span>
              <h2>{t.contactTitle}</h2>
              <div className="contact-list">
                <a href={MAP_URL} target="_blank" rel="noreferrer">
                  <span>
                    <Icon name="pin" />
                  </span>
                  <div>
                    <small>{t.addressLabel}</small>
                    <strong>{t.address}</strong>
                  </div>
                </a>
                <a href="tel:+97466140607">
                  <span>
                    <Icon name="phone" />
                  </span>
                  <div>
                    <small>{t.phoneLabel}</small>
                    <strong dir="ltr">+974 6614 0607</strong>
                  </div>
                </a>
                <a href="mailto:Harun123rashid45@gamil.com">
                  <span>
                    <Icon name="mail" />
                  </span>
                  <div>
                    <small>{t.emailLabel}</small>
                    <strong dir="ltr">Harun123rashid45@gamil.com</strong>
                  </div>
                </a>
              </div>
            </div>
            <a className="map-card" href={MAP_URL} target="_blank" rel="noreferrer">
              <div className="map-pattern" />
              <span className="map-pin">
                <Icon name="pin" size={30} />
              </span>
              <span className="map-caption">
                <strong>{t.address}</strong>
                <small>
                  {t.map} <Icon name="arrow" size={15} />
                </small>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="logo inverse" href="#home">
              <span className="logo-mark">
                <Icon name="droplet" size={27} />
              </span>
              <span className="logo-type">
                <strong>MAXIMUM</strong>
                <small>{lang === "ar" ? "لتنقية المياه" : "WATER PURIFICATION"}</small>
              </span>
            </a>
            <p>{t.footerText}</p>
          </div>
          <div className="footer-nav">
            {t.nav.map((item, i) => (
              <a key={item} href={`#${navIds[i]}`}>
                {item}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <a dir="ltr" href="tel:+97466140607">
              +974 6614 0607
            </a>
            <a href="mailto:Harun123rashid45@gamil.com">Harun123rashid45@gamil.com</a>
            <span>{t.cr}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Maximum. {t.rights}
          </span>
          <span>
            {t.credit}{" "}
            <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
              @XenosysQatar
            </a>{" "}
            ·{" "}
            <a href="tel:+97470643918" dir="ltr">
              +974 7064 3918
            </a>
          </span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={t.whatsapp}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 3A12.8 12.8 0 0 0 5.1 22.5L3.4 29l6.7-1.7A13 13 0 1 0 16 3Zm0 23.4c-2 0-4-.6-5.6-1.5l-.4-.2-4 .9 1-3.8-.3-.4A10.3 10.3 0 1 1 16 26.4Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.8.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.6.9-1.8.1-.2.1-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.8-.5h-.7c-.2 0-.7.1-1 .5-1.1 1.2-1.6 3.6.1 6.1 2 3 4.8 5.1 8.3 6.1 2.2.7 3.1.3 4.2-.7.5-.5.9-1.6 1-2.2.1-.6.1-1.1-.1-1.2-.3-.1-1.9-.9-2.2-1Z"
          />
        </svg>
      </a>

      {selectedImage !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button onClick={() => setSelectedImage(null)} aria-label={t.close}>
            <Icon name="close" />
          </button>
          <img
            src={gallery[selectedImage].src}
            alt={gallery[selectedImage].tag}
            onClick={(e) => e.stopPropagation()}
          />
          <span>{gallery[selectedImage].tag}</span>
        </div>
      )}
    </div>
  );
}
