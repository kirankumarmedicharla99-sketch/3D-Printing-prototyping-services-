
document.addEventListener('DOMContentLoaded', () => {

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  const ctaBgImg = document.getElementById('ctaBgImg');

  const themeImages = {
    light: {
      cta: 'assets/cta_helmet_light.jpg'
    },
    dark: {
      cta: 'assets/cta_helmet_dark.jpg'
    }
  };

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('printnexa_theme', theme);

    const assetSet = themeImages[theme];
    if (assetSet) {
      if (ctaBgImg) ctaBgImg.src = assetSet.cta;
    }
  }

  const savedTheme = localStorage.getItem('printnexa_theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');

  function applyRTL(isRtl) {
    if (isRtl) {
      htmlRoot.setAttribute('dir', 'rtl');
      if (rtlBtnText) rtlBtnText.textContent = 'LTR';
      localStorage.setItem('printnexa_rtl', 'true');
    } else {
      htmlRoot.setAttribute('dir', 'ltr');
      if (rtlBtnText) rtlBtnText.textContent = 'RTL';
      localStorage.setItem('printnexa_rtl', 'false');
    }
  }

  const savedRTL = localStorage.getItem('printnexa_rtl') === 'true';
  applyRTL(savedRTL);

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const isCurrentlyRtl = htmlRoot.getAttribute('dir') === 'rtl';
      applyRTL(!isCurrentlyRtl);
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

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

  const quoteModal = document.getElementById('quoteModal');
  const videoModal = document.getElementById('videoModal');
  const loginModal = document.getElementById('loginModal');

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

  const quoteTriggers = [
    document.getElementById('aboutHeroQuoteBtn'),
    document.getElementById('ctaGetQuoteBtn'),
    document.getElementById('footerContactBtn')
  ];

  quoteTriggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => openModal(quoteModal));
    }
  });

  const aboutHeroWatchBtn = document.getElementById('aboutHeroWatchBtn');
  if (aboutHeroWatchBtn) {
    aboutHeroWatchBtn.addEventListener('click', () => openModal(videoModal));
  }

  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  if (loginHeaderBtn) {
    loginHeaderBtn.addEventListener('click', () => { window.location.href = 'login.html'; });
  }

  const closeButtons = [
    { btn: document.getElementById('quoteModalCloseBtn'), modal: quoteModal },
    { btn: document.getElementById('videoModalCloseBtn'), modal: videoModal },
    { btn: document.getElementById('loginModalCloseBtn'), modal: loginModal }
  ];

  closeButtons.forEach(({ btn, modal }) => {
    if (btn && modal) {
      btn.addEventListener('click', () => closeModal(modal));
    }
  });

  [quoteModal, videoModal, loginModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [quoteModal, videoModal, loginModal].forEach(modal => {
        if (modal && modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  });

  const quoteTech = document.getElementById('quoteTech');
  const quoteMaterial = document.getElementById('quoteMaterial');
  const quoteQuantity = document.getElementById('quoteQuantity');
  const quoteTurnaround = document.getElementById('quoteTurnaround');
  const estimatePriceValue = document.getElementById('estimatePriceValue');

  const baseRates = { fdm: 18, sla: 32, sls: 48, dmls: 130 };
  const materialMultipliers = { pla: 1.0, abs: 1.25, nylon: 1.6, resin: 1.8, titanium: 3.5 };
  const turnaroundMultipliers = { standard: 1.0, express: 1.5, economy: 0.85 };

  function updateEstimate() {
    if (!quoteTech || !quoteMaterial || !quoteQuantity || !quoteTurnaround || !estimatePriceValue) return;

    const tech = quoteTech.value || 'fdm';
    const mat = quoteMaterial.value || 'pla';
    const qty = Math.max(1, parseInt(quoteQuantity.value, 10) || 1);
    const speed = quoteTurnaround.value || 'standard';

    const base = baseRates[tech] || 20;
    const matMult = materialMultipliers[mat] || 1.0;
    const speedMult = turnaroundMultipliers[speed] || 1.0;

    let volumeDiscount = 1.0;
    if (qty >= 50) volumeDiscount = 0.7;
    else if (qty >= 20) volumeDiscount = 0.8;
    else if (qty >= 5) volumeDiscount = 0.9;

    const total = base * matMult * speedMult * qty * volumeDiscount;
    estimatePriceValue.textContent = `$${total.toFixed(2)}`;
  }

  [quoteTech, quoteMaterial, quoteQuantity, quoteTurnaround].forEach(field => {
    if (field) {
      field.addEventListener('input', updateEstimate);
      field.addEventListener('change', updateEstimate);
    }
  });

  const quoteCalculatorForm = document.getElementById('quoteCalculatorForm');
  if (quoteCalculatorForm) {
    quoteCalculatorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(quoteModal);
      showToast('About Page: Quote request submitted to our engineering staff.', 'success');
      quoteCalculatorForm.reset();
      updateEstimate();
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      showToast('Logged in successfully! Redirecting...', 'success');
    });
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'warn') iconClass = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass}" style="color: var(--primary-orange);"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  const ctaTalkExpertsBtn = document.getElementById('ctaTalkExpertsBtn');
  if (ctaTalkExpertsBtn) {
    ctaTalkExpertsBtn.addEventListener('click', () => {
      openModal(quoteModal);
    });
  }

  const aboutCtaDropzone = document.getElementById('aboutCtaDropzone');
  if (aboutCtaDropzone && quoteModal) {
    aboutCtaDropzone.addEventListener('click', () => {
      openModal(quoteModal);
    });
    aboutCtaDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(quoteModal);
      }
    });
  }
});
