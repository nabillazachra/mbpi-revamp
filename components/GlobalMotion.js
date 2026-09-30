'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GROUPS = [
  '.premiumStats > div',
  '.customerLogoGrid > div',
  '.premiumServiceGrid > *',
  '.premiumOpsGrid > div',
  '.valueGrid > *',
  '.serviceRows > article',
  '.branchTimeline > article',
  '.branchServiceStrip > div',
  '.quickGrid > a',
  '.faqList > article',
  '.careerDetailedCard',
  '.newsArchive > article',
  '.contactCards > article',
  '.hoursGrid > article'
];

const SECTIONS = [
  '.premiumIntro',
  '.premiumCustomers',
  '.premiumServices',
  '.premiumNetwork',
  '.premiumGallery',
  '.premiumOperations',
  '.premiumCta',
  '.section',
  '.darkBand',
  '.branchStory',
  '.branchCapabilities',
  '.branchContactSection'
];

export default function GlobalMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = new Set();

    document.querySelectorAll(SECTIONS.join(',')).forEach((el) => {
      if (el.hasAttribute('data-reveal')) return;
      el.classList.add('motion-section');
      items.add(el);
    });

    GROUPS.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        if (el.hasAttribute('data-reveal')) return;
        el.classList.add('motion-item');
        el.style.setProperty('--motion-delay', `${Math.min(index * 55, 330)}ms`);
        items.add(el);
      });
    });

    const heroParts = document.querySelectorAll(
      '.pageHeroGrid > *, .premiumHeroCopy > *, .premiumHeroVisual, .branchHeroContent > *'
    );
    heroParts.forEach((el, index) => {
      el.classList.add('motion-hero');
      el.style.setProperty('--motion-delay', `${index * 70}ms`);
      items.add(el);
    });

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('motion-in'));
      return;
    }

    requestAnimationFrame(() => {
      heroParts.forEach((el) => el.classList.add('motion-in'));
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    items.forEach((el) => {
      if (!el.classList.contains('motion-hero')) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
