
document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');

  const savedTheme = localStorage.getItem('printnexa_theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);

  const savedDir = localStorage.getItem('printnexa_dir') || 'ltr';
  htmlEl.setAttribute('dir', savedDir);
  if (rtlBtnText) rtlBtnText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('printnexa_theme', next);
    });
  }

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      htmlEl.setAttribute('dir', next);
      localStorage.setItem('printnexa_dir', next);
      if (rtlBtnText) rtlBtnText.textContent = next === 'rtl' ? 'LTR' : 'RTL';
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

  const billingToggleBtn = document.getElementById('billingToggleBtn');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');

  const priceProto = document.getElementById('priceProto');
  const periodProto = document.getElementById('periodProto');

  const priceProd = document.getElementById('priceProd');
  const periodProd = document.getElementById('periodProd');

  let isAnnual = false;

  function updatePricingView() {
    if (isAnnual) {
      billingToggleBtn?.classList.add('annual');
      monthlyLabel?.classList.remove('active');
      annualLabel?.classList.add('active');

      if (priceProto) priceProto.textContent = '199';
      if (periodProto) periodProto.textContent = '/ month (billed annually)';

      if (priceProd) priceProd.textContent = '639';
      if (periodProd) periodProd.textContent = '/ month (billed annually)';
    } else {
      billingToggleBtn?.classList.remove('annual');
      monthlyLabel?.classList.add('active');
      annualLabel?.classList.remove('active');

      if (priceProto) priceProto.textContent = '249';
      if (periodProto) periodProto.textContent = '/ month';

      if (priceProd) priceProd.textContent = '799';
      if (periodProd) periodProd.textContent = '/ month';
    }
  }

  if (billingToggleBtn) {
    billingToggleBtn.addEventListener('click', () => {
      isAnnual = !isAnnual;
      updatePricingView();
      showToast(
        isAnnual ? 'Annual Savings Applied' : 'Monthly Billing Selected',
        isAnnual ? 'Save 20% on all additive manufacturing plans with annual commitment.' : 'Monthly standard rates loaded.',
        'info'
      );
    });
  }

  if (monthlyLabel) {
    monthlyLabel.addEventListener('click', () => {
      if (isAnnual) {
        isAnnual = false;
        updatePricingView();
      }
    });
  }

  if (annualLabel) {
    annualLabel.addEventListener('click', () => {
      if (!isAnnual) {
        isAnnual = true;
        updatePricingView();
      }
    });
  }

  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');

    if (questionBtn && answerPanel) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const otherPanel = other.querySelector('.faq-answer-panel');
            if (otherPanel) otherPanel.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          answerPanel.style.maxHeight = null;
        } else {
          item.classList.add('open');
          answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
        }
      });
    }
  });

  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstPanel = firstItem.querySelector('.faq-answer-panel');
    firstItem.classList.add('open');
    if (firstPanel) firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px';
  }

  const quoteModal = document.getElementById('quoteModal');
  const quoteModalCloseBtn = document.getElementById('quoteModalCloseBtn');
  const quoteForm = document.getElementById('quoteCalculatorForm');

  const videoModal = document.getElementById('videoModal');
  const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');

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

  document.querySelectorAll('.open-quote-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tierName = btn.getAttribute('data-tier') || 'Custom';
      openModal(quoteModal);
      const notesField = document.getElementById('quoteNotes');
      if (notesField && tierName) {
        notesField.value = `Interested in ${tierName} plan.`;
      }
    });
  });

  const ctaGetQuoteBtn = document.getElementById('ctaGetQuoteBtn');
  if (ctaGetQuoteBtn) {
    ctaGetQuoteBtn.addEventListener('click', () => openModal(quoteModal));
  }

  const ctaTalkExpertsBtn = document.getElementById('ctaTalkExpertsBtn');
  if (ctaTalkExpertsBtn) {
    ctaTalkExpertsBtn.addEventListener('click', () => {
      openModal(quoteModal);
      const notesField = document.getElementById('quoteNotes');
      if (notesField) {
        notesField.value = 'Requesting direct consultation with Additive Application Engineers.';
      }
    });
  }

  const footerContactBtn = document.getElementById('footerContactBtn');
  if (footerContactBtn) {
    footerContactBtn.addEventListener('click', () => openModal(quoteModal));
  }

  if (quoteModalCloseBtn) quoteModalCloseBtn.addEventListener('click', () => closeModal(quoteModal));
  if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', () => closeModal(videoModal));

  [quoteModal, videoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  const quoteTech = document.getElementById('quoteTech');
  const quoteMaterial = document.getElementById('quoteMaterial');
  const quoteQuantity = document.getElementById('quoteQuantity');
  const quoteTurnaround = document.getElementById('quoteTurnaround');
  const estimatePriceValue = document.getElementById('estimatePriceValue');

  function recalculateQuote() {
    if (!estimatePriceValue) return;
    const baseRates = { fdm: 35, sla: 55, sls: 90, dmls: 280 };
    const materialMultipliers = { pla: 1.0, abs: 1.2, nylon: 1.8, resin: 1.6, titanium: 4.5 };
    const turnaroundMultipliers = { standard: 1.0, express: 1.5, economy: 0.85 };

    const tech = quoteTech ? quoteTech.value : 'fdm';
    const mat = quoteMaterial ? quoteMaterial.value : 'pla';
    const turn = quoteTurnaround ? quoteTurnaround.value : 'standard';
    const qty = quoteQuantity ? parseInt(quoteQuantity.value, 10) || 1 : 1;

    const base = baseRates[tech] || 35;
    const matMult = materialMultipliers[mat] || 1.0;
    const turnMult = turnaroundMultipliers[turn] || 1.0;

    let subtotal = base * matMult * turnMult * qty;

    if (qty > 10) subtotal *= 0.85;
    if (qty > 50) subtotal *= 0.75;

    estimatePriceValue.textContent = `$${subtotal.toFixed(2)}`;
  }

  [quoteTech, quoteMaterial, quoteQuantity, quoteTurnaround].forEach(field => {
    if (field) field.addEventListener('change', recalculateQuote);
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(quoteModal);
      showToast('Quote Request Received', 'Our additive engineering specialists are reviewing your parameters.', 'success');
      quoteForm.reset();
      recalculateQuote();
    });
  }

  const toastContainer = document.getElementById('toastContainer');

  function showToast(title, message, type = 'info', duration = 3500) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast-card toast-${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${icon} toast-icon" aria-hidden="true"></i>
      <div class="toast-body">
        <h5 class="toast-title">${title}</h5>
        <p class="toast-desc">${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, duration);
  }
});
