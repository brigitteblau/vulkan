import Link from "next/link";

export default function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="#hero"
          className="font-display text-2xl tracking-tight text-vulkan-pink sm:text-3xl"
        >
          vulkan
        </Link>
        <nav className="mix-blend-difference flex items-center gap-6 font-sans text-xs uppercase tracking-[0.15em] text-warm-white sm:gap-8 sm:text-sm">
          <Link href="#sabores" className="opacity-80 transition-opacity hover:opacity-100">
            sabores
          </Link>
          <Link href="#pedir" className="opacity-80 transition-opacity hover:opacity-100">
            pedir
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
