'use client';

import { useEffect } from 'react';

export default function FacilityMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-inview'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const order = Number(el.dataset.revealOrder || 0);
        el.style.setProperty('--reveal-delay', `${Math.min(order * 70, 420)}ms`);
        el.classList.add('is-inview');
        observer.unobserve(el);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -7% 0px'
    });

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
