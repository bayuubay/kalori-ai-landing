'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BOT_URL, BRAND } from '@/lib/config';
import { COPY, type Lang } from '@/lib/i18n';

export default function Home() {
  const [lang, setLang] = useState<Lang>('id');
  const t = COPY[lang];

  return (
    <main className="flex min-h-screen flex-col">
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Features t={t} />
      <How t={t} />
      <Pricing t={t} />
      <Faq t={t} />
      <FinalCta t={t} />
      <Footer t={t} />
    </main>
  );
}

type T = (typeof COPY)['id'];

function CtaButton({
  label,
  variant = 'primary',
  className = '',
}: {
  label: string;
  variant?: 'primary' | 'ghost';
  className?: string;
}) {
  const styles =
    variant === 'primary'
      ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/30'
      : 'border border-gray-300 text-gray-700 hover:bg-gray-100';
  return (
    <a
      href={BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      <TelegramIcon />
      {label}
    </a>
  );
}

function Nav({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt={BRAND}
            width={36}
            height={36}
            className="rounded-lg"
            priority
            unoptimized
          />
          <span className="text-lg font-bold text-brand">{BRAND}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
          <a href="#features" className="hover:text-brand">
            {t.nav.features}
          </a>
          <a href="#how" className="hover:text-brand">
            {t.nav.how}
          </a>
          <a href="#pricing" className="hover:text-brand">
            {t.nav.pricing}
          </a>
          <a href="#faq" className="hover:text-brand">
            {t.nav.faq}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <CtaButton label={t.cta} className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="flex overflow-hidden rounded-full border border-gray-200 text-xs font-semibold">
      {(['id', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 uppercase transition ${
            lang === l ? 'bg-brand text-white' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Hero({ t }: { t: T }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand/5 to-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {t.hero.title}{' '}
            <span className="text-brand">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-gray-600">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton label={t.cta} />
          </div>
          <p className="mt-4 text-xs text-gray-400">{t.hero.proof}</p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src="/logo.png"
              alt={BRAND}
              width={320}
              height={320}
              className="relative rounded-3xl shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features({ t }: { t: T }) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead title={t.features.title} subtitle={t.features.subtitle} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-2xl">
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function How({ t }: { t: T }) {
  return (
    <section id="how" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead title={t.how.title} subtitle={t.how.subtitle} />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.how.steps.map((s) => (
            <div key={s.num} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-xl font-bold text-white shadow-lg shadow-brand/30">
                {s.num}
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CtaButton label={t.cta} />
        </div>
      </div>
    </section>
  );
}

function Pricing({ t }: { t: T }) {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead title={t.pricing.title} subtitle={t.pricing.subtitle} />
      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-brand bg-brand/5 p-8">
          <div className="text-3xl">🎁</div>
          <h3 className="mt-3 text-xl font-bold">{t.pricing.starterTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {t.pricing.starterDesc}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="text-3xl">💳</div>
          <h3 className="mt-3 text-xl font-bold">{t.pricing.payTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {t.pricing.payDesc}
          </p>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">
        🤝 {t.pricing.note}
      </p>
    </section>
  );
}

function Faq({ t }: { t: T }) {
  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHead title={t.faq.title} />
        <div className="mt-10 space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-gray-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {item.q}
                <span className="text-brand transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ t }: { t: T }) {
  return (
    <section className="bg-brand py-20 text-center text-white">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          {t.finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-white/90">{t.finalCta.subtitle}</p>
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand shadow-lg transition hover:bg-gray-100"
        >
          <TelegramIcon />
          {t.cta}
        </a>
      </div>
    </section>
  );
}

function Footer({ t }: { t: T }) {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt={BRAND}
            width={28}
            height={28}
            className="rounded-md"
            unoptimized
          />
          <span className="font-semibold text-gray-700">{BRAND}</span>
          <span className="hidden sm:inline">— {t.footer.tagline}</span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/terms" className="hover:text-brand">
            {t.footer.terms}
          </Link>
          <Link href="/privacy" className="hover:text-brand">
            {t.footer.privacy}
          </Link>
        </div>
        <span>
          © {new Date().getFullYear()} {BRAND}. {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}

function SectionHead({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M21.94 4.3 18.6 20.1c-.25 1.1-.9 1.37-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.13L16.96 6.9c.4-.36-.09-.56-.62-.2L6.1 13.05l-5.05-1.58c-1.1-.34-1.12-1.1.23-1.62L20.5 2.65c.92-.34 1.72.2 1.44 1.65Z" />
    </svg>
  );
}
