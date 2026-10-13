
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

  const locationTabs = document.querySelectorAll('.location-tab-btn');
  const locationCards = document.querySelectorAll('.location-card');
  const facilityMapFrame = document.getElementById('facilityMapFrame');
  const mapOverlayTitle = document.getElementById('mapOverlayTitle');
  const mapOverlaySub = document.getElementById('mapOverlaySub');

  const facilityData = {
    silicon: {
      title: 'Silicon Valley Innovation Hub',
      sub: 'Rapid Prototyping & Metrology Cleanroom',
      mapUrl: 'https://maps.google.com/maps?q=Sunnyvale,CA,USA&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    austin: {
      title: 'Austin Metals & Aerospace Center',
      sub: 'DMLS Metal Sintering & AS9100D Lab',
      mapUrl: 'https://maps.google.com/maps?q=Austin,TX,USA&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    munich: {
      title: 'Munich Additive Center of Excellence',
      sub: 'SLS Polymer Production & Vapor Smoothing',
      mapUrl: 'https://maps.google.com/maps?q=Munich,Germany&t=&z=13&ie=UTF8&iwloc=&output=embed'
    }
  };

  function selectFacility(key) {
    const data = facilityData[key];
    if (!data) return;

    locationTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-facility') === key);
    });

    locationCards.forEach(card => {
      card.classList.toggle('selected', card.getAttribute('data-facility') === key);
    });

    if (facilityMapFrame) facilityMapFrame.src = data.mapUrl;
    if (mapOverlayTitle) mapOverlayTitle.textContent = data.title;
    if (mapOverlaySub) mapOverlaySub.textContent = data.sub;
  }

  locationTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const facilityKey = tab.getAttribute('data-facility');
      selectFacility(facilityKey);
    });
  });

  locationCards.forEach(card => {
    card.addEventListener('click', () => {
      const facilityKey = card.getAttribute('data-facility');
      selectFacility(facilityKey);
    });
  });

  const dropzone = document.getElementById('fileDropzone');
  const fileInput = document.getElementById('cadFileInput');
  const dropzoneLabel = document.getElementById('dropzoneLabel');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const fileNames = Array.from(fileInput.files).map(f => f.name).join(', ');
        if (dropzoneLabel) {
          dropzoneLabel.textContent = `Attached: ${fileNames}`;
        }
        showToast('CAD Attached', `${fileInput.files.length} file(s) queued for geometric analysis.`, 'info');
      }
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        const fileNames = Array.from(fileInput.files).map(f => f.name).join(', ');
        if (dropzoneLabel) {
          dropzoneLabel.textContent = `Attached: ${fileNames}`;
        }
        showToast('CAD Uploaded', `${fileInput.files.length} file(s) dropped successfully.`, 'info');
      }
    });
  }

  const contactInquiryForm = document.getElementById('contactInquiryForm');
  const submitInquiryBtn = document.getElementById('submitInquiryBtn');

  if (contactInquiryForm) {
    contactInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('inquiryName');
      const emailInput = document.getElementById('inquiryEmail');
      const msgInput = document.getElementById('inquiryMessage');

      if (!nameInput?.value.trim()) {
        showToast('Name Required', 'Please enter your full name.', 'error');
        nameInput?.focus();
        return;
      }

      if (!emailInput?.value.trim()) {
        showToast('Email Required', 'Please enter your enterprise contact email.', 'error');
        emailInput?.focus();
        return;
      }

      if (submitInquiryBtn) {
        submitInquiryBtn.disabled = true;
        submitInquiryBtn.innerHTML = `
          <i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i>
          <span>Submitting Brief...</span>
        `;
      }

      setTimeout(() => {
        showToast(
          'Inquiry Submitted!',
          `Thank you ${nameInput.value.trim()}! An additive engineer will review your brief within 2 hours.`,
          'success',
          4000
        );

        contactInquiryForm.reset();
        if (dropzoneLabel) {
          dropzoneLabel.textContent = 'Drag & drop STEP, STL, IGES, or 3MF files';
        }
        if (submitInquiryBtn) {
          submitInquiryBtn.disabled = false;
          submitInquiryBtn.innerHTML = `
            <span>Send Inquiry &amp; Request Consultation</span>
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          `;
        }
      }, 1200);
    });
  }

  const faqCards = document.querySelectorAll('.faq-card-modern');
  faqCards.forEach(card => {
    const btn = card.querySelector('.faq-card-btn');
    const answer = card.querySelector('.faq-card-answer');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        faqCards.forEach(other => {
          if (other !== card) {
            other.classList.remove('open');
            const otherAns = other.querySelector('.faq-card-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isOpen) {
          card.classList.remove('open');
          answer.style.maxHeight = null;
        } else {
          card.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  if (faqCards.length > 0) {
    const firstFaq = faqCards[0];
    const firstAns = firstFaq.querySelector('.faq-card-answer');
    firstFaq.classList.add('open');
    if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
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

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(quoteModal);
      showToast('Custom Quote Received', 'Parameters submitted. Our team is generating your estimate.', 'success');
      quoteForm.reset();
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
