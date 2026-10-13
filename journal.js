
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

  const journalSearchInput = document.getElementById('journalSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const categoryTabBtns = document.querySelectorAll('.jrn-tab-btn');
  const journalCards = document.querySelectorAll('.journal-card');

  const loginHeaderBtn = document.getElementById('loginHeaderBtn');
  const loginModal = document.getElementById('loginModal');
  const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');
  const loginForm = document.getElementById('loginForm');
  const journalNewsletterForm = document.getElementById('journalNewsletterForm');
  const journalCtaSubscribeForm = document.getElementById('journalCtaSubscribeForm');
  const toastContainer = document.getElementById('toastContainer');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    });
  }

  if (rtlToggleBtn) {
    if (rtlBtnText) {
      rtlBtnText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
    }
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = htmlEl.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      htmlEl.setAttribute('dir', newDir);
      localStorage.setItem(STORAGE_KEYS.DIR, newDir);
      if (rtlBtnText) rtlBtnText.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) siteHeader.classList.add('scrolled');
      else siteHeader.classList.remove('scrolled');
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

  let activeFilterCategory = 'all';

  function applyFilters() {
    const searchTerm = (journalSearchInput ? journalSearchInput.value : '').toLowerCase().trim();

    journalCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.jrn-card-title') ? card.querySelector('.jrn-card-title').textContent : '').toLowerCase();
      const cardExcerpt = (card.querySelector('.jrn-card-excerpt') ? card.querySelector('.jrn-card-excerpt').textContent : '').toLowerCase();
      const cardCategory = (card.querySelector('.jrn-category-tag') ? card.querySelector('.jrn-category-tag').textContent : '').toLowerCase();
      const author = (card.querySelector('.jrn-author-name') ? card.querySelector('.jrn-author-name').textContent : '').toLowerCase();

      const matchesCategory = (activeFilterCategory === 'all' || category === activeFilterCategory);
      const matchesSearch = !searchTerm || 
        cardTitle.includes(searchTerm) || 
        cardExcerpt.includes(searchTerm) || 
        cardCategory.includes(searchTerm) ||
        author.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 20);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px) scale(0.96)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  }

  if (journalSearchInput) {
    journalSearchInput.addEventListener('input', () => {
      if (searchClearBtn) {
        if (journalSearchInput.value.length > 0) {
          searchClearBtn.classList.add('visible');
        } else {
          searchClearBtn.classList.remove('visible');
        }
      }
      applyFilters();
    });
  }

  if (searchClearBtn && journalSearchInput) {
    searchClearBtn.addEventListener('click', () => {
      journalSearchInput.value = '';
      searchClearBtn.classList.remove('visible');
      journalSearchInput.focus();
      applyFilters();
    });
  }

  categoryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilterCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  journalCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; 
      const link = card.querySelector('.btn-view-journal') || card.querySelector('.jrn-card-title a');
      if (link && link.href) {
        window.location.href = link.href;
      }
    });
  });

  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
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
      if (loginModal && loginModal.classList.contains('active')) closeModal(loginModal);
    }
  });

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(loginModal);
      showToast('Welcome to the PrintNexa Research Archive Portal!', 'success');
      loginForm.reset();
    });
  }

  if (journalNewsletterForm) {
    journalNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! You are subscribed to our monthly DFAM design guides.', 'success');
      journalNewsletterForm.reset();
    });
  }

  if (journalCtaSubscribeForm) {
    journalCtaSubscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our bi-weekly additive research dispatch.', 'success');
      journalCtaSubscribeForm.reset();
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
    }, 3800);
  }

  window.printNexaToast = showToast;

})();
