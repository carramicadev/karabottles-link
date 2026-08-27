import logo from "@/imports/LOGO.png";
import img1 from "@/imports/DSC06210.JPG";
import img2 from "@/imports/DSC06150.JPG";
import img3 from "@/imports/DSC05610.JPG";
import img4 from "@/imports/DSC06177.JPG";
import { useEffect, useRef } from "react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.17 2.95.14.19 2.01 3.07 4.88 4.3.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.02 21.5h-.01a9.44 9.44 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.24-9.45 9.46-9.45 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.68c-.01 5.21-4.25 9.45-9.44 9.45zM20.52 3.45A11.36 11.36 0 0 0 12.02.01C5.75.01.65 5.11.65 11.38c0 2 .52 3.95 1.52 5.67L.55 23l6.1-1.6a11.34 11.34 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
    </svg>
  );
}

function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
      <path d="M5.2 8h13.6l-1 11.2a1.6 1.6 0 0 1-1.6 1.45H7.8a1.6 1.6 0 0 1-1.6-1.45L5.2 8Z" />
      <path d="M9.8 13.2c.3.9 1.2 1.4 2.2 1.4 1.1 0 1.9-.6 1.9-1.5 0-2-3.8-1.2-3.8-3.2 0-.8.8-1.4 1.8-1.4.9 0 1.6.4 1.9 1.1" />
    </svg>
  );
}

function TokopediaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M4 9.5 12 5l8 4.5v5L12 19l-8-4.5v-5Z" />
      <path d="M4 9.5 12 14l8-4.5" />
      <path d="M12 14v5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

type LinkItem = {
  label: string;
  sub: string;
  href: string;
  icon: React.ReactNode;
  featured?: boolean;
  eventName?: string;
};

const LINKS: LinkItem[] = [
  {
    label: "WhatsApp — Priority Order",
    sub: "Chat & claim your 20% off",
    href: "https://carramica.com/_/cs/rotate?group=1730371362232&text=hai%20micaa..",
    icon: <WhatsAppIcon />,
    featured: true,
    eventName: "WhatsApp",
  },
  {
    label: "Shopee",
    sub: "shopee.co.id/karabottles",
    href: "https://shopee.co.id/karabottles",
    icon: <ShopeeIcon />,
    eventName: "Shopee",
  },
  {
    label: "Tokopedia",
    sub: "tokopedia.com/kara-bottles",
    href: "https://www.tokopedia.com/kara-bottles",
    icon: <TokopediaIcon />,
    eventName: "Tokopedia",
  },
  {
    label: "Offline Store — Maps",
    sub: "Visit us in person",
    href: "https://share.google/ilV2m1xpwnvSa9lg0",
    icon: <MapPinIcon />,
    eventName: "OfflineStore",
  },
];

const GALLERY = [
  { src: img1, alt: "Kara Bottles maroon tumbler and gift box" },
  { src: img2, alt: "Kara Bottles stainless steel bottles" },
  { src: img3, alt: "Kara Bottles maroon tumbler with green handle" },
  { src: img4, alt: "Hands holding patterned Kara Bottles" },
];

