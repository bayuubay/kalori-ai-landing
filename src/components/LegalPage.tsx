'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/config';
import type { Lang } from '@/lib/i18n';
import { LEGAL_LABELS, type LegalDoc } from '@/lib/legal';

export function LegalPage({ doc }: { doc: Record<Lang, LegalDoc> }) {
  const [lang, setLang] = useState<Lang>('id');
  const d = doc[lang];
  const labels = LEGAL_LABELS[lang];

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={BRAND}
              width={32}
              height={32}
              className="rounded-lg"
              unoptimized
            />
            <span className="font-bold text-brand">{BRAND}</span>
          </Link>
          <div className="flex overflow-hidden rounded-full border border-gray-200 text-xs font-semibold">
            {(['id', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase transition ${
                  lang === l
                    ? 'bg-brand text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Link href="/" className="text-sm text-brand hover:underline">
          {labels.back}
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
          {d.title}
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          {labels.updated}: {d.updated}
        </p>
        <p className="mt-6 leading-relaxed text-gray-600">{d.intro}</p>

        <div className="mt-8 space-y-8">
          {d.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-gray-900">{s.heading}</h2>
              <div className="mt-2 space-y-3">
                {s.body.map((block, i) =>
                  Array.isArray(block) ? (
                    <ul
                      key={i}
                      className="list-disc space-y-1 pl-5 text-gray-600"
                    >
                      {block.map((li) => (
                        <li key={li} className="leading-relaxed">
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="leading-relaxed text-gray-600">
                      {block}
                    </p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {BRAND}
      </footer>
    </main>
  );
}
