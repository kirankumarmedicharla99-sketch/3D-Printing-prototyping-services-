
(function () {
  'use strict';

  const STORAGE_KEYS = {
    THEME: 'printnexa_theme',
    DIR: 'printnexa_dir'
  };

  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);

  const savedDir = localStorage.getItem(STORAGE_KEYS.DIR) || 'ltr';
  htmlEl.setAttribute('dir', savedDir);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const siteHeader = document.getElementById('siteHeader');

  const quoteModal = document.getElementById('quoteModal');
  const quoteModalCloseBtn = document.getElementById('quoteModalCloseBtn');
  const quoteForm = document.getElementById('quoteCalculatorForm');
  const servicesHeroQuoteBtn = document.getElementById('servicesHeroQuoteBtn');
  const ctaQuoteBtn = document.getElementById('ctaQuoteBtn');
  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  const loginModal = document.getElementById('loginModal');
  const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');
  const loginForm = document.getElementById('loginForm');
  const toastContainer = document.getElementById('toastContainer');

  const quoteTech = document.getElementById('quoteTech');
  const quoteMaterial = document.getElementById('quoteMaterial');
  const quoteQuantity = document.getElementById('quoteQuantity');
  const quoteTurnaround = document.getElementById('quoteTurnaround');
  const estimatePriceValue = document.getElementById('estimatePriceValue');

  function updateThemeUI(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      updateThemeUI(newTheme);
    });
  }

  function updateDirUI(dir) {
    htmlEl.setAttribute('dir', dir);
    localStorage.setItem(STORAGE_KEYS.DIR, dir);
    if (rtlBtnText) {
      rtlBtnText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
  }

  if (rtlToggleBtn) {
    if (rtlBtnText) {
      rtlBtnText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
    }
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = htmlEl.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      updateDirUI(newDir);
    });
  }

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('active');
      mainNav.classList.toggle('mobile-open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.classList.toggle('active', isOpen);
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (mainNav.classList.contains('active') || mainNav.classList.contains('mobile-open')) {
          mainNav.classList.remove('active', 'mobile-open');
          mobileMenuBtn.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          const icon = mobileMenuBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      }
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active', 'mobile-open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  const galleryFilterBtns = document.querySelectorAll('.gallery-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item-card');

  if (galleryFilterBtns.length > 0 && galleryItems.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {

        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter') || 'all';

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0) scale(1)';
            }, 30);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px) scale(0.96)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  const faqItems = document.querySelectorAll('.faq-item, .faq-accordion-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active') || item.classList.contains('open');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active', 'open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active', 'open');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active', 'open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const serviceCards = document.querySelectorAll('.six-service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', (e) => {

      if (e.target.closest('a')) return;
      const viewBtn = card.querySelector('.btn-view-service');
      if (viewBtn && viewBtn.href) {
        window.location.href = viewBtn.href;
      }
    });
  });

  const TECH_BASE_RATES = {
    fdm: 18,
    sla: 32,
    sls: 48,
    dmls: 185
  };

  const MATERIAL_MULTIPLIERS = {
    pla: 1.0,
    abs: 1.15,
    nylon: 1.45,
    resin: 1.35,
    titanium: 2.80
  };

  const TURNAROUND_MULTIPLIERS = {
    standard: 1.0,
    express: 1.4,
    economy: 0.9
  };

  function recalculateQuote() {
    if (!quoteTech || !quoteMaterial || !quoteQuantity || !quoteTurnaround || !estimatePriceValue) return;

    const tech = quoteTech.value || 'fdm';
    const mat = quoteMaterial.value || 'pla';
    const qty = Math.max(1, parseInt(quoteQuantity.value, 10) || 1);
    const speed = quoteTurnaround.value || 'standard';

    const baseRate = TECH_BASE_RATES[tech] || 25;
    const matFactor = MATERIAL_MULTIPLIERS[mat] || 1.0;
    const speedFactor = TURNAROUND_MULTIPLIERS[speed] || 1.0;

    let volumeDiscount = 1.0;
    if (qty >= 50) volumeDiscount = 0.70;
    else if (qty >= 20) volumeDiscount = 0.80;
    else if (qty >= 5) volumeDiscount = 0.90;

    const totalEstimate = Math.round(qty * baseRate * matFactor * speedFactor * volumeDiscount);
    estimatePriceValue.textContent = `$${totalEstimate.toLocaleString()}.00`;
  }

  [quoteTech, quoteMaterial, quoteQuantity, quoteTurnaround].forEach(field => {
    if (field) {
      field.addEventListener('input', recalculateQuote);
      field.addEventListener('change', recalculateQuote);
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  const consoleInstantQuoteTrigger = document.getElementById('consoleInstantQuoteTrigger');
  const consoleQuoteBtn = document.getElementById('consoleQuoteBtn');

  [servicesHeroQuoteBtn, ctaQuoteBtn, consoleInstantQuoteTrigger, consoleQuoteBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        recalculateQuote();
        openModal(quoteModal);
      });
    }
  });

  if (quoteModalCloseBtn && quoteModal) {
    quoteModalCloseBtn.addEventListener('click', () => closeModal(quoteModal));
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeModal(quoteModal);
    });
  }

  if (loginHeaderBtn) {
    loginHeaderBtn.addEventListener('click', () => { window.location.href = 'login.html'; });
  }

  if (loginModalCloseBtn && loginModal) {
    loginModalCloseBtn.addEventListener('click', () => closeModal(loginModal));
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) closeModal(loginModal);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (quoteModal && quoteModal.classList.contains('active')) closeModal(quoteModal);
      if (loginModal && loginModal.classList.contains('active')) closeModal(loginModal);
    }
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(quoteModal);
      showToast('Quote request submitted! Engineering team will respond within 2 hours.', 'success');
      quoteForm.reset();
      recalculateQuote();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      showToast('Welcome back to the PrintNexa Engineering Portal!', 'success');
      loginForm.reset();
    });
  }

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'info') iconClass = 'fa-solid fa-circle-info';
    if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('visible');
    }, 20);

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 4000);
  }

  window.printNexaToast = showToast;

})();