function LinkButton({ item }: { item: LinkItem }) {
  const handleClick = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', item.eventName || 'LinkClick', {
        content_name: item.label,
        content_category: 'Link',
      });
    }
  };

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={[
        "group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200",
        "shadow-[0_2px_0_rgba(45,42,38,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(45,42,38,0.2)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF8F3] focus-visible:ring-[#1b220b]",
        item.featured
          ? "bg-[#1b220b] text-[#dceb3a] ring-1 ring-[#dceb3a]/30"
          : "bg-[#1b220b] text-[#FDF8F3]",
      ].join(" ")}
    >
      <span
        className={[
          "grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors",
          item.featured ? "bg-[#dceb3a] text-[#1b220b]" : "bg-white/10 text-[#dceb3a]",
        ].join(" ")}
      >
        {item.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-display block text-[15px] font-bold leading-tight tracking-tight">
          {item.label}
        </span>
        <span className="block truncate text-[12.5px] text-current/60">{item.sub}</span>
      </span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-40 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-80">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}

export default function LinksPage() {
  const loop = [...GALLERY, ...GALLERY];
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Track PageView when LinksPage loads
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Links Page',
        content_category: 'Page View',
        page_url: '/links',
      });
    }
  }, []);

  // Handle tab visibility to maintain animation position
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let lastTime: number = 0;
    let currentX = 0;
    const speed = 50; // pixels per second
    let isRunning = true;

    const animate = (timestamp: number) => {
      if (lastTime === 0) lastTime = timestamp;

      // Calculate time delta, but cap it to prevent jumps after tab was hidden
      const rawDelta = (timestamp - lastTime) / 1000;
      const delta = Math.min(rawDelta, 0.1); // Cap at 100ms to prevent jumps
      lastTime = timestamp;

      // Move left
      currentX -= speed * delta;

      // Get the width of one complete set (we have 2 identical sets)
      const halfWidth = marquee.scrollWidth / 2;

      // Reset position when we've scrolled one complete set
      if (Math.abs(currentX) >= halfWidth) {
        currentX = currentX % halfWidth;
      }

      marquee.style.transform = `translateX(${currentX}px)`;
      animationId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      isRunning = false;
      cancelAnimationFrame(animationId);
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        lastTime = 0; // Reset to force smooth transition
        animationId = requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    // Start animation
    animationId = requestAnimationFrame(animate);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAnimation();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="min-h-full w-full bg-[#FDF8F3] text-[#2D2A26]">
      <main className="mx-auto flex w-full max-w-[560px] flex-col px-5 pb-16 pt-10 sm:pt-14">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white p-2 shadow-[0_6px_24px_rgba(27,34,11,0.12)] ring-1 ring-[#dceb3a]/40 sm:h-28 sm:w-28">
            <img src={logo} alt="Kara Bottles chrome logo" className="h-full w-full object-contain" />
          </div>
        </div>

        {/* Header */}
        <header className="mt-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1b220b] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#dceb3a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#dceb3a]" />
            Newest Launch
          </span>
          <h1 className="font-display mt-4 text-[34px] font-extrabold leading-[1.05] tracking-tight text-[#1b220b] sm:text-[42px]">
            Kara Bottles
            <span className="block text-[#5C6B1D]">by Carramica</span>
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-[14.5px] font-medium leading-relaxed text-[#6B7280]">
            Buy on WhatsApp &amp; get{" "}
            <span className="rounded-md bg-[#1b220b] px-1.5 py-0.5 font-bold text-[#dceb3a]">
              20% Off
            </span>{" "}
            your first order.
          </p>
        </header>

        {/* Links */}
        <nav className="mt-8 flex flex-col gap-3.5">
          {LINKS.map((item) => (
            <LinkButton key={item.label} item={item} />
          ))}
        </nav>

        {/* Carousel */}
        <section className="marquee-track mt-12 -mx-5 overflow-hidden">
          <div className="mb-3 px-5">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#5C6B1D]">
              The Collection
            </h2>
          </div>
          <div ref={marqueeRef} className="flex w-max gap-4 px-5" style={{ transform: 'translateX(0)' }}>
            {loop.map((g, i) => (
              <div
                key={i}
                className="h-56 w-44 shrink-0 overflow-hidden rounded-2xl bg-[#E5E1DB] shadow-[0_6px_18px_rgba(27,34,11,0.12)] ring-1 ring-[#1b220b]/10 sm:h-64 sm:w-52"
              >
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-[#2D2A26]/10" />
          <p className="text-[12px] font-medium text-[#9CA3AF]">
            © 2026 PT Carramica Kreasi Indonesia
          </p>
        </footer>
      </main>
    </div>
  );
}
