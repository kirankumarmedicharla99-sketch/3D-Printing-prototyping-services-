
document.addEventListener('DOMContentLoaded', () => {
  const industriesSection = document.getElementById('industries');
  if (!industriesSection) return;

  document.documentElement.classList.add('js-ready');

  const revealElements = industriesSection.querySelectorAll('.ind-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
          setTimeout(() => {
            el.classList.add('is-revealed');
          }, delay);
          obs.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => observer.observe(el));
  } else {

    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  const cards = industriesSection.querySelectorAll('.ind-card');
  cards.forEach(card => {
    const href = card.getAttribute('data-href');
    if (href) {

      card.addEventListener('click', (e) => {

        if (e.target.closest('a') && !e.target.closest('.ind-explore-link')) return;
        window.location.href = href;
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = href;
        }
      });
    }

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    }
  });
});
