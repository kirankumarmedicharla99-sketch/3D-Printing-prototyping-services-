
document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;

  const navLinks = document.querySelectorAll('.dash-nav-link');
  const tabPanes = document.querySelectorAll('.dash-tab-pane');
  const dashSidebar = document.getElementById('dashSidebar');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const dashContentCanvas = document.getElementById('dashContentCanvas');
  const dashMainArea = document.querySelector('.dash-main-area');

  const dashThemeToggle = document.getElementById('dashThemeToggle');
  const dashThemeIcon = document.getElementById('dashThemeIcon');
  const dashRtlToggle = document.getElementById('dashRtlToggle');

  const notifDropdownBtn = document.getElementById('notifDropdownBtn');
  const notifDropdownMenu = document.getElementById('notifDropdownMenu');
  const clearNotifsBtn = document.getElementById('clearNotifsBtn');
  const notifBadge = document.getElementById('notifBadge');
  const notifList = document.getElementById('notifList');
  const notifViewOrdersLink = document.getElementById('notifViewOrdersLink');

  const profileDropdownBtn = document.getElementById('profileDropdownBtn');
  const profileDropdownMenu = document.getElementById('profileDropdownMenu');

  const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');
  const profileLogoutBtn = document.getElementById('profileLogoutBtn');
  const logoutModal = document.getElementById('logoutModal');
  const closeLogoutModalBtn = document.getElementById('closeLogoutModalBtn');
  const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');

  const invoiceModal = document.getElementById('invoiceModal');
  const closeInvoiceModalBtn = document.getElementById('closeInvoiceModalBtn');
  const invoiceModalId = document.getElementById('invoiceModalId');
  const invoiceModalPrice = document.getElementById('invoiceModalPrice');
  const printInvoiceBtn = document.getElementById('printInvoiceBtn');

  const cadDropzone = document.getElementById('cadDropzone');
  const cadFileInput = document.getElementById('cadFileInput');
  const browseFilesBtn = document.getElementById('browseFilesBtn');
  const dropzonePrompt = document.getElementById('dropzonePrompt');
  const dropzoneSelectedFile = document.getElementById('dropzoneSelectedFile');
  const selectedFileName = document.getElementById('selectedFileName');
  const selectedFileSize = document.getElementById('selectedFileSize');
  const uploadProgressFill = document.getElementById('uploadProgressFill');
  const uploadProgressPct = document.getElementById('uploadProgressPct');
  const removeFileBtn = document.getElementById('removeFileBtn');

  const technologySelect = document.getElementById('technologySelect');
  const materialSelect = document.getElementById('materialSelect');
  const finishSelect = document.getElementById('finishSelect');
  const quantityInput = document.getElementById('quantityInput');

  const dfmDimensions = document.getElementById('dfmDimensions');
  const dfmVolume = document.getElementById('dfmVolume');
  const dfmMass = document.getElementById('dfmMass');
  const dfmDuration = document.getElementById('dfmDuration');
  const priceSintering = document.getElementById('priceSintering');
  const priceMaterial = document.getElementById('priceMaterial');
  const priceQA = document.getElementById('priceQA');
  const totalEstimatePrice = document.getElementById('totalEstimatePrice');
  const submitCadJobBtn = document.getElementById('submitCadJobBtn');

  const stageFilterBtns = document.querySelectorAll('.stage-filter-btn');
  const printJobsContainer = document.getElementById('printJobsContainer');
  const activeJobsBadge = document.getElementById('activeJobsBadge');

  const orderSearchInput = document.getElementById('orderSearchInput');
  const orderStatusFilter = document.getElementById('orderStatusFilter');
  const ordersTableBody = document.getElementById('ordersTableBody');

  const savedTheme = localStorage.getItem('printnexa_theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const savedDir = localStorage.getItem('printnexa_dir') || 'ltr';
  htmlEl.setAttribute('dir', savedDir);

  function updateThemeIcon(theme) {
    if (!dashThemeIcon) return;
    if (theme === 'dark') {
      dashThemeIcon.classList.remove('fa-moon');
      dashThemeIcon.classList.add('fa-sun');
    } else {
      dashThemeIcon.classList.remove('fa-sun');
      dashThemeIcon.classList.add('fa-moon');
    }
  }

  if (dashThemeToggle) {
    dashThemeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('printnexa_theme', next);
      updateThemeIcon(next);
    });
  }

  if (dashRtlToggle) {
    dashRtlToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      htmlEl.setAttribute('dir', next);
      localStorage.setItem('printnexa_dir', next);
    });
  }

  function switchTab(tabId) {

    navLinks.forEach(link => {
      if (link.getAttribute('data-tab') === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === `tab${capitalize(tabId)}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    if (dashMainArea) {
      dashMainArea.scrollTop = 0;
    }

    closeMobileSidebar();
  }

  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetTab = link.getAttribute('data-tab');
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });

  if (notifViewOrdersLink) {
    notifViewOrdersLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllDropdowns();
      switchTab('orders');
    });
  }

  window.dashApp = {
    switchTab,
    reorderPart: (partName) => {
      switchTab('upload');
      if (selectedFileName) {
        selectedFileName.textContent = `${partName.toLowerCase().replace(/\s+/g, '_')}_reorder.step`;
        showSelectedFile();
      }
    }
  };

  function openMobileSidebar() {
    if (dashSidebar) dashSidebar.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('show');
  }

  function closeMobileSidebar() {
    if (dashSidebar) dashSidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('show');
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileSidebar);
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeMobileSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeMobileSidebar);
  }

  if (dashSidebar) {
    dashSidebar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileSidebar();
      });
    });
  }

  function closeAllDropdowns() {
    if (notifDropdownMenu) notifDropdownMenu.classList.remove('show');
    if (notifDropdownBtn) notifDropdownBtn.setAttribute('aria-expanded', 'false');

    if (profileDropdownMenu) profileDropdownMenu.classList.remove('show');
    if (profileDropdownBtn) profileDropdownBtn.setAttribute('aria-expanded', 'false');
  }

  if (notifDropdownBtn && notifDropdownMenu) {
    notifDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = notifDropdownMenu.classList.contains('show');
      closeAllDropdowns();
      if (!isOpen) {
        notifDropdownMenu.classList.add('show');
        notifDropdownBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  if (clearNotifsBtn && notifBadge && notifList) {
    clearNotifsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const unreadItems = notifList.querySelectorAll('.notif-item.unread');
      unreadItems.forEach(item => item.classList.remove('unread'));
      notifBadge.style.display = 'none';
    });
  }

  if (profileDropdownBtn && profileDropdownMenu) {
    profileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = profileDropdownMenu.classList.contains('show');
      closeAllDropdowns();
      if (!isOpen) {
        profileDropdownMenu.classList.add('show');
        profileDropdownBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dash-dropdown-anchor')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      closeModal(invoiceModal);
      closeModal(logoutModal);
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  [sidebarLogoutBtn, profileLogoutBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllDropdowns();
        openModal(logoutModal);
      });
    }
  });

  [closeLogoutModalBtn, cancelLogoutBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => closeModal(logoutModal));
    }
  });

  if (logoutModal) {
    logoutModal.addEventListener('click', (e) => {
      if (e.target === logoutModal) closeModal(logoutModal);
    });
  }

  document.querySelectorAll('.view-invoice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const orderId = btn.getAttribute('data-order') || 'PNX-8924';
      const row = btn.closest('tr');
      const price = row ? row.querySelector('.price-cell')?.textContent : '$1,450.00';

      if (invoiceModalId) invoiceModalId.textContent = `INVOICE #${orderId}`;
      if (invoiceModalPrice) invoiceModalPrice.textContent = price;

      openModal(invoiceModal);
    });
  });

  if (closeInvoiceModalBtn) {
    closeInvoiceModalBtn.addEventListener('click', () => closeModal(invoiceModal));
  }

  if (invoiceModal) {
    invoiceModal.addEventListener('click', (e) => {
      if (e.target === invoiceModal) closeModal(invoiceModal);
    });
  }

  if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const MATERIAL_PRICES = {
    inconel718: { base: 380, material: 145, qa: 65, mass: 1332, name: 'Inconel 718 (Nickel Superalloy)' },
    titaniumTi64: { base: 420, material: 195, qa: 75, mass: 720, name: 'Titanium Ti-6Al-4V Grade 23' },
    pa12: { base: 120, material: 45, qa: 30, mass: 180, name: 'PA12 Carbon-Reinforced Nylon' },
    ultem9085: { base: 190, material: 75, qa: 40, mass: 210, name: 'ULTEM 9085 PEI Flame Retardant' },
    clearResin: { base: 160, material: 55, qa: 35, mass: 195, name: 'Clear High-Temp Optical Resin' }
  };

  function updateDfmCalculation() {
    const matKey = materialSelect ? materialSelect.value : 'inconel718';
    const matData = MATERIAL_PRICES[matKey] || MATERIAL_PRICES.inconel718;
    const qty = parseInt(quantityInput?.value, 10) || 1;

    let finishMultiplier = 1.0;
    if (finishSelect) {
      if (finishSelect.value === 'vapor') finishMultiplier = 1.25;
      else if (finishSelect.value === 'cnc') finishMultiplier = 1.45;
      else if (finishSelect.value === 'beadblast') finishMultiplier = 1.08;
    }

    const calculatedBase = Math.round(matData.base * finishMultiplier * qty);
    const calculatedMat = Math.round(matData.material * qty);
    const calculatedQA = Math.round(matData.qa * qty);
    const total = calculatedBase + calculatedMat + calculatedQA;

    if (priceSintering) priceSintering.textContent = `$${calculatedBase.toFixed(2)}`;
    if (priceMaterial) priceMaterial.textContent = `$${calculatedMat.toFixed(2)}`;
    if (priceQA) priceQA.textContent = `$${calculatedQA.toFixed(2)}`;
    if (totalEstimatePrice) totalEstimatePrice.textContent = `$${total.toFixed(2)}`;

    if (dfmMass) dfmMass.textContent = `${(matData.mass * qty).toLocaleString()} g (${matData.name.split(' ')[0]})`;
  }

  [technologySelect, materialSelect, finishSelect, quantityInput].forEach(control => {
    if (control) {
      control.addEventListener('change', updateDfmCalculation);
      control.addEventListener('input', updateDfmCalculation);
    }
  });

  function showSelectedFile(file) {
    if (dropzonePrompt) dropzonePrompt.style.display = 'none';
    if (dropzoneSelectedFile) dropzoneSelectedFile.style.display = 'block';

    if (file && selectedFileName) {
      selectedFileName.textContent = file.name;
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      if (selectedFileSize) {
        selectedFileSize.textContent = `${sizeMb} MB • Validated Solid Boundary Body`;
      }
    }

    if (uploadProgressFill && uploadProgressPct) {
      uploadProgressFill.style.width = '0%';
      uploadProgressPct.textContent = '0% Slicing...';
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        uploadProgressFill.style.width = `${progress}%`;
        uploadProgressPct.textContent = `${progress}% Sliced`;
        if (progress >= 100) {
          clearInterval(interval);
          uploadProgressPct.textContent = '100% Sliced & Watertight';
        }
      }, 100);
    }

    updateDfmCalculation();
  }

  function resetDropzone() {
    if (dropzonePrompt) dropzonePrompt.style.display = 'block';
    if (dropzoneSelectedFile) dropzoneSelectedFile.style.display = 'none';
    if (cadFileInput) cadFileInput.value = '';
  }

  if (removeFileBtn) {
    removeFileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetDropzone();
    });
  }

  if (cadFileInput) {
    cadFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        showSelectedFile(e.target.files[0]);
      }
    });
  }

  if (cadDropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      cadDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        cadDropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      cadDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        cadDropzone.classList.remove('dragover');
      }, false);
    });

    cadDropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files[0]) {
        showSelectedFile(files[0]);
      }
    });
  }

  if (submitCadJobBtn) {
    submitCadJobBtn.addEventListener('click', () => {
      const fileName = selectedFileName ? selectedFileName.textContent : 'combustion_chamber_flange_v4.step';
      const orderPrice = totalEstimatePrice ? totalEstimatePrice.textContent : '$590.00';

      submitCadJobBtn.disabled = true;
      submitCadJobBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Submitting to Production Slicing...</span>';

      setTimeout(() => {
        submitCadJobBtn.disabled = false;
        submitCadJobBtn.innerHTML = '<span>Submit for Production Slicing</span> <i class="fa-solid fa-arrow-right"></i>';

        const newJobId = `PNX-JOB-${Math.floor(4092 + Math.random() * 50)}`;
        const newJobCard = document.createElement('div');
        newJobCard.className = 'job-card-panel';
        newJobCard.setAttribute('data-stage', 'cad');
        newJobCard.innerHTML = `
          <div class="job-card-top-row">
            <div class="job-id-col">
              <div class="job-id-title-group">
                <span class="job-code">#${newJobId}</span>
                <h3 class="job-part-title">${fileName.replace(/\.[^/.]+$/, '').replace(/_/g, ' ')}</h3>
              </div>
              <span class="job-specs-tag">${technologySelect?.value || 'DMLS'} &bull; ${materialSelect?.options[materialSelect.selectedIndex]?.text.split('(')[0] || 'Inconel 718'} &bull; Priority Queue</span>
            </div>
            <div class="job-status-pill status-cad">
              <i class="fa-solid fa-check"></i>
              <span>CAD SLICED &bull; QUEUED</span>
            </div>
          </div>
          <div class="stage-stepper-tracker">
            <div class="step-node step-completed">
              <div class="step-circle"><i class="fa-solid fa-check"></i></div>
              <span class="step-label">CAD Review</span>
            </div>
            <div class="step-line"></div>
            <div class="step-node step-active">
              <div class="step-circle">2</div>
              <span class="step-label">Slicing</span>
            </div>
            <div class="step-line"></div>
            <div class="step-node">
              <div class="step-circle">3</div>
              <span class="step-label">Printing</span>
            </div>
            <div class="step-line"></div>
            <div class="step-node">
              <div class="step-circle">4</div>
              <span class="step-label">Post-Processing</span>
            </div>
            <div class="step-line"></div>
            <div class="step-node">
              <div class="step-circle">5</div>
              <span class="step-label">Metrology QA</span>
            </div>
            <div class="step-line"></div>
            <div class="step-node">
              <div class="step-circle">6</div>
              <span class="step-label">Dispatched</span>
            </div>
          </div>
          <div class="job-telemetry-strip">
            <div class="telemetry-stat">
              <span class="lbl">Order Value</span>
              <span class="val text-orange">${orderPrice}</span>
            </div>
            <div class="telemetry-stat">
              <span class="lbl">Estimated Chamber Start</span>
              <span class="val">In 35 mins</span>
            </div>
            <div class="telemetry-stat">
              <span class="lbl">Assigned Fleet</span>
              <span class="val">EOS M400 Cluster</span>
            </div>
            <div class="telemetry-stat">
              <span class="lbl">Status</span>
              <span class="val text-success">Automated Mesh Checks Passed</span>
            </div>
          </div>
        `;

        if (printJobsContainer) {
          printJobsContainer.prepend(newJobCard);
        }

        if (activeJobsBadge) {
          const currentBadge = parseInt(activeJobsBadge.textContent, 10) || 7;
          activeJobsBadge.textContent = currentBadge + 1;
        }

        switchTab('jobs');
      }, 900);
    });
  }

  stageFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterStage = btn.getAttribute('data-stage') || 'all';
      const jobCards = printJobsContainer ? printJobsContainer.querySelectorAll('.job-card-panel') : [];

      jobCards.forEach(card => {
        const cardStage = card.getAttribute('data-stage');
        if (filterStage === 'all' || cardStage === filterStage) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  function filterOrdersTable() {
    const query = orderSearchInput ? orderSearchInput.value.toLowerCase().trim() : '';
    const status = orderStatusFilter ? orderStatusFilter.value : 'all';

    if (!ordersTableBody) return;
    const rows = ordersTableBody.querySelectorAll('tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const rowStatus = row.getAttribute('data-status') || '';

      const matchesQuery = query === '' || text.includes(query);
      const matchesStatus = status === 'all' || rowStatus === status;

      if (matchesQuery && matchesStatus) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  if (orderSearchInput) {
    orderSearchInput.addEventListener('input', filterOrdersTable);
  }

  if (orderStatusFilter) {
    orderStatusFilter.addEventListener('change', filterOrdersTable);
  }

  const chartTimeBtns = document.querySelectorAll('.chart-time-btn');
  chartTimeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      chartTimeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

});
